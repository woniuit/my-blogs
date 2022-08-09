---
sidebar: auto
---
# TS

## 编译环境安装

```js
npm install typescript -g
```

查看版本

```js
tsc --version
```

## 运行ts-node

安装

```javascript
npm install ts-node -g
```

```javascript
npm install tslib @types/node -g
```

运行

```javascript
ts-node 文件名
```

## 变量声明

**var/let/const 标识符: 数据类型 = 赋值**

比如

```tsx
let age: number = 18
```

## 变量的类型推断

```tsx
let message="hello"
message=123 //会报错
//因为上面推断是字符串类型
```

## 数据类型

### number类型

数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型（int）和浮点型 （double），统一为number类型。

```tsx
let num: number = 123
num = 222
```

### boolean类型

```tsx
let flag: boolean = true
flag = 20 > 30
```

### string类型

```tsx
let message1: string = 'hello world'
```

同时也支持ES6的模板字符串来拼接变量和字符串。

### Array类型

```tsx
const names1: Array<string> = ['abc','cba']
const names2: string[] = ['abc','cba'] // 推荐
```

### object类型

object 类型是：TypeScript 2.2 引入的新类型，它用于表示非原始类型。Object 类的所有实例都继承了 Object 接口中的所有属性。

```tsx
interface ObjectConstructor {
  create(o: object | null): any;
  // ...
}

const proto = {};

Object.create(proto);     // OK
Object.create(null);      // OK
Object.create(undefined); // Error
Object.create(1337);      // Error
Object.create(true);      // Error
Object.create("oops");    // Error
```

### Object 类型

Object 类型：它是所有 Object 类的实例的类型，它由以下两个接口来定义：

- Object 接口定义了 Object.prototype 原型对象上的属性；

```js
interface Object {
  constructor: Function;
  toString(): string;
  toLocaleString(): string;
  valueOf(): Object;
  hasOwnProperty(v: PropertyKey): boolean;
  isPrototypeOf(v: Object): boolean;
  propertyIsEnumerable(v: PropertyKey): boolean;
}
```

- ObjectConstructor 接口定义了 Object 类的属性。

```js
interface ObjectConstructor {
  /** Invocation via `new` */
  new(value?: any): Object;
  /** Invocation via function calls */
  (value?: any): any;
  readonly prototype: Object;
  getPrototypeOf(o: any): any;
  // ···
}

declare var Object: ObjectConstructor;
```

### {} 类型

{} 类型描述了一个没有成员的对象。当你试图访问这样一个对象的任意属性时，TypeScript 会产生一个编译时错误。

```js
// Type {}
const obj = {};

// Error: Property 'prop' does not exist on type '{}'.
obj.prop = "semlinker";
```

但是，你仍然可以使用在 Object 类型上定义的所有属性和方法，这些属性和方法可通过 JavaScript 的原型链隐式地使用：

```js
// Type {}
const obj = {};

// "[object Object]"
obj.toString();
```



### undefined 和 null 类型

```tsx
let n1: null = null
let n2: undefined = undefined
```

### any类型

在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型。

- 我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法
- 我们给一个any类型的变量赋值任何的值，比如数字、字符串的值

### unknown类型

它用于描述类型不确定的变量

unknown类型只能赋值给any和unknown类型

```tsx
function foo() {
    return "abc";
}

function bar() {
    return 123;
}

// unknown类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型

let flag = true;
let result: unknown; // 最好不要使用any
if (flag) {
    result = foo();
} else {
    result = bar();
}
let message: string = result; //报错
let num: number = result; //报错

console.log(result);
```

### void类型

指定一个函数是没有返回值的，那么它的返回值就是void类型

```tsx
function sum(num1: number, num2: number) {
    console.log(num1 + num2);
}

sum(20, 30);
```

### never类型

表示永远不会发生值的类型

- 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗
- 不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型

```tsx
 function bar(): never {
   throw new Error()
 }
```

### tuple元组类型

