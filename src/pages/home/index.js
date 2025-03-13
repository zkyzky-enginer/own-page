import React, { Component, useState, useEffect, useRef } from 'react';
import { Col, Row, Button, Space, Divider, Card, Tag } from 'antd';
import './index.css';
import { ArrowRightOutlined, BulbTwoTone, BugTwoTone, HeartTwoTone, CrownTwoTone, ProfileTwoTone, CommentOutlined, GithubOutlined, PhoneTwoTone, SafetyCertificateTwoTone } from '@ant-design/icons';
import CardStack from './card-stack';

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
			title: '联系方式',
			value: '如果您有需要，您可以通过我的邮箱1161437723@qq.com联系我，或者直接call me 123456789098。',
			icon: () => <PhoneTwoTone twoToneColor="#ff8c00" />,
		},
		{
			title: '前端框架',
			value: '精通 Vue 2/3 + TypeScript，掌握 React 生态，熟悉 Hooks + Redux 的开发模式，具备组件化和状态管理的最佳实践能力',
			icon: () => <CrownTwoTone twoToneColor="#ff8c00" />,
		},
		{
			title: '工程化能力',
			value: '熟练掌握 Git 工作流，具备良好的代码管理和协作能力。熟悉 Webpack、Vite 等构建工具，能够进行项目性能优化和模块化管理.',
			icon: () => <BugTwoTone twoToneColor="#ff8c00" />,
		},
		{
			title: '后端基础能力',
			value: '熟悉 Node.js 开发，具备基础的后端服务搭建与优化能力。',
			icon: () => <SafetyCertificateTwoTone twoToneColor="#ff8c00" />,
		},
		{
			title: '杂谈',
			value: '我们迷恋的不是狂风暴雨本身，而是日常秩序裂开缝隙时，从裂缝里涌进来青草腥气的风，是青春在钢筋森林里找到的野生洞穴.',
			icon: () => <HeartTwoTone twoToneColor="#ff8c00" />,
		},
		{
			title: '哈哈哈不知道说啥',
			value: '当我们有一些确定的东西需要测试，并且使用UML要比使用代码测试起来代价更低一些时，就使用UML。',
			icon: () => <ProfileTwoTone twoToneColor="#ff8c00" />,
		},
	],
};



