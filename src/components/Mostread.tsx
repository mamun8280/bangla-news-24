import React from 'react';

 interface IMostReadNews {
    id: number;
    title: string;
}

const Mostread = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const mostReadNews: IMostReadNews[] = data.data;
   
    return (
        <div className="card  shadow-md p-2 bg-base-100 border-gray-300">
            <h2 className="font-bold text-red-700 text-xl mb-5">সর্বাধিক পঠিত</h2>

            <div className="grid gap-5">
                {mostReadNews.map((mr, i) => (
                    <div key={mr.id} className="flex gap-2">
                       <p className="font-bold text-xl text-red-500">{i + 1}.</p> <h3 className="font-semibold">{mr.title}</h3>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Mostread;