<template><div><h1 id="ts学习笔记" tabindex="-1"><a class="header-anchor" href="#ts学习笔记" aria-hidden="true">#</a> TS学习笔记</h1>
<h2 id="编译环境安装" tabindex="-1"><a class="header-anchor" href="#编译环境安装" aria-hidden="true">#</a> 编译环境安装</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install typescript <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看版本</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>tsc <span class="token operator">--</span>version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行ts-node" tabindex="-1"><a class="header-anchor" href="#运行ts-node" aria-hidden="true">#</a> 运行ts-node</h2>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install ts<span class="token operator">-</span>node <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install tslib @types<span class="token operator">/</span>node <span class="token operator">-</span>g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ts<span class="token operator">-</span>node 文件名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="变量声明" tabindex="-1"><a class="header-anchor" href="#变量声明" aria-hidden="true">#</a> 变量声明</h2>
<p><strong>var/let/const 标识符: 数据类型 = 赋值</strong></p>
<p>比如</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="变量的类型推断" tabindex="-1"><a class="header-anchor" href="#变量的类型推断" aria-hidden="true">#</a> 变量的类型推断</h2>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> message<span class="token operator">=</span><span class="token string">"hello"</span>
message<span class="token operator">=</span><span class="token number">123</span> <span class="token comment">//会报错</span>
<span class="token comment">//因为上面推断是字符串类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2>
<h3 id="number类型" tabindex="-1"><a class="header-anchor" href="#number类型" aria-hidden="true">#</a> number类型</h3>
<p>数字类型是我们开发中经常使用的类型，TypeScript和JavaScript一样，不区分整数类型（int）和浮点型 （double），统一为number类型。</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span>
num <span class="token operator">=</span> <span class="token number">222</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="boolean类型" tabindex="-1"><a class="header-anchor" href="#boolean类型" aria-hidden="true">#</a> boolean类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> flag<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span>
flag <span class="token operator">=</span> <span class="token number">20</span> <span class="token operator">></span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string类型" tabindex="-1"><a class="header-anchor" href="#string类型" aria-hidden="true">#</a> string类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> message1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'hello world'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时也支持ES6的模板字符串来拼接变量和字符串。</p>
<h3 id="array类型" tabindex="-1"><a class="header-anchor" href="#array类型" aria-hidden="true">#</a> Array类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> names1<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'abc'</span><span class="token punctuation">,</span><span class="token string">'cba'</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> names2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'abc'</span><span class="token punctuation">,</span><span class="token string">'cba'</span><span class="token punctuation">]</span> <span class="token comment">// 推荐</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object类型" tabindex="-1"><a class="header-anchor" href="#object类型" aria-hidden="true">#</a> object类型</h3>
<p>object 类型是：TypeScript 2.2 引入的新类型，它用于表示非原始类型。Object 类的所有实例都继承了 Object 接口中的所有属性。</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">ObjectConstructor</span> <span class="token punctuation">{</span>
  <span class="token function">create</span><span class="token punctuation">(</span>o<span class="token operator">:</span> object <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> proto <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// OK</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// OK</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">1337</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// Error</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// Error</span>
Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"oops"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-类型" tabindex="-1"><a class="header-anchor" href="#object-类型" aria-hidden="true">#</a> Object 类型</h3>
<p>Object 类型：它是所有 Object 类的实例的类型，它由以下两个接口来定义：</p>
<ul>
<li>Object 接口定义了 Object.prototype 原型对象上的属性；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Object</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">constructor</span><span class="token operator">:</span> Function<span class="token punctuation">;</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
  <span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>v<span class="token operator">:</span> PropertyKey<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>v<span class="token operator">:</span> Object<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token function">propertyIsEnumerable</span><span class="token punctuation">(</span>v<span class="token operator">:</span> PropertyKey<span class="token punctuation">)</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>ObjectConstructor 接口定义了 Object 类的属性。</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">ObjectConstructor</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** Invocation via `new` */</span>
  <span class="token keyword">new</span><span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> Object<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** Invocation via function calls */</span>
  <span class="token punctuation">(</span>value<span class="token operator">?</span><span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  readonly prototype<span class="token operator">:</span> Object<span class="token punctuation">;</span>
  <span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>o<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">;</span>
  <span class="token comment">// ···</span>
<span class="token punctuation">}</span>

declare <span class="token keyword">var</span> <span class="token literal-property property">Object</span><span class="token operator">:</span> ObjectConstructor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> {} 类型</h3>
<p>{} 类型描述了一个没有成员的对象。当你试图访问这样一个对象的任意属性时，TypeScript 会产生一个编译时错误。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Type {}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Error: Property 'prop' does not exist on type '{}'.</span>
obj<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token string">"semlinker"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，你仍然可以使用在 Object 类型上定义的所有属性和方法，这些属性和方法可通过 JavaScript 的原型链隐式地使用：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Type {}</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// "[object Object]"</span>
obj<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="undefined-和-null-类型" tabindex="-1"><a class="header-anchor" href="#undefined-和-null-类型" aria-hidden="true">#</a> undefined 和 null 类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> n1<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> n2<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any类型" tabindex="-1"><a class="header-anchor" href="#any类型" aria-hidden="true">#</a> any类型</h3>
<p>在某些情况下，我们确实无法确定一个变量的类型，并且可能它会发生一些变化，这个时候我们可以使用any类型。</p>
<ul>
<li>我们可以对any类型的变量进行任何的操作，包括获取不存在的属性、方法</li>
<li>我们给一个any类型的变量赋值任何的值，比如数字、字符串的值</li>
</ul>
<h3 id="unknown类型" tabindex="-1"><a class="header-anchor" href="#unknown类型" aria-hidden="true">#</a> unknown类型</h3>
<p>它用于描述类型不确定的变量</p>
<p>unknown类型只能赋值给any和unknown类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// unknown类型只能赋值给any和unknown类型</span>
<span class="token comment">// any类型可以赋值给任意类型</span>

<span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span> <span class="token comment">// 最好不要使用any</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    result <span class="token operator">=</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> result<span class="token punctuation">;</span> <span class="token comment">//报错</span>
<span class="token keyword">let</span> num<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> result<span class="token punctuation">;</span> <span class="token comment">//报错</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="void类型" tabindex="-1"><a class="header-anchor" href="#void类型" aria-hidden="true">#</a> void类型</h3>
<p>指定一个函数是没有返回值的，那么它的返回值就是void类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num1 <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="never类型" tabindex="-1"><a class="header-anchor" href="#never类型" aria-hidden="true">#</a> never类型</h3>
<p>表示永远不会发生值的类型</p>
<ul>
<li>如果一个函数中是一个死循环或者抛出一个异常，那么这个函数会返回东西吗</li>
<li>不会，那么写void类型或者其他类型作为返回值类型都不合适，我们就可以使用never类型</li>
</ul>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code> <span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tuple元组类型" tabindex="-1"><a class="header-anchor" href="#tuple元组类型" aria-hidden="true">#</a> tuple元组类型</h3>
<ul>
<li>元组中每个元素都有自己特性的类型，根据索引值获取到的值可以确定对应的类型</li>
<li>数组中通常建议存放相同类型的元素，不同类型的元素是不推荐放在数组中。（可以放在对象或者元组 中）</li>
</ul>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> info<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的参数类型" tabindex="-1"><a class="header-anchor" href="#函数的参数类型" aria-hidden="true">#</a> 函数的参数类型</h3>
<p>函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型</p>
<h3 id="参数的类型注解" tabindex="-1"><a class="header-anchor" href="#参数的类型注解" aria-hidden="true">#</a> 参数的类型注解</h3>
<p>声明函数时，可以在每个参数后添加类型注解，以声明函数接受的参数类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">321</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数的返回值类型" tabindex="-1"><a class="header-anchor" href="#函数的返回值类型" aria-hidden="true">#</a> 函数的返回值类型</h3>
<p>在开发中,通常情况下可以不写返回值的类型(自动推导)</p>
<h3 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h3>
<p>如果我们希望限定一个函数接受的参数是一个对象，这个时候要如何限定呢</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// Point: x/y -> 对象类型</span>
<span class="token comment">// {x: number, y: number}</span>
<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可选类型" tabindex="-1"><a class="header-anchor" href="#可选类型" aria-hidden="true">#</a> 可选类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Point: x/y/z -> 对象类型</span>
<span class="token comment">// {x: number, y: number, z?: number}</span>
<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> <span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>z<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">printPoint</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">321</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token number">111</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="联合类型" tabindex="-1"><a class="header-anchor" href="#联合类型" aria-hidden="true">#</a> 联合类型</h3>
<ul>
<li>联合类型是由两个或者多个其他类型组成的类型</li>
<li>表示可以是这些类型中的任何一个值</li>
<li>联合类型中的每一个类型被称之为联合成员</li>
</ul>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// number|string 联合类型</span>
<span class="token keyword">function</span> <span class="token function">printID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用联合类型的值时, 需要特别的小心</span>
    <span class="token comment">// narrow: 缩小</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// TypeScript帮助确定id一定是string类型</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">printID</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printID</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printID</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型别名" tabindex="-1"><a class="header-anchor" href="#类型别名" aria-hidden="true">#</a> 类型别名</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// type用于定义类型别名(type alias)</span>
<span class="token keyword">type</span> <span class="token class-name">IDType</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">PointType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    z<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">printId</span><span class="token punctuation">(</span>id<span class="token operator">:</span> IDType<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">printPoint</span><span class="token punctuation">(</span>point<span class="token operator">:</span> PointType<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型断言as" tabindex="-1"><a class="header-anchor" href="#类型断言as" aria-hidden="true">#</a> 类型断言as</h3>
<p>有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。</p>
<p>通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。</p>
<p>类型断言有两种形式：</p>
<ol>
<li></li>
</ol>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code>值 <span class="token keyword">as</span> 类型
<span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>someValue <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li></li>
</ol>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token operator">&lt;</span>类型<span class="token operator">></span>值
<span class="token keyword">let</span> someValue<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token string">"this is a string"</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>string</span><span class="token punctuation">></span></span><span class="token plain-text">someValue).length;
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="非空类型断言" tabindex="-1"><a class="header-anchor" href="#非空类型断言" aria-hidden="true">#</a> 非空类型断言</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// message? -> undefined | string</span>
<span class="token keyword">function</span> <span class="token function">printMessageLength</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// if (message) {</span>
  <span class="token comment">//   console.log(message.length)</span>
  <span class="token comment">// }</span>
  <span class="token comment">// vue3源码</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token operator">!</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">printMessageLength</span><span class="token punctuation">(</span><span class="token string">"aaaa"</span><span class="token punctuation">)</span>
<span class="token function">printMessageLength</span><span class="token punctuation">(</span><span class="token string">"hello world"</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可选链" tabindex="-1"><a class="header-anchor" href="#可选链" aria-hidden="true">#</a> 可选链</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    friend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        girlFriend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> info<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
    friend<span class="token operator">:</span> <span class="token punctuation">{</span>
        name<span class="token operator">:</span> <span class="token string">"kobe"</span><span class="token punctuation">,</span>
        girlFriend<span class="token operator">:</span> <span class="token punctuation">{</span>
            name<span class="token operator">:</span> <span class="token string">"lily"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 另外一个文件中</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// console.log(info.friend!.name)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>friend<span class="token operator">?.</span>girlFriend<span class="token operator">?.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="和-的作用" tabindex="-1"><a class="header-anchor" href="#和-的作用" aria-hidden="true">#</a> ??和!!的作用</h3>
<p>!!操作符：</p>
<ul>
<li>将一个其他类型转换成boolean类型；</li>
<li>类似于Boolean(变量)的方式；</li>
</ul>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">"Hello World"</span>

<span class="token comment">// const flag = Boolean(message)</span>
<span class="token comment">// console.log(flag)</span>

<span class="token keyword">const</span> flag <span class="token operator">=</span> <span class="token operator">!</span><span class="token operator">!</span>message
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>??操作符</p>
<p>它是ES11增加的新特性</p>
<p>空值合并操作符（??）是一个逻辑操作符，当操作符的左侧是 null 或者 undefined 时，返回其右侧操作数， 否则返回左侧操作数</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">let</span> message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> content <span class="token operator">=</span> message <span class="token operator">??</span> <span class="token string">"你好啊, 李银河"</span><span class="token punctuation">;</span>
<span class="token comment">// const content = message ? message: "你好啊, 李银河"</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字面量类型" tabindex="-1"><a class="header-anchor" href="#字面量类型" aria-hidden="true">#</a> 字面量类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// "Hello World"也是可以作为类型的, 叫做字面量类型</span>
<span class="token keyword">const</span> message<span class="token operator">:</span> <span class="token string">"Hello World"</span> <span class="token operator">=</span> <span class="token string">"Hello World"</span><span class="token punctuation">;</span>

<span class="token comment">// let num: 123 = 123</span>
<span class="token comment">// num = 321</span>

<span class="token comment">// 字面量类型的意义, 就是必须结合联合类型</span>
<span class="token keyword">type</span> <span class="token class-name">Alignment</span> <span class="token operator">=</span> <span class="token string">"left"</span> <span class="token operator">|</span> <span class="token string">"right"</span> <span class="token operator">|</span> <span class="token string">"center"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> align<span class="token operator">:</span> Alignment <span class="token operator">=</span> <span class="token string">"left"</span><span class="token punctuation">;</span>
align <span class="token operator">=</span> <span class="token string">"right"</span><span class="token punctuation">;</span>
align <span class="token operator">=</span> <span class="token string">"center"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类型缩小-类型守卫" tabindex="-1"><a class="header-anchor" href="#类型缩小-类型守卫" aria-hidden="true">#</a> 类型缩小(类型守卫)</h3>
<p>什么是类型缩小呢？</p>
<ul>
<li>类型缩小的英文是 Type Narrowing；</li>
<li>我们可以通过类似于 typeof padding === &quot;number&quot; 的判断语句，来改变TypeScript的执行路径；</li>
<li>在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小;</li>
<li>而我们编写的 typeof padding === &quot;number 可以称之为 类型保护（type guards）；</li>
</ul>
<p>常见的类型保护有如下几种</p>
<ul>
<li>typeof</li>
<li>平等缩小（比如===、!==）</li>
<li>instanceof</li>
<li>in</li>
</ul>
<h4 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">IDType</span> <span class="token operator">=</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">printID</span><span class="token punctuation">(</span>id<span class="token operator">:</span> IDType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> id <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="平等缩小" tabindex="-1"><a class="header-anchor" href="#平等缩小" aria-hidden="true">#</a> 平等缩小</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">"left"</span> <span class="token operator">|</span> <span class="token string">"right"</span> <span class="token operator">|</span> <span class="token string">"top"</span> <span class="token operator">|</span> <span class="token string">"bottom"</span>
<span class="token keyword">function</span> <span class="token function">printDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">'left'</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token operator">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">printTime</span><span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>time <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span><span class="token function">toUTCString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="in" tabindex="-1"><a class="header-anchor" href="#in" aria-hidden="true">#</a> in</h4>
<p>Javascript 有一个运算符，用于确定对象是否具有带名称的属性：in运算符</p>
<p>如果指定的属性在指定的对象或其原型链中，则in 运算符返回true；</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">Fish</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Dog</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">running</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">walk</span><span class="token punctuation">(</span>animal<span class="token operator">:</span> Fish <span class="token operator">|</span> Dog<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'swimming'</span> <span class="token keyword">in</span> animal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    animal<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数类型" tabindex="-1"><a class="header-anchor" href="#函数类型" aria-hidden="true">#</a> 函数类型</h2>
<h3 id="函数的类型" tabindex="-1"><a class="header-anchor" href="#函数的类型" aria-hidden="true">#</a> 函数的类型</h3>
<p>1.函数作为参数时, 在参数中如何编写类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">FooFnType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span>fn<span class="token operator">:</span> FooFnType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.定义常量时, 编写函数的类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">AddFnType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span>
<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">AddFnType</span> <span class="token operator">=</span> <span class="token punctuation">(</span>a1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> a2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a1 <span class="token operator">+</span> a2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="函数类型的案例" tabindex="-1"><a class="header-anchor" href="#函数类型的案例" aria-hidden="true">#</a> 函数类型的案例</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result1 <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a1<span class="token punctuation">,</span> a2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a1 <span class="token operator">+</span> a2
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span>

<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>a1<span class="token punctuation">,</span> a2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a1 <span class="token operator">*</span> a2
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数的可选类型" tabindex="-1"><a class="header-anchor" href="#参数的可选类型" aria-hidden="true">#</a> 参数的可选类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// 可选类型是必须写在必选类型的后面的</span>
<span class="token comment">// y -> undefined | number</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// 必传参数 - 有默认值的参数 - 可选参数</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> x<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数" aria-hidden="true">#</a> 剩余参数</h3>
<p>从ES6开始，JavaScript也支持剩余参数，剩余参数语法允许我们将一个不定数量的参数放到一个数组中</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>initalNum<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> total <span class="token operator">=</span> initalNum
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    total <span class="token operator">+=</span> num
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> total
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数重载" tabindex="-1"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">/**
 * 通过联合类型有两个缺点:
 *  1.进行很多的逻辑判断(类型缩小)
 *  2.返回值的类型依然是不能确定
 */</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>a1<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span> a2<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a1 <span class="token operator">===</span> <span class="token string">"number"</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> a2 <span class="token operator">===</span> <span class="token string">"number"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a1 <span class="token operator">+</span> a2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> a1 <span class="token operator">===</span> <span class="token string">"string"</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> a2 <span class="token operator">===</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a1 <span class="token operator">+</span> a2
  <span class="token punctuation">}</span>

  <span class="token comment">// return a1 + a2;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// 函数的重载: 函数的名称相同, 但是参数不同的几个函数, 就是函数的重载</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 没函数体</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> num1 <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> num2 <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num1<span class="token punctuation">.</span>length <span class="token operator">+</span> num2<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> result2 <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span>

<span class="token comment">// 在函数的重载中, 实现函数是不能直接被调用的</span>
<span class="token comment">// add({name: "why"}, {age: 18})</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h2>
<h3 id="可推导的this" tabindex="-1"><a class="header-anchor" href="#可推导的this" aria-hidden="true">#</a> 可推导的this</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// this是可以被推导出来 info对象(TypeScript推导出来)</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" eating"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

info<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this的不明确类型" tabindex="-1"><a class="header-anchor" href="#this的不明确类型" aria-hidden="true">#</a> this的不明确类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> info<span class="token operator">=</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span><span class="token string">'why'</span><span class="token punctuation">,</span>
  sayHello
<span class="token punctuation">}</span>
info<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码运行会报错的</p>
<ul>
<li>这里我们再次强调一下，TypeScript进行类型检测的目的是让我们的代码更加的安全</li>
<li>所以这里对于 sayHello 的调用来说，我们虽然将其放到了info中，通过info去调用，this依然是指向info对象的</li>
<li>但是对于TypeScript编译器来说，这个代码是非常不安全的，因为我们也有可能直接调用函数，或者通过别的对象来 调用函数</li>
</ul>
<h3 id="指定this的类型" tabindex="-1"><a class="header-anchor" href="#指定this的类型" aria-hidden="true">#</a> 指定this的类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">ThisType</span> <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">eating</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">:</span> ThisType<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" eating"</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  eating<span class="token operator">:</span> eating<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 隐式绑定</span>
info<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token string">"哈哈哈"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示绑定</span>
<span class="token function">eating</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"kobe"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"呵呵呵"</span><span class="token punctuation">)</span>
<span class="token function">eating</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"james"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"嘿嘿嘿"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类的使用" tabindex="-1"><a class="header-anchor" href="#类的使用" aria-hidden="true">#</a> 类的使用</h2>
<h3 id="类的定义" tabindex="-1"><a class="header-anchor" href="#类的定义" aria-hidden="true">#</a> 类的定义</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" eating"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的继承" tabindex="-1"><a class="header-anchor" href="#类的继承" aria-hidden="true">#</a> 类的继承</h3>
<p>使用extends关键字来实现继承，子类中使用super来访问父类</p>
<p><strong>extends</strong></p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">""</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"eating"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    sno<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"studying"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stu<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"coderwhy"</span><span class="token punctuation">;</span>
stu<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//coderwhy</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//10</span>
stu<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//eating</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>super访问父类方法</strong></p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"eating 100行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    sno<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> sno<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// super调用父类的构造器</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sno <span class="token operator">=</span> sno<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"student eating"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"studying"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> why
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token number">18</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>sno<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token number">111</span>

stu<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> student eating     eating <span class="token number">100</span>行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的多态" tabindex="-1"><a class="header-anchor" href="#类的多态" aria-hidden="true">#</a> 类的多态</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"animal action"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"dog running!!!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Fish</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"fish swimming"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// class Person extends Animal {</span>

<span class="token comment">// }</span>

<span class="token comment">// animal: dog/fish</span>
<span class="token comment">// 多态的目的是为了写出更加具备通用性的代码</span>
<span class="token keyword">function</span> <span class="token function">makeActions</span><span class="token punctuation">(</span>animals<span class="token operator">:</span> Animal<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    animals<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>animal<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        animal<span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">makeActions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的成员修饰符" tabindex="-1"><a class="header-anchor" href="#类的成员修饰符" aria-hidden="true">#</a> 类的成员修饰符</h3>
<p>类的属性和方法支持三种修饰符： public、private、protected</p>
<h4 id="public" tabindex="-1"><a class="header-anchor" href="#public" aria-hidden="true">#</a> public</h4>
<p>修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的</p>
<h4 id="private" tabindex="-1"><a class="header-anchor" href="#private" aria-hidden="true">#</a> private</h4>
<p>修饰的是仅在同一类中可见、私有的属性或方法</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//报错  因为是私有的，只能在内部访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="protected" tabindex="-1"><a class="header-anchor" href="#protected" aria-hidden="true">#</a> protected</h4>
<p>修饰的是仅在类自身及子类中可见、受保护的属性或方法</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">protected</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"123"</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name  <span class="token comment">//通过this来访问</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="只读属性" tabindex="-1"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h3>
<p><strong>readonly</strong></p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.只读属性是可以在构造器中赋值, 赋值之后就不可以修改</span>
  <span class="token comment">// 2.属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">readonly</span> friend<span class="token operator">?</span><span class="token operator">:</span> Person
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> friend<span class="token operator">?</span><span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>friend <span class="token operator">=</span> friend
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"kobe"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>friend<span class="token punctuation">)</span>

<span class="token comment">// 不可以直接修改friend</span>
<span class="token comment">// p.friend = new Person("james")</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>friend<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  p<span class="token punctuation">.</span>friend<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">30</span>
<span class="token punctuation">}</span> 

<span class="token comment">// p.name = "123"</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getters-setter" tabindex="-1"><a class="header-anchor" href="#getters-setter" aria-hidden="true">#</a> getters-setter</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> _name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 访问器setter/getter</span>
    <span class="token comment">// setter</span>
    <span class="token keyword">set</span> <span class="token function">name</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> newName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// getter</span>
    <span class="token keyword">get</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"coderwhy"</span><span class="token punctuation">;</span>  <span class="token comment">//获取的是set name</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的静态成员" tabindex="-1"><a class="header-anchor" href="#类的静态成员" aria-hidden="true">#</a> 类的静态成员</h3>
<p>通过关键字static来定义，可以直接通过类来访问</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> time<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"20:00"</span>

  <span class="token keyword">static</span> <span class="token function">attendClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"去学习~"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Student<span class="token punctuation">.</span>time<span class="token punctuation">)</span>
Student<span class="token punctuation">.</span><span class="token function">attendClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3>
<p>抽象类是使用abstract声明的类</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token function">makeArea</span><span class="token punctuation">(</span>shape<span class="token operator">:</span> Shape<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> shape<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">abstract</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> width<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">private</span> height<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> width
    <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
  <span class="token punctuation">}</span>

  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> r<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>r<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>r <span class="token operator">=</span> r
  <span class="token punctuation">}</span>

  <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>r <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>r <span class="token operator">*</span> <span class="token number">3.14</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> rectangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">makeArea</span><span class="token punctuation">(</span>rectangle<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">makeArea</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// makeArea(new Shape())</span>

