import React from 'react';
import { Card, Flex } from 'antd';
import './index.css';

const { Meta } = Card;
// export function BlogCard() {
// 	return <></>;
// }

const cardData = [
	{ title: 'Card 1', description: 'This is the description for card 1', height: 200 },
	{ title: 'Card 2', description: 'This is the description for card 2', height: 300 },
	{ title: 'Card 3', description: 'This is the description for card 3', height: 250 },
	{ title: 'Card 4', description: 'This is the description for card 4', height: 400 },
	{ title: 'Card 5', description: 'This is the description for card 5', height: 150 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 150 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 350 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 250 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 300 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 150 },
];

export default function BlogList() {
	return (
		<>
			{cardData.map((card, index) => (
				<div key={index} className="card-item inline-block" style={{ height: `${card.height}px` }}>
					<Card hoverable className="inline-block" style={{ width: '200px', height: '100%' }} cover={<img alt="example" src="https://via.placeholder.com/300" />}>
						<Meta title={card.title} description={card.description} />
					</Card>
				</div>
			))}
		</>
	);
}
