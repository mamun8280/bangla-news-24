import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface HeadLine {
    id: number;
    title: string;
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headLines:HeadLine[] = data.data;
   
    return (
        <div className="bg-red-700 text-white text-2xl">

         <div className="flex max-w-7xl mx-auto items-center">
               <div className="bg-red-800 text-semibold py-1 px-5">সর্বশেষ</div>
            <MarqueeText direction="right" duration={20}>
            {headLines.map(h => <span key={h.id}>
                <span>{h.title}</span>
                <span className="mx-4">ㆍ</span>
            </span>)}

            </MarqueeText>
         </div>
        </div>
    );
};

export default Marquee;