import React, { useState, useEffect, useRef } from 'react';
import { GithubOutlined, BookOutlined, CodeOutlined, CloudServerOutlined, 
        DatabaseOutlined, ToolOutlined, AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import './blog-nav.css';

const BlogNav = ({ activeKey, onSelect }) => {
  const [selectedKey, setSelectedKey] = useState(activeKey || 'all');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRef = useRef(null);

  const categories = [
    { key: 'all', label: '首页', icon: <HomeOutlined /> },
    { key: 'frontend', label: '前端', icon: <CodeOutlined /> },
    { key: 'backend', label: '后端', icon: <CloudServerOutlined /> },
    { key: 'database', label: '数据库', icon: <DatabaseOutlined /> },
    { key: 'server', label: '服务器', icon: <GithubOutlined /> },
    { key: 'devops', label: '运维', icon: <ToolOutlined /> },
    { key: 'others', label: '其他', icon: <AppstoreOutlined /> },
  ];

  const handleSelect = (key) => {
    setSelectedKey(key);
    if (onSelect) {
      onSelect(key);
    }
  };

  const updateIndicator = () => {
    if (!navRef.current) return;
    
    // 找到当前选中的元素
    const element = navRef.current.querySelector(`[data-key="${selectedKey}"]`);
    if (element) {
      // 获取导航容器的位置信息
      const navRect = navRef.current.getBoundingClientRect();
      // 获取当前选中元素的位置信息
      const elementRect = element.getBoundingClientRect();
      
      // 计算指示器的位置 - 圆点应该位于导航项的中心位置
      const left = elementRect.left - navRect.left + (elementRect.width / 2) - 3; // 减去圆点宽度的一半(6px/2)
      
      setIndicatorStyle({
        transform: `translateX(${left}px)`,
        opacity: 1
      });
    }
  };

  // 更新指示器位置的函数
  useEffect(() => {
    updateIndicator();
    
    // 处理窗口大小变化
    const handleResize = () => {
      updateIndicator();
    };
    
    window.addEventListener('resize', handleResize);
    
    // 指示器更新可能需要等待DOM完全渲染
    const timer = setTimeout(updateIndicator, 100);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [selectedKey]);

  // 组件首次挂载后更新指示器
  useEffect(() => {
    updateIndicator();
  }, []);

  return (
    <nav className="blog-nav-container">
      <div className="blog-nav" ref={navRef}>
        {categories.map((category) => (
          <div
            key={category.key}
            data-key={category.key}
            className={`blog-nav-item ${selectedKey === category.key ? 'active' : ''}`}
            onClick={() => handleSelect(category.key)}
          >
            <div className="nav-icon">{category.icon}</div>
            <span>{category.label}</span>
          </div>
        ))}
        <div className="nav-indicator" style={indicatorStyle}></div>
      </div>
    </nav>
  );
};

export default BlogNav; 