export default function Home() {
	const [rotate, setRotate] = useState(12);
	const scrollRef = useRef(null);

	// 动态计算内容高度
	const contentHeight = useRef(0);

	useEffect(() => {
		const glassContainer = document.querySelector('.glass-container');
		if (glassContainer) {
			contentHeight.current = glassContainer.offsetHeight;
		}
	}, []);

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
		<div ref={scrollRef} >
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
			<div style={{ perspective: '1200px', height: contentHeight.current ? contentHeight.current + 'px' : 'auto' }} className="home-banner w-full relative flex items-center justify-center">
				<div
					className="glass-container absolute -top-[60px] flex "
					style={{
						transform: `perspective(1200px) rotateX(${rotate}deg)`,
					}}
				>
					<Row>
						<Col span={7}>
							{/* 左边区域 */}
							<div className="flex flex-col flex-none h-full p-[2rem] pt-[4rem] inline-block text-[#333] ml-[1.2rem]">
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
						</Col>
						<Col span={19}>
							{/* 右边区域 */}
							<div className="inline-flex px-[2rem] py-[4rem] gap-[0.8rem] relative flex-none h-full">
								<div className="content-card-big p-[2rem]">
									<div className="text-[1.4rem]">Looking my eyes</div>
									<div className="break-all mt-[2rem] text-[16px] leading-[20px]">
										Hello, my name is Zhou Kangyu. I'm 23 years old and currently working in Dongguan. I graduated with a bachelor's degree and have two years of experience as a front-end developer. During my career, I've had the opportunity to
										participate in building projects from the ground up, from 0 to 1.
										<Divider plain>Text</Divider>
										I'm passionate about creating user-friendly and efficient web applications, and I'm always eager to learn and grow in this field. I'm excited about the possibility of contributing to your team and bringing my skills to the table.
									</div>
									<div className="person-banner"></div>
								</div>

								{/* <div className="float h-full relative"> */}
								<div className="grid grid-cols-2 gap-x-2 gap-y-2 flex-0">
									{person_Message.call.map(item => {
										return (
											<Card className="w-[20rem] h-[12rem] call-card" key={item.title}>
												<span className="text-[2rem] text-primary">{item.icon()}</span>
												<p className="text-[1rem] mt-[0.8rem] font-bold">{item.title}</p>
												<p className="text-[14px] mt-[1rem] text-[#666] leading-[20px]">{item.value}</p>
											</Card>
										);
									})}
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</div>
			
			
			
			<div className="w-full flex-col home-banner flex items-center">
				<p className="text-white text-[3rem] mb-[1rem] font-bold">如果你的了解不止于此</p>
				<p className="text-white text-[1.2rem] w-[55%] text-center leading-[26px]">
					大家有对我不满的地方都可以提出来，尽情发言，一会就给你们全删了。妈的竟敢对皇帝不满，我来上网就是来当皇帝的，顺我者昌逆我者亡。能面刺寡人之过者，诛九族。上网谏寡人者，处极刑。谤讥于市朝闻寡人之耳者，赐自尽。
				</p>
				{/* 卡片堆叠效果区域 */}
				<CardStack />
			</div>

			<div className="w-full h-[100px] bg-[#FEA334]"></div>

			{/* 页面结束栏目 */}
			<div className="w-full bg-gradient-to-b from-[#f8f8f8] to-[#f0f0f0] py-[3rem] px-[2rem]">
				<div className="max-w-[1200px] mx-auto">
					{/* 顶部区域 */}
					<div className="flex flex-wrap justify-between mb-[2rem] border-b border-gray-200 pb-[2rem]">
						{/* 左侧个人信息 */}
						<div className="flex flex-col w-full md:w-[30%] mb-[2rem] md:mb-0">
							<div className="flex items-center mb-[1rem]">
								<BulbTwoTone className="text-[2.5rem]" twoToneColor="#ff8c00" />
								<span className="ml-[0.8rem] text-[1.8rem] font-bold text-[#333]">{person_Message.name}</span>
							</div>
							<p className="text-[1rem] text-[#666] leading-[1.8] mb-[1rem]">
								感谢您的访问，如果您对我的作品或技能有任何兴趣，欢迎随时与我联系交流。
							</p>
							<div className="flex items-center">
								<PhoneTwoTone className="text-[1.2rem]" twoToneColor="#ff8c00" />
								<span className="ml-[0.5rem] text-[1rem] text-[#666]">{person_Message.phone}</span>
							</div>
							<div className="flex items-center mt-[0.5rem]">
								<CommentOutlined className="text-[1.2rem] text-[#ff8c00]" />
								<span className="ml-[0.5rem] text-[1rem] text-[#666]">{person_Message.email}</span>
							</div>
						</div>

						{/* 右侧导航链接 */}
						<div className="flex flex-wrap w-full md:w-[65%]">
							<div className="w-1/2 md:w-1/3 mb-[1.5rem]">
								<h4 className="text-[1.2rem] font-bold text-[#333] mb-[1rem]">技能导航</h4>
								<ul>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">前端开发</a></li>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">UI/UX设计</a></li>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">移动端适配</a></li>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">性能优化</a></li>
								</ul>
							</div>
							<div className="w-1/2 md:w-1/3 mb-[1.5rem]">
								<h4 className="text-[1.2rem] font-bold text-[#333] mb-[1rem]">相关资源</h4>
								<ul>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">作品集</a></li>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">博客文章</a></li>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">技术分享</a></li>
									<li className="mb-[0.5rem]"><a href="#" className="text-[#666] hover:text-[#ff8c00] transition-colors">学习资料</a></li>
								</ul>
							</div>
							<div className="w-full md:w-1/3 mb-[1.5rem]">
								<h4 className="text-[1.2rem] font-bold text-[#333] mb-[1rem]">关注我</h4>
								<div className="flex gap-[1rem]">
									<Button type="text" shape="circle" icon={<GithubOutlined className="text-[1.5rem] text-[#555]" />} />
									<Button type="text" shape="circle" icon={<HeartTwoTone className="text-[1.5rem]" twoToneColor="#ff8c00" />} />
									<Button type="text" shape="circle" icon={<CrownTwoTone className="text-[1.5rem]" twoToneColor="#ff8c00" />} />
									<Button type="text" shape="circle" icon={<ProfileTwoTone className="text-[1.5rem]" twoToneColor="#ff8c00" />} />
								</div>
								<Button type="primary" className="mt-[1rem]" shape="round">
									添加微信
									<CommentOutlined />
								</Button>
							</div>
						</div>
					</div>

					{/* 底部版权区域 */}
					<div className="flex flex-col md:flex-row justify-between items-center pt-[1rem]">
						<div className="text-[0.9rem] text-[#999] mb-[1rem] md:mb-0">
							© {new Date().getFullYear()} {person_Message.name}. 保留所有权利。
						</div>
						<div className="flex gap-[1.5rem]">
							<a href="#" className="text-[0.9rem] text-[#999] hover:text-[#ff8c00] transition-colors">隐私政策</a>
							<a href="#" className="text-[0.9rem] text-[#999] hover:text-[#ff8c00] transition-colors">使用条款</a>
							<a href="#" className="text-[0.9rem] text-[#999] hover:text-[#ff8c00] transition-colors">网站地图</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
