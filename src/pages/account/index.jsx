import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Layout, Menu, Typography, Avatar, Card, Form, Input, Button, 
  Tabs, Divider, Switch, Upload, message, Modal, Row, Col, Tooltip,
  Space, Tag, List
} from 'antd';
import {
  UserOutlined, LockOutlined, MailOutlined, PhoneOutlined,
  EditOutlined, SaveOutlined, LogoutOutlined, UploadOutlined,
  GithubOutlined, LinkedinOutlined, TwitterOutlined, GlobalOutlined,
  SettingOutlined, BellOutlined, SecurityScanOutlined, TeamOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import './index.css';

const { Title, Text, Paragraph } = Typography;
const { Sider, Content } = Layout;
const { TabPane } = Tabs;
const { TextArea } = Input;
const { confirm } = Modal;

// 模拟用户数据
const mockUserData = {
  id: 1,
  username: '张三',
  email: 'zhangsan@example.com',
  phone: '13800138000',
  avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  bio: '前端开发工程师，热爱技术，喜欢分享。',
  location: '北京市',
  website: 'https://example.com',
  github: 'https://github.com/zhangsan',
  linkedin: 'https://linkedin.com/in/zhangsan',
  twitter: 'https://twitter.com/zhangsan',
  skills: ['React', 'Vue', 'JavaScript', 'TypeScript', 'Node.js'],
  personalInfo: {
    fullName: '张三',
    jobTitle: '高级前端开发工程师',
    company: 'ABC科技有限公司',
    education: '计算机科学与技术',
    interests: ['编程', '阅读', '旅行', '摄影']
  },
  siteSettings: {
    siteName: '张三的个人博客',
    siteDescription: '分享前端开发技术和个人成长经验',
    siteKeywords: '前端开发,React,JavaScript,个人博客',
    homeBanner: '欢迎来到我的个人空间，这里记录我的技术成长和生活点滴。',
    homeIntro: '我是一名热爱技术的前端开发者，专注于创建用户友好的web应用。'
  }
};

const AccountPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(mockUserData);
  const [activeTab, setActiveTab] = useState('profile');
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm();
  const [siteForm] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [menuKey, setMenuKey] = useState('profile');

  // 初始化表单数据
  useEffect(() => {
    form.setFieldsValue({
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      bio: userData.bio,
      location: userData.location,
      website: userData.website,
      github: userData.github,
      linkedin: userData.linkedin,
      twitter: userData.twitter,
      fullName: userData.personalInfo.fullName,
      jobTitle: userData.personalInfo.jobTitle,
      company: userData.personalInfo.company,
      education: userData.personalInfo.education
    });

    siteForm.setFieldsValue({
      siteName: userData.siteSettings.siteName,
      siteDescription: userData.siteSettings.siteDescription,
      siteKeywords: userData.siteSettings.siteKeywords,
      homeBanner: userData.siteSettings.homeBanner,
      homeIntro: userData.siteSettings.homeIntro
    });
  }, [userData, form, siteForm]);

  // 处理菜单点击
  const handleMenuClick = (e) => {
    setMenuKey(e.key);
  };

  // 切换编辑模式
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // 保存个人信息
  const handleSaveProfile = async (values) => {
    setLoading(true);
    
    // 模拟API请求
    setTimeout(() => {
      const updatedUserData = {
        ...userData,
        username: values.username,
        email: values.email,
        phone: values.phone,
        bio: values.bio,
        location: values.location,
        website: values.website,
        github: values.github,
        linkedin: values.linkedin,
        twitter: values.twitter,
        personalInfo: {
          ...userData.personalInfo,
          fullName: values.fullName,
          jobTitle: values.jobTitle,
          company: values.company,
          education: values.education
        }
      };
      
      setUserData(updatedUserData);
      setEditMode(false);
      setLoading(false);
      message.success('个人信息更新成功！');
    }, 1000);
  };

  // 保存网站设置
  const handleSaveSiteSettings = async (values) => {
    setLoading(true);
    
    // 模拟API请求
    setTimeout(() => {
      const updatedUserData = {
        ...userData,
        siteSettings: {
          siteName: values.siteName,
          siteDescription: values.siteDescription,
          siteKeywords: values.siteKeywords,
          homeBanner: values.homeBanner,
          homeIntro: values.homeIntro
        }
      };
      
      setUserData(updatedUserData);
      setLoading(false);
      message.success('网站设置更新成功！');
    }, 1000);
  };

  // 处理头像上传
  const handleAvatarChange = (info) => {
    if (info.file.status === 'done') {
      // 假设服务器返回了新的头像URL
      const newAvatarUrl = info.file.response.url || userData.avatar;
      setUserData({
        ...userData,
        avatar: newAvatarUrl
      });
      message.success('头像更新成功！');
    }
  };

  // 处理登出
  const handleLogout = () => {
    confirm({
      title: '确定要退出登录吗？',
      icon: <ExclamationCircleOutlined />,
      content: '退出后需要重新登录才能访问您的账户',
      onOk() {
        // 这里应该清除登录状态，例如删除token
        message.success('已成功退出登录');
        navigate('/login');
      }
    });
  };

  // 渲染个人资料内容
  const renderProfileContent = () => (
    <div className="profile-content">
      <Card 
        className="profile-card"
        title={
          <div className="profile-header">
            <Title level={4}>个人资料</Title>
            <Button 
              type={editMode ? "primary" : "default"}
              icon={editMode ? <SaveOutlined /> : <EditOutlined />}
              onClick={toggleEditMode}
            >
              {editMode ? "保存" : "编辑"}
            </Button>
          </div>
        }
      >
        <Form
          form={form}
          layout="vertical"
          disabled={!editMode}
          onFinish={handleSaveProfile}
        >
          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item
                name="username"
                label="用户名"
                rules={[{ required: true, message: '请输入用户名' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="用户名" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="邮箱"
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { type: 'email', message: '请输入有效的邮箱地址' }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="邮箱" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item
                name="fullName"
                label="姓名"
              >
                <Input placeholder="您的真实姓名" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="电话"
              >
                <Input prefix={<PhoneOutlined />} placeholder="联系电话" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col xs={24} md={12}>
              <Form.Item
                name="jobTitle"
                label="职位"
              >
                <Input placeholder="您的职位" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="company"
                label="公司"
              >
                <Input placeholder="您的公司" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            name="bio"
            label="个人简介"
          >
            <TextArea rows={4} placeholder="简单介绍一下自己" />
          </Form.Item>

          <Form.Item
            name="education"
            label="教育背景"
          >
            <Input placeholder="您的教育背景" />
          </Form.Item>

          <Form.Item
            name="location"
            label="所在地"
          >
            <Input placeholder="您的所在地" />
          </Form.Item>

          <Divider orientation="left">社交媒体</Divider>

          <Row gutter={24}>
            <Col xs={24} md={8}>
              <Form.Item
                name="website"
                label="个人网站"
              >
                <Input prefix={<GlobalOutlined />} placeholder="个人网站URL" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="github"
                label="GitHub"
              >
                <Input prefix={<GithubOutlined />} placeholder="GitHub主页" />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="linkedin"
                label="LinkedIn"
              >
                <Input prefix={<LinkedinOutlined />} placeholder="LinkedIn主页" />
              </Form.Item>
            </Col>
          </Row>

          {editMode && (
            <Form.Item className="form-actions">
              <Button type="primary" htmlType="submit" loading={loading}>
                保存更改
              </Button>
              <Button onClick={() => setEditMode(false)} style={{ marginLeft: 8 }}>
                取消
              </Button>
            </Form.Item>
          )}
        </Form>
      </Card>

      <Card className="skills-card" title="技能标签">
        <div className="skills-container">
          {userData.skills.map(skill => (
            <Tag color="#ff8c00" key={skill} className="skill-tag">
              {skill}
            </Tag>
          ))}
          {editMode && (
            <Tag className="add-skill-tag">
              <PlusOutlined /> 添加技能
            </Tag>
          )}
        </div>
      </Card>

      <Card className="interests-card" title="兴趣爱好">
        <div className="interests-container">
          {userData.personalInfo.interests.map(interest => (
            <Tag color="#FEA334" key={interest} className="interest-tag">
              {interest}
            </Tag>
          ))}
          {editMode && (
            <Tag className="add-interest-tag">
              <PlusOutlined /> 添加兴趣
            </Tag>
          )}
        </div>
      </Card>
    </div>
  );

  // 渲染网站设置内容
  const renderSiteSettingsContent = () => (
    <div className="site-settings-content">
      <Card 
        className="site-settings-card"
        title={<Title level={4}>网站设置</Title>}
      >
        <Form
          form={siteForm}
          layout="vertical"
          onFinish={handleSaveSiteSettings}
        >
          <Form.Item
            name="siteName"
            label="网站名称"
            rules={[{ required: true, message: '请输入网站名称' }]}
          >
            <Input placeholder="您的网站名称" />
          </Form.Item>

          <Form.Item
            name="siteDescription"
            label="网站描述"
          >
            <TextArea rows={2} placeholder="简短描述您的网站" />
          </Form.Item>

          <Form.Item
            name="siteKeywords"
            label="网站关键词"
            extra="多个关键词用逗号分隔"
          >
            <Input placeholder="例如：前端开发,React,JavaScript" />
          </Form.Item>

          <Divider orientation="left">首页内容</Divider>

          <Form.Item
            name="homeBanner"
            label="首页横幅文字"
          >
            <TextArea rows={2} placeholder="首页顶部显示的欢迎文字" />
          </Form.Item>

          <Form.Item
            name="homeIntro"
            label="首页简介"
          >
            <TextArea rows={4} placeholder="首页关于您的简介" />
          </Form.Item>

          <Form.Item className="form-actions">
            <Button type="primary" htmlType="submit" loading={loading}>
              保存设置
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );

  // 渲染账户安全内容
  const renderSecurityContent = () => (
    <div className="security-content">
      <Card className="security-card" title={<Title level={4}>账户安全</Title>}>
        <List
          itemLayout="horizontal"
          dataSource={[
            {
              title: '修改密码',
              description: '定期更改密码可以提高账户安全性',
              icon: <LockOutlined />,
              action: '修改'
            },
            {
              title: '两步验证',
              description: '启用两步验证，增强账户安全',
              icon: <SecurityScanOutlined />,
              action: '设置',
              toggle: true,
              toggled: false
            },
            {
              title: '登录设备管理',
              description: '查看并管理已登录的设备',
              icon: <TeamOutlined />,
              action: '查看'
            },
            {
              title: '账户注销',
              description: '永久删除您的账户和所有数据',
              icon: <ExclamationCircleOutlined style={{ color: '#ff4d4f' }} />,
              action: '注销',
              danger: true
            }
          ]}
          renderItem={item => (
            <List.Item
              actions={[
                item.toggle ? (
                  <Switch size="small" defaultChecked={item.toggled} />
                ) : (
                  <Button type={item.danger ? "text" : "link"} danger={item.danger}>
                    {item.action}
                  </Button>
                )
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar icon={item.icon} className={item.danger ? 'danger-icon' : ''} />}
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );

  // 根据当前选中的菜单项渲染内容
  const renderContent = () => {
    switch (menuKey) {
      case 'profile':
        return renderProfileContent();
      case 'site':
        return renderSiteSettingsContent();
      case 'security':
        return renderSecurityContent();
      default:
        return renderProfileContent();
    }
  };

  return (
    <div className="account-page">
      {/* 几何背景元素 */}
      <div className="geo-elements">
        <div className="geo-circle-1"></div>
        <div className="geo-triangle"></div>
        <div className="geo-line"></div>
        <div className="geo-dots"></div>
      </div>
      
      <div className="account-container">
        <Layout className="account-layout">
          {/* 侧边栏 */}
          <Sider
            width={280}
            className="account-sider"
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div className="user-profile">
              <div className="avatar-container">
                <Avatar 
                  size={100} 
                  src={userData.avatar} 
                  icon={<UserOutlined />}
                  className="user-avatar"
                />
                {editMode && (
                  <Upload
                    name="avatar"
                    showUploadList={false}
                    action="/api/upload" // 替换为您的上传API
                    onChange={handleAvatarChange}
                    className="avatar-uploader"
                  >
                    <Button 
                      icon={<UploadOutlined />} 
                      size="small"
                      className="upload-button"
                    >
                      更换头像
                    </Button>
                  </Upload>
                )}
              </div>
              <Title level={4} className="user-name">{userData.username}</Title>
              <Text type="secondary" className="user-title">{userData.personalInfo.jobTitle}</Text>
              <Paragraph ellipsis={{ rows: 2 }} className="user-bio">
                {userData.bio}
              </Paragraph>
            </div>
            
            <Menu
              mode="inline"
              selectedKeys={[menuKey]}
              onClick={handleMenuClick}
              className="account-menu"
            >
              <Menu.Item key="profile" icon={<UserOutlined />}>
                个人资料
              </Menu.Item>
              <Menu.Item key="site" icon={<SettingOutlined />}>
                网站设置
              </Menu.Item>
              <Menu.Item key="security" icon={<SecurityScanOutlined />}>
                账户安全
              </Menu.Item>
              <Menu.Item key="notifications" icon={<BellOutlined />}>
                通知设置
              </Menu.Item>
            </Menu>
            
            <div className="logout-container">
              <Button 
                type="primary" 
                danger 
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                className="logout-button"
              >
                退出登录
              </Button>
            </div>
          </Sider>
          
          {/* 主内容区 */}
          <Content className="account-content">
            {renderContent()}
          </Content>
        </Layout>
      </div>
    </div>
  );
};

// 添加缺少的图标组件
const PlusOutlined = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <defs><style></style></defs>
    <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
    <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
  </svg>
);

export default AccountPage; 