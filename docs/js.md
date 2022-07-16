---
sidebar: auto
---
# js学习笔记

## 浏览器的工作原理

![1](/1.png)

### 浏览器渲染过程

在这个执行过程中，HTML解析的时候遇到了JavaScript标签，会停止解析HTML，而去加载和执行JavaScript代码

![2](/2.png)



## js执行的原理

### 1.代码执行之前，会先代码解析

v8引擎内部会帮我们创建一个全局对象（GlobalObject）包含Date、Array、String、Number、setTimeout、setInterval，window等等。

#### 看代码示例分析

```js
var name = "why"
var num1 = 20
var num2 = 30
var result = num1 + num2
```

上面的代码解析的时候v8引擎会**创建一个全局的对象**,看下面的代码示例

```javascript
var globalObject = {
  String: "类",
  Date: "类",
  setTimeount: "函数",
  window: globalObject,
  name: undefined,  //解析上面代码的时候代码还没有运行
  num1: undefined,
  num2: undefined,
  result: undefined
}
```



### 2.运行代码

v8为了执行代码, v8引擎内部会有一个**执行上下文栈**(Execution Context Stack, ECStack)(调用栈)

因为我们执行的是全局代码, 为了全局代码能够正常的执行, 需要创建 **全局执行上下文**(Global Execution Context)(全局代码需要被执行时才会创建)

#### 看代码和画图示例分析

那么我们会有这么一段代码，来分析一下它是怎么执行的

```javascript
var name = "why"
console.log(num1)
var num1 = 20
var num2 = 30
var result = num1 + num2
console.log(result)
```

1.会先进行代码解析，代码解析之前还会创建一个执行上下文栈，然后创建全局执行上下文。

创建一个全局的```globalObject```对象

```javascript
globalObject={
  window,
  Array
  ....
  name:undefined
  num1:undefined
  num2:undefined
  result:undefined
}
```

2.然后运行我们的代码

2.1会先创建一个执行上下文栈

<img src="/Snipaste_2021-11-05_10-18-30.png" alt="Snipaste_2021-11-05_10-18-30"  />

2.2创建执行上下文  **GO**低码解析然后代码运行赋值

![1-1](/1-1.png)



### 3.带有函数的执行过程

#### 看代码示例分析

```javascript
var name = "why";

foo(123);
function foo(num) {
    console.log(m);
    var m = 10;
    var n = 20;

    console.log(name);
}
```

首先会进行代码解析，代码解析之前还会创建一个执行上下文栈，然后创建全局执行上下文。

##### 1.创建执行上下文栈（调用栈）

##### 2.执行前会先进行代码解析，不会赋值，也叫**变量的作用域提升**

2.1代码解析的时候遇到了函数，那么给函数开辟一个内存foo:0Xa00(如下图)

2.2存储的空间里放了函数执行的代码块和指定了父级作用域

**2.3在代码解析的时候就会确定好父级作用域**

##### 3.代码执行，会对变量赋值或者执行其他函数

3.1函数代码执行的时候会生成一个新的函数执行上下文，当该函数执行完的时候回把这个上下文移除调用栈

##### 4.遇到函数时会创建一个**函数的执行上下文**，看下面图分析!

4.1 代码解析。。。和上面的步骤一样

![1-2](/1-2.png)



##### 5.函数的执行上下文包含三部分内容：

 p第一部分：在解析函数成为AST树结构时，会创建一个Activation Object（AO）： ü AO中包含形参、arguments、函数定义和指向函数对象、定义的变量；

 p第二部分：作用域链：由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找；

 p第三部分：this绑定的值：这个我们后续会详细解析

### 4.作用域

全局作用域和函数作用域。

全局作用域：

　　　　代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。

 　函数作用域：

　　　　在固定的代码片段才能被访问

**如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链**

#### 作用域面试题



## 内存管理

堆：obj

栈：基本

## 闭包

### 高阶函数

#### 函数作为参数的使用

```javascript
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2))
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function mul(num1, num2) {
  return num1 * num2
}

var m = 20
var n = 30

calc(m, n, mul)
```

#### 函数作为返回值的使用

##### 案例一

```javascript
function foo() {
    function bar() {
        console.log("bar");
    }

    return bar;
}

var fn = foo();
console.log(fn); //function bar
fn(); //bar
```

##### 案例二

```javascript
function makeAdder(count) {
    function add(num) {
        return count + num;
    }

    return add;
}

var add5 = makeAdder(5);
console.log(add5(6));
console.log(add5(10));

var add10 = makeAdder(10);
var add100 = makeAdder(100);
```

#### 高阶函数的含义

把一个函数如果接受另外一个函数作为参数,或者该函数会返回另外一个函数作为返回值的函数, 那么这个函数就称之为是一个高阶函数

### 闭包的定义

一个普通的函数function，如果它可以访问外层作用于的自由变量，那么这个函数就是一个闭包.

```javascript
function foo() {
    var name = "foo";
    function bar() {
        console.log("bar", name);
    }

    return bar;
}

var fn = foo();
fn(); //foo
//清除
fn=null
foo=null
```

#### 内存泄露

因为bar函数指向了它的父级作用域，有人指向它，它就不能销毁。

![1-3](/1-3.png)

### 闭包应用

var this=than 定时器中

## this

### 默认绑定

#### 独立函数调用

##### 案例一

```javascript
function foo() {
    console.log(this);
}

foo();//window
```

##### 案例二

```javascript
function foo1() {
    console.log(this); //window
}

function foo2() {
    console.log(this);//window
    foo1();
}

function foo3() {
    console.log(this);//window
    foo2();
}
foo3()
```

##### 案例三

```javascript
var obj = {
  name: "why",
  foo: function() {
    console.log(this)
  }
}

var bar = obj.foo
bar() // window
```

##### 案例四

```javascript
function foo() {
  console.log(this)
}
var obj = {
  name: "why",
  foo: foo
}

var bar = obj.foo
bar() // window
```

##### 案例五

```javascript
function foo() {
    function bar() {
        console.log(this);
    }
    return bar;
}

var fn = foo();
fn(); // window
```



### 隐式绑定

##### 案例一

