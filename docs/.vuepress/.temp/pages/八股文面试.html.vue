<template><div><h2 id="http和https的区别" tabindex="-1"><a class="header-anchor" href="#http和https的区别" aria-hidden="true">#</a> HTTP和HTTPS的区别</h2>
<ul>
<li>HTTP是明文传输，HTTPS是具有安全性SSL的加密传输，HTTPS可以防止传输的过程中数据被盗取</li>
<li>HTTP端口是80，HTTPS是443</li>
<li>HTTPS缓存并不是很高效，消耗大</li>
<li>HTTPS在同一个IP下，不可以绑定多个域名</li>
<li>HTTPS成本比HTTP成本高</li>
</ul>
<h2 id="https的工作原理" tabindex="-1"><a class="header-anchor" href="#https的工作原理" aria-hidden="true">#</a> HTTPS的工作原理</h2>
<ul>
<li>客户端向web服务器端发送请求，会要求web服务器端建立ssl链接</li>
<li>web服务器端会返回协议服务证书给客户端</li>
<li>客户端和web服务器端会协商建立安全等级</li>
<li>双方建立了统一的安全等级，会建立会话密钥</li>
<li>wbe服务器会通过自己的私钥解密会话密钥，通过会话密钥加密与客户端的通信</li>
</ul>
<h2 id="tcp三次握手" tabindex="-1"><a class="header-anchor" href="#tcp三次握手" aria-hidden="true">#</a> TCP三次握手</h2>
<ul>
<li>客户端会给服务器发送一个包</li>
<li>服务器收到这个包，会再返回一个包给客户端</li>
<li>客户端拿到这个包再发送给服务端</li>
<li>服务端验证包通过，建立链接</li>
</ul>
<h2 id="tcp四次握手" tabindex="-1"><a class="header-anchor" href="#tcp四次握手" aria-hidden="true">#</a> TCP四次握手</h2>
<ul>
<li>客户端连接要发出释放报文</li>
<li>服务端接收到释放报文连接，发出确认</li>
<li>客户端进入等待状态</li>
<li>服务端发送最后的数据，就向客户端发送释放报文</li>
<li>客户端收到报文，发出确认</li>
<li>服务端接收到报文，释放报文</li>
</ul>
<h2 id="浏览器的缓存机制" tabindex="-1"><a class="header-anchor" href="#浏览器的缓存机制" aria-hidden="true">#</a> 浏览器的缓存机制</h2>
<p>浏览器第一次发送请求，会先去找浏览器缓存，没有缓存的话就发送HTTP请求，服务端返回数据和缓存</p>
<h2 id="从输入url到页面加载的过程" tabindex="-1"><a class="header-anchor" href="#从输入url到页面加载的过程" aria-hidden="true">#</a> 从输入url到页面加载的过程</h2>
<ul>
<li>输入url</li>
<li>查找缓存，如果有就显示页面，没有就下一步</li>
<li>解析DNS域名，找到对应IP地址</li>
<li>建立TCP链接</li>
<li>发起HTTP请求</li>
<li>服务器响应请求，返回HTML文件给浏览器</li>
<li>关闭TCP连接，通过TCP四次握手释放TCP连接</li>
<li>浏览器渲染</li>
</ul>
<h1 id="vue体系" tabindex="-1"><a class="header-anchor" href="#vue体系" aria-hidden="true">#</a> VUE体系</h1>
<h4 id="route和-router的区别" tabindex="-1"><a class="header-anchor" href="#route和-router的区别" aria-hidden="true">#</a> $route和$router的区别</h4>
<p>$route是路由信息对象，包括path，params，hash，query，fullPath，matched，name等路由信息参数。
而$router是路由实例对象包括了路由的跳转方法，钩子函数等。</p>
<h4 id="vue中组件生命周期调用顺序" tabindex="-1"><a class="header-anchor" href="#vue中组件生命周期调用顺序" aria-hidden="true">#</a> Vue中组件生命周期调用顺序</h4>
<p>组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。
组件的销毁操作是先父后子，销毁完成的顺序是先子后父。
加载渲染过程
父beforeCreate-&gt;父created-&gt;父beforeMount-&gt;子beforeCreate-&gt;子created-&gt;子beforeMount- &gt;子mounted-&gt;父mounted
子组件更新过程
父beforeUpdate-&gt;子beforeUpdate-&gt;子updated-&gt;父updated
父组件更新过程
父 beforeUpdate -&gt; 父 updated
销毁过程
父beforeDestroy-&gt;子beforeDestroy-&gt;子destroyed-&gt;父destroyed</p>
<h4 id="说一下v-model的原理" tabindex="-1"><a class="header-anchor" href="#说一下v-model的原理" aria-hidden="true">#</a> 说一下v-model的原理</h4>
<p>v-model本质就是一个语法糖，可以看成是value + input方法的语法糖。 可以通过model属性的prop和event属性来进行自定义。原生的v-model，会根据标签的不同生成不同的事件和属性。</p>
<h4 id="vue-loader是什么" tabindex="-1"><a class="header-anchor" href="#vue-loader是什么" aria-hidden="true">#</a> vue-loader是什么</h4>
<p>vue文件的一个加载器，跟template/js/style转换成js模块。</p>
<h4 id="常用的事件修饰符" tabindex="-1"><a class="header-anchor" href="#常用的事件修饰符" aria-hidden="true">#</a> 常用的事件修饰符</h4>
<p>.stop:阻止冒泡
.prevent:阻止默认行为
.self:仅绑定元素自身触发
.once: 2.1.4 新增,只触发一次
passive: 2.3.0 新增,滚动事件的默认行为 (即滚动行为) 将会立即触发,不能和.prevent 一起使用
.sync 修饰符</p>
<h4 id="vue-router中params和query的区别" tabindex="-1"><a class="header-anchor" href="#vue-router中params和query的区别" aria-hidden="true">#</a> vue-router中params和query的区别</h4>
<p>query要用path来引入  query在url中显示参数
params要用name来引入 params在url中不显示参数</p>
<h4 id="单页面应用和多页面应用" tabindex="-1"><a class="header-anchor" href="#单页面应用和多页面应用" aria-hidden="true">#</a> 单页面应用和多页面应用</h4>
<p>单页面跳转仅刷新局部资源 ，公共资源(js、css等)仅需加载一次；多页面跳转刷新所有资源，每个公共资源(js、css等)需选择性重新加载</p>
<h4 id="hash和history" tabindex="-1"><a class="header-anchor" href="#hash和history" aria-hidden="true">#</a> hash和History</h4>
<p>hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面。</p>
<p>history
利用了 HTML5 History Interface 中新增的 pushState() 和 replaceState() 方法
它们执行修改时，虽然改变了当前的 URL，但浏览器不会立即向后端发送请求。
通过history api，我们丢掉了丑陋的#，但是它也有个问题：不怕前进，不怕后退，就怕刷新，f5，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的。
在hash模式下，前端路由修改的是#中的信息，而浏览器请求时不会将 # 后面的数据发送到后台，所以没有问题。但是在history下，你可以自由的修改path，当刷新时，如果服务器中没有相应的响应或者资源，则会刷新出来404页面。</p>
<h4 id="proxy与object-defineproperty的优劣对比" tabindex="-1"><a class="header-anchor" href="#proxy与object-defineproperty的优劣对比" aria-hidden="true">#</a> Proxy与Object.defineProperty的优劣对比?</h4>
<p><strong>Proxy的优势</strong>如下:</p>
<ul>
<li>Proxy可以直接监听对象而非属性</li>
<li>Proxy可以直接监听数组的变化</li>
<li>Proxy有多达13种拦截方法,不限于apply、ownKeys、deleteProperty、has等等是Object.defineProperty不具备的</li>
<li>Proxy返回的是一个新对象,我们可以只操作新的对象达到目的,而Object.defineProperty只能遍历对象属性直接修改</li>
<li>Proxy作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利</li>
</ul>
<p><strong>Object.defineProperty的优势</strong>如下:</p>
<ul>
<li>兼容性好,支持IE9</li>
</ul>
<h4 id="父组件可以监听到子组件的生命周期吗" tabindex="-1"><a class="header-anchor" href="#父组件可以监听到子组件的生命周期吗" aria-hidden="true">#</a> 父组件可以监听到子组件的生命周期吗</h4>
<p>@hook</p>
<h4 id="谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#谈谈你对-keep-alive-的了解" aria-hidden="true">#</a> 谈谈你对 keep-alive 的了解</h4>
<p>keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染 ，其有以下特性：</p>
<ul>
<li>一般结合路由和动态组件一起使用，用于缓存组件；</li>
<li>提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；</li>
<li>对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。</li>
</ul>
<h4 id="vue-框架怎么实现对象和数组的监听" tabindex="-1"><a class="header-anchor" href="#vue-框架怎么实现对象和数组的监听" aria-hidden="true">#</a> Vue 框架怎么实现对象和数组的监听</h4>
<h1 id="js" tabindex="-1"><a class="header-anchor" href="#js" aria-hidden="true">#</a> JS</h1>
<h4 id="基本数据类型和引用数据类型的区别" tabindex="-1"><a class="header-anchor" href="#基本数据类型和引用数据类型的区别" aria-hidden="true">#</a> 基本数据类型和引用数据类型的区别</h4>
<h5 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h5>
<p>1.基本数据类型的值是不可变的</p>
<p>2.基本数据类型是存放在栈区的</p>
<p>3.基本数据类型不可以添加属性和方法</p>
<p>4.基本数据类型的赋值时简单赋值，基本数据类型的比较是值的比较</p>
<h5 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h5>
<p>1.引用类型的值是可以改变的</p>
<p>2.引用类型可以添加属性和方法</p>
<p>3.引用类型同时保存在栈区和堆区中，栈区保存变量标识符和指向堆内存的地址</p>
<p>4.引用类型的比较是指针地址的比较</p>
<h4 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> this</h4>
<p>1.单独的this指向Window对象</p>
<p>2.全局函数中的this也是指向Window对象，严格模式下，this是undefined</p>
<p>3.函数调用的时候，前面加上一个new关键字，所谓构造函数就是通过这个函数生成一个新对象，这时this就指向这个新对象</p>
<p>4.定时器中的this，指向的是window</p>
<p>5.元素绑定事件，事件触发后，执行的函数中的this指向的是当前元素</p>
<p>6.用call和apply的方式可以改变this指向</p>
<h4 id="call-apply-bind" tabindex="-1"><a class="header-anchor" href="#call-apply-bind" aria-hidden="true">#</a> call，apply，bind</h4>
<h5 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h5>
<p>call传入的参数数量不固定，第一个参数也是代表函数体内的this指向，从第二个参数开始往后，每个参数被依次传入函数</p>
<h5 id="apply" tabindex="-1"><a class="header-anchor" href="#apply" aria-hidden="true">#</a> apply</h5>
<p>apply接受连个参数，第一个参数指定了函数体内this对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组。</p>
<h5 id="bind" tabindex="-1"><a class="header-anchor" href="#bind" aria-hidden="true">#</a> bind</h5>
<p>bind参数类型和call相同，不过它不会执行函数，而是修改this后返回一个新的函数</p>
<h4 id="new操作符具体干了什么" tabindex="-1"><a class="header-anchor" href="#new操作符具体干了什么" aria-hidden="true">#</a> new操作符具体干了什么</h4>
<p>1.创建了一个空对象</p>
<p>2.继承了该函数的原型</p>
<p>3.属性和方法被加入到this引用的对象中</p>
<p>4.新创建的对象由this所引用，并且最后隐试的返回this</p>
<h4 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h4>
<p>1.浏览器缓存分为强缓存和协商缓存</p>
<h5 id="_2-当客户端请求某个资源时" tabindex="-1"><a class="header-anchor" href="#_2-当客户端请求某个资源时" aria-hidden="true">#</a> 2.当客户端请求某个资源时</h5>
<p>（1）先根据这个资源的一些 http header 判断它是否命中强缓存，如果命中，则直接从本地获取缓存资源，不会发请求到服务器；</p>
<p>（2）当强缓存没有命中时，客户端会发送请求到服务器，服务器通过另一些request header验证这个资源是否命中协商缓存，称为http再验证，如果命中，服务器将请求返回，但不返回资源，而是告诉客户端直接从缓存中获取，客户端收到返回后就会从缓存中获取资源；</p>
<p>（3）当协商缓存也没命中时，服务器就会将资源发送回客户端。</p>
<p>（4）当 ctrl+f5 强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；</p>
<p>（5）当 f5刷新网页时，跳过强缓存，但是会检查协商缓存；</p>
<p>3.强缓存和协商缓存共同之处在于，如果命中缓存，服务器都不会返回资源；区别是，强缓存不对发送请求到服务器，但协商缓存会。</p>
<h4 id="cookies、sessionstorage、localstorage-的区别" tabindex="-1"><a class="header-anchor" href="#cookies、sessionstorage、localstorage-的区别" aria-hidden="true">#</a> cookies、sessionStorage、localStorage  的区别</h4>
<p>1.cookie是网站为了标示用户身份而储存在用户本地的数据</p>
<p>2.cookie数据始终在同源的http请求中携带，跨域需要设置withCredentials = true</p>
<p>3.sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存</p>
<p>4.cookie数据大小不能超过4k</p>
<p>5.cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭</p>
<p>6.sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大，因不同浏览器大小不同</p>
<h4 id="cookies和session的区别" tabindex="-1"><a class="header-anchor" href="#cookies和session的区别" aria-hidden="true">#</a> cookies和session的区别</h4>
<p>1.<em><strong>存储的位置不同</strong></em>，cookie存在客户端浏览器上，session存储在服务器端</p>
<p>2.<em><strong>存储容量不同</strong></em>，单个cookie保存的数据&lt;=4kb，session没有限制。</p>
<p>3.<em><strong>存储方式不同</strong></em>,cookie中只能保管ASCII字符串，并需要通过编码方式存储为Unicode字符或者二进制数据。session中能够存储任何类型的数据</p>
<p>4.<em><strong>隐私策略不同</strong></em>,cookie对客户端是可见的，session是存储在服务端客户端是不可见，所以session更安全</p>
<p>5.<em><strong>有效期上不同</strong></em>，开发可以通过设置cookie的属性，达到使cookie长期有效的效果。session关闭窗口就会失效</p>
<p>6.<em><strong>服务器压力不同</strong></em>，cookie保管在客户端，不占用服务器的资源。</p>
<p>7.<em><strong>跨域支持上不同</strong></em>，cookie支持跨域名访问，session不支持</p>
<h4 id="作用域和作用域链" tabindex="-1"><a class="header-anchor" href="#作用域和作用域链" aria-hidden="true">#</a> 作用域和作用域链</h4>
<h5 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h5>
<p>作用域就是一个独立的地盘，保护这个区域的变量不会暴露泄露出去。作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突。</p>
<ul>
<li><strong>全局作用域</strong>中的对象在代码中的任何地方都能访问，其生命周期伴随着页面的生命周期。</li>
<li><strong>函数作用域</strong>就是在函数内部定义的变量或者函数，并且定义的变量或者函数只能在函数内部被访问。函数执行结束之后，函数内部定义的变量会被销毁。</li>
<li><strong>块级作用域</strong></li>
</ul>
<h5 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链" aria-hidden="true">#</a> 作用域链</h5>
<p>一层一层往上找，直到找到全局作用域还是没有找到，就宣布放弃，这种一层层的关系就是作用域链。</p>
<h4 id="js的继承" tabindex="-1"><a class="header-anchor" href="#js的继承" aria-hidden="true">#</a> js的继承</h4>
<p>1.组合继承</p>
<p>2.寄生组合继承</p>
<p>3.寄生继承</p>
<p>4.原型链继承</p>
<p>5.原型式继承</p>
<p>6.构造函数继承</p>
<h4 id="节流和防抖" tabindex="-1"><a class="header-anchor" href="#节流和防抖" aria-hidden="true">#</a> 节流和防抖</h4>
<h5 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h5>
<p>在限定时间内只触发一次的函数</p>
<h5 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h5>
<p>触发高频事件后N秒内函数只会执行一次，如果N秒内高频事件再次触发，则重新计算时间。</p>
<h4 id="事件委托" tabindex="-1"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h4>
<p>过多事件处理程序的解决方案就是事件委托</p>
<h4 id="箭头函数和普通函数的区别" tabindex="-1"><a class="header-anchor" href="#箭头函数和普通函数的区别" aria-hidden="true">#</a> 箭头函数和普通函数的区别</h4>
<p>1.定义和语法上</p>
<p>2.arguments对象上</p>
<p>3.this指向上</p>
<p>4.箭头函数不能作为构造函数使用</p>
<p>5.call等不能修改箭头函数中的this指向</p>
<p>6.箭头函数没有原型prototype</p>
<h4 id="promise的缺点" tabindex="-1"><a class="header-anchor" href="#promise的缺点" aria-hidden="true">#</a> promise的缺点</h4>
<p>1.一旦执行无法中途取消</p>
<p>2.如果没有设置回调内部会抛出异常</p>
<p>3.如果是初始状态，没有办法知道进程</p>
<h4 id="async-await的优缺点" tabindex="-1"><a class="header-anchor" href="#async-await的优缺点" aria-hidden="true">#</a> async await的优缺点</h4>
<p><em><strong>优点</strong></em>： 它做到了真正的串行的同步写法，代码阅读相对容易。</p>
<p><em><strong>缺点</strong></em>：a.无法处理promise返回的reject对象，要借助try...catch...</p>
<p>​            b.用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。</p>
<h4 id="defer和async的区别" tabindex="-1"><a class="header-anchor" href="#defer和async的区别" aria-hidden="true">#</a> defer和async的区别</h4>
<p><strong>defer</strong>：用途是表示脚本会被延迟到整个页面都解析完毕后再运行</p>
<p><strong>async</strong>：异步，这个属性与defer类似，都用于改变处理脚本的行为。同样与defer类似，async只适用于外部脚本文件，并告诉浏览器立即下载文件。但与defer不同的是，标记为async的脚本并不保证按照它们的先后顺序执行。</p>
<h4 id="get和post的区别" tabindex="-1"><a class="header-anchor" href="#get和post的区别" aria-hidden="true">#</a> get和post的区别</h4>
<p><em><strong>a</strong></em>. get参数会显示在url中，post在Message body中传送</p>
<p><em><strong>b.</strong></em> GET请求提交的数据有长度限制,post请求内容没有长度限制</p>
<p><em><strong>c.</strong></em> GET请求返回的内容会被浏览器缓存起来。而每次提交POST请求，浏览器不会缓存POST请求返回的内容。</p>
<p><em><strong>d.</strong></em> 安全性</p>
<h4 id="http和https的区别-1" tabindex="-1"><a class="header-anchor" href="#http和https的区别-1" aria-hidden="true">#</a> HTTP和HTTPS的区别</h4>
<p>1.http明文传输，数据都是未加密的，安全性较差，https传输过程是加密的，安全性较好。</p>
<p>2.使用https协议需要一定的费用</p>
<p>3.http页面响应速度比https快，因为HTTP 使用 TCP 三次握手建立连接，客户端和服务器需要交换 3 个包，而 HTTPS除了 TCP 的三个包，还要加上 ssl 握手需要的 9 个包，所以一共是 12 个包。</p>
<p>4.http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。</p>
<p>5.https更消耗服务器资源</p>
<h4 id="_301-和-302-有什么区别" tabindex="-1"><a class="header-anchor" href="#_301-和-302-有什么区别" aria-hidden="true">#</a> 301 和 302 有什么区别</h4>
<p><em><strong>301</strong></em> 被请求的资源已永久移动到新位置 永久重定向</p>
<p><em><strong>302</strong></em> 请求的资源现在临时从不同的 URI 响应请求 临时重定向</p>
<h4 id="为什么一定要分-堆-和-栈-两个存储空间" tabindex="-1"><a class="header-anchor" href="#为什么一定要分-堆-和-栈-两个存储空间" aria-hidden="true">#</a> 为什么一定要分“堆”和“栈”两个存储空间</h4>
<p>因为js引擎需要用栈来维护程序执行上下文的状态。如果栈空间大了的话，所有的数据都会存储在栈空间中，这样就会使程序的运行速度变得缓慢（上下文切换的效率）</p>
<p>所以<strong>通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据</strong>。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，<strong>堆空间很大，能存放很多大的数据</strong>，不过缺点是分配内存和回收内存都会占用一定的时间。</p>
<h4 id="es6-常用的" tabindex="-1"><a class="header-anchor" href="#es6-常用的" aria-hidden="true">#</a> es6+常用的</h4>
<p>promise，let，const ，数组对象的结构 ，箭头函数， aysnc/await ，模板字符串， ESModule，可选链，剩余参数，</p>
<p>展开语法，set/Map ,WeakSet、WeakMap，Object.values 来获取所有的value值，Object entries（数组中会存放可枚举属性的键值对数组），trimStart trimEnd（去除字符串收尾空格），flat flatMap</p>
<p>set和数组的区别，元素不能重复，set可以给数组去重</p>
<p>Set类似的另外一个数据结构称之为WeakSet，也是内部元素不能重复的数据结构。</p>
<p>那么和Set有什么区别呢？</p>
<p>区别一：WeakSet中只能存放对象类型，不能存放基本数据类型；</p>
<p>区别二：WeakSet对元素的引用是弱引用，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收</p>
<p>Map，用于存储映射关系</p>
<p>事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）；</p>
<p>某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key；</p>
<p>事实上我们对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）；</p>
<p>某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key；</p>
<h4 id="commonjs规范缺点" tabindex="-1"><a class="header-anchor" href="#commonjs规范缺点" aria-hidden="true">#</a> CommonJS规范缺点</h4>
<p>是同步的</p>
<h4 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重" aria-hidden="true">#</a> 数组去重</h4>
<h3 id="取数组的最大值-es5、es6" tabindex="-1"><a class="header-anchor" href="#取数组的最大值-es5、es6" aria-hidden="true">#</a> 取数组的最大值（ES5、ES6）</h3>
<p><em>// ES5 的写法</em> Math.max.apply(null, [14, 3, 77, 30]); <em>// ES6 的写法</em> Math.max(...[14, 3, 77, 30]);</p>
<h3 id="如何判断一个变量是不是数组" tabindex="-1"><a class="header-anchor" href="#如何判断一个变量是不是数组" aria-hidden="true">#</a> 如何判断一个变量是不是数组？</h3>
<ul>
<li>使用 Array.isArray 判断，如果返回 true, 说明是数组</li>
<li>使用 instanceof Array 判断，如果返回true, 说明是数组</li>
<li>使用 Object.prototype.toString.call 判断，如果值是 [object Array], 说明是数组</li>
<li>通过 constructor 来判断，如果是数组，那么 <code v-pre>arr.constructor === Array</code>. (不准确，因为我们可以指定 <code v-pre>obj.constructor = Array</code>)</li>
</ul>
<h4 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe" aria-hidden="true">#</a> <strong>iframe</strong></h4>
<p>定义：iframe 元素会创建包含另一个文档的内联框架</p>
<p>提示：可以将提示文字放在<iframe></iframe>之间，来提示某些不支持 iframe 的浏览器</p>
<p>缺点：</p>
<p>会阻塞主页面的 onload 事件</p>
<p>搜索引擎无法解读这种页面，不利于 SEO</p>
<p>iframe 和主页面共享连接池，而浏览器对相同区域有限制所以会影响性能</p>
</div></template>
