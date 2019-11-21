import React from 'react'
import './Login.css'
import { Button } from 'antd';
import stores from '../../stores/index.js'
import axios from 'axios'
import qs from "qs";
import Cookies from "js-cookie";


export default class Complaint extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        console.log(stores.getState())
        this.state = {
            num: '',
            psw: '',
            username: ''
        }
    }


    xff() {
        //方式1、使用axio发送异步ajax请求
        let param = {
            num: this.state.num,
            psw: this.state.psw
        };
        param = qs.stringify(param);

        let username = Cookies.get("username");

        if (username) {
            window.location.href = "http://localhost:3000/#/mine/index"
        } else {
            axios.post("http://localhost:2000/user", param)
                .then(({ data }) => {
                    console.log({ data })
                    if (data.code === 1) {
                        let usernames = data.data.username
                        Cookies.set("username", usernames)
                        window.sessionStorage.setItem('username', JSON.stringify(usernames))
                        let name = Cookies.get("username");
                        stores.dispatch({
                            type: 'COOKINAME',
                            username: name
                        })
                        console.log(stores.getState())
                        window.location.href = "http://localhost:3000/#/mine/index"
                    } else {
                        alert('密码或账号错误');
                    }
                })
                .catch(error => {
                    console.log(error.message)
                })
        }

    }
    componentDidMount() {
        console.log()
    }
    getValue(event) {
        stores.dispatch({
            type: 'COOKINAME',
            num: event.target.value
        })
        this.setState({
            num: event.target.value
        })
    }
    getValue1(event) {
        stores.dispatch({
            type: 'COOKINAME',
            psw: event.target.value
        })
        this.setState({
            psw: event.target.value
        })
    }
    render() {
        return (
            <div id="login-box" className="login-box visible widget-box no-border">
                <div className="widget-body">
                    <div className="widget-main-box" style={{ padding: '16px 36px 16px 36px' }}>
                        <h4 className="header blue lighter bigger" style={{ textAlign: 'center', fontSize: '27px' }}>
                            学员后台系统</h4>
                        <div className="space-6"></div>
                        <form className="form-vertical login-form" name="form">
                            <fieldset>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="text" value={this.state.num} onChange={this.getValue.bind(this)}
                                            className="form-control" placeholder="身份证号码/学号" required="required" />
                                    </span>
                                </label>
                                <label className="block clearfix">
                                    <span className="block input-icon input-icon-right">
                                        <input type="password" value={this.state.psw} onChange={this.getValue1.bind(this)}
                                            className="form-control" placeholder="密码" required="required" />
                                    </span>
                                </label>
                                <div className="space"></div>

                                < Button onClick={this.xff.bind(this)}
                                    className="width-100 pull-right btn btn-sm btn-primary">
                                    登录</Button>


                                <div className="space-4"></div>
                            </fieldset>
                        </form>
                        <div className="social-or-login center"><span className="bigger-110"
                            style={{ color: '#428bca' }}>New Student System 体验全新学员系统</span></div>
                    </div>
                    <div className="toolbar clearfix">
                        <div style={{ textAlign: 'center', color: 'white' }}>
                            <a style={{ color: 'white' }} target="_blank"> 学习总结入口 </a>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}