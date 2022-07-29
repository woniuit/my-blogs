---

sidebar: auto

---
# 模块化

将程序划分成一个个小的结构，这个结构中编写属于自己的逻辑代码，有自己的作用域，不会影响到其他的结构。

## CommonJs

```CommonJS```规范的核心变量：```exports```、```module.exports```、```require```

```exports```和```module.exports```可以负责对模块中的内容进行导出

```require```函数可以帮助我们导入模块

### exports导出

exports是一个对象，可以在这个对象中添加很多个属性，添加的属性会导出

```js
//main.js
exports.name='name'
exports.name2='name2'
```

```js
//bar.js
const bar=require('main.js')
console.log(bar.name);//name
```

上面代码理解

- require通过查找方式，找到了exports这个对象
- 并且将这个exports对象赋值给了bar变量
- bar变量就是exports对象了
- 实际上就是一个浅拷贝

### module.exports
```CommonJS```中是没有```module.exports```的概念的,但是为了实现模块的导出，Node中使用的是Module的类，每一个模块都是Module的一个实例，也就是module,所以在Node中真正用于导出的其实根本不是exports，而是module.exports
```js
//01.js
const age = 18
function sum(num1, num2) {
  return num1 + num2
}

module.exports = {
  age,
  sum
}
```

```js
//02.js
const { age, sum } = require("./why.js")
console.log(age)
console.log(sum(20, 30))
```

#### module.exports和exports的关系

为什么exports也可以导出

这是因为module对象的exports属性是exports对象的一个引用

```module.exports = exports```

### CommonJS规范缺点

CommonJS加载模块是同步的

### 加载过程

js运行时加载，是同步的，同步的就意味着一个文件没有加载结束之前，后面的代码都不会执行

## ES Module

### export和import关键字来实现模块化

- export负责将模块内的内容导出
- import负责从其他模块导入内容

```js
//01.js
//方式一
export const age = 18;
export const sayHello = function(name) {
  console.log("你好" + name);
}
//方式二: {}中统一导出
const age = 18;
const sayHello = function(name) {
  console.log("你好" + name);
}
export {
  age,
  sayHello
}
```

```js
//02.js
//方式1
import {age, sayHello} from '01.js';
//方式2 as别名
import {age as age1, sayHello} from '01.js';
//方式3: 将导出的所有内容放到一个标识符中
import * as foo from '01.js'
```

### default默认导出

- 默认导出export时可以不需要指定名字
- 导入时不需要使用 {}，并且可以自己来指定名字
- 方便和CommonJS相互操作
- 在一个模块中，只能有一个默认导出（default export）

### ES Module加载过程

加载js文件的过程是编译（解析）时加载的，并且是异步的，编译时（解析）时加载，意味着import不能和运行时相关的内容放在一起使用，异步的意味着：JS引擎在遇到import时会去获取这个js文件，但是这个获取的过程是异步的，并不会阻塞主线程继 续执行

### ES Module和CommonJS的模块化有一些不同之处

- 它使用了import和export关键字
- 采用编译期的静态分析，并且也加入了动态引用的方式

