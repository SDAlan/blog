import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "又菜又爱玩的小王",
  description: "又菜又爱玩的小王",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