- 元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型
- 数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组 中）

```tsx
const info: [string, number, number] = ["why", 18, 1.88]
const name = info[0]
```

### 函数的参数类型

函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型

### 参数的类型注解

声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型

```tsx
function sum(num1: number, num2: number) {
    return num1 + num2;
}

sum(123, 321);
```

### 函数的返回值类型

在开发中,通常情况下可以不写返回值的类型(自动推导)

### 对象类型

如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢

```tsx
// Point: x/y -> 对象类型
// {x: number, y: number}
function printPoint(point: {x: number, y: number}) {
  console.log(point.x);
  console.log(point.y)
}

printPoint({x: 123, y: 321})
```

### 可选类型

```ts
// Point: x/y/z -> 对象类型
// {x: number, y: number, z?: number}
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}

printPoint({x: 123, y: 321})
printPoint({x: 123, y: 321, z: 111})
```

### 联合类型

- 联合类型是由两个或者多个其他类型组成的类型
- 表示可以是这些类型中的任何一个值
- 联合类型中的每一个类型被称之为联合成员

```tsx
// number|string 联合类型
function printID(id: number | string | boolean) {
    // 使用联合类型的值时, 需要特别的小心
    // narrow: 缩小
    if (typeof id === "string") {
        // TypeScript帮助确定id一定是string类型
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printID(123);
printID("abc");
printID(true);
```

### 类型别名

```tsx
// type用于定义类型别名(type alias)
type IDType = string | number | boolean;
type PointType = {
    x: number;
    y: number;
    z?: number;
};

function printId(id: IDType) {}

function printPoint(point: PointType) {}
```

### 类型断言as

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。

类型断言有两种形式：

1.

```tsx
值 as 类型
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

2.

```tsx
<类型>值
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

### 非空类型断言

```tsx
// message? -> undefined | string
function printMessageLength(message?: string) {
  // if (message) {
  //   console.log(message.length)
  // }
  // vue3源码
  console.log(message!.length)
}

printMessageLength("aaaa")
printMessageLength("hello world")

```

### 可选链

```tsx
type Person = {
    name: string;
    friend?: {
        name: string;
        age?: number;
        girlFriend?: {
            name: string;
        };
    };
};

const info: Person = {
    name: "why",
    friend: {
        name: "kobe",
        girlFriend: {
            name: "lily",
        },
    },
};

// 另外一个文件中
console.log(info.name);
// console.log(info.friend!.name)
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name);
```

### ??和!!的作用

!!操作符： 

- 将一个其他类型转换成boolean类型； 
- 类似于Boolean(变量)的方式；

```tsx
const message = "Hello World"

// const flag = Boolean(message)
// console.log(flag)

const flag = !!message
console.log(flag)
```



??操作符

它是ES11增加的新特性

空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数， 否则返回左侧操作数

```tsx
let message: string | null = "Hello World";

const content = message ?? "你好啊, 李银河";
// const content = message ? message: "你好啊, 李银河"
console.log(content);
```

### 字面量类型

```tsx
// "Hello World"也是可以作为类型的, 叫做字面量类型
const message: "Hello World" = "Hello World";

// let num: 123 = 123
// num = 321

// 字面量类型的意义, 就是必须结合联合类型
type Alignment = "left" | "right" | "center";

let align: Alignment = "left";
align = "right";
align = "center";
```

### 类型缩小(类型守卫)

什么是类型缩小呢？ 

- 类型缩小的英文是 Type Narrowing； 
- 我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径； 
- 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小; 
- 而我们编写的 typeof padding === "number 可以称之为 类型保护（type guards）；

常见的类型保护有如下几种

- typeof
- 平等缩小（比如===、!==）
- instanceof
- in

#### typeof

```tsx
type IDType = number | string
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}
```

#### 平等缩小

```tsx
type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  switch (direction) {
    case 'left':
      console.log(direction)
      break;
    case ...
  }
}
```

#### instanceof

```tsx
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}
```

