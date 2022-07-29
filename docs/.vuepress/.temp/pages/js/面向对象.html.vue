<template><div><h1 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h1>
<p>面向对象只是过程式代码的一种高度封装，目的在于提高代码的开发效率和可维护性</p>
<p>面向对象有三大特性：封装、继承、多态</p>
<p>封装：我们前面将属性和方法封装到一个类中，可以称之为封装的过程；</p>
<p>继承：继承是面向对象中非常重要的，不仅仅可以减少重复代码的数量，也是多态前提（纯面向对象中）</p>
<p>多态：不同的对象在执行时表现出不同的形态；</p>
<h2 id="创建对象的两种方式" tabindex="-1"><a class="header-anchor" href="#创建对象的两种方式" aria-hidden="true">#</a> 创建对象的两种方式</h2>
<p>1.用new关键字</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"djy"</span>
obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">18</span>
obj<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">1.88</span>
obj<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"在跑步~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.字面量形式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kobe"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.98</span><span class="token punctuation">,</span>
  <span class="token function-variable function">eating</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"在吃东西~"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对属性操作的控制" tabindex="-1"><a class="header-anchor" href="#对属性操作的控制" aria-hidden="true">#</a> 对属性操作的控制</h2>
<h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>prop<span class="token punctuation">,</span>descriptor<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>obj要定义属性的对象</li>
<li>prop要定义或修改的属性的名称或 Symbol</li>
<li>descriptor要定义或修改的属性描述符</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>
<span class="token comment">// 属性描述符是一个对象</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"height"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">// 很多的配置</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1.88</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性描述符分类" tabindex="-1"><a class="header-anchor" href="#属性描述符分类" aria-hidden="true">#</a> 属性描述符分类</h3>
<p>属性描述符的类型有两种</p>
<p><strong>1.数据属性</strong></p>
<p><strong>configurable</strong></p>
<p>表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性 描述符；</p>
<p>当我们直接在一个对象上定义某个属性时，这个属性的[[Configurable]]为true；</p>
<p>当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false；</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"djy"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"height"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 很多的配置</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1.88</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">delete</span> obj<span class="token punctuation">.</span>height <span class="token comment">//无效</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>height<span class="token punctuation">)</span>
<span class="token comment">//{ name: 'djy', age: 18 }</span>
<span class="token comment">//{ age: 18 }</span>
<span class="token comment">//1.88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>enumerable</strong></p>
<p>表示属性是否可以通过for-in或者Object.keys()返回该属性；</p>
<p>当我们直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]为true；</p>
<p>当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"djy"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"height"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token comment">// 很多的配置</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1.88</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token comment">//没有设置为true的时候，遍历无效</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//name</span>
<span class="token comment">//age</span>
<span class="token comment">//height 没有设置为true的时候，遍历无效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Writable</strong></p>
<p>表示是否可以修改属性的值；</p>
<p>当我们直接在一个对象上定义某个属性时，这个属性的[[Writable]]为true</p>
<p>当我们通过属性描述符定义一个属性时，这个属性的[[Writable]]默认为false</p>
<p><strong>value</strong></p>
<p>属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改</p>
<p>默认情况下这个值是undefined</p>
<p><strong>2.存储属性</strong></p>
<p><strong>configurable</strong></p>
<p>同上</p>
<p><strong>enumerable</strong></p>
<p>同上</p>
<p><strong>get</strong></p>
<p>获取属性时会执行的函数。默认为undefined</p>
<p><strong>set</strong></p>
<p>设置属性时会执行的函数。默认为undefined</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"北京市"</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> _address<span class="token operator">=</span><span class="token string">"背景"</span>
<span class="token comment">// 存取属性描述符</span>
<span class="token comment">// 1.隐藏某一个私有属性被希望直接被外界使用和赋值</span>
<span class="token comment">// 2.如果我们希望截获某一个属性它访问和设置值的过程时, 也会使用存储属性描述符</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"address"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_address
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_address <span class="token operator">=</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>address<span class="token punctuation">,</span><span class="token string">'1'</span><span class="token punctuation">)</span>

