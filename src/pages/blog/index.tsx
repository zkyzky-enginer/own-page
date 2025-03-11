import './index.css';
import React, { useState, useEffect, useRef } from 'react';

export default function Blog() {
	const [scrollY, setScrollY] = useState(0);
	const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
	const [stickyCards, setStickyCards] = useState<boolean[]>([]);
	const [activeCards, setActiveCards] = useState<boolean[]>([]);

	const cards = [
		{
			title: '构建现代化的 Web 应用',
			content: '探索最新的前端技术栈，包括 React、TypeScript 和现代化构建工具，打造高性能的 Web 应用。'
		},
		{
			title: '优化用户体验',
			content: '通过精心设计的动画和交互效果，为用户带来流畅而愉悦的使用体验。'
		},
		{
			title: '响应式设计原则',
			content: '采用移动优先的设计理念，确保应用在各种设备上都能完美展现。'
		},
		{
			title: '性能优化实践',
			content: '深入探讨前端性能优化技巧，从加载速度到运行时性能，全方位提升应用表现。'
		}
	];

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setScrollY(scrollPosition);

			const newStickyStates = cards.map((_, index) => {
				const card = cardsRef.current[index];
				if (!card) return false;

				const cardTop = card.offsetTop;
				const cardBottom = cardTop + (card.offsetHeight || 0);
				
				return scrollPosition > cardTop - 100 && scrollPosition < cardBottom + 200;
			});

			// 更新激活状态
			const newActiveStates = cards.map((_, index) => {
				const card = cardsRef.current[index];
				if (!card) return false;

				const cardTop = card.offsetTop;
				const triggerPoint = cardTop - window.innerHeight / 2;
				
				return scrollPosition > triggerPoint;
			});

			setStickyCards(newStickyStates);
			setActiveCards(newActiveStates);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="sticky-cards-container">
			{cards.map((card, index) => (
				<div
					key={index}
					ref={el => cardsRef.current[index] = el}
					className={`sticky-card ${stickyCards[index] ? 'sticky' : ''} ${
						activeCards[index] ? 'active' : ''
					} ${stickyCards.some((isSticky, i) => isSticky && i < index) ? 'faded' : ''}`}
				>
					<div className="card">
						<h2 className="card-title">{card.title}</h2>
						<div className="card-content">
							{card.content}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
