import './Exam.css'
import React from 'react';
import {  Breadcrumb, Layout } from 'antd';
const { Content } = Layout

export default class MoneyDetail extends React.Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
    }
    render() {
        return (
            <>
                <Breadcrumb style={{ margin: '10px 16px', textAlign: 'left' }}>
                    <Breadcrumb.Item style={{ color: '#428BCA' }}>学员后台</Breadcrumb.Item>
                    <Breadcrumb.Item>考试班级</Breadcrumb.Item>
                </Breadcrumb>
                <div className="header-box"
                    style={{
                        width: '100%', 
                        borderTop: '1px solid #e2e2e2', 
                        borderBottom: '1px solid #e2e2e2',
                        textAlign: 'center'
                    }}>
                        <h3 className="header-text">考试列表</h3>
                </div>
                <Content
                    style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                    }}
                >
                    <div className="exam">
                        
                        <div className="content">
                                    <div className="myitem">
                                    <div className="defen">
                                        考试已结束
                                    <br></br>
                                        不能进行考试
                                    </div>
                                <h2>广州-HTML5-1909班第一阶段第四周考试+2019-08-09+考试</h2>
                                <p>考试时间：90分钟</p>
                                <p>总分数：100分</p>
                                <p title="HTML5（考试大纲）-->第1周-->HTML第一周新
                                    HTML5（考试大纲）-->第2周-->HTML第二周新
                                    HTML5（考试大纲）-->第3周-->HTML第三周新
                                    HTML5（考试大纲）-->第4周-->HTML第四周新"
                                    className="dagang">考试范围：
                                    <span>HTML5（考试大纲）--&gt;第1周--&gt;HTML第一周新;<br/>
                                    HTML5（考试大纲）--&gt;第2周--&gt;HTML第二周新;<br/>
                                    HTML5（考试大纲）--&gt;第3周--&gt;HTML第三周新;<br/>
                                    HTML5（考试大纲）--&gt;第4周--&gt;HTML第四周新;<br/>
                                    </span>
                                </p>
                                <p>考试时间：2019-08-09</p>
                            </div>
                        </div>
                    </div>
                </Content>
            </>
        )
    }
}