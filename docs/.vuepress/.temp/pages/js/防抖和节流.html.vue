<template><div><h2 id="防抖debounce" tabindex="-1"><a class="header-anchor" href="#防抖debounce" aria-hidden="true">#</a> 防抖debounce</h2>
<p>只有在某个时间内，没有再次触发某个函数时，才真正的调用这个函数。</p>
<p>常见：输入框输入请求，频繁的点击按钮，触发某个事件</p>
<p><strong>基本实现</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.定义一个定时器, 保存上一次的定时器</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 2.真正执行的函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">_debounce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 取消上一次的定时器</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token comment">// 延迟执行</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 外部传入的真正要执行的函数</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> _debounce
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流throttle" tabindex="-1"><a class="header-anchor" href="#节流throttle" aria-hidden="true">#</a> 节流throttle</h2>
<p>一定的时间内只会触发一次</p>
<p>常见：监听页面的滚动事件；</p>
<p><strong>基本实现</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> interval<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.记录上一次的开始时间</span>
  <span class="token keyword">let</span> lastTime <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 2.事件触发时, 真正执行的函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">_throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 2.1.获取当前事件触发时的时间</span>
    <span class="token keyword">const</span> nowTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 2.2.使用当前触发的时间和之前的时间间隔以及上一次开始的时间, 计算出还剩余多长事件需要去触发函数</span>
    <span class="token keyword">const</span> remainTime <span class="token operator">=</span> interval <span class="token operator">-</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> lastTime<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remainTime <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2.3.真正触发函数</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 2.4.保留上次触发的时间</span>
      lastTime <span class="token operator">=</span> nowTime
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> _throttle
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
