import React, { Component, useState } from 'react';
import { Col, Row, Button, Space, Divider, Menu } from 'antd';
import './index.css';

const person_Message = {
	en_name: 'Zhou KangYu',
	name: '周康瑜',
	profession: 'Web前端工程师',
	phone: '12345678910',
	email: '1161437723@qq.com',
};

const nav_list = [
	{ title: '作品集', value: 'portfolio' },
	{ title: '技术博客', value: 'technical_blog' },
	{ title: '社交媒体', value: 'social_media' },
];

const items = [
	{
		label: 'Navigation One',
		key: 'mail',
	},
	{
		label: 'Navigation Two',
		key: 'app',
	},
	{
		label: 'Navigation Three - Submenu',
		key: 'SubMenu',
	},
];

export default function Home() {
	const [current, setCurrent] = useState('mail');
	return (
		<div className="h-[54rem] bg-[#fafafa] border relative top-banner">
			{/* 菜单 */}
			<span className="absolute top-0.8rem left-1.6rem text-[1.4rem] text-[#666]">Zky Own Page</span>
			<Menu selectedKeys={[current]} mode="horizontal" items={items} />
			{/* top板块 */}
			<Row justify="center" align="middle" gutter={[16, 16]} className="h-[54rem]">
				<Col span={12}>
					{/* 头像圈 */}
					<div className="w-full flex justify-center ">
						{/* 悬浮小球 */}
						<div className="top-circle -top-[0.4rem] left-[10rem]"></div>
						<div className="top-circle -top-[2.8rem] left-[30rem] w-[2rem] h-[2rem]"></div>
						<div className="top-circle -bottom-[4rem] right-[14rem] w-[10rem] h-[10rem]"></div>
						<div className="top-circle bottom-[8rem] left-[12rem] w-[4rem] h-[4rem]"></div>
						<div className="top-circle top-[8rem] right-[12rem] "></div>

						{/* 头像 */}
						<div className="rounded-full w-[32rem] h-[32rem] flex items-center justify-center border border-4 border-white">
							<div className="bg-[#e8e8e8] w-[30rem] inline-block h-[30rem] rounded-full person-photo"></div>
						</div>
					</div>
				</Col>
				<Col span={12}>
					{/* 个人信息 */}
					<Space size="large" direction="vertical">
						<div>
							<span className="text-[5.4rem] text-[#333]">{person_Message.name}</span>
							<Divider type="vertical" />
							<span className="text-[2.4rem] text-[#666]">{person_Message.en_name}</span>
						</div>
						<div className="pl-[0.8rem] text-[1.4rem]">职业:{person_Message.profession}</div>
						<div className="pl-[0.8rem] text-[1.4rem]">联系电话:{person_Message.phone}</div>
						<div className="pl-[0.8rem] text-[1.4rem]">联系Email:{person_Message.email}</div>
						<Button type="primary" className="top-button">
							查看详情
						</Button>
					</Space>
				</Col>
			</Row>

			<Row className="h-[4rem] bg-[#f8f8f8]">
				{nav_list.map(item => (
					<Col key={item.value} span={8} className="text-center">
						<Button type="link" className="nav-button">
							{item.title}
						</Button>
					</Col>
				))}
			</Row>
		</div>
	);
}