obj<span class="token punctuation">.</span>address <span class="token operator">=</span> <span class="token string">"上海市"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>address<span class="token punctuation">,</span><span class="token string">'2'</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"获取了一次address的值"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"设置了addres的值"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
获取了一次address的值
<span class="token keyword">undefined</span> <span class="token number">1</span>
设置了addres的值
获取了一次address的值
上海市 <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-getownpropertydescriptor-获取某一个特性属性的属性描述符" tabindex="-1"><a class="header-anchor" href="#object-getownpropertydescriptor-获取某一个特性属性的属性描述符" aria-hidden="true">#</a> Object.getOwnPropertyDescriptor(获取某一个特性属性的属性描述符)</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建对象的方案-–-工厂模式" tabindex="-1"><a class="header-anchor" href="#创建对象的方案-–-工厂模式" aria-hidden="true">#</a> 创建对象的方案 – 工厂模式</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 工厂模式: 工厂函数</span>
<span class="token keyword">function</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  p<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  p<span class="token punctuation">.</span>age <span class="token operator">=</span> age
  p<span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>
  p<span class="token punctuation">.</span>address <span class="token operator">=</span> address

  p<span class="token punctuation">.</span><span class="token function-variable function">eating</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"在吃东西~"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  p<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"在跑步~"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> p
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">,</span> <span class="token string">"广州市"</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1.98</span><span class="token punctuation">,</span> <span class="token string">"上海市"</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p3 <span class="token operator">=</span> <span class="token function">createPerson</span><span class="token punctuation">(</span><span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">1.78</span><span class="token punctuation">,</span> <span class="token string">"北京市"</span><span class="token punctuation">)</span>

