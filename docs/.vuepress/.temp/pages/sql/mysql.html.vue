<template><div><h1 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> sql</h1>
<h2 id="常见的数据库" tabindex="-1"><a class="header-anchor" href="#常见的数据库" aria-hidden="true">#</a> 常见的数据库</h2>
<p>摘自coderwhy nodejs课程PPT</p>
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
<p>如何在开发中选择他们呢？具体的选择会根据不同的项目进行综合的分析，我这里给一点点建议：</p>
<ul>
<li>目前在公司进行后端开发（Node、Java、Go等），还是以关系型数据库为主</li>
<li>比较常用的用到非关系型数据库的，在爬取大量的数据进行存储时，会比较常见；</li>
</ul>
</div></template>
