export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[19,0,1,2,3,15,4,5,6,7,8,9,10,11,16,17,18,12,13,14,20]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[19]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[0,1,2,3,15,4,5,6,7,8,9,10,11,16,17,18,12,13,14,19]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

