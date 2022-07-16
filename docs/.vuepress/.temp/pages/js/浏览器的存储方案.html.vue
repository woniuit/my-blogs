<template><div><h2 id="json序列化方法" tabindex="-1"><a class="header-anchor" href="#json序列化方法" aria-hidden="true">#</a> JSON序列化方法</h2>
<p>在ES5中引用了JSON全局对象，该对象有两个常用的方法：</p>
<p><code v-pre>stringify</code>方法：将JavaScript类型转成对应的JSON字符串；</p>
<p><code v-pre>parse</code>方法：解析JSON字符串，转回对应的JavaScript类型；</p>
<h2 id="localstorage和sessionstorage的区别" tabindex="-1"><a class="header-anchor" href="#localstorage和sessionstorage的区别" aria-hidden="true">#</a> localStorage和sessionStorage的区别</h2>
<p>1.关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除</p>
<p>2.在页面内实现跳转，localStorage会保留，sessionStorage也会保留；</p>
<p>3.在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留；</p>
<h2 id="封装storage" tabindex="-1"><a class="header-anchor" href="#封装storage" aria-hidden="true">#</a> 封装Storage</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HYCache</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">isLocal <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>storage <span class="token operator">=</span> isLocal <span class="token operator">?</span> localStorage<span class="token operator">:</span> sessionStorage
  <span class="token punctuation">}</span>

  <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span>

  <span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">key</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token punctuation">.</span>length
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> localCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HYCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> sessionCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HYCache</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  localCache<span class="token punctuation">,</span>
  sessionCache
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> cookie</h2>
<p>Cookie（复数形态Cookies），又称为“小甜饼”。类型为“小型文本文件，某些网站为了辨别用户身份而存储在用户本地终端 （Client Side）上的数据。</p>
<p>Cookie总是保存在客户端中，按在客户端中的存储位置，Cookie可以分为内存Cookie和硬盘Cookie。</p>
<p>内存Cookie由浏览器维护，保存在内存中，浏览器关闭时Cookie就会消失，其存在时间是短暂的</p>
<p>硬盘Cookie保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理；</p>
<p>如果判断一个cookie是内存cookie还是硬盘cookie呢？</p>
<p>没有设置过期时间，默认情况下cookie是内存cookie，在关闭浏览器时会自动删除</p>
<p>有设置过期时间，并且过期时间不为0或者负数的cookie，是硬盘cookie，需要手动或者到期时，才会删除；</p>
<p>document.cookie</p>
<h3 id="cookie的特点" tabindex="-1"><a class="header-anchor" href="#cookie的特点" aria-hidden="true">#</a> Cookie的特点</h3>
<ul>
<li>保存到客户端，容易被篡改(删除、禁用)</li>
<li>保存的数据量有限的</li>
<li>大小受限，本身最大4kb</li>
</ul>
<h2 id="session" tabindex="-1"><a class="header-anchor" href="#session" aria-hidden="true">#</a> session</h2>
<p>cookie和session都是用来跟踪浏览器用户身份的会话方式。</p>
<h3 id="cookie和session区别" tabindex="-1"><a class="header-anchor" href="#cookie和session区别" aria-hidden="true">#</a> cookie和session区别</h3>
<ul>
<li>cookie是保存在客户端的</li>
<li>cookie有大小限制</li>
<li>session是保存在服务器端</li>
<li>session更加安全</li>
<li>session会比较占用服务器性能，当访问增多时应用cookie</li>
</ul>
</div></template>
