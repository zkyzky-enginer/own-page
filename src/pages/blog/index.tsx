import './index.css';
import { Row, Col, ConfigProvider } from 'antd';
import { Tabs } from 'antd';
import React, { Component, useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import BlogList from './blog-list';

export function Content() {
	return (
		<div>
			<BlogList></BlogList>
		</div>
	);
}

export default function Blog() {
	const [tabPosition, setTabPosition] = useState('left');
	const [tabActiveKey, setTabActiveKey] = useState('all');

	const menu_list = [
		{
			key: 'all',
			label: '首页',
			children: Content(),
		},
		{
			key: '2',
			label: '前端',
			children: '908',
		},
		{
			key: '3',
			label: '后端',
			children: '`123`',
		},
		{
			key: '4',
			label: '数据库',
			children: '3123',
		},
		{
			key: '5',
			label: '服务器',
			children: '434',
		},
		{
			key: '6',
			label: '运维',
			children: '11321',
		},
		{
			key: '7',
			label: '其他',
			children: '2131231',
		},
	];

	const changeTabActiveKey = (key: string) => {
		// setTabActiveKey(key);
	};

	return (
		<div className="bg w-full h-full">
			<Row className="h-full" justify="center" align="top">
				<Col span={24} className="h-full">
					<Tabs defaultActiveKey={tabActiveKey} tabPosition={tabPosition} items={menu_list} onChange={changeTabActiveKey} className="h-full" />
				</Col>
			</Row>
		</div>
	);
}
