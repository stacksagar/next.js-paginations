import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from './svgs/MenuIcon';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="relative bg-gray-800 w-full h-[50px] flex items-center justify-between px-5">
      <Link href="/" passHref>
        <span className="text-2xl text-blue-300 font-bold cursor-pointer border-b-2">
          Go Home
        </span>
      </Link>

      <nav className="hidden md:flex space-x-4 text-white ">
        <Link href="/cars-pagination-with-route"> With_Route </Link>
        <Link href="/cars-pagination-without-route"> Without_Route </Link>
        <Link href="/cars-pagination-with-loadmore"> With_LoadMore </Link>
      </nav>

      <div
        onClick={() => setShowMenu((prev) => !prev)}
        className="block md:hidden cursor-pointer"
      >
        <MenuIcon className="text-white" />
      </div>

      {showMenu && (
        <nav className="md:hidden absolute top-full right-0 bg-gray-700 shadow-lg ring rounded flex flex-col space-y-3 p-9 text-blue-300 z-50">
          <Link href="/cars-pagination-with-route" passHref>
            <span className="bg-gray-800 py-2 px-5 rounded focus:ring cursor-pointer hover:underline">
              With_Route
            </span>
          </Link>
          <Link href="/cars-pagination-without-route" passHref>
            <span className="bg-gray-800 py-2 px-5 rounded focus:ring cursor-pointer hover:underline">
              Without_Route
            </span>
          </Link>
          <Link href="/cars-pagination-with-loadmore" passHref>
            <span className="bg-gray-800 py-2 px-5 rounded focus:ring cursor-pointer hover:underline">
              With_LoadMore
            </span>
          </Link>
        </nav>
      )}
    </header>
  );
}
