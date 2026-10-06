
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface News {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
}

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`} className="group block h-full">
      <article className="card h-full overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        
        {/* Image */}
        <figure className="relative overflow-hidden">
          <Image
            width={600}
            height={400}
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52 md:h-56"
          />

        </figure>

        {/* Content */}
        <div className="card-body p-4 sm:p-5">
          <h2 className="line-clamp-2 text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-red-600 sm:text-xl">
            {news.title}
          </h2>

          <p className="mt-1 line-clamp-3 text-sm leading-6 text-base-content/70 sm:text-base">
            {news.description}
          </p>

          {/* Read More */}
          <div className="mt-auto pt-3">
            <span className="text-sm font-semibold text-red-600 transition-all duration-300 group-hover:tracking-wide">
              বিস্তারিত পড়ুন →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;

