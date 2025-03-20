import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博客文章",
    icon: "pen-to-square",
    prefix: "/article/",
    children: [
      {
        text: "文章",
        icon: "code",
        link: "code/"
      }
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
