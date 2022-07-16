---

sidebar: auto

---

# node.js



## 常用内置模块

### path

**路径拼接**

1.```path.resolve```

```javascript
const path = require('path');
const basePath = '/User';
const filename = 'abc.txt';
const filepath = path.resolve(basePath, filename);
console.log(filepath);
```

2.```path.join```

```js
const basepath = '../User/why';
const filename = './abc.txt';
const othername = './why.js';

const filepath1 = path.join(basepath, filename);
```



**获取路径的信息**

1.dirname:获取文件的父文件夹

2.basename：获取文件名

3.extname：获取文件扩展名

```javascript
const path = require('path')
const pathname = '/user/why/abc.txt'
console.log(path.dirname(pathname));///user/why
console.log(path.basename(pathname));//abc.txt
console.log(path.extname(pathname));//.txt
```

### File System（fs）

也成fs,表示文件系统

对于任何一个服务器端服务的语言都有自己的文件系统，因为服务器需要将各种数据，文件等放置到不同的地方

**读取文件的三种方式**

```javascript
const fs = require('fs');

// 案例: 读取文件的信息
const filepath = "./abc.txt";

// 1.方式一: 同步操作
const info = fs.statSync(filepath);
console.log("后续需要执行的代码");
console.log(info);

// 2.方式二: 异步操作
// fs.stat(filepath, (err, info) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(info);
//   console.log(info.isFile());
//   console.log(info.isDirectory());
// });
// console.log("后续需要执行的代码");

// 3.方式三: Promise
// fs.promises.stat(filepath).then(info => {
//   console.log(info);
// }).catch(err => {
//   console.log(err);
// });

// console.log("后续需要执行的代码");
```

**获取一个文件的状态**

同步获取一个文件的状态会阻塞代码的执行

方式1：同步

```javascript
const fs = require('fs')
const path = './test.txt'
const info = fs.statSync(filepath);
console.log("后续需要执行的代码");
console.log(info);
```

方式2：异步

```js
const fs = require('fs')
const path = './test.txt'
fs.stat(path, (err, info) => {
    console.log(info);
})
```

方式3：promise

```javascript
fs.promises.stat(filepath).then(info => {
  console.log(info);
}).catch(err => {
  console.log(err);
});
```

**文件的读写**

```fs.readFile```

fs.readFile(path[, options], callback)：读取文件的内容；

fs.writeFile(file, data[, options], callback)：在文件中写入内容；

```js
const fs = require('fs')
//1.文件写入
const content = "你好啊";

fs.writeFile('./test.txt', content, {flag: "a"}, err => {
  console.log(err);
});

// 2.文件读取
fs.readFile("./test.txt", {encoding: 'utf-8'}, (err, data) => {
    console.log(data);
  });
```

在上面的代码中，你会发现有一个大括号，这个是写入时填写的option参数

flag：https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system_flags

- w 打开文件写入，默认值； 

- w+打开文件进行读写，如果不存在则创建文件； 

- r+ 打开文件进行读写，如果不存在那么抛出异常； 

- r打开文件读取，读取时的默认值； 

- a打开要写入的文件，将流放在文件末尾。如果不存在则创建文件； 

- a+打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件

**encoding选项**

字符编码

**文件夹的操作**

创建文件夹

```js
const fs = require('fs')
const dirname = './djydir'
fs.mkdir(dirname, err => {
    console.log(err);
})
```

判断文件夹是否存在```fs.existsSync```

```js
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    console.log(err);
  });
}
```

重命名

```js
fs.rename("./djydir", "./kobe", (err) => {
    console.log(err);
});
```

读取文件夹中的所有文件

```js
fs.readdir(dirname, (err, files) => {
  console.log(files);
});
```

## Buffer

**数据的二进制**

计算机中所有的内容：文字、数字、图片、音频、视频最终都会使用二进制来表示，js处理二进制的时候，比如图片，只是告诉浏览器，图片是这个地址，然后叫个浏览器去处理的。

**Buffer和二进制**

可以将Buffer看成是一个存储二进制的数组，这个数组中的每一项，可以保存8位二进制： 00000000

**Buffer和字符串**

将一个字符串放入到Buffer中

```js
const message = "Hello";
const buffer = Buffer.from(message);
console.log(buffer);//<Buffer 48 65 6c 6c 6f>
```

如果是中文

```js
const message = "你好啊";

// 1.编解码相同
// 对中文进行编码: utf8
const buffer = Buffer.from(message);
console.log(buffer);

// // 对字节进行解码: utf8
console.log(buffer.toString());
```

