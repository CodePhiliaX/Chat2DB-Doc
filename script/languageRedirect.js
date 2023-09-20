document.addEventListener('DOMContentLoaded', (event) => {
  const userLang = navigator.language || navigator.userLanguage;
  const baseLang = userLang.split('-')[0];

  if (baseLang !== 'en' && window.location.pathname === '/') {
    // 根据你支持的语言版本进行重定向
    if (baseLang === 'zh') {
      window.location.href = '/zh/';
    }
    // 你可以根据需要增加更多的语言判断
  }
});
