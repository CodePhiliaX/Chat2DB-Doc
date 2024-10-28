import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { languageMap } from '../translations/text';

/**
 * 将浏览器语言代码映射到支持的语言代码
 * @param {string} browserLang - 浏览器返回的语言代码
 * @returns {string} 映射后的语言代码
 */
const mapBrowserLangToLocale = (browserLang) => {
  if (browserLang.startsWith('zh')) {
    return 'zh-CN';
  } else if (browserLang.startsWith('ja')) {
    return 'ja-JP';
  }
  return 'en-US';
};

export function useLanguageDetection() {
  const router = useRouter();
  const { pathname, asPath, locale } = router;

  useEffect(() => {
    // 只在客户端执行
    if (typeof window === 'undefined') return;

    // 检查 Cookie 中是否已有语言设置
    const savedLocale = document.cookie.split('; ').find(row => row.startsWith('NEXT_LOCALE='));
    if (savedLocale) {
      return; // 如果已有语言设置，则不进行自动切换
    }

    // 获取浏览器语言并映射到支持的语言代码
    const browserLang = navigator.language;
    const targetLocale = mapBrowserLangToLocale(browserLang);

    // 如果目标语言与当前语言不同，则切换
    if (targetLocale !== locale) {
      router.push(pathname, asPath, { locale: targetLocale });
    }
  }, []);
}
