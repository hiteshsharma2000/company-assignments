import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
     <section id='contact' className="max-w-[1440px] mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row justify-between">
      
        <div className="mb-10 lg:mb-0">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Get in touch with us,<br />
            We're here to assist you.
          </h2>
        </div>

     
        <div className="flex lg:flex-col items-center gap-4">
          <button className="border rounded-full w-10 h-10 flex items-center justify-center">
       <FaFacebookF className="text-xl" />
          </button>
          <button className="border rounded-full w-10 h-10 flex items-center justify-center">
             <FaInstagram className="text-xl" />
          </button>
          <button className="border rounded-full w-10 h-10 flex items-center justify-center">
             <FaTwitter className="text-xl" />
          </button>
        </div>
      </div>

   
      <form className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Email Address</label>
            <input
              type="email"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">
              Phone Number (optional)
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:outline-none py-2"
            />
          </div>
        </div>

        <div className="mt-10">
          <label className="block text-lg font-medium mb-2">Message</label>
          <textarea
            rows="4"
            className="w-full border-b border-gray-300 focus:outline-none py-2 resize-none"
          />
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="border rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
          >
            LEAVE US A MESSAGE
          </button>
        </div>
      </form>
    </section>
  );
}
