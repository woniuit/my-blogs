---
sidebar: auto
---
[学习资料](https://juejin.cn/book/7050063811973218341)



## 搭建demo

使用vite官方推荐使用pnpm

安装

```js
npm i -g pnpm
```

国内镜像（有可能会更新地址，这里以官方最新的为准）

```javascript
pnpm config set registry https://registry.npmmirror.com/
```

开始搭建demo项目

```javascript
pnpm create vite
```

- 在执行完上面这个命令后，pnpm 首先会自动下载 `create-vite` 这个第三方包
- 然后会看到一些项目初始化的操作
  - 输入项目名称
  - 选择项目框架(我选择的是vue)
- cd到项目目录
- pnpm install
- 启动项目pnpm run dev

## 项目入口文件分析

### index.html

在项目根目录中有一个`index.html`文件，这个文件十分关键，因为 Vite 默认会把项目根目录下的`index.html`作为入口文件。也就是说，当你访问`http://localhost:3000`的时候，Vite 的 Dev Server 会自动返回这个 HTML 文件的内容。我们来看看这个 HTML 究竟写了什么:

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

```

官网分析：

Vite 解析 `<script type="module" src="...">` ，这个标签指向你的 JavaScript 源码。甚至内联引入 JavaScript 的 `<script type="module">` 和引用 CSS 的 `<link href>` 也能利用 Vite 特有的功能被解析。另外，`index.html` 中的 URL 将被自动转换，因此不再需要 `%PUBLIC_URL%` 占位符了。

网络分析：

type="module"，同时 src 指向了`/src/main.js`文件，此时相当于请求了`http://localhost:3000/src/main.js这个资源，Vite 的 Dev Server 此时会接受到这个请求，然后读取对应的文件内容，进行一定的中间处理，最后将处理的结果返回给浏览器。

来看看刚搭建的项目里的main.js文件

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

注：需要注意的是，在 Vite 项目中，一个`import 语句即代表一个 HTTP 请求`。上述两个语句则分别代表了两个不同的请求，Vite Dev Server 会读取本地文件，返回浏览器可以解析的代码。当浏览器解析到新的 import 语句，又会发出新的请求，以此类推，直到所有的资源都加载完成。

Vite 所倡导的`no-bundle`理念的真正含义: **利用浏览器原生 ES 模块的支持，实现开发阶段的 Dev Server，进行模块的按需加载**，而不是**先整体打包再进行加载**。相比 Webpack 这种必须打包再加载的传统构建模式，Vite 在开发阶段省略了繁琐且耗时的打包过程，这也是它为什么快的一个重要原因。

### vite.config.js

上面搭建的项目中会看到vite.config.js这个文件，下面来看看它刚开始是长什么样的

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

```

上面有介绍Vite 默认会把项目根目录下的`index.html`作为入口文件，如果有需求或者面试的时候被问到index.html是要放在src目录里面的要怎么处理呢，这时候就需要`root`参数配置项目根目录的位置

```javascript
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, "src"),
    plugins: [vue()],
});