#### in

Javascript 有一个运算符，用于确定对象是否具有带名称的属性：in运算符

如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；

```tsx
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}
```

## 函数类型

### 函数的类型

1.函数作为参数时, 在参数中如何编写类型

```tsx
function foo() {}

type FooFnType = () => void
function bar(fn: FooFnType) {
  fn()
}

bar(foo)
```

2.定义常量时, 编写函数的类型

```tsx
type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (a1: number, a2: number) => {
  return a1 + a2
}
```

#### 函数类型的案例

```tsx
function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number) {
  return fn(n1, n2)
}

const result1 = calc(20, 30, function(a1, a2) {
  return a1 + a2
})
console.log(result1)

const result2 = calc(20, 30, function(a1, a2) {
  return a1 * a2
})
console.log(result2)

```



### 参数的可选类型

```tsx
// 可选类型是必须写在必选类型的后面的
// y -> undefined | number
function foo(x: number, y?: number) {

}

foo(20, 30)
foo(20)
```

### 默认参数

```tsx
// 必传参数 - 有默认值的参数 - 可选参数
function foo(y: number, x: number = 20) {
  console.log(x, y)
}

foo(30)
```

### 剩余参数

从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中

```tsx
function sum(initalNum: number, ...nums: number[]) {
  let total = initalNum
  for (const num of nums) {
    total += num
  }
  return total
}

console.log(sum(20, 30))
console.log(sum(20, 30, 40))
console.log(sum(20, 30, 40, 50))
```

### 函数重载

```tsx
/**
 * 通过联合类型有两个缺点:
 *  1.进行很多的逻辑判断(类型缩小)
 *  2.返回值的类型依然是不能确定
 */
function add(a1: number | string, a2: number | string) {
  if (typeof a1 === "number" && typeof a2 === "number") {
    return a1 + a2
  } else if (typeof a1 === "string" && typeof a2 === "string") {
    return a1 + a2
  }

  // return a1 + a2;
}

add(10, 20)
```

```tsx
// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载
function add(num1: number, num2: number): number; // 没函数体
function add(num1: string, num2: string): string;

function add(num1: any, num2: any): any {
  if (typeof num1 === 'string' && typeof num2 === 'string') {
    return num1.length + num2.length
  }
  return num1 + num2
}

const result = add(20, 30)
const result2 = add("abc", "cba")
console.log(result)
console.log(result2)

// 在函数的重载中, 实现函数是不能直接被调用的
// add({name: "why"}, {age: 18})

export {}

```



## this

### 可推导的this

```tsx
// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
  name: "why",
  eating() {
    console.log(this.name + " eating")
  }
}

info.eating()
```

### this的不明确类型

```tsx
function sayHello(){
  console.log(this.name)
}
const info={
  name:'why',
  sayHello
}
info.sayHello()
```

这段代码运行会报错的

- 这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全
- 所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的
- 但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来 调用函数

### 指定this的类型

```tsx
type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + " eating", message);
}

const info = {
  name: "why",
  eating: eating,
};

// 隐式绑定
info.eating("哈哈哈");

// 显示绑定
eating.call({name: "kobe"}, "呵呵呵")
eating.apply({name: "james"}, ["嘿嘿嘿"])
```

## 类的使用

### 类的定义

```tsx
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name + " eating")
  }
}

const p = new Person("why", 18)
console.log(p.name)
console.log(p.age)
p.eating()
```



### 类的继承

使用extends关键字来实现继承，子类中使用super来访问父类

**extends**

```tsx
class Person {
  name: string = ""
  age: number = 0

  eating() {
    console.log("eating")
  }
}
class Student extends Person {
    sno: number = 0;

    studying() {
        console.log("studying");
    }
}
const stu = new Student();
stu.name = "coderwhy";
stu.age = 10;
console.log(stu.name); //coderwhy
console.log(stu.age); //10
stu.eating(); //eating
```

**super访问父类方法**

