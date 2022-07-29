<template><div><h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> React</h1>
<h2 id="hello-react" tabindex="-1"><a class="header-anchor" href="#hello-react" aria-hidden="true">#</a> Hello React</h2>
<p>react的优点起源简介不再介绍，看文档</p>
<h3 id="react开发依赖" tabindex="-1"><a class="header-anchor" href="#react开发依赖" aria-hidden="true">#</a> react开发依赖</h3>
<h4 id="开发react必须依赖三个库" tabindex="-1"><a class="header-anchor" href="#开发react必须依赖三个库" aria-hidden="true">#</a> 开发react必须依赖三个库</h4>
<ul>
<li>react  --包含react所需核心代码</li>
<li>react-dom --react渲染在不同平台需要的代码</li>
<li>babel  --将jsx转成react代码的工具</li>
</ul>
<h4 id="如何添加这三个依赖" tabindex="-1"><a class="header-anchor" href="#如何添加这三个依赖" aria-hidden="true">#</a> 如何添加这三个依赖</h4>
<p>方式1：直接CDN引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">react依赖：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>unpkg<span class="token punctuation">.</span>com<span class="token operator">/</span>react@<span class="token number">16</span><span class="token operator">/</span>umd<span class="token operator">/</span>react<span class="token punctuation">.</span>development<span class="token punctuation">.</span>js
react<span class="token operator">-</span>dom依赖：https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>unpkg<span class="token punctuation">.</span>com<span class="token operator">/</span>react<span class="token operator">-</span>dom@<span class="token number">16</span><span class="token operator">/</span>umd<span class="token operator">/</span>react<span class="token operator">-</span>dom<span class="token punctuation">.</span>development<span class="token punctuation">.</span>js
<span class="token literal-property property">babel依赖：https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>unpkg<span class="token punctuation">.</span>com<span class="token operator">/</span>babel<span class="token operator">-</span>standalone@<span class="token number">6</span><span class="token operator">/</span>babel<span class="token punctuation">.</span>min<span class="token punctuation">.</span>js
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/react@16/umd/react.development.js"</span> crossorigin<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/react-dom@16/umd/react-dom.development.js"</span> crossorigin<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/babel-standalone@6/babel.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式2：下载后添加本地依赖</p>
<p>方式3：通过npm管理</p>
<p>暂时先通过cdn的方式引入写写demo，后面会介绍到通过npm脚手架的方式。</p>
<h4 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> hello world</h4>
<ul>
<li>
<p>先创建一个helloworld.html文件</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/react@16/umd/react.development.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/react-dom@16/umd/react-dom.development.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/babel-standalone@6/babel.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

  <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/babel"</span><span class="token operator">></span>
    <span class="token comment">// 通过ReactDom对象来渲染内容</span>
    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>h2<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>代码解析</p>
<ul>
<li>
<p>ReactDOM.render函数：</p>
</li>
<li>
<ul>
<li>这里我们已经提前定义一个id为app的div</li>
<li>这里我们传入了一个h2元素，后面我们就会使用React组件</li>
<li>参数一：传递要渲染的内容，这个内容可以是HTML元素，也可以是React的组件</li>
<li>参数二：将渲染的内容，挂载到哪一个HTML元素上</li>
</ul>
</li>
</ul>
</li>
<li>
<p>写死的内容抽取到变量中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 将数据定义到变量中</span>
<span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>

<span class="token comment">// 通过ReactDom对象来渲染内容</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="类组件" tabindex="-1"><a class="header-anchor" href="#类组件" aria-hidden="true">#</a> 类组件</h3>
<p><strong><code v-pre>ReactDOM.render</code> 第一参数是一个HTML原生或者一个组件。</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>h2<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="数据在哪里定义" tabindex="-1"><a class="header-anchor" href="#数据在哪里定义" aria-hidden="true">#</a> 数据在哪里定义</h4>
<ul>
<li>
<p>在组件中的数据，我们可以分成两类：</p>
</li>
<li>
<ul>
<li>参与界面更新的数据：当数据变量时，需要更新组件渲染的内容</li>
<li>不参与界面更新的数据：当数据变量时，不需要更新将组建渲染的内容</li>
</ul>
</li>
<li>
<p>参与界面更新的数据我们也可以称之为是参与数据流，这个数据是定义在当前对象的state中</p>
</li>
<li>
<ul>
<li>我们可以通过在构造函数中 <code v-pre>this.state = {定义的数据}</code></li>
</ul>
</li>
<li>
<p>当我们的数据发生变化时，我们可以调用 <code v-pre>this.setState</code> 来更新数据，并且通知React进行update操作</p>
</li>
<li>
<ul>
<li>在进行update操作时，就会重新调用render函数，并且使用最新的数据，来渲染界面</li>
</ul>
</li>
</ul>
<h4 id="事件绑定中的this" tabindex="-1"><a class="header-anchor" href="#事件绑定中的this" aria-hidden="true">#</a> 事件绑定中的this</h4>
<ul>
<li>
<p>在类中直接定义一个函数，并且将这个函数绑定到html原生的onClick事件上，当前这个函数的this指向的是谁呢？</p>
</li>
<li>
<p>默认情况下是undefined</p>
</li>
<li>
<ul>
<li>很奇怪，居然是undefined；</li>
<li>因为在正常的DOM操作中，监听点击，监听函数中的this其实是节点对象（比如说是button对象）；</li>
<li>这次因为React并不是直接渲染成真实的DOM，我们所编写的button只是一个语法糖，它的本质React的Element对象；</li>
<li>那么在这里发生监听的时候，react给我们的函数绑定的this，默认情况下就是一个undefined；</li>
</ul>
</li>
<li>
<p>我们在绑定的函数中，可能想要使用当前对象，比如执行 <code v-pre>this.setState</code> 函数，就必须拿到当前对象的this</p>
</li>
<li>
<ul>
<li>我们就需要在传入函数时，给这个函数直接绑定this</li>
<li>类似于下面的写法：<code v-pre>&lt;button onClick={this.changeText.bind(this)}&gt;改变文本&lt;/button&gt;</code></li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Hello World"</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeText</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>改变文本<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
     <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Hello React"</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h4>
<h5 id="电影列表" tabindex="-1"><a class="header-anchor" href="#电影列表" aria-hidden="true">#</a> 电影列表</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">movies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"星际穿越"</span><span class="token punctuation">,</span> <span class="token string">"大话西游"</span><span class="token punctuation">,</span> <span class="token string">"盗梦空间"</span><span class="token punctuation">,</span> <span class="token string">"少年派"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// var movieLis = [];</span>
    <span class="token comment">// for (var i in this.state.movies) {</span>
    <span class="token comment">//   movieLis.push((&lt;li>{this.state.movies[i]}&lt;/li>));</span>
    <span class="token comment">// }</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>电影列表<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
          <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>movies<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="计数器" tabindex="-1"><a class="header-anchor" href="#计数器" aria-hidden="true">#</a> 计数器</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>当前计数<span class="token operator">:</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">decrement</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token operator">+</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token operator">-</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsx语法" tabindex="-1"><a class="header-anchor" href="#jsx语法" aria-hidden="true">#</a> JSX语法</h2>
