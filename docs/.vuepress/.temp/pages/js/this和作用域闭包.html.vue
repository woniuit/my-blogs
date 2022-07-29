<template><div><h2 id="浏览器的工作原理" tabindex="-1"><a class="header-anchor" href="#浏览器的工作原理" aria-hidden="true">#</a> 浏览器的工作原理</h2>
<p><img src="/1.png" alt="1"></p>
<h3 id="浏览器渲染过程" tabindex="-1"><a class="header-anchor" href="#浏览器渲染过程" aria-hidden="true">#</a> 浏览器渲染过程</h3>
<p>在这个执行过程中，HTML解析的时候遇到了JavaScript标签，会停止解析HTML，而去加载和执行JavaScript代码</p>
<p><img src="/2.png" alt="2"></p>
<h2 id="js执行的原理" tabindex="-1"><a class="header-anchor" href="#js执行的原理" aria-hidden="true">#</a> js执行的原理</h2>
<h3 id="_1-代码执行之前-会先代码解析" tabindex="-1"><a class="header-anchor" href="#_1-代码执行之前-会先代码解析" aria-hidden="true">#</a> 1.代码执行之前，会先代码解析</h3>
<p>v8引擎内部会帮我们创建一个全局对象（GlobalObject）包含Date、Array、String、Number、setTimeout、setInterval，window等等。</p>
<h4 id="看代码示例分析" tabindex="-1"><a class="header-anchor" href="#看代码示例分析" aria-hidden="true">#</a> 看代码示例分析</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"why"</span>
<span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码解析的时候v8引擎会<strong>创建一个全局的对象</strong>,看下面的代码示例</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> globalObject <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">String</span><span class="token operator">:</span> <span class="token string">"类"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">Date</span><span class="token operator">:</span> <span class="token string">"类"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">setTimeount</span><span class="token operator">:</span> <span class="token string">"函数"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">window</span><span class="token operator">:</span> globalObject<span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>  <span class="token comment">//解析上面代码的时候代码还没有运行</span>
  <span class="token literal-property property">num1</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">num2</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-运行代码" tabindex="-1"><a class="header-anchor" href="#_2-运行代码" aria-hidden="true">#</a> 2.运行代码</h3>