<span class="token comment">// makeArea(123)</span>
<span class="token comment">// makeArea("123")</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类的类型" tabindex="-1"><a class="header-anchor" href="#类的类型" aria-hidden="true">#</a> 类的类型</h3>
<p>类本身也是可以作为一种数据类型的</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">"123"</span>
  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> p1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2>
<h3 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">Point</span><span class="token punctuation">{</span>
   x<span class="token operator">:</span><span class="token builtin">number</span>
   y<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可选属性" tabindex="-1"><a class="header-anchor" href="#可选属性" aria-hidden="true">#</a> 可选属性</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">IInfoType</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  friend<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token comment">// 通过interface来定义索引类型</span>
<span class="token keyword">interface</span> <span class="token class-name">IndexLanguage</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> frontLanguage<span class="token operator">:</span> IndexLanguage <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">:</span> <span class="token string">"HTML"</span><span class="token punctuation">,</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">"CSS"</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">"JavaScript"</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">"Vue"</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">ILanguageYear</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> languageYear<span class="token operator">:</span> ILanguageYear <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"C"</span><span class="token operator">:</span> <span class="token number">1972</span><span class="token punctuation">,</span>
  <span class="token string-property property">"Java"</span><span class="token operator">:</span> <span class="token number">1995</span><span class="token punctuation">,</span>
  <span class="token string-property property">"JavaScript"</span><span class="token operator">:</span> <span class="token number">1996</span><span class="token punctuation">,</span>
  <span class="token string-property property">"TypeScript"</span><span class="token operator">:</span> <span class="token number">2014</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数类型-1" tabindex="-1"><a class="header-anchor" href="#函数类型-1" aria-hidden="true">#</a> 函数类型</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// type CalcFn = (n1: number, n2: number) => number</span>
