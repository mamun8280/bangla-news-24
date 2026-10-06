import Link from 'next/link';

interface Navs {
  slug: string;
  title: string;
  topicId: number | null;
  url: string;
  scrapable: boolean;
} 

const NavLinks = async () => {
  let filteredNavs: Navs[] = [];

  try {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories', {
      next: { revalidate: 3600 } 
    });
    if (!res.ok) throw new Error();
    const data = await res.json();
    if (data && Array.isArray(data.data)) {
      filteredNavs = data.data.filter((n: Navs) => n.scrapable === true);
    }
  } catch (error) {
    console.error("Error loading categories", error);
  }

  return (
    <nav className="mt-2 flex flex-wrap gap-x-6 gap-y-2 justify-center text-[15px] font-semibold text-gray-800">
      <Link href="/" className="hover:text-red-700 transition">
        হোম
      </Link>
      {filteredNavs.map((n, i) => (
        <Link 
          key={i} 
          href={`/category/${n.slug}`} 
          className="hover:text-red-700 transition"
        >
          {n.title}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
