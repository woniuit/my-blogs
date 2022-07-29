<template><div><h1 id="react-jsx" tabindex="-1"><a class="header-anchor" href="#react-jsx" aria-hidden="true">#</a> react-JSX</h1>
<h2 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>npx create-react-app 是固定命令，<code v-pre>create-react-app</code>是React脚手架的名称</li>
<li>npx 命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自自动删掉，所以不需要全局安装create-react-app</li>
</ul>
<p>启动项目</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn start
or
npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2>
<ul>
<li>一般情况下删除src目录下自带的所有文件，只保留app.js根组件和index.js</li>
<li>创建index.js文件作为项目的入口文件，在这个文件中书写react代码即可</li>
</ul>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 引入根组件App
import App from './App'
// 通过调用ReactDOM的render方法渲染App根组件到id为root的dom节点上
ReactDOM.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;,
  document.getElementById('root')
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx使用" tabindex="-1"><a class="header-anchor" href="#jsx使用" aria-hidden="true">#</a> JSX使用</h2>
<h3 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> <strong>表达式</strong></h3>
<ul>
<li>大括号内可以是变量、字符串、数组、函数调用等任意js表达式；</li>
<li>当变量是Number、String、Array类型时，可以直接显示</li>
<li>当变量是null、undefined、Boolean类型时，内容为空；
<ul>
<li>如果希望可以显示null、undefined、Boolean，那么需要转成字符串；</li>
<li>转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；</li>
</ul>
</li>
</ul>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>{ JS 表达式 }
const JSX = 'jsx'
&lt;div&gt;{JSX}&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充：为什么null、undefined、Boolean在JSX中要显示为空内容呢？</strong></p>
<p>原因是在开发中，我们会进行很多的判断；内容可以根据true和FALSE进行显示</p>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>&lt;div&gt;
        {this.state.flag ? &lt;h2&gt;我是标题&lt;/h2&gt;: null}
        {this.state.flag &amp;&amp; &lt;h2&gt;我是标题&lt;/h2&gt;}
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx嵌入表达式" tabindex="-1"><a class="header-anchor" href="#jsx嵌入表达式" aria-hidden="true">#</a> <strong>JSX嵌入表达式</strong></h3>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>&lt;div&gt;
        {/* 运算表达式 */}
        &lt;h2&gt;{this.state.firstName + &quot; &quot; + this.state.lastName}&lt;/h2&gt;
        {/* 三元运算符 */}
        &lt;h2&gt;{this.state.age &gt;= 18 ? &quot;成年人&quot;: &quot;未成年人&quot;}&lt;/h2&gt;
        {/* 执行一个函数 */}
        &lt;h2&gt;{this.sayHello(&quot;kobe&quot;)}&lt;/h2&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx绑定html属性" tabindex="-1"><a class="header-anchor" href="#jsx绑定html属性" aria-hidden="true">#</a> <strong>jsx绑定HTML属性</strong></h3>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>&lt;div&gt;
        &lt;h2 title={this.state.title}&gt;Hello World&lt;/h2&gt;
        &lt;img src={this.state.imgUrl} alt=&quot;&quot;/&gt;
        &lt;a href={this.state.link} target=&quot;_blank&quot;&gt;百度一下&lt;/a&gt;
        &lt;div className={&quot;message &quot; + (this.state.active ? &quot;active&quot;: &quot;&quot;)}&gt;你好啊&lt;/div&gt;
        &lt;div className={[&quot;message&quot;, (this.state.active ? &quot;active&quot;: &quot;&quot;)].join(&quot; &quot;)}&gt;你好啊&lt;/div&gt;
        &lt;div style={{fontSize: &quot;30px&quot;, color: &quot;red&quot;, backgroundColor: &quot;blue&quot;}}&gt;我是文本&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx事件监听" tabindex="-1"><a class="header-anchor" href="#jsx事件监听" aria-hidden="true">#</a> <strong>jsx事件监听</strong></h3>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>class App extends React.Component {
  render() {
    return (
      &lt;div&gt;
        &lt;a href=&quot;#&quot; onClick={e =&gt; this.aClick(e, item, index)}&gt;{item}&lt;/a&gt;
      &lt;/div&gt;
    )
  }

  aClick() {
    console.log(&quot;React按钮点击了一下&quot;)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx列表渲染" tabindex="-1"><a class="header-anchor" href="#jsx列表渲染" aria-hidden="true">#</a> <strong>jsx列表渲染</strong></h3>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>// 来个列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    &lt;div className=&quot;App&quot;&gt;
      &lt;ul&gt;
        {
          songs.map(item =&gt; &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;)
        }
      &lt;/ul&gt;
    &lt;/div&gt;
  )
}

export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsx条件渲染" tabindex="-1"><a class="header-anchor" href="#jsx条件渲染" aria-hidden="true">#</a> JSX条件渲染</h3>
<div class="language-react ext-react line-numbers-mode"><pre v-pre class="language-react"><code>const flag = true
function App() {
  return (
    &lt;div className=&quot;App&quot;&gt;
      {/* 条件渲染字符串 */}
      {flag ? 'react真有趣' : 'vue真有趣'}
      {/* 条件渲染标签/组件 */}
      {flag ? &lt;span&gt;this is span&lt;/span&gt; : null}
    &lt;/div&gt;
  )
}
export default App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
