---
sidebar: auto
---
# React

## Hello React

react的优点起源简介不再介绍，看文档

### react开发依赖

#### 开发react必须依赖三个库

- react  --包含react所需核心代码
- react-dom --react渲染在不同平台需要的代码
- babel  --将jsx转成react代码的工具

#### 如何添加这三个依赖

方式1：直接CDN引入

```javascript
react依赖：https://unpkg.com/react@16/umd/react.development.js
react-dom依赖：https://unpkg.com/react-dom@16/umd/react-dom.development.js
babel依赖：https://unpkg.com/babel-standalone@6/babel.min.js
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

方式2：下载后添加本地依赖

方式3：通过npm管理

暂时先通过cdn的方式引入写写demo，后面会介绍到通过npm脚手架的方式。

#### hello world

- 先创建一个helloworld.html文件

- ```javascript
  <div id="app"></div>
  
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  
    <script type="text/babel">
      // 通过ReactDom对象来渲染内容
      ReactDOM.render(<h2>Hello World</h2>, document.getElementById("app"));
    </script>
  ```

- 代码解析

  - ReactDOM.render函数：

  - - 这里我们已经提前定义一个id为app的div
    - 这里我们传入了一个h2元素，后面我们就会使用React组件
    - 参数一：传递要渲染的内容，这个内容可以是HTML元素，也可以是React的组件
    - 参数二：将渲染的内容，挂载到哪一个HTML元素上

- 写死的内容抽取到变量中

  ```javascript
  // 将数据定义到变量中
  let message = "Hello World";
  
  // 通过ReactDom对象来渲染内容
  ReactDOM.render(<h2>{message}</h2>, document.getElementById("app"));
  ```

### 类组件

**`ReactDOM.render` 第一参数是一个HTML原生或者一个组件。**

```javascript
class App extends React.Component {
  render() {
    return (<h2>Hello World</h2>)
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

#### 数据在哪里定义

- 在组件中的数据，我们可以分成两类：

- - 参与界面更新的数据：当数据变量时，需要更新组件渲染的内容
  - 不参与界面更新的数据：当数据变量时，不需要更新将组建渲染的内容

- 参与界面更新的数据我们也可以称之为是参与数据流，这个数据是定义在当前对象的state中

- - 我们可以通过在构造函数中 `this.state = {定义的数据}`

- 当我们的数据发生变化时，我们可以调用 `this.setState` 来更新数据，并且通知React进行update操作

- - 在进行update操作时，就会重新调用render函数，并且使用最新的数据，来渲染界面

#### 事件绑定中的this

- 在类中直接定义一个函数，并且将这个函数绑定到html原生的onClick事件上，当前这个函数的this指向的是谁呢？

- 默认情况下是undefined

- - 很奇怪，居然是undefined；
  - 因为在正常的DOM操作中，监听点击，监听函数中的this其实是节点对象（比如说是button对象）；
  - 这次因为React并不是直接渲染成真实的DOM，我们所编写的button只是一个语法糖，它的本质React的Element对象；
  - 那么在这里发生监听的时候，react给我们的函数绑定的this，默认情况下就是一个undefined；

- 我们在绑定的函数中，可能想要使用当前对象，比如执行 `this.setState` 函数，就必须拿到当前对象的this

- - 我们就需要在传入函数时，给这个函数直接绑定this
  - 类似于下面的写法：`<button onClick={this.changeText.bind(this)}>改变文本</button>`

```javascript
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.changeText.bind(this)}>改变文本</button>
     </div>
    )
  }

  changeText() {
    this.setState({
      message: "Hello React"
    })
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

#### 案例

##### 电影列表

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["星际穿越", "大话西游", "盗梦空间", "少年派"]
    }
  }

  render() {
    // var movieLis = [];
    // for (var i in this.state.movies) {
    //   movieLis.push((<li>{this.state.movies[i]}</li>));
    // }

    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item, index) => {
              return (<li>{item}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

##### 计数器

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={this.increment.bind(this)}>+1</button>
        <button onClick={this.decrement.bind(this)}>-1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter+1
    })
  }

  decrement() {
    this.setState({
      counter: this.state.counter-1
    })
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

## JSX语法

#### jsx表达式

- 书写规则：{表达式}
- 大括号内可以是变量、字符串、数组、函数调用等任意js表达式；

#### jsx注释

```javascript
<div>
  {/* 我是一段注释 */}
  <h2>Hello World</h2>
</div>
```

#### jsx嵌入变量

- 情况一：当变量是Number、String、Array类型时，可以直接显示

- 情况二：当变量是null、undefined、Boolean类型时，内容为空；

- - 如果希望可以显示null、undefined、Boolean，那么需要转成字符串；
  - 转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；

- 情况三：对象类型不能作为子元素（not valid as a React child）

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "why",
      age: 18,
      hobbies: ["篮球", "唱跳", "rap"],
      
      test1: null,
      test2: undefined,
      flag: false,

      friend: {
        name: "kobe",
        age: 40
      }
    }
  }

  render() {
    return (
      <div>
        {/* 我是一段注释 */}
        <h2>Hello World</h2>
      </div>

      <div>
        {/* 1.可以直接显示 */}
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <h2>{this.state.hobbies}</h2>

        
        {/* 2.不显示 */}
        <h2>{this.state.test1}</h2>
        <h2>{this.state.test1 + ""}</h2>
        <h2>{this.state.test2}</h2>
        <h2>{this.state.test2 + ""}</h2>
        <h2>{this.state.flag}</h2>
        <h2>{this.state.flag + ""}</h2>
        
        {/* 3.不显示 */}
        <h2>123{this.state.friend}</h2>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
```

#### jsx嵌入表达式

```javascript
{/* 运算表达式 */}
        <h2>{this.state.firstName + " " + this.state.lastName}</h2>
        {/* 三元运算符 */}
        <h2>{this.state.age >= 18 ? "成年人": "未成年人"}</h2>
        {/* 执行一个函数 */}
        <h2>{this.sayHello("kobe")}</h2>
```

#### jsx属性绑定

```javascript
 <h2 title={this.state.title}>Hello World</h2>
        <img src={this.state.imgUrl} alt=""/>
        <a href={this.state.link} target="_blank">百度一下</a>
        <div className={"message " + (this.state.active ? "active": "")}>你好啊</div>
        <div className={["message", (this.state.active ? "active": "")].join(" ")}>你好啊</div>
        <div style={{fontSize: "30px", color: "red", backgroundColor: "blue"}}>我是文本</div>
```

#### jsx事件监听

```javascript
class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.btnClick}>点我一下(React)</button>
      </div>
    )
  }

  btnClick() {
    console.log("React按钮点击了一下")
  }
}
```

##### this绑定问题

- 默认下this是undefined

- 为什么是undefined？

原因是`btnClick`函数并不是我们主动调用的，而且当button发生改变时，React内部调用了`btnClick`函数；

而它内部调用时，并不知道要如何绑定正确的this；

##### 如何解决this绑定

- **方案一：bind给btnClick显示绑定this**

  ```javascript
  <button onClick={this.btnClick.bind(this)}>点我一下(React)</button>
  ```

- **方案二：箭头函数**

  ```javascript
  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        message: "你好啊,李银河"
      }
    }
  
    render() {
      return (
        <div>
          <button onClick={this.btnClick}>点我一下(React)</button>
          <button onClick={this.btnClick}>也点我一下(React)</button>
        </div>
      )
    }
  
    btnClick = () => {
      console.log(this);
      console.log(this.state.message);
    }
  }
  ```

- **方案三：事件监听时传入箭头函数（推荐）**

  ```javascript
  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        message: "你好啊,李银河"
      }
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.btnClick()}>点我一下(React)</button>
          <button onClick={() => this.btnClick()}>也点我一下(React)</button>
        </div>
      )
    }
  
    btnClick() {
      console.log(this);
      console.log(this.state.message);
    }
  }
  ```

##### 事件参数传递

- 获取event对象

  ```javascript
  btnClick(e) {
      e.preventDefault();
      console.log(e);
    }j
  ```

- 获取更多参数

  ```javascript
  class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        names: ["衣服", "鞋子", "裤子"]
      }
    }
  
    render() {
      return (
        <div>
          <a href="http://www.baidu.com" onClick={this.aClick}>点我一下</a>
  
          {
            this.state.names.map((item, index) => {
              return (
                <a href="#" onClick={e => this.aClick(e, item, index)}>{item}</a>
              )
            })
          }
        </div>
      )
    }
  
    aClick(e, item, index) {
      e.preventDefault();
      console.log(item, index);
      console.log(e);
    }
  }
  ```

#### 条件渲染

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }
  }

  render() {
    let titleJsx = null;
    if (this.state.isLogin) {
      titleJsx = <h2>欢迎回来~</h2>
    } else {
      titleJsx = <h2>请先登录~</h2>
    }

    return (
      <div>
        {titleJsx}
      </div>
    )
  }
}
```

当然，我们也可以将其封装到一个独立的函数中：

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true
    }
  }

  render() {
    return (
      <div>
        {this.getTitleJsx()}
      </div>
    )
  }

  getTitleJsx() {
    let titleJsx = null;
    if (this.state.isLogin) {
      titleJsx = <h2>欢迎回来~</h2>
    } else {
      titleJsx = <h2>请先登录~</h2>
    }
    return titleJsx;
  }
}
```

