<template><div><h1 id="http协议和网络协议" tabindex="-1"><a class="header-anchor" href="#http协议和网络协议" aria-hidden="true">#</a> http协议和网络协议</h1>
<p>学习资料:<a href="https://time.geekbang.org/column/intro/100029001?tab=catalog" target="_blank" rel="noopener noreferrer">透视HTTP协议<ExternalLinkIcon/></a></p>
<h2 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> http协议</h2>
<h3 id="http是什么" tabindex="-1"><a class="header-anchor" href="#http是什么" aria-hidden="true">#</a> http是什么</h3>
<h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h4>
<p>http是超文本传输协议。HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范</p>
<h4 id="组成的三个部分" tabindex="-1"><a class="header-anchor" href="#组成的三个部分" aria-hidden="true">#</a> 组成的三个部分</h4>
<p>http可以拆成三个部分组成，<code v-pre>超文本</code>，<code v-pre>传输</code>,<code v-pre>协议</code></p>
<p><strong>协议</strong></p>
<p>规定各方的“责、权、利”，约定该做什么不该做什么，先做什么后做什么，做错了怎么办，有没有补救措施等等。HTTP 是一个用在计算机世界里的协议。它使用计算机能够理解的语言确立了一种计算机之间交流通信的规范，以及相关的各种控制和错误处理方式。</p>
<p><strong>传输</strong></p>
<p>传输，可以双向传输，比如a发起请求，b响应数据。a到b的串色，b到a的传输，中间还可以有xyz。</p>
<p><strong>超文本</strong></p>
<p>图片、音频、视频、甚至是压缩包，在 HTTP 眼里都可以算做是“文本</p>
<h3 id="与http相关的协议" tabindex="-1"><a class="header-anchor" href="#与http相关的协议" aria-hidden="true">#</a> 与http相关的协议</h3>
<p><strong>TCP/IP</strong></p>
<p>TCP 属于“传输层”，IP 属于“网际层”</p>
<p>IP主要目的是解决寻址和路由问题，以及如何在两点间传送数据包。IP 协议使用“IP 地址”的概念来定位互联网上的每一台计算机。</p>
<p>TCP传输控制协议”，它位于 IP 协议之上，基于 IP 协议提供可靠的、字节流形式的通信，是 HTTP 协议得以实现的基础。</p>
<p><strong>DNS 域名系统</strong></p>
<p>用有意义的名字来作为 IP 地址的等价替代。设想一下，你是愿意记“95.211.80.227”这样枯燥的数字，还是“nginx.org”这样的词组呢</p>
<p>想要使用 TCP/IP 协议来通信仍然要使用 IP 地址，所以需要把域名做一个转换，“映射”到它的真实 IP，这就是所谓的“域名解析”。</p>
<p><strong>URI/URL</strong></p>
<p>DNS 和 IP 地址只是标记了互联网上的主机，但主机上有那么多文本、图片、页面，到底要找哪一个呢？所以就出现了 URI。</p>
<p>URI 主要有三个基本的部分构成：</p>
<p>协议名：即访问该资源应当使用的协议，在这里是“http”；</p>
<p>主机名：即互联网上主机的标记，可以是域名或 IP 地址，在这里是“nginx.org”；</p>
<p>路径：即资源在主机上的位置，使用“/”分隔多级目录，在这里是“/en/download.html”。</p>
<p><strong>https</strong></p>
<p><strong>代理</strong></p>
<p>代理（Proxy）是 HTTP 协议中请求方和应答方中间的一个环节，作为“中转站”，既可以转发客户端的请求，也可以转发服务器的应答。代理有很多的种类，常见的有：</p>
<p>匿名代理：完全“隐匿”了被代理的机器，外界看到的只是代理服务器；</p>
<p>透明代理：顾名思义，它在传输过程中是“透明开放”的，外界既知道代理，也知道客户端；</p>
<p>正向代理：靠近客户端，代表客户端向服务器发送请求；</p>
<p>反向代理：靠近服务器端，代表服务器响应客户端的请求；</p>
<p>上一讲提到的 CDN，实际上就是一种代理，它代替源站服务器响应客户端的请求，通常扮演着透明代理和反向代理的角色。由于代理在传输过程中插入了一个“中间层”，所以可以在这个环节做很多有意思的事情，比如：负载均衡：把访问请求均匀分散到多台机器，实现访问集群化；内容缓存：暂存上下行的数据，减轻后端的压力；安全防护：隐匿 IP, 使用 WAF 等工具抵御网络攻击，保护被代理的机器；数据处理：提供压缩、加密等额外的功能。</p>
<h3 id="四层-和-七层-到底是什么-五层-六层-哪去了" tabindex="-1"><a class="header-anchor" href="#四层-和-七层-到底是什么-五层-六层-哪去了" aria-hidden="true">#</a> 四层”和“七层”到底是什么？“五层”“六层”哪去了？</h3>
<h4 id="tcp-ip-网络分层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-网络分层模型" aria-hidden="true">#</a> TCP/IP 网络分层模型</h4>
<p><img src="/09.png" alt="1"></p>
<p>CP/IP 协议总共有四层，就像搭积木一样，每一层需要下层的支撑，同时又支撑着上层，任何一层被抽掉都可能会导致整个协议栈坍塌。我们来仔细地看一下这个精巧的积木架构，注意它的层次顺序是“从下往上”数的，所以第一层就是最下面的一层。
第一层叫“链接层”（link layer），负责在以太网、WiFi 这样的底层网络上发送原始数据包，工作在网卡这个层次，使用 MAC 地址来标记网络上的设备，所以有时候也叫 MAC 层。</p>
<p>第二层叫“网际层”或者“网络互连层”（internet layer），IP 协议就处在这一层。因为 IP 协议定义了“IP 地址”的概念，所以就可以在“链接层”的基础上，用 IP 地址取代 MAC 地址，把许许多多的局域网、广域网连接成一个虚拟的巨大网络，在这个网络里找设备时只要把 IP 地址再“翻译”成 MAC 地址就可以了。</p>
<p>第三层叫“传输层”（transport layer），这个层次协议的职责是保证数据在 IP 地址标记的两点之间“可靠”地传输，是 TCP 协议工作的层次，另外还有它的一个“小伙伴”UDP。</p>
<p>TCP 是一个有状态的协议，需要先与对方建立连接然后才能发送数据，而且保证数据不丢失不重复。而 UDP 则比较简单，它无状态，不用事先建立连接就可以任意发送数据，但不保证数据一定会发到对方。两个协议的另一个重要区别在于数据的形式。TCP 的数据是连续的“字节流”，有先后顺序，而 UDP 则是分散的小数据包，是顺序发，乱序收。</p>
<p>关于 TCP 和 UDP 可以展开讨论的话题还有很多，比如最经典的“三次握手”和“四次挥手”，一时半会很难说完，好在与 HTTP 的关系不是太大，以后遇到了再详细讲解。</p>
<p>协议栈的第四层叫“应用层”（application layer），由于下面的三层把基础打得非常好，所以在这一层就“百花齐放”了，有各种面向具体应用的协议。例如 Telnet、SSH、FTP、SMTP 等等，当然还有我们的 HTTP。</p>
<p>MAC 层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位则是消息或报文（message）。但这些名词并没有什么本质的区分，可以统称为数据包。</p>
<h4 id="osi-网络分层模型" tabindex="-1"><a class="header-anchor" href="#osi-网络分层模型" aria-hidden="true">#</a> OSI 网络分层模型</h4>
</div></template>
