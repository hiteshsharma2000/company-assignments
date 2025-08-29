import React from 'react'
import { FaPlaneDeparture, FaTelegramPlane } from 'react-icons/fa'

const Navbar = () => {
  return (
     <nav className="flex justify-between items-center px-[30px] lg:px-30 py-6 ">
      
      <ul className="hidden md:flex  gap-8 text-gray-400 font-medium">
        <div id='option' className="flex items-center text-xl font-bold text-black">  <FaPlaneDeparture/>&nbsp; Salty</div>
      &nbsp;
      &nbsp;
        <li className="hover:underline hover:decoration-orange-500 hover:cursor-pointer">Home</li>
        <li className="hover:underline hover:decoration-orange-500 hover:cursor-pointer">About us</li>
        <li className="hover:underline hover:decoration-orange-500 hover:cursor-pointer">Destinations</li>
        <li className="hover:underline hover:decoration-orange-500 hover:cursor-pointer">Tours</li>
        <li className="hover:underline hover:decoration-orange-500 hover:cursor-pointer">Blog</li>
      </ul>
      <button className="flex items-center text-orange-500 text-[1.2rem] text-center border border-orange-500 px-5 py-2 rounded-[50px] shadow-md">
        Book Now &nbsp; <FaTelegramPlane size={22}/>
      </button>
    </nav>
   
  )
}

export default Navbar