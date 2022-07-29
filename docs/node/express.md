---

sidebar: auto

---
## express框架

### 安装

**方式一:**

安装express-generator脚手架

```
npm install -g express-generator
```

创建项目 

```express express-demo ```

安装依赖 

```npm install ```

启动项目 

```node bin/www```

**方式二:**

从零搭建自己的express应用结构

```
npm init
```

```
npm install express --save
```

### demo初体验

创建一个express初体验.js文件,然后用node express初体验.js来运行

```js
const express = require('express')
const app = express()
const port = 3000
//监听默认的路径
app.get('/', (req, res) => {
  res.send('Hello World Example1234!')
})
app.post('/login', (req, res, next) => {
  res.end("Welcome Back~");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

### 中间件

中间件的本质是传递给express的一个回调函数；这个回调函数接受三个参数：请求对象（request对象）;响应对象（response对象）;next函数（在express中定义的用于执行下一个中间件的函数）

中间件中可以执行哪些任务呢

- 执行任何代码

- 更改请求（request）和响应（response）对象
- 结束请求-响应周期（返回数据）
- 调用栈中的下一个中间件

如果当前中间件功能没有结束请求-响应周期，则必须调用next()将控制权传递给下一个中间件功能，否则，请求 将被挂起。

#### 应用中间件

express主要提供了两种方式：app/router.use和app/router.methods

可以是 app，也可以是router

methods指的是常用的请求方式，比如： app.get或app.post等；

##### 普通中间件

```js
const express = require('express');

const app = express();

// 编写普通的中间件
// use注册一个中间件(回调函数)
app.use((req, res, next) => {
  console.log("注册了第01个普通的中间件~");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第02个普通的中间件~");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第03个普通的中间件~");
  res.end("Hello Middleware");
});

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功~");
});
```

##### 路径中间件

```js
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("common middleware01");
  next();
})

// 路径匹配的中间件
app.use('/home', (req, res, next) => {
  console.log("home middleware 01");
});

// 中间插入了一个普通的中间件
app.use((req, res, next) => {
  console.log("common middleware02");
  next();
})

app.use('/home', (req, res, next) => {
  console.log("home middleware 02");
});

app.listen(8000, () => {
  console.log("express初体验服务器启动成功~");
});

```

##### 连续注册中间件

```js
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("common middleware 01");
  next();
});

app.get('/home', (req, res, next) => {
  console.log("home path and method middleware 01");
  next();
})

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware 02");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 03");
  next();
}, (req, res, next) => {
  console.log("home path and method middleware 04");
  res.end("home page");
});

app.listen(8001, () => {
  console.log("express初体验服务器启动成功~");
});

```

##### 中间件应用-json-urlencoded解析

```js
const express = require('express');

const app = express();




// 使用express提供给我们的body解析
// body-parser: express3.x 内置express框架
// body-parser: express4.x 被分离出去
// body-parser类似功能: express4.16.x 内置成函数
app.use(express.json());
// extended
// true: 那么对urlencoded进行解析时, 它使用的是第三方库: qs
// false: 那么对urlencoded进行解析时, 它使用的是Node内置模块: querystring
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end("Coderwhy, Welcome Back~");
});

app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end("Upload Product Info Success~");
});

app.listen(8001, () => {
  console.log("express初体验服务器启动成功~");
});

```

##### form-data解析

使用```multer```库来解析form-data

安装

npm install --save multer

文档

[**multer**](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)

**demo**

```js
const express = require('express');
const multer = require('multer');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer();

app.use(upload.any());
app.post('/login', (req, res, next) => {
    console.log(req.body);
    res.end("用户登录成功~")
  });
  
  app.listen(8000, () => {
    console.log("form-data解析服务器启动成功~")
  });

```

##### 文件上传

也是依赖```multer```

具体看multer文档

##### 响应结果

```js
const express = require('express');
const router = require('./routers/users');

const app = express();

app.get('/products/:id/:name', (req, res, next) => {
  console.log(req.params);
  // req.params => 在数据库中查询真实的商品数据
  res.end("商品的详情数据~");
})

app.get('/login', (req, res, next) => {
  console.log(req.query);

  // 设置响应吗
  res.status(204);

  // res.type("application/json");
  // res.end(JSON.stringify({name: "why", age: 18}));
  // res.json({name: "why", age: 18})
  // 设置内容
  res.json(["abc", "cba", "abc"]);
});

/**
 * 举个例子:
 *   请求所有的用户信息: get /users
 *   请求所有的某个用户信息: get /users/:id
 *   请求所有的某个用户信息: post /users body {username: passwod:}
 *   请求所有的某个用户信息: delete /users/:id 
 *   请求所有的某个用户信息: patch /users/:id {nickname: }
 */

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功~");
});


```

##### 路由

```js
const express = require('express');
const userRouter = require('./routers/users');
const productRouter = require('./routers/products');

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(8000, () => {
  console.log("路由服务器启动成功~");
});


```

router.js

```js
/**
 * 举个例子:
 *   请求所有的用户信息: get /users
 *   请求所有的某个用户信息: get /users/:id
 *   请求所有的某个用户信息: post /users body {username: passwod:}
 *   请求所有的某个用户信息: delete /users/:id 
 *   请求所有的某个用户信息: patch /users/:id {nickname: }
 */

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(["why", "kobe", "lilei"]);
});

router.get('/:id', (req, res, next) => {
  res.json(`${req.params.id}用户的信息`);
});

router.post('/', (req, res, next) => {
  res.json("create user success~");
});

module.exports = router;

```

##### 静态服务器

```js
const express = require('express');

const app = express();

app.use(express.static('./build'));

app.listen(8000, () => {
  console.log("路由服务器启动成功~");
});

```

