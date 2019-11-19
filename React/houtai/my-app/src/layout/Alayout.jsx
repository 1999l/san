import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import "./Alayout.css"
import Complaint from "../components/Complaint/Complaint"
import Technology from "../components/Technology/Technology"
import Upload from "../components/Upload/Upload"
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
                <Menu.Item key="1"><Link to="/Complaint">匿名投诉</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/Technology">技术问题</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/Upload">项目上传</Link></Menu.Item>
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
                  <span>学员考勤</span>
                </span>
              }
            >
              <Menu.Item key="11">学员请假</Menu.Item>
              <Menu.Item key="12">学员违纪</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route path="/Complaint" >
              <Complaint />
            </Route>
            <Route path="/Technology">
              <Technology />
            </Route>
            <Route path="/Upload">
              <Upload />
            </Route>
          </Switch>
          </Layout>
      </Layout>
     
    <Redirect to="/Complaint" />
    </Router>
    );
  }
}

