import { CodeTabs } from "D:/T_c/blog_chione/blog_chione/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/T_c/blog_chione/blog_chione/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/T_c/blog_chione/blog_chione/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
