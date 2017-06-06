import React from 'react';
import {hashHistory} from 'react-router';
export default class UserAdd extends React.Component{
    handleSub(event){
        event.preventDefault();
        var name = this.refs.name.value;
        var users = localStorage.getItem('users');
        users = users?JSON.parse(users):[];
        var user = {name:name};
        user.id = users.length?users[users.length-1].id+1:1;
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        hashHistory.push('/user/list');
    }
    render(){
        return (
            <form onSubmit={this.handleSub.bind(this)}>
               <div className="form-group">
                   <label htmlFor="name" className="control-label">姓名</label>
                   <input type="text" ref="name" id="name" className="form-control"/>
               </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-success"/>
                </div>
            </form>
        )
    }
}