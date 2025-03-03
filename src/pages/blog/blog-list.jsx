import React from 'react';
import { Card, Flex } from 'antd';
import './index.css';
import Masonry from 'react-masonry-css';

const { Meta } = Card;
// export function BlogCard() {
// 	return <></>;
// }

const cardData = [
	{ title: 'Card 1', description: 'This is the description for card 1', height: 200 },
	{ title: 'Card 2', description: 'This is the description for cardfildlsfjlsdjflsJFLSJFLj 2', height: 300 },
	{ title: 'Card 3', description: 'This is the description for card fsfhkdsadhasjkhdkjalsldsjfksdjfl;jgls3', height: 250 },
	{ title: 'Card 4', description: 'This is the description for card 4', height: 400 },
	{ title: 'Card 5', description: 'This is the description for card 5', height: 150 },
	{ title: 'Card 6', description: 'This is the description for card 6 This is the description for card 6This is the description for card 6', height: 150 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 350 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 250 },
	{ title: 'Card 6', description: 'This is the description for card 6', height: 300 },
	{ title: 'Card 6', description: 'This is the description for card 6 This is the description for card 6 This is the description for card 6', height: 150 },
];

const breakpointColumnsObj = {
	default: 6, // 默认 3 列
	// 1100: 2, // 屏幕宽度小于 1100px 时显示 2 列
	// 700: 1, // 屏幕宽度小于 700px 时显示 1 列
};

export default function BlogList() {
	return (
		<Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
			{cardData.map((card, index) => (
				<div key={index} className="card-item inline-block">
					<Card hoverable className="inline-block w-[16.4rem]" cover={<img alt="example" src="https://tse4-mm.cn.bing.net/th/id/OIP-C.UxCxLpR1oITvVkT4enNfkAHaDS?rs=1&pid=ImgDetMain" />}>
						<Meta title={card.title} description={card.description} />
					</Card>
				</div>
			))}
		</Masonry>
	);
}
