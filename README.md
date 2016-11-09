## 初始化项目
1. 生成package.json项目配置文件
```
npm init -y
```

2. 生成 .gitignore 忽略文件
```
node_modules
lib
.idea
```

3. 生成.bowerrc
bower安装的库的存放文件夹
```
{
"directory":"./public/lib"
}
```

4. bower.json
```
bower init 
```

5. 安装前台依赖的模块
```
npm install angular angular-route angular-moment jquery bootstrap --save
```

6. 安装后台依赖的模块
```
npm install express socket.io cookie-parser express-session mongoose --save
```

