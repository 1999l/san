import React from 'react';
import './Technology.css'
import axios from 'axios'
import qs from "qs";
import { getCurrentDate } from '../getCurrentDate'

export default class Technology extends React.Component {
    state = {
        textvalue: '',
        dss: window.sessionStorage.getItem('wenti')
    }
    constructor(props) {
        super(props)
        let param = {
            username: JSON.parse(window.sessionStorage.getItem('data')).username
        }
        param = qs.stringify(param);
        axios.post("http://localhost:2000/technologyfind", param)
            .then(({ data }) => {
                console.log(data);
                if (data) {
                    let str1 = '';
                    for (let a = 0; a < data.length; a++) {
                        str1 += `<tr >
                        <th >${data[a].username}</th>
                        <th >${data[a].getData}</th>
                        <th >${data[a].textvalue}</th>
                        <th >${data[a].huida}</th>
                                </tr>`
                    }
                    this.state.dss = str1
                    window.sessionStorage.setItem('wenti', str1)
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
            getData: getCurrentDate(),
            huida:''
        };
        param = qs.stringify(param);
        if (this.state.textvalue.trim()) {
            axios.post("http://localhost:2000/technology", param)
                .then(({ data }) => {
                    console.log(data);
                    let param = {
                        username: JSON.parse(window.sessionStorage.getItem('data')).username
                    }

                    param = qs.stringify(param);
                    axios.post("http://localhost:2000/technologyfind", param)
                        .then(({ data }) => {
                            console.log(data);
                            if (data) {
                                let str1 = '';
                                for (let a = 0; a < data.length; a++) {
                                    str1 += `<tr >
                                               <th >${data[a].username}</th>
                                               <th >${data[a].getData}</th>
                                               <th >${data[a].textvalue}</th>
                                               <th >${data[a].huida}</th>
                                            </tr>`
                                }
                                window.sessionStorage.setItem('wenti', str1)
                                this.setState({
                                    textvalue: '',
                                    dss: window.sessionStorage.getItem('wenti')

                                })
                            }

                        });
                })
        }
    }



    render() {
        return (
            
            <div style={{height:'100%',
            backgroundColor:'#fff'}}>
               <div style={{height:'41px',
                lineHeight:'40px',
                borderBottom:'1px solid #ccc',
                textAlign:'left',
                fontSize:'13px',
                paddingLeft:'16px'}}>
                <span style={{color:'#4c8f8d',paddingRight:'5px'}}>学员后台</span>
                <span style={{color:'#ccc',paddingRight:'5px'}}>/</span>
                <span style={{color:'#555'}}>技术问题</span>
            </div>
            <div style={{padding:'10px',marginBottom:'12px',borderBottom:'1px dotted #ccc'}}></div>
            <div  style={{textAlign:'left',
            border:'1px solid #ccc',
            padding:'16px 12px',
            margin:'0 12px 16px 12px'}}>
                <span style={{color:'red',
                            width:'20%',
                            display:'inline-block',
                            textAlign:'right',
                            verticalAlign: 'top',}}>
                            学员姓名：</span>
           <input type="text" value={JSON.parse(window.sessionStorage.getItem('data')).username} readOnly={true} style={{border:'1px solid #939192',
           backgroundColor:' #f5f5f5',
           paddingLeft:'5px' }} />
           <div style={{height:'15px'}}></div>
                <span style={{color:'red',
                            width:'20%',
                            display:'inline-block',
                            textAlign:'right',
                            verticalAlign: 'top'}}>
                                问题内容：</span>
            <textarea placeholder="请输入技术内容"
             style={{width: '60%',
                height: '90px', 
                margin: '0px' ,
                verticalAlign: 'top'
                }} ></textarea>
                <div style={{paddingTop:'15px',marginBottom:'15px'}}>
                    <div style={{marginLeft:'30%',
                marginTop:'50px'}}>
                    <button style={{
                        backgroundColor:'#6fb3e0',
                        fontSize:'14px',
                        padding:'6px 12px',
                        color:'#fff',
                        border:'5px solid #6fb3e0'
                    }}
                    onClick={this.addItem.bind(this)}>提问</button>
                    <button style={{
                        backgroundColor:'#abbac3',
                        fontSize:'14px',
                        padding:'6px 12px',
                        color:'#fff',
                        border:'5px solid #abbac3',
                        marginLeft:'20%'
                    }}>返回</button>
                </div>
                </div>
            </div>
           
            <table style={{padding: '8px',margin:'0 12px'}}>
            <thead><tr style={{color: '#707070',
    fontWeight: '0',
    background: '#f2f2f2'}}>
            <th width="3%" >姓名</th>
            <th width="20%">问题理由</th>
            <th width="8%">创建时间</th>
            <th width="8%">回复</th>
        </tr></thead>
        <tbody  dangerouslySetInnerHTML={{ __html: this.state.dss }} />
        </table>
            
            </div>
            
            
        )
    }
}