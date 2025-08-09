import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:justify-between gap-8 md:gap-0 md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div className='flex flex-col gap-4 items-center md:items-start'>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TrendLama"
            width={36}
            height={36}
          />

          <p className="hidden md:block  text-md font-medium tracking-wider uppercase text-white">
            TrendLama.
          </p>
        </Link>
        <p className='text-sm text-gray-400'>&copy; 2025 TrendLama.</p>
        <p className='text-sm text-gray-400'>All rights reserved.</p>
      </div>
      <div className='flex flex-col text-sm gap-4 text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Links</p>
        <Link href="/" className='hover:text-gray-300'>Homepage</Link>
        <Link href="/" className='hover:text-gray-300'>Contact</Link>
        <Link href="/" className='hover:text-gray-300'>Terms of Service</Link>
        <Link href="/" className='hover:text-gray-300'>Privacy</Link>
      </div>
      <div className='flex flex-col text-sm gap-4 text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Products</p>
        <Link href="/" className='hover:text-gray-300'>All Products</Link>
        <Link href="/" className='hover:text-gray-300'>New Arrivals</Link>
        <Link href="/" className='hover:text-gray-300'>Best Sellers</Link>
        <Link href="/" className='hover:text-gray-300'>Sale</Link>
      </div>
      <div className='flex flex-col text-sm gap-4 text-gray-400 items-center md:items-start'>
        <p className='text-sm text-amber-50'>Comppany</p>
        <Link href="/" className='hover:text-gray-300'>About</Link>
        <Link href="/" className='hover:text-gray-300'>Contact</Link>
        <Link href="/" className='hover:text-gray-300'>Blog</Link>
        <Link href="/" className='hover:text-gray-300'>Affiliate Program</Link>
      </div>
    </div>
  );
}

export default Footer