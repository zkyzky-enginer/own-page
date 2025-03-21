import { Menu } from 'antd';
import React, { Component, useState } from 'react';
// import type { MenuProps } from 'antd';

import { useNavigate } from 'react-router-dom';
// type MenuItem = Required<MenuProps>['items'][number];

const items = [
	{
		label: '首页',
		key: 'home',
	},
	{
		label: '技术博客',
		key: 'blog',
	},
	{
		label: '个人信息',
		key: 'account',
	},
];

export default function HeaderMenu() {
	const [current, setCurrent] = useState('home');
	const navigate = useNavigate();
	const onClick = e => {
		setCurrent(e.key);
		// 跳转路由
		navigate(e.key === 'home' ? '/' : '/' + e.key, { replace: false });
	};

	return (
		<div>
			{/* 菜单 */}
			<span className="absolute top-1.2rem left-1.6rem text-[1.4rem] text-[#666]">Zky Own Page</span>
			<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
		</div>
	);
}
