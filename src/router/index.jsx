import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home';
import Blog from '../pages/blog';
import BlogDetail from '../pages/blog/blog-detail';
import AuthPage from '../pages/login';

// 定义路由
const router = createBrowserRouter([
  // 登录/注册页面 - 无布局
  {
    path: '/login',
    element: <AuthPage />
  },
  {
    path: '/register',
    element: <AuthPage />
  },
  
  // 使用主布局的路由
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/blog/detail/:id',
        element: <BlogDetail />
      }
    ]
  }
]);

export default router; 