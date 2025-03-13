import React, { useEffect, useRef, useState } from 'react';
import './card-stack.css';

const CardStack = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [cards] = useState([
    { 
			id: 1, 
			logo:'goodWcLogo.png',
			title: '宜厕-微信小程序', 
			img: 'goodWc1.png',
			otherImg: 'goodWc.png',
			color: '#FF8C00',
      content: '据数据显示，在中国人群中，肠易激综合征、功能性便秘、功能性腹泻的患病率分别为 20％，25％和 5％。<br /> 在中国厕所覆盖率极高的情况下，依旧存在热点地区厕所分布无法承载过多人流量，以及公共厕所没有明确指示牌的问题' 
    },
    { 
      id: 2, 
			title: '宝塔面板', 
			logo: 'btLogo.svg',
			img: 'bt1.png',
			otherImg: 'bt.png',
			color: '#20A53A',
			className: 'w-[60px] h-[100px]',
      content: '宝塔,安全高效的服务器运维面板，全球超1500万台服务器安装宝塔超200万注册用户使用宝塔，持续更新维护8年值得信赖.' 
    },
    { 
      id: 4, 
			color: '#1e90ff',
      title: '堡塔官网', 
      content: '持续关注前端技术发展趋势，积极尝试新技术并应用到实际项目中。参与开源社区贡献，分享技术经验和解决方案。具备将设计理念转化为高质量代码的能力，注重用户体验和交互细节。' 
		},
		 { 
      id: 5, 
			color: '#e66767',
      title: '堡塔官网', 
      content: '持续关注前端技术发展趋势，积极尝试新技术并应用到实际项目中。参与开源社区贡献，分享技术经验和解决方案。具备将设计理念转化为高质量代码的能力，注重用户体验和交互细节。' 
		},
		{ 
			id: 6, 
			title: '堡塔官网', 
			color: '#353b48',
			content: '持续关注前端技术发展趋势，积极尝试新技术并应用到实际项目中。参与开源社区贡献，分享技术经验和解决方案。具备将设计理念转化为高质量代码的能力，注重用户体验和交互细节。' 
		},
  ]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
			// 监听向下滚动时，设置card的top，起始top为20px，向下滚动时，top逐渐以20px为单位增加
			const scrollY = window.scrollY;
			const cards = containerRef.current.querySelectorAll('.stack-card');
			cards.forEach((card, index) => {
				const cardRect = card.getBoundingClientRect();
				const scale = 1 - (cardRect.top / window.innerHeight) * 0.5;
				console.log(scale);
				card.style.transform = `scale(${scale})`;

				// 设置card的top，起始top为20px，向下滚动时，top逐渐以20px为单位增加
				card.style.top = `${!index?20:index === 1?40:index * 30}px`;

			});
    };

    window.addEventListener('scroll', handleScroll);
    // 初始调用一次
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="card-stack-container" ref={containerRef}>
			{cards.map((card, index) => (
				<div
					key={card.id}
					ref={el => cardsRef.current[index] = el}
					className="stack-card"
				>
					<div className={`stack-desc flex flex-col w-[25%] h-full leading-[22px] justify-center p-[2rem] rounded-[16px] rounded-r-none`} style={{ backgroundColor: card.color + '40' || '#FF8C0040' }}>
						<img src={`./img/project-img/${card.logo}`} className={`w-[200px] mb-[20px] ${card.className}`} alt="项目logo" />
						<h3 style={ {color:card.color || '#344054'}}>{card.title}</h3>
						<span className='mb-[2rem]' dangerouslySetInnerHTML={{ __html: card.content }} />
					</div>
					<div className={`flex-1 w-full h-full relative p-[2rem]`} style={{ backgroundColor: card.color + '10' || '#FF8C0010' } }>
						{/* 引入porject-img下的图片 */}
						<img src={`./img/project-img/${card.img}`} className="w-full h-[85%] border-1 border-[#e8e8e8] rounded-lg" alt="项目图片1" />
						{card.otherImg && <img src={`./img/project-img/${card.otherImg}`}  className="absolute bottom-20px -right-[40px] w-[420px] border-1 border-[#e8e8e8] rounded-lg" alt="项目图片2" />}
					</div>
				</div>
			))}
    </div>
  );
};

export default CardStack; 