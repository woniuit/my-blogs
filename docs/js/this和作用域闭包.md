---
sidebar: auto
---
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

1

```js
var n = 100

function foo() {
  n = 200
}

foo()

console.log(n) //200
```

2

```js
function foo() {
    console.log(n);
    var n = 200;
    console.log(n);
}

var n = 100;
foo();
undefined
200
```

3

```js
```



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