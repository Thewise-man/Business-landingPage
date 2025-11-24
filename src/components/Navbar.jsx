import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
import { useAuth } from "../context/AuthContext";
import { Globe, Menu, X } from "lucide-react";
import logo from "../assets/navLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="LogikTek Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-[#1E1E56] font-medium">
          <li>
            <HashLink smooth to="/#overview" className="hover:text-blue-700">
              Overview
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#products" className="hover:text-blue-700">
              Products
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#about" className="hover:text-blue-700">
              About
            </HashLink>
          </li>

          <li>
            <HashLink smooth to="/#pricing" className="hover:text-blue-700">
              Pricing
            </HashLink>
          </li>

          <li>
            <Link to="/Dashboard" className="hover:text-blue-700">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center text-[#1E1E56] space-x-1 hover:text-blue-700">
            <Globe size={18} />
            <span>English</span>
          </button>

          {user ? (
            <>
              <span>Hello, {user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/Signup"
              className="border border-gray-600 shadow-md text-[#1E1E56] font-semibold px-5 py-1.5 rounded-md hover:bg-[#1E1E56] hover:text-white transition-all"
            >
              Signup
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-[#1E1E56]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <ul className="flex flex-col px-6 py-4 space-y-3 text-[#1E1E56] font-medium">
            <li>
              <HashLink smooth to="/#overview" onClick={() => setMenuOpen(false)} >
                Overview
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#products" onClick={() => setMenuOpen(false)}>
                Products
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>
                About
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </HashLink>
            </li>

            <li>
              <Link to="/Dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
            </li>
          </ul>

          <div className="px-6 pb-4">
            <button className="flex items-center text-[#1E1E56] space-x-1 hover:text-blue-700 mb-2">
              <Globe size={18} />
              <span>English</span>
            </button>
            {user ? (
            <>
              <span>Hello, {user.email}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/Signup" onClick={() => setMenuOpen(false)}
              className="border border-gray-600 shadow-md text-[#1E1E56] font-semibold px-5 py-1.5 rounded-md hover:bg-[#1E1E56] hover:text-white transition-all"
            >
              Signup
            </Link>
          )}
          </div>
        </div>
      )}
    </nav>
  );
}
