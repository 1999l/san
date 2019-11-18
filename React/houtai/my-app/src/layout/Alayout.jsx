import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


 export default class Alayout extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Router>
          <div style={{height:'7vh',
          lineHeight:'7vh',
          backgroundColor:'#001529',
          fontSize:'4vh',
          color:'#fff'}}>
            千峰教育</div>
      <Layout style={{ minHeight: '92vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>学员后台</span>
                </span>
              }
            >
                <Menu.Item key="1">匿名投诉</Menu.Item>
                <Menu.Item key="2">技术问题</Menu.Item>
              <Menu.Item key="3">项目上传</Menu.Item>
              <Menu.Item key="4">VIP</Menu.Item>
              <Menu.Item key="5">学员周报</Menu.Item>
              <Menu.Item key="6">我的资料</Menu.Item>
              <Menu.Item key="7">缴费明细</Menu.Item>
              <Menu.Item key="8">参加考试</Menu.Item>
              <Menu.Item key="9">学员评价</Menu.Item>
              <Menu.Item key="10">教学测评</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="11">Team 1</Menu.Item>
              <Menu.Item key="12">Team 2</Menu.Item>
            </SubMenu>
            
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

