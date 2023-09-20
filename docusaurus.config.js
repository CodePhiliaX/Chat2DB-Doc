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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Chat2DB",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          { to: "docs", label: "Documentation", position: "right" },
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
      prism: {
        theme: require("prism-react-renderer/themes/dracula"),
      },
    }),
};

module.exports = config;