```javascript
var obj = {
    name: "why",
    foo: foo,
};

obj.foo(); // obj对象
```

##### 案例二

```javascript
var obj1 = {
    name: "obj1",
    foo: function () {
        console.log(this);
    },
};

var obj2 = {
    name: "obj2",
    bar: obj1.foo,
};

obj2.bar();
```



### 显示绑定

call apply bind

```javascript
// foo.call(obj)
// foo.apply(obj)
// foo.apply("aaaa")
```

**call和apply的区别**

多个参数的时候apply是数组

```javascript
function sum(num1, num2, num3) {
    console.log(num1 + num2 + num3, this);
}

sum.call("call", 20, 30, 40);
sum.apply("apply", [20, 30, 40]);
```



### new绑定

我们通过一个new关键字调用一个函数时(构造器), 这个时候this是在调用这个构造器时创建出来的对象

this = 创建出来的对象

这个绑定过程就是new 绑定

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var p1 = new Person("why", 18);
console.log(p1.name, p1.age);

var p2 = new Person("kobe", 30);
console.log(p2.name, p2.age);

var obj = {
    foo: function () {
        console.log(this);
    },
};
```

### 数组中的this

如果没有传后面的abc就是指向window，传了就指向abc

```javascript
var names = ["abc", "cba", "nba"]
names.forEach(function(item) {
  console.log(item, this)
}, "abc")
```

### 优先级

#### 显示高于隐式

```javascript
var obj = {
    name: "obj",
    foo: function () {
        console.log(this);
    },
};

obj.foo();

// 1.call/apply的显示绑定高于隐式绑定
obj.foo.apply("abc");
obj.foo.call("abc");
```

#### new高于隐式

```javascript
var obj = {
  name: "obj",
  foo: function() {
    console.log(this)
  }
}

// new的优先级高于隐式绑定
var f = new obj.foo()
```

#### new高于显式

#### 忽略显示绑定

```javascript
function foo() {
  console.log(this)
}

foo.apply("abc")
foo.apply({})

// apply/call/bind: 当传入null/undefined时, 自动将this绑定成全局对象
foo.apply(null)
foo.apply(undefined)

var bar = foo.bind(null)
bar()
```

#### 间接函数引用

```javascript
var obj1 = {
  name: "obj1",
  foo: function() {
    console.log(this)   //window
  }
}

var obj2 = {
  name: "obj2"
};

// obj2.bar = obj1.foo
// obj2.bar()

(obj2.bar = obj1.foo)()
```





### 箭头函数下的this

箭头函数没有this指向，this指向上层作用域。就算用显示绑定也没有this

### this面试题

#### 题一

```javascript
var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
function sayName() {
  var sss = person.sayName;
  sss(); //window独立函数调用
  person.sayName(); //person隐式调用
  (person.sayName)(); person隐式调用
  (b = person.sayName)(); //window赋值表达式(独立函数调用)
}
sayName();
```

#### 题二

```javascript
var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = { name: 'person2' }

person1.foo1(); //person1 隐式绑定
person1.foo1.call(person2); //person2 显示绑定优先级大于隐式绑定

person1.foo2();//window 没有this,指向上级作用域
person1.foo2.call(person2);//window 没有this,指向上级作用域

person1.foo3()();//window 独立函数调用
person1.foo3.call(person2)();//window  独立函数调用
person1.foo3().call(person2);//person2 最终调用返回函数式，使用的是显示绑定

person1.foo4()();//person1  箭头函数不绑定this，上层作用域this是person1.foo4()执行后的结果
person1.foo4.call(person2)();//person2  上层作用域被显示的绑定了person2
person1.foo4().call(person2);person2  person1.foo4()=person1  call(person2)  
```

#### 题三

```javascript
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() //person1
person1.foo1.call(person2) //person2

person1.foo2() //person1
person1.foo2.call(person2) //person1

person1.foo3()() //window
person1.foo3.call(person2)() //window
person1.foo3().call(person2) //person2

person1.foo4()() //person1
person1.foo4.call(person2)() //person2
person1.foo4().call(person2) //person1
```

#### 题四

```javascript
var name = 'window'
function Person (name) {
  this.name = name
  this.obj = {
    name: 'obj',
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() //window
person1.obj.foo1.call(person2)() //window
person1.obj.foo1().call(person2) //person2

person1.obj.foo2()() //obj
person1.obj.foo2.call(person2)() //person2
person1.obj.foo2().call(person2) //obj
```

#### 题五

```javascript
var name = 'window'
var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person2 = { name: 'person2' }

person1.foo1() //person1  隐式
person1.foo1.call(person2) //person2 显示

person1.foo2() //window 箭头函数找上一层
person1.foo2.call(person2) //window 箭头函数 call无法改变 还是找到上一层

person1.foo3()() //window 独立函数
person1.foo3.call(person2)() //window 独立函数 person1.foo3.call(person2)= person2, person2()独立函数调用
person1.foo3().call(person2) //person2

person1.foo4()() //person1 箭头函数找上一层
person1.foo4.call(person2)() //person2 箭头函数找上一层
person1.foo4().call(person2)//person1 箭头函数找上一层，call无法改变this指向
```

#### 题六

```javascript
var name = 'window'
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  },
  this.foo2 = () => console.log(this.name),
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  },
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo1() //person1
person1.foo1.call(person2) //person2

person1.foo2() //person1
person1.foo2.call(person2) //person1

person1.foo3()() //window
person1.foo3.call(person2)() //window
person1.foo3().call(person2)  //person2