##### v-show效果

```javascript
render() {
    const { isLogin, username } = this.state;
    const nameDisplay = isLogin ? "block": "none";

    return (
      <div>
        <h2 style={{display: nameDisplay}}>{username}</h2>
        <button onClick={e => this.loginBtnClick()}>{isLogin ? "退出": "登录"}</button>
      </div>
    )
  }
```

## 脚手架

### 安装脚手架

```javascript
npm install -g create-react-app
```

### 创建项目

```javascript
create-react-app 项目名称
```

### 创建好项目

```javascript
cd 01-test-react
yarn start
```

### 目录结构分析

```javascript
test-react
├─ README.md // readme说明文档
├─ package.json // 对整个应用程序的描述：包括应用名称、版本号、一些依赖包、以及项目的启动、打包等等（node管理项目必备文件）
├─ public
│    ├─ favicon.ico // 应用程序顶部的icon图标
│    ├─ index.html // 应用的index.html入口文件
│    ├─ logo192.png // 被在manifest.json中使用
│    ├─ logo512.png // 被在manifest.json中使用
│    ├─ manifest.json // 和Web app配置相关
│    └─ robots.txt // 指定搜索引擎可以或者无法爬取哪些文件
├─ src
│    ├─ App.css // App组件相关的样式
│    ├─ App.js // App组件的代码文件
│    ├─ App.test.js // App组件的测试代码文件
│    ├─ index.css // 全局的样式文件
│    ├─ index.js // 整个应用程序的入口文件
│    ├─ logo.svg // 刚才启动项目，所看到的React图标
│    ├─ serviceWorker.js // 默认帮助我们写好的注册PWA相关的代码
│    └─ setupTests.js // 测试初始化文件
└─ yarn.lock
```

### webpack配置

想要看到webpack的配置先在package.json文件中的一个脚本：`"eject": "react-scripts eject"`，该操作不可以逆行

- 这个操作是不可逆的，所以在执行过程中会给与我们提示；

  ```javascript
  yarn eject
  ```

## 组件化

### 类组件

```javascript
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }

  render() {
    return <h2>Hello App</h2>
  }
}
```



### 函数组件

函数组件是使用function来进行定义的函数，只是这个函数会返回和类组件中render函数返回一样的内容。

函数组件有自己的特点（当然，后面我们会讲hooks，就不一样了）：

