<template><div><h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> sql</h1>
<h2 id="常见的数据库" tabindex="-1"><a class="header-anchor" href="#常见的数据库" aria-hidden="true">#</a> 常见的数据库</h2>
<p>通常将数据划分成两类：关系型数据库和非关系型数据库。</p>
<p>关系型数据库：MySQL、Oracle、DB2、SQL Server、Postgre SQL等</p>
<ul>
<li>关系型数据库通常我们会创建很多个二维数据表</li>
<li>数据表之间相互关联起来，形成一对一、一对多、多对对等关系；</li>
<li>之后可以利用SQL语句在多张表中查询我们所需的数据</li>
<li>支持事务，对数据的访问更加的安全</li>
</ul>
<p>非关系型数据库：MongoDB、Redis、Memcached、HBse等；</p>
<ul>
<li>非关系型数据库的英文其实是Not only SQL，也简称为NoSQL；</li>
<li>相当而已非关系型数据库比较简单一些，存储数据也会更加自由（甚至我们可以直接将一个复杂的json对象直接塞入到数据库中）；</li>
<li>NoSQL是基于Key-Value的对应关系，并且查询的过程中不需要经过SQL解析，所以性能更高；</li>
<li>NoSQL通常不支持事物，需要在自己的程序中来保证一些原子性的操作</li>
</ul>
<p>如何在开发中选择他们呢？具体的选择会根据不同的项目进行综合的分析，</p>
<ul>
<li>目前在公司进行后端开发（Node、Java、Go等），还是以关系型数据库为主</li>
<li>比较常用的用到非关系型数据库的，在爬取大量的数据进行存储时，会比较常见；</li>
</ul>
<h2 id="gut工具" tabindex="-1"><a class="header-anchor" href="#gut工具" aria-hidden="true">#</a> Gut工具</h2>
<p>Navicat</p>
<h2 id="数据库的操作" tabindex="-1"><a class="header-anchor" href="#数据库的操作" aria-hidden="true">#</a> 数据库的操作</h2>
<h3 id="查看当前数据库" tabindex="-1"><a class="header-anchor" href="#查看当前数据库" aria-hidden="true">#</a> 查看当前数据库</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">#查看所有的数据库</span>
<span class="token keyword">SHOW</span> <span class="token keyword">DATABASES</span>

<span class="token comment"># 使用某一个数据</span>
<span class="token keyword">USE</span> coderhub<span class="token punctuation">(</span>数据库名称<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># 查看当前正在使用的数据库</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DATABASE</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建新的数据库" tabindex="-1"><a class="header-anchor" href="#创建新的数据库" aria-hidden="true">#</a> 创建新的数据库</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 创建数据库语句</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> bilibili<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 删除数据库</span>
<span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXIT</span> bilibili<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改数据库" tabindex="-1"><a class="header-anchor" href="#修改数据库" aria-hidden="true">#</a> 修改数据库</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 修改数据库的字符集和排序规则</span>
<span class="token keyword">ALTER</span> <span class="token keyword">DATABASE</span> bilibili <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> <span class="token operator">=</span> utf8 <span class="token keyword">COLLATE</span> <span class="token operator">=</span> utf8_unicode_ci<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据库表的操作" tabindex="-1"><a class="header-anchor" href="#数据库表的操作" aria-hidden="true">#</a> 数据库表的操作</h2>
<h3 id="查看数据表" tabindex="-1"><a class="header-anchor" href="#查看数据表" aria-hidden="true">#</a> 查看数据表</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 查看所有的数据表</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>
<span class="token comment"># 查看某一个表结构</span>
<span class="token keyword">DESC</span> <span class="token keyword">user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建数据表" tabindex="-1"><a class="header-anchor" href="#创建数据表" aria-hidden="true">#</a> 创建数据表</h3>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span><span class="token punctuation">(</span>
name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
age <span class="token keyword">INT</span><span class="token punctuation">,</span>
height <span class="token keyword">DOUBLE</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