```tsx
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    eating() {
        console.log("eating 100行");
    }
}
class Student extends Person {
    sno: number;

    constructor(name: string, age: number, sno: number) {
        // super调用父类的构造器
        super(name, age);
        this.sno = sno;
    }

    eating() {
        console.log("student eating");
        super.eating();
    }

    studying() {
        console.log("studying");
    }
}
const stu = new Student("why", 18, 111);
console.log(stu.name); why
console.log(stu.age); 18
console.log(stu.sno); 111

stu.eating(); student eating     eating 100行
```

### 类的多态

```tsx
class Animal {
    action() {
        console.log("animal action");
    }
}

class Dog extends Animal {
    action() {
        console.log("dog running!!!");
    }
}

class Fish extends Animal {
    action() {
        console.log("fish swimming");
    }
}

// class Person extends Animal {

// }

// animal: dog/fish
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
    animals.forEach((animal) => {
        animal.action();
    });
}

makeActions([new Dog(), new Fish()]);
export {};

```

### 类的成员修饰符

类的属性和方法支持三种修饰符： public、private、protected

#### public 

修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的

#### private 

修饰的是仅在同一类中可见、私有的属性或方法

```tsx
class Person {
    private name: string = "";
}

const p = new Person();
console.log(p.name) //报错  因为是私有的，只能在内部访问
```

#### protected

修饰的是仅在类自身及子类中可见、受保护的属性或方法

```tsx
class Person {
  protected name: string = "123"
}

class Student extends Person {
  getName() {
    return this.name  //通过this来访问
  }
}

const stu = new Student()
console.log(stu.getName()) //123
```



### 只读属性

**readonly**

```tsx
class Person {
  // 1.只读属性是可以在构造器中赋值, 赋值之后就不可以修改
  // 2.属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改
  readonly name: string
  age?: number
  readonly friend?: Person
  constructor(name: string, friend?: Person) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("why", new Person("kobe"))
console.log(p.name)
console.log(p.friend)

// 不可以直接修改friend
// p.friend = new Person("james")
if (p.friend) {
  p.friend.age = 30
} 

// p.name = "123"

```

### getters-setter

```tsx
class Person {
    private _name: string;
    constructor(name: string) {
        this._name = name;
    }

    // 访问器setter/getter
    // setter
    set name(newName) {
        this._name = newName;
    }
    // getter
    get name() {
        return this._name;
    }
}

const p = new Person("why");
p.name = "coderwhy";  //获取的是set name
console.log(p.name);
```

### 类的静态成员

通过关键字static来定义，可以直接通过类来访问

```tsx
class Student {
  static time: string = "20:00"

  static attendClass() {
    console.log("去学习~")
  }
}

console.log(Student.time)
Student.attendClass()
```

### 抽象类

抽象类是使用abstract声明的类

```tsx
function makeArea(shape: Shape) {
  return shape.getArea()
}


abstract class Shape {
  abstract getArea(): number
}


class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number

  constructor(r: number) {
    super()
    this.r = r
  }

  getArea() {
    return this.r * this.r * 3.14
  }
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)

console.log(makeArea(rectangle))
console.log(makeArea(circle))
// makeArea(new Shape())

// makeArea(123)
// makeArea("123")


```



### 类的类型

类本身也是可以作为一种数据类型的

```tsx
class Person {
  name: string = "123"
  eating() {

  }
}
const p1: Person = {
  name: "why",
  eating() {

  }
}
```





## 接口

### 声明

```tsx
interface Point{
   x:number
   y:number
}
```



### 可选属性

```tsx
interface IInfoType {
  readonly name: string
  age: number
  friend?: {
    name: string
  }
}
```

### 索引类型

```tsx
// 通过interface来定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue"
}


interface ILanguageYear {
  [name: string]: number
}

const languageYear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
```

### 函数类型

```ts
// type CalcFn = (n1: number, n2: number) => number
// 可调用的接口
interface CalcFn {
  (n1: number, n2: number): number
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

calc(20, 30, add)


```

