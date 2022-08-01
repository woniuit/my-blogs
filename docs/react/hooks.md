# hooks

## useState

useState为函数组件提供状态（state）

- 导入 `useState` 函数
- 调用 `useState` 函数，并传入状态的初始值
- 从`useState`函数的返回值中，拿到状态和修改状态的方法
- 在JSX中展示状态
- 调用修改状态的方法更新状态

```js
import { useState} from "react";

function App() {
    // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
    // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
    const [count, setCount] = useState(0);
    const [objs, setObj] = useState({
        name: 1,
    });
    function add() {
        setCount(count + 2);
        objs.name=2
        setObj(objs)
        console.log(objs);
    }
   
    return <button onClick={add}>{count}</button>;
}
export default App;

```

## useEffect

**什么是副作用**

 副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

**常见的副作用**

1. 数据请求 ajax发送
2. 手动修改dom
3. localstorage操作

useEffect函数的作用就是为react函数组件提供副作用处理的！

- 导入 `useEffect` 函数

- 调用 `useEffect` 函数，并传入回调函数

- 在回调函数中编写副作用处理（dom操作）

- 修改数据状态

- 检测副作用是否生效

```js
import { useState, useEffect } from "react";

function App() {
    const [title, setCount] = useState(0);
 
    useEffect(() => {
        // dom操作
        document.title = "我是标题";
    }, []);

    return (
        <div>
            <div>{title}</div>
        </div>
    );
}
export default App;

```

### 依赖项控制执行时机

**不添加依赖项**

组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行

- 组件初始渲染

- 组件更新 （不管是哪个状态引起的更新）

```js
useEffect(()=>{
    console.log('副作用执行了')
})
```

**添加空数组**

组件只在首次渲染时执行一次

```js
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```

**添加特定依赖项**

副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```js
function App() {  
    const [count, setCount] = useState(0)  
    const [name, setName] = useState('zs') 
    
    useEffect(() => {    
        console.log('副作用执行了')  
    }, [count])  
    
    return (    
        <>      
         <button onClick={() => { setCount(count + 1) }}>{count}</button>      
         <button onClick={() => { setName('cp') }}>{name}</button>    
        </>  
    )
}
```

### 清除副作用

```js
useEffect(() => {   
    console.log('副作用函数执行了')    
    // 副作用函数的执行时机为: 在下一次副作用函数执行之前执行   
    return () => {      
        console.log('清理副作用的函数执行了')      
        // 在这里写清理副作用的代码    
    }
})
```

```js
import { useEffect, useState } from 'react'

function Foo() {  
    useEffect(() => {   
        const timerId = setInterval(() => {      
            console.log('副作用函数执行了')    
        }, 1000)   
        // 添加清理副租用函数    
        return () => {      
            clearInterval(timerId)    
        }  
    })  
    return <div>Foo</div>
}
function App() {  
    const [flag, setFlag] = useState(true)  
    return (   
        <>      
          <button onClick={() => setFlag(false)}>click</button>      
         {flag ? <Foo/> : null}    
        </>    
    )
}

export default App
```

### 发送网络请求

不可以直接在useEffect的回调函数外层直接包裹 await ，因为**异步会导致清理函数无法立即返回**

```js
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```

## useCallback

useCallback实际的目的是为了进行性能的优化。

useCallback最主要用于性能渲染的地方应该是和memo结合起来，决定子组件是否需要重新渲染；

```js
import React, { memo, useState, useCallback } from 'react';

const CounterIncrement = memo((props) => {
  console.log("CounterIncrment被渲染:", props.name);
  return <button onClick={props.increment}>+1</button>
})

export default function CallbackHookDemo() {
  const [count, setCount] = useState(0);

  const increment1 = useCallback(function increment() {
    setCount(count + 1);
  }, []);

  const increment2 = function() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>当前计数: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <CounterIncrement increment={increment1} name="increment1"/>
      <CounterIncrement increment={increment2} name="increment2"/>
    </div>
  )
}
```

## useMemo

useMemo实际的目的也是为了进行性能的优化。

- 无论我们点击了是 `+1`还是 `切换` 案例都会重新计算一次；

- 事实上，我们只是希望在count发生变化时重新计算；

  ```js
  import React, { useState, useMemo } from 'react';
  
  function calcNum(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += i;
    }
    console.log("计算一遍");
    return total
  }
  
  export default function MemoHookDemo() {
    const [count, setCount] = useState(10);
    const [isLogin, setIsLogin] = useState(true);
  
    const total = calcNum(count);
  
    return (
      <div>
        <h2>数字和: {total}</h2>
        <button onClick={e => setCount(count + 1)}>+1</button>
        {isLogin && <h2>Coderwhy</h2>}
        <button onClick={e => setIsLogin(!isLogin)}>切换</button>
      </div>
    )
  }
  ```

  这个时候，我们可以使用useMemo来进行性能的优化：

  ```js
  import React, { useState, useMemo } from 'react';
  
  function calcNum(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += i;
    }
    console.log("计算一遍");
    return total
  }
  
  export default function MemoHookDemo() {
    const [count, setCount] = useState(10);
    const [isLogin, setIsLogin] = useState(true);
  
    const total = useMemo(() => {
      return calcNum(count);
    }, [count]);
  
    return (
      <div>
        <h2>数字和: {total}</h2>
        <button onClick={e => setCount(count + 1)}>+1</button>
        {isLogin && <h2>Coderwhy</h2>}
        <button onClick={e => setIsLogin(!isLogin)}>切换</button>
      </div>
    )
  }
  ```

  

## useRef

## 自定义Hook