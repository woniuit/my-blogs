<template><div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h2>
<p>变量需要存在哪里，需要一套良好的设计规则来存储变量，方便以后查找到变量，这套规则就叫作用域。</p>
<h3 id="理解作用域" tabindex="-1"><a class="header-anchor" href="#理解作用域" aria-hidden="true">#</a> 理解作用域</h3>
<p><strong>演员表</strong></p>
<ul>
<li>
<p>引擎</p>
<p>从头到尾负责js的执行和编译过程</p>
</li>
<li>
<p>编译器</p>
<p>负责语法分析和代码生成等脏活累活</p>
</li>
<li>
<p>作用域</p>
<p>负责收集并维护由所有声明的标识符（变量）组成的一系列查 询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。</p>
</li>
</ul>
<p><strong>对话</strong></p>
<p>变量的赋值会执行两个动作，首先编译器会在当前作用域中声明一个变量(如果之前没有声明过)，然后在运行时引擎会查找该变量，如果能找到就会进行赋值。</p>
<h3 id="函数作用域和块作用域" tabindex="-1"><a class="header-anchor" href="#函数作用域和块作用域" aria-hidden="true">#</a> 函数作用域和块作用域</h3>
<p>函数作用域的含义是指，属于这个函数的全部变量都可以在整个函数的范围内使用及复 用（事实上在嵌套的作用域中也可以使用）。</p>
</div></template>
