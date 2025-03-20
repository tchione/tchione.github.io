import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/pages/字符串长度压缩算法.html.vue"
const data = JSON.parse("{\"path\":\"/article/pages/%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95.html\",\"title\":\"字符串长度压缩算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"刷题\"],\"tag\":[\"LeetCode\",\"Python\",\"算法\"],\"description\":\"字符串长度压缩算法 **ps:**根据原地址的py实现 原地址java实现：https://blog.csdn.net/lcsy000/article/details/108096039 原理： 准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串 缺点（可自行调整代码，现在是2位一压缩...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/pages/%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%95%BF%E5%BA%A6%E5%8E%8B%E7%BC%A9%E7%AE%97%E6%B3%95.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"字符串长度压缩算法\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"字符串长度压缩算法 **ps:**根据原地址的py实现 原地址java实现：https://blog.csdn.net/lcsy000/article/details/108096039 原理： 准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串 缺点（可自行调整代码，现在是2位一压缩...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"LeetCode\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"算法\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"字符串长度压缩算法\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":1.73,\"words\":520},\"filePathRelative\":\"article/pages/字符串长度压缩算法.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<hr>\\n<p>**ps:**根据原地址的py实现</p>\\n<p><strong>原地址java实现：</strong><a href=\\\"https://blog.csdn.net/lcsy000/article/details/108096039\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://blog.csdn.net/lcsy000/article/details/108096039</a></p>\\n<h2>原理：</h2>\\n<ul>\\n<li>准备2个ascii码小于255的字符，将它们变为二进制，第一个字符左偏移8位，然后加入第二字字符形成新字符在变回字符串</li>\\n<li>缺点（可自行调整代码，现在是2位一压缩）：\\n<ul>\\n<li>压缩后的字符串几乎都为“火星文”，这要是存到库了，别人看了还可能以为是脏数据直接给你删掉了 -_-||</li>\\n<li>并不是对所有字符都能加密，ascii 码值超过一定值时可能会出错</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
