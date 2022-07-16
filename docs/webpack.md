---
sidebar: auto
---
# webpack学习笔记

## 安装

```javascript
cnpm install webpack webapck-cli -g
```

### 生成package.json

```javascript
npm init -y
```

### 开发依赖

安装

```javascript
cnpm install webpack webpack-cli -D
```



### 打包dist文件

先配置package.json

```javascript
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js",
    "dev": "webpack --mode development"
  },
```

## 配置

### webpack配置文件

在根目录下创建一个```webpack.config.js```文件

```javascript
const path = require("path"); //node的路径模块
module.exports = {
    entry: "./src/index.js", //配置入口文件
    // 配置出口文件
    output: {
        path: path.resolve(__dirname, "./dist"), //__dirname：找到当前文件的绝对路径
        filename: "js/bundle.js", //filename:可以设置打包后的dist文件下面的文件名  js/是js文件的文件夹name
    },
    "mode":"development"
};
```

然后执行```npm run build```如果看到dist文件，就成功了

### 指定配置文件

如果配置文件不叫```webpack.config.js```而叫```my.config.js```的时候可以设置一下```package.json```

```javascript
"scripts":{
   "build":"webpack --config my.config.js"
}
```

### 配置html模板插件

js文件打包好了,但是我们不可能每次在`html`文件中手动引入打包好的js。因此我们需要一个插件来帮我们完成这件事情

```js
npm i -D html-webpack-plugin
```

```js
const path = require("path"); //node的路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin') //引入插件
module.exports = {
    entry: "./src/main.js", //配置入口文件
    // 配置出口文件
    output: {
        path: path.resolve(__dirname, "./dist"), //__dirname：找到当前文件的绝对路径
        filename: "js/bundle.js", //filename:可以设置打包后的dist文件下面的文件名  js/是js文件的文件夹name
    },
    mode: "development", // 开发模式
    plugins: [
        //html-webpack-plugin
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
        }),
    ],
};

```

### 插件Plugin

Plugin可以用于执行更加广泛的任务，比如打包优化、资源管理、环境变量注入等。

#### CleanWebpackPlugin

作用:每次打包的生成的dist文件，不用手动去删除掉，用了这个插件会覆盖掉原来的dist文件

安装

```javascript
cnpm install clean-webpack-plugin -D
```

使用

在```webpack.config.js```中

```javascript
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //引入插件
module.exports={
  plugins:[
    new CleanWebpackPlugin() //插件使用
  ]
}
```

#### HtmlWebpackPlugin

在打包后的dist文件夹里面加上```index.html```

安装

```javascript
cnpm install html-webpack-plugin -D
```

使用

在```webpack.config.js```中

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin"); //引入插件
module.exports={
  plugins:[
  //插件使用
  //new HtmlWebpackPlugin()
   //自定义魔板
   new HtmlWebpackPlugin({
      template: "./public/index.html",   //设置这个打包dist文件下的index.html会把我们设置的html内容合并进去
      title: "哈哈哈哈"
    }), 
  ]
}
```

#### CopyWebpackPlugin

在vue的打包过程中，如果我们将一些文件放到public的目录下，那么这个目录会被复制到dist文件夹中。 p这个复制的功能，我们可以使用CopyWebpackPlugin来完成；

安装

```javascript
npm install copy-webpack-plugin -D
```

使用示例

```javascript
 new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    })
```

#### mode配置

使用示例

```javascript
module.exports ={
   // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: "development",
  // 设置source-map, 建立js映射文件, 方便调试代码和错误
  devtool: "source-map",
}
```



## 多入口

生成多个html-webpack-plugin实例来解决这个问题

再写一个header.js文件，和main.js同级

然后在webpack.config.js中修改入口文件的配置和plugins中的html-webpack-plugin

```js
    // 单入口
    // entry: "./src/main.js", //配置入口文件
    // 多入口
    entry: {
        main: path.resolve(__dirname, "./src/main.js"),
        header: path.resolve(__dirname, "./src/header.js"),
    },
     plugins: [
        // 多入口
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html",
            chunks: ["main"], // 与入口文件对应的模块名
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/header.html"),
            filename: "header.html",
            chunks: ["header"], // 与入口文件对应的模块名
        }),
    ],
```



## loader

加载某个模块

### loader的配置方式

- 在webpack.config.js文件中写明配置信息

- module.rules中允许我们配置多个loader

### **module.rules的配置如下：** 

- rules属性对应的值是一个数组：

- 数组中存放的是一个个的Rule，

- Rule是一个对象，对象中可以设置多个属性

```javascript
module: {
    rules: [
       //css
      {
        test: /\.css$/, //正则表达式
        // 1.loader的写法(语法糖)
        // loader: "css-loader"

        // 2.完整的写法
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      
      //less
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
```



### css-loader  加载css文件

安装

```javascript
cnpm install --save-dev css-loader
```

style-loader  显示样式

安装

```javascript
npm install style-loader -D
```

less-loader

安装

```javascript
npm install less-loader -D
```

```js
  // 加载某个模块
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"], // 从右向左解析原则
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'] // 从右向左解析原则
            }
        ],
    },
