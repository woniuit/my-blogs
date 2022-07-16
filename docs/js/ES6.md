---

sidebar: auto

---

## let/const

- let、const不允许重复声明变量
- let、const没有进行作用域提升
- let、const是不会给window上添加任何属性的

## 模板字符串

```js
`my name is ${name}, age is ${age}, height is ${height}`
```

## 解构

**数组**

```js
var names = ["abc", "cba", "nba"]
// var item1 = names[0]
// var item2 = names[1]
// var item3 = names[2]

// 对数组的解构: []
var [item1, item2, item3] = names
console.log(item1, item2, item3)

// 解构后面的元素
var [, , itemz] = names
console.log(itemz)

// 解构出一个元素,后面的元素放到一个新数组中
var [itemx, ...newNames] = names
console.log(itemx, newNames)

// 解构的默认值
var [itema, itemb, itemc, itemd = "aaa"] = names
console.log(itemd)
```

**对象**

```js
var obj = {
  name: "why",
  age: 18,
  height: 1.88
}

// 对象的解构: {}
var { name, age, height } = obj
console.log(name, age, height)

var { age } = obj
console.log(age)

var { name: newName } = obj
console.log(newName)

var { address: newAddress = "广州市" } = obj
console.log(newAddress)


function foo(info) {
  console.log(info.name, info.age)
}

foo(obj)

function bar({name, age}) {
  console.log(name, age)
}

bar(obj)


```

## Set/Map/WeakSet/WeakMap

在ES6之前，我们存储数据的结构主要有两种：数组、对象,在ES6中新增了另外两种数据结构：Set、Map，以及它们的另外形式WeakSet、WeakMap

### **Set**

Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是元素不能重复。

```js
const set = new Set()
set.add(10)
set.add(10)
set.add(30)
console.log(set);//{ 10, 30 }

const arr = [10, 20, 30, 10]
const arr2 = new Set(arr)
console.log(arr2);//{ 10, 20, 30 }

```

set常见的方法

size

返回Set中元素的个数

console.log(set.size);

add

add(value)：添加某个元素，返回Set对象本身

delete

delete(value)：从set中删除和这个值相等的元素，返回boolean类型

has

has(value)：判断set中是否存在某个元素，返回boolean类型；

clear

clear()：清空set中所有的元素，没有返回值

forEach

forEach(callback, [, thisArg])：通过forEach遍历set

```js
arrSet.forEach(item => {
  console.log(item)
})

for (const item of arrSet) {
  console.log(item)
}
```

### **weakSet**

和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构.

那么和Set有什么区别呢？

- WeakSet中只能存放对象类型，不能存放基本数据类型
- WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；

WeakSet常见的方法

add(value)：添加某个元素，返回WeakSet对象本身

delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；

has(value)：判断WeakSet中是否存在某个元素，返回boolean类型

### Map

一个新增的数据结构是Map，用于存储映射关系

在之前我们可以使用对象来存储映射关系，他们有什么区别呢？ 

- 事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）； 

- 某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key；

```js
const obj1 = { name: "why" }
const obj2 = { name: "kobe" }

// 2.Map就是允许我们对象类型来作为key的
// 构造方法的使用
const map = new Map()
map.set(obj1, "aaa")
map.set(obj2, "bbb")
map.set(1, "ccc")
console.log(map)

{ name: 'why' } => 'aaa',
  { name: 'kobe' } => 'bbb',
  1 => 'ccc'
```

Map的常用方法

size：返回Map中元素的个数；

set(key, value)：在Map中添加key、value，并且返回整个Map对象

```js
const map2=new Map()
map2.set("why", "eee")
console.log(map2)
```

has(key)：判断是否包括某一个key，返回Boolean类型

delete(key)：根据key删除一个键值对，返回Boolean类型；

clear()：清空所有的元素；

forEach(callback, [, thisArg])：通过forEach遍历Map

### WeakMap

和Map有什么区别呢

WeakMap的key只能使用对象，不接受其他的类型作为key；

WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象

## Object values

可以通过 Object.keys 获取一个对象所有的key，在ES8中提供了 Object.values 来获取所有的value值

```js
const obj = {
  name: "why",
  age: 18
}

console.log(Object.keys(obj))//[ 'name', 'age' ]
console.log(Object.values(obj))//[ 'why', 18 ]
```

## Object entries

Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组

```js
const obj = {
  name: "why",
  age: 18
}

console.log(Object.entries(obj)) //[ [ 'name', 'why' ], [ 'age', 18 ] ]
```

## padStart 和 padEnd

ES8中增加了 padStart 和 padEnd 方法，分 别是对字符串的首尾进行填充的

应用场景：比如需要对身份证、银行卡的前面位数进行隐藏

```js
const message = "Hello World"

const newMessage = message.padStart(15, "*").padEnd(20, "-")
console.log(newMessage)

// 案例
const cardNumber = "321324234242342342341312"
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, "*")
console.log(finalCard)

****Hello World-----
********************1312
```

## flat flatMap

flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返 回。

```js
const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
const newNums = nums.flat()
console.log(newNums) //[ 10, 20, 2, 9, [ 30, 40 ], [ 10, 45 ], 78, 55, 88 ]

const newNums2 = nums.flat(2)
console.log(newNums2)//[10, 20,  2,  9, 30,40, 10, 45, 78, 55,88]

```

flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组

- flatMap是先进行map操作，再做flat的操作
- flatMap中的flat相当于深度为1

```js
const nums2 = [10, 20, 30]
const newNums3 = nums2.flatMap(item => {
  return item * 2
})
const newNums4 = nums2.map(item => {
  return item * 2
})

console.log(newNums3)
console.log(newNums4)
```

## trimStart trimEnd

去除收尾空格

```js
const message = "    Hello World    "

console.log(message.trim())
console.log(message.trimStart())
console.log(message.trimEnd())
Hello World
Hello World    
    Hello World
```

## 空值合并运算 ??

```js
const foo = undefined
// const bar = foo || "default value"
const bar = foo ?? "defualt value"

console.log(bar)defualt value
```



