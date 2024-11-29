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
  logoLink: "https://chat2db-ai.com",
  project: {
    link: "https://github.com/codePhiliaX/chat2db",
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
    title: () => "目录",
  },
  head: () => {
    const des = "Chat2DB 是一个集成了AI功能的SQL客户端和BI分析工具";
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
        <a href="https://chat2db-ai.com" target="_blank">
          Chat2DB
        </a>
        .
      </span>
    ),
  },
  // i18n: Object.entries(languageMap).map(([locale, text]) => ({
  //   locale,
  //   text,
  // })),

  docsRepositoryBase:
    "https://github.com/codePhiliaX/chat2db-doc/tree/main/docs",

  editLink: false,
  nextThemes: {
    defaultTheme: "dark",
  },
};
