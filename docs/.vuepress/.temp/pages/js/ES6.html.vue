<template><div><h2 id="let-const" tabindex="-1"><a class="header-anchor" href="#let-const" aria-hidden="true">#</a> let/const</h2>
<ul>
<li>let、const不允许重复声明变量</li>
<li>let、const没有进行作用域提升</li>
<li>let、const是不会给window上添加任何属性的</li>
</ul>
<h2 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串" aria-hidden="true">#</a> 模板字符串</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, age is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, height is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>height<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解构" tabindex="-1"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h2>
<p><strong>数组</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"abc"</span><span class="token punctuation">,</span> <span class="token string">"cba"</span><span class="token punctuation">,</span> <span class="token string">"nba"</span><span class="token punctuation">]</span>
<span class="token comment">// var item1 = names[0]</span>
<span class="token comment">// var item2 = names[1]</span>
<span class="token comment">// var item3 = names[2]</span>

<span class="token comment">// 对数组的解构: []</span>
<span class="token keyword">var</span> <span class="token punctuation">[</span>item1<span class="token punctuation">,</span> item2<span class="token punctuation">,</span> item3<span class="token punctuation">]</span> <span class="token operator">=</span> names
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item1<span class="token punctuation">,</span> item2<span class="token punctuation">,</span> item3<span class="token punctuation">)</span>

<span class="token comment">// 解构后面的元素</span>
<span class="token keyword">var</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> itemz<span class="token punctuation">]</span> <span class="token operator">=</span> names
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>itemz<span class="token punctuation">)</span>

<span class="token comment">// 解构出一个元素,后面的元素放到一个新数组中</span>
<span class="token keyword">var</span> <span class="token punctuation">[</span>itemx<span class="token punctuation">,</span> <span class="token operator">...</span>newNames<span class="token punctuation">]</span> <span class="token operator">=</span> names
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>itemx<span class="token punctuation">,</span> newNames<span class="token punctuation">)</span>

<span class="token comment">// 解构的默认值</span>
<span class="token keyword">var</span> <span class="token punctuation">[</span>itema<span class="token punctuation">,</span> itemb<span class="token punctuation">,</span> itemc<span class="token punctuation">,</span> itemd <span class="token operator">=</span> <span class="token string">"aaa"</span><span class="token punctuation">]</span> <span class="token operator">=</span> names
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>itemd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对象</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1.88</span>
<span class="token punctuation">}</span>

<span class="token comment">// 对象的解构: {}</span>
<span class="token keyword">var</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">,</span> height<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> newName <span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span>

<span class="token keyword">var</span> <span class="token punctuation">{</span> <span class="token literal-property property">address</span><span class="token operator">:</span> newAddress <span class="token operator">=</span> <span class="token string">"广州市"</span> <span class="token punctuation">}</span> <span class="token operator">=</span> obj
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newAddress<span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>name<span class="token punctuation">,</span> info<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">foo</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-map-weakset-weakmap" tabindex="-1"><a class="header-anchor" href="#set-map-weakset-weakmap" aria-hidden="true">#</a> Set/Map/WeakSet/WeakMap</h2>
<p>在ES6之前，我们存储数据的结构主要有两种：数组、对象,在ES6中新增了另外两种数据结构：Set、Map，以及它们的另外形式WeakSet、WeakMap</p>
<h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> <strong>Set</strong></h3>
<p>Set是一个新增的数据结构，可以用来保存数据，类似于数组，但是和数组的区别是元素不能重复。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{ 10, 30 }</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//{ 10, 20, 30 }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>set常见的方法</p>
<p>size</p>
<p>返回Set中元素的个数</p>
<p>console.log(set.size);</p>
<p>add</p>
<p>add(value)：添加某个元素，返回Set对象本身</p>
<p>delete</p>
<p>delete(value)：从set中删除和这个值相等的元素，返回boolean类型</p>
<p>has</p>
<p>has(value)：判断set中是否存在某个元素，返回boolean类型；</p>
<p>clear</p>
<p>clear()：清空set中所有的元素，没有返回值</p>
<p>forEach</p>
<p>forEach(callback, [, thisArg])：通过forEach遍历set</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>arrSet<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> arrSet<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="weakset" tabindex="-1"><a class="header-anchor" href="#weakset" aria-hidden="true">#</a> <strong>weakSet</strong></h3>
<p>和Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构.</p>
<p>那么和Set有什么区别呢？</p>
<ul>
<li>WeakSet中只能存放对象类型，不能存放基本数据类型</li>
<li>WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收；</li>
</ul>
<p>WeakSet常见的方法</p>
<p>add(value)：添加某个元素，返回WeakSet对象本身</p>
<p>delete(value)：从WeakSet中删除和这个值相等的元素，返回boolean类型；</p>
<p>has(value)：判断WeakSet中是否存在某个元素，返回boolean类型</p>
<h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h3>
<p>一个新增的数据结构是Map，用于存储映射关系</p>
<p>在之前我们可以使用对象来存储映射关系，他们有什么区别呢？</p>
<ul>
<li>
<p>事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）；</p>
</li>
<li>
<p>某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key；</p>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span> <span class="token punctuation">}</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"kobe"</span> <span class="token punctuation">}</span>

