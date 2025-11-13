// src/components/Navbar.jsx
import React, { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import logo from "../assets/nav-Logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="LogikTek Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center -ml-50 space-x-10 text-[#1E1E56] font-medium">
          <li className="hover:text-blue-700 cursor-pointer">Overview</li>
          <li className="hover:text-blue-700 cursor-pointer">Products</li>
          <li className="hover:text-blue-700 cursor-pointer">About</li>
          <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center text-[#1E1E56] space-x-1 hover:text-blue-700">
            <Globe size={18} />
            <span>English</span>
          </button>
          <button className="border border-gray-600 shadow-md text-[#1E1E56] font-semibold px-5 py-1.5 rounded-md hover:bg-[#1E1E56] hover:text-white transition-all">
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-[#1E1E56] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col items-start px-6 py-4 space-y-3 text-[#1E1E56] font-medium">
            <li className="hover:text-blue-700 cursor-pointer">Overview</li>
            <li className="hover:text-blue-700 cursor-pointer">Products</li>
            <li className="hover:text-blue-700 cursor-pointer">About</li>
            <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
          </ul>

          <div className="flex flex-col px-6 pb-4 space-y-3">
            <button className="flex items-center text-[#1E1E56] space-x-1 hover:text-blue-700">
              <Globe size={18} />
              <span>English</span>
            </button>
            <button className="border border-[#1E1E56] text-[#1E1E56] font-semibold px-5 py-1.5 rounded-md hover:bg-[#1E1E56] hover:text-white transition-all w-full">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
