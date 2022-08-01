export const data = JSON.parse("{\"key\":\"v-19d2ec67\",\"path\":\"/%E9%9D%99%E6%80%81%E9%83%A8%E7%BD%B2.html\",\"title\":\"静态部署\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"vercel\",\"slug\":\"vercel\",\"children\":[{\"level\":3,\"title\":\"简介\",\"slug\":\"简介\",\"children\":[]},{\"level\":3,\"title\":\"使用\",\"slug\":\"使用\",\"children\":[]}]}],\"git\":{\"updatedTime\":1659066623000,\"contributors\":[{\"name\":\"dengjunyu\",\"email\":\"dengjunyu668@163.com\",\"commits\":1}]},\"filePathRelative\":\"静态部署.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
