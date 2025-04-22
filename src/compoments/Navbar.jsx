// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-red-800 text-white px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="mr-2">
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-xs">E</span>
          </div>
        </div>
        <Link href="/" className="font-semibold text-lg">
          Educare
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="hover:text-gray-300 text-sm">
          About us
        </Link>
        <Link href="/courses" className="hover:text-gray-300 text-sm">
          Courses
        </Link>
        <Link href="/careers" className="hover:text-gray-300 text-sm">
          Careers
        </Link>
        <Link href="/news" className="hover:text-gray-300 text-sm">
          News & Blog
        </Link>
        <Link href="/partners" className="hover:text-gray-300 text-sm">
          Partners
        </Link>
      </div>

      {/* Contact Info and Button */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center">
          <Phone size={16} className="mr-1" />
          <span className="text-sm">+800 8080 8080</span>
        </div>
        <Link href="/contact">
          <button className="bg-white text-red-800 px-4 py-1 rounded-md text-sm hover:bg-gray-100 transition">
            Contact us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;