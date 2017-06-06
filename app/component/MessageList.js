import React from 'react';
import moment from 'moment';
require('moment/locale/zh-cn.js');
export default class MessageForm extends React.Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message,index)=>{
                        return <li className="list-group-item" key={index}>{message.name}:{message.content} <button className="btn btn-danger pull-right btn-xs" onClick={this.props.deleteMessage.bind(this,message._id)}>删除</button><span className="pull-right">{moment(message.createAt).fromNow()}</span></li>
                    })
                }
            </ul>
        )
    }
}
