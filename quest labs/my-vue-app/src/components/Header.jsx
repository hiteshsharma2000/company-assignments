// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed  w-full z-10 transition-all duration-300 bg-black backdrop-blur shadow' shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex py-2 items-center justify-between">
          <div className="text-lg font-semibold text-white-700">
            Quest Labs
          </div>
          <nav className="flex space-x-4 hidden md:block lg:block">
            <a href="#" className="text-white-700 hover:text-gray-1000">Home</a>
            <a href="#" className="text-white-700 hover:text-gray-900">About</a>
            <a href="#" className="text-white-700 hover:text-gray-900">Features</a>
            <a href="#" className="text-white-700 hover:text-gray-900">Contact</a>
            <button className='py-2 bg-gradient-to-r from-[#3e237c] to-[#1e0a35] p-6 rounded-lg'>Book Now</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
