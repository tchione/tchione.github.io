import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/dragonfruit.html.vue"
const data = JSON.parse("{\"path\":\"/article/dragonfruit.html\",\"title\":\"火龙果\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-10T00:00:00.000Z\",\"category\":[\"火龙果\",\"水果\"],\"tag\":[\"红\",\"大\"],\"description\":\"火龙果 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.12,\"words\":36},\"filePathRelative\":\"article/dragonfruit.md\",\"localizedDate\":\"2022年1月10日\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
export { comp, data }

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
