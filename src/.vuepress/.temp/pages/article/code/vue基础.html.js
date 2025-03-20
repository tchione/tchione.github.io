import comp from "D:/T_c/blog_chione/blog_chione/src/.vuepress/.temp/pages/article/code/vue基础.html.vue"
const data = JSON.parse("{\"path\":\"/article/code/vue%E5%9F%BA%E7%A1%80.html\",\"title\":\"Vue项目部署\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2025-03-20T00:00:00.000Z\",\"category\":[\"技术\"],\"tag\":[\"Vue\",\"前端\"],\"description\":\"Vue项目部署 项目初始化： 安装node与npm或者cnpm cnpm:npm install cnpm -g --registry=https://registry.npm.taobao.org 官方下载：node 全局安装vue-cil：cnpm install -g vue-cli 项目初始化:vue init webpack ps:会有一堆配...\"},\"readingTime\":{\"minutes\":2.87,\"words\":860},\"filePathRelative\":\"article/code/vue基础.md\",\"localizedDate\":\"2025年3月20日\",\"excerpt\":\"\\n<h2>项目初始化：</h2>\\n<ul>\\n<li>安装<code>node</code>与<code>npm</code>或者<code>cnpm</code>\\n<ul>\\n<li><code>cnpm</code>:<code>npm install cnpm -g --registry=https://registry.npm.taobao.org</code></li>\\n<li><a href=\\\"https://nodejs.org/en/download/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">官方下载：<code>node</code></a></li>\\n</ul>\\n</li>\\n<li>全局安装<code>vue-cil</code>：<code>cnpm install -g vue-cli </code></li>\\n<li>项目初始化:<code>vue init webpack</code>   <strong>ps:会有一堆配置</strong></li>\\n<li>初始化项目依赖：<code>cnpm install </code></li>\\n<li>启动项目：<code>npm run dev</code> <strong>ps:可以配置编译器启动</strong></li>\\n</ul>\",\"autoDesc\":true}")
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