### 接口的继承

```tsx
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}


interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {

  },
  flying() {
    
  }
}


```



### 交叉类型

交叉类似表示需要满足多个类型的条件

交叉类型使用 & 符号

表达的含义是number和string要同时满足

```tsx
type myType=number&string
```

```tsx
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}
type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

const obj1: MyType1 = {
  flying() {

  }
}

const obj2: MyType2 = {
  swimming() {

  },
  flying() {
    
  }
}
```

### 接口的实现

```tsx
interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

// 类实现接口
class Animal {
  
}

// 继承: 只能实现单继承
// 实现: 实现接口, 类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {
    console.log("Fish Swmming")
  }

  eating() {
    console.log("Fish Eating")
  }
}


class Person implements ISwim {
  swimming() {
    console.log("Person Swimming")
  }
}


// 编写一些公共的API: 面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

// 1.所有实现了接口的类对应的对象, 都是可以传入
swimAction(new Fish())
swimAction(new Person())


swimAction({swimming: function() {}})


```

##  枚举

枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型

枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型

```tsx
enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}


function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左")
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右")
      break;
    case Direction.TOP:
      console.log("改变角色的方向向上")
      break;
    case Direction.BOTTOM:
      console.log("改变角色的方向向下")
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)
```



## 泛型

#### 类型的参数化

在定义函数时，不决定函数的参数类型，而是让调用者以参数的形式告知，我这里的函数参数应该是什么类型

```tsx
function sum <Type>(num:Type):Type{
  return num
}
sum<number>(20)  //调用方式1：明确的传入类型
sum<{name: string}>({name: "why"}) //调用方式1：明确的传入类型
sum<any[]>(["abc"]) //调用方式1：明确的传入类型
sum('abc') //调用方式2：类型推导
```

#### 泛型接口

```tsx
interface IPerson<T1 = string, T2 = number> {
  name: T1
  age: T2
}

const p: IPerson = {
  name: "why",
  age: 18
}

```

```tsx
interface IPerson<T1, T2> {
  name: T1
  age: T2
}

const p: IPerson<string, number> = {
  name: "why",
  age: 18
}
```

#### 泛型类的使用

```tsx
class Point<T> {
    x: T;
    y: T;
    z: T;

    constructor(x: T, y: T, z: T) {
        this.x = x;
        this.y = y;
        this.z = y;
    }
}

const p1 = new Point("1.33.2", "2.22.3", "4.22.1");
const p2 = new Point<string>("1.33.2", "2.22.3", "4.22.1");
const p3: Point<string> = new Point("1.33.2", "2.22.3", "4.22.1");

const names1: string[] = ["abc", "cba", "nba"];
const names2: Array<string> = ["abc", "cba", "nba"]; // 不推荐(react jsx <>)
```

#### 类型的约束

```tsx
interface ILength {
    length: number;
}

function getLength<T extends ILength>(arg: T) {
    return arg.length;
}

getLength("abc");
getLength(["abc", "cba"]);
getLength({ length: 100 });

```

## type 和 interface的区别

1、类型别名和接口都可以用来描述对象或函数

2、类型别名和接口都支持扩展。类型别名通过 &（交叉运算符）来扩展，而接口通过 extends 的方式来扩展。

类型别名扩展

```js
type Animal = {
  name: string
}
​
type Bear = Animal & { 
  honey: boolean 
}
​
const bear: Bear = getBear() 
bear.name
bear.honey
```

接口扩展

```js
interface Animal {
  name: string
}
​
interface Bear extends Animal {
  honey: boolean
}
```

了解完 type 和 interface 的相似之处之后，接下来我们来介绍它们之间的区别。

1、类型别名可以为基本类型、联合类型或元组类型定义别名，而接口不行

```tsx
type MyNumber = number;
type StringOrNumber = string | number;
type Point = [number, number];
```

2、同名接口会自动合并，而类型别名不会



