import React from 'react';
import { Card, Tag, Space, Typography, Avatar, Button, Tooltip } from 'antd';
import { CalendarOutlined, UserOutlined, EyeOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';
import Masonry from 'react-masonry-css';
import './index.css';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

// 定义不同的文章长度来实现不同高度
const cardData = [
	{
		id: 1,
		title: '深入理解 React Hooks 原理',
		description: 'React Hooks 是 React 16.8 引入的新特性，它让我们可以在函数组件中使用状态和其他 React 特性。本文将深入探讨 Hooks 的实现原理和底层机制，以及为什么它能够改变我们的编写组件的方式。通过理解其工作原理，我们可以避免常见的陷阱，更有效地使用Hooks。本文还将讨论Hooks的性能优化策略...',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 220,
		tags: ['React', 'Hooks', 'JavaScript'],
		category: '前端开发',
		author: '周康瑜',
		date: '2024-03-20',
		views: 1234,
		likes: 88,
		comments: 23
	},
	{
		id: 2,
		title: 'Vue3 组合式 API 最佳实践',
		description: 'Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组织方式。本文将分享一些在实际项目中使用组合式 API 的经验和最佳实践...',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 180,
		tags: ['Vue3', '组合式API', '前端框架'],
		category: '前端开发',
		author: '周康瑜',
		date: '2024-03-19',
		views: 986,
		likes: 76,
		comments: 18
	},
	{
		id: 3,
		title: 'TypeScript 高级类型详解',
		description: 'TypeScript Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组的类型系统非常强大，本文将详细介绍一些高级类型的使用方法，包括条件类型、映射类型、工具类型等...',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 200,
		tags: ['TypeScript', '类型系统', 'JavaScript'],
		category: '前端开发',
		author: '周康瑜',
		date: '2024-03-18',
		views: 856,
		likes: 65,
		comments: 15
	},
	{
		id: 4,
		title: 'Node.js 性能优化实战指南',
		description: 'Node.js 在处理高并发场景时，性能优化Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组Vue3 的组合式 API 为我们提供了更灵活的代码组变得尤为重要。本文将分享一系列实用的性能优化技巧，包括内存管理、异步操作优化、集群模式、缓存策略和代码结构优化等，帮助你构建高性能的 Node.js 应用。通过这些优化手段，我们成功将一个重负载应用的响应时间减少了50%以上。',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 240,
		tags: ['Node.js', '性能优化', '后端开发'],
		category: '后端开发',
		author: '周康瑜',
		date: '2024-03-17',
		views: 1423,
		likes: 112,
		comments: 34
	},
	{
		id: 5,
		title: 'CSS Grid 布局完全指南',
		description: 'CSS Grid 是现代网页布局的强大工具，本文将从基础到高级带你掌握它的各项本文将从基础到高级带本文将从基础到高级带本文将从基础到高级带本文将从基础到高级带特性。',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 160,
		tags: ['CSS', 'Grid', '前端布局'],
		category: '前端开发',
		author: '周康瑜',
		date: '2024-03-16',
		views: 765,
		likes: 54,
		comments: 12
	},
	{
		id: 6,
		title: 'React Native 移动应用开发实战',
		description: 'Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化等关键环Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化等关键环等关键环节。通过这个案例，你将深入了解如何构建高质量的跨平台移动应用，以及如何解决开发过程中常见的问题和挑战。',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 210,
		tags: ['React Native', '移动开发', '跨平台'],
		category: '移动开发',
		author: '周康瑜',
		date: '2024-03-15',
		views: 924,
		likes: 78,
		comments: 25
	},
	{
		id: 6,
		title: 'React Native 移动应用开发实战',
		description: 'Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化等关键环Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化等关键环等关键环节。通过这个案例，你将深入了解如何构建高质量的跨平台移动应用，以及如何解决开发过程中常见的问题和挑战。',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 210,
		tags: ['React Native', '移动开发', '跨平台'],
		category: '移动开发',
		author: '周康瑜',
		date: '2024-03-15',
		views: 924,
		likes: 78,
		comments: 25
	},{
		id: 1,
		title: '深入理解 React Hooks 原理',
		description: 'React Hooks 是 React 16.8 引入的新特性，它让我们可以在函数组件中使用状态和其他 React 特性。本文将深入探讨 Hooks 的实现原理和底层机制，以及为什么它能够改变我们的编写组件的方式。通过理解其工作原理，我们可以避免常见的陷阱，更有效地使用Hooks。本文还将讨论Hooks的性能优化策略...',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 220,
		tags: ['React', 'Hooks', 'JavaScript'],
		category: '前端开发',
		author: '周康瑜',
		date: '2024-03-20',
		views: 1234,
		likes: 88,
		comments: 23
	},
	{
		id: 6,
		title: 'React Native 移动应用开发实战',
		description: 'Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化等关键环Re将分享一个完整的从零到发布的实战案例，包括环境搭建、组件设计、状态管理、导航实现、原生模块集成以及性能优化等关键环等关键环节。通过这个案例，你将深入了解如何构建高质量的跨平台移动应用，以及如何解决开发过程中常见的问题和挑战。',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 210,
		tags: ['React Native', '移动开发', '跨平台'],
		category: '移动开发',
		author: '周康瑜',
		date: '2024-03-15',
		views: 924,
		likes: 78,
		comments: 25
	},
	{
		id: 5,
		title: 'CSS Grid 布局完全指南',
		description: 'CSS Grid 是现代网页布局的强大工具，本文将从基础到高级带你掌握它的各项本文将从基础到高级带本文将从基础到高级带本文将从基础到高级带本文将从基础到高级带特性。',
		cover: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain',
		coverHeight: 160,
		tags: ['CSS', 'Grid', '前端布局'],
		category: '前端开发',
		author: '周康瑜',
		date: '2024-03-16',
		views: 765,
		likes: 54,
		comments: 12
	},
];

// 修改标签颜色函数
const getTagColor = (tag) => {
	if (tag.includes('React')) return 'orange';
	if (tag.includes('Vue')) return 'gold';
	if (tag.includes('Type')) return 'volcano';
	if (tag.includes('Node')) return 'orange';
	if (tag.includes('CSS')) return 'gold';
	if (tag.includes('Grid')) return 'volcano';
	return 'orange'; // 默认值改为橙色
};

export default function BlogList() {
	// 定义瀑布流的响应式列数
	const breakpointColumnsObj = {
		default: 3, // 默认3列
		1100: 2,    // 屏幕宽度 < 1100px 时显示2列
		700: 1      // 屏幕宽度 < 700px 时显示1列
	};

	return (
		<div className="blog-list-container">
			{/* 博客列表头部 */}
			<div className="blog-list-header">
				<Title level={2}>技术博客</Title>
				<Paragraph className="text-gray-500">
					分享前端开发、后端技术、工程化实践等各类技术文章
				</Paragraph>
			</div>

			{/* 博客卡片瀑布流 */}
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{cardData.map((card) => (
					<Card
						key={card.id}
						hoverable
						className="blog-card"
						cover={
							<div className="blog-card-cover" style={{ height: card.coverHeight }}>
								<img alt={card.title} src={card.cover} />
								<div className="blog-card-category">{card.category}</div>
							</div>
						}
					>
						<Meta
							title={
								<Title level={4} className="blog-card-title">
									{card.title}
								</Title>
							}
							description={
								<div className="blog-card-content">
									<Paragraph 
										ellipsis={{ rows: card.id % 2 === 0 ? 2 : 4 }} 
										className="text-gray-600 blog-card-desc"
									>
										{card.description}
									</Paragraph>
									
									{/* 标签 - 更新颜色 */}
									<div className="blog-card-tags">
										{card.tags.map((tag) => (
											<Tag key={tag} color={getTagColor(tag)}>{tag}</Tag>
										))}
									</div>

									{/* 作者信息 */}
									<div className="blog-card-author">
										<Space>
											<Avatar icon={<UserOutlined />} />
											<span>{card.author}</span>
											<CalendarOutlined className="text-gray-400" />
											<span className="text-gray-400">{card.date}</span>
										</Space>
									</div>

									{/* 互动数据 */}
									<div className="blog-card-stats">
										<Space>
											<Tooltip title="浏览量">
												<span className="text-gray-400">
													<EyeOutlined /> {card.views}
												</span>
											</Tooltip>
											<Tooltip title="点赞数">
												<span className="text-gray-400">
													<LikeOutlined /> {card.likes}
												</span>
											</Tooltip>
											<Tooltip title="评论数">
												<span className="text-gray-400">
													<CommentOutlined /> {card.comments}
												</span>
											</Tooltip>
										</Space>
									</div>

									{/* 阅读更多按钮 */}
									<div className="blog-card-actions">
										<Link to={`/blog/detail/${card.id}`}>
											<Button 
												type="primary" 
												className="blog-card-read-more"
												style={{ backgroundColor: '#ff8c00', borderColor: '#ff8c00' }}>
												阅读更多
											</Button>
										</Link>
									</div>
								</div>
							}
						/>
					</Card>
				))}
			</Masonry>
		</div>
	);
}
