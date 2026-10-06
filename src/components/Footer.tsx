
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-950 text-gray-300">
      
      {/* Main Footer */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 md:py-12 lg:grid-cols-4">
        
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Bangla News 24 logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />

            <h2 className="text-xl font-bold text-white">
              Bangla News 24
            </h2>
          </div>

          <p className="text-sm leading-6 text-gray-400">
            দেশ ও বিশ্বের সর্বশেষ সংবাদ, গুরুত্বপূর্ণ খবর এবং
            নির্ভরযোগ্য তথ্য একসাথে পেতে আমাদের সাথেই থাকুন।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            গুরুত্বপূর্ণ লিংক
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-red-500"
              >
                হোম
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="transition-colors hover:text-red-500"
              >
                সর্বশেষ সংবাদ
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="transition-colors hover:text-red-500"
              >
                সর্বাধিক পঠিত
              </Link>
            </li>

            <li>
              <Link
                href="/"
                className="transition-colors hover:text-red-500"
              >
                আমাদের সম্পর্কে
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            বিভাগ
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-red-500">
                বাংলাদেশ
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-red-500">
                আন্তর্জাতিক
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-red-500">
                খেলাধুলা
              </Link>
            </li>

            <li>
              <Link href="/" className="hover:text-red-500">
                বিনোদন
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            যোগাযোগ
          </h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p>
              📧 Email: news@example.com
            </p>

            <p>
              📞 Phone: +880 1XXX-XXXXXX
            </p>

            <p>
              📍 Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
          
          <p>
            © {new Date().getFullYear()} Bangla News 24. All rights reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-red-500">
              Mamun
            </span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

