import React, { Component, useState, useEffect, useRef } from 'react';
import { Col, Row, Button, Space, Divider, Card } from 'antd';
import './index.css';
import { ArrowRightOutlined } from '@ant-design/icons';
const person_Message = {
	en_name: 'Zhou KangYu',
	name: '周康瑜',
	profession: 'Web前端工程师',
	phone: '12345678910',
	email: '1161437723@qq.com',
};
const { Meta } = Card;

export default function Home() {
	const [rotate, setRotate] = useState(12);
	// const scrollToBottom = () => {};
	const scrollRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			// 动态改变旋转角度，越往下滚动，越小
			const newRotate = Math.max(0, 10 - window.scrollY / 50);
			setRotate(newRotate);
		};
		window.addEventListener('scroll', handleScroll);
		// 清除事件监听器
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div ref={scrollRef} className="overflow-y-auto">
			<div className={`bg-[#fafafa] relative top-banner`}>
				{/* top板块 */}
				<Row justify="center" align="middle" className="h-[54rem]">
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
							<span className="bg-[#26A69A] h-[0.2rem] w-[32rem] inline-block rounded-[2rem]"></span>
							<div className="pl-[0.8rem] text-[1.4rem]">职业:{person_Message.profession}</div>
							<div className="pl-[0.8rem] text-[1.4rem]">联系电话:{person_Message.phone}</div>
							<div className="pl-[0.8rem] text-[1.4rem]">联系Email:{person_Message.email}</div>
							<Button type="primary" className="top-button ">
								查看详情
								<ArrowRightOutlined />
							</Button>
						</Space>
					</Col>
				</Row>
			</div>
			<div style={{ perspective: '1200px' }} className="home-banner w-full h-[40rem] relative flex items-center justify-center">
				<div
					className="glass-container absolute -top-[6rem]"
					style={{
						transform: `perspective(1200px) rotateX(${rotate}deg)`,
					}}
				>
					{/* 左边区域 */}
					<div className="h-full w-[20rem] p-[2rem] bg-[#ececec] rounded-[20px] inline-block"></div>
					{/* 右边区域 */}
					<div className="inline-block">
						<Card hoverable className="inline-block w-[16.4rem]">
							<Meta title={`card.title`} description={`hakshdklsahdjksahdk`} />
						</Card>
						<Card hoverable className="inline-block w-[16.4rem]">
							<Meta title={`card.title`} description={`hakshdklsahdjksahdk`} />
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
