import React from 'react';
export default class MessageForm extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        let name = this.refs.name.value;
        let content = this.refs.content.value;
        this.props.addMessage({
            name,content
        });
        this.refs.content.value = '';
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" ref="name" id="name" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <input type="text" ref="content" id="content" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="提交" className="btn btn-success"/>
                </div>
            </form>
        )
    }
}
/*
 * 增加留言
 * 1.给表单绑定事件 onClick onSubmit
 * 2.当前事件发生的时候取得用户填写的信息 然后封装成一对象增加到messages数组中
 * */