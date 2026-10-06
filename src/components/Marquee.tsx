import Link from "next/link";
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
            <div className="sticky top-0 z-50 bg-red-700 text-white text-2xl">
            <div className="flex max-w-7xl mx-auto items-center overflow-hidden">
                <div className="shrink-0 bg-red-800 font-semibold py-1 px-5">
                সর্বশেষ
                </div>
                    <MarqueeText direction="right" duration={20}>
                    {headLines.map(h => <span key={h.id}>
                        <Link
                        href={`/news/${h.id}`}
                        className="hover:underline"
                        >
                        {h.title}
                        </Link>
                        <span className="mx-4">ㆍ</span>
                    </span>)}

                        </MarqueeText>
                    </div>
                </div>
            );
};

export default Marquee;