- 没有生命周期，也会被更新并挂载，但是没有生命周期函数；
- 没有this(组件实例）；
- 没有内部状态（state）；

我们来定义一个函数组件：

```javascript
export default function App() {
  return (
    <div>Hello World</div>
  )
}
```

### 组件生命周期

***大致可以概括为：初始化阶段--挂载阶段--更新阶段--卸载阶段***

### 初始化阶段

发生在constructor中的内容，在 constructor 中进行 state、props 的初始化，在这个阶段修改 state，不会执行更新阶段的生命周期，可以直接对 state 赋值。

#### **constructor**

- ```javascript
  constructor(props) {
        super(props);
        this.state = {
            name: 'Hello App'
        }
    }
  ```

- 通过给 `this.state` 赋值对象来初始化内部的state；

- 为事件绑定实例（this）；

### 挂载阶段

对应的生命周期：

```asciidoc
* 1.componentWillMount 
    发生在 render 函数之前，还没有挂载 Dom
* 2.render 
* 3.componentDidMount
    发生在 render 函数之后，已经挂载 Dom
```

#### **componentDidMount**

`componentDidMount()` 会在组件挂载后（插入 DOM 树中）立即调用。

componentDidMount中通常进行哪里操作呢？

- 依赖于DOM的操作可以在这里进行；
- 在此处发送网络请求就最好的地方；（官方建议）
- 可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；

### 更新阶段

#### **componentDidUpdate**

`componentDidUpdate()` 会在更新后会被立即调用，首次渲染不会执行此方法。

- 当组件更新后，可以在此处对 DOM 进行操作；
- 如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。

### **卸载阶段**

#### **componentWillUnmount**

`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。

- 在此方法中执行必要的清理操作；
- 例如，清除 timer，取消网络请求或清除在 `componentDidMount()` 中创建的订阅等；

### 组件通信

#### 父子组件通信

当向流数据，数据只能通过props由父组件流向子组件，反之不行。

#### Props

##### 父组件传递子组件

**类组件的方式**

```javascript
import React, { Component } from 'react';

// 1.类子组件
class ChildCpn1 extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { name, age, height } = this.props;

    return (
      <div>
        <h2>我是class的组件</h2>
        <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name="why" age="18" height="1.88" />
      </div>
    )
  }
}
```

**function组件的方式**

```javascript
function ChildCpn2(props) {
  const {name, age, height} = props;

  return (
    <div>
      <h2>我是function的组件</h2>
      <p>展示父组件传递过来的数据: {name + " " + age + " " + height}</p>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1 name="why" age="18" height="1.88"/>
        <ChildCpn2 name="kobe" age="30" height="1.98"/>
      </div>
    )
  }
}
```

##### 子组件传递给父组件

同样是通过props传递消息，只是让`父组件`给`子组件`传递一个`回调函数`，在子组件中调用这个函数即可；

```javascript
class Child extends React.PureComponent {
    render() {
        return (
            <>
                <div>接收父组件的值: {this.props.msg}</div>
                <button onClick={() => this.props.changeMsg("Changed Msg")}>
                    修改父组件的值
                </button>
            </>
        );
    }
}

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { msg: "Parent Msg" };
    }

    changeMsg = (msg) => {
        this.setState({ msg });
    };

    render() {
        return (
            <div>
                <Child msg={this.state.msg} changeMsg={this.changeMsg} />
            </div>
        );
    }
}

export default App;

```

```javascript
// TodoList.js
import React,{ Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem'
 
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
 
  render(){
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input 
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}            
           />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
         {
            this.state.list.map((item,index)=>{
              return (
                <TodoItem 
                    content={item} 
                    index={index} 
                    // deleteItem={this.handleItemDelete}
                    deleteItem={this.handleItemDelete.bind(this)}
                />
              )
            })
         }
        </ul>
      </Fragment>
    );
  }
  
  handleInputChange(e){ 
    this.setState({
      inputValue: e.target.value
    })
  }
 
  handleBtnClick(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
 
  handleItemDelete(index){  
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({
      list: list
    })
  }
}
 
export default TodoList;
 
// TodoItem.js
import React, { Component } from 'react';
 
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div 
                // onClick={this.handleClick.bind(this)} // 不推荐
                onClick={this.handleClick}
            >
                {this.props.content}
            </div>
        )
    }
 
    handleClick(){
        // alert(1);
        // alert(this.props.index); // 需要事件绑定
        // this.props.deleteItem(this.props.index);
        // 等价于 this.handleItemDelete;
        this.props.deleteItem(this.props.index); // 父组件传函数的时候需要绑定
    }
}
 
export default TodoItem
```

##### 传递的类型校验PropTypes

```javascript
import PropTypes from 'prop-types';
```

**校验**

```javascript
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
};
```

**默认值**

```javascript
Greeting.defaultProps = {
  name: 'Stranger'
};
```





#### 非父子组件之间通信

`React Context`提供了一个无需为每层组件手动添加`props`就能在组件树间进行数据传递的方法。

简单来说就是在父组件中通过`Provider`来提供数据，然后在子组件中通过`Consumer`来取得`Provider`定义的数据，不论子组件有多深，只要使用了`Provider`那么就可以取得在`Provider`中提供的数据，而不是局限于只能从当前父组件的`props`属性来获取数据，只要在父组件内定义的`Provider`数据，子组件都可以调用。

#### Context

```javascript
const MyContext = React.createContext(defaultValue);
```

创建一个需要共享的Context对象：

- 如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的 `Provider` 中读取到当前的context值；
- defaultValue是组件在顶层查找过程中没有找到对应的`Provider`，那么就使用默认值

每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化：

- Provider 接收一个 `value` 属性，传递给消费组件；
- 一个 Provider 可以和多个消费组件有对应关系；
- 多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据；

当 Provider 的 `value` 值发生变化时，它内部的所有消费组件都会重新渲染；

```javascript
import React, { Component } from "react";

const UserContext = React.createContext({ nickname: "默认", level: -1 });

class ProfileHeader extends Component {
    render() {
        return (
            <div>
                <h2>用户昵称: {this.context.nickname}</h2>
                <h2>用户等级: {this.context.level}</h2>
            </div>
        );
    }
}

ProfileHeader.contextType = UserContext;

class Profile extends Component {
    render() {
        return (
            <div>
                <ProfileHeader />
                <ul>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                    <li>设置4</li>
                    <li>设置5</li>
                </ul>
            </div>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <UserContext.Provider value={{ nickname: "why", level: 99 }}>
                    <Profile />
                </UserContext.Provider>
                <h2>其他内容</h2>
            </div>
        );
    }
}

