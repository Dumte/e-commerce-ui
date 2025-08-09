import Image from "next/image";
import Link from "next/link";
import { Home, Bell, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center border-b border-gray-200 p-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={36}
          height={36}
          className="w-6 h-6 md:w-9 md:h-9"
        />

        <p className="text-xs md:block  md:text-md font-medium tracking-wider uppercase">
          Elvis{" "}
          <span className="bg-gradient-to-r from-amber-500 to-red-800 text-transparent bg-clip-text">
            boutique
          </span>
        </p>
      </Link>

      {/* RIGHT */}
      <div className="flex items-center gap-6 ">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
