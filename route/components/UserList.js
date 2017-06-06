import React from 'react';
import {Link} from 'react-router';
let active = {background: "lavender"};
export default class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {users:[]};
    }
    componentWillMount(){
        let users = localStorage.getItem('users');
        users = users?JSON.parse(users):[];
        this.setState({users})
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map((user,index)=>{
                        return <li key={index} className="list-group-item"><Link activeStyle={active} to={"/user/detail/"+user.id}>{user.name}</Link></li>
                    })
                }

            </ul>
        )
    }
}