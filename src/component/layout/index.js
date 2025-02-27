import { Layout, Flex, Header, Content, Footer } from 'antd';
import HeaderMenu from './header-menu';
import './index.css';
export default function LayoutContent({ children }) {
	const { Header, Footer, Sider, Content } = Layout;
	return (
		<Flex gap="middle" wrap className="h-full">
			<Layout>
				<Header className="border-b border-[#D1D9E0]">
					<HeaderMenu></HeaderMenu>
				</Header>
				<Content>{children}</Content>
				{/* <Footer>Footer</Footer> */}
			</Layout>
		</Flex>
	);
}