<span class="token comment">// 2.Map就是允许我们对象类型来作为key的</span>
<span class="token comment">// 构造方法的使用</span>
<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token string">"aaa"</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>obj2<span class="token punctuation">,</span> <span class="token string">"bbb"</span><span class="token punctuation">)</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"ccc"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span>

<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'why'</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token string">'aaa'</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'kobe'</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token string">'bbb'</span><span class="token punctuation">,</span>
  <span class="token number">1</span> <span class="token operator">=></span> <span class="token string">'ccc'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Map的常用方法</p>
<p>size：返回Map中元素的个数；</p>
<p>set(key, value)：在Map中添加key、value，并且返回整个Map对象</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> map2<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
map2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"why"</span><span class="token punctuation">,</span> <span class="token string">"eee"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>has(key)：判断是否包括某一个key，返回Boolean类型</p>
<p>delete(key)：根据key删除一个键值对，返回Boolean类型；</p>
<p>clear()：清空所有的元素；</p>
<p>forEach(callback, [, thisArg])：通过forEach遍历Map</p>
<h3 id="weakmap" tabindex="-1"><a class="header-anchor" href="#weakmap" aria-hidden="true">#</a> WeakMap</h3>
<p>和Map有什么区别呢</p>
<p>WeakMap的key只能使用对象，不接受其他的类型作为key；</p>
<p>WeakMap的key对对象想的引用是弱引用，如果没有其他引用引用这个对象，那么GC可以回收该对象</p>
<h2 id="object-values" tabindex="-1"><a class="header-anchor" href="#object-values" aria-hidden="true">#</a> Object values</h2>
<p>可以通过 Object.keys 获取一个对象所有的key，在ES8中提供了 Object.values 来获取所有的value值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//[ 'name', 'age' ]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment">//[ 'why', 18 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-entries" tabindex="-1"><a class="header-anchor" href="#object-entries" aria-hidden="true">#</a> Object entries</h2>
<p>Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"why"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[ [ 'name', 'why' ], [ 'age', 18 ] ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="padstart-和-padend" tabindex="-1"><a class="header-anchor" href="#padstart-和-padend" aria-hidden="true">#</a> padStart 和 padEnd</h2>
<p>ES8中增加了 padStart 和 padEnd 方法，分 别是对字符串的首尾进行填充的</p>
<p>应用场景：比如需要对身份证、银行卡的前面位数进行隐藏</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">"Hello World"</span>

<span class="token keyword">const</span> newMessage <span class="token operator">=</span> message<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newMessage<span class="token punctuation">)</span>

<span class="token comment">// 案例</span>
<span class="token keyword">const</span> cardNumber <span class="token operator">=</span> <span class="token string">"321324234242342342341312"</span>
<span class="token keyword">const</span> lastFourCard <span class="token operator">=</span> cardNumber<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> finalCard <span class="token operator">=</span> lastFourCard<span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span>cardNumber<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token string">"*"</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>finalCard<span class="token punctuation">)</span>

<span class="token operator">**</span><span class="token operator">**</span>Hello World<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
<span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token operator">**</span><span class="token number">1312</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flat-flatmap" tabindex="-1"><a class="header-anchor" href="#flat-flatmap" aria-hidden="true">#</a> flat flatMap</h2>
<p>flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返 回。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nums <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">78</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newNums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNums<span class="token punctuation">)</span> <span class="token comment">//[ 10, 20, 2, 9, [ 30, 40 ], [ 10, 45 ], 78, 55, 88 ]</span>

<span class="token keyword">const</span> newNums2 <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNums2<span class="token punctuation">)</span><span class="token comment">//[10, 20,  2,  9, 30,40, 10, 45, 78, 55,88]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组</p>
<ul>
<li>flatMap是先进行map操作，再做flat的操作</li>
<li>flatMap中的flat相当于深度为1</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> nums2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newNums3 <span class="token operator">=</span> nums2<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> newNums4 <span class="token operator">=</span> nums2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> item <span class="token operator">*</span> <span class="token number">2</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNums3<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newNums4<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimstart-trimend" tabindex="-1"><a class="header-anchor" href="#trimstart-trimend" aria-hidden="true">#</a> trimStart trimEnd</h2>
<p>去除收尾空格</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token string">"    Hello World    "</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
Hello World
Hello World    
    Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空值合并运算" tabindex="-1"><a class="header-anchor" href="#空值合并运算" aria-hidden="true">#</a> 空值合并运算 ??</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token comment">// const bar = foo || "default value"</span>
<span class="token keyword">const</span> bar <span class="token operator">=</span> foo <span class="token operator">??</span> <span class="token string">"defualt value"</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span>defualt value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
