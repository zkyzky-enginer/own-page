import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Home from './pages/home/index';
import Blog from './pages/blog/index';
import BlogDetail from './pages/blog/blog-detail';
import AuthPage from './pages/login';
import 'antd/dist/reset.css';
import { primary_theme } from './theme/primary';
import LayoutContent from './component/layout';
import Account from './pages/account';
import './App.css';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: primary_theme,
				components: {
					Menu: {
						itemBg: '#FAFAFA',
					},
					Card: {
						bodyPadding: 16,
					},
				},
			}}
		>
			<BrowserRouter>
				<LayoutContent>
					<Routes>
						<Route path="/" element={<Home />} />
						  <Route path="/login" element={<AuthPage />} />
         		  <Route path="/register" element={<AuthPage />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/account" element={<Account />} />
							<Route path="/blog/detail/:id" element={<BlogDetail />} />
					</Routes>
				</LayoutContent>
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
