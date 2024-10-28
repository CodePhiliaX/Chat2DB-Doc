const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  basePath: "/resources", // 添加这一行

  i18n: {
    locales: ["zh-CN", "en-US", "ja-JP"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/resources",
        statusCode: 301,
      },
      {
        source: "/resources",
        destination: "/docs/start-guide/getting-started",
        statusCode: 301,
      },
    ];
  },
});
