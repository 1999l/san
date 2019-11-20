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
import Vip from "../components/Vip/Vip"
import Weekly from "../components/Weekly/Weekly"
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
              <Menu.Item key="4"><Link to="/Vip">VIP</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/Weekly">学员周报</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/Vip">我的资料</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/Vip">缴费明细</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/Vip">参加考试</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/Vip">学员评价</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/Vip">教学测评</Link></Menu.Item>
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
            <Route path="/Vip">
              <Vip />
            </Route>
            <Route path="/Weekly">
              <Weekly />
            </Route>
          </Switch>
          </Layout>
      </Layout>
     
    <Redirect to="/Complaint" />
    </Router>
    );
  }
}