<span class="token comment">// 可调用的接口</span>
<span class="token keyword">interface</span> <span class="token class-name">CalcFn</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">calc</span><span class="token punctuation">(</span>num1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> num2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> calcFn<span class="token operator">:</span> CalcFn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">calcFn</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">CalcFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

<span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> add<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口的继承" tabindex="-1"><a class="header-anchor" href="#接口的继承" aria-hidden="true">#</a> 接口的继承</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFly</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">flying</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>


<span class="token keyword">interface</span> <span class="token class-name">IAction</span> <span class="token keyword">extends</span> <span class="token class-name">ISwim</span><span class="token punctuation">,</span> IFly <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">const</span> action<span class="token operator">:</span> IAction <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="交叉类型" tabindex="-1"><a class="header-anchor" href="#交叉类型" aria-hidden="true">#</a> 交叉类型</h3>
<p>交叉类似表示需要满足多个类型的条件</p>
<p>交叉类型使用 &amp; 符号</p>
<p>表达的含义是number和string要同时满足</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">myType</span><span class="token operator">=</span><span class="token builtin">number</span><span class="token operator">&amp;</span><span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IFly</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">flying</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">MyType1</span> <span class="token operator">=</span> ISwim <span class="token operator">|</span> IFly
<span class="token keyword">type</span> <span class="token class-name">MyType2</span> <span class="token operator">=</span> ISwim <span class="token operator">&amp;</span> IFly

