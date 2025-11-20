// components/Footer.jsx
import React from "react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import Logo from "../assets/footer-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">

        {/* ------- TOP SECTION ------- */}
        <div className="
          flex flex-col items-center text-center 
          md:flex-row md:items-start md:text-left md:justify-between 
          gap-20
        ">

          {/* Logo + tagline + subscription */}
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <img src={Logo} alt="LogikTek logo" className="h-10 w-auto" />

            <p className="text-sm max-w-xs">
              But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-xs"
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-[#1e2533] text-gray-400 placeholder-gray-500 px-4 py-2 rounded-l-md flex-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-r-md hover:bg-pink-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Platform */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400">Overview</a></li>
              <li><a href="#" className="hover:text-pink-400">Products</a></li>
              <li><a href="#" className="hover:text-pink-400">About</a></li>
              <li><a href="#" className="hover:text-pink-400">Pricing</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-pink-400">How Does It Work</a></li>
              <li><a href="#" className="hover:text-pink-400">Where to ask questions</a></li>
              <li><a href="#" className="hover:text-pink-400">How to pay</a></li>
              <li><a href="#" className="hover:text-pink-400">What is needed to start</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">+234 xxxxxxx</p>
            <p className="text-sm">
              Plot 144 X street Lagos
              <br /> Nigeria
            </p>
          </div>
        </div>

        {/* ------- DIVIDER ------- */}
        <div className="w-full h-px bg-gray-700"></div>

        {/* ------- BOTTOM BAR ------- */}
        <div className="
          flex flex-col items-center text-center 
          md:flex-row md:items-center md:justify-between md:text-left 
          text-sm gap-6
        ">

          <p>© LogikTek 2019-2022. All rights reserved</p>

          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink-400"><SiFacebook size={20} /></a>
            <a href="#" className="hover:text-pink-400"><SiInstagram size={20} /></a>
            <a href="#" className="hover:text-pink-400"><SiX size={20} /></a>
            <a href="#" className="hover:text-pink-400"><SiLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