```

**什么时候使用Context.Consumer呢？**

- 1.当使用value的组件是一个函数式组件时；

- ```javascript
  function ProfileHeader(props) {
    return (
      <div>
        <UserContext.Consumer>
          {value => {
            return (
              <div>
                <h2>用户昵称: {value.nickname}</h2>
                <h2>用户等级: {value.level}</h2>
              </div>
            )
          }}
        </UserContext.Consumer>
      </div>
    )
  }
  ```

- 

- 2.当组件中需要使用多个Context时；

- ```javascript
  const ThemeContext = React.createContext({ color: "black" });
  <UserContext.Consumer>
    {value => {
      return (
        <ThemeContext.Consumer>
          {
            theme => (
              <div>
                <h2 style={theme}>用户昵称: {value.nickname}</h2>
                <h2 style={theme}>用户等级: {value.level}</h2>
              </div>
            )
          }
        </ThemeContext.Consumer>
      )
    }}
  </UserContext.Consumer>
  ```

#### Refs

```javascript
import React from "react";

class Child extends React.PureComponent {
    render() {
        return (
            <>
                <div>接收父组件的值: {this.props.msg}</div>
            </>
        );
    }
}

class Parent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { msg: "Parent Msg" };
        this.child = React.createRef();
    }

    componentDidMount() {
        console.log(this.child.current);
    }

    render() {
        return (
            <div>
                <Child msg={this.state.msg} ref={this.child} />
            </div>
        );
    }
}

export default Parent;

```

#### EventBus

可以适用于任何情况的组件通信，在项目规模不大的情况下，完全可以使用中央事件总线`EventBus` 的方式，`EventBus`可以比较完美地解决包括父子组件、兄弟组件、隔代组件之间通信.先我们需要实现一个订阅发布类作为单例模块导出，每个需要的组件再进行`import`，当然作为`Mixins`全局静态横切也可以，或者使用`event`库，此外务必注意在组件销毁的时候卸载订阅的事件调用，否则会造成内存泄漏。

```javascript
yarn add events;
```

events常用的API：

- 创建EventEmitter对象：eventBus对象；
- 发出事件：`eventBus.emit("事件名称", 参数列表);`
- 监听事件：`eventBus.addListener("事件名称", 监听函数)`；
- 移除事件：`eventBus.removeListener("事件名称", 监听函数)`；

```javascript
import React, { Component } from 'react';
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  render() {
    return (
      <div>
        <button onClick={e => this.btnClick()}>按钮</button>
      </div>
    )
  }

  btnClick() {
    eventBus.emit("headerClick", "why", 18);
  }
}



class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    )
  }
}

export default class App extends Component {

  componentDidMount() {
    eventBus.addListener("headerClick", this.headerClick)
  }

  headerClick(name, age) {
    console.log(name, age);
  }

  componentWillUnmount() {
    eventBus.removeListener("headerClick", this.headerClick);
  }

  render() {
    return (
      <div>
        <Profile/>
        <h2>其他内容</h2>
      </div>
    )
  }
}
```



### 深入理解setState

##### setState异步更新

- 最终打印结果是Hello World；
- 可见setState是异步的操作，我们并不能在执行完setState之后立马拿到最新的state的结果

```javascript
changeText() {
  this.setState({
    message: "你好啊,李银河"
  })
  console.log(this.state.message); // Hello World
}
```

##### 为什么setState要设计成异步的

- `setState`设计为异步，可以显著的提升性能；

- - 如果每次调用 setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的；
  - 最好的办法应该是获取到多个更新，之后进行批量更新；

- 如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步；

- - state和props不能保持一致性，会在开发中产生很多的问题；

##### 什么情况下是同步？

在setTimeout或者原生dom事件中，setState是同步

### 受控组件和非受控组件



#### Refs的使用

有时候需要操作DOM.

##### 如何创建ref

- 方式一：传入字符串

- - 使用时通过 `this.refs.传入的字符串`格式获取对应的元素；

- 方式二：传入一个对象

- - 对象是通过 `React.createRef()` 方式创建出来的；
  - 使用时获取到创建的对象其中有一个`current`属性就是对应的元素；

- 方式三：传入一个函数

- - 该函数会在DOM被挂载时进行回调，这个函数会传入一个 元素对象，我们可以自己保存；
  - 使用时，直接拿到之前保存的元素对象即可；

```javascript
import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.titleEl = null;
  }

  render() {
    return (
      <div>
        <h2 ref="title">String Ref</h2>
        <h2 ref={this.titleRef}>Hello Create Ref</h2>
        <h2 ref={element => this.titleEl = element}>Callback Ref</h2>

        <button onClick={e => this.changeText()}>改变文本</button>
      </div>
    )
  }

  changeText() {
    this.refs.title.innerHTML = "你好啊,李银河";
    this.titleRef.current.innerHTML = "你好啊,李银河";
    this.titleEl.innerHTML = "你好啊,李银河";
  }
}
```

#### 受控组件

在HTML的表单元素中，它们通常自己维护一套`state`，并随着用户的输入自己进行`UI`上的更新，这种行为是不被我们程序所管控的。而如果将`React`里的`state`属性和表单元素的值建立依赖关系，再通过`onChange`事件与`setState()`结合更新`state`属性，就能达到控制用户输入过程中表单发生的操作。被`React`以这种方式控制取值的表单输入元素就叫做**受控组件**。

##### input

```javascript
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "username",
        };
    }
    render() {
        return (
            <div>
                <input
                    onChange={(e) => this.input1(e)}
                    name="username"
                    value={this.state.username}
                />
            </div>
        );
    }
    input1(e) {
        this.setState({
            username: e.target.value,
        });
    }
}
```

##### select

```javascript
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "cute" };
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert("你今日相亲对象的类型是: " + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    你今日相亲对象的类型是:
                    
                    
                    //多选的话multiple={true}
                    <select
                        value={this.state.value}
                        onChange={(e) => this.handleChange(e)}
                    >
                        <option value="sunshine">阳光</option>
                        <option value="handsome">帅气</option>
                        <option value="cute">可爱</option>
                        <option value="reserved">高冷</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}