<span class="token keyword">const</span> obj1<span class="token operator">:</span> MyType1 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> obj2<span class="token operator">:</span> MyType2 <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">flying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口的实现" tabindex="-1"><a class="header-anchor" href="#接口的实现" aria-hidden="true">#</a> 接口的实现</h3>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IEat</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">eating</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token comment">// 类实现接口</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>

<span class="token comment">// 继承: 只能实现单继承</span>
<span class="token comment">// 实现: 实现接口, 类可以实现多个接口</span>
<span class="token keyword">class</span> <span class="token class-name">Fish</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token keyword">implements</span> <span class="token class-name">ISwim</span><span class="token punctuation">,</span> IEat <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Fish Swmming"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Fish Eating"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">ISwim</span> <span class="token punctuation">{</span>
  <span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Person Swimming"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 编写一些公共的API: 面向接口编程</span>
<span class="token keyword">function</span> <span class="token function">swimAction</span><span class="token punctuation">(</span>swimable<span class="token operator">:</span> ISwim<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  swimable<span class="token punctuation">.</span><span class="token function">swimming</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1.所有实现了接口的类对应的对象, 都是可以传入</span>
<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token function">swimAction</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token function-variable function">swimming</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2>
<p>枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型</p>
<p>枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span>
  <span class="token constant">LEFT</span><span class="token punctuation">,</span>
  <span class="token constant">RIGHT</span><span class="token punctuation">,</span>
  <span class="token constant">TOP</span><span class="token punctuation">,</span>
  <span class="token constant">BOTTOM</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">turnDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"改变角色的方向向左"</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"改变角色的方向向右"</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"改变角色的方向向上"</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token operator">:</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"改变角色的方向向下"</span><span class="token punctuation">)</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">const</span> foo<span class="token operator">:</span> <span class="token builtin">never</span> <span class="token operator">=</span> direction<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token punctuation">)</span>
