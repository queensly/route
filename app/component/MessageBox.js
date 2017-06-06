import React from 'react';
import MessageForm from './MessageForm.js'
import MessageList from './MessageList.js'
export default class MessageBox extends React.Component{
    constructor(props){
        super(props);//在子类函数里一定要先调用父类的构造函数 父类的constructor
        //以下这种方式来初始化私有状态的
        this.state = {messages:[]};
    }
    componentDidMount(){
        /*let messages = this.props.model.list();
         this.setState({messages})*/
        this.props.model.list((messages)=>{
            this.setState({messages});
        });
    }
    addMessage(message){
        /*var messages = this.props.model.add(message);
        this.setState({
            messages:messages
        })*/
        this.props.model.add(message,(messages)=>{
            //设置修改状态为新的留言数组
            this.setState({
                messages
            });
        });
    }

    deleteMessage(id){
        /*let messages = this.props.model.remove(id);
        this.setState({messages});*/
        this.props.model.remove(id,(messages)=>{
            this.setState({messages});
        });
    }
    render(){
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                     <h3 className="text-center">珠峰留言板</h3>
                </div>
                <div className="panel-body">
                    <MessageList deleteMessage={this.deleteMessage.bind(this)} messages={this.state.messages}></MessageList>
                </div>
                <div className="panel-footer">
                    <MessageForm addMessage={this.addMessage.bind(this)}></MessageForm>
                </div>
            </div>
        )
    }
}