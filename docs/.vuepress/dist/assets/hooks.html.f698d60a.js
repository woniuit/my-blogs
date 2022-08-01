import{_ as n,o as s,c as a,e as t}from"./app.c5ff1962.js";const p={},o=t(`<h1 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> hooks</h1><h2 id="usestate" tabindex="-1"><a class="header-anchor" href="#usestate" aria-hidden="true">#</a> useState</h2><p>useState\u4E3A\u51FD\u6570\u7EC4\u4EF6\u63D0\u4F9B\u72B6\u6001\uFF08state\uFF09</p><ul><li>\u5BFC\u5165 <code>useState</code> \u51FD\u6570</li><li>\u8C03\u7528 <code>useState</code> \u51FD\u6570\uFF0C\u5E76\u4F20\u5165\u72B6\u6001\u7684\u521D\u59CB\u503C</li><li>\u4ECE<code>useState</code>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E2D\uFF0C\u62FF\u5230\u72B6\u6001\u548C\u4FEE\u6539\u72B6\u6001\u7684\u65B9\u6CD5</li><li>\u5728JSX\u4E2D\u5C55\u793A\u72B6\u6001</li><li>\u8C03\u7528\u4FEE\u6539\u72B6\u6001\u7684\u65B9\u6CD5\u66F4\u65B0\u72B6\u6001</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u53C2\u6570\uFF1A\u72B6\u6001\u521D\u59CB\u503C\u6BD4\u5982,\u4F20\u5165 0 \u8868\u793A\u8BE5\u72B6\u6001\u7684\u521D\u59CB\u503C\u4E3A 0</span>
    <span class="token comment">// \u8FD4\u56DE\u503C\uFF1A\u6570\u7EC4,\u5305\u542B\u4E24\u4E2A\u503C\uFF1A1 \u72B6\u6001\u503C\uFF08state\uFF09 2 \u4FEE\u6539\u8BE5\u72B6\u6001\u7684\u51FD\u6570\uFF08setState\uFF09</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>objs<span class="token punctuation">,</span> setObj<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        objs<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token number">2</span>
        <span class="token function">setObj</span><span class="token punctuation">(</span>objs<span class="token punctuation">)</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>add<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="useeffect" tabindex="-1"><a class="header-anchor" href="#useeffect" aria-hidden="true">#</a> useEffect</h2><p><strong>\u4EC0\u4E48\u662F\u526F\u4F5C\u7528</strong></p><p>\u526F\u4F5C\u7528\u662F\u76F8\u5BF9\u4E8E\u4E3B\u4F5C\u7528\u6765\u8BF4\u7684\uFF0C\u4E00\u4E2A\u51FD\u6570\u9664\u4E86\u4E3B\u4F5C\u7528\uFF0C\u5176\u4ED6\u7684\u4F5C\u7528\u5C31\u662F\u526F\u4F5C\u7528\u3002\u5BF9\u4E8E React \u7EC4\u4EF6\u6765\u8BF4\uFF0C<strong>\u4E3B\u4F5C\u7528\u5C31\u662F\u6839\u636E\u6570\u636E\uFF08state/props\uFF09\u6E32\u67D3 UI</strong>\uFF0C\u9664\u6B64\u4E4B\u5916\u90FD\u662F\u526F\u4F5C\u7528\uFF08\u6BD4\u5982\uFF0C\u624B\u52A8\u4FEE\u6539 DOM\uFF09</p><p><strong>\u5E38\u89C1\u7684\u526F\u4F5C\u7528</strong></p><ol><li>\u6570\u636E\u8BF7\u6C42 ajax\u53D1\u9001</li><li>\u624B\u52A8\u4FEE\u6539dom</li><li>localstorage\u64CD\u4F5C</li></ol><p>useEffect\u51FD\u6570\u7684\u4F5C\u7528\u5C31\u662F\u4E3Areact\u51FD\u6570\u7EC4\u4EF6\u63D0\u4F9B\u526F\u4F5C\u7528\u5904\u7406\u7684\uFF01</p><ul><li><p>\u5BFC\u5165 <code>useEffect</code> \u51FD\u6570</p></li><li><p>\u8C03\u7528 <code>useEffect</code> \u51FD\u6570\uFF0C\u5E76\u4F20\u5165\u56DE\u8C03\u51FD\u6570</p></li><li><p>\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u7F16\u5199\u526F\u4F5C\u7528\u5904\u7406\uFF08dom\u64CD\u4F5C\uFF09</p></li><li><p>\u4FEE\u6539\u6570\u636E\u72B6\u6001</p></li><li><p>\u68C0\u6D4B\u526F\u4F5C\u7528\u662F\u5426\u751F\u6548</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>title<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// dom\u64CD\u4F5C</span>
        document<span class="token punctuation">.</span>title <span class="token operator">=</span> <span class="token string">&quot;\u6211\u662F\u6807\u9898&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F9D\u8D56\u9879\u63A7\u5236\u6267\u884C\u65F6\u673A" tabindex="-1"><a class="header-anchor" href="#\u4F9D\u8D56\u9879\u63A7\u5236\u6267\u884C\u65F6\u673A" aria-hidden="true">#</a> \u4F9D\u8D56\u9879\u63A7\u5236\u6267\u884C\u65F6\u673A</h3><p><strong>\u4E0D\u6DFB\u52A0\u4F9D\u8D56\u9879</strong></p><p>\u7EC4\u4EF6\u9996\u6B21\u6E32\u67D3\u6267\u884C\u4E00\u6B21\uFF0C\u4EE5\u53CA\u4E0D\u7BA1\u662F\u54EA\u4E2A\u72B6\u6001\u66F4\u6539\u5F15\u8D77\u7EC4\u4EF6\u66F4\u65B0\u65F6\u90FD\u4F1A\u91CD\u65B0\u6267\u884C</p><ul><li><p>\u7EC4\u4EF6\u521D\u59CB\u6E32\u67D3</p></li><li><p>\u7EC4\u4EF6\u66F4\u65B0 \uFF08\u4E0D\u7BA1\u662F\u54EA\u4E2A\u72B6\u6001\u5F15\u8D77\u7684\u66F4\u65B0\uFF09</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u526F\u4F5C\u7528\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6DFB\u52A0\u7A7A\u6570\u7EC4</strong></p><p>\u7EC4\u4EF6\u53EA\u5728\u9996\u6B21\u6E32\u67D3\u65F6\u6267\u884C\u4E00\u6B21</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u526F\u4F5C\u7528\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6DFB\u52A0\u7279\u5B9A\u4F9D\u8D56\u9879</strong></p><p>\u526F\u4F5C\u7528\u51FD\u6570\u5728\u9996\u6B21\u6E32\u67D3\u65F6\u6267\u884C\uFF0C\u5728\u4F9D\u8D56\u9879\u53D1\u751F\u53D8\u5316\u65F6\u91CD\u65B0\u6267\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>  
    <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">&#39;zs&#39;</span><span class="token punctuation">)</span> 
    
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>    
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u526F\u4F5C\u7528\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>  
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">)</span>  
    
    <span class="token keyword">return</span> <span class="token punctuation">(</span>    
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>      
         <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>      
         <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;cp&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>    
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>  
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6E05\u9664\u526F\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u526F\u4F5C\u7528" aria-hidden="true">#</a> \u6E05\u9664\u526F\u4F5C\u7528</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>    
    <span class="token comment">// \u526F\u4F5C\u7528\u51FD\u6570\u7684\u6267\u884C\u65F6\u673A\u4E3A: \u5728\u4E0B\u4E00\u6B21\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u4E4B\u524D\u6267\u884C   </span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>      
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6E05\u7406\u526F\u4F5C\u7528\u7684\u51FD\u6570\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>      
        <span class="token comment">// \u5728\u8FD9\u91CC\u5199\u6E05\u7406\u526F\u4F5C\u7528\u7684\u4EE3\u7801    </span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>   
        <span class="token keyword">const</span> timerId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>      
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u526F\u4F5C\u7528\u51FD\u6570\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>    
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>   
        <span class="token comment">// \u6DFB\u52A0\u6E05\u7406\u526F\u79DF\u7528\u51FD\u6570    </span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>      
            <span class="token function">clearInterval</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>    
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Foo<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">const</span> <span class="token punctuation">[</span>flag<span class="token punctuation">,</span> setFlag<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>  
    <span class="token keyword">return</span> <span class="token punctuation">(</span>   
        <span class="token operator">&lt;</span><span class="token operator">&gt;</span>      
          <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>click<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>      
         <span class="token punctuation">{</span>flag <span class="token operator">?</span> <span class="token operator">&lt;</span>Foo<span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>    
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>    
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> \u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42</h3><p>\u4E0D\u53EF\u4EE5\u76F4\u63A5\u5728useEffect\u7684\u56DE\u8C03\u51FD\u6570\u5916\u5C42\u76F4\u63A5\u5305\u88F9 await \uFF0C\u56E0\u4E3A<strong>\u5F02\u6B65\u4F1A\u5BFC\u81F4\u6E05\u7406\u51FD\u6570\u65E0\u6CD5\u7ACB\u5373\u8FD4\u56DE</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>   
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>      
       <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://geek.itheima.net/v1_0/channels&#39;</span><span class="token punctuation">)</span>                            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>   
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","hooks.html.vue"]]);export{r as default};