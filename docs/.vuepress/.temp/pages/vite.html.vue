<template><div><p><a href="https://juejin.cn/book/7050063811973218341" target="_blank" rel="noopener noreferrer">学习资料<ExternalLinkIcon/></a></p>
<h2 id="搭建demo" tabindex="-1"><a class="header-anchor" href="#搭建demo" aria-hidden="true">#</a> 搭建demo</h2>
<p>使用vite官方推荐使用pnpm</p>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i <span class="token operator">-</span>g pnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>国内镜像（有可能会更新地址，这里以官方最新的为准）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm config <span class="token keyword">set</span> registry https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmmirror.com</span><span class="token regex-delimiter">/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开始搭建demo项目</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在执行完上面这个命令后，pnpm 首先会自动下载 <code v-pre>create-vite</code> 这个第三方包</li>
<li>然后会看到一些项目初始化的操作
<ul>
<li>输入项目名称</li>
<li>选择项目框架(我选择的是vue)</li>
</ul>
</li>
<li>cd到项目目录</li>
<li>pnpm install</li>
<li>启动项目pnpm run dev</li>
</ul>
<h2 id="项目入口文件分析" tabindex="-1"><a class="header-anchor" href="#项目入口文件分析" aria-hidden="true">#</a> 项目入口文件分析</h2>
<h3 id="index-html" tabindex="-1"><a class="header-anchor" href="#index-html" aria-hidden="true">#</a> index.html</h3>
<p>在项目根目录中有一个<code v-pre>index.html</code>文件，这个文件十分关键，因为 Vite 默认会把项目根目录下的<code v-pre>index.html</code>作为入口文件。也就是说，当你访问<code v-pre>http://localhost:3000</code>的时候，Vite 的 Dev Server 会自动返回这个 HTML 文件的内容。我们来看看这个 HTML 究竟写了什么:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/favicon.ico"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Vite App<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
  <span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span> src<span class="token operator">=</span><span class="token string">"/src/main.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>官网分析：</p>
