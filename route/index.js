import React from 'react';
import ReactDOM from 'react-dom';
//当一个组件默认到处的时候 导入的变量名是可以随便起的
/*import App from './components/App.js';
import Home from './components/Home.js';
import User from './components/User.js';
import Profile from './components/Profile.js';*/
import {App,User,Home,Profile} from './components'
require('bootstrap/dist/css/bootstrap.css');
import {Route,Router,hashHistory,Link,IndexRoute} from 'react-router';
/*window.getUsers = function () { //全局变量
    let users = localStorage.getItem('users');
    return users?JSON.parse(users):[];
};*/
/*
* Route 代表一个路由规则
* Router 路由容器
* hashHistory 用来管理历史的
* Link 用来创建导航的
* */

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
             <IndexRoute component={Home}/>
             <Route path="home" component={Home}></Route>
             <Route path="user" component={User}>
                  <Route path="list" component={User.UserList}></Route>
                  <Route path="add" component={User.UserAdd}></Route>
                  <Route path="detail/:id" component={User.UserDetail}></Route>
             </Route>
             <Route path="profile" component={Profile}></Route>
        </Route>
    </Router>,
    app);