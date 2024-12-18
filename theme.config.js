import { useRouter } from "next/router";
import { DiscordIcon, GitHubIcon } from "nextra/icons";
import { useConfig } from 'nextra-theme-docs'

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
    link: "https://github.com/codePhiliaX/chat2db",
  },
  chat: {
    link: "https://discord.gg/cKt72wcfVp",
  },

  useNextSeoProps() {
    const { asPath, basePath } = useRouter();
    const { frontMatter } = useConfig()
    const { title, description, image, category, date, author = "Chat2DB Team" } = frontMatter;
    return {
      titleTemplate: "%s – Chat2DB",
      description: description,
      openGraph: {
        title: title || "Chat2DB",
        description: description || "An intelligent and versatile general-purpose SQL client and reporting tool for databases which integrates AI capabilities.",
        type: "article",
        url: `https://chat2db.ai${basePath}${asPath}`,
        images: [
          {
            url: image || "https://cdn.chat2db-ai.com/img/logo.svg",
            width: 1200,
            height: 630,
            alt: title || "Chat2DB",
          },
        ],
        article: {
          publishedTime: date,
          authors: [author],
          tags: [category],
        }
      },
    };
  },
  toc: {
    float: true,
    title: () => "Table of Content",
  },
  head: () => {
    const { asPath, basePath } = useRouter();
    const { frontMatter } = useConfig()
    const des = frontMatter.description || "An intelligent and versatile general-purpose SQL client and reporting tool for databases which integrates AI capabilities.";

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={frontMatter.title || 'Chat2DB'} />
        <meta property="og:description" content={des} />
        <meta property="article:published_time" content={frontMatter.date} />
        <meta property="article:author" content={frontMatter.author} />
        <meta property="article:tag" content={frontMatter.category} />
        <link rel="canonical" href={`https://chat2db.ai${basePath}${asPath}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            url: `https://chat2db.ai${basePath}${asPath}`,
            name: frontMatter.title || "Chat2DB",
            headline: frontMatter.title,
            description: des,
            image: frontMatter.image || "https://cdn.chat2db-ai.com/img/logo.svg",
            datePublished: frontMatter.date,
            author: {
              "@type": "Person",
              name: frontMatter.author || "Chat2DB Team"
            },
            publisher: {
              "@type": "Organization",
              name: "Chat2DB",
              logo: {
                "@type": "ImageObject",
                url: "https://cdn.chat2db-ai.com/img/logo.svg"
              }
            },
            articleSection: frontMatter.category,
            potentialAction: {
              "@type": "SearchAction",
              target: "https://chat2db.ai/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            }
          })}
        </script>
      </>
    );
  },
  footer: {
    text: (
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "40px",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://discord.gg/cKt72wcfVp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon size={24} />
              </a>
              <a
                href="https://github.com/codePhiliaX/chat2db"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon size={24} />
              </a>
            </div>
            <div style={{ fontSize: "16px", color: "#afaaaa" }}>
              ©2024 Chat2DB. All rights reserved.
            </div>
          </div>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <h4
                style={{ margin: "0 0 10px 0", fontWeight: 600 }}
                className="nx-text-slate-100"
              >
                Products
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
                className="nx-text-slate-300"
              >
                <a
                  href="https://chat2db.ai/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pricing
                </a>
                <a
                  href="https://github.com/codePhiliaX/Chat2DB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nx-text-slate-300"
                >
                  Community
                </a>
              </div>
            </div>
            <div>
              <h4
                style={{ margin: "0 0 10px 0", fontWeight: 600 }}
                className="nx-text-slate-100"
              >
                Resources
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
                className="nx-text-slate-300"
              >
                <a
                  href="https://chat2db.ai/download"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <a
                  href="https://chat2db.ai/quick-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quick Start
                </a>
                <a
                  href="https://chat2db.ai/resources/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blogs
                </a>
              </div>
            </div>
            <div>
              <h4
                style={{ margin: "0 0 10px 0", fontWeight: 600 }}
                className="nx-text-slate-100"
              >
                Company
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
                className="nx-text-slate-300"
              >
                <a
                  href="https://chat2db.ai/resources/docs/start-guide/about-chat2db"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nx-text-slate-300"
                >
                  About
                </a>
                <a
                  href="https://chat2db.ai/resources/docs/contact/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nx-text-slate-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
