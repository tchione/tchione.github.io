import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/pages/查看服务器内存占用.html.vue"
const data = JSON.parse("{\"path\":\"/article/pages/%E6%9F%A5%E7%9C%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E5%AD%98%E5%8D%A0%E7%94%A8.html\",\"title\":\"查看服务器内存占用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Linux\"],\"description\":\"查看服务器内存占用 查看所有mysql数据库内存占用： linux内存查看： ls -lht : 查看文件大小 du --max-depth=1 -h： 查看当前文件夹下每个文件夹的内存占用 du -sh /usr: 查看单个文件夹内存 df -h: 查看全部磁盘内存 lsof |grep deleted(文件名): 查看使用文件的进程 MySQL: ...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/pages/%E6%9F%A5%E7%9C%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E5%AD%98%E5%8D%A0%E7%94%A8.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"查看服务器内存占用\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"查看服务器内存占用 查看所有mysql数据库内存占用： linux内存查看： ls -lht : 查看文件大小 du --max-depth=1 -h： 查看当前文件夹下每个文件夹的内存占用 du -sh /usr: 查看单个文件夹内存 df -h: 查看全部磁盘内存 lsof |grep deleted(文件名): 查看使用文件的进程 MySQL: ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Linux\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"查看服务器内存占用\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.88,\"words\":264},\"filePathRelative\":\"article/pages/查看服务器内存占用.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<hr>\\n<h3>查看所有mysql数据库内存占用：</h3>\\n<pre><code>select \\nTABLE_SCHEMA, \\nconcat(truncate(sum(data_length)/1024/1024,2),' MB') as data_size,\\nconcat(truncate(sum(index_length)/1024/1024,2),'MB') as index_size\\nfrom information_schema.tables\\ngroup by TABLE_SCHEMA\\nORDER BY data_size desc;\\n</code></pre>\\n<h3>linux内存查看：</h3>\",\"autoDesc\":true}")
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
