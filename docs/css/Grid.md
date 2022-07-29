---
sidebar: auto
---

[资料](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 基本概念

**容器和项目**

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```

上面代码中，最外层的`<div>`元素就是容器，内层的三个`<div>`元素就是项目。

注意：项目只能是容器的顶层子元素，不包含项目的子元素，比如上面代码的`<p>`元素就不是项目。Grid 布局只对项目生效。