```



#### 非受控组件

表单数据将交由 DOM 节点来处理。

```javascript
import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="">
            用户:<input defaultValue="username" type="text" name="username" ref={this.usernameRef}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
```

## 虚拟DOM

### 方式一：

1.state数据

2.jsx模板

3.数据+模板结合生成真实的dom，来显示

4.state发生改变

5.数据+模板生成真实的dom，生成真实的dom，替换掉旧的dom。

### 方式一缺陷

1.第一次生成了完整的dom片段

2.第二次也生成了完整的dom片段

3.第二次的dom替换了第一次的dom，比较耗性能

### 方式二：

1.state数据

2.jsx模板

3.数据+模板结合生成真实的dom，来显示

4.state发生改变

5.数据+模板生成真实的dom，生成真实的dom，并不直接替换掉旧的dom。

6.新的dom和旧的dom做对比，找出差异

7.只用改变了的差异进行替换

### 方式二缺陷：性能提升并不明显

### 于是react提出了虚拟dom(就是一个js对象，用它来描述真实的dom)

1.state数据

2.jsx模板

3.数据+模板结合生成虚拟的dom

```javascript
<div><span>hello word</span></div>
```

4.用虚拟dom生成真实的dom,来显示

```javascript
['div',{id:'abc'},'span',{},'hello word']
```

5.state发生变化

6.生成新的虚拟dom

```javascript
['div',{id:'abc'},'span',{},'bay bay']
```

7.比较新旧虚拟dom，找到区别是span中的内容

8.直接操作dom，改变span中的内容

## 高阶组件

### 官方的定义：

**高阶组件是参数为组件，返回值为新组件的函数**

我们可以进行如下的解析：

- 首先， `高阶组件` 本身不是一个组件，而是一个函数；
- 其次，这个函数的参数是一个组件，返回值也是一个组件；

高阶组件的调用过程类似于这样：

```javascript
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```

高阶函数的编写过程类似于这样：

```javascript
import React, { PureComponent } from 'react';

function higherOrderComponent(WrapperComponent) {
  return class NewComponent extends PureComponent {
    render() {
      return <WrapperComponent/>
    }
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    )
  }
}

export default higherOrderComponent(App);
```

### 高阶组件的使用



## 路由

### 安装依赖

```javascript
yarn add react-router-dom
```

#### react-router最主要的API是给我们提供的一些组件：

- BrowserRouter或HashRouter

- - Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件；
  - BrowserRouter使用history模式；
  - HashRouter使用hash模式；

- Link和NavLink：

- - 通常路径的跳转是使用Link组件，最终会被渲染成a元素；
  - NavLink是在Link基础之上增加了一些样式属性（后续学习）；
  - to属性：Link中最重要的属性，用于设置跳转到的路径；

- Route：

- - Route用于路径的匹配；
  - path属性：用于设置匹配到的路径；
  - component属性：设置匹配到路径后，渲染的组件；
  - exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件；

#### 实操

```javascript
import React, { PureComponent } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/profile">我的</Link>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    )
  }
}

```

#### NavLink的使用

**路径选中时，对应的a元素变为红色**

这个时候，我们要使用NavLink组件来替代Link组件：

- activeStyle：活跃时（匹配时）的样式；
- activeClassName：活跃时添加的class；
- exact：是否精准匹配；

先演示activeStyle：

```javascript
<NavLink to="/" activeStyle={{color: "red"}}>首页</NavLink>
<NavLink to="/about" activeStyle={{color: "red"}}>关于</NavLink>
<NavLink to="/profile" activeStyle={{color: "red"}}>我的</NavLink>
```

但是，我们会发现在选中about或profile时，第一个也会变成红色：

- 原因是/路径也匹配到了/about或/profile；
- 这个时候，我们可以在第一个NavLink中添加上exact属性；

```javascript
<NavLink exact to="/" activeStyle={{color: "red"}}>首页</NavLink>
```

默认的activeClassName：

- 事实上在默认匹配成功时，NavLink就会添加上一个动态的active class；
- 所以我们也可以直接编写样式

```javascript
a.active {
  color: red;
}
```

当然，如果你担心这个class在其他地方被使用了，出现样式的层叠，也可以自定义class

```javascript
<NavLink exact to="/" activeClassName="link-active">首页</NavLink>
<NavLink to="/about" activeClassName="link-active">关于</NavLink>
<NavLink to="/profile" activeClassName="link-active">我的</NavLink>
```

#### Switch的作用

排他，只匹配到点击的路由

```javascript
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/profile" component={Profile} />
  <Route path="/:userid" component={User} />
  <Route component={NoMatch} />
</Switch>
```

#### Redirect

重定向

#### 嵌套路由

```javascript
import React, { PureComponent } from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function AboutProduct(props) {
    return (
        <ul>
            <li>商品列表1</li>
            <li>商品列表2</li>
            <li>商品列表3</li>
        </ul>
    );
}

export default class About extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to="/about">商品</Link>

                    <Switch>
                        <Route exact path="/about" component={AboutProduct} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

```

#### 手动跳转

**`JavaScript代码`进行跳转有一个前提：必须获取到history对象。**

如何可以获取到history的对象呢？两种方式

- 方式一：如果该组件是通过路由直接跳转过来的，那么可以直接获取history、location、match对象；
- 方式二：如果该组件是一个普通渲染的组件，那么不可以直接获取history、location、match对象；

那么如果普通的组件也希望获取对应的对象属性应该怎么做呢？

- 前面我们学习过高阶组件，可以在组件中添加想要的属性；
- react-router也是通过高阶组件为我们的组件添加相关的属性的；

如果我们希望在App组件中获取到history对象，必须满足以下两个条件：

- App组件必须包裹在Router组件之内；
- App组件使用withRouter高阶组件包裹；

index.js代码修改如下：

```javascript
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

App.js代码修改如下：

