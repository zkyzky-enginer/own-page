import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Avatar, Tag, Divider, Tooltip, Button, 
  Typography, Skeleton, Space, Badge, message, Row, Col, Card
} from 'antd';
import { 
  CalendarOutlined, EyeOutlined, HeartOutlined, HeartFilled,
  MessageOutlined, ShareAltOutlined, ArrowLeftOutlined,
  BookOutlined, ClockCircleOutlined, UserOutlined
} from '@ant-design/icons';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './blog-detail.css';

const { Title, Paragraph, Text } = Typography;

// 模拟数据 - 后续可以通过API获取
const mockArticle = {
  id: 1,
  title: "深入理解React Hooks及其最佳实践",
  coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  content: `
  <h2>React Hooks简介</h2>
  <p>Hooks是React 16.8中新增的特性，它可以让你在不编写class的情况下使用state以及其他的React特性。</p>
  
  <p>使用Hooks的基本规则：</p>
  <ul>
    <li>只在最顶层使用Hooks</li>
    <li>只在React函数中调用Hooks</li>
  </ul>
  
  <h3>useState</h3>
  <p><code>useState</code>是最基本的Hook，它允许我们在函数组件中添加状态。</p>
  
  <pre><code class="language-jsx">
  import React, { useState } from 'react';
  
  function Counter() {
    const [count, setCount] = useState(0);
    
    return (
      &lt;div&gt;
        &lt;p&gt;You clicked {count} times&lt;/p&gt;
        &lt;button onClick={() => setCount(count + 1)}&gt;
          Click me
        &lt;/button&gt;
      &lt;/div&gt;
    );
  }
  </code></pre>
  
  <h3>useEffect</h3>
  <p><code>useEffect</code>帮助你在函数组件中执行副作用操作，它相当于class组件中的生命周期方法的组合。</p>
  
  <pre><code class="language-jsx">
  import React, { useState, useEffect } from 'react';
  
  function Example() {
    const [count, setCount] = useState(0);
    
    // 相当于componentDidMount和componentDidUpdate
    useEffect(() => {
      document.title = \`You clicked \${count} times\`;
      
      // 返回的函数相当于componentWillUnmount
      return () => {
        document.title = 'React App';
      };
    }, [count]); // 只在count改变时执行
    
    return (
      &lt;div&gt;
        &lt;p&gt;You clicked {count} times&lt;/p&gt;
        &lt;button onClick={() => setCount(count + 1)}&gt;
          Click me
        &lt;/button&gt;
      &lt;/div&gt;
    );
  }
  </code></pre>
  
  <h2>自定义Hook</h2>
  <p>自定义Hook是一种重用状态逻辑的机制，它不复用state本身，而是复用状态逻辑。</p>
  
  <pre><code class="language-jsx">
  import { useState, useEffect } from 'react';
  
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    return windowSize;
  }
  
  // 使用自定义Hook
  function MyComponent() {
    const { width, height } = useWindowSize();
    
    return (
      &lt;div&gt;
        Window size: {width} x {height}
      &lt;/div&gt;
    );
  }
  </code></pre>
  
  <h2>最佳实践</h2>
  <ol>
    <li>使用多个useState而不是一个大的状态对象</li>
    <li>合理设置useEffect的依赖数组</li>
    <li>使用useCallback和useMemo优化性能</li>
    <li>自定义Hooks抽象出常用的状态逻辑</li>
    <li>使用useReducer处理复杂的状态逻辑</li>
  </ol>
  
  <p>在大型应用中，合理使用Hooks可以显著提高代码的可读性和可维护性。</p>
  `,
  author: {
    name: "张三",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  publishDate: "2023-08-15",
  readingTime: "8分钟",
  views: 1243,
  likes: 78,
  comments: 24,
  tags: ["React", "Hooks", "前端开发", "JavaScript"],
  category: "前端开发",
  relatedArticles: [
    {
      id: 2,
      title: "React性能优化指南",
      coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "前端开发"
    },
    {
      id: 3,
      title: "使用React Context API管理全局状态",
      coverImage: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "前端开发"
    }
  ]
};

const BlogDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

  // 模拟API请求
  useEffect(() => {
    // 这里应该是真实的API请求，例如：
    // fetch(`/api/articles/${id}`).then(res => res.json()).then(data => {
    //   setArticle(data);
    //   setLoading(false);
    // });
    
    // 模拟加载延迟
    const timer = setTimeout(() => {
      setArticle(mockArticle);
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  // 代码高亮
  useEffect(() => {
    if (!loading) {
      Prism.highlightAll();
    }
  }, [loading]);

  // 处理点赞
  const handleLike = () => {
    setLiked(!liked);
    message.success(liked ? '已取消点赞' : '感谢您的点赞！');
    // 这里可以发送API请求更新点赞状态
  };

  // 渲染加载状态
  if (loading) {
    return (
      <div className="blog-detail-page">
        <div className="blog-detail-container">
          <Row gutter={24}>
            <Col xs={24} md={16}>
              <Skeleton active avatar paragraph={{ rows: 12 }} />
            </Col>
            <Col xs={24} md={8}>
              <Skeleton active paragraph={{ rows: 6 }} />
              <div style={{ marginTop: '20px' }}></div>
              <Skeleton active paragraph={{ rows: 6 }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page">
      {/* 几何背景元素 */}
      <div className="geo-elements">
        <div className="geo-circle-1"></div>
        <div className="geo-triangle"></div>
        <div className="geo-line"></div>
        <div className="geo-dots"></div>
      </div>
      
      <div className="blog-detail-container">
        {/* 返回按钮 */}
        <div className="back-button">
          <Link to="/blog">
            <Button type="text" icon={<ArrowLeftOutlined />}>返回博客列表</Button>
          </Link>
        </div>
        
        <Row gutter={24}>
          {/* 主内容区 */}
          <Col xs={24} md={16} className="main-content-column">
            {/* 文章头部 */}
            <div className="blog-detail-header">
              <div className="category-badge">
                <Tag color="#ff8c00">{article.category}</Tag>
              </div>
              
              <Title level={1}>{article.title}</Title>
              
              {/* 文章统计信息 - 在移动端显示 */}
              <div className="article-stats mobile-only">
                <Tooltip title="阅读量">
                  <Space>
                    <EyeOutlined />
                    <span>{article.views}</span>
                  </Space>
                </Tooltip>
                <Tooltip title={liked ? '取消点赞' : '点赞'}>
                  <Space className="stat-item clickable" onClick={handleLike}>
                    {liked ? <HeartFilled className="liked" /> : <HeartOutlined />}
                    <span>{liked ? article.likes + 1 : article.likes}</span>
                  </Space>
                </Tooltip>
                <Tooltip title="评论">
                  <Space>
                    <MessageOutlined />
                    <span>{article.comments}</span>
                  </Space>
                </Tooltip>
              </div>
            </div>
            
            {/* 封面图 */}
            <div className="cover-image">
              <img src={article.coverImage} alt={article.title} />
            </div>
            
            {/* 文章内容 */}
            <div className="blog-detail-content">
              <div 
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </Col>
          
          {/* 侧边栏 */}
          <Col xs={24} md={8} className="sidebar-column">
            {/* 作者信息卡片 */}
            <Card className="sidebar-card author-card">
              <div className="author-card-content">
                <Avatar src={article.author.avatar} size={64} />
                <div className="author-card-info">
                  <Text strong style={{ fontSize: '16px' }}>{article.author.name}</Text>
                  <div className="publish-info">
                    <div>
                      <Tooltip title="发布日期">
                        <CalendarOutlined /> <span>{article.publishDate}</span>
                      </Tooltip>
                    </div>
                    <div>
                      <Tooltip title="阅读时长">
                        <ClockCircleOutlined /> <span>{article.readingTime}</span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* 文章统计卡片 - 在桌面端显示 */}
            <Card className="sidebar-card stats-card desktop-only">
              <div className="stats-card-title">
                <Text strong>文章统计</Text>
              </div>
              <div className="stats-card-content">
                <div className="stat-item">
                  <EyeOutlined />
                  <span>{article.views} 阅读</span>
                </div>
                <div className="stat-item clickable" onClick={handleLike}>
                  {liked ? <HeartFilled className="liked" /> : <HeartOutlined />}
                  <span>{liked ? article.likes + 1 : article.likes} 点赞</span>
                </div>
                <div className="stat-item">
                  <MessageOutlined />
                  <span>{article.comments} 评论</span>
                </div>
                <div className="stat-item clickable">
                  <ShareAltOutlined />
                  <span>分享</span>
                </div>
              </div>
            </Card>
            
            {/* 文章标签卡片 */}
            <Card className="sidebar-card tags-card">
              <div className="tags-card-title">
                <BookOutlined /> <Text strong>文章标签</Text>
              </div>
              <div className="tags-card-content">
                {article.tags.map(tag => (
                  <Tag key={tag} color="#ff8c00" className="article-tag">
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
            
            {/* 评论区卡片 - 移到侧边栏 */}
            <Card className="sidebar-card comments-card">
              <div className="comments-card-title">
                <Space>
                  <MessageOutlined />
                  <Text strong>评论区</Text>
                  <Badge count={article.comments} style={{ backgroundColor: '#ff8c00' }} />
                </Space>
              </div>
              <div className="comments-card-content">
                <div className="comment-placeholder">
                  <Typography.Text type="secondary">评论功能即将上线，敬请期待...</Typography.Text>
                </div>
              </div>
            </Card>
            
            {/* 相关推荐卡片 */}
            <Card className="sidebar-card related-card">
              <div className="related-card-title">
                <Text strong>相关文章</Text>
              </div>
              <div className="related-card-content">
                {article.relatedArticles.map(related => (
                  <Link to={`/blog/detail/${related.id}`} key={related.id} className="related-link">
                    <div className="related-item-sidebar">
                      <img src={related.coverImage} alt={related.title} />
                      <div className="related-item-info">
                        <Text ellipsis={{ tooltip: related.title }}>{related.title}</Text>
                        <Tag color="#ff8c00">{related.category}</Tag>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogDetail;
