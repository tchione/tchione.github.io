export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"技术\":{\"path\":\"/category/%E6%8A%80%E6%9C%AF/\",\"indexes\":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},\"刷题\":{\"path\":\"/category/%E5%88%B7%E9%A2%98/\",\"indexes\":[15,16,17,18]},\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[19]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"转载\":{\"path\":\"/tag/%E8%BD%AC%E8%BD%BD/\",\"indexes\":[0,11]},\"Python\":{\"path\":\"/tag/python/\",\"indexes\":[0,1,2,3,15,5,7,8,11,16,17,18]},\"后端\":{\"path\":\"/tag/%E5%90%8E%E7%AB%AF/\",\"indexes\":[0,1,2,3,5]},\"Django\":{\"path\":\"/tag/django/\",\"indexes\":[0,1,2,3,5]},\"LeetCode\":{\"path\":\"/tag/leetcode/\",\"indexes\":[15,16,17,18]},\"算法\":{\"path\":\"/tag/%E7%AE%97%E6%B3%95/\",\"indexes\":[15,16,17,18]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[4]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[19]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[19]},\"数字货币\":{\"path\":\"/tag/%E6%95%B0%E5%AD%97%E8%B4%A7%E5%B8%81/\",\"indexes\":[6]},\"基础\":{\"path\":\"/tag/%E5%9F%BA%E7%A1%80/\",\"indexes\":[8]},\"Vue\":{\"path\":\"/tag/vue/\",\"indexes\":[9,10,14]},\"前端\":{\"path\":\"/tag/%E5%89%8D%E7%AB%AF/\",\"indexes\":[9,10,14]},\"视频\":{\"path\":\"/tag/%E8%A7%86%E9%A2%91/\",\"indexes\":[11]},\"Nvicat\":{\"path\":\"/tag/nvicat/\",\"indexes\":[12]},\"数据库\":{\"path\":\"/tag/%E6%95%B0%E6%8D%AE%E5%BA%93/\",\"indexes\":[12]},\"Linux\":{\"path\":\"/tag/linux/\",\"indexes\":[13]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

