import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/pages/python-signal.html.vue"
const data = JSON.parse("{\"path\":\"/article/pages/python-signal.html\",\"title\":\"PYTHON-signal(线程)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Python\"],\"description\":\"PYTHON-signal(线程) signal(自带) 注意:在wnidows系统中只能调用 SIGABRT, SIGFPE, SIGILL, SIGINT, SIGSEGV, or SIGTERM 核心代码： 监听信号 signal.signal(需要捕获的信号，捕获后执行的方法) 暂停进程，等待信号 signal.pause() 主动发送信号(延...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/pages/python-signal.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"PYTHON-signal(线程)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"PYTHON-signal(线程) signal(自带) 注意:在wnidows系统中只能调用 SIGABRT, SIGFPE, SIGILL, SIGINT, SIGSEGV, or SIGTERM 核心代码： 监听信号 signal.signal(需要捕获的信号，捕获后执行的方法) 暂停进程，等待信号 signal.pause() 主动发送信号(延...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"PYTHON-signal(线程)\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":2.01,\"words\":602},\"filePathRelative\":\"article/pages/python-signal.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<hr>\\n<h3>signal(自带)</h3>\\n<p><strong>注意:在wnidows系统中只能调用 SIGABRT, SIGFPE, SIGILL, SIGINT, SIGSEGV, or SIGTERM</strong></p>\\n<ul>\\n<li>\\n<p>核心代码：</p>\\n<ul>\\n<li>监听信号\\n<ul>\\n<li><code>signal.signal(需要捕获的信号，捕获后执行的方法)</code></li>\\n</ul>\\n</li>\\n<li>暂停进程，等待信号\\n<ul>\\n<li><code>signal.pause()</code></li>\\n</ul>\\n</li>\\n<li>主动发送信号(延迟5S)\\n<ul>\\n<li><code>signal.alarm(5)</code></li>\\n<li><code>os.kill(os.getpid(), 信号)</code></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>监听、接收配置的信号，执行指定的处理方式</p>\\n<ul>\\n<li>处理方式：\\n<ul>\\n<li>指定处理函数</li>\\n<li>忽略</li>\\n<li>根据系统默认值处理, 大部分信号的默认处理是终止进程</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>规则信号</p>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
