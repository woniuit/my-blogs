import{_ as n,o as s,c as a,e as t}from"./app.eedaeed8.js";const e={},p=t(`<h2 id="\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u7B80\u4ECB" aria-hidden="true">#</a> \u7B80\u4ECB</h2><p>\u4E00\u4E2A\u53EF\u4EE5\u548CReact\u826F\u597D\u914D\u5408\u7684\u96C6\u4E2D\u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF0Cmobx\u548Creact\u7684\u5173\u7CFB\uFF0C\u76F8\u5F53\u4E8Evuex\u548Cvue\uFF0C\u540C\u7C7B\u5DE5\u5177\u8FD8\u6709\uFF1A1. redux 2. dva 3. recoil</p><h2 id="\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u914D\u7F6E</h2><p><strong>\u5B89\u88C5</strong></p><p>mobx-react-lite\u4E3A\u8FDE\u63A5react\u548Cmobx</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn add mobx mobx-react-lite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u521B\u5EFA\u4E00\u4E2Astore\u6587\u4EF6\u5939\uFF0Cindex.js\u6587\u4EF6</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">CouterStore</span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function-variable function">addCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> conterStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CouterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> conterStore<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u4E00\u4E2Areact\u6587\u4EF6\uFF0Cmobx.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">:</span><span class="token operator">:</span><span class="token operator">:</span> tip
<span class="token keyword">import</span> <span class="token punctuation">{</span> observer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx-react-lite&quot;</span><span class="token punctuation">;</span>\u8FDE\u63A5react\u548Cmobx<span class="token punctuation">,</span>\u8BA9\u7EC4\u4EF6\u5728\u89C6\u56FE\u4E2D\u54CD\u5E94\u6570\u636E\u53D8\u5316
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">observer</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">:</span><span class="token operator">:</span><span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> makeAutoObservable <span class="token punctuation">,</span>computed<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;mobx&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">CouterStore</span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    list<span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">makeAutoObservable</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">listtest</span><span class="token operator">:</span>computed
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">get</span> <span class="token function">listtest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function-variable function">addCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> conterStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CouterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> conterStore<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,13),o=[p];function c(l,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","Mobx.html.vue"]]);export{r as default};
