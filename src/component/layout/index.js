import { Layout, Flex, Header, Content, Footer } from 'antd';
import HeaderMenu from './header-menu';
import './index.css';
import { useLocation } from 'react-router-dom';


export default function LayoutContent({ children }) {
	const { Header, Footer, Sider, Content } = Layout;

	  const location = useLocation();
  
  // 判断当前路径是否为登录或注册页面
  const isAuthPage = location.pathname === '/login' || 
                     location.pathname === '/register' || 
                     location.pathname.includes('/auth');



	return (
		<Flex gap="middle" wrap className="h-full">
			<Layout>
				{!isAuthPage && (<Header className="border-b border-[#D1D9E0]">
					<HeaderMenu></HeaderMenu>
				</Header>)}
				<Content>{children}</Content>
				{/* 根据需要也可以隐藏页脚 */}
      	{/* {!isAuthPage && <Footer />} */}
			</Layout>
		</Flex>
	);
}
