import{_ as n,o as s,c as a,e as t}from"./app.f0f6b600.js";const p={},e=t(`<h1 id="class" tabindex="-1"><a class="header-anchor" href="#class" aria-hidden="true">#</a> class</h1><h2 id="class\u5B9A\u4E49\u7C7B\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#class\u5B9A\u4E49\u7C7B\u7684\u65B9\u5F0F" aria-hidden="true">#</a> class\u5B9A\u4E49\u7C7B\u7684\u65B9\u5F0F</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B\u548C\u6784\u9020\u51FD\u6570\u7684\u5F02\u540C" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u548C\u6784\u9020\u51FD\u6570\u7684\u5F02\u540C" aria-hidden="true">#</a> \u7C7B\u548C\u6784\u9020\u51FD\u6570\u7684\u5F02\u540C</h2><p>\u5B83\u548C\u6211\u4EEC\u7684\u6784\u9020\u51FD\u6570\u7684\u7279\u6027\u5176\u5B9E\u662F\u4E00\u81F4\u7684\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// \u7814\u7A76\u4E00\u4E0B\u7C7B\u7684\u7279\u6027</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> Person<span class="token punctuation">)</span> <span class="token comment">// function</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h2><h3 id="\u7C7B\u7684\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u7C7B\u7684\u6784\u9020\u51FD\u6570</h3><p>\u6BCF\u4E2A\u7C7B\u90FD\u53EF\u4EE5\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u6784\u9020\u51FD\u6570\uFF08\u65B9\u6CD5\uFF09\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u7684\u540D\u79F0\u662F\u56FA\u5B9A\u7684constructor</p><p>\u5F53\u6211\u4EEC\u901A\u8FC7new\u64CD\u4F5C\u7B26\uFF0C\u64CD\u4F5C\u4E00\u4E2A\u7C7B\u7684\u65F6\u5019\u4F1A\u8C03\u7528\u8FD9\u4E2A\u7C7B\u7684\u6784\u9020\u51FD\u6570constructor</p><p>\u6BCF\u4E2A\u7C7B\u53EA\u80FD\u6709\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u5982\u679C\u5305\u542B\u591A\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u90A3\u4E48\u4F1A\u629B\u51FA\u5F02\u5E38</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u7C7B\u7684\u58F0\u660E</span>
<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7C7B\u7684\u6784\u9020\u65B9\u6CD5</span>
  <span class="token comment">// \u6CE8\u610F: \u4E00\u4E2A\u7C7B\u53EA\u80FD\u6709\u4E00\u4E2A\u6784\u9020\u51FD\u6570</span>
  <span class="token comment">// 1.\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61 moni = {}</span>
  <span class="token comment">// 2.\u5C06\u7C7B\u7684\u539F\u578Bprototype\u8D4B\u503C\u7ED9\u521B\u5EFA\u51FA\u6765\u7684\u5BF9\u8C61 moni.__proto__ = Person.prototype</span>
  <span class="token comment">// 3.\u5C06\u5BF9\u8C61\u8D4B\u503C\u7ED9\u51FD\u6570\u7684this: new\u7ED1\u5B9A this = moni</span>
  <span class="token comment">// 4.\u6267\u884C\u51FD\u6570\u4F53\u4E2D\u7684\u4EE3\u7801</span>
  <span class="token comment">// 5.\u81EA\u52A8\u8FD4\u56DE\u521B\u5EFA\u51FA\u6765\u7684\u5BF9\u8C61</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">var</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;kobe&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class\u4E2D\u7684\u65B9\u6CD5\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#class\u4E2D\u7684\u65B9\u6CD5\u5B9A\u4E49" aria-hidden="true">#</a> class\u4E2D\u7684\u65B9\u6CD5\u5B9A\u4E49</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token keyword">this</span><span class="token punctuation">.</span>_address <span class="token operator">=</span> <span class="token string">&quot;\u5E7F\u5DDE\u5E02&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; eating~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; running~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u7684\u8BBF\u95EE\u5668\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u8BBF\u95EE\u5668\u65B9\u6CD5" aria-hidden="true">#</a> \u7C7B\u7684\u8BBF\u95EE\u5668\u65B9\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token keyword">this</span><span class="token punctuation">.</span>_address <span class="token operator">=</span> <span class="token string">&quot;\u5E7F\u5DDE\u5E02&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; eating~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; running~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7C7B\u7684\u8BBF\u95EE\u5668\u65B9\u6CD5</span>
  <span class="token keyword">get</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u62E6\u622A\u8BBF\u95EE\u64CD\u4F5C&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_address
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token parameter">newAddress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_address <span class="token operator">=</span> newAddress
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u7684\u9759\u6001\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a> \u7C7B\u7684\u9759\u6001\u65B9\u6CD5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token keyword">this</span><span class="token punctuation">.</span>_address <span class="token operator">=</span> <span class="token string">&quot;\u5E7F\u5DDE\u5E02&quot;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u666E\u901A\u7684\u5B9E\u4F8B\u65B9\u6CD5</span>
  <span class="token comment">// \u521B\u5EFA\u51FA\u6765\u7684\u5BF9\u8C61\u8FDB\u884C\u8BBF\u95EE</span>
  <span class="token comment">// var p = new Person()</span>
  <span class="token comment">// p.eating()</span>
  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; eating~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; running~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7C7B\u7684\u8BBF\u95EE\u5668\u65B9\u6CD5</span>
  <span class="token keyword">get</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u62E6\u622A\u8BBF\u95EE\u64CD\u4F5C&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_address
  <span class="token punctuation">}</span>

  <span class="token keyword">set</span> <span class="token function">address</span><span class="token punctuation">(</span><span class="token parameter">newAddress</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u62E6\u622A\u8BBE\u7F6E\u64CD\u4F5C&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_address <span class="token operator">=</span> newAddress
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7C7B\u7684\u9759\u6001\u65B9\u6CD5(\u7C7B\u65B9\u6CD5)</span>
  <span class="token comment">// Person.createPerson()</span>
  <span class="token keyword">static</span> <span class="token function">randomPerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> nameIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> names<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> names<span class="token punctuation">[</span>nameIndex<span class="token punctuation">]</span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u7684\u7EE7\u627F-extends" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u7EE7\u627F-extends" aria-hidden="true">#</a> \u7C7B\u7684\u7EE7\u627F - extends</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">//Student\u79F0\u4E4B\u4E3A\u5B50\u7C7B(\u6D3E\u751F\u7C7B)</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="super\u5173\u952E\u5B57" tabindex="-1"><a class="header-anchor" href="#super\u5173\u952E\u5B57" aria-hidden="true">#</a> super\u5173\u952E\u5B57</h3><p>\u5728\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u4E2D\u4F7F\u7528this\u6216\u8005\u8FD4\u56DE\u9ED8\u8BA4\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u901A\u8FC7super\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570</p><p>super\u7684\u4F7F\u7528\u4F4D\u7F6E\u6709\u4E09\u4E2A\uFF1A\u5B50\u7C7B\u7684\u6784\u9020\u51FD\u6570\u3001\u5B9E\u4F8B\u65B9\u6CD5\u3001\u9759\u6001\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; running~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">eating</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; eating~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">personMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u903B\u8F911&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u903B\u8F912&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u903B\u8F913&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">static</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;PersonStaticMethod&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Student\u79F0\u4E4B\u4E3A\u5B50\u7C7B(\u6D3E\u751F\u7C7B)</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">// JS\u5F15\u64CE\u5728\u89E3\u6790\u5B50\u7C7B\u7684\u65F6\u5019\u5C31\u6709\u8981\u6C42, \u5982\u679C\u6211\u4EEC\u6709\u5B9E\u73B0\u7EE7\u627F</span>
  <span class="token comment">// \u90A3\u4E48\u5B50\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u4E2D, \u5728\u4F7F\u7528this\u4E4B\u524D</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> sno</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>sno <span class="token operator">=</span> sno
  <span class="token punctuation">}</span>

  <span class="token function">studying</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; studying~&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7C7B\u5BF9\u7236\u7C7B\u7684\u65B9\u6CD5\u7684\u91CD\u5199</span>
  <span class="token function">running</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;student &quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&quot; running&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u91CD\u5199personMethod\u65B9\u6CD5</span>
  <span class="token function">personMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u590D\u7528\u7236\u7C7B\u4E2D\u7684\u5904\u7406\u903B\u8F91</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">personMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u903B\u8F914&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u903B\u8F915&quot;</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u5904\u7406\u903B\u8F916&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u91CD\u5199\u9759\u6001\u65B9\u6CD5</span>
  <span class="token keyword">static</span> <span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;StudentStaticMethod&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&quot;why&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>stu<span class="token punctuation">)</span>

<span class="token comment">// console.log(Object.getOwnPropertyDescriptors(stu.__proto__))</span>
<span class="token comment">// console.log(Object.getOwnPropertyDescriptors(stu.__proto__.__proto__))</span>

<span class="token comment">// stu.eating()</span>
<span class="token comment">// stu.running()</span>

stu<span class="token punctuation">.</span><span class="token function">personMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

Student<span class="token punctuation">.</span><span class="token function">staticMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function c(i,l){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","class.html.vue"]]);export{d as default};
