import Image from "next/image";

interface News {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}


const Mainnews = ({news}: {news: News[]}) => {
    const [fristNwes, ...otherNews] = news 
    
    return (
        <div className= "flex gap-3">
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      width={600}
      height={600}
      src={fristNwes.imageUrl}
      alt={fristNwes.imageAlt}
      className="w-full h-auto"
    />
  </figure>
  <div className="card-body">
    <p className="font-semibold text-red-600">{fristNwes.category}</p>
    <h2 className="card-title">{fristNwes.title}</h2>
    <p>{fristNwes.description}</p>
   
  </div>
  </div>


        <div className="grid gap-2">
            {otherNews.slice(0, 4).map(oNews => <div key={oNews.id} className="card bg-base-100 border border-gray-300 py-3 px-2 shadow-sm">
                <p className="font-semibold text-red-600">{fristNwes.category}</p>
                <div>{oNews.title}</div>
            </div>
                
                )}
        </div>


        </div>
    );
};

export default Mainnews;