```javascript
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
...省略其他的导入代码

class App extends PureComponent {
  render() {
    console.log(this.props.history);

    return (
      <div>
        ...其他代码
        <button onClick={e => this.pushToProfile()}>我的</button>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/:userid" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }

  pushToProfile() {
    this.props.history.push("/profile");
  }
}

export default withRouter(App);
```

#### 传递参数

##### 传递参数有三种方式：

- ##### 动态路由的方式；

  ###### 动态路由的概念指的是路由中的路径并不会固定：

  - 比如`/detail`的path对应一个组件Detail；

  - 如果我们将path在Route匹配时写成`/detail/:id`，那么 `/detail/abc`、`/detail/123`都可以匹配到该Route，并且进行显示；

  - 这个匹配规则，我们就称之为动态路由；

  - ###### **this.props.match.params**获取参数

    ```javascript
    <div>
     ...其他Link
      <NavLink to="/detail/abc123">详情</NavLink>
    
      <Switch>
        ... 其他Route
        <Route path="/detail/:id" component={Detail}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
    ```

    

- ##### search传递参数；

- **this.props.location.search**获取参数

- ```javascript
  <NavLink to="/detail2?name=why&age=18">详情2</NavLink>
  
  <Switch>
    <Route path="/detail2" component={Detail2}/>
  </Switch>
  ```



- ##### to传入对象；

- 可以传入一个对象

- **this.props.location**获取参数

- ```javascript
  <NavLink to={{
      pathname: "/detail2", 
      query: {name: "kobe", age: 30},
      state: {height: 1.98, address: "洛杉矶"},
      search: "?apikey=123"
    }}>
    详情2
  </NavLink>
  ```

#### react-router-config

**路由配置放到一个地方进行集中管理**

##### 安装

```javascript
yarn add react-router-config
```

##### 在index.js中引入

```javascript
import { BrowserRouter } from "react-router-dom";
```

##### 新建router文件夹/index.js

```javascript
import Home from "../page/home";
import About, { AboutMessage, AboutProduct } from "../page/about";

const routes = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "/about",
        component: About,
        routes: [
            {
                path: "/about",
                exact: true,
                component: AboutProduct,
            },
            {
                path: "/about/message",
                component: AboutMessage,
            },
        ],
    },
];

export default routes;

```



## redux

### 为什么需要```redux```什么场景会使用到```redux```

- 某个组件的状态，需要共享
- 某个状态需要在任何地方都可以拿到
- 一个组件需要改变全局状态
- 一个组件需要改变另外一个组件的状态

### 设计思想

- web应用是一个状态机，视图与状态是一一对应的
- 所有的状态都保存在一个对象里面

### 纯函数

- 确定的输入，一定会产生确定的输出

- 函数执行的过程中不能产生副作用

- 看看几个是否是纯函数的案例

  - ```javascript
    function sum(num1, num2) {
      return num1 + num2;
    }
    //是纯函数，有确定的输出，并且中间没有任何副作用
    ```

  - ```javascript
    let foo = 5;
    
    function add(num) {
      return foo + num;
    }
    
    console.log(add(5));
    foo = 10;
    console.log(add(5));
    
    //不是纯函数，会影响确定的输出，因为函数依赖外部的一个变量，let这个变量可以改变。如果是const声明的变量就是个纯函数
    ```

### 认识redux

#### redux三大原则

- 单一数据源    一个 store 
- state是只读的  唯一修改state中的数据是通过action
- 使用纯函数来执行修改 通过reducer将旧的state和action联系起来返回新的state

#### redux的核心理念

- Redux要求我们通过action来更新数据
- 所有数据的变化，必须通过派发（dispatch）action来更新
- action是一个普通的JavaScript对象，用来描述这次更新的type和content
- reducer可以将state和action联系起来
- reducer做的事情就是将传入的state和action结合起来生成一个新的state

#### redux的基本使用

##### redux     demo

- 创建store文件夹

- 创建store/index.js文件

- ```javascript
  import redux from 'redux';
  import reducer from './reducer.js';
  
  const store = redux.createStore(reducer);
  
  export default store;
  ```

- 创建store/reduce.js文件

- ```javascript
  import {
    ADD_NUMBER,
    SUB_NUMBER
  } from './constants.js';
  
  const initialState = {
    counter: 0
  }
  
  function reducer(state = initialState, action) {
    switch(action.type) {
      case ADD_NUMBER:
        return {...state, counter: state.counter + action.num};
      case SUB_NUMBER:
        return {...state, counter: state.counter - action.num};
      default:
        return state;
    } 
  }
  
  export default reducer;
  ```

- 创建store/actionCreators.js文件

- ```javascript
  import {
    ADD_NUMBER,
    SUB_NUMBER
  } from './constants.js'
  
  const addAction = (count) => ({
    type: ADD_NUMBER,
    num: count
  });
  
  const subAction = (count) => ({
    type: SUB_NUMBER,
    num: count
  })
  
  export {
    addAction,
    subAction
  }
  ```

- 创建创建store/constants.js文件

- ```javascript
  const ADD_NUMBER = "ADD_NUMBER";
  const SUB_NUMBER = "SUB_NUMER";
  
  export {
    ADD_NUMBER,
    SUB_NUMBER
  }
  ```

- 记得

- ```javascript
  componentDidMount() {
       store.subscribe(() => {
           this.setState({
               name: store.getState().name,
           });
       });
   }
  ```



### react中使用redux

```javascript
yarn add react-redux
```

index.js

```javascript
import store from "./store";
import { Provider } from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
```

组件中

```javascript
import React, { Component } from "react";

import { changeName } from "./store/action";
import { connect } from "react-redux";
class reactRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <span>{this.props.name}</span>
                <button onClick={() => this.props.changeNames()}>点击</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    name: state.name,
});

const mapDispatchToProps = (dispatch) => ({
    changeNames() {
        dispatch(changeName("我儿子"));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(reactRedux);

```

### 组件中的异步请求

