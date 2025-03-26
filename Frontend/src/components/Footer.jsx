import React from 'react';
import { Facebook, Twitter, Instagram, Image, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-gray-400">The Alchemy of Giving</span>
              </span>
            </div>
            <p className="text-gray-200 text-sm max-w-xs">
              The Alchemy of Giving is dedicated to providing you with the tools you need to raise money for whatever your cause may be.
            </p>
          </div>

{/* About us section */}
<div>
  <h3 className="text-green-400 font-bold text-lg mb-4">ABOUT US</h3>
  <div className="grid grid-cols-2 gap-x-6 text-gray-300 text-sm">
    <ul className="space-y-2">
      <li><a href="#" className="hover:text-white">Fundraising Ideas</a></li>
      <li><a href="#" className="hover:text-white">Pricing</a></li>
      <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
      <li><a href="#" className="hover:text-white">About Us</a></li>
      <li><a href="#" className="hover:text-white">Support</a></li>
    </ul>
    <ul className="space-y-2">
      <li><a href="#" className="hover:text-white">Blog</a></li>
      <li><a href="#" className="hover:text-white">Terms of Use</a></li>
      <li><a href="#" className="hover:text-white">FAQ</a></li>
      <li><a href="#" className="hover:text-white">Sales</a></li>
      <li><a href="#" className="hover:text-white">Press</a></li>
    </ul>
  </div>
</div>


          {/* Follow us section */}
          <div>
            <h3 className="text-green-400 font-bold text-lg mb-4">FOLLOW US</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <Facebook className="w-4 h-4" />
                </span>
                Facebook
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <Twitter className="w-4 h-4" />
                </span>
                Twitter
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <Instagram className="w-4 h-4" />
                </span>
                Instagram
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <Globe className="w-4 h-4" />
                </span>
                Google+
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <Image className="w-4 h-4" />
                </span>
                Pinterest
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-white">
                <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <Globe className="w-4 h-4" />
                </span>
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-gray-400 text-sm">Copyright © The Alchemy of Giving 2025</div>
          <a href="#top" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mt-4 md:mt-0">
            <ArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
