// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    "index",
    {
      type: "category",
      label: "Guide",
      // 默认打开
      collapsed: false,
      items: ["guides/user-guide"],
    },
  ],
};

module.exports = sidebars;
