import React from 'react';

export default class Vip extends React.Component {
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
                <span style={{color:'#555'}}>VIP</span>
            </div>
            <div style={{padding:'10px',
                        marginBottom:'12px',
                        borderBottom:'1px solid #ccc',
                        fontSize:'15px',
                        color:'#ff0000'}}>您还不是VIP学员，填写下面表单可以申请VIP学员！</div>
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
           <input type="text" value={JSON.parse(window.sessionStorage.getItem('data')).username} readOnly={true} style={{border:'1px dotted #939192',
           backgroundColor:' #f5f5f5',
           paddingLeft:'5px' }} />
           <div style={{height:'15px'}}></div>
                <span style={{color:'red',
                            width:'20%',
                            display:'inline-block',
                            textAlign:'right',
                            verticalAlign: 'top'}}>
                                申请理由：</span>
            <textarea placeholder="请输入申请理由"
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
                    }}>申请</button>
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