---
sidebar: auto
---
## 简介

一个可以和React良好配合的集中状态管理工具，mobx和react的关系，相当于vuex和vue，同类工具还有：1. redux 2. dva 3. recoil
## 环境配置

**安装**

mobx-react-lite为连接react和mobx

```
yarn add mobx mobx-react-lite
```

## 使用

创建一个store文件夹，index.js文件

```js
import { makeAutoObservable } from "mobx";
class CouterStore {
    count = 0;
    constructor() {
        makeAutoObservable(this);
    }
    addCount = () => {
        this.count++;
    };
}
const conterStore = new CouterStore();
export default conterStore;

```

创建一个react文件，mobx.js

```js
::: tip
import { observer } from "mobx-react-lite";连接react和mobx,让组件在视图中响应数据变化
export default observer(App);
:::
```

```js
import { makeAutoObservable ,computed} from "mobx";
class CouterStore {
    count = 0;
    list=[1,2,3]
    constructor() {
        makeAutoObservable(this, {
            listtest:computed
        });
    }
    get listtest() {
        return this.list(item=>item>2)
    }
    addCount = () => {
        this.count++;
        this.list.push(6,7,8,9)
    };
}
const conterStore = new CouterStore();
export default conterStore;

```

## 





