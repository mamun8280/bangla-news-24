import React from 'react';
import NewsCard from '@/components/NewsCard';

interface News {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}



const CategoryNews = async({params}: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNews = data.data;
    return (
        <div className=" py-5 px-3">
            <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-2">{data.title}</h1>
            <div className="grid grid-cols-3 gap-5">
                {categoryNews.map((news: News) => <NewsCard key={news.id} news={news} />)}
                   
            </div>
        </div>
    );
};

export default CategoryNews;