import React from "react";
export default function Hero() {
  return (
<section id='hero' className="relative w-full pt-16 overflow-hidden px-8 sm:px-6 lg:px-8 min-h-[100dvh] sm:min-h-screen  ">

      <img src="https://www.wekatravel.com/wp-content/uploads/2017/10/banner-flights-96603_1080x675.jpg" className="absolute inset-0 w-full h-full object-cover z-0" alt="Hero" />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center z-10 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="text-white pt-50 sm:pt-0">
            <h1 className="text-4xl font-bold mb-4">UNLOCK EFFORTLESS TRAVEL WITH UNBEATABLE FLIGHT DEALS!</h1>
            <p className="mb-6 text-lg">From Seamless Booking to Smooth Takeoff – We Take Care of Every Detail So You Can Enjoy the Journey!</p>
           <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
              DISCOVER NOW
            </button>
          </div>

          <div className="bg-[#0D1B3E] p-6 md:p-10 rounded-2xl lg:rounded-3xl rounded-1xl text-white w-full max-w-xl">
            <div className="mb-4">
              <button className="bg-[#1D2B53] text-white px-4 py-2 rounded-full">Round trip ▼</button>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center space-x-2">
                  <span>✈️</span><span>Delhi (DEL)</span>
                </div>
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center space-x-2">
                  <span>✈️</span><span>London (LHR)</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center space-x-2">
                  <span>📅</span><span>Mar 20, 2025</span>
                </div>
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" /> <span>Return Date</span>
                  </label>
                  <span>📅 Mar 12, 2024</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center space-x-2">
                  <span>👤</span><span>1 Adult, 1 Child</span>
                </div>
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center space-x-2">
                  <span>💺</span><span>Economy</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2 bg-[#1D2B53] rounded-full px-4 py-2 flex items-center space-x-2">
                  <span>🛫</span><span>All Airlines</span>
                </div>
                <label className="w-1/2 flex items-center space-x-2">
                  <input type="checkbox" /> <span>Direct Flights Only</span>
                </label>
              </div>
              <button className="bg-white text-black w-full py-3 rounded-full mt-4">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
