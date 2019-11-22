
import React from 'react';
import { Input, Button, Breadcrumb } from 'antd';
import './Complain.css'
import axios from 'axios'
import qs from "qs";
import { getCurrentDate } from './getCurrentDate'
// console.log(getCurrentDate())

const { TextArea } = Input;

export default class Complaint extends React.Component {
    state = {
        textvalue: '',
        dss: window.sessionStorage.getItem('jubao')
    }
    constructor(props) {
        super(props)
        let param = {
            username: JSON.parse(window.sessionStorage.getItem('data')).username
        }
        param = qs.stringify(param);
        axios.post("http://localhost:2000/complaintfind", param)
            .then(({ data }) => {
                console.log(data);
                if (data) {
                    let aaa = '';
                    for (let a = 0; a < data.length; a++) {
                        aaa += `<tr >
                                   <th >${data[a].getData}</th>
                                   <th >${data[a].textvalue}</th>
                                </tr>`
                    }
                    this.state.dss = aaa
                    window.sessionStorage.setItem('jubao', aaa)
                }

            });
    }

    getValue(event) {
        this.setState({
            textvalue: event.target.value
        })
    }

    addItem() {
        let param = {
            username: JSON.parse(window.sessionStorage.getItem('data')).username,
            textvalue: this.state.textvalue,
            getData: getCurrentDate()
        };
        param = qs.stringify(param);
        if (this.state.textvalue.trim()) {
            axios.post("http://localhost:2000/complaint", param)
                .then(({ data }) => {
                    console.log(data);
                    let param = {
                        username: JSON.parse(window.sessionStorage.getItem('data')).username
                    }

                    param = qs.stringify(param);
                    axios.post("http://localhost:2000/complaintfind", param)
                        .then(({ data }) => {
                            console.log(data);
                            if (data) {
                                let aaa = '';
                                for (let a = 0; a < data.length; a++) {
                                    aaa += `<tr >
                                               <th >${data[a].getData}</th>
                                               <th >${data[a].textvalue}</th>
                                            </tr>`
                                }
                                window.sessionStorage.setItem('jubao', aaa)
                                this.setState({
                                    textvalue: '',
                                    dss: window.sessionStorage.getItem('jubao')

                                })
                            }

                        });
                })
        }
    }

    render() {
        return (
            <>
                <Breadcrumb style={{ margin: '10px 16px', textAlign: 'left' }}>
                    <Breadcrumb.Item style={{ color: '#428BCA' }}>学员后台</Breadcrumb.Item>
                    <Breadcrumb.Item>匿名投诉</Breadcrumb.Item>
                </Breadcrumb>
                <div className="header-box"
                    style={{
                        width: '100%',
                        borderTop: '1px solid #e2e2e2',
                        borderBottom: '1px solid #e2e2e2',
                        textAlign: 'center',
                        minHeight: '20px'
                    }}></div>
                <div className='tab-content-box row-box'>
                    <div style={{ display: 'flex' }}>
                        <p style={{ width: '16.6666%', textAlign: 'right', color: 'red' }}>投诉内容：</p>
                        <TextArea
                            style={{
                                width: '702px', height: '247px', margin: '0px'
                            }}
                            placeholder="本投诉是匿名投诉，不会暴露您的信息"
                            value={this.state.textvalue}
                            onChange={this.getValue.bind(this)}
                        >
                        </TextArea>
                    </div>
                    <div className="bottom-box">
                        <Button className="btninfo"
                            style={{
                                color: '#fff', marginRight: '30px'
                            }} onClick={this.addItem.bind(this)}>添加</Button>
                        <Button style={{ backgroundColor: '#ccc' }}>返回</Button>
                    </div>
                </div>
                <div style={{ padding: '16px 12px' }}>
                    <table className="tb-box" style={{ width: '100%' }}>
                        <thead style={{ background: '#f2f2f2', color: '#707070', height: '36px' }}>
                            <tr>
                                <th width="4%">创建时间</th>
                                <th width="4%">投诉内容</th>
                            </tr>
                        </thead>
                        <tbody
                            dangerouslySetInnerHTML={{ __html: this.state.dss }} />

                    </table>
                </div>
            </>
        )
    }
}
