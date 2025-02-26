import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Home from './pages/home/index';
import Blog from './pages/blog/index';
import 'antd/dist/reset.css';
import './App.css';
import { primary_theme } from './theme/primary';
import LayoutContent from './component/layout';

function App() {
	return (
		<ConfigProvider
			theme={{
				token: primary_theme,
				components: {
					Menu: {
						itemBg: '#FAFAFA',
					},
				},
			}}
		>
			<LayoutContent>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog" element={<Blog />} />
					</Routes>
				</BrowserRouter>
			</LayoutContent>
		</ConfigProvider>
	);
}

export default App;
