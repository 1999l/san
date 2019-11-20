import React from 'react';
import './Material.css'  
import huaji from "../../asset/huaji.gif" 

export default class Material extends React.Component {
    render() {
        return (
            
            <div style={{height:'93vh',
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
           <div style={{padding:'0 20px',display:'flex'}}>
               <div className="left">
                   <div className="touxiangkuang">
                       <img src={huaji} alt=""/>
                   </div>
                   <div className="mingzilan">
                       <i></i>&nbsp;<span>刘依依&nbsp;&nbsp;(女)</span>
                   </div>
               </div>
               <div className="right">
                   <table>
                   <tbody>
                       <tr>
                           <td>身份证号码</td>
                            <td>******************</td>
                       </tr>
                       <tr>
                           <td>手机号</td>
                            <td>******************</td>
                       </tr>
                       <tr>
                           <td>QQ</td>
                            <td>******************</td>
                       </tr>
                       <tr>
                           <td>学号</td>
                            <td>GZ190913007</td>
                       </tr>
                       <tr>
                           <td>毕业学院</td>
                            <td>广西民族师范学院 通信工程</td>
                       </tr>
                       <tr>
                           <td>在校状态</td>
                            <td>大四</td>
                       </tr>
                       <tr>
                           <td>学历</td>
                            <td>本科</td>
                       </tr>
                       <tr>
                           <td>千峰班级</td>
                            <td>广州HTMl就业班1909期</td>
                       </tr>
                       <tr>
                           <td>招生老师</td>
                            <td>冯艳艳</td>
                       </tr>
                       <tr>
                           <td>报名日期</td>
                            <td>2019-03-21</td>
                       </tr>
                       </tbody>
                   </table>
               </div>
           </div>
            <div >
                <div className="xiaoxi">
                    <h5 >[<b>我的消息</b>]</h5>
                    <table className="table table-bordered">
                        <tbody><tr>
                            <th width="24%">消息内容</th>
                            <th width="3%">时间</th>
                        </tr>
                    </tbody></table>
                </div>
                <div className="xiaoxi">
                    <h5 >[<b>班主任寄语</b>]</h5>
                    <table className="table table-bordered">                
                        <tbody><tr>
                            <th width="4%">评价老师</th>
                            <th width="20%">寄语内容</th>
                            <th width="5%">时间</th>
                        </tr>
                    </tbody></table>
                    </div>
                    <div className="xiaoxi">
                    <h5 >[<b>千锋其他会员开通</b>]</h5>
                    <table className="table table-bordered">                
                    <tbody><tr>
							<th width="4%">产品名称</th>
							<th width="20%">产品描述</th>
							<th width="15%">开通信息</th>
						</tr>
						<tr>
								<td>扣丁学堂</td>
								<td>扣丁学堂大量免费线上视频，不定期更新，为您规划职业路线。<br/>官方网站: 
                                <a href="http://www.codingke.com">http://www.codingke.com</a> </td>
								<td><font color="red">您还未开通扣丁学堂 </font> 
                                <button >立即开通</button></td>
															</tr>				
                	</tbody></table>
                    </div>
            </div>
            </div>
            
            
        )
    }
}