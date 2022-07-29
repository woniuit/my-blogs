<template><div><h1 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h1>
<h3 id="类组件-官方不再推荐" tabindex="-1"><a class="header-anchor" href="#类组件-官方不再推荐" aria-hidden="true">#</a> 类组件(官方不再推荐)</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>约定说明</strong></p>
<ol>
<li><strong>类名称也必须以大写字母开头</strong></li>
<li>类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性</li>
<li>类组件必须提供 render 方法<strong>render 方法必须有返回值，表示该组件的 UI 结构</strong></li>
</ol>
<h4 id="初始化状态" tabindex="-1"><a class="header-anchor" href="#初始化状态" aria-hidden="true">#</a> 初始化状态</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span>计数器<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读取状态" tabindex="-1"><a class="header-anchor" href="#读取状态" aria-hidden="true">#</a> 读取状态</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化状态</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 读取状态</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span>计数器<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改状态" tabindex="-1"><a class="header-anchor" href="#修改状态" aria-hidden="true">#</a> 修改状态</h4>
<p><code v-pre>this.setState({ 要修改的部分数据 })</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token comment">// 定义数据</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 定义修改数据的方法</span>
  <span class="token function-variable function">setCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 使用数据 并绑定事件</span>
  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>setCount<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h4>
<p><code v-pre>componentDidMount</code>会在组件挂载后（插入 DOM 树中）立即调用。</p>
<p>componentDidMount中通常进行哪里操作呢？</p>
<ul>
<li>依赖于DOM的操作可以在这里进行；</li>
<li>在此处发送网络请求就最好的地方；（官方建议）</li>
<li>可以在此处添加一些订阅（会在componentWillUnmount取消订阅）；</li>
</ul>
<p><code v-pre>componentDidUpdate</code>会在更新后会被立即调用，首次渲染不会执行此方法。</p>
<ul>
<li>当组件更新后，可以在此处对 DOM 进行操作；</li>
<li>如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求；（例如，当 props 未发生变化时，则不会执行网络请求）。</li>
</ul>
<p><code v-pre>componentWillUnmount</code>会在组件卸载及销毁之前直接调用。</p>
<ul>
<li>在此方法中执行必要的清理操作；</li>
<li>例如，清除 timer，取消网络请求或清除在 <code v-pre>componentDidMount()</code> 中创建的订阅等；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"调用constructor方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"调用render方法"</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>当前计数<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter <span class="token operator">&lt;=</span> <span class="token number">5</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>HYTestCpn<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>counter <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"调用componentDidMount方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"调用componentDidUpdate方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"调用componentWillUnmount方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数组件" tabindex="-1"><a class="header-anchor" href="#函数组件" aria-hidden="true">#</a> 函数组件</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>约定说明</strong></p>
<ol>
<li>组件的名称<strong>必须首字母大写</strong>，react内部会根据这个来判断是组件还是普通的HTML标签</li>
<li>函数组件<strong>必须有返回值</strong>，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null</li>
<li>组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的<strong>返回值</strong>就是对应的内容</li>
<li>使用函数名称作为组件标签名称，可以成对出现也可以自闭合</li>
</ol>
</div></template>