## Stream流

当我们从一个文件中读取数据时，文件的二进制（字节）数据会源源不 断的被读取到我们程序中，这个一连串的字节，就是我们程序中的流。流应该是可读的，也是可写的。

在之前学习文件的读写时，我们可以直接通过 readFile或者 writeFile方式读写文件，为什么还需要流呢？

- 直接读写文件的方式，虽然简单，但是无法控制一些细节的操作
- 比如从什么位置开始读、读到什么位置、一次性读取多少个字节
- 读到某个位置后，暂停读取，某个时刻恢复读取等等
- 或者这个文件非常大，比如一个视频文件，一次性全部读取并不合适

### readable读

```js
const fs = require('fs')
// 流的方式读取
const reader = fs.createReadStream("./test.txt", {
    start: 3,
    end: 10,
    highWaterMark: 2
});
// 数据读取的过程
reader.on("data", (data) => {
    console.log(data);
  
    reader.pause(); //暂停读取
  
    setTimeout(() => {
      reader.resume();
    }, 1000);
});
reader.on('open', () => {
    console.log("文件被打开");
  })
  //文件读取完会触发
  reader.on('close', () => {
    console.log("文件被关闭");
  })
//   flags：默认是w，如果我们希望是追加写入，可以使用 a或者 a+；
// start：写入的位置
```

### writable写

- flags：默认是w，如果我们希望是追加写入，可以使用 a或者 a+；

- start：写入的位置

```js
const writer = fs.createWriteStream('./bar.txt', {
  flags: "r+",
  start: 4
});

writer.write("你好啊", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("写入成功");
});
```

### pipe

我们可以将读取到的输入流，手动的放到输出流中进行写入：

```js
const reader = fs.createReadStream("./foo.txt");
const writer = fs.createWriteStream('./foz.txt');

reader.pipe(writer);
writer.close();
```

## http模块

### web服务器初体验

```js
const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end("Hello Server");
});

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});
```

在浏览器打开http://localhost:8888，就可以看到res.end("Hello Server");输出的内容

### 

### request对象

```javascript
const server = http.createServer((req, res) => {
  // request对象中封装了客户端给我们服务器传递过来的所有信息
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);

  res.end("Hello Server");
});
```

#### URL

```js
const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 最基本的使用方式
  // if (req.url === '/login') {
  //   res.end("欢迎回来~");
  // } else if (req.url === '/users') {
  //   res.end("用户列表~");
  // } else {
  //   res.end("错误请求, 检查~");
  // }

  // /login?username=why&password=123
  const { pathname, query } = url.parse(req.url);
  if (pathname === '/login') {
    console.log(query);
    console.log(qs.parse(query));
    const { username, password } = qs.parse(query);
    console.log(username, password);
    res.end("请求结果~");
  }

  // console.log(req.url);
  // res.end("请求结果~");
});

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});

```

#### method

```js
const http = require('http');
const url = require('url');
const qs = require('querystring');

// 创建一个web服务器
const server = http.createServer((req, res) => {

  const { pathname } = url.parse(req.url);
  if (pathname === '/login') {
    if (req.method === 'POST') {
      // 拿到body中的数据
      req.setEncoding('utf-8');
      req.on('data', (data) => {
        const {username, password} = JSON.parse(data);
        console.log(username, password);
      });

      res.end("Hello World");
    }
  }
});

server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});

```

#### headers

```js
const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {
  console.log(req.headers);

  req.on('data', (data) => {
    
  })

  res.end("Hello Server");
});

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});

```



#### 响应结果

```js
const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 响应结果
  res.write("响应结果一");
  res.end("Hello World");
});

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});

```

#### 响应码

```js
const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 设置状态码
  // 方式一: 直接给属性赋值
  // res.statusCode = 400;
  // 方式二: 和Head一起设置
  res.writeHead(503)

  // 响应结果
  res.write("响应结果一");
  res.end("Hello World");
});

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});

```

#### 响应头

```js
const http = require('http');

// 创建一个web服务器
const server = http.createServer((req, res) => {

  // 设置响应的header
  // 设置方式一:
  // res.setHeader("Content-Type", "text/plain;charset=utf8");
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8"
  });

  // 响应结果
  res.end("<h2>Hello Server</h2>");
});

// 启动服务器,并且制定端口号和主机
server.listen(8888, '0.0.0.0', () => {
  console.log("服务器启动成功~");
});

```

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

##### form-data上传文件

**multer**

安装

```javascript
cnpm install --save multer
```

文档

[**multer**](https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md)
