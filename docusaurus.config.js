/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },

  title: "Chat2DB",
  tagline:
    "Chat2DB is a database client and BI reporting tool that integrates AI capabilities and supports management of various databases including MySQL, Oracle, etc.",
  url: "https://chat2db.ai",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Chat2DB",
  projectName: "Chat2DB",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: true,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // 设置谷歌数据分析
        gtag: {
          trackingID: "G-HLJ1ZEFTZM",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          breadcrumbs: false,
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      navbar: {
        title: "Chat2DB",
        logo: {
          alt: "Chat2DB Logo",
          src: "img/logo.png",
          href: "https://chat2db.ai/",
        },
        items: [
          { to: "/", label: "Documentation" },
          // {
          //   type: "doc",
          //   docId: "contact",
          //   label: "Contact",
          //   position: "right",
          // },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/chat2db/chat2db",
            className: "header-github-link",
            "aria-label": "GitHub",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "light", // 默认为白色主题
        // ... 其他颜色模式配置
      },
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
      },
    }),
  scripts: ["script/languageRedirect.js"],
};

module.exports = config;
