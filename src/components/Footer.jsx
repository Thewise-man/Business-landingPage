// components/Footer.jsx
import React from "react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import Logo from "../assets/footer-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0e1a] text-gray-300 mt-25">
      <div className="flex flex-col gap-2">
        <div className="w-auto p-8 px-50 flex items-center justify-between">
          {/* Logo + Tagline + Subscription */}
          <div className="flex flex-col items-start gap-4">
            <img src={Logo} alt="LogikTek logo" className="h-10 w-auto" />
            <p className="text-sm w-110">
              But I must explain to you how all this mistaken ideas of
              denouncing pleasure and praising pain was born and I will give you
            </p>

            {/* Email Subscription Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-xs">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex bg-[#1e2533] text-gray-400 placeholder-gray-500 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-r-md hover:bg-pink-600"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  How Does It Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  Where to ask questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  How to pay
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition">
                  What is needed to start
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="-mt-9">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">+234 xxxxxxx</p>
            <p className="text-sm">
              Plot 144 X street Lagos
              <br />
              Nigeria
            </p>
          </div>
        </div>

        <div className="w-[1125px] h-[0.5px] bg-gray-100 mx-auto -mb-10"></div>    

        {/* Bottom Bar */}
        <div className="mt-12 mb-10">
          <div className="w-auto flex items-center justify-center gap-180 text-sm">
            <p>© LogikTek 2019-2022. All rights reserved</p>

            <div className="flex space-x-6">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-pink-400 transition"
              >
                <SiFacebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-pink-400 transition"
              >
                <SiX size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-pink-400 transition"
              >
                <SiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