<span class="token comment">// 工厂模式的缺点(获取不到对象最真实的类型) 获取到的对象的类型都是Object类型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2>
<h3 id="new操作符的作用" tabindex="-1"><a class="header-anchor" href="#new操作符的作用" aria-hidden="true">#</a> new操作符的作用</h3>
<ol>
<li>在内存中创建一个新的对象（空对象）</li>
<li>这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性</li>
<li>构造函数内部的this，会指向创建出来的新对象</li>
<li>执行函数的内部代码</li>
<li>如果构造函数没有返回非空对象，则返回创建出来的新对象</li>
</ol>
<h3 id="创建对象的方案-构造函数" tabindex="-1"><a class="header-anchor" href="#创建对象的方案-构造函数" aria-hidden="true">#</a> 创建对象的方案-构造函数</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 规范: 构造函数的首字母一般是大写</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">,</span> address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> height
  <span class="token keyword">this</span><span class="token punctuation">.</span>address <span class="token operator">=</span> address

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">eating</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"在吃东西~"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">"在跑步"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">1.88</span><span class="token punctuation">,</span> <span class="token string">"广州市"</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">1.98</span><span class="token punctuation">,</span> <span class="token string">"北京市"</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p2<span class="token punctuation">)</span>
p1<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
p2<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>构造函数的缺点</strong></p>
<p>我们需要为每个对象的函数去创建一个函数对象实例</p>
<h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2>
<h3 id="对象的原型" tabindex="-1"><a class="header-anchor" href="#对象的原型" aria-hidden="true">#</a> 对象的原型</h3>
<p>每个对象中都有一个 [[prototype]],(——proto——) 这个属性可以称之为对象的原型(隐式原型).</p>
<p>对象中提供了一个属性, 可以让我们查看一下这个原型对象</p>
<p><strong>方式一:</strong></p>
<p><code v-pre>console.log(obj.__proto__); // {}</code></p>
<p><strong>方式二:</strong></p>
<p><code v-pre>console.log(Object.getPrototypeOf(obj));</code></p>
<p><strong>原型有什么用?</strong></p>
<p>当我们从一个对象中获取某一个属性时, 它会触发 [[get]] 操作</p>
<ol>
<li>在当前对象中去查找对应的属性, 如果找到就直接使用</li>
<li>如果没有找到, 那么会沿着它的原型去查找 [[prototype]]</li>
</ol>
<h3 id="函数的原型" tabindex="-1"><a class="header-anchor" href="#函数的原型" aria-hidden="true">#</a> 函数的原型</h3>
<p>函数也是一个对象.</p>
<p>函数作为对象来说, 它也是有[[prototype]],——proto—— 隐式原型</p>
<p>函数它因为是一个函数, 所以它还会多出来一个显示原型属性: prototype.</p>
<p><strong>我们通过foo构造函数创建出来的所有对象的[[prototype]]属性都指向foo.prototype如下代码</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> f1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f1<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> foo<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"why"</span><span class="token punctuation">;</span>
p1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"kobe"</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"james"</span><span class="token punctuation">;</span>
p2<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"curry"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//why,先在自己里面找，找到了why。假如自己没有，那么就会去原型_proto_中找，找到了就是kobe，再假如自己的原型_proto_中没有，那么就是构造函数中的prototype中找，如果没有就返回undefined。</span>
p1<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"kobe"</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"james"</span><span class="token punctuation">;</span>
p2<span class="token punctuation">.</span>__proto__<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"curry"</span><span class="token punctuation">;</span>
最终会打印curry。因为p1和p2的原型__proto__都等于函数person的prototype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>创建对象的内存表现</strong></p>
<p><img src="/10.png" alt=""></p>
<h4 id="constructor属性" tabindex="-1"><a class="header-anchor" href="#constructor属性" aria-hidden="true">#</a> constructor属性</h4>
<p>默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 真实开发中我们可以通过Object.defineProperty方式添加constructor</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>foo<span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">"constructor"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> foo<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h4>
<p>从一个对象上获取属性，如果在当前对象中没有获取到就会去它的原型上面获取，这个链条就叫原型链;</p>
<p>顶层原型指向null</p>
<p>原型链最顶层的原型对象就是Object的原型对象(自带)</p>
<h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<p>继承可以帮助我们将重复的代码和逻辑抽取到父类中，子类只需要直接继承过来使用即可</p>
<h3 id="原型链继承" tabindex="-1"><a class="header-anchor" href="#原型链继承" aria-hidden="true">#</a> 原型链继承</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//父类</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"why"</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eating</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" eating~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">//子类</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sno <span class="token operator">=</span> <span class="token number">111</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment">//指向person</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> p

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">studying</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" studying~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
stu<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong>:</p>
<p>1.这个属性会被多个对象共享，如果这个对象是一个引用类型，那么就会造成问题</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> stu2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 直接修改对象上的属性, 是给本对象添加了一个新属性</span>
stu1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">"kobe"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 获取引用, 修改引用中的值, 会相互影响  因为对象获取某个属性的时候会直接触发get，找不到会一直往原型链找，找到就push.导致stu2.friends获取的时候就获取到了上面push的值</span>
stu1<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"kobe"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu1<span class="token punctuation">.</span>friends<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu2<span class="token punctuation">.</span>friends<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.不能给Person传递参数，因为这个对象是一次性创建的（没办法定制化）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>在前面实现类的过程中都没有传递参数
<span class="token keyword">var</span> stu3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"lilei"</span><span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.打印new出来的对象，只能看到自己的属性和构造函数的属性，看不到原型链上的属性</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>直接打印stu对象 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>
打印console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>name<span class="token punctuation">)</span>才可以打印
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数继承" tabindex="-1"><a class="header-anchor" href="#构造函数继承" aria-hidden="true">#</a> 构造函数继承</h3>
<p>为了解决原型链继承的弊端。</p>
<p>借用继承的做法：在子类型构造函数的内部调用父类型构造函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 父类: 公共属性和方法</span>
<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// this = stu</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> friends<span class="token punctuation">;</span>
    <span class="token comment">// this.sno = sno;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eating</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" eating~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 子类: 特有属性和方法</span>
<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends<span class="token punctuation">,</span> sno</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends<span class="token punctuation">,</span>sno<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// this.name = name</span>
    <span class="token comment">// this.age = age</span>
    <span class="token comment">// this.friends = friends</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sno <span class="token operator">=</span> <span class="token number">111</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> p<span class="token punctuation">;</span>
<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">studying</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">" studying~"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> stu1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"lilei"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> stu2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"kobe"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"james"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">116</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"stu1"</span><span class="token punctuation">,</span> stu1<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"stu2"</span><span class="token punctuation">,</span> stu2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点</strong></p>
<p>1.第一个弊端: Person函数至少被调用了两次</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends<span class="token punctuation">)</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.第二个弊端: stu的原型对象上会多出一些属性, 但是这些属性是没有存在的必要
<img src="/11.png" alt=""></p>
<h3 id="原型式继承" tabindex="-1"><a class="header-anchor" href="#原型式继承" aria-hidden="true">#</a> 原型式继承</h3>
<p>1.Object.setPrototypeOf</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createObject1</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> newObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>newObj<span class="token punctuation">,</span> o<span class="token punctuation">)</span>
  <span class="token keyword">return</span> newObj