<h4 id="jsx表达式" tabindex="-1"><a class="header-anchor" href="#jsx表达式" aria-hidden="true">#</a> jsx表达式</h4>
<ul>
<li>书写规则：{表达式}</li>
<li>大括号内可以是变量、字符串、数组、函数调用等任意js表达式；</li>
</ul>
<h4 id="jsx注释" tabindex="-1"><a class="header-anchor" href="#jsx注释" aria-hidden="true">#</a> jsx注释</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token comment">/* 我是一段注释 */</span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jsx嵌入变量" tabindex="-1"><a class="header-anchor" href="#jsx嵌入变量" aria-hidden="true">#</a> jsx嵌入变量</h4>
<ul>
<li>
<p>情况一：当变量是Number、String、Array类型时，可以直接显示</p>
</li>
<li>
<p>情况二：当变量是null、undefined、Boolean类型时，内容为空；</p>
</li>
<li>
<ul>
<li>如果希望可以显示null、undefined、Boolean，那么需要转成字符串；</li>
<li>转换的方式有很多，比如toString方法、和空字符串拼接，String(变量)等方式；</li>
</ul>
</li>
<li>
<p>情况三：对象类型不能作为子元素（not valid as a React child）</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
      <span class="token literal-property property">hobbies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"篮球"</span><span class="token punctuation">,</span> <span class="token string">"唱跳"</span><span class="token punctuation">,</span> <span class="token string">"rap"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      
      <span class="token literal-property property">test1</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">test2</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
      <span class="token literal-property property">flag</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

      <span class="token literal-property property">friend</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kobe"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">40</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 我是一段注释 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 1.可以直接显示 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hobbies<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

        
        <span class="token punctuation">{</span><span class="token comment">/* 2.不显示 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>test1<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>test1 <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>test2<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>test2 <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>flag<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>flag <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        
        <span class="token punctuation">{</span><span class="token comment">/* 3.不显示 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token number">123</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>friend<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jsx嵌入表达式" tabindex="-1"><a class="header-anchor" href="#jsx嵌入表达式" aria-hidden="true">#</a> jsx嵌入表达式</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token comment">/* 运算表达式 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>lastName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 三元运算符 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>age <span class="token operator">>=</span> <span class="token number">18</span> <span class="token operator">?</span> <span class="token string">"成年人"</span><span class="token operator">:</span> <span class="token string">"未成年人"</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 执行一个函数 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token string">"kobe"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jsx属性绑定" tabindex="-1"><a class="header-anchor" href="#jsx属性绑定" aria-hidden="true">#</a> jsx属性绑定</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>h2 title<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>imgUrl<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">""</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>link<span class="token punctuation">}</span> target<span class="token operator">=</span><span class="token string">"_blank"</span><span class="token operator">></span>百度一下<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"message "</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token operator">?</span> <span class="token string">"active"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>你好啊<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active <span class="token operator">?</span> <span class="token string">"active"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>你好啊<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"30px"</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>我是文本<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jsx事件监听" tabindex="-1"><a class="header-anchor" href="#jsx事件监听" aria-hidden="true">#</a> jsx事件监听</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnClick<span class="token punctuation">}</span><span class="token operator">></span><span class="token function">点我一下</span><span class="token punctuation">(</span>React<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"React按钮点击了一下"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="this绑定问题" tabindex="-1"><a class="header-anchor" href="#this绑定问题" aria-hidden="true">#</a> this绑定问题</h5>
<ul>
<li>
<p>默认下this是undefined</p>
</li>
<li>
<p>为什么是undefined？</p>
</li>
</ul>
<p>原因是<code v-pre>btnClick</code>函数并不是我们主动调用的，而且当button发生改变时，React内部调用了<code v-pre>btnClick</code>函数；</p>
<p>而它内部调用时，并不知道要如何绑定正确的this；</p>
<h5 id="如何解决this绑定" tabindex="-1"><a class="header-anchor" href="#如何解决this绑定" aria-hidden="true">#</a> 如何解决this绑定</h5>
<ul>
<li>
<p><strong>方案一：bind给btnClick显示绑定this</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token function">点我一下</span><span class="token punctuation">(</span>React<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p><strong>方案二：箭头函数</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"你好啊,李银河"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnClick<span class="token punctuation">}</span><span class="token operator">></span><span class="token function">点我一下</span><span class="token punctuation">(</span>React<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>btnClick<span class="token punctuation">}</span><span class="token operator">></span><span class="token function">也点我一下</span><span class="token punctuation">(</span>React<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">btnClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>方案三：事件监听时传入箭头函数（推荐）</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"你好啊,李银河"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token function">点我一下</span><span class="token punctuation">(</span>React<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token function">也点我一下</span><span class="token punctuation">(</span>React<span class="token punctuation">)</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h5 id="事件参数传递" tabindex="-1"><a class="header-anchor" href="#事件参数传递" aria-hidden="true">#</a> 事件参数传递</h5>
<ul>
<li>
<p>获取event对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>j
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取更多参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">names</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"衣服"</span><span class="token punctuation">,</span> <span class="token string">"鞋子"</span><span class="token punctuation">,</span> <span class="token string">"裤子"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"http://www.baidu.com"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>aClick<span class="token punctuation">}</span><span class="token operator">></span>点我一下<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>

        <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>names<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">aClick</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
            <span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">aClick</span><span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">,</span> item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="条件渲染" tabindex="-1"><a class="header-anchor" href="#条件渲染" aria-hidden="true">#</a> 条件渲染</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isLogin</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> titleJsx <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      titleJsx <span class="token operator">=</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>欢迎回来<span class="token operator">~</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      titleJsx <span class="token operator">=</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>请先登录<span class="token operator">~</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span>titleJsx<span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，我们也可以将其封装到一个独立的函数中：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isLogin</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTitleJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">getTitleJsx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> titleJsx <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isLogin<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      titleJsx <span class="token operator">=</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>欢迎回来<span class="token operator">~</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      titleJsx <span class="token operator">=</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>请先登录<span class="token operator">~</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> titleJsx<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="v-show效果" tabindex="-1"><a class="header-anchor" href="#v-show效果" aria-hidden="true">#</a> v-show效果</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> isLogin<span class="token punctuation">,</span> username <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> nameDisplay <span class="token operator">=</span> isLogin <span class="token operator">?</span> <span class="token string">"block"</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">display</span><span class="token operator">:</span> nameDisplay<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>username<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loginBtnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>isLogin <span class="token operator">?</span> <span class="token string">"退出"</span><span class="token operator">:</span> <span class="token string">"登录"</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="脚手架" tabindex="-1"><a class="header-anchor" href="#脚手架" aria-hidden="true">#</a> 脚手架</h2>
<h3 id="安装脚手架" tabindex="-1"><a class="header-anchor" href="#安装脚手架" aria-hidden="true">#</a> 安装脚手架</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span>g create<span class="token operator">-</span>react<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>create<span class="token operator">-</span>react<span class="token operator">-</span>app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建好项目" tabindex="-1"><a class="header-anchor" href="#创建好项目" aria-hidden="true">#</a> 创建好项目</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd <span class="token number">01</span><span class="token operator">-</span>test<span class="token operator">-</span>react
yarn start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录结构分析" tabindex="-1"><a class="header-anchor" href="#目录结构分析" aria-hidden="true">#</a> 目录结构分析</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>test<span class="token operator">-</span>react
├─ <span class="token constant">README</span><span class="token punctuation">.</span>md <span class="token comment">// readme说明文档</span>
├─ <span class="token keyword">package</span><span class="token punctuation">.</span>json <span class="token comment">// 对整个应用程序的描述：包括应用名称、版本号、一些依赖包、以及项目的启动、打包等等（node管理项目必备文件）</span>
├─ <span class="token keyword">public</span>
│    ├─ favicon<span class="token punctuation">.</span>ico <span class="token comment">// 应用程序顶部的icon图标</span>
│    ├─ index<span class="token punctuation">.</span>html <span class="token comment">// 应用的index.html入口文件</span>
│    ├─ logo192<span class="token punctuation">.</span>png <span class="token comment">// 被在manifest.json中使用</span>
│    ├─ logo512<span class="token punctuation">.</span>png <span class="token comment">// 被在manifest.json中使用</span>
│    ├─ manifest<span class="token punctuation">.</span>json <span class="token comment">// 和Web app配置相关</span>
│    └─ robots<span class="token punctuation">.</span>txt <span class="token comment">// 指定搜索引擎可以或者无法爬取哪些文件</span>
├─ src
│    ├─ App<span class="token punctuation">.</span>css <span class="token comment">// App组件相关的样式</span>
│    ├─ App<span class="token punctuation">.</span>js <span class="token comment">// App组件的代码文件</span>
│    ├─ App<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js <span class="token comment">// App组件的测试代码文件</span>
│    ├─ index<span class="token punctuation">.</span>css <span class="token comment">// 全局的样式文件</span>
│    ├─ index<span class="token punctuation">.</span>js <span class="token comment">// 整个应用程序的入口文件</span>
│    ├─ logo<span class="token punctuation">.</span>svg <span class="token comment">// 刚才启动项目，所看到的React图标</span>
│    ├─ serviceWorker<span class="token punctuation">.</span>js <span class="token comment">// 默认帮助我们写好的注册PWA相关的代码</span>
│    └─ setupTests<span class="token punctuation">.</span>js <span class="token comment">// 测试初始化文件</span>
└─ yarn<span class="token punctuation">.</span>lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webpack配置" tabindex="-1"><a class="header-anchor" href="#webpack配置" aria-hidden="true">#</a> webpack配置</h3>
<p>想要看到webpack的配置先在package.json文件中的一个脚本：<code v-pre>&quot;eject&quot;: &quot;react-scripts eject&quot;</code>，该操作不可以逆行</p>
<ul>
<li>
<p>这个操作是不可逆的，所以在执行过程中会给与我们提示；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn eject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="组件化" tabindex="-1"><a class="header-anchor" href="#组件化" aria-hidden="true">#</a> 组件化</h2>
<h3 id="类组件-1" tabindex="-1"><a class="header-anchor" href="#类组件-1" aria-hidden="true">#</a> 类组件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>Hello App<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数组件" tabindex="-1"><a class="header-anchor" href="#函数组件" aria-hidden="true">#</a> 函数组件</h3>
<p>函数组件是使用function来进行定义的函数，只是这个函数会返回和类组件中render函数返回一样的内容。</p>
<p>函数组件有自己的特点（当然，后面我们会讲hooks，就不一样了）：</p>
<ul>
<li>没有生命周期，也会被更新并挂载，但是没有生命周期函数；</li>
<li>没有this(组件实例）；</li>
<li>没有内部状态（state）；</li>
</ul>
<p>我们来定义一个函数组件：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件生命周期" tabindex="-1"><a class="header-anchor" href="#组件生命周期" aria-hidden="true">#</a> 组件生命周期</h3>
<p><em><strong>大致可以概括为：初始化阶段--挂载阶段--更新阶段--卸载阶段</strong></em></p>
<h3 id="初始化阶段" tabindex="-1"><a class="header-anchor" href="#初始化阶段" aria-hidden="true">#</a> 初始化阶段</h3>
<p>发生在constructor中的内容，在 constructor 中进行 state、props 的初始化，在这个阶段修改 state，不会执行更新阶段的生命周期，可以直接对 state 赋值。</p>
<h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> <strong>constructor</strong></h4>
<ul>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Hello App'</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>通过给 <code v-pre>this.state</code> 赋值对象来初始化内部的state；</p>
</li>
<li>
<p>为事件绑定实例（this）；</p>
</li>
</ul>
<h3 id="挂载阶段" tabindex="-1"><a class="header-anchor" href="#挂载阶段" aria-hidden="true">#</a> 挂载阶段</h3>
<p>对应的生命周期：</p>
<div class="language-asciidoc ext-asciidoc line-numbers-mode"><pre v-pre class="language-asciidoc"><code><span class="token list-punctuation punctuation">*</span> 1.componentWillMount 
    发生在 render 函数之前，还没有挂载 Dom
<span class="token list-punctuation punctuation">*</span> 2.render 
<span class="token list-punctuation punctuation">*</span> 3.componentDidMount
    发生在 render 函数之后，已经挂载 Dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="componentdidmount" tabindex="-1"><a class="header-anchor" href="#componentdidmount" aria-hidden="true">#</a> <strong>componentDidMount</strong></h4>
<p><code v-pre>componentDidMount()</code> 会在组件挂载后（插入 DOM 树中）立即调用。</p>
<p>componentDidMount中通常进行哪里操作呢？</p>
<ul>
<li>依赖于DOM的操作可以在这里进行；</li>
<li>在此处发送网络请求就最好的地方；（官方建议）</li>
<li>可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；</li>
</ul>
<h3 id="更新阶段" tabindex="-1"><a class="header-anchor" href="#更新阶段" aria-hidden="true">#</a> 更新阶段</h3>
<h4 id="componentdidupdate" tabindex="-1"><a class="header-anchor" href="#componentdidupdate" aria-hidden="true">#</a> <strong>componentDidUpdate</strong></h4>
<p><code v-pre>componentDidUpdate()</code> 会在更新后会被立即调用，首次渲染不会执行此方法。</p>
<ul>
<li>当组件更新后，可以在此处对 DOM 进行操作；</li>
<li>如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。</li>
</ul>
<h3 id="卸载阶段" tabindex="-1"><a class="header-anchor" href="#卸载阶段" aria-hidden="true">#</a> <strong>卸载阶段</strong></h3>
<h4 id="componentwillunmount" tabindex="-1"><a class="header-anchor" href="#componentwillunmount" aria-hidden="true">#</a> <strong>componentWillUnmount</strong></h4>
<p><code v-pre>componentWillUnmount()</code> 会在组件卸载及销毁之前直接调用。</p>
<ul>
<li>在此方法中执行必要的清理操作；</li>
<li>例如，清除 timer，取消网络请求或清除在 <code v-pre>componentDidMount()</code> 中创建的订阅等；</li>
</ul>
<h3 id="组件通信" tabindex="-1"><a class="header-anchor" href="#组件通信" aria-hidden="true">#</a> 组件通信</h3>
<h4 id="父子组件通信" tabindex="-1"><a class="header-anchor" href="#父子组件通信" aria-hidden="true">#</a> 父子组件通信</h4>
<p>当向流数据，数据只能通过props由父组件流向子组件，反之不行。</p>
<h4 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h4>
<h5 id="父组件传递子组件" tabindex="-1"><a class="header-anchor" href="#父组件传递子组件" aria-hidden="true">#</a> 父组件传递子组件</h5>
<p><strong>类组件的方式</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token comment">// 1.类子组件</span>
<span class="token keyword">class</span> <span class="token class-name">ChildCpn1</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> props<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>我是<span class="token keyword">class</span>的组件<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>展示父组件传递过来的数据<span class="token operator">:</span> <span class="token punctuation">{</span>name <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> height<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ChildCpn1 name<span class="token operator">=</span><span class="token string">"why"</span> age<span class="token operator">=</span><span class="token string">"18"</span> height<span class="token operator">=</span><span class="token string">"1.88"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>function组件的方式</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ChildCpn2</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>我是<span class="token keyword">function</span>的组件<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>展示父组件传递过来的数据<span class="token operator">:</span> <span class="token punctuation">{</span>name <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> height<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ChildCpn1 name<span class="token operator">=</span><span class="token string">"why"</span> age<span class="token operator">=</span><span class="token string">"18"</span> height<span class="token operator">=</span><span class="token string">"1.88"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ChildCpn2 name<span class="token operator">=</span><span class="token string">"kobe"</span> age<span class="token operator">=</span><span class="token string">"30"</span> height<span class="token operator">=</span><span class="token string">"1.98"</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="子组件传递给父组件" tabindex="-1"><a class="header-anchor" href="#子组件传递给父组件" aria-hidden="true">#</a> 子组件传递给父组件</h5>
<p>同样是通过props传递消息，只是让<code v-pre>父组件</code>给<code v-pre>子组件</code>传递一个<code v-pre>回调函数</code>，在子组件中调用这个函数即可；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>接收父组件的值<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeMsg</span><span class="token punctuation">(</span><span class="token string">"Changed Msg"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                    修改父组件的值
                <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"Parent Msg"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function-variable function">changeMsg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> msg <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>Child msg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span> changeMsg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>changeMsg<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// TodoList.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Fragment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./style.css'</span>
<span class="token keyword">import</span> TodoItem <span class="token keyword">from</span> <span class="token string">'./TodoItem'</span>
 
<span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Fragment<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"insertArea"</span><span class="token operator">></span>输入内容<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>input 
            id<span class="token operator">=</span><span class="token string">"insertArea"</span>
            className<span class="token operator">=</span><span class="token string">"input"</span>
            value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">}</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleInputChange</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>            
           <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleBtnClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>提交<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
         <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>TodoItem 
                    content<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> 
                    index<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span> 
                    <span class="token comment">// deleteItem={this.handleItemDelete}</span>
                    deleteItem<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleItemDelete</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
         <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Fragment<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">handleInputChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">inputValue</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">handleBtnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>inputValue<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inputValue</span><span class="token operator">:</span> <span class="token string">''</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
 
  <span class="token function">handleItemDelete</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">list</span><span class="token operator">:</span> list
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> TodoList<span class="token punctuation">;</span>
 
<span class="token comment">// TodoItem.js</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
 
<span class="token keyword">class</span> <span class="token class-name">TodoItem</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div 
                <span class="token comment">// onClick={this.handleClick.bind(this)} // 不推荐</span>
                onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span>
            <span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>content<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
 
    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// alert(1);</span>
        <span class="token comment">// alert(this.props.index); // 需要事件绑定</span>
        <span class="token comment">// this.props.deleteItem(this.props.index);</span>
        <span class="token comment">// 等价于 this.handleItemDelete;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">deleteItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 父组件传函数的时候需要绑定</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> TodoItem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="传递的类型校验proptypes" tabindex="-1"><a class="header-anchor" href="#传递的类型校验proptypes" aria-hidden="true">#</a> 传递的类型校验PropTypes</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">'prop-types'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>校验</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Greeting<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>
  <span class="token literal-property property">names</span><span class="token operator">:</span> PropTypes<span class="token punctuation">.</span>array
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>默认值</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Greeting<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Stranger'</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="非父子组件之间通信" tabindex="-1"><a class="header-anchor" href="#非父子组件之间通信" aria-hidden="true">#</a> 非父子组件之间通信</h4>
<p><code v-pre>React Context</code>提供了一个无需为每层组件手动添加<code v-pre>props</code>就能在组件树间进行数据传递的方法。</p>
<p>简单来说就是在父组件中通过<code v-pre>Provider</code>来提供数据，然后在子组件中通过<code v-pre>Consumer</code>来取得<code v-pre>Provider</code>定义的数据，不论子组件有多深，只要使用了<code v-pre>Provider</code>那么就可以取得在<code v-pre>Provider</code>中提供的数据，而不是局限于只能从当前父组件的<code v-pre>props</code>属性来获取数据，只要在父组件内定义的<code v-pre>Provider</code>数据，子组件都可以调用。</p>
<h4 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span>defaultValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个需要共享的Context对象：</p>
<ul>
<li>如果一个组件订阅了Context，那么这个组件会从离自身最近的那个匹配的 <code v-pre>Provider</code> 中读取到当前的context值；</li>
<li>defaultValue是组件在顶层查找过程中没有找到对应的<code v-pre>Provider</code>，那么就使用默认值</li>
</ul>
<p>每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化：</p>
<ul>
<li>Provider 接收一个 <code v-pre>value</code> 属性，传递给消费组件；</li>
<li>一个 Provider 可以和多个消费组件有对应关系；</li>
<li>多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据；</li>
</ul>
<p>当 Provider 的 <code v-pre>value</code> 值发生变化时，它内部的所有消费组件都会重新渲染；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> UserContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">"默认"</span><span class="token punctuation">,</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ProfileHeader</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>用户昵称<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>nickname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>用户等级<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ProfileHeader<span class="token punctuation">.</span>contextType <span class="token operator">=</span> UserContext<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>ProfileHeader <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>ul<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                    <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">5</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">nickname</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token number">99</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
                <span class="token operator">&lt;</span>h2<span class="token operator">></span>其他内容<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>什么时候使用Context.Consumer呢？</strong></p>
<ul>
<li>
<p>1.当使用value的组件是一个函数式组件时；</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ProfileHeader</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>h2<span class="token operator">></span>用户昵称<span class="token operator">:</span> <span class="token punctuation">{</span>value<span class="token punctuation">.</span>nickname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
              <span class="token operator">&lt;</span>h2<span class="token operator">></span>用户等级<span class="token operator">:</span> <span class="token punctuation">{</span>value<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li></li>
<li>
<p>2.当组件中需要使用多个Context时；</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"black"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
        <span class="token punctuation">{</span>
          <span class="token parameter">theme</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>h2 style<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>用户昵称<span class="token operator">:</span> <span class="token punctuation">{</span>value<span class="token punctuation">.</span>nickname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
              <span class="token operator">&lt;</span>h2 style<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">></span>用户等级<span class="token operator">:</span> <span class="token punctuation">{</span>value<span class="token punctuation">.</span>level<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>UserContext<span class="token punctuation">.</span>Consumer<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>接收父组件的值<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"Parent Msg"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>child <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>Child msg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>msg<span class="token punctuation">}</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>child<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Parent<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eventbus" tabindex="-1"><a class="header-anchor" href="#eventbus" aria-hidden="true">#</a> EventBus</h4>
<p>可以适用于任何情况的组件通信，在项目规模不大的情况下，完全可以使用中央事件总线<code v-pre>EventBus</code> 的方式，<code v-pre>EventBus</code>可以比较完美地解决包括父子组件、兄弟组件、隔代组件之间通信.先我们需要实现一个订阅发布类作为单例模块导出，每个需要的组件再进行<code v-pre>import</code>，当然作为<code v-pre>Mixins</code>全局静态横切也可以，或者使用<code v-pre>event</code>库，此外务必注意在组件销毁的时候卸载订阅的事件调用，否则会造成内存泄漏。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add events<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>events常用的API：</p>
<ul>
<li>创建EventEmitter对象：eventBus对象；</li>
<li>发出事件：<code v-pre>eventBus.emit(&quot;事件名称&quot;, 参数列表);</code></li>
<li>监听事件：<code v-pre>eventBus.addListener(&quot;事件名称&quot;, 监听函数)</code>；</li>
<li>移除事件：<code v-pre>eventBus.removeListener(&quot;事件名称&quot;, 监听函数)</code>；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> EventEmitter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"events"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> eventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ProfileHeader</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>按钮<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">btnClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">"headerClick"</span><span class="token punctuation">,</span> <span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token keyword">class</span> <span class="token class-name">Profile</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>ProfileHeader <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>设置<span class="token number">5</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventBus<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">"headerClick"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>headerClick<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">headerClick</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    eventBus<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token string">"headerClick"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>headerClick<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>Profile<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>其他内容<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深入理解setstate" tabindex="-1"><a class="header-anchor" href="#深入理解setstate" aria-hidden="true">#</a> 深入理解setState</h3>
<h5 id="setstate异步更新" tabindex="-1"><a class="header-anchor" href="#setstate异步更新" aria-hidden="true">#</a> setState异步更新</h5>
<ul>
<li>最终打印结果是Hello World；</li>
<li>可见setState是异步的操作，我们并不能在执行完setState之后立马拿到最新的state的结果</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"你好啊,李银河"</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Hello World</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="为什么setstate要设计成异步的" tabindex="-1"><a class="header-anchor" href="#为什么setstate要设计成异步的" aria-hidden="true">#</a> 为什么setState要设计成异步的</h5>
<ul>
<li>
<p><code v-pre>setState</code>设计为异步，可以显著的提升性能；</p>
</li>
<li>
<ul>
<li>如果每次调用 setState都进行一次更新，那么意味着render函数会被频繁调用，界面重新渲染，这样效率是很低的；</li>
<li>最好的办法应该是获取到多个更新，之后进行批量更新；</li>
</ul>
</li>
<li>
<p>如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步；</p>
</li>
<li>
<ul>
<li>state和props不能保持一致性，会在开发中产生很多的问题；</li>
</ul>
</li>
</ul>
<h5 id="什么情况下是同步" tabindex="-1"><a class="header-anchor" href="#什么情况下是同步" aria-hidden="true">#</a> 什么情况下是同步？</h5>
<p>在setTimeout或者原生dom事件中，setState是同步</p>
<h3 id="受控组件和非受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件和非受控组件" aria-hidden="true">#</a> 受控组件和非受控组件</h3>
<h4 id="refs的使用" tabindex="-1"><a class="header-anchor" href="#refs的使用" aria-hidden="true">#</a> Refs的使用</h4>
<p>有时候需要操作DOM.</p>
<h5 id="如何创建ref" tabindex="-1"><a class="header-anchor" href="#如何创建ref" aria-hidden="true">#</a> 如何创建ref</h5>
<ul>
<li>
<p>方式一：传入字符串</p>
</li>
<li>
<ul>
<li>使用时通过 <code v-pre>this.refs.传入的字符串</code>格式获取对应的元素；</li>
</ul>
</li>
<li>
<p>方式二：传入一个对象</p>
</li>
<li>
<ul>
<li>对象是通过 <code v-pre>React.createRef()</code> 方式创建出来的；</li>
<li>使用时获取到创建的对象其中有一个<code v-pre>current</code>属性就是对应的元素；</li>
</ul>
</li>
<li>
<p>方式三：传入一个函数</p>
</li>
<li>
<ul>
<li>该函数会在DOM被挂载时进行回调，这个函数会传入一个 元素对象，我们可以自己保存；</li>
<li>使用时，直接拿到之前保存的元素对象即可；</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent<span class="token punctuation">,</span> createRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>titleRef <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>titleEl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 ref<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>String Ref<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>titleRef<span class="token punctuation">}</span><span class="token operator">></span>Hello Create Ref<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2 ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">element</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>titleEl <span class="token operator">=</span> element<span class="token punctuation">}</span><span class="token operator">></span>Callback Ref<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>

        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>改变文本<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">changeText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>title<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"你好啊,李银河"</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>titleRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"你好啊,李银河"</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>titleEl<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">"你好啊,李银河"</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="受控组件" tabindex="-1"><a class="header-anchor" href="#受控组件" aria-hidden="true">#</a> 受控组件</h4>
<p>在HTML的表单元素中，它们通常自己维护一套<code v-pre>state</code>，并随着用户的输入自己进行<code v-pre>UI</code>上的更新，这种行为是不被我们程序所管控的。而如果将<code v-pre>React</code>里的<code v-pre>state</code>属性和表单元素的值建立依赖关系，再通过<code v-pre>onChange</code>事件与<code v-pre>setState()</code>结合更新<code v-pre>state</code>属性，就能达到控制用户输入过程中表单发生的操作。被<code v-pre>React</code>以这种方式控制取值的表单输入元素就叫做<strong>受控组件</strong>。</p>
<h5 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> input</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">input1</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span>
                    name<span class="token operator">=</span><span class="token string">"username"</span>
                    value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>username<span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">input1</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">username</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"cute"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"你今日相亲对象的类型是: "</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label<span class="token operator">></span>
                    <span class="token literal-property property">你今日相亲对象的类型是</span><span class="token operator">:</span>
                    
                    
                    <span class="token comment">//多选的话multiple={true}</span>
                    <span class="token operator">&lt;</span>select
                        value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token operator">></span>
                        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"sunshine"</span><span class="token operator">></span>阳光<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
                        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"handsome"</span><span class="token operator">></span>帅气<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
                        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"cute"</span><span class="token operator">></span>可爱<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
                        <span class="token operator">&lt;</span>option value<span class="token operator">=</span><span class="token string">"reserved"</span><span class="token operator">></span>高冷<span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"提交"</span> <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="非受控组件" tabindex="-1"><a class="header-anchor" href="#非受控组件" aria-hidden="true">#</a> 非受控组件</h4>
<p>表单数据将交由 DOM 节点来处理。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent<span class="token punctuation">,</span> createRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>usernameRef <span class="token operator">=</span> <span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>
            <span class="token literal-property property">用户</span><span class="token operator">:</span><span class="token operator">&lt;</span>input defaultValue<span class="token operator">=</span><span class="token string">"username"</span> type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"username"</span> ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>usernameRef<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"submit"</span> value<span class="token operator">=</span><span class="token string">"提交"</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>usernameRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟DOM</h2>
<h3 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一：</h3>
<p>1.state数据</p>
<p>2.jsx模板</p>
<p>3.数据+模板结合生成真实的dom，来显示</p>
<p>4.state发生改变</p>
<p>5.数据+模板生成真实的dom，生成真实的dom，替换掉旧的dom。</p>
<h3 id="方式一缺陷" tabindex="-1"><a class="header-anchor" href="#方式一缺陷" aria-hidden="true">#</a> 方式一缺陷</h3>
<p>1.第一次生成了完整的dom片段</p>
<p>2.第二次也生成了完整的dom片段</p>
<p>3.第二次的dom替换了第一次的dom，比较耗性能</p>
<h3 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二：</h3>
<p>1.state数据</p>
<p>2.jsx模板</p>
<p>3.数据+模板结合生成真实的dom，来显示</p>
<p>4.state发生改变</p>
<p>5.数据+模板生成真实的dom，生成真实的dom，并不直接替换掉旧的dom。</p>
<p>6.新的dom和旧的dom做对比，找出差异</p>
<p>7.只用改变了的差异进行替换</p>
<h3 id="方式二缺陷-性能提升并不明显" tabindex="-1"><a class="header-anchor" href="#方式二缺陷-性能提升并不明显" aria-hidden="true">#</a> 方式二缺陷：性能提升并不明显</h3>
<h3 id="于是react提出了虚拟dom-就是一个js对象-用它来描述真实的dom" tabindex="-1"><a class="header-anchor" href="#于是react提出了虚拟dom-就是一个js对象-用它来描述真实的dom" aria-hidden="true">#</a> 于是react提出了虚拟dom(就是一个js对象，用它来描述真实的dom)</h3>
<p>1.state数据</p>
<p>2.jsx模板</p>
<p>3.数据+模板结合生成虚拟的dom</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token operator">&lt;</span>span<span class="token operator">></span>hello word<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.用虚拟dom生成真实的dom,来显示</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'div'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'abc'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'span'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'hello word'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.state发生变化</p>
<p>6.生成新的虚拟dom</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">'div'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">'abc'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'span'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string">'bay bay'</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.比较新旧虚拟dom，找到区别是span中的内容</p>
<p>8.直接操作dom，改变span中的内容</p>
<h2 id="高阶组件" tabindex="-1"><a class="header-anchor" href="#高阶组件" aria-hidden="true">#</a> 高阶组件</h2>
<h3 id="官方的定义" tabindex="-1"><a class="header-anchor" href="#官方的定义" aria-hidden="true">#</a> 官方的定义：</h3>
<p><strong>高阶组件是参数为组件，返回值为新组件的函数</strong></p>
<p>我们可以进行如下的解析：</p>
<ul>
<li>首先， <code v-pre>高阶组件</code> 本身不是一个组件，而是一个函数；</li>
<li>其次，这个函数的参数是一个组件，返回值也是一个组件；</li>
</ul>
<p>高阶组件的调用过程类似于这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> EnhancedComponent <span class="token operator">=</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>高阶函数的编写过程类似于这样：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span><span class="token parameter">WrapperComponent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">NewComponent</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>WrapperComponent<span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        App
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">higherOrderComponent</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高阶组件的使用" tabindex="-1"><a class="header-anchor" href="#高阶组件的使用" aria-hidden="true">#</a> 高阶组件的使用</h3>
<h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2>
<h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>router<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="react-router最主要的api是给我们提供的一些组件" tabindex="-1"><a class="header-anchor" href="#react-router最主要的api是给我们提供的一些组件" aria-hidden="true">#</a> react-router最主要的API是给我们提供的一些组件：</h4>
<ul>
<li>
<p>BrowserRouter或HashRouter</p>
</li>
<li>
<ul>
<li>Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件；</li>
<li>BrowserRouter使用history模式；</li>
<li>HashRouter使用hash模式；</li>
</ul>
</li>
<li>
<p>Link和NavLink：</p>
</li>
<li>
<ul>
<li>通常路径的跳转是使用Link组件，最终会被渲染成a元素；</li>
<li>NavLink是在Link基础之上增加了一些样式属性（后续学习）；</li>
<li>to属性：Link中最重要的属性，用于设置跳转到的路径；</li>
</ul>
</li>
<li>
<p>Route：</p>
</li>
<li>
<ul>
<li>Route用于路径的匹配；</li>
<li>path属性：用于设置匹配到的路径；</li>
<li>component属性：设置匹配到路径后，渲染的组件；</li>
<li>exact：精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件；</li>
</ul>
</li>
</ul>
<h4 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./pages/home'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">'./pages/about'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Profile <span class="token keyword">from</span> <span class="token string">'./pages/profile'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>关于<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/profile"</span><span class="token operator">></span>我的<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>

        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/profile"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Profile<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="navlink的使用" tabindex="-1"><a class="header-anchor" href="#navlink的使用" aria-hidden="true">#</a> NavLink的使用</h4>
<p><strong>路径选中时，对应的a元素变为红色</strong></p>
<p>这个时候，我们要使用NavLink组件来替代Link组件：</p>
<ul>
<li>activeStyle：活跃时（匹配时）的样式；</li>
<li>activeClassName：活跃时添加的class；</li>
<li>exact：是否精准匹配；</li>
</ul>
<p>先演示activeStyle：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/"</span> activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/about"</span> activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>关于<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/profile"</span> activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>我的<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，我们会发现在选中about或profile时，第一个也会变成红色：</p>
<ul>
<li>原因是/路径也匹配到了/about或/profile；</li>
<li>这个时候，我们可以在第一个NavLink中添加上exact属性；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>NavLink exact to<span class="token operator">=</span><span class="token string">"/"</span> activeStyle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认的activeClassName：</p>
<ul>
<li>事实上在默认匹配成功时，NavLink就会添加上一个动态的active class；</li>
<li>所以我们也可以直接编写样式</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a<span class="token punctuation">.</span>active <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果你担心这个class在其他地方被使用了，出现样式的层叠，也可以自定义class</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>NavLink exact to<span class="token operator">=</span><span class="token string">"/"</span> activeClassName<span class="token operator">=</span><span class="token string">"link-active"</span><span class="token operator">></span>首页<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/about"</span> activeClassName<span class="token operator">=</span><span class="token string">"link-active"</span><span class="token operator">></span>关于<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
<span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/profile"</span> activeClassName<span class="token operator">=</span><span class="token string">"link-active"</span><span class="token operator">></span>我的<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="switch的作用" tabindex="-1"><a class="header-anchor" href="#switch的作用" aria-hidden="true">#</a> Switch的作用</h4>
<p>排他，只匹配到点击的路由</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Switch<span class="token operator">></span>
  <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/profile"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Profile<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/:userid"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>User<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Route component<span class="token operator">=</span><span class="token punctuation">{</span>NoMatch<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="redirect" tabindex="-1"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h4>
<p>重定向</p>
<h4 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> PureComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">AboutProduct</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>商品列表<span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>商品列表<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>商品列表<span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/about"</span><span class="token operator">></span>商品<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>

                    <span class="token operator">&lt;</span>Switch<span class="token operator">></span>
                        <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/about"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>AboutProduct<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="手动跳转" tabindex="-1"><a class="header-anchor" href="#手动跳转" aria-hidden="true">#</a> 手动跳转</h4>
<p><strong><code v-pre>JavaScript代码</code>进行跳转有一个前提：必须获取到history对象。</strong></p>
<p>如何可以获取到history的对象呢？两种方式</p>
<ul>
<li>方式一：如果该组件是通过路由直接跳转过来的，那么可以直接获取history、location、match对象；</li>
<li>方式二：如果该组件是一个普通渲染的组件，那么不可以直接获取history、location、match对象；</li>
</ul>
<p>那么如果普通的组件也希望获取对应的对象属性应该怎么做呢？</p>
<ul>
<li>前面我们学习过高阶组件，可以在组件中添加想要的属性；</li>
<li>react-router也是通过高阶组件为我们的组件添加相关的属性的；</li>
</ul>
<p>如果我们希望在App组件中获取到history对象，必须满足以下两个条件：</p>
<ul>
<li>App组件必须包裹在Router组件之内；</li>
<li>App组件使用withRouter高阶组件包裹；</li>
</ul>
<p>index.js代码修改如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.js代码修改如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Switch<span class="token punctuation">,</span> NavLink<span class="token punctuation">,</span> withRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token operator">...</span>省略其他的导入代码

<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">PureComponent</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">...</span>其他代码
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">pushToProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>我的<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

        <span class="token operator">&lt;</span>Switch<span class="token operator">></span>
          <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/about"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>About<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/profile"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Profile<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/:userid"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>User<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route component<span class="token operator">=</span><span class="token punctuation">{</span>NoMatch<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">pushToProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/profile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">withRouter</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="传递参数" tabindex="-1"><a class="header-anchor" href="#传递参数" aria-hidden="true">#</a> 传递参数</h4>
<h5 id="传递参数有三种方式" tabindex="-1"><a class="header-anchor" href="#传递参数有三种方式" aria-hidden="true">#</a> 传递参数有三种方式：</h5>
<ul>
<li>
<h5 id="动态路由的方式" tabindex="-1"><a class="header-anchor" href="#动态路由的方式" aria-hidden="true">#</a> 动态路由的方式；</h5>
<h6 id="动态路由的概念指的是路由中的路径并不会固定" tabindex="-1"><a class="header-anchor" href="#动态路由的概念指的是路由中的路径并不会固定" aria-hidden="true">#</a> 动态路由的概念指的是路由中的路径并不会固定：</h6>
<ul>
<li>
<p>比如<code v-pre>/detail</code>的path对应一个组件Detail；</p>
</li>
<li>
<p>如果我们将path在Route匹配时写成<code v-pre>/detail/:id</code>，那么 <code v-pre>/detail/abc</code>、<code v-pre>/detail/123</code>都可以匹配到该Route，并且进行显示；</p>
</li>
<li>
<p>这个匹配规则，我们就称之为动态路由；</p>
</li>
<li>
<h6 id="this-props-match-params获取参数" tabindex="-1"><a class="header-anchor" href="#this-props-match-params获取参数" aria-hidden="true">#</a> <strong>this.props.match.params</strong>获取参数</h6>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">></span>
 <span class="token operator">...</span>其他Link
  <span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/detail/abc123"</span><span class="token operator">></span>详情<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>

  <span class="token operator">&lt;</span>Switch<span class="token operator">></span>
    <span class="token operator">...</span> 其他Route
    <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/detail/:id"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Detail<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Route component<span class="token operator">=</span><span class="token punctuation">{</span>NoMatch<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<h5 id="search传递参数" tabindex="-1"><a class="header-anchor" href="#search传递参数" aria-hidden="true">#</a> search传递参数；</h5>
</li>
<li>
<p><strong>this.props.location.search</strong>获取参数</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token string">"/detail2?name=why&amp;age=18"</span><span class="token operator">></span>详情<span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>

<span class="token operator">&lt;</span>Switch<span class="token operator">></span>
  <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/detail2"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Detail2<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Switch<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<h5 id="to传入对象" tabindex="-1"><a class="header-anchor" href="#to传入对象" aria-hidden="true">#</a> to传入对象；</h5>
</li>
<li>
<p>可以传入一个对象</p>
</li>
<li>
<p><strong>this.props.location</strong>获取参数</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>NavLink to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
    <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">"/detail2"</span><span class="token punctuation">,</span> 
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kobe"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.98</span><span class="token punctuation">,</span> <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"洛杉矶"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">"?apikey=123"</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
  详情<span class="token number">2</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>NavLink<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="react-router-config" tabindex="-1"><a class="header-anchor" href="#react-router-config" aria-hidden="true">#</a> react-router-config</h4>
<p><strong>路由配置放到一个地方进行集中管理</strong></p>
<h5 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>router<span class="token operator">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="在index-js中引入" tabindex="-1"><a class="header-anchor" href="#在index-js中引入" aria-hidden="true">#</a> 在index.js中引入</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="新建router文件夹-index-js" tabindex="-1"><a class="header-anchor" href="#新建router文件夹-index-js" aria-hidden="true">#</a> 新建router文件夹/index.js</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"../page/home"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> About<span class="token punctuation">,</span> <span class="token punctuation">{</span> AboutMessage<span class="token punctuation">,</span> AboutProduct <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../page/about"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">exact</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> Home<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> About<span class="token punctuation">,</span>
        <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/about"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">exact</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">component</span><span class="token operator">:</span> AboutProduct<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/about/message"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">component</span><span class="token operator">:</span> AboutMessage<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> routes<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redux" tabindex="-1"><a class="header-anchor" href="#redux" aria-hidden="true">#</a> redux</h2>
<h3 id="为什么需要redux什么场景会使用到redux" tabindex="-1"><a class="header-anchor" href="#为什么需要redux什么场景会使用到redux" aria-hidden="true">#</a> 为什么需要<code v-pre>redux</code>什么场景会使用到<code v-pre>redux</code></h3>
<ul>
<li>某个组件的状态，需要共享</li>
<li>某个状态需要在任何地方都可以拿到</li>
<li>一个组件需要改变全局状态</li>
<li>一个组件需要改变另外一个组件的状态</li>
</ul>
<h3 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h3>
<ul>
<li>web应用是一个状态机，视图与状态是一一对应的</li>
<li>所有的状态都保存在一个对象里面</li>
</ul>
<h3 id="纯函数" tabindex="-1"><a class="header-anchor" href="#纯函数" aria-hidden="true">#</a> 纯函数</h3>
<ul>
<li>
<p>确定的输入，一定会产生确定的输出</p>
</li>
<li>
<p>函数执行的过程中不能产生副作用</p>
</li>
<li>
<p>看看几个是否是纯函数的案例</p>
<ul>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//是纯函数，有确定的输出，并且中间没有任何副作用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> foo <span class="token operator">+</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
foo <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//不是纯函数，会影响确定的输出，因为函数依赖外部的一个变量，let这个变量可以改变。如果是const声明的变量就是个纯函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h3 id="认识redux" tabindex="-1"><a class="header-anchor" href="#认识redux" aria-hidden="true">#</a> 认识redux</h3>
<h4 id="redux三大原则" tabindex="-1"><a class="header-anchor" href="#redux三大原则" aria-hidden="true">#</a> redux三大原则</h4>
<ul>
<li>单一数据源    一个 store</li>
<li>state是只读的  唯一修改state中的数据是通过action</li>
<li>使用纯函数来执行修改 通过reducer将旧的state和action联系起来返回新的state</li>
</ul>
<h4 id="redux的核心理念" tabindex="-1"><a class="header-anchor" href="#redux的核心理念" aria-hidden="true">#</a> redux的核心理念</h4>
<ul>
<li>Redux要求我们通过action来更新数据</li>
<li>所有数据的变化，必须通过派发（dispatch）action来更新</li>
<li>action是一个普通的JavaScript对象，用来描述这次更新的type和content</li>
<li>reducer可以将state和action联系起来</li>
<li>reducer做的事情就是将传入的state和action结合起来生成一个新的state</li>
</ul>
<h4 id="redux的基本使用" tabindex="-1"><a class="header-anchor" href="#redux的基本使用" aria-hidden="true">#</a> redux的基本使用</h4>
<h5 id="redux-demo" tabindex="-1"><a class="header-anchor" href="#redux-demo" aria-hidden="true">#</a> redux     demo</h5>
<ul>
<li>
<p>创建store文件夹</p>
</li>
<li>
<p>创建store/index.js文件</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> redux <span class="token keyword">from</span> <span class="token string">'redux'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">'./reducer.js'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> redux<span class="token punctuation">.</span><span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建store/reduce.js文件</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token constant">ADD_NUMBER</span><span class="token punctuation">,</span>
  <span class="token constant">SUB_NUMBER</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants.js'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reducer</span><span class="token punctuation">(</span><span class="token parameter">state <span class="token operator">=</span> initialState<span class="token punctuation">,</span> action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token constant">ADD_NUMBER</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">+</span> action<span class="token punctuation">.</span>num<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token constant">SUB_NUMBER</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token operator">...</span>state<span class="token punctuation">,</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> state<span class="token punctuation">.</span>counter <span class="token operator">-</span> action<span class="token punctuation">.</span>num<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> state<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> reducer<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建store/actionCreators.js文件</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  <span class="token constant">ADD_NUMBER</span><span class="token punctuation">,</span>
  <span class="token constant">SUB_NUMBER</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./constants.js'</span>

<span class="token keyword">const</span> <span class="token function-variable function">addAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">ADD_NUMBER</span><span class="token punctuation">,</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> count
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">subAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token constant">SUB_NUMBER</span><span class="token punctuation">,</span>
  <span class="token literal-property property">num</span><span class="token operator">:</span> count
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  addAction<span class="token punctuation">,</span>
  subAction
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>创建创建store/constants.js文件</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">ADD_NUMBER</span> <span class="token operator">=</span> <span class="token string">"ADD_NUMBER"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">SUB_NUMBER</span> <span class="token operator">=</span> <span class="token string">"SUB_NUMER"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  <span class="token constant">ADD_NUMBER</span><span class="token punctuation">,</span>
  <span class="token constant">SUB_NUMBER</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>记得</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
             <span class="token literal-property property">name</span><span class="token operator">:</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="react中使用redux" tabindex="-1"><a class="header-anchor" href="#react中使用redux" aria-hidden="true">#</a> react中使用redux</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>redux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>
ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> changeName <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./store/action"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">reactRedux</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
                <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>点击<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> state<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">changeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeName</span><span class="token punctuation">(</span><span class="token string">"我儿子"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>reactRedux<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件中的异步请求" tabindex="-1"><a class="header-anchor" href="#组件中的异步请求" aria-hidden="true">#</a> 组件中的异步请求</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://123.207.32.32:8000/home/multidata"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">changeBanners</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// this.props.changeRecommends(data.recommend.list);</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> state<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token literal-property property">banner</span><span class="token operator">:</span> state<span class="token punctuation">.</span>banners<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">changeNames</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeName</span><span class="token punctuation">(</span><span class="token string">"我儿子"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">changeBanners</span><span class="token punctuation">(</span><span class="token parameter">banners</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">functionASYNC</span><span class="token punctuation">(</span>banners<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中间件" tabindex="-1"><a class="header-anchor" href="#中间件" aria-hidden="true">#</a> 中间件</h3>
<h4 id="redux-thunk" tabindex="-1"><a class="header-anchor" href="#redux-thunk" aria-hidden="true">#</a> redux-thunk</h4>
<h5 id="redux中如何可以进行异步的操作呢" tabindex="-1"><a class="header-anchor" href="#redux中如何可以进行异步的操作呢" aria-hidden="true">#</a> redux中如何可以进行异步的操作呢？</h5>
<ul>
<li>答案就是使用<strong>中间件（Middleware）</strong>；</li>
<li>学习过Express或Koa框架的童鞋对中间件的概念一定不陌生；</li>
<li>在这类框架中，Middleware可以帮助我们在请求和响应之间嵌入一些操作的代码，比如cookie解析、日志记录、文件压缩等操作；</li>
</ul>
<h5 id="redux也引入了中间件-middleware-的概念" tabindex="-1"><a class="header-anchor" href="#redux也引入了中间件-middleware-的概念" aria-hidden="true">#</a> redux也引入了中间件（Middleware）的概念：</h5>
<ul>
<li>这个中间件的目的是在<code v-pre>dispatch的action</code>和<code v-pre>最终达到的reducer</code>之间，扩展一些自己的代码；</li>
<li>比如日志记录、调用异步接口、添加代码调试功能等等；</li>
</ul>
<h5 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1" aria-hidden="true">#</a> 安装</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add redux<span class="token operator">-</span>thunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="redux引入了中间件-middleware-的概念" tabindex="-1"><a class="header-anchor" href="#redux引入了中间件-middleware-的概念" aria-hidden="true">#</a> redux引入了中间件（Middleware）的概念：</h5>
<ul>
<li>这个中间件的目的是在<code v-pre>dispatch的action</code>和<code v-pre>最终达到的reducer</code>之间，扩展一些自己的代码；</li>
<li>比如日志记录、调用异步接口、添加代码调试功能等等；</li>
</ul>
<h5 id="实操-1" tabindex="-1"><a class="header-anchor" href="#实操-1" aria-hidden="true">#</a> 实操</h5>
<ul>
<li>
<p>在store/index中引入redux-thunk</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> thunkMiddleware <span class="token keyword">from</span> <span class="token string">'redux-thunk'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span>applyMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在store/index中应用中间件</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> enhancer <span class="token operator">=</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunkMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> enhancer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>定义返回一个函数的action</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">getHomeMultidataAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://123.207.32.32:8000/home/multidata"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeBannersAction</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">changeRecommendsAction</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>recommend<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>在组件中引入getHomeMultidataAction函数</p>
</li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">getHomeMultidata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token parameter">dispatch</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
 
    <span class="token function">getHomeMultidata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">getHomeMultidataAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="redux-saga" tabindex="-1"><a class="header-anchor" href="#redux-saga" aria-hidden="true">#</a> redux-saga</h4>
<h5 id="安装-2" tabindex="-1"><a class="header-anchor" href="#安装-2" aria-hidden="true">#</a> 安装</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add redux<span class="token operator">-</span>saga
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//在store/index</span>
<span class="token keyword">import</span> createSagaMiddleware <span class="token keyword">from</span> <span class="token string">'redux-saga'</span><span class="token punctuation">;</span>
<span class="token comment">// 通过createSagaMiddleware函数来创建saga中间件</span>
<span class="token keyword">const</span> sagaMiddleware <span class="token operator">=</span> <span class="token function">createSagaMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer</span>
<span class="token keyword">const</span> enhancer <span class="token operator">=</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span><span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunkMiddleware<span class="token punctuation">,</span> sagaMiddleware<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 必须启动saga中间件，并且传入其要监听的generator</span>
sagaMiddleware<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>mySaga<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建一个独立的saga-js文件" tabindex="-1"><a class="header-anchor" href="#创建一个独立的saga-js文件" aria-hidden="true">#</a> 创建一个独立的saga.js文件</h5>
<ul>
<li>takeEvery：可以传入多个监听的actionType，每一个都可以被执行（对应有一个takeLastest，会取消前面的）</li>
<li>put：在saga中派发action不再是通过dispatch，而是通过put；</li>
<li>all：可以在yield的时候put多个action；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> takeEvery<span class="token punctuation">,</span> put<span class="token punctuation">,</span> all <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux-saga/effects"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">FETCH_HOME_MULTIDATA</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./type"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> functionASYNC <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./action"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">fetchHomeMultidata</span><span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">yield</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://123.207.32.32:8000/home/multidata"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token keyword">yield</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token function">put</span><span class="token punctuation">(</span><span class="token function">functionASYNC</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>banner<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// put(changeRecommendsAction(data.recommend.list)),</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">mySaga</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">yield</span> <span class="token function">takeEvery</span><span class="token punctuation">(</span><span class="token constant">FETCH_HOME_MULTIDATA</span><span class="token punctuation">,</span> fetchHomeMultidata<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> mySaga<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>
<h3 id="purecomponent和component的区别" tabindex="-1"><a class="header-anchor" href="#purecomponent和component的区别" aria-hidden="true">#</a> PureComponent和component的区别</h3>
<h2 id="hook" tabindex="-1"><a class="header-anchor" href="#hook" aria-hidden="true">#</a> HOOK</h2>
<h3 id="为什么需要hook" tabindex="-1"><a class="header-anchor" href="#为什么需要hook" aria-hidden="true">#</a> 为什么需要hook</h3>
<p>它可以让我们在不编写class的情况下使用state以及其他的React特性（比如生命周期）</p>
<h3 id="函数式组件" tabindex="-1"><a class="header-anchor" href="#函数式组件" aria-hidden="true">#</a> 函数式组件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Counter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>当前计数<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解释上面的代码" tabindex="-1"><a class="header-anchor" href="#解释上面的代码" aria-hidden="true">#</a> 解释上面的代码</h4>
<ul>
<li>
<p>useState来自react，需要从react中导入，它是一个hook；</p>
</li>
<li>
<ul>
<li>元素一：当前状态的值（第一调用为初始化值）；</li>
<li>元素二：设置状态值的函数；</li>
<li>参数：初始化值，如果不设置为undefined；</li>
<li>返回值：数组，包含两个元素；</li>
</ul>
</li>
<li>
<p>点击button按钮后，会完成两件事情：</p>
</li>
<li>
<ul>
<li>调用setCount，设置一个新的值；</li>
<li>组件重新渲染，并且根据新的值返回DOM结构；</li>
</ul>
</li>
</ul>
<h3 id="注意规则" tabindex="-1"><a class="header-anchor" href="#注意规则" aria-hidden="true">#</a> 注意规则</h3>
<ul>
<li>只能在<strong>函数最外层</strong>调用 Hook。不要在循环、条件判断或者子函数中调用。</li>
<li>只能在 <strong>React 的函数组件</strong>中调用 Hook。不要在其他 JavaScript 函数中调用。自定义hook中也可以调用。</li>
</ul>
<h3 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> UseState</h3>
<p><strong>state hook的api就是useState</strong></p>
<ul>
<li>**<code v-pre>useState</code>**会帮助我们定义一个 <code v-pre>state变量</code>，<code v-pre>useState</code> 是一种新方法，它与 class 里面的 <code v-pre>this.state</code> 提供的功能完全相同。一般来说，在函数退出后变量就会”消失”，而 state 中的变量会被 React 保留。</li>
<li>**<code v-pre>useState</code>**接受唯一一个参数，在第一次组件被调用时使用来作为初始化值。（如果没有传递参数，那么初始化值为undefined）。</li>
<li>**<code v-pre>useState</code>**是一个数组，我们可以通过数组的解构，来完成赋值会非常方便。</li>
</ul>
<h4 id="复杂的usestate" tabindex="-1"><a class="header-anchor" href="#复杂的usestate" aria-hidden="true">#</a> 复杂的usestate</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"科比"</span><span class="token punctuation">,</span> <span class="token string">"乔丹"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newdata <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>data<span class="token punctuation">]</span><span class="token punctuation">;</span>
        newdata<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"库里"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setData</span><span class="token punctuation">(</span>newdata<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
                <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token punctuation">{</span><span class="token comment">/* &lt;button
                onClick={(e) => {
                    setData([...data, "库里"]);
                }}
            >
                操作
            &lt;/button> */</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span><span class="token operator">></span>操作<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h3>
<h4 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h4>
<ul>
<li>Effect Hook 可以让你来完成一些类似于class中生命周期的功能；</li>
<li>事实上，类似于网络请求、手动更新DOM、一些事件的监听，都是React更新DOM的一些副作用（Side Effects）；</li>
<li>所以对于完成这些功能的Hook被称之为 Effect Hook；</li>
</ul>
<h4 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>计数<span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setData</span><span class="token punctuation">(</span>data <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>加<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解释上面代码" tabindex="-1"><a class="header-anchor" href="#解释上面代码" aria-hidden="true">#</a> 解释上面代码</h4>
<p><strong>useEffect的解析：</strong></p>
<ul>
<li>通过useEffect的Hook，可以告诉React需要在渲染后执行某些操作；</li>
<li>useEffect要求我们传入一个<code v-pre>回调函数</code>，在React执行完更新DOM操作之后，就<code v-pre>会回调这个函数</code>；</li>
<li>默认情况下，无论是第一次渲染之后，还是每次更新之后，都会执行这个 <code v-pre>回调函数</code>；</li>
</ul>
<h4 id="清除effect" tabindex="-1"><a class="header-anchor" href="#清除effect" aria-hidden="true">#</a> 清除Effect</h4>
<p>传入回调函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"DOM被移除时会回调"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">EffectHookClear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">当前计数: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"每次DOM更新时会回调"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"DOM被移除时会回调"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>当前计数<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">-</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用多个effect" tabindex="-1"><a class="header-anchor" href="#使用多个effect" aria-hidden="true">#</a> 使用多个Effect</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MultiUseEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"网络请求"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"修改DOM"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"事件监听"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"取消监听"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>MultiUseEffect<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="effect性能优化" tabindex="-1"><a class="header-anchor" href="#effect性能优化" aria-hidden="true">#</a> Effect性能优化</h4>
<p>默认情况下，useEffect的回调函数会在每次渲染时都重新执行，但是这会导致两个问题：</p>
<ul>
<li>某些代码我们只是希望执行一次即可，类似于componentDidMount和componentWillUnmount中完成的事情；（比如网络请求、订阅和取消订阅）；</li>
<li>另外，多次执行也会导致一定的性能问题；</li>
</ul>
<p>我们如何决定useEffect在什么时候应该执行和什么时候不应该执行呢？</p>
<ul>
<li>useEffect实际上有两个参数：</li>
<li>参数一：执行的回调函数；</li>
<li>参数二：该useEffect在哪些state发生变化时，才重新执行；（受谁的影响）</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"执行了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> data<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"移除了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="context-hook" tabindex="-1"><a class="header-anchor" href="#context-hook" aria-hidden="true">#</a> Context Hook</h3>
<h3 id="usereducer" tabindex="-1"><a class="header-anchor" href="#usereducer" aria-hidden="true">#</a> useReducer</h3>
<p><strong>useReducer仅仅是useState的一种替代方案</strong>：</p>
<ul>
<li>在某些场景下，如果state的处理逻辑比较复杂，我们可以通过useReducer来对其进行拆分；</li>
<li>或者这次修改的state需要依赖之前的state时，也可以使用；</li>
</ul>
<h3 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h3>
<p>useCallback实际的目的是为了进行性能的优化。</p>
<p>如何进行性能的优化呢？</p>
<ul>
<li>useCallback会返回一个函数的 memoized（记忆的） 值；</li>
<li>在依赖不变的情况下，多次定义的时候，返回的值是相同的；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> memoizedCallback <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h3>
<h3 id="useref" tabindex="-1"><a class="header-anchor" href="#useref" aria-hidden="true">#</a> useRef</h3>
<h3 id="useimperativehandle" tabindex="-1"><a class="header-anchor" href="#useimperativehandle" aria-hidden="true">#</a> useImperativeHandle</h3>
<h3 id="uselayouteffect" tabindex="-1"><a class="header-anchor" href="#uselayouteffect" aria-hidden="true">#</a> useLayoutEffect</h3>
<h3 id="自定义hook" tabindex="-1"><a class="header-anchor" href="#自定义hook" aria-hidden="true">#</a> 自定义hook</h3>
<p><strong>函数以特殊的方式命名，以 <code v-pre>use</code> 开头即可</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">useLoggingLife</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">组件被创建了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">组件被销毁了</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目-网易云音乐" tabindex="-1"><a class="header-anchor" href="#项目-网易云音乐" aria-hidden="true">#</a> 项目（网易云音乐）</h2>
<h3 id="创建项目-1" tabindex="-1"><a class="header-anchor" href="#创建项目-1" aria-hidden="true">#</a> 创建项目</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>create<span class="token operator">-</span>react<span class="token operator">-</span>app 项目名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>刪掉不需要的文件，只保留index.js和App.js</li>
<li>在src目錄下创建<strong>assets</strong>文件夹放一些静态资源</li>
<li>在src目录下创建common文件夹放一些共用的方法</li>
<li>在src目录下创建page文件夹</li>
<li>在src目录下创建component文件夹放共用的组件</li>
<li>在src目录下创建store文件夹放状态管理</li>
<li>在src目录下创建router文件夹</li>
<li>在src目录下创建request请求文件夹</li>
<li>在src目录下创建utils文件夹</li>
</ul>
<h3 id="设置初始化css样式" tabindex="-1"><a class="header-anchor" href="#设置初始化css样式" aria-hidden="true">#</a> 设置初始化css样式</h3>
<h4 id="安装-3" tabindex="-1"><a class="header-anchor" href="#安装-3" aria-hidden="true">#</a> 安装</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add normalize<span class="token punctuation">.</span>css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="在assets文件中创建css文件夹-reset-css" tabindex="-1"><a class="header-anchor" href="#在assets文件中创建css文件夹-reset-css" aria-hidden="true">#</a> 在assets文件中创建css文件夹/reset.css</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token keyword">import</span> <span class="token string">"~normalize.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="在index-js中引入reset-css" tabindex="-1"><a class="header-anchor" href="#在index-js中引入reset-css" aria-hidden="true">#</a> 在index.js中引入reset.css</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"@/assets/css/reset.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置别名" tabindex="-1"><a class="header-anchor" href="#设置别名" aria-hidden="true">#</a> 设置别名</h3>
<h4 id="安装craco-craco" tabindex="-1"><a class="header-anchor" href="#安装craco-craco" aria-hidden="true">#</a> 安装craco/craco</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add  @cracco<span class="token operator">/</span>craco
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="package-json" tabindex="-1"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token comment">//   "start": "react-scripts start",</span>
<span class="token comment">//   "build": "react-scripts build",</span>
<span class="token comment">//   "test": "react-scripts test",</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"craco start"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"craco build"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"craco test"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在根目录下创建craco-config-js" tabindex="-1"><a class="header-anchor" href="#在根目录下创建craco-config-js" aria-hidden="true">#</a> 在根目录下创建craco.config.js</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">webpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"@"</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/components"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建路由" tabindex="-1"><a class="header-anchor" href="#创建路由" aria-hidden="true">#</a> 创建路由</h3>
<h4 id="安装-4" tabindex="-1"><a class="header-anchor" href="#安装-4" aria-hidden="true">#</a> 安装</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>router<span class="token operator">-</span>dom
yarn add react<span class="token operator">-</span>router<span class="token operator">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在app-js中引入" tabindex="-1"><a class="header-anchor" href="#在app-js中引入" aria-hidden="true">#</a> 在app.js中引入</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> renderRoutes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-config"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HashRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">"./router"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>       <span class="token operator">&lt;</span>HashRouter<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>头部<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">renderRoutes</span><span class="token punctuation">(</span>routes<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>底部<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>HashRouter<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h3>
<h4 id="安装-5" tabindex="-1"><a class="header-anchor" href="#安装-5" aria-hidden="true">#</a> 安装</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add styled<span class="token operator">-</span>componentsj
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="项目-简书" tabindex="-1"><a class="header-anchor" href="#项目-简书" aria-hidden="true">#</a> 项目（简书）</h2>
<h3 id="创建项目-2" tabindex="-1"><a class="header-anchor" href="#创建项目-2" aria-hidden="true">#</a> 创建项目</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>create<span class="token operator">-</span>react<span class="token operator">-</span>app jianshu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="css设置" tabindex="-1"><a class="header-anchor" href="#css设置" aria-hidden="true">#</a> css设置</h3>
<h4 id="初始化样式" tabindex="-1"><a class="header-anchor" href="#初始化样式" aria-hidden="true">#</a> 初始化样式</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add normalize<span class="token punctuation">.</span>css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在assets文件中创建css文件夹/reset.css</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~normalize.css"</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在index.js中引入reset.css</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>import <span class="token string">"@/assets/css/reset.css"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用css-in-js" tabindex="-1"><a class="header-anchor" href="#使用css-in-js" aria-hidden="true">#</a> 使用css in js</h4>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add styled<span class="token operator">-</span>components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">"styled-components"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用阿里字体图标" tabindex="-1"><a class="header-anchor" href="#使用阿里字体图标" aria-hidden="true">#</a> 使用阿里字体图标</h4>
<p>在index.html中引入阿里字体图标在线的地址</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>&lt;link rel=<span class="token string">"stylesheet"</span> href=<span class="token string">"//at.alicdn.com/t/font_2891196_ih4wjyrl0x.css"</span>>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;i className=</span><span class="token punctuation">{</span>[<span class="token string">"iconfont"</span> + item.icon]<span class="token punctuation">}</span>>&lt;/i>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="设置别名-1" tabindex="-1"><a class="header-anchor" href="#设置别名-1" aria-hidden="true">#</a> 设置别名</h3>
<p>安装craco/craco</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add @craco<span class="token operator">/</span>craco
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改package.json</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token comment">//   "start": "react-scripts start",</span>
<span class="token comment">//   "build": "react-scripts build",</span>
<span class="token comment">//   "test": "react-scripts test",</span>
  <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"craco start"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"craco build"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"craco test"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建craco.config.js配置文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">webpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"@"</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"src/components"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用redux-react-redux-redux-thunk" tabindex="-1"><a class="header-anchor" href="#使用redux-react-redux-redux-thunk" aria-hidden="true">#</a> 使用redux,react-redux ,redux-thunk</h3>
<h4 id="安装-6" tabindex="-1"><a class="header-anchor" href="#安装-6" aria-hidden="true">#</a> 安装</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add redux react<span class="token operator">-</span>redux redux<span class="token operator">-</span>thunk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4>
<p>1.在index.js中引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">"./store"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.在使用的组件中引入</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-redux"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">searchBar</span><span class="token operator">:</span> state<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function">handleA</span><span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">testAjax</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.中间件的使用  在store中的index.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span> compose <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"redux"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reducer <span class="token keyword">from</span> <span class="token string">"./reducer"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> thunkMiddleware <span class="token keyword">from</span> <span class="token string">"redux-thunk"</span><span class="token punctuation">;</span>
<span class="token comment">// composeEnhancers函数</span>
<span class="token keyword">const</span> composeEnhancers <span class="token operator">=</span>
    window<span class="token punctuation">.</span><span class="token function">__REDUX_DEVTOOLS_EXTENSION_COMPOSE__</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">trace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">||</span> compose<span class="token punctuation">;</span>
<span class="token keyword">const</span> storeEnhancer <span class="token operator">=</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunkMiddleware<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span>reducer<span class="token punctuation">,</span> <span class="token function">composeEnhancers</span><span class="token punctuation">(</span>storeEnhancer<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="redux系列的代码结构优化" tabindex="-1"><a class="header-anchor" href="#redux系列的代码结构优化" aria-hidden="true">#</a> redux系列的代码结构优化</h3>
<h3 id="immutablejs" tabindex="-1"><a class="header-anchor" href="#immutablejs" aria-hidden="true">#</a> ImmutableJS</h3>
<h2 id="项目-管理后台" tabindex="-1"><a class="header-anchor" href="#项目-管理后台" aria-hidden="true">#</a> 项目（管理后台）</h2>
</div></template>
