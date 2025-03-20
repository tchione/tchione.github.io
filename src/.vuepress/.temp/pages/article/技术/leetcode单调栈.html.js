import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/技术/leetcode单调栈.html.vue"
const data = JSON.parse("{\"path\":\"/article/%E6%8A%80%E6%9C%AF/leetcode%E5%8D%95%E8%B0%83%E6%A0%88.html\",\"title\":\"单调栈\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"刷题\"],\"tag\":[\"LeetCode\",\"Python\",\"算法\"],\"description\":\"单调栈 ps : 有错误还请指教 定义： 1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。 2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈 单调递增栈：栈内数据序列为单调...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/%E6%8A%80%E6%9C%AF/leetcode%E5%8D%95%E8%B0%83%E6%A0%88.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"单调栈\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"单调栈 ps : 有错误还请指教 定义： 1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。 2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈 单调递增栈：栈内数据序列为单调...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"LeetCode\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"算法\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"单调栈\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":3.84,\"words\":1152},\"filePathRelative\":\"article/技术/leetcode单调栈.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<hr>\\n<p><em>ps : <code>有错误还请指教</code></em></p>\\n<h3>定义：</h3>\\n<p>1、单调栈，顾名思义，是栈内元素保持一定单调性（单调递增或单调递减）的栈。这里的单调递增或递减是指的从栈顶到栈底单调递增或递减。既然是栈，就满足后进先出的特点。与之相对应的是单调队列。</p>\\n<p>2、从名字上就听的出来，单调栈中存放的数据应该是有序的，所以单调栈也分为单调递增栈和单调递减栈</p>\\n<ul>\\n<li>单调递增栈：栈内数据序列为单调递增序列</li>\\n<li>单调递减栈：栈内数据序列为单调递减序列</li>\\n</ul>\\n<p>3、结论：利用单调栈，可以找到从左/右遍历第一个比它小/大的元素的位置</p>\",\"autoDesc\":true}")
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