<p>v8为了执行代码, v8引擎内部会有一个<strong>执行上下文栈</strong>(Execution Context Stack, ECStack)(调用栈)</p>
<p>因为我们执行的是全局代码, 为了全局代码能够正常的执行, 需要创建 <strong>全局执行上下文</strong>(Global Execution Context)(全局代码需要被执行时才会创建)</p>
<h4 id="看代码和画图示例分析" tabindex="-1"><a class="header-anchor" href="#看代码和画图示例分析" aria-hidden="true">#</a> 看代码和画图示例分析</h4>
<p>那么我们会有这么一段代码，来分析一下它是怎么执行的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"why"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span>
<span class="token keyword">var</span> num1 <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">var</span> num2 <span class="token operator">=</span> <span class="token number">30</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> num1 <span class="token operator">+</span> num2
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.会先进行代码解析，代码解析之前还会创建一个执行上下文栈，然后创建全局执行上下文。</p>
<p>创建一个全局的<code v-pre>globalObject</code>对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>globalObject<span class="token operator">=</span><span class="token punctuation">{</span>
  window<span class="token punctuation">,</span>
  Array
  <span class="token operator">...</span><span class="token punctuation">.</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token keyword">undefined</span>
  <span class="token literal-property property">num1</span><span class="token operator">:</span><span class="token keyword">undefined</span>
  <span class="token literal-property property">num2</span><span class="token operator">:</span><span class="token keyword">undefined</span>
  <span class="token literal-property property">result</span><span class="token operator">:</span><span class="token keyword">undefined</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.然后运行我们的代码</p>
<p>2.1会先创建一个执行上下文栈</p>
<img src="/Snipaste_2021-11-05_10-18-30.png" alt="Snipaste_2021-11-05_10-18-30"  />
<p>2.2创建执行上下文  <strong>GO</strong>低码解析然后代码运行赋值</p>
<p><img src="/1-1.png" alt="1-1"></p>
<h3 id="_3-带有函数的执行过程" tabindex="-1"><a class="header-anchor" href="#_3-带有函数的执行过程" aria-hidden="true">#</a> 3.带有函数的执行过程</h3>
<h4 id="看代码示例分析-1" tabindex="-1"><a class="header-anchor" href="#看代码示例分析-1" aria-hidden="true">#</a> 看代码示例分析</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"why"</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先会进行代码解析，代码解析之前还会创建一个执行上下文栈，然后创建全局执行上下文。</p>
<h5 id="_1-创建执行上下文栈-调用栈" tabindex="-1"><a class="header-anchor" href="#_1-创建执行上下文栈-调用栈" aria-hidden="true">#</a> 1.创建执行上下文栈（调用栈）</h5>
<h5 id="_2-执行前会先进行代码解析-不会赋值-也叫变量的作用域提升" tabindex="-1"><a class="header-anchor" href="#_2-执行前会先进行代码解析-不会赋值-也叫变量的作用域提升" aria-hidden="true">#</a> 2.执行前会先进行代码解析，不会赋值，也叫<strong>变量的作用域提升</strong></h5>
<p>2.1代码解析的时候遇到了函数，那么给函数开辟一个内存foo:0Xa00(如下图)</p>
<p>2.2存储的空间里放了函数执行的代码块和指定了父级作用域</p>
<p><strong>2.3在代码解析的时候就会确定好父级作用域</strong></p>
<h5 id="_3-代码执行-会对变量赋值或者执行其他函数" tabindex="-1"><a class="header-anchor" href="#_3-代码执行-会对变量赋值或者执行其他函数" aria-hidden="true">#</a> 3.代码执行，会对变量赋值或者执行其他函数</h5>
<p>3.1函数代码执行的时候会生成一个新的函数执行上下文，当该函数执行完的时候回把这个上下文移除调用栈</p>
<h5 id="_4-遇到函数时会创建一个函数的执行上下文-看下面图分析" tabindex="-1"><a class="header-anchor" href="#_4-遇到函数时会创建一个函数的执行上下文-看下面图分析" aria-hidden="true">#</a> 4.遇到函数时会创建一个<strong>函数的执行上下文</strong>，看下面图分析!</h5>
<p>4.1 代码解析。。。和上面的步骤一样</p>
<p><img src="/1-2.png" alt="1-2"></p>
<h5 id="_5-函数的执行上下文包含三部分内容" tabindex="-1"><a class="header-anchor" href="#_5-函数的执行上下文包含三部分内容" aria-hidden="true">#</a> 5.函数的执行上下文包含三部分内容：</h5>
<p>p第一部分：在解析函数成为AST树结构时，会创建一个Activation Object（AO）： ü AO中包含形参、arguments、函数定义和指向函数对象、定义的变量；</p>
<p>p第二部分：作用域链：由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找；</p>
<p>p第三部分：this绑定的值：这个我们后续会详细解析</p>
<h3 id="_4-作用域" tabindex="-1"><a class="header-anchor" href="#_4-作用域" aria-hidden="true">#</a> 4.作用域</h3>
<p>全局作用域和函数作用域。</p>
<p>全局作用域：</p>
<p>代码在程序的任何地方都能被访问，window 对象的内置属性都拥有全局作用域。</p>
<p>函数作用域：</p>
<p>在固定的代码片段才能被访问</p>
<p><strong>如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链</strong></p>
<h4 id="作用域面试题" tabindex="-1"><a class="header-anchor" href="#作用域面试题" aria-hidden="true">#</a> 作用域面试题</h4>
<p>1</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">100</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  n <span class="token operator">=</span> <span class="token number">200</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token comment">//200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">undefined</span>
<span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h2 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h2>
<p>堆：obj</p>
<p>栈：基本</p>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3>
<h4 id="函数作为参数的使用" tabindex="-1"><a class="header-anchor" href="#函数作为参数的使用" aria-hidden="true">#</a> 函数作为参数的使用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> calcFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calcFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">-</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">mul</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">*</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">var</span> m <span class="token operator">=</span> <span class="token number">20</span>
<span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token number">30</span>

<span class="token function">calc</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">,</span> mul<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数作为返回值的使用" tabindex="-1"><a class="header-anchor" href="#函数作为返回值的使用" aria-hidden="true">#</a> 函数作为返回值的使用</h4>
<h5 id="案例一" tabindex="-1"><a class="header-anchor" href="#案例一" aria-hidden="true">#</a> 案例一</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//function bar</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//bar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例二" tabindex="-1"><a class="header-anchor" href="#案例二" aria-hidden="true">#</a> 案例二</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count <span class="token operator">+</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> add<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> add5 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add5</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> add10 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> add100 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高阶函数的含义" tabindex="-1"><a class="header-anchor" href="#高阶函数的含义" aria-hidden="true">#</a> 高阶函数的含义</h4>
<p>把一个函数如果接受另外一个函数作为参数,或者该函数会返回另外一个函数作为返回值的函数, 那么这个函数就称之为是一个高阶函数</p>
<h3 id="闭包的定义" tabindex="-1"><a class="header-anchor" href="#闭包的定义" aria-hidden="true">#</a> 闭包的定义</h3>
<p>一个普通的函数function，如果它可以访问外层作用于的自由变量，那么这个函数就是一个闭包.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"bar"</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//foo</span>
<span class="token comment">//清除</span>
fn<span class="token operator">=</span><span class="token keyword">null</span>
foo<span class="token operator">=</span><span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="内存泄露" tabindex="-1"><a class="header-anchor" href="#内存泄露" aria-hidden="true">#</a> 内存泄露</h4>
<p>因为bar函数指向了它的父级作用域，有人指向它，它就不能销毁。</p>
<p><img src="/1-3.png" alt="1-3"></p>
<h3 id="闭包应用" tabindex="-1"><a class="header-anchor" href="#闭包应用" aria-hidden="true">#</a> 闭包应用</h3>
<p>var this=than 定时器中</p>
<h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<h3 id="默认绑定" tabindex="-1"><a class="header-anchor" href="#默认绑定" aria-hidden="true">#</a> 默认绑定</h3>
<h4 id="独立函数调用" tabindex="-1"><a class="header-anchor" href="#独立函数调用" aria-hidden="true">#</a> 独立函数调用</h4>
<h5 id="案例一-1" tabindex="-1"><a class="header-anchor" href="#案例一-1" aria-hidden="true">#</a> 案例一</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例二-1" tabindex="-1"><a class="header-anchor" href="#案例二-1" aria-hidden="true">#</a> 案例二</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window</span>
    <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window</span>
    <span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例三" tabindex="-1"><a class="header-anchor" href="#案例三" aria-hidden="true">#</a> 案例三</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例四" tabindex="-1"><a class="header-anchor" href="#案例四" aria-hidden="true">#</a> 案例四</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> foo
<span class="token punctuation">}</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> obj<span class="token punctuation">.</span>foo
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例五" tabindex="-1"><a class="header-anchor" href="#案例五" aria-hidden="true">#</a> 案例五</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> bar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// window</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式绑定" tabindex="-1"><a class="header-anchor" href="#隐式绑定" aria-hidden="true">#</a> 隐式绑定</h3>
<h5 id="案例一-2" tabindex="-1"><a class="header-anchor" href="#案例一-2" aria-hidden="true">#</a> 案例一</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> foo<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// obj对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="案例二-2" tabindex="-1"><a class="header-anchor" href="#案例二-2" aria-hidden="true">#</a> 案例二</h5>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"obj1"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"obj2"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> obj1<span class="token punctuation">.</span>foo<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj2<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示绑定" tabindex="-1"><a class="header-anchor" href="#显示绑定" aria-hidden="true">#</a> 显示绑定</h3>
<p>call apply bind</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// foo.call(obj)</span>
<span class="token comment">// foo.apply(obj)</span>
<span class="token comment">// foo.apply("aaaa")</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>call和apply的区别</strong></p>
<p>多个参数的时候apply是数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2<span class="token punctuation">,</span> num3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2 <span class="token operator">+</span> num3<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">"call"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">sum</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">"apply"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new绑定" tabindex="-1"><a class="header-anchor" href="#new绑定" aria-hidden="true">#</a> new绑定</h3>
<p>我们通过一个new关键字调用一个函数时(构造器), 这个时候this是在调用这个构造器时创建出来的对象</p>
<p>this = 创建出来的对象</p>
<p>这个绑定过程就是new 绑定</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"kobe"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">.</span>name<span class="token punctuation">,</span> p2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组中的this" tabindex="-1"><a class="header-anchor" href="#数组中的this" aria-hidden="true">#</a> 数组中的this</h3>
<p>如果没有传后面的abc就是指向window，传了就指向abc</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">,</span> <span class="token string">"nba"</span><span class="token punctuation">]</span>
names<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"abc"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h3>
<h4 id="显示高于隐式" tabindex="-1"><a class="header-anchor" href="#显示高于隐式" aria-hidden="true">#</a> 显示高于隐式</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"obj"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.call/apply的显示绑定高于隐式绑定</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="new高于隐式" tabindex="-1"><a class="header-anchor" href="#new高于隐式" aria-hidden="true">#</a> new高于隐式</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"obj"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// new的优先级高于隐式绑定</span>
<span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">obj<span class="token punctuation">.</span>foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="new高于显式" tabindex="-1"><a class="header-anchor" href="#new高于显式" aria-hidden="true">#</a> new高于显式</h4>
<h4 id="忽略显示绑定" tabindex="-1"><a class="header-anchor" href="#忽略显示绑定" aria-hidden="true">#</a> 忽略显示绑定</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// apply/call/bind: 当传入null/undefined时, 自动将this绑定成全局对象</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="间接函数引用" tabindex="-1"><a class="header-anchor" href="#间接函数引用" aria-hidden="true">#</a> 间接函数引用</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"obj1"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>   <span class="token comment">//window</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"obj2"</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// obj2.bar = obj1.foo</span>
<span class="token comment">// obj2.bar()</span>

