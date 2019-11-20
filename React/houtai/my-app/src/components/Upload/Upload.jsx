import React from 'react';
// import { Input, Button } from 'antd';
// const { TextArea } = Input;
export default class Upload extends React.Component {
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
                <span style={{color:'#555'}}>项目上传</span>
            </div>
            <div style={{padding:'10px',marginBottom:'12px',borderBottom:'1px dotted #ccc',fontSize:'22px'}}>学员项目上传</div>


            <div  style={{textAlign:'left',
            border:'1px solid #ccc',
            padding:'16px 12px',
            margin:'0 12px'}}>
               
               <div style={{marginTop: '25px'}}>
                                <label  style={{color:'red',width:'17%',textAlign:'right',display:'inline-block',paddingRight:'15px'}} > 项目文件： </label>
                                <div style={{display:'inline-block'}}>
                                    <div style={{float:'left',display:'inline-block'}}>
                                        <input type="file" name="itemupload" id="file" style={{fontSize: '13px'}} />
                                    </div>
                                    <span style={{color:'red',fontSize: '13px'}}><b>注：请上传格式为【zip,rar】的压缩包,上传大小不得超过10M！</b></span>
                                                                    </div>

                            </div>
                <div style={{paddingTop:'15px',marginBottom:'15px'}}>
                    <div style={{marginLeft:'30%',
                marginTop:'50px'}}>
                    <button style={{
                        backgroundColor:'#6fb3e0',
                        fontSize:'14px',
                        padding:'6px 12px',
                        color:'#fff',
                        border:'5px solid #6fb3e0'
                    }}>提交</button>
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