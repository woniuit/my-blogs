import{_ as n,o as s,c as a,e}from"./app.e5138236.js";const o={},p=e(`<h1 id="\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a> \u6A21\u5757\u5316</h1><p>\u5C06\u7A0B\u5E8F\u5212\u5206\u6210\u4E00\u4E2A\u4E2A\u5C0F\u7684\u7ED3\u6784\uFF0C\u8FD9\u4E2A\u7ED3\u6784\u4E2D\u7F16\u5199\u5C5E\u4E8E\u81EA\u5DF1\u7684\u903B\u8F91\u4EE3\u7801\uFF0C\u6709\u81EA\u5DF1\u7684\u4F5C\u7528\u57DF\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u7684\u7ED3\u6784\u3002</p><h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJs</h2><p><code>CommonJS</code>\u89C4\u8303\u7684\u6838\u5FC3\u53D8\u91CF\uFF1A<code>exports</code>\u3001<code>module.exports</code>\u3001<code>require</code></p><p><code>exports</code>\u548C<code>module.exports</code>\u53EF\u4EE5\u8D1F\u8D23\u5BF9\u6A21\u5757\u4E2D\u7684\u5185\u5BB9\u8FDB\u884C\u5BFC\u51FA</p><p><code>require</code>\u51FD\u6570\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5BFC\u5165\u6A21\u5757</p><h3 id="exports\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#exports\u5BFC\u51FA" aria-hidden="true">#</a> exports\u5BFC\u51FA</h3><p>exports\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5728\u8FD9\u4E2A\u5BF9\u8C61\u4E2D\u6DFB\u52A0\u5F88\u591A\u4E2A\u5C5E\u6027\uFF0C\u6DFB\u52A0\u7684\u5C5E\u6027\u4F1A\u5BFC\u51FA</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//main.js</span>
exports<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&#39;name&#39;</span>
exports<span class="token punctuation">.</span>name2<span class="token operator">=</span><span class="token string">&#39;name2&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//bar.js</span>
<span class="token keyword">const</span> bar<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;main.js&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u7406\u89E3</p><ul><li>require\u901A\u8FC7\u67E5\u627E\u65B9\u5F0F\uFF0C\u627E\u5230\u4E86exports\u8FD9\u4E2A\u5BF9\u8C61</li><li>\u5E76\u4E14\u5C06\u8FD9\u4E2Aexports\u5BF9\u8C61\u8D4B\u503C\u7ED9\u4E86bar\u53D8\u91CF</li><li>bar\u53D8\u91CF\u5C31\u662Fexports\u5BF9\u8C61\u4E86</li><li>\u5B9E\u9645\u4E0A\u5C31\u662F\u4E00\u4E2A\u6D45\u62F7\u8D1D</li></ul><h3 id="module-exports" tabindex="-1"><a class="header-anchor" href="#module-exports" aria-hidden="true">#</a> module.exports</h3><p><code>CommonJS</code>\u4E2D\u662F\u6CA1\u6709<code>module.exports</code>\u7684\u6982\u5FF5\u7684,\u4F46\u662F\u4E3A\u4E86\u5B9E\u73B0\u6A21\u5757\u7684\u5BFC\u51FA\uFF0CNode\u4E2D\u4F7F\u7528\u7684\u662FModule\u7684\u7C7B\uFF0C\u6BCF\u4E00\u4E2A\u6A21\u5757\u90FD\u662FModule\u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u4E5F\u5C31\u662Fmodule,\u6240\u4EE5\u5728Node\u4E2D\u771F\u6B63\u7528\u4E8E\u5BFC\u51FA\u7684\u5176\u5B9E\u6839\u672C\u4E0D\u662Fexports\uFF0C\u800C\u662Fmodule.exports</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//01.js</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token punctuation">,</span>
  sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//02.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> age<span class="token punctuation">,</span> sum <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./why.js&quot;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="module-exports\u548Cexports\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#module-exports\u548Cexports\u7684\u5173\u7CFB" aria-hidden="true">#</a> module.exports\u548Cexports\u7684\u5173\u7CFB</h4><p>\u4E3A\u4EC0\u4E48exports\u4E5F\u53EF\u4EE5\u5BFC\u51FA</p><p>\u8FD9\u662F\u56E0\u4E3Amodule\u5BF9\u8C61\u7684exports\u5C5E\u6027\u662Fexports\u5BF9\u8C61\u7684\u4E00\u4E2A\u5F15\u7528</p><p><code>module.exports = exports</code></p><h3 id="commonjs\u89C4\u8303\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#commonjs\u89C4\u8303\u7F3A\u70B9" aria-hidden="true">#</a> CommonJS\u89C4\u8303\u7F3A\u70B9</h3><p>CommonJS\u52A0\u8F7D\u6A21\u5757\u662F\u540C\u6B65\u7684</p><h3 id="\u52A0\u8F7D\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u8FC7\u7A0B" aria-hidden="true">#</a> \u52A0\u8F7D\u8FC7\u7A0B</h3><p>js\u8FD0\u884C\u65F6\u52A0\u8F7D\uFF0C\u662F\u540C\u6B65\u7684\uFF0C\u540C\u6B65\u7684\u5C31\u610F\u5473\u7740\u4E00\u4E2A\u6587\u4EF6\u6CA1\u6709\u52A0\u8F7D\u7ED3\u675F\u4E4B\u524D\uFF0C\u540E\u9762\u7684\u4EE3\u7801\u90FD\u4E0D\u4F1A\u6267\u884C</p><h2 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> ES Module</h2><h3 id="export\u548Cimport\u5173\u952E\u5B57\u6765\u5B9E\u73B0\u6A21\u5757\u5316" tabindex="-1"><a class="header-anchor" href="#export\u548Cimport\u5173\u952E\u5B57\u6765\u5B9E\u73B0\u6A21\u5757\u5316" aria-hidden="true">#</a> export\u548Cimport\u5173\u952E\u5B57\u6765\u5B9E\u73B0\u6A21\u5757\u5316</h3><ul><li>export\u8D1F\u8D23\u5C06\u6A21\u5757\u5185\u7684\u5185\u5BB9\u5BFC\u51FA</li><li>import\u8D1F\u8D23\u4ECE\u5176\u4ED6\u6A21\u5757\u5BFC\u5165\u5185\u5BB9</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//01.js</span>
<span class="token comment">//\u65B9\u5F0F\u4E00</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u597D&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u65B9\u5F0F\u4E8C: {}\u4E2D\u7EDF\u4E00\u5BFC\u51FA</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F60\u597D&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  age<span class="token punctuation">,</span>
  sayHello
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//02.js</span>
<span class="token comment">//\u65B9\u5F0F1</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>age<span class="token punctuation">,</span> sayHello<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;01.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//\u65B9\u5F0F2 as\u522B\u540D</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>age <span class="token keyword">as</span> age1<span class="token punctuation">,</span> sayHello<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;01.js&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//\u65B9\u5F0F3: \u5C06\u5BFC\u51FA\u7684\u6240\u6709\u5185\u5BB9\u653E\u5230\u4E00\u4E2A\u6807\u8BC6\u7B26\u4E2D</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> foo <span class="token keyword">from</span> <span class="token string">&#39;01.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default\u9ED8\u8BA4\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#default\u9ED8\u8BA4\u5BFC\u51FA" aria-hidden="true">#</a> default\u9ED8\u8BA4\u5BFC\u51FA</h3><ul><li>\u9ED8\u8BA4\u5BFC\u51FAexport\u65F6\u53EF\u4EE5\u4E0D\u9700\u8981\u6307\u5B9A\u540D\u5B57</li><li>\u5BFC\u5165\u65F6\u4E0D\u9700\u8981\u4F7F\u7528 {}\uFF0C\u5E76\u4E14\u53EF\u4EE5\u81EA\u5DF1\u6765\u6307\u5B9A\u540D\u5B57</li><li>\u65B9\u4FBF\u548CCommonJS\u76F8\u4E92\u64CD\u4F5C</li><li>\u5728\u4E00\u4E2A\u6A21\u5757\u4E2D\uFF0C\u53EA\u80FD\u6709\u4E00\u4E2A\u9ED8\u8BA4\u5BFC\u51FA\uFF08default export\uFF09</li></ul><h3 id="es-module\u52A0\u8F7D\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#es-module\u52A0\u8F7D\u8FC7\u7A0B" aria-hidden="true">#</a> ES Module\u52A0\u8F7D\u8FC7\u7A0B</h3><p>\u52A0\u8F7Djs\u6587\u4EF6\u7684\u8FC7\u7A0B\u662F\u7F16\u8BD1\uFF08\u89E3\u6790\uFF09\u65F6\u52A0\u8F7D\u7684\uFF0C\u5E76\u4E14\u662F\u5F02\u6B65\u7684\uFF0C\u7F16\u8BD1\u65F6\uFF08\u89E3\u6790\uFF09\u65F6\u52A0\u8F7D\uFF0C\u610F\u5473\u7740import\u4E0D\u80FD\u548C\u8FD0\u884C\u65F6\u76F8\u5173\u7684\u5185\u5BB9\u653E\u5728\u4E00\u8D77\u4F7F\u7528\uFF0C\u5F02\u6B65\u7684\u610F\u5473\u7740\uFF1AJS\u5F15\u64CE\u5728\u9047\u5230import\u65F6\u4F1A\u53BB\u83B7\u53D6\u8FD9\u4E2Ajs\u6587\u4EF6\uFF0C\u4F46\u662F\u8FD9\u4E2A\u83B7\u53D6\u7684\u8FC7\u7A0B\u662F\u5F02\u6B65\u7684\uFF0C\u5E76\u4E0D\u4F1A\u963B\u585E\u4E3B\u7EBF\u7A0B\u7EE7 \u7EED\u6267\u884C</p><h3 id="es-module\u548Ccommonjs\u7684\u6A21\u5757\u5316\u6709\u4E00\u4E9B\u4E0D\u540C\u4E4B\u5904" tabindex="-1"><a class="header-anchor" href="#es-module\u548Ccommonjs\u7684\u6A21\u5757\u5316\u6709\u4E00\u4E9B\u4E0D\u540C\u4E4B\u5904" aria-hidden="true">#</a> ES Module\u548CCommonJS\u7684\u6A21\u5757\u5316\u6709\u4E00\u4E9B\u4E0D\u540C\u4E4B\u5904</h3><ul><li>\u5B83\u4F7F\u7528\u4E86import\u548Cexport\u5173\u952E\u5B57</li><li>\u91C7\u7528\u7F16\u8BD1\u671F\u7684\u9759\u6001\u5206\u6790\uFF0C\u5E76\u4E14\u4E5F\u52A0\u5165\u4E86\u52A8\u6001\u5F15\u7528\u7684\u65B9\u5F0F</li></ul>`,35),t=[p];function c(i,l){return s(),a("div",null,t)}var u=n(o,[["render",c],["__file","Module.html.vue"]]);export{u as default};
