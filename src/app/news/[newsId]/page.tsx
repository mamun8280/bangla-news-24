
import Image from "next/image";

interface NewsBlock {
  type: "image" | "text" | "subheading";
  text?: string;
  url?: string;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();
  const news = data.data;

  if (!news) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-10">
        <div className="mx-auto max-w-4xl rounded-xl bg-base-100 p-10 text-center shadow-md">
          <h1 className="text-2xl font-bold text-red-600">
            News Not Found
          </h1>
        </div>
      </main>
    );
  }

  /*
    Body থেকে প্রথম image বাদ দেওয়ার জন্য
    প্রথম image-এর index বের করছি।
  */
  const firstBodyImageIndex =
    news.body?.findIndex(
      (block: NewsBlock) => block.type === "image"
    ) ?? -1;

  return (
    <main className="min-h-screen bg-base-200 px-3 py-6 sm:px-4 md:py-10">
      <article className="mx-auto w-full max-w-5xl overflow-hidden rounded-xl bg-base-100 shadow-xl">

        {/* ================= HEADER ================= */}
        <div className="px-4 pt-6 sm:px-6 md:px-10 md:pt-10">

          {/* Category */}
          <div className="mb-4">
            <span className="rounded-full bg-red-600 px-4 py-1 text-sm font-semibold text-white">
              {news.category || "সংবাদ"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold leading-tight text-base-content sm:text-3xl md:text-5xl">
            {news.title}
          </h1>

          {/* Meta */}
          <div className="mt-6 flex flex-col gap-3 border-y border-base-300 py-4 sm:flex-row sm:items-center sm:justify-between">

            {news.lastPublished && (
              <p className="font-semibold text-red-600">
                {new Date(news.lastPublished).toLocaleDateString("bn-BD", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            {news.source && (
              <p className="font-semibold text-base-content/70">
                সূত্র: {news.source}
              </p>
            )}

          </div>
        </div>

        {/* ================= FEATURED IMAGE ================= */}
        <div className="px-4 pt-6 sm:px-6 md:px-10">
          <div className="overflow-hidden rounded-xl">
            <Image
              width={1200}
              height={700}
              src={news.imageUrl}
              alt={news.imageAlt || news.title || "News image"}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {news.imageAlt && (
            <p className="mt-2 text-sm text-base-content/50">
              {news.imageAlt}
            </p>
          )}
        </div>

        {/* ================= ARTICLE BODY ================= */}
        <div className="px-4 pb-8 pt-6 sm:px-6 md:px-10 md:pb-12">

          {news.body?.map((block: NewsBlock, index: number) => {

            {/* ================= BODY IMAGE ================= */}
            if (block.type === "image" && block.url) {

              /*
                Body-এর প্রথম image বাদ।
                কারণ এই image-টাই Featured Image হিসেবে
                উপরে already দেখানো হয়েছে।
              */
              if (index === firstBodyImageIndex) {
                return null;
              }

              return (
                <div key={index} className="my-8">
                  <Image
                    src={block.url}
                    width={1200}
                    height={700}
                    alt={news.title || "News image"}
                    className="h-auto w-full rounded-xl object-cover"
                  />
                </div>
              );
            }

            {/* ================= SUBHEADING ================= */}
            if (block.type === "subheading" && block.text) {
              return (
                <h2
                  key={index}
                  className="mt-8 mb-5 border-l-4 border-red-600 pl-4 text-xl font-bold sm:text-2xl md:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }

            {/* ================= TEXT ================= */}
            if (block.type === "text" && block.text) {
              return (
                <p
                  key={index}
                  className="mb-6 text-base leading-8 text-base-content/90 sm:text-lg md:text-xl md:leading-9"
                >
                  {block.text}
                </p>
              );
            }

            return null;
          })}
        </div>

      </article>
    </main>
  );
};

export default NewsDetails;
