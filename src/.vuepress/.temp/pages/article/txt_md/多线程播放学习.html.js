import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/txt_md/多线程播放学习.html.vue"
const data = JSON.parse("{\"path\":\"/article/txt_md/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%92%AD%E6%94%BE%E5%AD%A6%E4%B9%A0.html\",\"title\":\"多线程视频播放(转)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"视频\",\"转载\",\"Python\"],\"description\":\"多线程视频播放(转) 背景 教程 环境：python3.7（其他版本自测） 修改源码： 打开player/Lib/site-packages/video_funnel/server.py文件 找到get_info函数，将整个函数替换成下面这样 命令行运行：py -m video_funnel -b 10M -p 1M --port 9999 -u \\\"h...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/article/txt_md/%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%92%AD%E6%94%BE%E5%AD%A6%E4%B9%A0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"博客演示\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"多线程视频播放(转)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"多线程视频播放(转) 背景 教程 环境：python3.7（其他版本自测） 修改源码： 打开player/Lib/site-packages/video_funnel/server.py文件 找到get_info函数，将整个函数替换成下面这样 命令行运行：py -m video_funnel -b 10M -p 1M --port 9999 -u \\\"h...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"视频\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"转载\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2025-03-20T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"多线程视频播放(转)\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2025-03-20T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Chione\\\",\\\"url\\\":\\\"https://chione.github.io\\\"}]}\"]]},\"readingTime\":{\"minutes\":1.17,\"words\":350},\"filePathRelative\":\"article/txt_md/多线程播放学习.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<h3>背景</h3>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span>背景：目前主流的播放器（potplayer 1、vlc、mpc…）均不支持多线程播放在线视频，但有些链接单线程下载速度很低，不能流畅播放。</span></span>\\n<span class=\\\"line\\\"><span>以往只能使用多线程下载器（aria2c 1、idm、迅雷…）下载到本地之后，再使用播放器播放。有可能还没下载完，我就没兴趣看了。</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
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
