# react-jsx

## 环境搭建

```js
npx create-react-app 项目名称
```

- npx create-react-app 是固定命令，`create-react-app`是React脚手架的名称
- npx 命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自自动删掉，所以不需要全局安装create-react-app

启动项目

```js
yarn start
or
npm start
```

##  目录结构

- 一般情况下删除src目录下自带的所有文件，只保留app.js根组件和index.js
- 创建index.js文件作为项目的入口文件，在这个文件中书写react代码即可

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 引入根组件App
import App from './App'
// 通过调用ReactDOM的render方法渲染App根组件到id为root的dom节点上
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

## JSX使用

### **表达式**

- 大括号内可以是变量、字符串、数组、函数调用等任意js表达式；
- 当变量是Number、String、Array类型时，可以直接显示
- 当变量是null、undefined、Boolean类型时，内容为空；
  -   如果希望可以显示null、undefined、Boolean，那么需要转成字符串；
  -   转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；

```js
{ JS 表达式 }
const JSX = 'jsx'
<div>{JSX}</div>
```

**补充：为什么null、undefined、Boolean在JSX中要显示为空内容呢？**

原因是在开发中，我们会进行很多的判断；内容可以根据true和FALSE进行显示

```js
<div>
        {this.state.flag ? <h2>我是标题</h2>: null}
        {this.state.flag && <h2>我是标题</h2>}
</div>
```

### **JSX嵌入表达式**

```js
<div>
        {/* 运算表达式 */}
        <h2>{this.state.firstName + " " + this.state.lastName}</h2>
        {/* 三元运算符 */}
        <h2>{this.state.age >= 18 ? "成年人": "未成年人"}</h2>
        {/* 执行一个函数 */}
        <h2>{this.sayHello("kobe")}</h2>
</div>
```

### **jsx绑定HTML属性**

```js
<div>
        <h2 title={this.state.title}>Hello World</h2>
        <img src={this.state.imgUrl} alt=""/>
        <a href={this.state.link} target="_blank">百度一下</a>
        <div className={"message " + (this.state.active ? "active": "")}>你好啊</div>
        <div className={["message", (this.state.active ? "active": "")].join(" ")}>你好啊</div>
        <div style={{fontSize: "30px", color: "red", backgroundColor: "blue"}}>我是文本</div>
</div>
```

###  **jsx事件监听**

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <a href="#" onClick={e => this.aClick(e, item, index)}>{item}</a>
      </div>
    )
  }

  aClick() {
    console.log("React按钮点击了一下")
  }
}
```

### **jsx列表渲染**

```js
// 来个列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          songs.map(item => <li key={item.id}>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App
```

### JSX条件渲染

```js
const flag = true
function App() {
  return (
    <div className="App">
      {/* 条件渲染字符串 */}
      {flag ? 'react真有趣' : 'vue真有趣'}
      {/* 条件渲染标签/组件 */}
      {flag ? <span>this is span</span> : null}
    </div>
  )
}
export default App
```

