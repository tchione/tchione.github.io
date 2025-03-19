import { hasGlobalComponent } from "D:/T_c/blog_chione/blog_chione/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/T_c/blog_chione/blog_chione/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/T_c/blog_chione/blog_chione/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/T_c/blog_chione/blog_chione/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
