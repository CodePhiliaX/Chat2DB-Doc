const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["en-US", "zh-CN"],
    defaultLocale: "en-US",
  },
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/docs",
        statusCode: 301,
      },
    ];
  },
});
