export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/pen.svg\",\"heroText\":\"HomePage\",\"tagline\":\"welcome here\",\"actions\":[{\"text\":\"List\",\"link\":\"/home/\"}],\"footer\":\"我的博客 | 我说了算  © 2022-DjyCoder Blogs\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1659062633000,\"contributors\":[{\"name\":\"dengjunyu\",\"email\":\"dengjunyu668@163.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

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
