import './index.css';
import React, { useState, useEffect } from 'react';
import BlogList from './blog-list';
import BlogNav from './BlogNav';

// 定义博客内容组件
const BlogContent = ({ activeKey }) => {
	switch(activeKey) {
		case 'all':
			return <BlogList />;
		case 'frontend':
			return (
				<div className="blog-content-placeholder">
					<h2>前端开发文章</h2>
					<p>这里将展示与前端开发相关的文章...</p>
				</div>
			);
		case 'backend':
			return (
				<div className="blog-content-placeholder">
					<h2>后端开发文章</h2>
					<p>这里将展示与后端开发相关的文章...</p>
				</div>
			);
		case 'database':
			return (
				<div className="blog-content-placeholder">
					<h2>数据库文章</h2>
					<p>这里将展示与数据库相关的文章...</p>
				</div>
			);
		case 'server':
			return (
				<div className="blog-content-placeholder">
					<h2>服务器文章</h2>
					<p>这里将展示与服务器相关的文章...</p>
				</div>
			);
		case 'devops':
			return (
				<div className="blog-content-placeholder">
					<h2>运维文章</h2>
					<p>这里将展示与运维相关的文章...</p>
				</div>
			);
		case 'others':
			return (
				<div className="blog-content-placeholder">
					<h2>其他类别文章</h2>
					<p>这里将展示其他类别的文章...</p>
				</div>
			);
		default:
			return <BlogList />;
	}
};

// 添加内联动画样式
const animationStyles = `
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
  }
  
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.7; }
    50% { transform: scale(1.1); opacity: 0.5; }
  }
  
  @keyframes rotate-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes rotate-reverse {
    from { transform: rotate(15deg); }
    to { transform: rotate(-345deg); }
  }
  
  @keyframes width-pulse {
    0%, 100% { transform: scaleX(1); opacity: 0.5; }
    50% { transform: scaleX(0.95); opacity: 0.8; }
  }
  
  @keyframes scale-fade {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.2; }
  }
`;

// 几何背景元素组件 - 使用内联样式
const GeometricElements = () => {
	// 定义样式对象 
	const styles = {
		container: {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			zIndex: 0,
			pointerEvents: 'none',
		},
		circleTop: {
			position: 'absolute',
			top: '5%',
			left: '-5%',
			width: '25vw',
			height: '25vw',
			maxWidth: '400px',
			maxHeight: '400px',
			background: 'radial-gradient(circle at 30% 30%, rgba(255,140,0,0.2) 0%, rgba(254,163,52,0.1) 60%)',
			borderRadius: '50%',
			zIndex: 0,
			animation: 'pulse-slow 10s ease-in-out infinite',
		},
		triangle: {
			position: 'absolute',
			bottom: '-10%',
			right: '10%',
			width: '30vw',
			height: '30vw',
			maxWidth: '500px',
			maxHeight: '500px',
			background: 'conic-gradient(from 135deg at 50% 50%, rgba(255,140,0,0.15) 0%, rgba(254,163,52,0.05) 50%, rgba(255,255,255,0) 100%)',
			clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
			zIndex: 0,
			animation: 'rotate-slow 30s linear infinite',
		},
		line: {
			position: 'absolute',
			top: '50%',
			left: '-5%',
			width: '110%',
			height: '1px',
			background: 'linear-gradient(90deg, rgba(255,140,0,0) 0%, rgba(255,140,0,0.2) 20%, rgba(254,163,52,0.3) 50%, rgba(255,140,0,0.2) 80%, rgba(255,140,0,0) 100%)',
			zIndex: 0,
			transformOrigin: 'center',
			animation: 'width-pulse 15s ease-in-out infinite',
		},
		dots: {
			position: 'absolute',
			top: '10%',
			right: '5%',
			width: '20vw',
			height: '20vw',
			maxWidth: '300px',
			maxHeight: '300px',
			backgroundImage: 'radial-gradient(rgba(255,140,0,0.4) 1px, transparent 1px)',
			backgroundSize: '10px 10px',
			zIndex: 0,
			opacity: 0.8,
			transformOrigin: 'center',
			animation: 'scale-fade 20s ease-in-out infinite',
		},
		square: {
			position: 'absolute',
			bottom: '10%',
			left: '5%',
			width: '15vw',
			height: '15vw',
			maxWidth: '200px',
			maxHeight: '200px',
			border: '2px solid rgba(255,140,0,0.3)',
			transform: 'rotate(15deg)',
			zIndex: 0,
			animation: 'rotate-reverse 25s linear infinite',
		},
		ring: {
			position: 'absolute',
			bottom: '15%',
			right: '15%',
			width: '10vw',
			height: '10vw',
			maxWidth: '150px',
			maxHeight: '150px',
			border: '6px solid rgba(254,163,52,0.2)',
			borderRadius: '50%',
			zIndex: 0,
			animation: 'pulse-slow 15s ease-in-out infinite alternate',
		},
	};

	return (
		<div style={styles.container} className="geometric-background">
			<style>{animationStyles}</style>
			<div style={styles.circleTop} />
			<div style={styles.triangle} />
			<div style={styles.line} />
			<div style={styles.dots} />
			<div style={styles.square} />
			<div style={styles.ring} />
		</div>
	);
};

// 通过直接添加样式标签来确保动画定义在页面中
const GeometricBackground = () => {
	// 创建一个普通的div元素，其中只包含橙色主题的几何背景
	return (
		<div className="geo-bg-simple" style={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundImage: `
				radial-gradient(circle at 70% 20%, rgba(255,140,0,0.4) 0%, rgba(255,255,255,0) 50%),
				radial-gradient(circle at 20% 80%, rgba(254,163,52,0.4) 0%, rgba(255,255,255,0) 50%)
			`,
			zIndex: -1,
		}}>
			{/* 添加一些简单的橙色几何元素 */}
			<div style={{
				position: 'absolute',
				top: '20%',
				right: '10%',
				width: '20vw',
				height: '20vw',
				maxWidth: '300px',
				maxHeight: '300px',
				borderRadius: '50%',
				background: 'radial-gradient(circle, rgba(255,140,0,0.1) 0%, rgba(255,255,255,0) 70%)',
			}} />
			<div style={{
				position: 'absolute',
				bottom: '10%',
				left: '15%',
				width: '15vw',
				height: '15vw',
				maxWidth: '200px',
				maxHeight: '200px',
				background: 'radial-gradient(circle, rgba(254,163,52,0.15) 0%, rgba(255,255,255,0) 70%)',
			}} />
		</div>
	);
};

export default function Blog() {
	const [activeKey, setActiveKey] = useState('all');
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		// 确保组件完全加载后再显示几何元素
		setIsLoaded(true);
	}, []);

	const handleNavSelect = (key) => {
		setActiveKey(key);
	};

	return (
		<div className="blog-page">
			{/* 添加简单的背景 */}
			<GeometricBackground />
			
			{/* 添加几何背景元素 */}
			{isLoaded && <GeometricElements />}
			
			{/* 导航栏作为一个独立的直接子元素，确保吸顶效果 */}
			<BlogNav activeKey={activeKey} onSelect={handleNavSelect} />
			
			<div className="blog-container">
				{/* 博客内容区域 */}
				<div className="blog-content-area">
					<BlogContent activeKey={activeKey} />
				</div>
			</div>
		</div>
	);
}
