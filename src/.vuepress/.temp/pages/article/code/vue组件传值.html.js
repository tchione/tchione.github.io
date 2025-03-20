import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/code/vue组件传值.html.vue"
const data = JSON.parse("{\"path\":\"/article/code/vue%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC.html\",\"title\":\"VUE自用组件传值方式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Vue\",\"前端\"],\"description\":\"VUE自用组件传值方式 store传值 store是全局保存数据，一般保存一些cookie，权限，用户等信息。 需要进行注册app.use(pinia) 这个是持久化插件，可以将数据持久保存在本地pinia-plugin-persistedstate 父组件传子组件 暴露子组件函数，父组件调用 子组件暴露函数 父组件调用 通过props传值 父组件 子...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/code/vue%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"VUE自用组件传值方式\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"VUE自用组件传值方式 store传值 store是全局保存数据，一般保存一些cookie，权限，用户等信息。 需要进行注册app.use(pinia) 这个是持久化插件，可以将数据持久保存在本地pinia-plugin-persistedstate 父组件传子组件 暴露子组件函数，父组件调用 子组件暴露函数 父组件调用 通过props传值 父组件 子...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Vue\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"前端\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"VUE自用组件传值方式\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":0.97,\"words\":291},\"filePathRelative\":\"article/code/vue组件传值.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<h3>store传值</h3>\\n<ul>\\n<li><code>store</code>是全局保存数据，一般保存一些cookie，权限，用户等信息。</li>\\n<li>需要进行注册<code>app.use(pinia)</code></li>\\n<li>这个是持久化插件，可以将数据持久保存在本地<code>pinia-plugin-persistedstate</code></li>\\n</ul>\\n<h3>父组件传子组件</h3>\\n<ul>\\n<li>\\n<p>暴露子组件函数，父组件调用</p>\\n<ul>\\n<li>\\n<p>子组件暴露函数</p>\\n<ul>\\n<li>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>const show = (item={})=&gt;{} //item是参数{}是类型</span></span>\\n<span class=\\\"line\\\"><span>defineExpose({show})</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>父组件调用</p>\\n<ul>\\n<li>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>导入： import UserDialog from './userDialog.vue'</span></span>\\n<span class=\\\"line\\\"><span>注册：  components: {UserDialog}</span></span>\\n<span class=\\\"line\\\"><span>使用： &lt;UserDialog @custClick=\\\"reGetTable\\\" ref=\\\"userDialog\\\"/&gt;--(html)</span></span>\\n<span class=\\\"line\\\"><span>传值： this.$refs.userDialog.show(row)----(js)</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>\\n<p>通过props传值</p>\\n<ul>\\n<li>\\n<p>父组件</p>\\n<ul>\\n<li>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>&lt;UserDialog :myName=\\\"data\\\"/&gt;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div></li>\\n</ul>\\n</li>\\n<li>\\n<p>子组件</p>\\n<ul>\\n<li>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>export default{props: {myName: {type:String,requires: true}}</span></span>\\n<span class=\\\"line\\\"><span>键名，字符串类型，必填</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\",\"autoDesc\":true}")
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
