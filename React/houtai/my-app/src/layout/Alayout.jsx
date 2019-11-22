import { Layout, Menu, Icon } from 'antd';
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
import Breach from "../components/Breach/Breach"
import Material from "../components/Material/Material"
import Header from "../components/Header/Header"
import Exam from "../components/Exam/Exam"
const { Sider } = Layout;
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
           <Header />
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
              <Menu.Item key="1"><Link to="/home/Complaint">匿名投诉</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/home/Technology">技术问题</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/home/Upload">项目上传</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/home/Vip">VIP</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/home/Weekly">学员周报</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/home/Material">我的资料</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/home/Vip">缴费明细</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/home/Exam">参加考试</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/home/Vip">学员评价</Link></Menu.Item>
              <Menu.Item key="10"><Link to="/home/Vip">教学测评</Link></Menu.Item>
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
              <Menu.Item key="12"><Link to="/home/Breach">学员违纪</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route path="/home/Complaint" >
              <Complaint />
            </Route>
            <Route path="/home/Technology">
              <Technology />
            </Route>
            <Route path="/home/Upload">
              <Upload />
            </Route>
            <Route path="/home/Vip">
              <Vip />
            </Route>
            <Route path="/home/Weekly">
              <Weekly />
            </Route>
            <Route path="/home/Material">
              <Material />
            </Route>
            <Route path="/home/Exam">
              <Exam />
            </Route>
            

            <Route path="/home/Breach">
              <Breach />
            </Route>
          </Switch>
          </Layout>
      </Layout>
     
    <Redirect to="/home/Complaint" />
    </Router>
    );
  }
}