<span class="token punctuation">}</span>
<span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token function">createObject1</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{ name: 'why', age: 18 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li></li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">createObject2</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o
  <span class="token keyword">var</span> newObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> newObj
<span class="token punctuation">}</span>

<span class="token keyword">var</span> info <span class="token operator">=</span> <span class="token function">createObject2</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token comment">//{ name: 'why', age: 18 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.Object.create</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> info <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token comment">//{}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token comment">//{ name: 'why', age: 18 }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="寄生式继承" tabindex="-1"><a class="header-anchor" href="#寄生式继承" aria-hidden="true">#</a> 寄生式继承</h3>
<p>寄生式(Parasitic)继承是与原型式继承紧密相关的一种思想,寄生式继承的思路是结合原型类继承和工厂模式的一种方式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> personObj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">running</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"running"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
personObj<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">'kobe'</span>
<span class="token keyword">function</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> stu <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>personObj<span class="token punctuation">)</span>
  stu<span class="token punctuation">.</span>name <span class="token operator">=</span> name
  stu<span class="token punctuation">.</span><span class="token function-variable function">studying</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"studying~"</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stu
<span class="token punctuation">}</span>

<span class="token keyword">var</span> stuObj <span class="token operator">=</span> <span class="token function">createStudent</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stuObj<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="寄生组合式继承" tabindex="-1"><a class="header-anchor" href="#寄生组合式继承" aria-hidden="true">#</a> 寄生组合式继承</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createObject</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">inheritPrototype</span><span class="token punctuation">(</span><span class="token parameter">SubType<span class="token punctuation">,</span> SuperType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">SubType</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">SuperType</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
  Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token class-name">SubType</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token string">"constructor"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> SubType
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token keyword">this</span><span class="token punctuation">.</span>friends <span class="token operator">=</span> friends
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">running</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"running~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">eating</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"eating~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">function</span> <span class="token function">Student</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends<span class="token punctuation">,</span> sno<span class="token punctuation">,</span> score</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> friends<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>sno <span class="token operator">=</span> sno
  <span class="token keyword">this</span><span class="token punctuation">.</span>score <span class="token operator">=</span> score
<span class="token punctuation">}</span>

<span class="token function">inheritPrototype</span><span class="token punctuation">(</span>Student<span class="token punctuation">,</span> Person<span class="token punctuation">)</span>

<span class="token class-name">Student</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">studying</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"studying~"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"kobe"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>
stu<span class="token punctuation">.</span><span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stu<span class="token punctuation">.</span><span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stu<span class="token punctuation">.</span><span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原型继承图" tabindex="-1"><a class="header-anchor" href="#原型继承图" aria-hidden="true">#</a> 原型继承图</h3>
<p><img src="/12.png" alt=""></p>
<h2 id="对象的方法补充" tabindex="-1"><a class="header-anchor" href="#对象的方法补充" aria-hidden="true">#</a> 对象的方法补充</h2>
<h3 id="hasownproperty" tabindex="-1"><a class="header-anchor" href="#hasownproperty" aria-hidden="true">#</a> hasOwnProperty</h3>
<p>对象是否有某一个属于自己的属性（检测不到原型上的属性）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> info <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"北京市"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"address"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-操作符" tabindex="-1"><a class="header-anchor" href="#in-操作符" aria-hidden="true">#</a> in 操作符</h3>
<p>判断某个属性是否在某个对象或者对象的原型上,不管在当前对象还是原型中返回的都是true</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> info <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"北京市"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"address"</span> <span class="token keyword">in</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"name"</span> <span class="token keyword">in</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h3>
<p>用于检测构造函数的pototype，是否出现在某个实例对象的原型链上</p>
<h3 id="isprototypeof" tabindex="-1"><a class="header-anchor" href="#isprototypeof" aria-hidden="true">#</a> isPrototypeOf</h3>
<p>用于检测某个对象，是否出现在某个实例对象的原型链上</p>
<h2 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h2>
<p><RouterLink to="/js/class/">class</RouterLink></p>
</div></template>
