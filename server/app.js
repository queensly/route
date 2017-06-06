var express = require('express');
var bodyParser = require('body-parser');
var Message = require('./model').Messages;
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,OPTIONS');
    if(req.method=='OPTIONS'){
        return res.end();
    }
    next();
});
app.get('/messages', function (req, res) {
    Message.find({}, function (err, docs) {
        res.send(docs);
    })
});
app.post('/messages',function(req,res){
    var message = req.body;
    Message.create(message,function(err,doc){
        Message.find({},function(err,messages){
            res.send(messages);
        });
    })
});
app.delete('/messages/:_id', function (req, res) {
    var _id = req.params._id;
    Message.remove({_id}, function (err, docs) {
        Message.find({},function(err,messages){
            res.send(messages);
        });
    })
});
app.listen(3000);