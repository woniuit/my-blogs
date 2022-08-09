# 项目

## 搭建

```js
npx create-react-app 项目名称
```

**目录**

```
/src
  /assets         项目资源文件，比如，图片 等
  /components     通用组件
  /pages          页面
  /store          mobx 状态仓库
  /utils          工具，比如，token、axios 的封装等
  App.js          根组件
  index.css       全局样式
  index.js        项目入口
```

**路由**

```js
npm install react-router-dom@6
```

- 在 pages 目录中创建两个文件夹：Login、Layout
- 分别在两个目录中创建 index.js 文件，并创建一个简单的组件后导出
- 在 App 组件中，导入路由组件以及两个页面组件
- 配置 Login 和 Layout 的路由规则

app.js

```js
// 导入路由
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 导入页面组件
import Login from './pages/Login'
import Layout from './pages/Layout'

// 配置路由规则
function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
```

