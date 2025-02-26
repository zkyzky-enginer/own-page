import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Home from './pages/home/index';
import 'antd/dist/reset.css';
import './App.css';
import { primary_theme } from './theme/primary';

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
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/about" element={<About />} /> */}
				</Routes>
			</BrowserRouter>
		</ConfigProvider>
	);
}

export default App;
