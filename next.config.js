const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  basePath: "/resources",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs/start-guide/getting-started",
        permanent: true,
      },
    ];
  },
});
