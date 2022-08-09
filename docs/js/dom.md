# DOM

《JS高级和程序设计4》看书笔记

## 概念

**dom概念**

文档对象模型（DOM，Document Object Model）是 HTML 和 XML 文档的编程接口。DOM 表示

由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。

**节点层级**

任何 HTML 或 XML 文档都可以用 DOM 表示为一个由节点构成的层级结构。

```html
<html> 
 <head> 
 <title>Sample Page</title> 
 </head> 
 <body> 
 <p>Hello World!</p> 
 </body> 
</html>
```
![1](/18.png)

上图document 节点表示每个文档的根节点。在这里，根节点的唯一子节点是html元素，我们称之

为文档元素（documentElement）。文档元素是文档最外层的元素，所有其他元素都存在于这个元素之

内。每个文档只能有一个文档元素。在 HTML 页面中，文档元素始终是html元素。在 XML 文档中，

则没有这样预定义的元素，任何元素都可能成为文档元素。

## node类型

DOM 中总共有 12 种节点类型，这些类型都继承一种基本类型。

**我们只需要注意前三种即可，其他了解就好**
元素节点 : 1
属性节点 : 2
文本节点 : 3

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <div id="p">
            11
           <div>22</div>
        </div>
    </div>
</body>
</html>
<script>
    let test=document.getElementById('p')
    console.log(test.nodeType)//1
    if(test.nodeType==1){
        console.log(test.nodeName) //DIV
        console.log(test.nodeValue)//null
    }
    console.log(Array.from(test.childNodes))//[text, div, text]
</script>
```

**常见的api**

- **parentNode** 父节点

- **firstChild** 第一个节点

- **lastChild** 最后一个节点

- **hasChildNodes()** 在节点包含一个或多个子节点的情况下返回true，比查询childNodes列表的length更简便

- **appendChild(要添加的元素)**

- **insertBefore(新的元素，被插入的元素)** 

- **replaceChild(要插入的节点，被替换节点) 替换子节点** 

- #### **removeChild(要删除的元素)**

- #### **cloneNode（）**

  用于创建调用这个方法的节点的一个完全相同的副本

  该方法接收一个布尔值参数，表示是否执行深复制
  参数为true，执行深复制，即复制节点及整个子节点树
  参数为false，执行浅复制，即只复制该节点本身
