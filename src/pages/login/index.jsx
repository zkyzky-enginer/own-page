import React, { useState, useEffect } from 'react';
import { 
  Form, Input, Button, Checkbox, Divider, message, 
  Typography, Tabs, Space, Tooltip
} from 'antd';
import { 
  UserOutlined, LockOutlined, MailOutlined, 
  EyeInvisibleOutlined, EyeTwoTone, 
  GithubOutlined, GoogleOutlined, WechatOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './index.css';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // 触发进入动画
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);
  }, []);

  // 切换登录/注册标签
  const handleTabChange = (key) => {
    setActiveTab(key);
    form.resetFields();
  };

  // 处理登录
  const handleLogin = (values) => {
    setLoading(true);
    console.log('登录信息:', values);
    
    // 模拟API请求
    setTimeout(() => {
      message.success('登录成功！');
      setLoading(false);
      // 这里可以添加登录成功后的跳转逻辑
    }, 1500);
  };

  // 处理注册
  const handleRegister = (values) => {
    setLoading(true);
    console.log('注册信息:', values);
    
    // 模拟API请求
    setTimeout(() => {
      message.success('注册成功！请登录');
      setActiveTab('login');
      setLoading(false);
      form.resetFields();
    }, 1500);
  };

  // 表单提交
  const onFinish = (values) => {
    if (activeTab === 'login') {
      handleLogin(values);
    } else {
      handleRegister(values);
    }
  };

  return (
    <div className="auth-page">
      {/* 几何背景元素 */}
      <div className="geo-elements">
        <div className="geo-circle-1"></div>
        <div className="geo-triangle"></div>
        <div className="geo-line"></div>
        <div className="geo-dots"></div>
        <div className="geo-square"></div>
        <div className="geo-ring"></div>
      </div>
      
      <div className={`auth-container ${isAnimated ? 'animated' : ''}`}>
        <div className="auth-card">
          {/* 左侧图形区域 - 在桌面端显示 */}
          <div className="auth-visual desktop-only">
            <div className="visual-content">
              <div className="brand-logo">
                <span className="logo-text">个人博客</span>
              </div>
              <div className="visual-title">
                <h2>欢迎回来</h2>
                <p>登录您的账户，探索更多精彩内容</p>
              </div>
              <div className="visual-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-square"></div>
                <div className="decoration-dots"></div>
              </div>
            </div>
          </div>
          
          {/* 右侧表单区域 */}
          <div className="auth-form">
            <div className="form-header">
              <Title level={3} className="form-title">
                {activeTab === 'login' ? '账户登录' : '创建账户'}
              </Title>
              <Paragraph type="secondary" className="form-subtitle">
                {activeTab === 'login' 
                  ? '欢迎回来，请输入您的账户信息' 
                  : '填写以下信息，创建您的个人账户'}
              </Paragraph>
            </div>
            
            <Tabs 
              activeKey={activeTab} 
              onChange={handleTabChange}
              className="auth-tabs"
            >
              <TabPane tab="登录" key="login">
                <Form
                  form={form}
                  name="login_form"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  size="large"
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="用户名" 
                      className="auth-input"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码!' }]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="密码"
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      className="auth-input"
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <div className="form-options">
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                      </Form.Item>
                      
                      <Link to="/forgot-password" className="forgot-link">
                        忘记密码?
                      </Link>
                    </div>
                  </Form.Item>
                  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      className="auth-button"
                      loading={loading}
                    >
                      登录
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              
              <TabPane tab="注册" key="register">
                <Form
                  form={form}
                  name="register_form"
                  className="register-form"
                  onFinish={onFinish}
                  size="large"
                >
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                  >
                    <Input 
                      prefix={<UserOutlined />} 
                      placeholder="用户名" 
                      className="auth-input"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="email"
                    rules={[
                      { required: true, message: '请输入邮箱!' },
                      { type: 'email', message: '请输入有效的邮箱地址!' }
                    ]}
                  >
                    <Input 
                      prefix={<MailOutlined />} 
                      placeholder="邮箱" 
                      className="auth-input"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: '请输入密码!' },
                      { min: 6, message: '密码长度至少为6位!' }
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="密码"
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      className="auth-input"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                      { required: true, message: '请确认密码!' },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('两次输入的密码不一致!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined />}
                      placeholder="确认密码"
                      iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      className="auth-input"
                    />
                  </Form.Item>
                  
                  <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                      { 
                        validator: (_, value) =>
                          value ? Promise.resolve() : Promise.reject(new Error('请阅读并同意用户协议')),
                      },
                    ]}
                  >
                    <Checkbox>
                      我已阅读并同意 <Link to="/terms" className="terms-link">用户协议</Link>
                    </Checkbox>
                  </Form.Item>
                  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      className="auth-button"
                      loading={loading}
                    >
                      注册
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
            
            <Divider plain>或通过以下方式{activeTab === 'login' ? '登录' : '注册'}</Divider>
            
            <div className="social-login">
              <Tooltip title="GitHub登录">
                <Button shape="circle" icon={<GithubOutlined />} size="large" className="social-button" />
              </Tooltip>
              <Tooltip title="Google登录">
                <Button shape="circle" icon={<GoogleOutlined />} size="large" className="social-button" />
              </Tooltip>
              <Tooltip title="微信登录">
                <Button shape="circle" icon={<WechatOutlined />} size="large" className="social-button" />
              </Tooltip>
            </div>
            
            <div className="auth-footer">
              <Text type="secondary">
                {activeTab === 'login' 
                  ? '还没有账户?' 
                  : '已有账户?'} 
                <a onClick={() => handleTabChange(activeTab === 'login' ? 'register' : 'login')}>
                  {activeTab === 'login' ? '立即注册' : '立即登录'}
                </a>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