person1.foo4()() //person1
person1.foo4.call(person2)() //person2
person1.foo4().call(person2) //person1
```

#### 题七

```javascript
var name = 'window'
function Person (name) {
  this.name = name  //这个name和形参有关
  this.obj = {
    name: 'obj', //注意这个name和形参无关
    foo1: function () {
      return function () {
        console.log(this.name)
      }
    },
    foo2: function () {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() //window
person1.obj.foo1.call(person2)() //window
person1.obj.foo1().call(person2) //person2

person1.obj.foo2()() //obj
person1.obj.foo2.call(person2)()//person2
person1.obj.foo2().call(person2) //obj
```



## call-apply-bind解析

### 手写call的实现

```javascript

```



### 手写apply的实现

```javascript

```



### 手写bind的实现

```javascript

```

### 伪数组转数组

#### 方式一

```javascript
var newArr2 = Array.prototype.slice.call(arguments)
  console.log(newArr2)
```

#### 方式二

```javascript
var newArr3 = [].slice.call(arguments)
  console.log(newArr3)
```

#### 方式三

```javascript
var newArr4 = Array.from(arguments)
  console.log(newArr4)
```

#### 方式四

```javascript
 var newArr5 = [...arguments]
  console.log(newArr5)
```



## 纯函数

### 纯函数的概念

- 确定的输入，一定会产出确定的输出
- 函数执行的过程中不能产生副作用

#### 副作用

表示在执行一个函数时，除了返回函数值之外，还对调用函数产生 了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储

## 柯里化

### 概念

只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数

```javascript
function foo(m,n,x,y){
   return m+n+x+y
}
foo(10,20,30,40)

//柯里化的过程
function bar(m){
  return function(n){
     return function(x){
        return function(y){
          m+n+x+y
        }
     }
  }
}
bar(10)(20)(30)(40)

// 简化柯里化的代码
var sum2 = x => y => z => {
  return x + y + z
}

console.log(sum2(10)(20)(30))

var sum3 = x => y => z => x + y + z
console.log(sum3(10)(20)(30))
```

### 柯里化函数的作用

一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理；我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果。

#### 单一职责

```javascript
function add(x, y, z) {
  x = x + 2
  y = y * 2
  z = z * z
  return x + y + z
}

console.log(add(10, 20, 30)) //一个函数可以处理完成，但是如果x=x+2或者y=y+2需要很多行代码才能处理的时候，就需要下面的代码来进行处理了。每个函数都有自己的职责，叫单一职责。


function sum(x) {
  x = x + 2

  return function(y) {
    y = y * 2

    return function(z) {
      z = z * z

      return x + y + z
    }
  }
}

console.log(sum(10)(20)(30))


```

#### 逻辑的复用例

```javascript
// function sum(m, n) {
//   return m + n
// }

// // 假如在程序中,我们经常需要把5和另外一个数字进行相加
// console.log(sum(5, 10))
// console.log(sum(5, 14))
// console.log(sum(5, 1100))
// console.log(sum(5, 555))

function makeAdder(count) {
  count = count * count

  return function(num) {
    return count + num
  }
}

// var result = makeAdder(5)(10)
// console.log(result)
var adder5 = makeAdder(5)
adder5(10)
adder5(14)
adder5(1100)
adder5(555)

```

#### 柯里化函数的实现

## 组合函数

概念

组合（Compose）函数是在JavaScript开发过程中一种对函数的使用技巧、模式。

比如我们现在需要对某一个数据进行函数的调用，执行两个函数fn1和fn2，这两个函数是依次执行的，

那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复

那么是否可以将这两个函数组合起来，自动依次调用呢

这个过程就是对函数的组合，我们称之为 组合函数（Compose Function）。

```javascript
function double(num) {
  return num * 2
}

function square(num) {
  return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

// 实现最简单的组合函数
function composeFn(m, n) {
  return function(count) {
    return n(m(count))
  }
}

var newFn = composeFn(double, square)
console.log(newFn(10))


```



## 面向对象

**万物皆对象。**

面相对象的三大特性

**封装、继承、多态**

封装：```我们前面将属性和方法封装到一个类中，可以称之为封装的过程```

继承：```继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）；```

多态：```不同的对象在执行时表现出不同的形态```

### 创建对象的方式

#### 字面量的方式

```javascript
var info = {
  name: "kobe",
  age: 40,
  height: 1.98,
  eating: function() {
    console.log(this.name + "在吃东西~")
  }
}
```

#### new Object()创建

```javascript
var obj = new Object()
obj.name = "why"
obj.age = 18
obj.height = 1.88
obj.running = function() {
  console.log(this.name + "在跑步~")
}
```



### Object.defineProperty

属性描述符

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此 对象。

可接收三个参数

1.obj要定义属性的对象

2.prop要定义或修改的属性的名称或 Symbol

3.descriptor要定义或修改的属性描述符

```javascript
var obj = {
  name: "why",
  age: 18
}

// 属性描述符是一个对象
Object.defineProperty(obj, "height", {
  // 很多的配置
  value: 1.88
})

console.log(obj)
console.log(obj.height)
```

数据属性描述符

```javascript
Object.defineProperty(obj, "address", {
    // 很多配置
    value: "北京市", // 默认值undefined
    //   该特殊不可删除/也不可以重新定义属性描述符
    configurable: false, // 默认值false
    // 该特殊是配置对应的属性(address)是否是可以枚举 遍历
    enumerable: true, // 默认值false
    // 该特性是属性是否是可以赋值(写入值)
    writable: false, // 默认值false
});
```

```javascript
// 存取属性描述符
// 1.隐藏某一个私有属性被希望直接被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时, 也会使用存储属性描述符
Object.defineProperty(obj, "address", {
  enumerable: true,
  configurable: true,
  get: function() {
    foo()
    return this._address
  },
  set: function(value) {
    bar()
    this._address = value
  }
})

console.log(obj.address)

obj.address = "上海市"
console.log(obj.address)

function foo() {
  console.log("获取了一次address的值")
}

function bar() {
  console.log("设置了addres的值")
}
```

定义多个属性描述符

```javascript
var obj = {
  // 私有属性(js里面是没有严格意义的私有属性)
  _age: 18,
  _eating: function() {},
  set age(value) {
    this._age = value
  },
  get age() {
    return this._age
  }
}
Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "why"
  },
  age: {
    configurable: true,
    enumerable: true,
    get: function() {
      return this._age
    },
    set: function(value) {
      this._age = value
    }
  }
})
```

### 创建对象的方案

#### 字面量的方式

```javascript
var p1 = {
  name: "张三",
  age: 18,
  height: 1.88,
  address: "广州市",
  eating: function() {
    console.log(this.name + "在吃东西~")
  },
  running: function() {
    console.log(this.name + "在跑步~")
  }
}

var p2 = {
  name: "李四",
  age: 20,
  height: 1.98,
  address: "北京市",
  eating: function() {
    console.log(this.name + "在吃东西~")
  },
  running: function() {
    console.log(this.name + "在跑步~")
  }
}

var p3 = {
  name: "王五",
  age: 30,
  height: 1.78,
  address: "上海市",
  eating: function() {
    console.log(this.name + "在吃东西~")
  },
  running: function() {
    console.log(this.name + "在跑步~")
  }
}


```

#### 工厂模式的方式

```javascript
// 工厂模式: 工厂函数
function createPerson(name, age, height, address) {
  var p = {}
  p.name = name
  p.age = age
  p.height = height;
  p.address = address

  p.eating = function() {
    console.log(this.name + "在吃东西~")
  }

  p.running = function() {
    console.log(this.name + "在跑步~")
  }

  return p
}

var p1 = createPerson("张三", 18, 1.88, "广州市")
var p2 = createPerson("李四", 20, 1.98, "上海市")
var p3 = createPerson("王五", 30, 1.78, "北京市")

// 工厂模式的缺点(获取不到对象最真实的类型，都是对象类型)
console.log(p1, p2, p3)


```

#### 构造函数的方式

##### 概念

构造函数也是一个普通的函数，从表现形式来说，和千千万万个普通的函数没有任何区别；

那么如果这么一个普通的函数被使用new操作符来调用了，那么这个函数就称之为是一个构造函数

```javascript
function foo() {
    console.log("foo~, 函数体代码");
}

// foo就是一个普通的函数
// foo()

// 换一种方式来调用foo函数: 通过new关键字去调用一个函数, 那么这个函数就是一个构造函数了
var f1 = new foo();
console.log(f1);
```

##### new操作符的作用

1.在内存中创建一个新的对象（空对象）

2.这个对象内部的__proto__属性会被赋值为该构造函数的prototype属性

3.. 构造函数内部的this，会指向创建出来的新对象

4.执行函数的内部代码（函数体代码）

5.如果构造函数没有返回非空对象，则返回创建出来的新对象

##### 创建对象方案

```javascript
// 规范: 构造函数的首字母一般是大写
function Person(name, age, height, address) {
  this.name = name
  this.age = age
  this.height = height
  this.address = address

  this.eating = function() {
    console.log(this.name + "在吃东西~")
  }

  this.running = function() {
    console.log(this.name + "在跑步")
  }
}


var p1 = new Person("张三", 18, 1.88, "广州市")
var p2 = new Person("李四", 20, 1.98, "北京市")

console.log(p1)
console.log(p2)
p1.eating()
p2.eating()

```

##### 构造函数的缺点

它在于我们需要为每个对象的函数去创建一个函数对象实例

#### 原型

##### 对象的原型

每个对象中都有一个 [[prototype]],(__proto__) 这个属性可以称之为对象的原型(隐式原型).

对象中提供了一个属性, 可以让我们查看一下这个原型对象

**方式一:**

```console.log(obj.__proto__); // {}```

**方式二:**

```console.log(Object.getPrototypeOf(obj));```

**原型有什么用?**

当我们从一个对象中获取某一个属性时, 它会触发 [[get]] 操作

1. 在当前对象中去查找对应的属性, 如果找到就直接使用
2. 如果没有找到, 那么会沿着它的原型去查找 [[prototype]]

##### 函数的原型

函数也是一个对象.

函数作为对象来说, 它也是有[[prototype]],__proto__ 隐式原型

函数它因为是一个函数, 所以它还会多出来一个显示原型属性: prototype.

**我们通过foo构造函数创建出来的所有对象的[[prototype]]属性都指向foo.prototype如下代码**

```javascript
function foo() {}
var f1 = new foo();
console.log(f1.__proto__ === foo.prototype);//true
```

```javascript
function Person() {}
var p1 = new Person();
var p2 = new Person();

p1.name = "why";
p1.__proto__.name = "kobe";
Person.prototype.name = "james";
p2.__proto__.name = "curry";

console.log(p1.name); //why,先在自己里面找，找到了why。假如自己没有，那么就会去原型_proto_中找，找到了就是kobe，再假如自己的原型_proto_中没有，那么就是构造函数中的prototype中找，如果没有就返回undefined。
p1.__proto__.name = "kobe";
Person.prototype.name = "james";
p2.__proto__.name = "curry";
最终会打印curry。因为p1和p2的原型__proto__都等于函数person的prototype
```



**创建对象的内存表现**

![](/2.png)

constructor**属性**

默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象

[Function: foo]

```javascript
// 真实开发中我们可以通过Object.defineProperty方式添加constructor
Object.defineProperty(foo.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: foo,
});
```

```console.log(Object.getOwnPropertyDescriptors(foo.prototype));//打印到constructor对象```

#### 原型链

##### 概念

从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上面获取，这个链条就叫原型链;

顶层原型指向null

原型链最顶层的原型对象就是Object的原型对象(自带)

### 继承

#### 原型链继承

先看代码

```javascript
//父类
function Person() {
  this.name = "why"
  this.friends = []
}
Person.prototype.eating = function() {
  console.log(this.name + " eating~")
}
//子类
function Student() {
  this.sno = 111
}

var p = new Person()    //指向person
Student.prototype = p

Student.prototype.studying = function() {
  console.log(this.name + " studying~")
}
var stu = new Student()
console.log(stu.name)
stu.eating()
```

看图



![](/2-2.png)

原型链继承的弊端

1.打印new出来的对象，只能看到自己的属性和构造函数的属性，看不到原型链上的属性

```javascript
直接打印stu对象 console.log(stu)
打印console.log(stu.name)才可以打印
```

2.这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题

```javascript
var stu1 = new Student();
var stu2 = new Student();

// 直接修改对象上的属性, 是给本对象添加了一个新属性
stu1.name = "kobe";
console.log(stu2.name);

// 获取引用, 修改引用中的值, 会相互影响  因为对象获取某个属性的时候会直接触发get，找不到会一直往原型链找，找到就push.导致stu2.friends获取的时候就获取到了上面push的值
stu1.friends.push("kobe");

console.log(stu1.friends);
console.log(stu2.friends);
```

3.不能给Person传递参数，因为这个对象是一次性创建的（没办法定制化）

```javascript
在前面实现类的过程中都没有传递参数
var stu3 = new Student("lilei", 112);
```



#### 构造函数继承

为了解决原型链继承的弊端。

借用继承的做法非常简单：**在子类型构造函数的内部调用父类型构造函数**。

```javascript
// 父类: 公共属性和方法
function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  this.sno = 111  //自己的
}
```

完整代码

```javascript
// 父类: 公共属性和方法
function Person(name, age, friends) {
  // this = stu
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.eating = function() {
  console.log(this.name + " eating~")
}

// 子类: 特有属性和方法
function Student(name, age, friends, sno) {
  Person.call(this, name, age, friends)
  // this.name = name
  // this.age = age
  // this.friends = friends
  this.sno = 111
}
var p = new Person()
Student.prototype = p
Student.prototype.studying = function() {
  console.log(this.name + " studying~")
}
var stu1 = new Student("why", 18, ["lilei"], 111)
var stu2 = new Student("kobe", 30, ["james"], 112)
```

借用构造函数的弊端

1.第一个弊端: Person函数至少被调用了两次

```javascript
Person.call(this, name, age, friends)
var p = new Person()
```

2.第二个弊端: stu的原型对象上会多出一些属性, 但是这些属性是没有存在的必要

![](/2-3.png)



#### 原型式继承

1.

 ```javascript
var obj = {
  name: "why",
  age: 18
}
function createObject1(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}
console.log(info)
console.log(info.__proto__)
 ```

2.

```javascript
var obj = {
  name: "why",
  age: 18
}
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o
  var newObj = new Fn()
  return newObj
}
console.log(info)
console.log(info.__proto__)
```

3.

```javascript
var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj)
console.log(info)
console.log(info.__proto__)
```



#### 组合继承

不常用

#### 寄生式继承

```javascript
var personObj = {
  running: function() {
    console.log("running")
  }
}

function createStudent(name) {
  var stu = Object.create(personObj)
  stu.name = name
  stu.studying = function() {
    console.log("studying~")
  }
  return stu
}

var stuObj = createStudent("why")
var stuObj1 = createStudent("kobe")
var stuObj2 = createStudent("james")


```



#### 寄生组合式继承

```javascript
function createObject(o) {
  function Fn() {}
  Fn.prototype = o
  return new Fn()
}

function inheritPrototype(SubType, SuperType) {
  SubType.prototype = Objec.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType
  })
}

function Person(name, age, friends) {
  this.name = name
  this.age = age
  this.friends = friends
}

Person.prototype.running = function() {
  console.log("running~")
}

Person.prototype.eating = function() {
  console.log("eating~")
}


function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score = score
}

inheritPrototype(Student, Person)

Student.prototype.studying = function() {
  console.log("studying~")
}

var stu = new Student("why", 18, ["kobe"], 111, 100)
console.log(stu)
stu.studying()
stu.running()
stu.eating()

console.log(stu.constructor.name)


```

#### 原型继承关系

![](/2-4.png)

### 对象的方法补充

#### hasOwnProperty

对象是否有某一个属于自己的属性（检测不到原型上的属性）

```javascript
var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true
  }
})
console.log(info.hasOwnProperty("address")); //true
console.log(info.hasOwnProperty("name"));//false
```

#### in 操作符

不管在当前对象还是原型中返回的都是true

```javascript
var obj = {
  name: "why",
  age: 18
}

var info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true
  }
})
console.log("address" in info);
console.log("name" in info);
```

#### instanceof

用于检测构造函数的pototype，是否出现在某个实例对象的原型链上

#### isPrototypeOf

用于检测某个对象，是否出现在某个实例对象的原型链上



## ES6+

### class

#### class定义类的方式

**类的声明**

```javascript
class Person {

}
```

#### 类和构造函数的异同

它和我们的构造函数的特性其实是一致的。

```javascript
// 研究一下类的特性
console.log(Person.prototype)
console.log(Person.prototype.__proto__)
console.log(Person.prototype.constructor)
console.log(typeof Person) // function

var p = new Person()
console.log(p.__proto__ === Person.prototype) // true
```



#### **class的构造方法**

```javascript
class Person {
    // 类的构造方法
    // 注意: 一个类只能有一个构造函数
    // 1.在内存中创建一个对象 moni = {}
    // 2.将类的原型prototype赋值给创建出来的对象 moni.__proto__ = Person.prototype
    // 3.将对象赋值给函数的this: new绑定 this = moni
    // 4.执行函数体中的代码
    // 5.自动返回创建出来的对象
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var p1 = new Person("why", 18);
var p2 = new Person("kobe", 30);
console.log(p1, p2);
```

#### class中的方法定义

```javascript
var names = ["abc", "cba", "nba"]

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this._address = "广州市"
  }

  // 普通的实例方法
  // 创建出来的对象进行访问
  // var p = new Person()
  // p.eating()
  eating() {
    console.log(this.name + " eating~")
  }

  running() {
    console.log(this.name + " running~")
  }

  // 类的访问器方法
  get address() {
    console.log("拦截访问操作")
    return this._address
  }

  set address(newAddress) {
    console.log("拦截设置操作")
    this._address = newAddress
  }

  // 类的静态方法(类方法)静态方法通常用于定义直接使用类来执行的方法，不需要有类的实例，使用static关键字来定义
  // Person.createPerson()
  static randomPerson() {
    var nameIndex = Math.floor(Math.random() * names.length)
    var name = names[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}

var p = new Person("why", 18)
p.eating()
p.running()

console.log(p.address)
p.address = "北京市"
console.log(p.address)

// console.log(Object.getOwnPropertyDescriptors(Person.prototype))

for (var i = 0; i < 50; i++) {
  console.log(Person.randomPerson())
}

```

#### 类的继承

##### extends

```javascript
class Person {

}
//Student称之为子类(派生类)
class Student extends Person {}
```

##### super

```javascript
// Student称之为子类(派生类)
class Student extends Person {
  // JS引擎在解析子类的时候就有要求, 如果我们有实现继承
  // 那么子类的构造方法中, 在使用this之前
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }

  studying() {
    console.log(this.name + " studying~")
  }

  // 类对父类的方法的重写
  running() {
    console.log("student " + this.name + " running")
  }

  // 重写personMethod方法
  personMethod() {
    // 复用父类中的处理逻辑
    super.personMethod()

    console.log("处理逻辑4")
    console.log("处理逻辑5")
    console.log("处理逻辑6")
  }

  // 重写静态方法
  static staticMethod() {
    super.staticMethod()
    console.log("StudentStaticMethod")
  }
}
```

#### 多态

不同的数据类型进行同一个操作，表现出不同的行为，就是多态的体现。

### ES6知识点

#### 解构

##### 数组的结构

对数组的解构

```javascript
var names = ["abc", "cba", "nba"];
var [name1, name2, name3] = names;
console.log(name1, name2, name3); //abc cba nba
```

结构后面的元素

```javascript
var names = ["abc", "cba", "nba"];
var [, , name3] = names;
console.log(name3);
```

解构出第一个元素，后面的元素放到一个新的数组中

```javascript
var names = ["abc", "cba", "nba"];
var [name1, ...name3] = names;
console.log(name1, name3);//abc (2) ['cba', 'nba']
```

##### 对象的结构

```javascript
var obj = {
    name: "why",
    age: 18,
    height: 1.88,
};

// 对象的解构: {}
var { name, age, height } = obj;
console.log(name, age, height); //why 18 1.88



// 单独结构某个
var { age } = obj;
console.log(age);//18

//重新起名
var { name: newName } = obj;
console.log(newName); why
```



## Proxy

### 监听对象的操作

#### Object.defineProperty

```javascript
const obj = {
  name: "why",
  age: 18
}

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function() {
      console.log(`监听到obj对象的${key}属性被访问了`)
      return value
    },
    set: function(newValue) {
      console.log(`监听到obj对象的${key}属性被设置值`)
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 30

console.log(obj.name)
console.log(obj.age)
obj.height = 1.88 //不会触发，因为是新设置的
```

Object.defineProperty监听对象的缺点：

- Object.defineProperty设计的初衷，不是为了去监听截止一个对象中 所有的属性的。
- 其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么 Object.defineProperty是无能为力的。

#### Proxy

```javascript
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function(target, key) {
    console.log(`监听到对象的${key}属性被访问了`, target)
    return target[key]
  },

  // 设置值时的捕获器
  set: function(target, key, newValue) {
    console.log(`监听到对象的${key}属性被设置值`, target)
    target[key] = newValue
  }
})

console.log(objProxy.name)
console.log(objProxy.age)

objProxy.name = "kobe"
objProxy.age = 30

console.log(obj.name)
console.log(obj.age)

```

#### Reflect(反射)

作用

- 它主要提供了很多操作JavaScript对象的方法，有点像Object中操作对象的方法
- 比如Reflect.getPrototypeOf(target)类似于 Object.getPrototypeOf()；
- 比如Reflect.defineProperty(target, propertyKey, attributes)类似于Object.defineProperty() 

如果我们有Object可以做这些操作，那么为什么还需要有Reflect这样的新增对象呢？ 

这是因为在早期的ECMA规范中没有考虑到这种对 对象本身 的操作如何设计会更加规范，所以将这些API放到了Object上面；

 但是Object作为一个构造函数，这些操作实际上放到它身上并不合适； 

另外还包含一些类似于 in、delete操作符，让JS看起来是会有一些奇怪的； 

所以在ES6中新增了Reflect，让我们这些操作都集中到了Reflect对象上；

```javascript
const obj = {
  name: "why",
  age: 18
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    console.log("get---------")
    return Reflect.get(target, key)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set---------")
    target[key] = newValue

    const result = Reflect.set(target, key, newValue)
    if (result) {
    } else {
    }
  }
})

objProxy.name = "kobe"
console.log(objProxy.name)
```

#### receiver参数的作用

我们发现在使用getter、setter的时候有一个receiver的参数，它的作用是什么呢？ 

如果我们的源对象（obj）有setter、getter的访问器属性，那么可以通过receiver来改变里面的this

```javascript
const obj = {
  _name: "why",
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  }
}

const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    // receiver是创建出来的代理对象
    console.log("get方法被访问--------", key, receiver)
    console.log(receiver === objProxy)
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    console.log("set方法被访问--------", key)
    Reflect.set(target, key, newValue, receiver)
  }
})

// console.log(objProxy.name)
objProxy.name = "kobe"

```

```javascript
function Student(name, age) {
  this.name = name
  this.age = age
}

function Teacher() {

}

// const stu = new Student("why", 18)
// console.log(stu)
// console.log(stu.__proto__ === Student.prototype)

// 执行Student函数中的内容, 但是创建出来对象是Teacher对象
const teacher = Reflect.construct(Student, ["why", 18], Teacher)
console.log(teacher)
console.log(teacher.__proto__ === Teacher.prototype)


```



## 响应式原理实现

我们先来看一下响应式意味着什么？我们来看一段代码

```javascript
const obj = {
  name: "why",
  age: 18
}

const newName = obj.name
console.log("你好啊, 李银河")
console.log("Hello World")
console.log(obj.name) // 100行

obj.name = "kobe"
```

当name发生改变的时候这段代码可以自动重新执行；这样一种可以自动响应数据变量的代码机制，我们就称之为是响应式的

**响应式函数的封装**

```javascript
// 封装一个响应式的函数
let reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
  name: "why",
  age: 18
}

watchFn(function() {
  const newName = obj.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(obj.name) // 100行
})

watchFn(function() {
  console.log(obj.name, "demo function -------")
})

function bar() {
  console.log("普通的其他函数")
  console.log("这个函数不需要有任何响应式")
}

obj.name = "kobe"
reactiveFns.forEach(fn => {
  fn()
})

```

目前我们收集的依赖是放到一个数组中来保存的，但是这里会存在数据管理的问题

- 我们在实际开发中需要监听很多对象的响应式
- 这些对象需要监听的不只是一个属性，它们很多属性的变化，都会有对应的响应式函数；
- 所以我们要设计一个类，这个类用于管理某一个对象的某一个属性的所有响应式函数，看下面依赖收集类的封装

**依赖收集类的封装**

```javascript
class Depend {
    constructor() {
        this.reactiveFns = [];
    }

    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn);
    }

    notify() {
        this.reactiveFns.forEach((fn) => {
            fn();
        });
    }
}

// 封装一个响应式的函数
const depend = new Depend();
function watchFn(fn) {
    depend.addDepend(fn);
}

// 对象的响应式
const obj = {
    name: "why", // depend对象
    age: 18, // depend对象
};

watchFn(function () {
    const newName = obj.name;
    console.log("你好啊, 李银河");
    console.log("Hello World");
    console.log(obj.name); // 100行
});

watchFn(function () {
    console.log(obj.name, "demo function -------");
});

obj.name = "kobe";
depend.notify();

```

**自动监听对象的变化**

```javascript
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})

watchFn(function() {
  const newName = objProxy.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
})

watchFn(function() {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

objProxy.name = "kobe"
objProxy.name = "james"
objProxy.name = "curry"

objProxy.age = 100

```

我们目前是创建了一个Depend对象，用来管理对于name变化需要监听的响应函数

- 但是实际开发中我们会有不同的对象，另外会有不同的属性需要管理,看下面代码

**依赖收集的管理**

```javascript
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

// 封装一个响应式的函数
const depend = new Depend()
function watchFn(fn) {
  depend.addDepend(fn)
}

// 封装一个获取depend函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取depend对象
  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

// 对象的响应式
const obj = {
  name: "why", // depend对象
  age: 18 // depend对象
}

// 监听对象的属性变量: Proxy(vue3)/Object.defineProperty(vue2)
const objProxy = new Proxy(obj, {
  get: function(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    // depend.notify()
    const depend = getDepend(target, key)
    depend.notify()
  }
})

watchFn(function() {
  const newName = objProxy.name
  console.log("你好啊, 李银河")
  console.log("Hello World")
  console.log(objProxy.name) // 100行
})

watchFn(function() {
  console.log(objProxy.name, "demo function -------")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----1")
})

watchFn(function() {
  console.log(objProxy.age, "age 发生变化是需要执行的----2")
})

objProxy.name = "kobe"
objProxy.name = "james"
objProxy.name = "curry"

objProxy.age = 100


const info = {
  name: "kobe",
  address: "广州市"
}

watchFn(function() {
  console.log(info.address, "监听address变化+++++++++1")
})

watchFn(function() {
  console.log(info.address, "监听address变化+++++++++2")
})

// obj对象
// name: depend
// age: depend
// const objMap = new Map()
// objMap.set("name", "nameDepend")
// objMap.set("age", "ageDepend")

// // info对象
// // address: depend
// // name: depend
// const infoMap = new Map()
// infoMap.set("address", "addressDepend")


// const targetMap = new WeakMap()
// targetMap.set(obj, objMap)
// targetMap.set(info, infoMap)

// // obj.name
// const depend = targetMap.get(obj).get("name")
// depend.notify()

```



## Promise

### 三个状态

下面的Promise使用过程，我们可以将它划分成三个状态：

- 待定（pending）: 初始状态，既没有被兑现，也没有被拒绝；
- 已兑现（fulfilled）: 意味着操作成功完成；执行了resolve时，处于该状态；
- 已拒绝（rejected）: 意味着操作失败；执行了reject时，处于该状态；

注意: Promise状态一旦确定下来, 那么就是不可更改的(锁定)

```javascript
const promise = new Promise((resolve, reject) => {
  // pending状态: 待定/悬而未决的
  resolve()// 处于fulfilled状态(已敲定/兑现状态)
  reject() // 处于rejected状态(已拒绝状态)
})

promise.then(() => {

}).catch(() => {

})
```

### resolve(参数)

1.普通的值或者对象

```javascript
const newPromise = new Promise((resolve, reject) => {
    resolve("aaaaaa");
});
newPromise.then((res) => {
    console.log(res);//aaaaa
});
```

2.传入一个Promise,那么当前的Promise的状态会由传入的Promise来决定

```javascript
const newPromise = new Promise((resolve, reject) => {
    resolve("aaaaaa");
    // reject("err message");
});

new Promise((resolve, reject) => {
    // pending -> fulfilled
    resolve(newPromise); 
}).then(
    (res) => {
        console.log("res:", res); //aaaaaa
    },
    (err) => {
        console.log("err:", err); //err message
    }
);
```

3.传入一个对象,并且这个对象有实现then方法

```javascript
new Promise((resolve, reject) => {
    // pending -> fulfilled
    const obj = {
        then: function (resolve, reject) {
            // resolve("resolve message")
            reject("reject message");
        },
    };
    resolve(obj);
}).then(
    (res) => {
        console.log("res:", res);
    },
    (err) => {
        console.log("err:", err);
    }
);
```

### then

#### then方法接受两个参数:

1.fulfilled的回调函数：当状态变成fulfilled时会回调的函数

2.reject的回调函数：当状态变成reject时会回调的函数

#### 同一个Promise可以被多次调用then方法

当我们的resolve方法被回调时, 所有的then方法传入的回调函数都会被调用

```javascript
promise.then(res => {
  console.log("res1:", res)
})

promise.then(res => {
  console.log("res2:", res)
})

promise.then(res => {
  console.log("res3:", res)
})
```

**then方法传入的 "回调函数: 可以有返回值**

then方法本身也是有返回值的, 它的返回值是Promise

1.如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 那么这个普通的值被作为一个新的Promise的resolve值

```javascript
promise.then(res => {
  return "aaaaaa"
}).then(res => {
  console.log("res:", res)
  return "bbbbbb"
})
```

2.如果我们返回的是一个Promise

```javascript
promise.then(res => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(111111)
    }, 3000)
  })
}).then(res => {
  console.log("res:", res)
})
```

3.返回的是一个对象

```javascript
promise
    .then((res) => {
        return {
            then: function (resolve, reject) {
                resolve(222222);
            },
        };
    })
    .then((res) => {
        console.log("res:", res);
    });
```



## 迭代器-生成器

## async-await

## 事件循环-队列

## 错误处理方案

## 包管理工具

**为什么需要包管理工具**？

代码可以分享给大家使用

**npm管理的包可以在哪里查看、搜索呢？**

https://www.npmjs.com/

**npm管理的包存放在哪里呢？**

我们发布自己的包其实是发布到registry上面的；

当我们安装一个包时其实是从registry上面下载的包

**手动从零创建项目**

```npm init –y```

**常见的属性**

必须填写的属性：name、version

name是项目的名称

version是当前项目的版本号

description是描述信息，很多时候是作为项目的基本描述；

author是作者相关信息（发布时用到）

license是开源协议（发布时用到）

**private属性：**

private属性记录当前的项目是否是私有的

当值为true时，npm是不能发布它的，这是防止私有项目或模块发布出去的方式

**main属性**

设置程序的入口。

**scripts属性**

scripts属性用于配置一些脚本命令，以键值对的形式存在；

配置后我们可以通过 npm run 命令的key来执行这个命令；

**dependencies属性**

dependencies属性是指定无论开发环境还是生成环境都需要依赖的包；

通常是我们项目实际开发用到的一些库模块vue、vuex、vue-router、react、react-dom、axios等等；

与之对应的是devDependencies

**devDependencies属性**

一些包在生成环境是不需要的，比如webpack、babel等

这个时候我们会通过 npm install webpack --save-dev，将它安装到devDependencies属性中

**peerDependencies属性**

还有一种项目依赖关系是对等依赖，也就是你依赖的一个包，它必须是以另外一个宿主包为前提的

比如element-plus是依赖于vue3的，ant design是依赖于react、react-dom

**依赖的版本管理**

我们会发现安装的依赖版本出现：^2.0.3或~2.0.3，这是什么意思呢？

semver版本规范是X.Y.Z

X主版本号（major）：当你做了不兼容的 API 修改（可能不兼容之前的版本）；

Y次版本号（minor）：当你做了向下兼容的功能性新增（新功能增加，但是兼容之前的版本）；

Z修订号（patch）：当你做了向下兼容的问题修正（没有新功能，修复了之前版本的bug）；

我们这里解释一下 ^和~的区别：

^x.y.z：表示x是保持不变的，y和z永远安装最新的版本；

~x.y.z：表示x和y保持不变的，z永远安装最新的版本

**engines属性**

engines属性用于指定Node和NPM的版本号；

在安装的过程中，会先检查对应的引擎版本，如果不符合就会报错

在安装的过程中，会先检查对应的引擎版本，如果不符合就会报错

**browserslist属性**

用于配置打包后的JavaScript浏览器的兼容情况，参考

否则我们需要手动的添加polyfills来让支持某些语法

也就是说它是为webpack等打包工具服务的一个属性（这里不是详细讲解webpack等工具的工作原理，所以不 再给出详情）

**npm install 命令**

安装npm包分两种情况：

全局安装（global install）： ```npm install webpack -g```;

项目（局部）安装（local install）： ```npm install webpack```

局部安装分为开发时依赖和生产时依赖：

\# 安装开发和生产依赖 

```npm install axios ```

```npm i axios```

\# 开发依赖

```npm install webpack --save-dev```

```npm install webpack -D```

```npm i webpack –D```

**npm install 原理**

![](/7.png)

**原理图解析**

npm install会检测是有package-lock.json文件

**没有lock文件**

分析依赖关系，这是因为我们可能包会依赖其他的包，并且多个包之间会产生相同依赖的情况；

从registry仓库中下载压缩包（如果我们设置了镜像，那么会从镜像服务器下载压缩包）；

获取到压缩包后会对压缩包进行缓存（从npm5开始有的）；

将压缩包解压到项目的node_modules文件夹中（前面我们讲过，require的查找顺序会在该包下面查找）

**有lock文件**

检测lock中包的版本是否和package.json中一致（会按照semver版本规范检测）；

不一致，那么会重新构建依赖关系，直接会走顶层的流程；

一致的情况下，会去优先查找缓存

没有找到，会从registry仓库下载，直接走顶层流程；

查找到，会获取缓存中的压缩文件，并且将压缩文件解压到node_modules文件夹中；

**npm其他命令**

卸载某个依赖包：

```npm uninstall package ```

```npm uninstall package --save-dev ```

```npm uninstall package -D```

强制重新build

```javascript
npm rebuild
```

清除缓存

```javascript
npm cache clean
```

![](/8.png)

## 浏览器存储

### JSON序列化方法

在ES5中引用了JSON全局对象，该对象有两个常用的方法：

 ```stringify```方法：将JavaScript类型转成对应的JSON字符串； 

```parse```方法：解析JSON字符串，转回对应的JavaScript类型；

### localStorage和sessionStorage的区别

1.关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除

2.在页面内实现跳转，localStorage会保留，sessionStorage也会保留；

3.在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留；

### 封装Storage

```javascript
class HYCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localStorage: sessionStorage
  }

  setItem(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getItem(key) {
    let value = this.storage.getItem(key)
    if (value) {
      value = JSON.parse(value)
      return value
    } 
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  key(index) {
    return this.storage.key(index)
  }

  length() {
    return this.storage.length
  }
}

const localCache = new HYCache()
const sessionCache = new HYCache(false)

export {
  localCache,
  sessionCache
}

```

### Cookie

Cookie（复数形态Cookies），又称为“小甜饼”。类型为“小型文本文件，某些网站为了辨别用户身份而存储在用户本地终端 （Client Side）上的数据。

Cookie总是保存在客户端中，按在客户端中的存储位置，Cookie可以分为内存Cookie和硬盘Cookie。

内存Cookie由浏览器维护，保存在内存中，浏览器关闭时Cookie就会消失，其存在时间是短暂的

硬盘Cookie保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理；

如果判断一个cookie是内存cookie还是硬盘cookie呢？

没有设置过期时间，默认情况下cookie是内存cookie，在关闭浏览器时会自动删除

有设置过期时间，并且过期时间不为0或者负数的cookie，是硬盘cookie，需要手动或者到期时，才会删除；

document.cookie

## 惰性函数

## 递归
