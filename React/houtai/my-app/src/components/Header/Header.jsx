import React from 'react';

export default class Weekly extends React.Component {
    tui(){
        window.sessionStorage.removeItem('data');
        window.location.href = "http://localhost:3000/#/"

    }
    render() {
        return (

<div style={{height:'7vh',
lineHeight:'7vh',
backgroundColor:'#001529',
fontSize:'4vh',
color:'#fff',
position: 'relative'}}>
千峰教育<p style={{
        display: 'inline-block',
       position: 'absolute',
       right: '30px',
        fontSize: '14px',
        lineHeight:'7vh',
        color: '#fff'
    
}}><span>{JSON.parse(window.sessionStorage.getItem('data')).username}</span>&nbsp;&nbsp;&nbsp;
<span onClick={this.tui.bind(this)} style={{ cursor: 'pointer' }}>退出</span></p></div>
        )
    }
}