<p>Vite 解析 <code v-pre>&lt;script type=&quot;module&quot; src=&quot;...&quot;&gt;</code> ，这个标签指向你的 JavaScript 源码。甚至内联引入 JavaScript 的 <code v-pre>&lt;script type=&quot;module&quot;&gt;</code> 和引用 CSS 的 <code v-pre>&lt;link href&gt;</code> 也能利用 Vite 特有的功能被解析。另外，<code v-pre>index.html</code> 中的 URL 将被自动转换，因此不再需要 <code v-pre>%PUBLIC_URL%</code> 占位符了。</p>
<p>网络分析：</p>
<p>type=&quot;module&quot;，同时 src 指向了<code v-pre>/src/main.js</code>文件，此时相当于请求了`http://localhost:3000/src/main.js这个资源，Vite 的 Dev Server 此时会接受到这个请求，然后读取对应的文件内容，进行一定的中间处理，最后将处理的结果返回给浏览器。</p>
<p>来看看刚搭建的项目里的main.js文件</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：需要注意的是，在 Vite 项目中，一个<code v-pre>import 语句即代表一个 HTTP 请求</code>。上述两个语句则分别代表了两个不同的请求，Vite Dev Server 会读取本地文件，返回浏览器可以解析的代码。当浏览器解析到新的 import 语句，又会发出新的请求，以此类推，直到所有的资源都加载完成。</p>
<p>Vite 所倡导的<code v-pre>no-bundle</code>理念的真正含义: <strong>利用浏览器原生 ES 模块的支持，实现开发阶段的 Dev Server，进行模块的按需加载</strong>，而不是<strong>先整体打包再进行加载</strong>。相比 Webpack 这种必须打包再加载的传统构建模式，Vite 在开发阶段省略了繁琐且耗时的打包过程，这也是它为什么快的一个重要原因。</p>
<h3 id="vite-config-js" tabindex="-1"><a class="header-anchor" href="#vite-config-js" aria-hidden="true">#</a> vite.config.js</h3>
<p>上面搭建的项目中会看到vite.config.js这个文件，下面来看看它刚开始是长什么样的</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-vue'</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面有介绍Vite 默认会把项目根目录下的<code v-pre>index.html</code>作为入口文件，如果有需求或者面试的时候被问到index.html是要放在src目录里面的要怎么处理呢，这时候就需要<code v-pre>root</code>参数配置项目根目录的位置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时需要改index.html中<code v-pre>&lt;script type=&quot;module&quot; src=&quot;./main.js&quot;&gt;&lt;/script&gt;</code></p>
<h3 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> css</h3>
<p>安装less</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span>g less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>公共的common.less</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@theme-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>想在页面中使用common.less</p>
<p>需要每个页面中都引入，所以有下面的配置全局样式</p>
<p>配置全局样式</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> normalizePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.less'));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// css 相关的配置</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// additionalData 的内容会在每个 less 文件的开头自动注入</span>
        <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>variablePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">";</span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig<span class="token punctuation">,</span> normalizePath <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vite"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">"@vitejs/plugin-vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">"path"</span><span class="token punctuation">;</span>
<span class="token comment">// 用 normalizePath 解决 window 下的路径问题</span>
<span class="token keyword">const</span> variablePath <span class="token operator">=</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"./src/css/common.less"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">root</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"src"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// css 相关的配置</span>
    <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">preprocessorOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// additionalData 的内容会在每个 less 文件的开头自动注入</span>
                <span class="token literal-property property">additionalData</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@import "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>variablePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">";</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以不用每个页面都引入common.less了，可以直接使用common.less里的变量</p>
<h3 id="postcss" tabindex="-1"><a class="header-anchor" href="#postcss" aria-hidden="true">#</a> postcss</h3>
<p>一般可以通过 <code v-pre>postcss.config.js</code> 来配置 postcss ，不过在 Vite 配置文件中已经提供了 PostCSS 的配置入口，可以直接在 Vite 配置文件中进行操作。</p>
<p>来安装一个常用的 PostCSS 插件——<code v-pre>autoprefixer</code>（这个插件主要用来自动为不同的目标浏览器添加样式前缀，解决的是浏览器兼容性的问题。）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm i autoprefixer <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.ts 增加如下的配置</span>
<span class="token keyword">import</span> autoprefixer <span class="token keyword">from</span> <span class="token string">'autoprefixer'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 进行 PostCSS 配置</span>
    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">autoprefixer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token comment">// 指定目标浏览器</span>
          <span class="token literal-property property">overrideBrowserslist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'Chrome > 40'</span><span class="token punctuation">,</span> <span class="token string">'ff > 31'</span><span class="token punctuation">,</span> <span class="token string">'ie 11'</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后， 可以给页面的样式文件中添加一个新的 CSS 属性:</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">text-decoration</span><span class="token punctuation">:</span> dashed<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后执行，<code v-pre>pnpm run build</code>,命令进行打包，可以看到产物中自动补上了浏览器前缀</p>
<p>PostCSS 可以做的事情非常多，甚至能实现 CSS 预处理器语法和 CSS Modules，社区当中也有不少的 PostCSS 插件，除了刚刚提到的<code v-pre>autoprefixer</code>插件，常见的插件还包括:</p>
<ul>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcuth%2Fpostcss-pxtorem" target="_blank" rel="noopener noreferrer">postcss-pxtorem<ExternalLinkIcon/></a>： 用来将 px 转换为 rem 单位，在适配移动端的场景下很常用。</li>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcsstools%2Fpostcss-preset-env" target="_blank" rel="noopener noreferrer">postcss-preset-env<ExternalLinkIcon/></a>: 通过它，你可以编写最新的 CSS 语法，不用担心兼容性问题。</li>
<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fcssnano%2Fcssnano" target="_blank" rel="noopener noreferrer">cssnano<ExternalLinkIcon/></a>: 主要用来压缩 CSS 代码，跟常规的代码压缩工具不一样，它能做得更加智能，比如提取一些公共样式进行复用、缩短一些常见的属性值等等。</li>
</ul>
<h3 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h3>
<h3 id="配置别名" tabindex="-1"><a class="header-anchor" href="#配置别名" aria-hidden="true">#</a> 配置别名</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 别名配置</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'@assets'</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src/assets'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样 Vite 在遇到<code v-pre>@assets</code>路径的时候，会自动帮我们定位至根目录下的<code v-pre>src/assets</code>目录。值得注意的是，alias 别名配置不仅在 JavaScript 的 import 语句中生效，在 CSS 代码的 <code v-pre>@import</code> 和 <code v-pre>url</code>导入语句中也同样生效。</p>
<h3 id="图片加载" tabindex="-1"><a class="header-anchor" href="#图片加载" aria-hidden="true">#</a> 图片加载</h3>
<p>使用别名,同上别名配置</p>
<h3 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h3>
<p>vite-plugin-imagemin</p>
<p>安装</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>imagemin <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//vite.config.ts</span>
<span class="token keyword">import</span> viteImagemin <span class="token keyword">from</span> <span class="token string">'vite-plugin-imagemin'</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 忽略前面的插件</span>
    <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 无损压缩配置，无损压缩下图片质量不会变差</span>
      <span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 有损压缩配置，有损压缩下图片质量可能会变差</span>
      <span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拆包" tabindex="-1"><a class="header-anchor" href="#拆包" aria-hidden="true">#</a> 拆包</h2>
<h3 id="code-splitting" tabindex="-1"><a class="header-anchor" href="#code-splitting" aria-hidden="true">#</a> Code Splitting</h3>
<ul>
<li><code v-pre>bundle</code> 指的是整体的打包产物，包含 JS 和各种静态资源。</li>
<li><code v-pre>chunk</code>指的是打包后的 JS 文件，是 <code v-pre>bundle</code> 的子集。</li>
<li><code v-pre>vendor</code>是指第三方包的打包产物，是一种特殊的 chunk。</li>
</ul>
<p>在传统的单 chunk 打包模式下，当项目代码越来越庞大，最后会导致浏览器下载一个巨大的文件，从页面加载性能的角度来说，主要会导致两个问题:</p>
<ul>
<li>
<ol>
<li>无法做到<strong>按需加载</strong>，即使是当前页面不需要的代码也会进行加载。</li>
</ol>
</li>
<li>
<ol>
<li>线上<strong>缓存复用率</strong>极低，改动一行代码即可导致整个 bundle 产物缓存失效。</li>
</ol>
</li>
</ul>
<p>一个前端页面中的 JS 代码可以分为两个部分: <code v-pre>Initital Chunk</code>和<code v-pre>Async Chunk</code>，前者指页面首屏所需要的 JS 代码，而后者当前页面并不一定需要，一个典型的例子就是 <code v-pre>路由组件</code>，与当前路由无关的组件并不用加载。而项目被打包成单 bundle 之后，无论是<code v-pre>Initial Chunk</code>还是<code v-pre>Async Chunk</code>，都会打包进同一个产物，也就是说，浏览器加载产物代码的时候，会将两者一起加载，导致许多冗余的加载过程，从而影响页面性能。而通过<code v-pre>Code Splitting</code>我们可以将按需加载的代码拆分出单独的 chunk，这样应用在首屏加载时只需要加载<code v-pre>Initial Chunk</code> 即可，避免了冗余的加载过程，使页面性能得到提升。</p>
<p><code v-pre>Code Splitting</code>之后，代码的改动只会影响部分的 chunk 哈希改动</p>
<p>入口文件引用了<code v-pre>A</code>、<code v-pre>B</code>、<code v-pre>C</code>、<code v-pre>D</code>四个组件，当我们修改 A 的代码后，变动的 Chunk 就只有 <code v-pre>A</code> 以及<code v-pre>依赖 A 的 Chunk</code> 中，A 对应的 chunk 会变动，这很好理解，后者也会变动是因为相应的引入语句会变化，如这里的入口文件会发生如下内容变动:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> CompA <span class="token keyword">from</span> <span class="token string">'./A.d3e2f17a.js'</span>
<span class="token comment">// 更新 import 语句</span>
<span class="token keyword">import</span> CompA <span class="token keyword">from</span> <span class="token string">'./A.a5d2f82b.js'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，在改动 <code v-pre>A</code> 的代码后，<code v-pre>B</code>、<code v-pre>C</code>、<code v-pre>D</code>的 chunk 产物 url 并没有发生变化，从而可以让浏览器复用本地的强缓存，大大提升线上应用的加载性能。</p>
<p>vite有自己的默认拆包策略</p>
<h3 id="自定义拆包" tabindex="-1"><a class="header-anchor" href="#自定义拆包" aria-hidden="true">#</a> 自定义拆包</h3>
<p><strong>manualChunks</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// manualChunks 配置</span>
        <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2>
</div></template>
