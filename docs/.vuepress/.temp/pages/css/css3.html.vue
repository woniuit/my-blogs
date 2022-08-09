<template><div><h1 id="css3" tabindex="-1"><a class="header-anchor" href="#css3" aria-hidden="true">#</a> css3</h1>
<h2 id="过渡transition" tabindex="-1"><a class="header-anchor" href="#过渡transition" aria-hidden="true">#</a> 过渡transition</h2>
<p><strong>语法</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>transition： CSS属性，花费时间，效果曲线<span class="token punctuation">(</span>默认ease<span class="token punctuation">)</span>，延迟时间<span class="token punctuation">(</span>默认0<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>demo</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">&lt;!DOCTYPE html>
&lt;html lang="en">
    &lt;head>
        &lt;meta charset="UTF-8" />
        &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" />
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" />
        &lt;title>Document&lt;/title>
        &lt;style>
            .demo1</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.demo1:hover</span><span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token property">transition</span><span class="token punctuation">:</span> all 2s<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token selector">.demo2</span><span class="token punctuation">{</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
                <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
                <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        &lt;/style>
    &lt;/head>
    &lt;body>
        &lt;div class=<span class="token string">"demo1"</span>>demo1&lt;/div>
        &lt;div class=<span class="token string">"demo2"</span>>demo2&lt;/div>
    &lt;/body>
&lt;/html>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画" tabindex="-1"><a class="header-anchor" href="#动画" aria-hidden="true">#</a> 动画</h2>
<p><strong>语法</strong></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>animation：动画名称，一个周期花费时间，运动曲线（默认ease），动画延迟（默认0），播放次数（默认1），是否反向播放动画（默认normal），是否暂停动画（默认running）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>demo1</strong></p>
</div></template>
