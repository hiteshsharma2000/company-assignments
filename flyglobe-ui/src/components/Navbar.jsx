import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { IoSwapHorizontal } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdOutlineFlightClass } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import "../index.css";
export default function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};



  return (
    <nav
      className={`w-full fixed top-0 z-50 h-16 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <Link
            to="/"
            className={`text-xl font-bold italic transition-colors duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <h3 onClick={()=>scrollToSection('hero')}>

            FLYGLOBE
            </h3>
          </Link>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-6 font-medium transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
             <li><Link  onClick={() => scrollToSection("hero")}>Home</Link></li>
            <li><Link  onClick={() => scrollToSection("discover")} >First</Link></li>
            <li><Link  onClick={() => scrollToSection("deals")} >Business</Link></li>
            <li><Link  onClick={() => scrollToSection("footer")} >About Us</Link></li>
            <li><Link  onClick={() => scrollToSection("contact")} >Contact Us</Link></li>
          </ul>

         
          <div className="hidden md:flex items-center space-x-4">
            <div className={`${isScrolled ? "text-black" : "text-white"}`}>🇬🇧 | ENG</div>
            <button className={`${isScrolled ? "text-gray-700" : "text-white"}`}>Login</button>
            <button className="bg-black text-white px-4 py-2 rounded-full">Sign Up</button>
          </div>

      
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className={`${isScrolled ? "text-black" : "text-white"} text-2xl`}>
              {menuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-40 transition-all duration-300`}>
          <ul className="flex flex-col space-y-4 p-4 text-gray-800 font-medium">
       <li><Link  onClick={() => scrollToSection("hero")}>Home</Link></li>
            <li><Link  onClick={() => scrollToSection("discover")} >First</Link></li>
            <li><Link  onClick={() => scrollToSection("deals")} >Business</Link></li>
            <li><Link  onClick={() => scrollToSection("footer")} >About Us</Link></li>
            <li><Link  onClick={() => scrollToSection("contact")} >Contact Us</Link></li>
            <li><button className="text-left">🇬🇧 | ENG</button></li>
            <li><button className="text-left">Login</button></li>
            <li><button className="bg-black text-white px-4 py-2 rounded-full w-full">Sign Up</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
