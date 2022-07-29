<template><div><h2 id="堆和栈" tabindex="-1"><a class="header-anchor" href="#堆和栈" aria-hidden="true">#</a> 堆和栈</h2>
<p>堆和栈都是内存中划分出来用来存储的区域。</p>
<p>栈（stack）为自动分配的内存空间，它由系统自动释放；而堆（heap）则是动态分配的内存，大小不定也不会自动释放。</p>
<h3 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h3>
<p>基本数据类型存放在栈中</p>
<p>基本数据类型值不可变</p>
<p>基本类型的比较是值的比较</p>
<h3 id="引用类型" tabindex="-1"><a class="header-anchor" href="#引用类型" aria-hidden="true">#</a> 引用类型</h3>
<p>存放在堆中</p>
<p>变量实际上是一个存放在栈内存的指针，这个指针指向堆内存中的地址。</p>
<p>引用类型是可以直接改变其值</p>
<p>引用类型的比较是引用的比较</p>
<h2 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2>
<p>只是浅层的拷贝，内部引入对象时，依然会相互影响</p>
<p>常用的数组方法slice()和对象方法Object.assign()都属于浅拷贝</p>
<h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2>
<p>两个对象不再有任何关系，不会相互影响</p>
<p>JSON.parse(JSON.stringify(obj))</p>
<h3 id="基本的深拷贝实现" tabindex="-1"><a class="header-anchor" href="#基本的深拷贝实现" aria-hidden="true">#</a> 基本的深拷贝实现</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isObj</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">===</span><span class="token string">'object'</span><span class="token operator">||</span><span class="token keyword">typeof</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token operator">===</span><span class="token string">'function'</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>value<span class="token operator">!==</span><span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">copyObj</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObj</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> newobj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newobj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">copyObj</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newobj
<span class="token punctuation">}</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'深拷贝'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">copyObj</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
