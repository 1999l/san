import React from 'react';
import './Breach.css'

export default class Breach extends React.Component {
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
                <span style={{color:'#4c8f8d',paddingRight:'5px'}}>学员考勤</span>
                <span style={{color:'#ccc',paddingRight:'5px'}}>/</span>
                <span style={{color:'#555'}}>学员违纪</span>
            </div>
            <div style={{padding:'10px',marginBottom:'12px',borderBottom:'1px dotted #ccc'}}></div>

            <table style={{padding: '8px',margin:'0 12px'}}>
            <thead><tr style={{color: '#707070',
    fontWeight: '0',
    background: '#f2f2f2'}}>
        <th width="4%">姓名</th>
        <th width="6%">类型</th>
        <th width="5%">扣除（分数）</th>
        <th width="4%">剩余分数</th>
        <th width="10%">理由</th>
        <th width="5%">操作人</th>
        <th width="10%">操作时间</th>
        </tr></thead>
        <tbody><tr style={{border: '1px solid #ddd'}} ><td ></td><td ></td><td ></td><td ></td><td ></td><td ></td><td ></td></tr>
                    </tbody>
        </table>
            
            </div>
            
            
        )
    }
}