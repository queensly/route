var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/message');
var MeSchema = new mongoose.Schema({
    name:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
exports.Messages = mongoose.model('Messages',MeSchema);