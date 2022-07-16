<template><div><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<p>将程序划分成一个个小的结构，这个结构中编写属于自己的逻辑代码，有自己的作用域，不会影响到其他的结构。</p>
<h2 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJs</h2>
<p><code v-pre>CommonJS</code>规范的核心变量：<code v-pre>exports</code>、<code v-pre>module.exports</code>、<code v-pre>require</code></p>
<p><code v-pre>exports</code>和<code v-pre>module.exports</code>可以负责对模块中的内容进行导出</p>
<p><code v-pre>require</code>函数可以帮助我们导入模块</p>
<h3 id="exports导出" tabindex="-1"><a class="header-anchor" href="#exports导出" aria-hidden="true">#</a> exports导出</h3>
<p>exports是一个对象，可以在这个对象中添加很多个属性，添加的属性会导出</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//main.js</span>
exports<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">'name'</span>
exports<span class="token punctuation">.</span>name2<span class="token operator">=</span><span class="token string">'name2'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//bar.js</span>
<span class="token keyword">const</span> bar<span class="token operator">=</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'main.js'</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//name</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码理解</p>
<ul>
<li>require通过查找方式，找到了exports这个对象</li>
<li>并且将这个exports对象赋值给了bar变量</li>
<li>bar变量就是exports对象了</li>
<li>实际上就是一个浅拷贝</li>
</ul>
<h3 id="module-exports" tabindex="-1"><a class="header-anchor" href="#module-exports" aria-hidden="true">#</a> module.exports</h3>
<p><code v-pre>CommonJS</code>中是没有<code v-pre>module.exports</code>的概念的,但是为了实现模块的导出，Node中使用的是Module的类，每一个模块都是Module的一个实例，也就是module,所以在Node中真正用于导出的其实根本不是exports，而是module.exports</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//01.js</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num1 <span class="token operator">+</span> num2
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  age<span class="token punctuation">,</span>
  sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//02.js</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> age<span class="token punctuation">,</span> sum <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./why.js"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="module-exports和exports的关系" tabindex="-1"><a class="header-anchor" href="#module-exports和exports的关系" aria-hidden="true">#</a> module.exports和exports的关系</h4>
<p>为什么exports也可以导出</p>
<p>这是因为module对象的exports属性是exports对象的一个引用</p>
<p><code v-pre>module.exports = exports</code></p>
<h3 id="commonjs规范缺点" tabindex="-1"><a class="header-anchor" href="#commonjs规范缺点" aria-hidden="true">#</a> CommonJS规范缺点</h3>
<p>CommonJS加载模块是同步的</p>
<h3 id="加载过程" tabindex="-1"><a class="header-anchor" href="#加载过程" aria-hidden="true">#</a> 加载过程</h3>
<p>js运行时加载，是同步的，同步的就意味着一个文件没有加载结束之前，后面的代码都不会执行</p>
<h2 id="es-module" tabindex="-1"><a class="header-anchor" href="#es-module" aria-hidden="true">#</a> ES Module</h2>
<h3 id="export和import关键字来实现模块化" tabindex="-1"><a class="header-anchor" href="#export和import关键字来实现模块化" aria-hidden="true">#</a> export和import关键字来实现模块化</h3>
<ul>
<li>export负责将模块内的内容导出</li>
<li>import负责从其他模块导入内容</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//01.js</span>
<span class="token comment">//方式一</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"你好"</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//方式二: {}中统一导出</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"你好"</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  age<span class="token punctuation">,</span>
  sayHello
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//02.js</span>
<span class="token comment">//方式1</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>age<span class="token punctuation">,</span> sayHello<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'01.js'</span><span class="token punctuation">;</span>
<span class="token comment">//方式2 as别名</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>age <span class="token keyword">as</span> age1<span class="token punctuation">,</span> sayHello<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'01.js'</span><span class="token punctuation">;</span>
<span class="token comment">//方式3: 将导出的所有内容放到一个标识符中</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> foo <span class="token keyword">from</span> <span class="token string">'01.js'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="default默认导出" tabindex="-1"><a class="header-anchor" href="#default默认导出" aria-hidden="true">#</a> default默认导出</h3>
<ul>
<li>默认导出export时可以不需要指定名字</li>
<li>导入时不需要使用 {}，并且可以自己来指定名字</li>
<li>方便和CommonJS相互操作</li>
<li>在一个模块中，只能有一个默认导出（default export）</li>
</ul>
<h3 id="es-module加载过程" tabindex="-1"><a class="header-anchor" href="#es-module加载过程" aria-hidden="true">#</a> ES Module加载过程</h3>
<p>加载js文件的过程是编译（解析）时加载的，并且是异步的，编译时（解析）时加载，意味着import不能和运行时相关的内容放在一起使用，异步的意味着：JS引擎在遇到import时会去获取这个js文件，但是这个获取的过程是异步的，并不会阻塞主线程继 续执行</p>
<h3 id="es-module和commonjs的模块化有一些不同之处" tabindex="-1"><a class="header-anchor" href="#es-module和commonjs的模块化有一些不同之处" aria-hidden="true">#</a> ES Module和CommonJS的模块化有一些不同之处</h3>
<ul>
<li>它使用了import和export关键字</li>
<li>采用编译期的静态分析，并且也加入了动态引用的方式</li>
</ul>
</div></template>
