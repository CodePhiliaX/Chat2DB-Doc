import { getPagesUnderRoute } from "nextra/context";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BlogIndex({ more = "Read more" }) {
  const { basePath } = useRouter();

  // 解析日期字符串的辅助函数
  function parseDate(dateStr) {
    if (!dateStr) return new Date(0);

    // 处理中文日期格式 "2024年10月22日"
    if (dateStr.includes("年")) {
      const [year, month, day] = dateStr
        .match(/(\d+)年(\d+)月(\d+)日/)
        .slice(1);
      return new Date(year, month - 1, day);
    }

    // 处理英文日期格式 "October 12, 2024"
    return new Date(dateStr);
  }

  return (
    <div className="py-10 px-10 md:px-16 lg:px-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {getPagesUnderRoute("/blog")
        .sort((a, b) => {
          const dateA = parseDate(a.frontMatter?.date);
          const dateB = parseDate(b.frontMatter?.date);
          return dateB - dateA; // 降序排序，新的日期在前
        })
        .map((page) => (
          <div
            key={page.route}
            className="hover-2 border-transparent  flex flex-col rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:border-2 hover:border-blue-500"
            onClick={() => {
              window.open(page.route, "_self");
            }}
          >
            {page.frontMatter?.image && (
              <img
                src={`${basePath}${page.frontMatter.image}`}
                alt={page.frontMatter?.title || page.meta?.title || page.name}
                className="w-full max-h-40  object-cover"
              />
            )}
            <div className="flex-1 py-2 px-4 flex flex-col justify-between">
              <div>
                <div className="uppercase text-xs opacity-50 mb-2">
                  {page.frontMatter?.category || ""}
                </div>
                <h3 className="font-bold text-xl mb-2">
                  <Link
                    href={page.route}
                    className="text-base hover:text-blue-600"
                  >
                    {page.frontMatter?.title || page.meta?.title || page.name}
                  </Link>
                </h3>
                <p className="text-sm opacity-60 mb-4 line-clamp-4 overflow-hidden">
                  {page.frontMatter?.description}
                </p>
              </div>
              {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                {page.frontMatter?.author?.image && (
                  <img
                    src={page.frontMatter.author.image}
                    alt={page.frontMatter.author.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
              </div>
            </div> */}
              {/* 将日期移动到这里 */}
              <div className="mt-4 text-xs opacity-40">
                {page.frontMatter?.date}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
