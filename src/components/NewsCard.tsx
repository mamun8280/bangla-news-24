 import Image from 'next/image';
import React from 'react';

interface News {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
}
 
 const NewsCard = ({ news }:{news:News}) => {
    return (
        <div >
                   <div className="card bg-base-100  shadow-sm">
              <figure>
                <Image
                  width={600}
                  height={600}
                  src={news.imageUrl}
                  alt={news.imageAlt}
                  className="w-full h-auto"
                />
              </figure>
              <div className="card-body">
                <p className="font-semibold text-red-600">{news.category}</p>
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
               
              </div>
              </div>
            
        </div>
    );
 };
 
 export default NewsCard;