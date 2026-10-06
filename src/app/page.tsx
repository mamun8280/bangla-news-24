import Mainnews from "@/components/Mainnews";
// import Marquee from "@/components/Marquee";
import Mostread from "@/components/Mostread";
import NewsCard from "@/components/NewsCard";

interface IotherSection {
  curationId: number;
  title: string;
  articles: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
  }[];
}

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  const data = await res.json();

  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IotherSection[] = sections.slice(1);

  return (
    <div>
    

      <div className="grid grid-cols-1 md:grid-cols-3 py-5 gap-5 px-3">

        {/* News Section */}
        <div className="md:col-span-2 min-w-0">
          <Mainnews news={mainNews} />

          <div className="grid gap-5 mt-10">
            {otherSections.map((OS) => (
              <div
                className="pb-5 border-b-2 border-red-700"
                key={OS.curationId}
              >
                <h1 className="text-xl font-bold mb-3">
                  {OS.title}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {OS.articles.map((news) => (
                    <NewsCard
                      key={news.id}
                      news={news}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read */}
        <div className="md:col-span-1 p-5 md:p-0">
          <Mostread />
        </div>

      </div>
    </div>
  );
}