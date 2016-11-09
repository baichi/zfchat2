var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
});
app.all('*',function(req,res){
   var user = req.body;
   /*
     判断此邮箱是否已经保存到数据库过了，如果注册过了则直接登录成功，如果没有注册过则先保存到数据库中再登录成功
    */
});
app.listen(3000);