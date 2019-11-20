import React from 'react';
import './Material.css'  
import huaji from "../../asset/huaji.gif" 

export default class Material extends React.Component {
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
            <div style={{padding:'10px 10px 13px',margin:'0 10px 12px 10px',borderBottom:'1px dotted #ccc'}}>
            <button  className="xiu">修改</button>
            &nbsp;
            </div>
           <div style={{padding:'0 20px'}}>
               <div className="left">
                   <div className="touxiangkuang">
                       <img src={huaji} alt=""/>
                   </div>
               </div>
               <div className="right"></div>
           </div>
            
            </div>
            
            
        )
    }
}