"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600 cursor-pointer hover:text-gray-800" />
      <span className="absolute bg-amber-400 rounded-full text-gray-600 -top-3 -right-3 w-4 h-4 flex items-center justify-center text-sm font-medium">0</span>
    </Link>
  );
}

export default ShoppingCartIcon