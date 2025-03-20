import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/pages/python操作.html.vue"
const data = JSON.parse("{\"path\":\"/article/pages/python%E6%93%8D%E4%BD%9C.html\",\"title\":\"Python操作技巧\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Python\",\"基础\"],\"description\":\"Python操作技巧 字典（dict）： 创建： 合并 判断key a={} ; if 'w' in a: 获取 a={'w':1} a['w'] a={'w':1} a.get('w') 遍历 {}.keys() {}.values() {}.items() 排序 sorted(d.items(), key=lambda t: t[0], rever...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/pages/python%E6%93%8D%E4%BD%9C.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Python操作技巧\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Python操作技巧 字典（dict）： 创建： 合并 判断key a={} ; if 'w' in a: 获取 a={'w':1} a['w'] a={'w':1} a.get('w') 遍历 {}.keys() {}.values() {}.items() 排序 sorted(d.items(), key=lambda t: t[0], rever...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"基础\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Python操作技巧\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":2.86,\"words\":857},\"filePathRelative\":\"article/pages/python操作.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<hr>\\n<h2>字典（dict）：</h2>\\n<h3>创建：</h3>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span># 1、创建空字典</span></span>\\n<span class=\\\"line\\\"><span>a = {}</span></span>\\n<span class=\\\"line\\\"><span>b = dict()</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span># 2、有初始值</span></span>\\n<span class=\\\"line\\\"><span>a = {'a': 1, 'b': 2, 'c': 3}</span></span>\\n<span class=\\\"line\\\"><span>b = dict(a=1, b=2, c=3)</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span># 3、key 来自一个列表，而 value 相同, 使用 fromkeys</span></span>\\n<span class=\\\"line\\\"><span>keys = ['a', 'b', 'c']</span></span>\\n<span class=\\\"line\\\"><span>value = 100</span></span>\\n<span class=\\\"line\\\"><span>d = dict.fromkeys(keys, value)</span></span>\\n<span class=\\\"line\\\"><span></span></span>\\n<span class=\\\"line\\\"><span># 4、key 来自一个列表，而 value 也是一个列表，使用 zip</span></span>\\n<span class=\\\"line\\\"><span>keys = ['a', 'b', 'c']</span></span>\\n<span class=\\\"line\\\"><span>values = [1, 2, 3]</span></span>\\n<span class=\\\"line\\\"><span>d = dict(zip(keys, values))</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
