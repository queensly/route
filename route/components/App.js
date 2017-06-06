import React from 'react';
import {Link} from 'react-router';
let active = {background: "lavender"};
export default class App extends React.Component{
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="navbar-nav nav">
                            <li><Link activeStyle={active} to="/home">首页</Link></li>
                            <li><Link activeStyle={active} to="/user">用户信息</Link></li>
                            <li><Link activeStyle={active} to="/profile">个人设置</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        )
    }
}