import{_ as n,o as s,c as a,e}from"./app.30601705.js";const t={},p=e(`<h2 id="\u9632\u6296debounce" tabindex="-1"><a class="header-anchor" href="#\u9632\u6296debounce" aria-hidden="true">#</a> \u9632\u6296debounce</h2><p>\u53EA\u6709\u5728\u67D0\u4E2A\u65F6\u95F4\u5185\uFF0C\u6CA1\u6709\u518D\u6B21\u89E6\u53D1\u67D0\u4E2A\u51FD\u6570\u65F6\uFF0C\u624D\u771F\u6B63\u7684\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002</p><p>\u5E38\u89C1\uFF1A\u8F93\u5165\u6846\u8F93\u5165\u8BF7\u6C42\uFF0C\u9891\u7E41\u7684\u70B9\u51FB\u6309\u94AE\uFF0C\u89E6\u53D1\u67D0\u4E2A\u4E8B\u4EF6</p><p><strong>\u57FA\u672C\u5B9E\u73B0</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u5B9A\u4E49\u4E00\u4E2A\u5B9A\u65F6\u5668, \u4FDD\u5B58\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token comment">// 2.\u771F\u6B63\u6267\u884C\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> <span class="token function-variable function">_debounce</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53D6\u6D88\u4E0A\u4E00\u6B21\u7684\u5B9A\u65F6\u5668</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
    <span class="token comment">// \u5EF6\u8FDF\u6267\u884C</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5916\u90E8\u4F20\u5165\u7684\u771F\u6B63\u8981\u6267\u884C\u7684\u51FD\u6570</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> _debounce
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8282\u6D41throttle" tabindex="-1"><a class="header-anchor" href="#\u8282\u6D41throttle" aria-hidden="true">#</a> \u8282\u6D41throttle</h2><p>\u4E00\u5B9A\u7684\u65F6\u95F4\u5185\u53EA\u4F1A\u89E6\u53D1\u4E00\u6B21</p><p>\u5E38\u89C1\uFF1A\u76D1\u542C\u9875\u9762\u7684\u6EDA\u52A8\u4E8B\u4EF6\uFF1B</p><p><strong>\u57FA\u672C\u5B9E\u73B0</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> interval<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 1.\u8BB0\u5F55\u4E0A\u4E00\u6B21\u7684\u5F00\u59CB\u65F6\u95F4</span>
  <span class="token keyword">let</span> lastTime <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 2.\u4E8B\u4EF6\u89E6\u53D1\u65F6, \u771F\u6B63\u6267\u884C\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> <span class="token function-variable function">_throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 2.1.\u83B7\u53D6\u5F53\u524D\u4E8B\u4EF6\u89E6\u53D1\u65F6\u7684\u65F6\u95F4</span>
    <span class="token keyword">const</span> nowTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// 2.2.\u4F7F\u7528\u5F53\u524D\u89E6\u53D1\u7684\u65F6\u95F4\u548C\u4E4B\u524D\u7684\u65F6\u95F4\u95F4\u9694\u4EE5\u53CA\u4E0A\u4E00\u6B21\u5F00\u59CB\u7684\u65F6\u95F4, \u8BA1\u7B97\u51FA\u8FD8\u5269\u4F59\u591A\u957F\u4E8B\u4EF6\u9700\u8981\u53BB\u89E6\u53D1\u51FD\u6570</span>
    <span class="token keyword">const</span> remainTime <span class="token operator">=</span> interval <span class="token operator">-</span> <span class="token punctuation">(</span>nowTime <span class="token operator">-</span> lastTime<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remainTime <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 2.3.\u771F\u6B63\u89E6\u53D1\u51FD\u6570</span>
      <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 2.4.\u4FDD\u7559\u4E0A\u6B21\u89E6\u53D1\u7684\u65F6\u95F4</span>
      lastTime <span class="token operator">=</span> nowTime
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> _throttle
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[p];function c(i,l){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","\u9632\u6296\u548C\u8282\u6D41.html.vue"]]);export{r as default};
