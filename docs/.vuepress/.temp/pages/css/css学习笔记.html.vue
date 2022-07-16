<template><div><h2 id="重排和重绘" tabindex="-1"><a class="header-anchor" href="#重排和重绘" aria-hidden="true">#</a> 重排和重绘</h2>
<h3 id="重排" tabindex="-1"><a class="header-anchor" href="#重排" aria-hidden="true">#</a> 重排</h3>
<p>将整个网页填白，对内容重新渲染一次。也称回流。</p>
<h3 id="重绘" tabindex="-1"><a class="header-anchor" href="#重绘" aria-hidden="true">#</a> 重绘</h3>
<p>重绘指更改外观属性而不影响几何属性的渲染。</p>
<p><strong>回流对浏览器性能的消耗是高于重绘的，而且回流一定会伴随重绘，重绘却不一定伴随回流。</strong></p>
<h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h3>
<p>回流重绘在操作节点样式时频繁出现，同时也存在很大程度上的性能问题</p>
<p>什么情况下会产生性能问题？</p>
<ul>
<li>改变窗口大小</li>
<li>修改盒模型</li>
<li>增删样式</li>
<li>重构布局</li>
<li>重设尺寸</li>
<li>改变字体</li>
<li>改动文字</li>
</ul>
<p>如何减少和避免回流重绘</p>
<ul>
<li>使用transform代替top（top是几何属性，操作top会改变节点位置从而引发回流，使用transform:translate3d(x,0,0)代替top，只会引发图层重绘，还会间接启动GPU加速）</li>
<li>使用visibility:hidden替换display:none</li>
<li>避免使用Table布局</li>
<li>避免样式节点层级过多，浏览器的CSS解析器解析css文件时，对CSS规则是从右到左匹配查找，样式层级过多会影响回流重绘效率，建议保持CSS规则在3层左右。</li>
<li>动态改变类名而不改变样式</li>
<li>避免节点属性值放在循环里当成循环变量</li>
</ul>
<h3 id="display-none和visibility-hidden对比" tabindex="-1"><a class="header-anchor" href="#display-none和visibility-hidden对比" aria-hidden="true">#</a> display：none和visibility:hidden对比</h3>
<p>（display:none简称DN，visibility:hidden简称VH）</p>
<p>1.占位表现</p>
<p>DN不占据空间，VH占据空间</p>
<p>2.触发影响</p>
<p>DN触发回流重绘，VH触发重绘</p>
<p>3.过渡影响</p>
<p>DN影响过渡不影响动画，VH不影响过渡不影响动画</p>
<p>4.株连效果</p>
<p>DN后自身及其子节点全都不可见</p>
<p>VH后自身及其子节点全都不可见但可声明子节点visibility:visible单独显示</p>
<h2 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h2>
<p><strong>概念</strong></p>
<p>盒模型又名框模型，是一种网页设计思维模型，它把文档节点看成一个盒子。</p>
<p><strong>组成</strong></p>
<p>box = margin + border + padding + content</p>
<p>标准盒模型</p>
<p>节点的width/height只包含content，不包含padding和border。</p>
<p>ie盒子模型</p>
<p>节点的width/height包含border、padding和content。</p>
<p><strong>块级元素</strong></p>
<p>当节点的display声明为block、list-item、table、flex或grid时，该节点被标记为块级元素。块级元素默认宽度为100%，在垂直方向上按顺序放置，同时参与块格式化上下文。</p>
<p><strong>行内元素</strong></p>
<p>当节点的display声明为inline、inline-block、inline-table、inline-flex或inline-grid时，该节点被标记为行内元素。行内元素默认宽度为auto，在水平方向上按顺序放置，同时参与行内格式化上下文。</p>
<h2 id="格式化上下文" tabindex="-1"><a class="header-anchor" href="#格式化上下文" aria-hidden="true">#</a> 格式化上下文</h2>
<p><strong>概念</strong></p>
<p>格式化上下文指决定渲染区域里节点的排版、关系和相互作用的渲染规则。</p>
<p><strong>组成</strong></p>
<p>1.块格式化上下文</p>
<p>BFC是页面上一个独立且隔离的渲染区域，容器里的子节点不会在布局上影响到外面的节点，反之亦然。</p>
<p>2.行内格式化上下文</p>
<p>3.弹性格式化上下文</p>
<p>4.格栅格式化上下文</p>
<h2 id="文档流" tabindex="-1"><a class="header-anchor" href="#文档流" aria-hidden="true">#</a> 文档流</h2>
<p>指节点在排版布局过程中默认使用从左往右从上往下的流式排列方式。在窗体自上而下分成一行行，且每行按照从左至右的顺序排列节点，其显著特点就是从左往右从上往下。</p>
<p><strong>脱流文档流</strong></p>
<p>指节点脱流正常文档流后，在正常文档流中的其他节点将忽略该节点并填补其原先空间。文档一旦脱流，计算其父节点高度时不会将其高度纳入，脱流节点不占据空间，因此添加浮动或定位后会对周围节点布局产生或多或少的影响。</p>
<p>文档流的脱流有两种方式</p>
<p>1.浮动布局：float:left/right</p>
<p>2.定位布局：position:absolute/fixed</p>
<h2 id="层叠上下文" tabindex="-1"><a class="header-anchor" href="#层叠上下文" aria-hidden="true">#</a> 层叠上下文</h2>
<p>z-index</p>
<h2 id="样式计算" tabindex="-1"><a class="header-anchor" href="#样式计算" aria-hidden="true">#</a> 样式计算</h2>
<p><strong>优先级权重</strong></p>
<p>!important &gt;内联样式,外联样式&gt;Id选择器&gt;类选择器，伪类选择器，属性选择器&gt;元素选择器，伪元素选择器&gt;通配选择器，后代选择器，兄弟选择器</p>
<p><strong>像素单位</strong></p>
<p>PX 像素单位</p>
<p>em 相对于当前节点字体</p>
<p>rem 相对于根节点字体</p>
<p>vw 相对视窗宽度</p>
<p>vh 相对视窗高度</p>
</div></template>
