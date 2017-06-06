const MESSAGES = 'MESSAGES';
module.exports = {
    list(){
        let messageStr = localStorage.getItem(MESSAGES);
        return messageStr?JSON.parse(messageStr):[];
    },
    add(message){
        message.createAt = new Date();
        let messages = this.list();
        message.id = messages.length>0?messages[messages.length-1].id+1:1;
        messages.push(message);
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        return messages;
    },
    remove(id){
        let messages = this.list();
        messages = messages.filter(function (item) {
            return item.id!=id;
        });
        localStorage.setItem(MESSAGES,JSON.stringify(messages));
        return messages;
    }
};