```

同时需要改index.html中```<script type="module" src="./main.js"></script>```

### css

安装less

```javascript
npm install -g less
```

公共的common.less

```css
@theme-color:pink;
```

想在页面中使用common.less

需要每个页面中都引入，所以有下面的配置全局样式

配置全局样式

```javascript
import { normalizePath } from 'vite';
```

```
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.less'));
```

```javascript
export default defineConfig({
  // css 相关的配置
  css: {
    preprocessorOptions: {
      less: {
        // additionalData 的内容会在每个 less 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  }
})
```

```javascript
import { defineConfig, normalizePath } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve("./src/css/common.less"));
export default defineConfig({
    root: path.join(__dirname, "src"),
    plugins: [vue()],
    // css 相关的配置
    css: {
        preprocessorOptions: {
            less: {
                // additionalData 的内容会在每个 less 文件的开头自动注入
                additionalData: `@import "${variablePath}";`,
            },
        },
    },
});
```

这样就可以不用每个页面都引入common.less了，可以直接使用common.less里的变量

### postcss

一般可以通过 `postcss.config.js` 来配置 postcss ，不过在 Vite 配置文件中已经提供了 PostCSS 的配置入口，可以直接在 Vite 配置文件中进行操作。

来安装一个常用的 PostCSS 插件——`autoprefixer`（这个插件主要用来自动为不同的目标浏览器添加样式前缀，解决的是浏览器兼容性的问题。）

```javascript
pnpm i autoprefixer -D
```

```javascript
// vite.config.ts 增加如下的配置
import autoprefixer from 'autoprefixer';

export default {
  css: {
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
}
```

配置完成后， 可以给页面的样式文件中添加一个新的 CSS 属性:

```css
text-decoration: dashed;
```

然后执行，```pnpm run build```,命令进行打包，可以看到产物中自动补上了浏览器前缀

PostCSS 可以做的事情非常多，甚至能实现 CSS 预处理器语法和 CSS Modules，社区当中也有不少的 PostCSS 插件，除了刚刚提到的`autoprefixer`插件，常见的插件还包括:

- [postcss-pxtorem](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcuth%2Fpostcss-pxtorem)： 用来将 px 转换为 rem 单位，在适配移动端的场景下很常用。
- [postcss-preset-env](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcsstools%2Fpostcss-preset-env): 通过它，你可以编写最新的 CSS 语法，不用担心兼容性问题。
- [cssnano](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcssnano%2Fcssnano): 主要用来压缩 CSS 代码，跟常规的代码压缩工具不一样，它能做得更加智能，比如提取一些公共样式进行复用、缩短一些常见的属性值等等。

### 静态资源

### 配置别名

```javascript
// vite.config.ts
import path from 'path';

{
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
}
```

这样 Vite 在遇到`@assets`路径的时候，会自动帮我们定位至根目录下的`src/assets`目录。值得注意的是，alias 别名配置不仅在 JavaScript 的 import 语句中生效，在 CSS 代码的 `@import` 和 `url`导入语句中也同样生效。

### 图片加载

使用别名,同上别名配置

### 图片压缩

vite-plugin-imagemin

安装

```javascript
pnpm i vite-plugin-imagemin -D
```

配置

```javascript
//vite.config.ts
import viteImagemin from 'vite-plugin-imagemin';

{
  plugins: [
    // 忽略前面的插件
    viteImagemin({
      // 无损压缩配置，无损压缩下图片质量不会变差
      optipng: {
        optimizationLevel: 7
      },
      // 有损压缩配置，有损压缩下图片质量可能会变差
      pngquant: {
        quality: [0.8, 0.9],
      },
    })
  ]
}
```

## 拆包

### Code Splitting

- `bundle` 指的是整体的打包产物，包含 JS 和各种静态资源。
- `chunk`指的是打包后的 JS 文件，是 `bundle` 的子集。
- `vendor`是指第三方包的打包产物，是一种特殊的 chunk。

在传统的单 chunk 打包模式下，当项目代码越来越庞大，最后会导致浏览器下载一个巨大的文件，从页面加载性能的角度来说，主要会导致两个问题:

- 1. 无法做到**按需加载**，即使是当前页面不需要的代码也会进行加载。
- 1. 线上**缓存复用率**极低，改动一行代码即可导致整个 bundle 产物缓存失效。

一个前端页面中的 JS 代码可以分为两个部分: `Initital Chunk`和`Async Chunk`，前者指页面首屏所需要的 JS 代码，而后者当前页面并不一定需要，一个典型的例子就是 `路由组件`，与当前路由无关的组件并不用加载。而项目被打包成单 bundle 之后，无论是`Initial Chunk`还是`Async Chunk`，都会打包进同一个产物，也就是说，浏览器加载产物代码的时候，会将两者一起加载，导致许多冗余的加载过程，从而影响页面性能。而通过`Code Splitting`我们可以将按需加载的代码拆分出单独的 chunk，这样应用在首屏加载时只需要加载`Initial Chunk` 即可，避免了冗余的加载过程，使页面性能得到提升。

`Code Splitting`之后，代码的改动只会影响部分的 chunk 哈希改动

入口文件引用了`A`、`B`、`C`、`D`四个组件，当我们修改 A 的代码后，变动的 Chunk 就只有 `A` 以及`依赖 A 的 Chunk` 中，A 对应的 chunk 会变动，这很好理解，后者也会变动是因为相应的引入语句会变化，如这里的入口文件会发生如下内容变动:

```js
import CompA from './A.d3e2f17a.js'
// 更新 import 语句
import CompA from './A.a5d2f82b.js'
```

也就是说，在改动 `A` 的代码后，`B`、`C`、`D`的 chunk 产物 url 并没有发生变化，从而可以让浏览器复用本地的强缓存，大大提升线上应用的加载性能。

vite有自己的默认拆包策略

### 自定义拆包

**manualChunks**

```js
build: {
    rollupOptions: {
      output: {
        // manualChunks 配置
        manualChunks: {},
      },
    }
  },
```



## 性能优化







