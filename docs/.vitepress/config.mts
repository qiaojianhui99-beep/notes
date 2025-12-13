import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的精彩笔记",
  base: "/notes/",
  description: "一个 VitePress 站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://vitepress.dev/vitepress-logo-mini.svg',

    nav: [
      { text: "首页", link: "/" },
      {
        text: "笔记",
        items: [
          {
            text: "JavaScript",
            items: [
              { text: "JS 基础", link: "/notes/frontend/js-basic" },
              { text: "JS 高级", link: "/notes/frontend/js-advanced" },
            ],
          },
          {
            text: "框架",
            items: [
              { text: "Vue", link: "/notes/frontend/vue" },
              { text: "React", link: "/notes/frontend/react" },
            ],
          },
          {
            text: "工程化",
            items: [
              { text: "前端工程化", link: "/notes/frontend/engineering" },
            ],
          },
          {
            text: "常用库",
            items: [
              { text: "Axios", link: "/notes/frontend/axios/" },
            ],
          },
          {
            text: "其他",
            items: [
              { text: "后端", link: "/notes/backend" },
              { text: "笔记概览", link: "/notes/" },
            ],
          },
        ],
      },
      {
        text: "工具",
        items: [
          { text: "Rust", link: "/notes/tools/rust/" },
        ],
      },
      { text: "面试题", link: "/notes/interview/" },
      { text: "资源", link: "/resources/" },
    ],

    sidebar: {
      "/notes/interview/": [
        {
          text: "面试题",
          items: [
            { text: "简介", link: "/notes/interview/" },
            { text: "JavaScript", link: "/notes/interview/js/" },
            { text: "TypeScript", link: "/notes/interview/ts/" },
            { text: "Vue", link: "/notes/interview/vue/" },
            { text: "React", link: "/notes/interview/react/" },
            { text: "Vite", link: "/notes/interview/vite/" },
            { text: "浏览器", link: "/notes/interview/browser/" },
            { text: "网络", link: "/notes/interview/network/" },
          ],
        },
      ],
      "/notes/tools/rust/": [
        {
          text: "Rust",
          items: [
            { text: "简介", link: "/notes/tools/rust/" },
          ],
        },
      ],
      "/notes/frontend/axios/": [
        {
          text: "Axios",
          items: [
            { text: "简介", link: "/notes/frontend/axios/" },
          ],
        },
      ],
      "/notes/frontend/js-basic/": [
        {
          text: "JS 基础",
          items: [
            { text: "简介", link: "/notes/frontend/js-basic/" },
          ],
        },
      ],
      "/notes/frontend/js-advanced/": [
        {
          text: "JS 高级",
          items: [
            { text: "简介", link: "/notes/frontend/js-advanced/" },
          ],
        },
      ],
      "/notes/frontend/engineering/": [
        {
          text: "工程化",
          items: [
            { text: "简介", link: "/notes/frontend/engineering/" },
          ],
        },
      ],
      "/notes/frontend/vue/": [
        {
          text: "Vue",
          items: [
            { text: "简介", link: "/notes/frontend/vue/" },
          ],
        },
      ],
      "/notes/frontend/react/": [
        {
          text: "React",
          items: [
            { text: "简介", link: "/notes/frontend/react/" },
          ],
        },
      ],
      "/notes/": [
        {
          text: "笔记概览",
          items: [
            { text: "笔记首页", link: "/notes/" },
          ]
        },
        {
          text: "前端",
          items: [
            { text: "前端概览", link: "/notes/frontend" },
            { text: "JS 基础", link: "/notes/frontend/js-basic/" },
            { text: "JS 高级", link: "/notes/frontend/js-advanced/" },
            { text: "工程化", link: "/notes/frontend/engineering/" },
            { text: "Vue", link: "/notes/frontend/vue/" },
            { text: "React", link: "/notes/frontend/react/" },
          ],
        },
        {
          text: "后端",
          items: [
            { text: "后端概览", link: "/notes/backend" },
          ],
        },
      ],
      "/resources/": [
        {
          text: "资源",
          items: [
            { text: "资源列表", link: "/resources/" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://qiaojianhui99-beep.github.io/notes/" },
    ],

    footer: {
      message: '基于 MIT 许可发布。',
      copyright: '版权所有 © 2025-至今 我的精彩笔记'
    }
  },
});
