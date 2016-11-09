var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/zfchat');
var UserSchema = new mongoose.Schema({
    email:String
});

exports.User = mongoose.model('User',UserSchema);
