import React, { Component, useState, useEffect, useRef } from 'react';
import { Col, Row, Button, Space, Divider, Card, Tag } from 'antd';
import './index.css';
import { ArrowRightOutlined, BulbTwoTone, CommentOutlined, GithubOutlined, PhoneFilled, QqOutlined } from '@ant-design/icons';
const person_Message = {
	en_name: 'Zhou KangYu',
	name: '周康瑜',
	profession: 'Web前端工程师',
	phone: '12345678910',
	email: '1161437723@qq.com',
	mbti: 'Vue / React',
	constellation: '处女座',
	call: [
		{
			title: '电话',
			value: '123456789123',
			icon: () => <PhoneFilled />,
		},
		{
			title: 'QQ',
			value: '1161437723',
			icon: () => <QqOutlined />,
		},
		{
			title: '电话',
			value: '123456789123',
			icon: () => <PhoneFilled />,
		},
		{
			title: '电话',
			value: '123456789123',
			icon: () => <PhoneFilled />,
		},
		{
			title: '电话',
			value: '123456789123',
			icon: () => <PhoneFilled />,
		},
		{
			title: '电话',
			value: '123456789123',
			icon: () => <PhoneFilled />,
		},
	],
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
				<Row justify="center" align="middle" className="h-[540px]">
					<Col span={12}>
						{/* 头像圈 */}
						<div className="w-full flex justify-center ">
							{/* 悬浮小球 */}
							<div className="top-circle -top-[40px] left-[160px]"></div>
							<div className="top-circle -top-[28px] left-[300px] w-[20px] h-[20px]"></div>
							<div className="top-circle -bottom-[20px] right-[180px] w-[100px] h-[100px]"></div>
							<div className="top-circle bottom-[80px] left-[200px] w-[40px] h-[40px]"></div>
							<div className="top-circle top-[60px] right-[160px] "></div>

							{/* 头像 */}
							<div className="rounded-full w-[360px] h-[360px] flex items-center justify-center border border-4 border-white">
								<div className="bg-[#e8e8e8] w-[340px] inline-block h-[340px] rounded-full person-photo"></div>
							</div>
						</div>
					</Col>
					<Col span={12}>
						{/* 个人信息 */}
						<Space size="large" direction="vertical">
							<div>
								<span className="text-[54px] text-[#333]">{person_Message.name}</span>
								<Divider type="vertical" />
								<span className="text-[24px] text-[#666]">{person_Message.en_name}</span>
							</div>
							<span className="bg-primary h-[0.2rem] w-[320px] inline-block rounded-[2rem]"></span>
							<div className=" pl-[8px] text-[1.2rem]">职业:{person_Message.profession}</div>
							<div className=" pl-[8px] text-[1.2rem]">联系电话:{person_Message.phone}</div>
							<div className=" pl-[8px] text-[1.2rem]">联系Email:{person_Message.email}</div>
							<Button type="primary" className="top-button ">
								查看详情
								<ArrowRightOutlined />
							</Button>
						</Space>
					</Col>
				</Row>
			</div>
			<div style={{ perspective: '1200px' }} className="home-banner w-full h-[800px] relative flex items-center justify-center">
				<div
					className="glass-container absolute -top-[60px] flex"
					style={{
						transform: `perspective(1200px) rotateX(${rotate}deg)`,
					}}
				>
					{/* 左边区域 */}
					<div className="flex flex-col  h-full w-[500px] p-[2rem] inline-block text-[#333] ml-[1.2rem]">
						<BulbTwoTone className="text-[3rem] my-[12px]" twoToneColor="#ff8c00" />
						<div className="leading-[2.4rem] flex flex-col gap-[0.8rem] ml-[0.8rem]">
							<span className="text-[2.4rem] font-bold">{person_Message.name}</span>
							<span className="text-[1.8rem] text-primary">{person_Message.mbti}</span>
							{/* <span className="text-[1.8rem]"> {person_Message.constellation}</span> */}
						</div>
						<span className="leading-[24px] mt-[0.8rem] text-[#344054] text-[1rem] ml-[0.8rem] font-[AliHeavy]">孤独是人海如盲，一柄乌伞走夜雨，纵轻旅亦恐孤寒。如今忽觉，该是荒山落雪，暖盏无朋。听了一宿的残阕。虽千山吾独往矣。</span>

						<div className="ml-[0.6rem] mt-[0.8rem] flex">
							<Tag color="orange">摄影</Tag>
							<Tag color="orange">唱歌</Tag>
							<Tag color="orange">绘画</Tag>
							<Tag color="orange">剪辑</Tag>
							<Tag color="orange">游戏</Tag>
						</div>

						<div className="flex items-center gap-[0.4rem] ml-[0.4rem]">
							<Button type="primary" className="mt-[2rem] bg-white text-[#666]" shape="round">
								GitHub
								<GithubOutlined />
							</Button>
							<Button type="primary" className="mt-[2rem] text-[12px]" shape="round">
								查看详情
								<CommentOutlined />
							</Button>
						</div>
					</div>
					{/* 右边区域 */}
					<div className="inline-block p-[2rem] flex  flex-nowrap gap-[0.8rem] relative">
						<div className="content-card-big p-[2rem]">
							<div className="text-[1.4rem]">Looking my eyes</div>
							<div className="break-words mt-[2rem] ">
								dasdad一shfkjahfklajdflakj/dlkfdjklfnm。asdasddsa dd sashfkjahfklajdflakj/dlkfdjklfnm shfkjahfklajdflakj/dlkfdjklfnm shfkjahfklajdflakj/dlkfdjklfnm shfkjahfklajdflakj/dlkfdjklfnm,fas shfkjahfklajdflakj/dlkfdjklfnm
							</div>
						</div>

						<div className="flex flex-wrap items-start gap-[0.8rem]">
							{person_Message.call.map(item => {
								return (
									<Card className="inline-block w-[16.4rem] h-[12rem] call-card border border-white bg-[#ffffffd1]">
										{item.icon()}
										<Meta title={item.title} description={item.value} />
									</Card>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