```javascript
  componentDidMount() {
        axios({
            url: "http://123.207.32.32:8000/home/multidata",
        }).then((res) => {
            const data = res.data.data;
            this.props.changeBanners(data.banner.list);
            // this.props.changeRecommends(data.recommend.list);
        });
    }
    const mapStateToProps = (state) => ({
    name: state.name,
    banner: state.banners,
});

const mapDispatchToProps = (dispatch) => ({
    changeNames() {
        dispatch(changeName("我儿子"));
    },
    changeBanners(banners) {
        dispatch(functionASYNC(banners));
    },
});
```



### 中间件

#### redux-thunk

##### redux中如何可以进行异步的操作呢？

- 答案就是使用**中间件（Middleware）**；
- 学习过Express或Koa框架的童鞋对中间件的概念一定不陌生；
- 在这类框架中，Middleware可以帮助我们在请求和响应之间嵌入一些操作的代码，比如cookie解析、日志记录、文件压缩等操作；

##### redux也引入了中间件（Middleware）的概念：

- 这个中间件的目的是在`dispatch的action`和`最终达到的reducer`之间，扩展一些自己的代码；
- 比如日志记录、调用异步接口、添加代码调试功能等等；

##### 安装

```javascript
yarn add redux-thunk
```

##### redux引入了中间件（Middleware）的概念：

- 这个中间件的目的是在`dispatch的action`和`最终达到的reducer`之间，扩展一些自己的代码；
- 比如日志记录、调用异步接口、添加代码调试功能等等；

##### 实操

- 在store/index中引入redux-thunk

  ```javascript
  import thunkMiddleware from 'redux-thunk';
  import { createStore,applyMiddleware } from "redux";
  ```

- 在store/index中应用中间件

- ```javascript
  const enhancer = applyMiddleware(thunkMiddleware);
  const store = createStore(reducer, enhancer);
  ```

- 定义返回一个函数的action

- ```javascript
  const getHomeMultidataAction = () => {
    return (dispatch) => {
      axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
        const data = res.data.data;
        dispatch(changeBannersAction(data.banner.list));
        dispatch(changeRecommendsAction(data.recommend.list));
      })
    }
  }
  ```

- 在组件中引入getHomeMultidataAction函数

- ```javascript
  componentDidMount() {
      this.props.getHomeMultidata();
    }
  ```

- ```javascript
  const mapDispatchToProps = dispatch => {
    return {
   
      getHomeMultidata() {
        dispatch(getHomeMultidataAction());
      }
    }
  ```



#### redux-saga

##### 安装

```javascript
yarn add redux-saga
```

##### 引入

```javascript
//在store/index
import createSagaMiddleware from 'redux-saga';
// 通过createSagaMiddleware函数来创建saga中间件
const sagaMiddleware = createSagaMiddleware();
// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware));
// 必须启动saga中间件，并且传入其要监听的generator
sagaMiddleware.run(mySaga);
```

##### 创建一个独立的saga.js文件

- takeEvery：可以传入多个监听的actionType，每一个都可以被执行（对应有一个takeLastest，会取消前面的）
- put：在saga中派发action不再是通过dispatch，而是通过put；
- all：可以在yield的时候put多个action；

```javascript
import { takeEvery, put, all } from "redux-saga/effects";
import axios from "axios";

import { FETCH_HOME_MULTIDATA } from "./type";
import { functionASYNC } from "./action";

function* fetchHomeMultidata(action) {
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
    console.log(res);
    const data = res.data.data;
    yield all([
        put(functionASYNC(data.banner.list)),
        // put(changeRecommendsAction(data.recommend.list)),
    ]);
}

function* mySaga() {
    yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
}

export default mySaga;

```



## 补充

### PureComponent和component的区别



## HOOK

### 为什么需要hook

它可以让我们在不编写class的情况下使用state以及其他的React特性（比如生命周期）

### 函数式组件

```javascript
import React, { useState } from 'react';

export default function Counter2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}
```

#### 解释上面的代码

- useState来自react，需要从react中导入，它是一个hook；

- - 元素一：当前状态的值（第一调用为初始化值）；
  - 元素二：设置状态值的函数；
  - 参数：初始化值，如果不设置为undefined；
  - 返回值：数组，包含两个元素；

- 点击button按钮后，会完成两件事情：

- - 调用setCount，设置一个新的值；
  - 组件重新渲染，并且根据新的值返回DOM结构；

### 注意规则

- 只能在**函数最外层**调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 **React 的函数组件**中调用 Hook。不要在其他 JavaScript 函数中调用。自定义hook中也可以调用。

###  UseState

**state hook的api就是useState**

- **`useState`**会帮助我们定义一个 `state变量`，`useState` 是一种新方法，它与 class 里面的 `this.state` 提供的功能完全相同。一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。
- **`useState`**接受唯一一个参数，在第一次组件被调用时使用来作为初始化值。（如果没有传递参数，那么初始化值为undefined）。
- **`useState`**是一个数组，我们可以通过数组的解构，来完成赋值会非常方便。

#### 复杂的usestate

```javascript
import React, { useState } from "react";

export default function App() {
    const [data, setData] = useState(["科比", "乔丹"]);
    function add() {
        const newdata = [...data];
        newdata.push("库里");
        setData(newdata);
    }
    return (
        <div>
            <div>
                {data.map((item, index) => {
                    return <div key={index}>{item}</div>;
                })}
            </div>
            {/* <button
                onClick={(e) => {
                    setData([...data, "库里"]);
                }}
            >
                操作
            </button> */}
            <button onClick={add}>操作</button>
        </div>
    );
}

```

### useEffect

#### 介绍

- Effect Hook 可以让你来完成一些类似于class中生命周期的功能；
- 事实上，类似于网络请求、手动更新DOM、一些事件的监听，都是React更新DOM的一些副作用（Side Effects）；
- 所以对于完成这些功能的Hook被称之为 Effect Hook；

#### 基本使用

```javascript
import React, { useState, useEffect } from "react";

export default function App() {
    const [data, setData] = useState(0);
    useEffect(() => {
        document.title = data;
    });
    return (
        <div>
            <div>计数{data}</div>
            <button onClick={(e) => setData(data + 1)}>加</button>
        </div>
    );
}

```

#### 解释上面代码

**useEffect的解析：**

