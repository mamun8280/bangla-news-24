import Image from "next/image";
import Link from "next/link";

interface News {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const Mainnews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-6 md:py-10">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

        {/* ================= MAIN NEWS ================= */}
        <Link
          href={`/news/${firstNews.id}`}
          className="group"
        >
          <article className="card h-full overflow-hidden bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <figure className="overflow-hidden">
              <Image
                width={900}
                height={600}
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt || firstNews.title}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                priority
              />
            </figure>

            {/* Content */}
            <div className="card-body p-5 md:p-6">

              <p className="font-semibold text-red-600">
                {firstNews.category}
              </p>

              <h2 className="card-title text-xl leading-tight md:text-3xl">
                {firstNews.title}
              </h2>

              <p className="line-clamp-3 text-base-content/70">
                {firstNews.description}
              </p>

              <div className="mt-2 text-sm font-semibold text-red-600">
                বিস্তারিত পড়ুন →
              </div>

            </div>
          </article>
        </Link>

        {/* ================= OTHER NEWS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {otherNews.slice(0, 4).map((oNews) => (
            <Link
              key={oNews.id}
              href={`/news/${oNews.id}`}
              className="group"
            >
              <article className="flex h-full gap-4 rounded-xl border border-base-300 bg-base-100 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-md">

                {/* Small Image */}
                <div className="w-32 shrink-0 overflow-hidden rounded-lg sm:w-40 lg:w-36">
                  <Image
                    width={300}
                    height={200}
                    src={oNews.imageUrl}
                    alt={oNews.imageAlt || oNews.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">

                  <p className="mb-1 text-sm font-semibold text-red-600">
                    {oNews.category}
                  </p>

                  <h3 className="font-bold leading-snug transition-colors group-hover:text-red-600">
                    {oNews.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-sm text-base-content/60">
                    {oNews.description}
                  </p>

                </div>

              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mainnews;