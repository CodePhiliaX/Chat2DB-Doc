/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://chat2db.ai',
  generateRobotsTxt: true,
  // 其他现有配置...

  transform: async (config, path) => {
    // 提取语言代码
    const langMatch = path.match(/\.(en-US|ja-JP|zh-CN)$/);
    if (langMatch) {
      const lang = langMatch[1];
      // 移除路径末尾的语言代码
      const newPath = path.replace(`.${lang}`, '');
      // 构建新的 URL 格式
      return {
        loc: `/${lang}${newPath}`,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      };
    }
    // 对于没有语言代码的路径，保持原样
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
