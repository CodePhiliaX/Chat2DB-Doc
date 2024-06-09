import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import useLocalesMap from "./components/use-locales-map";
import { languageMap, tableOfContentsTitleMap } from "./translations/text";

export default {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        style={{ width: "32px", marginRight: "8px" }}
        src="https://cdn.chat2db-ai.com/img/logo.svg"
        alt="Chat2DB"
      />
      <span style={{ fontWeight: 700, fontSize: "20px" }}>Chat2DB</span>
    </div>
  ),
  logoLink: "https://chat2db.ai",
  project: {
    link: "https://github.com/chat2db/chat2db",
  },
  chat: {
    link: "https://discord.gg/uNjb3n5JVN",
  },

  useNextSeoProps() {
    return {
      titleTemplate: "%s – Chat2DB",
    };
  },
  toc: {
    float: true,
    title: () => useLocalesMap(tableOfContentsTitleMap),
  },
  head: () => {
    const { locale } = useRouter();
    const des =
      locale === "en-US"
        ? "An intelligent and versatile general-purpose SQL client and reporting tool for databases which integrates AI capabilities."
        : "一个集成了AI功能的通用SQL客户端和报表工具。";
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Chat2DB" />
        <meta property="og:description" content={des} />
      </>
    );
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://chat2db.ai" target="_blank">
          Chat2DB
        </a>
        .
      </span>
    ),
  },
  i18n: Object.entries(languageMap).map(([locale, text]) => ({
    locale,
    text,
  })),
  // feedback: false,
  docsRepositoryBase: "https://github.com/chat2db/chat2db-doc/tree/main/docs",
  // feedback:
  //   "https://github.com/chat2db/chat2db-doc/issues/new?title=Feedback%20for%20%E2%80%9CChangelog%E2%80%9D&labels=feedback",
  editLink: false,
};
