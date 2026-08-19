"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-red-600">ESTATE<span className="text-black">CORE</span></span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#properties" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">Properties</Link>
              <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">Services</Link>
              <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors">About</Link>
              <Link href="#contact" className="px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-md hover:bg-red-700 transition-all">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}