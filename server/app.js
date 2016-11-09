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
     1.先引入monoose 2. 连接数据库 3. 定义UserSchema 4.定义UserModel
     5. 用UserModel查询此邮箱是否有对应的用户，如果有则直接写入session,如果没有则把此用户保存到数据库中，再写入session,最后返回成功消息 {code:1,data:user}
    */
});
app.listen(3000);