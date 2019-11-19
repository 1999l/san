import React from 'react';
import { Input, Button } from 'antd';
const { TextArea } = Input;
export default class Complaint extends React.Component {
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
                <span style={{color:'#555'}}>匿名投诉</span>
            </div>
            <div style={{padding:'10px',marginBottom:'12px',borderBottom:'1px solid #ccc'}}></div>
            <div  style={{textAlign:'left',
            border:'1px solid #ccc',
            padding:'16px 12px',
            margin:'0 12px'}}>
                <span style={{color:'red',
                            width:'20%',
                            display:'inline-block',
                            textAlign:'right',
                            verticalAlign: 'top'}}>
                                投诉内容：</span>
            <textarea placeholder="本投诉是匿名投诉，不会暴露您的信息"
             style={{width: '60%',
                height: '290px', 
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
                    }}>添加</button>
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
            </div>
        )
    }
}