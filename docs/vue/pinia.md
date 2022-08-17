---
sidebar: auto
---

## 安装

```js
npm install pinia
```

## 使用

### 引入

包install完之后，在```main.js```中引入

```js
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);
```

### 创建

创建一个```store```文件夹,```index.js```

```js
import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
  // 推荐使用 完整类型推断的箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            counter: 0,
            name: "Eduardo",
            isAdmin: true,
        };
    },
})
```

### 使用store

我们正在 *定义* 一个 store，因为在 `setup()` 中调用 `useStore()` 之前不会创建 store：

```js
import { useStore } from '@/stores/index'
export default {
  setup() {
    const store = useStore()

    return {
      // 您可以返回整个 store 实例以在模板中使用它
      store,
    }
  },
}
```

#### 结构store

`store` 是一个用`reactive` 包裹的对象，这意味着不需要在getter 之后写`.value`，但是，就像`setup` 中的`props` 一样，**我们不能对其进行解构**

为了从 Store 中提取属性同时保持其响应式，需要使用`storeToRefs()`。 它将为任何响应式属性创建 refs。 当您仅使用 store 中的状态但不调用任何操作时，这很有用：

```js
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useStore()
    // `name` 和 `doubleCount` 是响应式引用
    // 这也会为插件添加的属性创建引用
    // 但跳过任何 action 或 非响应式（不是 ref/reactive）的属性
    const { name, doubleCount } = storeToRefs(store)

    return {
      name,
      doubleCount
    }
  },
})
```

### State

大多数时候，state 是 store 的核心部分。

```js
import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
```

#### 访问state

```js
const store = useStore()

store.counter++
```

#### 重置状态

可以通过调用 store 上的 `$reset()` 方法将状态 *重置* 到其初始值：

```js
const store = useStore()

store.$reset()
```

#### 改变状态

```js
store.$patch({
  counter: store.counter + 1,
  name: 'Abalam',
})
```

### Actions

Actions 相当于组件中的 [methods](https://v3.vuejs.org/guide/data-methods.html#methods)。 它们可以使用 `defineStore()` 中的 `actions` 属性定义，并且**它们非常适合定义业务逻辑**：

```js
export const useStore = defineStore('main', {
  state: () => ({
    counter: 0,
  }),
  actions: {
    increment() {
      this.counter++
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random())
    },
  },
})
```

### 访问其他 store 操作

要使用另一个 store ，您可以直接在操作内部使用它：

```js
import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // ...
  }),
  actions: {
    async fetchUserPreferences(preferences) {
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    },
  },
})
```

## 模块化

在store文件夹中创建modules文件夹

**index.js**

```js
import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
export { useAppStore, useUserStore };
export default pinia;
```

**modules/app.js**

```js
import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';

export const useAppStore = defineStore(
  // 唯一ID
  'app',
  {
    state: () => ({
      
    }),
    getters: {},
    actions: {
      
    },
    persist: {
      
    },
  },
);

export function useAppOutsideStore() {
  return useAppStore(piniaStore);
}

```

**使用**

```js
  import { useAppStore } from '/@/store';
  const appStore = useAppStore();
```



## 在router.js中使用

必须写在router.beforeEach里面。

```js
router.beforeEach((to) => {
    const store = loginStore();
    if (to.path !== "/login") {
        if (!store.token) {
            return "/login";
        }
    }
});
```

## 持久化

```pinia-plugin-persist```插件

### 安装

```
npm i pinia-plugin-persist --save
```

引入

在```main.js```中引入持久化插件

```js
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist"; //pinia持久化
const pinia = createPinia();
pinia.use(piniaPluginPersist);
```

### 使用

在store中

```js
export const loginStore = defineStore("main", {
 
    //持久化
    persist: {
        enabled: true,
        // 自定义持久化参数
        strategies: [
            {
                // 自定义key
                key: "token",
                // 自定义存储方式，默认sessionStorage
                storage: localStorage,
                // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
                paths: ["token"],
            },
            {
                key: "menulist",
                storage: localStorage,
                paths: ["menulist"],
            },
        ],
    },
});
```





