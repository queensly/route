//es7 语法
/*
export App from './App';
export User from './User';
export Home from './Home';
export Profile from './Profile';*/

import App from './App';
import User from './User';
import Home from './Home';
import Profile from './Profile';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
User.UserAdd = UserAdd;
User.UserList = UserList;
User.UserDetail = UserDetail;
export {App,User,Home,Profile}