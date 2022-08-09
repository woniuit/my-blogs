import{_ as s,o as n,c as a,e}from"./app.a2a4c03a.js";const t={},o=e(`<h1 id="\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE" aria-hidden="true">#</a> \u9879\u76EE</h1><h2 id="\u642D\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA" aria-hidden="true">#</a> \u642D\u5EFA</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app \u9879\u76EE\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u76EE\u5F55</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/src
  /assets         \u9879\u76EE\u8D44\u6E90\u6587\u4EF6\uFF0C\u6BD4\u5982\uFF0C\u56FE\u7247 \u7B49
  /components     \u901A\u7528\u7EC4\u4EF6
  /pages          \u9875\u9762
  /store          mobx \u72B6\u6001\u4ED3\u5E93
  /utils          \u5DE5\u5177\uFF0C\u6BD4\u5982\uFF0Ctoken\u3001axios \u7684\u5C01\u88C5\u7B49
  App.js          \u6839\u7EC4\u4EF6
  index.css       \u5168\u5C40\u6837\u5F0F
  index.js        \u9879\u76EE\u5165\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8DEF\u7531</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom@<span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5728 pages \u76EE\u5F55\u4E2D\u521B\u5EFA\u4E24\u4E2A\u6587\u4EF6\u5939\uFF1ALogin\u3001Layout</li><li>\u5206\u522B\u5728\u4E24\u4E2A\u76EE\u5F55\u4E2D\u521B\u5EFA index.js \u6587\u4EF6\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684\u7EC4\u4EF6\u540E\u5BFC\u51FA</li><li>\u5728 App \u7EC4\u4EF6\u4E2D\uFF0C\u5BFC\u5165\u8DEF\u7531\u7EC4\u4EF6\u4EE5\u53CA\u4E24\u4E2A\u9875\u9762\u7EC4\u4EF6</li><li>\u914D\u7F6E Login \u548C Layout \u7684\u8DEF\u7531\u89C4\u5219</li></ul><p>app.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165\u8DEF\u7531</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Routes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-router-dom&#39;</span>

<span class="token comment">// \u5BFC\u5165\u9875\u9762\u7EC4\u4EF6</span>
<span class="token keyword">import</span> Login <span class="token keyword">from</span> <span class="token string">&#39;./pages/Login&#39;</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;./pages/Layout&#39;</span>

<span class="token comment">// \u914D\u7F6E\u8DEF\u7531\u89C4\u5219</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;App&quot;</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>Routes<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Layout<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/login&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Login<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function r(l,i){return n(),a("div",null,p)}var d=s(t,[["render",r],["__file","admin\u9879\u76EE.html.vue"]]);export{d as default};