```



### PostCss

介绍

- PostCSS是一个通过JavaScript来转换样式的工具
- 这个工具可以帮助我们进行一些CSS的转换和适配，比如自动添加浏览器前缀、css样式的重置

安装

```javascript
npm install postcss-loader -D
```

##### autoprefixer插件

自动添加浏览器前缀的插件

安装

```javascript
npm install autoprefixer -D
```

```javascript
rules:[
            {
                test:/\.less$/,
                use:['style-loader','css-loader','postcss-loader','less-loader'] // 从右向左解析原则
           }
        ]
```

接下来，我们还需要引入`autoprefixer`使其生效,这里有两种方式

第一种

在根目录下创建```postcss.config.js```文件

```js
module.exports = {
  plugins: [
    require("postcss-preset-env")
  ]
}
```

第二种

在```webpack.config.js```文件中修改写法

```javascript
rules:[{
            test:/\.less$/,
            use:['style-loader','css-loader',{
                loader:'postcss-loader',
                options:{
                    plugins:[require('autoprefixer')]
                }
            },'less-loader'] // 从右向左解析原则
        }]
```

### 拆分css

我们发现css通过style标签的方式添加到了html文件中，但是如果样式文件很多，全部添加到html中，难免显得混乱。这时候我们想用把css拆分出来用外链的形式引入css文件怎么做呢？这时候我们就需要借助插件来帮助我们

**mini-css-extract-plugin**

安装

```
npm i -D mini-css-extract-plugin
```

配置

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  //...省略其他配置
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
           MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].css",
    })
  ]
}
```

**拆分多个css**



### 图片打包

##### file-loader

作用：帮助我们处理import/require()方式引入的一个文件资源，并且会将它放到我们输出的文 件夹中

安装

```javascript
cnpm install file-loader -D
```

###### 文件名称

- [ext]： 处理文件的扩展名
- [name]：处理文件的名称
- [hash]：文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）；
- [contentHash]：在file-loader中和[hash]结果是一致的
- [hash:]：截图hash的长度，默认32个字符太长了
- [path]：文件相对于webpack配置文件的路径



###### 使用示例

```javascript
module:{
  rules:[
    {
      test: /\.(png|jpg|gif)$/,
      use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images', //打包的文件夹名字
            },
          },
        ],
    }
  ]
}


也可以
module:{
  rules:[
    {
      test: /\.(png|jpg|gif)$/,
      use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:8].[ext]', //vue写法
            },
          },
        ],
    }
  ]
}
```

##### url-loader

url-loader和file-loader的工作方式是相似的，但是可以将较小的文件，转成base64的URI。

安装

```javascript
npm install url-loader -D
```

url-loader中的**limit**

作用：小的图片可以转成base64，大的图片还是正常打包。有利优化。

使用示例

```javascript
{
      test: /\.(png|jpg|gif)$/,
      use: [
          {
            loader: 'url-loader',
            options: {
              limit:100*1024
              name: 'images/[name].[hash:8].[ext]', //vue写法
            },
          },
        ],
    }
```



##### asset module type

- 在webpack5之前，加载这些资源我们需要使用一些loader，比如raw-loader 、url-loader、file-loader；
- 在webpack5开始，我们可以直接使用资源模块类型（asset module type），来替代上面的这些loader

###### 使用示例

```javascript
 {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024 //url-loader的limit效果
          }
        }
      },
```

#### 加载字体文件

使用上面的```file-loader```

##### 使用示例

```javascript
 {
               test: /\.(eot|ttf|woff2?)$/,
               use: {
               loader: "file-loader",
                options: {
                  // outputPath: "font",
                 name: "font/[name]_[hash:6].[ext]"
                }
               }
          },
```

使用上面的```asset module type```

```javascript
  {
                test: /\.(eot|ttf|woff2?)$/,
                type: "asset/resource",
                generator: {
                    filename: "font/[name]_[hash:6][ext]",
                },
            },
```



## babel

babel转义js文件（js代码兼容更多环境）

安装

```js
npm i -D babel-loader @babel/preset-env @babel/core
```

```js
module.exports = {
    // 省略其它配置 ...
    module:{
        rules:[
          {
            test:/\.js$/,
            use:{
              loader:'babel-loader',
              options:{
                presets:['@babel/preset-env']
              }
            },
            exclude:/node_modules/
          },
       ]
    }
}
```

上面的`babel-loader`只会将 ES6/7/8语法转换为ES5语法，但是对新api并不会转换 例如(promise、Generator、Set、Maps、Proxy等)
 此时我们需要借助babel-polyfill来帮助我们转换

```js
npm i @babel/polyfill
复制代码
// webpack.config.js
const path = require('path')
module.exports = {
    entry: ["@babel/polyfill",path.resolve(__dirname,'../src/index.js')],    // 入口文件
}
```

## 配置webpack-dev-server进行热更新

```
npm i -D webpack-dev-server
```

```js
const Webpack = require('webpack')
module.exports = {
  // ...省略其他配置
  devServer:{
    port:3000,
    hot:true,
    open: true,
    contentBase:'../dist'//修改配置文件，告知 dev server，从什么位置查找文件
  },
  plugins:[
    new Webpack.HotModuleReplacementPlugin()
  ]
}
```

```js
"scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  },
```

```
npm install --save-dev webpack
```

## webpack-bundle-analyzer分析打包后的文件

安装

```
npm i -D webpack-bundle-analyzer
```

[使用](https://blog.csdn.net/weixin_50836306/article/details/123131163)
