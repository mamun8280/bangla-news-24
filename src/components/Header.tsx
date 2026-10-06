import Image from 'next/image';
import NavLinks from './NavLinks';

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="max-w-7xl mx-auto px-4 w-full">
      {/* টপ সেকশন: লোগো ও বাটন */}
      <div className="relative w-full flex items-center justify-center pt-6 pb-4">
        
        {/* মাঝখানের লোগো, নাম ও তারিখ */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <Image 
              className="w-10 h-10 object-contain" 
              height={40} 
              width={40} 
              src="/logo.webp" 
              alt="logo" 
            />
            <h1 className="text-3xl font-bold text-red-700 tracking-tight">
              Bangla News 24
            </h1>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-1">
            {date}
          </p>
        </div>

        {/* ডানপাশের বাটন (md:absolute দিয়ে লোগোর সমান্তরালে ডানে রাখা হয়েছে) */}
        <div className="absolute right-0 flex items-center gap-4 hidden md:flex">
          <button className="text-sm font-semibold text-gray-600 hover:text-red-700 transition">
            সাইন ইন
          </button>
          <button className="bg-red-700 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-red-800 transition">
            সাইন আপ
          </button>
        </div>

      </div>

      {/* নেভিগেশন বার এবং নিচের চিকন বর্ডার */}
      <div className="border-b border-gray-200 pb-3">
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
