<template><div><h1 id="静态部署" tabindex="-1"><a class="header-anchor" href="#静态部署" aria-hidden="true">#</a> 静态部署</h1>
<h2 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> vercel</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<p>vercel 的前身叫 ZEIT，做的产品有 Next.js（React SSR 框架）。</p>
<p>vercel 是一个站点托管平台，提供CDN加速，同类的平台有Netlify 和 Github Pages，相比之下，vercel 国内的访问速度更快，并且提供Production环境和development环境，对于项目开发非常的有用的，并且支持持续集成，一次push或者一次PR会自动化构建发布，发布在development环境，都会生成不一样的链接可供预览。</p>
<p>点击可以打开<a href="https://vercel.com/login?next=%2Fdashboard" target="_blank" rel="noopener noreferrer">地址<ExternalLinkIcon/></a></p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<ul>
<li>首先，打开对应的地址会看到一个登录界面,这里我选择登录GitHub，我的博客代码也是放在GitHub上。</li>
</ul>
<p><img src="/13.png" alt="1"></p>
<ul>
<li>登录成功之后，vercel会关联自己的GitHub账号。你会看到这样的页面，选择创建新项目</li>
</ul>
<p><img src="/14.png" alt="2"></p>
<ul>
<li>
<p>接着引入你想要部署的项目
<img src="/15.png" alt="3"></p>
</li>
<li>
<p>设置项目需要部署的文件夹
<img src="/16.png" alt="4"></p>
</li>
<li>
<p>完成之后点击deploy部署既可。</p>
</li>
<li>
<p>或者可以点击这里设置目录，然后再重新部署
<img src="/17.png" alt="4"></p>
</li>
</ul>
</div></template>
