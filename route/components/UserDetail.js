import React from 'react';
import {hashHistory} from 'react-router';
export default class UserDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {users:{},editing:false};

    }
    componentWillMount(){
        var id = this.props.params.id;
        let users = localStorage.getItem('users');
        users = users?JSON.parse(users):[];
        users = users.find((item) => item.id == id);
        this.setState({users:users});
    }
    handleCli(){
        hashHistory.push('/user/list');
    }
    handledelete(id){
        let users = localStorage.getItem('users');
        users = users?JSON.parse(users):[];
        users = users.filter((item) => {
            return item.id!=id;
        });
        localStorage.setItem('users',JSON.stringify(users));
        hashHistory.push('/user/list');
    }
    handleup(){
        this.setState({editing:true})
    }
    makeSure(){
        var value = this.refs.name.value;
        var user = this.state.users;
        user.name = value;
        let users = localStorage.getItem('users');
        users = users?JSON.parse(users):[];
        users = users.map((item)=>{
            if(item.id==user.id){
                return user
            }
            return  item;
        });
        localStorage.setItem('users',JSON.stringify(users));
        this.setState({users:user,editing:false})
    }
    cancel(){
        this.setState({editing:false})
    }
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading"><button className="btn btn-success" onClick={this.handleCli}>返回</button></div>
                <div className="panel-body">ID: {this.state.users.id} <br/> name:
                    {this.state.editing?null:this.state.users.name}
                    {this.state.editing?<input ref="name" defaultValue={this.state.users.name} type="text"/>:null}
                </div>
                <div className="panel-footer">
                    {this.state.editing?null:<button className="btn btn-success" onClick={this.handleup.bind(this)}>修改</button>}
                    {this.state.editing?null:<button className="btn btn-danger" onClick={this.handledelete.bind(this,this.state.users.id)}>删除</button>}
                    {this.state.editing?<button className="btn btn-success" onClick={this.makeSure.bind(this)}>确认</button>:null}
                    {this.state.editing?<button className="btn btn-danger" onClick={this.cancel.bind(this)}>取消</button>:null}
                </div>
            </div>
        )
    }
}