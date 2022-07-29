const { defaultTheme } = require("@vuepress/theme-default");

const { path } = require("@vuepress/utils");
module.exports = {
    title: "DjyCoder Blogs",
    description: "邓俊玉个人博客",
    // 注入到当前页面的 HTML <head> 中的标签
    head: [["link", { rel: "icon", href: "https://www.wenboz.com/favicon.ico" }]],
    base: "/", //
    markdown: {
        lineNumbers: true, // 代码块显示行号
    },
    theme: defaultTheme({
        navbar: [
            {
                text: "tool",
                children: [
                    { text: "html2canvas", link: "https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-about.html" },
                    { text: "uniapp-canvas插件", link: "https://ext.dcloud.net.cn/plugin?id=5291#image" },
                    { text: "css样式初始化", link: "https://github.com/necolas/normalize.css" },
                    { text: "json2ts", link: "http://www.json2ts.com/" },
                    { text: "base64在线转换", link: "https://tool.chinaz.com/tools/imgtobase/" },
                    { text: "代码生成图片", link: "https://carbon.now.sh/" },
                    { text: "图片压缩", link: "https://tinypng.com/" },
                    { text: "js代码在线运行", link: "http://jsrun.net/new" },
                    { text: "vscode代码片段生成", link: "https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode" },
                    { text: "动图制作", link: "https://licecap.en.softonic.com/" },
                    { text: "删除node_modules", link: "https://blog.csdn.net/weixin_34413103/article/details/93360196" },
                    { text: "RGB颜色值转换成十六进制颜色码", link: "https://www.sioe.cn/yingyong/yanse-rgb-16/" },
                    { text: "svg制作", link: "https://igoutu.cn/icons/set/webpack" },
                    { text: "翻墙工具", link: "https://github.com/Alvin9999/new-pac/wiki/ss%E5%85%8D%E8%B4%B9%E8%B4%A6%E5%8F%B7" },
                    { text: "vue+elementui--$message提示框被dialog遮罩层挡住问题解决", link: "https://blog.csdn.net/u012138137/article/details/87182342" },
                    { text: "element日期限制", link: "https://segmentfault.com/q/1010000037421298/" },
                ],
            },
            {
                text: "document",
                children: [
                    { text: "codewhy-vue3管理后台接口", link: "https://documenter.getpostman.com/view/12387168/TzzDKb12" },
                    { text: "pinia中文文档", link: "https://pinia.web3doc.top/" },
                    { text: "dvajs", link: "https://dvajs.com/guide/" },
                    { text: "Redux 中文文档", link: "http://cn.redux.js.org/introduction/getting-started/" },
                    { text: "React Redux", link: "https://www.redux.org.cn/docs/react-redux/" },
                    {
                        text: "coderwhy-react",
                        link: "https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=1566025152667107329&__biz=Mzg5MDAzNzkwNA==&uin=&key=&devicetype=Windows+10+x64&version=63030073&lang=zh_CN&ascene=7&fontgear=2",
                    },
                    { text: "ant", link: "https://ant.design/docs/spec/introduce-cn" },
                    { text: "vant", link: "https://vant-contrib.gitee.io/vant/#/zh-CN/" },
                    { text: "element-plus", link: "https://element-plus.gitee.io/#/zh-CN/component/installation" },
                    { text: "element", link: "https://element.eleme.cn/#/zh-CN/component/installation" },
                ],
            },
            {
                text: "My-GitHub",
                link: "https://github.com/woniuit",
            },
            // {
            //     text: "面试",
            //     children: [
            //         { text: "掘金1", link: "https://juejin.cn/post/7061588533214969892" },
            //         { text: "掘金2", link: "https://juejin.cn/post/7016593221815910408" },
            //         { text: "掘金3", link: "https://juejin.cn/post/6956360277185003556#heading-9" },
            //         { text: "掘金4", link: "https://juejin.cn/post/7026502510172962829#heading-57" },
            //         { text: "掘金5-vue", link: "https://juejin.cn/post/6844903918753808398" },
            //         { text: "掘金6", link: "https://juejin.cn/post/7022795467821940773#heading-11" },
            //         { text: "diff算法", link: "https://juejin.cn/post/6994959998283907102" },
            //         { text: "Proxy和defineproperty", link: "https://juejin.cn/post/6844903601416978439" },
            //         { text: "简历模板", link: "https://www.mujicv.com/square/" },
            //         { text: "面试官系列", link: "https://vue3js.cn/interview/" },
            //         { text: "你想知道的前端1", link: "https://github.com/KieSun/all-of-frontend" },
            //     ],
            // },
        ],
        // docsDir: "/",
    }),
};