<span class="token punctuation">(</span>obj2<span class="token punctuation">.</span>bar <span class="token operator">=</span> obj1<span class="token punctuation">.</span>foo<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="箭头函数下的this" tabindex="-1"><a class="header-anchor" href="#箭头函数下的this" aria-hidden="true">#</a> 箭头函数下的this</h3>
<p>箭头函数没有this指向，this指向上层作用域。就算用显示绑定也没有this</p>
<h3 id="this面试题" tabindex="-1"><a class="header-anchor" href="#this面试题" aria-hidden="true">#</a> this面试题</h3>
<h4 id="题一" tabindex="-1"><a class="header-anchor" href="#题一" aria-hidden="true">#</a> 题一</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"window"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"person"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">sayName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> sss <span class="token operator">=</span> person<span class="token punctuation">.</span>sayName<span class="token punctuation">;</span>
  <span class="token function">sss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window独立函数调用</span>
  person<span class="token punctuation">.</span><span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//person隐式调用</span>
  <span class="token punctuation">(</span>person<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">person隐式调用</span>
  <span class="token punctuation">(</span>b <span class="token operator">=</span> person<span class="token punctuation">.</span>sayName<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//window赋值表达式(独立函数调用)</span>
<span class="token punctuation">}</span>
<span class="token function">sayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="题二" tabindex="-1"><a class="header-anchor" href="#题二" aria-hidden="true">#</a> 题二</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'person1'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo3</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo4</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'person2'</span> <span class="token punctuation">}</span>

person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//person1 隐式绑定</span>
person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//person2 显示绑定优先级大于隐式绑定</span>

person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window 没有this,指向上级作用域</span>
person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window 没有this,指向上级作用域</span>

person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window 独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//window  独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//person2 最终调用返回函数式，使用的是显示绑定</span>

person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//person1  箭头函数不绑定this，上层作用域this是person1.foo4()执行后的结果</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//person2  上层作用域被显示的绑定了person2</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">;</span>person2  person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=</span>person1  <span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="题三" tabindex="-1"><a class="header-anchor" href="#题三" aria-hidden="true">#</a> 题三</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo4</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person1'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person2'</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1</span>
person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1</span>
person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person1</span>

person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person2</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="题四" tabindex="-1"><a class="header-anchor" href="#题四" aria-hidden="true">#</a> 题四</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'obj'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person1'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person2'</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//obj</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person2</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//obj</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="题五" tabindex="-1"><a class="header-anchor" href="#题五" aria-hidden="true">#</a> 题五</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'person1'</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo3</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">foo4</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'person2'</span> <span class="token punctuation">}</span>

person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1  隐式</span>
person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2 显示</span>

person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window 箭头函数找上一层</span>
person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//window 箭头函数 call无法改变 还是找到上一层</span>

person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window 独立函数</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window 独立函数 person1.foo3.call(person2)= person2, person2()独立函数调用</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1 箭头函数找上一层</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person2 箭头函数找上一层</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token comment">//person1 箭头函数找上一层，call无法改变this指向</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="题六" tabindex="-1"><a class="header-anchor" href="#题六" aria-hidden="true">#</a> 题六</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo1</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo3</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">foo4</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person1'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person2'</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1</span>
person1<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1</span>
person1<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person1</span>

person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span><span class="token function">foo3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span>  <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person1</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//person2</span>
person1<span class="token punctuation">.</span><span class="token function">foo4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="题七" tabindex="-1"><a class="header-anchor" href="#题七" aria-hidden="true">#</a> 题七</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">'window'</span>
<span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name  <span class="token comment">//这个name和形参有关</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'obj'</span><span class="token punctuation">,</span> <span class="token comment">//注意这个name和形参无关</span>
    <span class="token function-variable function">foo1</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">foo2</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person1'</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'person2'</span><span class="token punctuation">)</span>

person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//window</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//person2</span>

person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//obj</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//person2</span>
person1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span><span class="token function">foo2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person2<span class="token punctuation">)</span> <span class="token comment">//obj</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="call-apply-bind解析" tabindex="-1"><a class="header-anchor" href="#call-apply-bind解析" aria-hidden="true">#</a> call-apply-bind解析</h2>
<h3 id="手写call的实现" tabindex="-1"><a class="header-anchor" href="#手写call的实现" aria-hidden="true">#</a> 手写call的实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="手写apply的实现" tabindex="-1"><a class="header-anchor" href="#手写apply的实现" aria-hidden="true">#</a> 手写apply的实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="手写bind的实现" tabindex="-1"><a class="header-anchor" href="#手写bind的实现" aria-hidden="true">#</a> 手写bind的实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="伪数组转数组" tabindex="-1"><a class="header-anchor" href="#伪数组转数组" aria-hidden="true">#</a> 伪数组转数组</h3>
<h4 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> newArr2 <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> newArr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式三" tabindex="-1"><a class="header-anchor" href="#方式三" aria-hidden="true">#</a> 方式三</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> newArr4 <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方式四" tabindex="-1"><a class="header-anchor" href="#方式四" aria-hidden="true">#</a> 方式四</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">var</span> newArr5 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arguments<span class="token punctuation">]</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr5<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="纯函数" tabindex="-1"><a class="header-anchor" href="#纯函数" aria-hidden="true">#</a> 纯函数</h2>
<h3 id="纯函数的概念" tabindex="-1"><a class="header-anchor" href="#纯函数的概念" aria-hidden="true">#</a> 纯函数的概念</h3>
<ul>
<li>确定的输入，一定会产出确定的输出</li>
<li>函数执行的过程中不能产生副作用</li>
</ul>
<h4 id="副作用" tabindex="-1"><a class="header-anchor" href="#副作用" aria-hidden="true">#</a> 副作用</h4>
<p>表示在执行一个函数时，除了返回函数值之外，还对调用函数产生 了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储</p>
<h2 id="柯里化" tabindex="-1"><a class="header-anchor" href="#柯里化" aria-hidden="true">#</a> 柯里化</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<p>只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span>n<span class="token punctuation">,</span>x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> m<span class="token operator">+</span>n<span class="token operator">+</span>x<span class="token operator">+</span>y
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">)</span>

<span class="token comment">//柯里化的过程</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter">m</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          m<span class="token operator">+</span>n<span class="token operator">+</span>x<span class="token operator">+</span>y
        <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">bar</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>

<span class="token comment">// 简化柯里化的代码</span>
<span class="token keyword">var</span> <span class="token function-variable function">sum2</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token parameter">y</span> <span class="token operator">=></span> <span class="token parameter">z</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum2</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token function-variable function">sum3</span> <span class="token operator">=</span> <span class="token parameter">x</span> <span class="token operator">=></span> <span class="token parameter">y</span> <span class="token operator">=></span> <span class="token parameter">z</span> <span class="token operator">=></span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum3</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="柯里化函数的作用" tabindex="-1"><a class="header-anchor" href="#柯里化函数的作用" aria-hidden="true">#</a> 柯里化函数的作用</h3>
<p>一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理；我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果。</p>
<h4 id="单一职责" tabindex="-1"><a class="header-anchor" href="#单一职责" aria-hidden="true">#</a> 单一职责</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">2</span>
  y <span class="token operator">=</span> y <span class="token operator">*</span> <span class="token number">2</span>
  z <span class="token operator">=</span> z <span class="token operator">*</span> z
  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//一个函数可以处理完成，但是如果x=x+2或者y=y+2需要很多行代码才能处理的时候，就需要下面的代码来进行处理了。每个函数都有自己的职责，叫单一职责。</span>


<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">2</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    y <span class="token operator">=</span> y <span class="token operator">*</span> <span class="token number">2</span>

    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">z</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      z <span class="token operator">=</span> z <span class="token operator">*</span> z

      <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="逻辑的复用例" tabindex="-1"><a class="header-anchor" href="#逻辑的复用例" aria-hidden="true">#</a> 逻辑的复用例</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// function sum(m, n) {</span>
<span class="token comment">//   return m + n</span>
<span class="token comment">// }</span>

<span class="token comment">// // 假如在程序中,我们经常需要把5和另外一个数字进行相加</span>
<span class="token comment">// console.log(sum(5, 10))</span>
<span class="token comment">// console.log(sum(5, 14))</span>
<span class="token comment">// console.log(sum(5, 1100))</span>
<span class="token comment">// console.log(sum(5, 555))</span>

<span class="token keyword">function</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  count <span class="token operator">=</span> count <span class="token operator">*</span> count

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> count <span class="token operator">+</span> num
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// var result = makeAdder(5)(10)</span>
<span class="token comment">// console.log(result)</span>
<span class="token keyword">var</span> adder5 <span class="token operator">=</span> <span class="token function">makeAdder</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
<span class="token function">adder5</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token function">adder5</span><span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
<span class="token function">adder5</span><span class="token punctuation">(</span><span class="token number">1100</span><span class="token punctuation">)</span>
<span class="token function">adder5</span><span class="token punctuation">(</span><span class="token number">555</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="柯里化函数的实现" tabindex="-1"><a class="header-anchor" href="#柯里化函数的实现" aria-hidden="true">#</a> 柯里化函数的实现</h4>
<h2 id="组合函数" tabindex="-1"><a class="header-anchor" href="#组合函数" aria-hidden="true">#</a> 组合函数</h2>
<p>概念</p>
<p>组合（Compose）函数是在JavaScript开发过程中一种对函数的使用技巧、模式。</p>
<p>比如我们现在需要对某一个数据进行函数的调用，执行两个函数fn1和fn2，这两个函数是依次执行的，</p>
<p>那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复</p>
<p>那么是否可以将这两个函数组合起来，自动依次调用呢</p>
<p>这个过程就是对函数的组合，我们称之为 组合函数（Compose Function）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">double</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">**</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token function">double</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment">// 实现最简单的组合函数</span>
<span class="token keyword">function</span> <span class="token function">composeFn</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">n</span><span class="token punctuation">(</span><span class="token function">m</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> newFn <span class="token operator">=</span> <span class="token function">composeFn</span><span class="token punctuation">(</span>double<span class="token punctuation">,</span> square<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">newFn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