<span class="token function">turnDirection</span><span class="token punctuation">(</span>Direction<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2>
<h4 id="类型的参数化" tabindex="-1"><a class="header-anchor" href="#类型的参数化" aria-hidden="true">#</a> 类型的参数化</h4>
<p>在定义函数时，不决定函数的参数类型，而是让调用者以参数的形式告知，我这里的函数参数应该是什么类型</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">sum</span> <span class="token generic class-name"><span class="token operator">&lt;</span>Type<span class="token operator">></span></span></span><span class="token punctuation">(</span>num<span class="token operator">:</span>Type<span class="token punctuation">)</span><span class="token operator">:</span>Type<span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
<span class="token punctuation">}</span>
<span class="token generic-function"><span class="token function">sum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>  <span class="token comment">//调用方式1：明确的传入类型</span>
<span class="token generic-function"><span class="token function">sum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">}</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//调用方式1：明确的传入类型</span>
<span class="token generic-function"><span class="token function">sum</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">//调用方式1：明确的传入类型</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span> <span class="token comment">//调用方式2：类型推导</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="泛型接口" tabindex="-1"><a class="header-anchor" href="#泛型接口" aria-hidden="true">#</a> 泛型接口</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson<span class="token operator">&lt;</span><span class="token constant">T1</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token constant">T2</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token constant">T1</span>
  age<span class="token operator">:</span> <span class="token constant">T2</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> IPerson <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">IPerson<span class="token operator">&lt;</span><span class="token constant">T1</span><span class="token punctuation">,</span> <span class="token constant">T2</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token constant">T1</span>
  age<span class="token operator">:</span> <span class="token constant">T2</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p<span class="token operator">:</span> IPerson<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="泛型类的使用" tabindex="-1"><a class="header-anchor" href="#泛型类的使用" aria-hidden="true">#</a> 泛型类的使用</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">class</span> <span class="token class-name">Point<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span>
    x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
    z<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> z<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>z <span class="token operator">=</span> y<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token string">"1.33.2"</span><span class="token punctuation">,</span> <span class="token string">"2.22.3"</span><span class="token punctuation">,</span> <span class="token string">"4.22.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token string">"1.33.2"</span><span class="token punctuation">,</span> <span class="token string">"2.22.3"</span><span class="token punctuation">,</span> <span class="token string">"4.22.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p3<span class="token operator">:</span> Point<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token string">"1.33.2"</span><span class="token punctuation">,</span> <span class="token string">"2.22.3"</span><span class="token punctuation">,</span> <span class="token string">"4.22.1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> names1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">,</span> <span class="token string">"nba"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> names2<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">,</span> <span class="token string">"nba"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 不推荐(react jsx &lt;>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型的约束" tabindex="-1"><a class="header-anchor" href="#类型的约束" aria-hidden="true">#</a> 类型的约束</h4>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">interface</span> <span class="token class-name">ILength</span> <span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">getLength</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> ILength<span class="token operator">></span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getLength</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">getLength</span><span class="token punctuation">(</span><span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type-和-interface的区别" tabindex="-1"><a class="header-anchor" href="#type-和-interface的区别" aria-hidden="true">#</a> type 和 interface的区别</h2>
<p>1、类型别名和接口都可以用来描述对象或函数</p>
<p>2、类型别名和接口都支持扩展。类型别名通过 &amp;（交叉运算符）来扩展，而接口通过 extends 的方式来扩展。</p>
<p>类型别名扩展</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type Animal <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> string
<span class="token punctuation">}</span>
​
type Bear <span class="token operator">=</span> Animal <span class="token operator">&amp;</span> <span class="token punctuation">{</span> 
  honey<span class="token operator">:</span> boolean 
<span class="token punctuation">}</span>
​
<span class="token keyword">const</span> <span class="token literal-property property">bear</span><span class="token operator">:</span> Bear <span class="token operator">=</span> <span class="token function">getBear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
bear<span class="token punctuation">.</span>name
bear<span class="token punctuation">.</span>honey
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接口扩展</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
​
<span class="token keyword">interface</span> <span class="token class-name">Bear</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">honey</span><span class="token operator">:</span> boolean
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解完 type 和 interface 的相似之处之后，接下来我们来介绍它们之间的区别。</p>
<p>1、类型别名可以为基本类型、联合类型或元组类型定义别名，而接口不行</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">type</span> <span class="token class-name">MyNumber</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">StringOrNumber</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">Point</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、同名接口会自动合并，而类型别名不会</p>
</div></template>