- 通过useEffect的Hook，可以告诉React需要在渲染后执行某些操作；
- useEffect要求我们传入一个`回调函数`，在React执行完更新DOM操作之后，就`会回调这个函数`；
- 默认情况下，无论是第一次渲染之后，还是每次更新之后，都会执行这个 `回调函数`；

#### 清除Effect

传入回调函数

```javascript
return () => {
      console.log("DOM被移除时会回调");
    }
```



```javascript
import React, { useState, useEffect } from 'react';

export default function EffectHookClear() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `当前计数: ${count}`;
    console.log("每次DOM更新时会回调");

    return () => {
      console.log("DOM被移除时会回调");
    }
  })

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
    </div>
  )
}
```

#### 使用多个Effect

```javascript
import React, { useEffect } from 'react';

export default function MultiUseEffect() {
  useEffect(() => {
    console.log("网络请求");
  });

  useEffect(() => {
    console.log("修改DOM");
  })

  useEffect(() => {
    console.log("事件监听");

    return () => {
      console.log("取消监听");
    }
  })

  return (
    <div>
      <h2>MultiUseEffect</h2>
    </div>
  )
}
```

#### Effect性能优化

默认情况下，useEffect的回调函数会在每次渲染时都重新执行，但是这会导致两个问题：

- 某些代码我们只是希望执行一次即可，类似于componentDidMount和componentWillUnmount中完成的事情；（比如网络请求、订阅和取消订阅）；
- 另外，多次执行也会导致一定的性能问题；

我们如何决定useEffect在什么时候应该执行和什么时候不应该执行呢？

- useEffect实际上有两个参数：
- 参数一：执行的回调函数；
- 参数二：该useEffect在哪些state发生变化时，才重新执行；（受谁的影响）

```javascript
    useEffect(() => {
        console.log("执行了");
        document.title = data;
        return () => {
            console.log("移除了");
        };
    }, []);
```

### Context Hook

### useReducer

**useReducer仅仅是useState的一种替代方案**：

- 在某些场景下，如果state的处理逻辑比较复杂，我们可以通过useReducer来对其进行拆分；
- 或者这次修改的state需要依赖之前的state时，也可以使用；

### useCallback

useCallback实际的目的是为了进行性能的优化。

如何进行性能的优化呢？

- useCallback会返回一个函数的 memoized（记忆的） 值；
- 在依赖不变的情况下，多次定义的时候，返回的值是相同的；

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b]
);
```

### useMemo

### useRef

### useImperativeHandle

### useLayoutEffect

### 自定义hook

**函数以特殊的方式命名，以 `use` 开头即可**

```javascript
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建了`);
    return () => {
      console.log(`${name}组件被销毁了`);
    }
  }, [])
}
```



## 项目（网易云音乐）

### 创建项目

```javascript
create-react-app 项目名称
```

- 刪掉不需要的文件，只保留index.js和App.js
- 在src目錄下创建**assets**文件夹放一些静态资源
- 在src目录下创建common文件夹放一些共用的方法
- 在src目录下创建page文件夹
- 在src目录下创建component文件夹放共用的组件
- 在src目录下创建store文件夹放状态管理
- 在src目录下创建router文件夹
- 在src目录下创建request请求文件夹
- 在src目录下创建utils文件夹

### 设置初始化css样式

#### 安装

```javascript
yarn add normalize.css
```

#### 在assets文件中创建css文件夹/reset.css

```javascript
@import "~normalize.css";
```

#### 在index.js中引入reset.css

```javascript
import "@/assets/css/reset.css";
```

### 设置别名

#### 安装craco/craco

```javascript
yarn add  @cracco/craco
```

#### package.json

```javascript
"scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
}
```

#### 在根目录下创建craco.config.js

```javascript
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            components: resolve("src/components"),
        },
    },
};

```

### 创建路由

#### 安装

```javascript
yarn add react-router-dom
yarn add react-router-config
```

### 在app.js中引入

```javascript
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./router";
```

```javascript
       <HashRouter>
            <div>头部</div>
            <div>{renderRoutes(routes)}</div>
            <div>底部</div>
        </HashRouter>
```

### css

#### 安装

```javascript
yarn add styled-componentsj
```

## 项目（简书）

### 创建项目

```javascript
create-react-app jianshu
```

### css设置

#### 初始化样式

```javascript
yarn add normalize.css
```

在assets文件中创建css文件夹/reset.css

```css
@import "~normalize.css";
```

在index.js中引入reset.css

```css
import "@/assets/css/reset.css";
```

#### 使用css in js

安装

```javascript
yarn add styled-components
```

```javascript
import styled from "styled-components";
```

#### 使用阿里字体图标

在index.html中引入阿里字体图标在线的地址

```css
<link rel="stylesheet" href="//at.alicdn.com/t/font_2891196_ih4wjyrl0x.css">
```

```css
<i className={["iconfont" + item.icon]}></i>
```

### 设置别名

安装craco/craco

```javascript
yarn add @craco/craco
```

修改package.json

```javascript
"scripts": {
//   "start": "react-scripts start",
//   "build": "react-scripts build",
//   "test": "react-scripts test",
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
}
```

创建craco.config.js配置文件

```javascript
const path = require("path");

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"),
            components: resolve("src/components"),
        },
    },
};

```

### 使用redux,react-redux ,redux-thunk

#### 安装

```javascript
yarn add redux react-redux redux-thunk
```

#### 使用

1.在index.js中引入

```javascript
import { Provider } from "react-redux";
import store from "./store";
```

2.

```javascript
 <Provider store={store}>
        <App />
  </Provider>
```

3.在使用的组件中引入

```javascript
import { connect } from "react-redux";
```

```javascript
const mapStateToProps = (state) => ({
    searchBar: state.list,
});
const mapDispatchToProps = (dispatch) => ({
    handleA(list) {
        dispatch(testAjax(list));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(header);
```

4.中间件的使用  在store中的index.js

```javascript
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
// composeEnhancers函数
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const storeEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, composeEnhancers(storeEnhancer));
export default store;
```

### redux系列的代码结构优化



### ImmutableJS

## 项目（管理后台）



