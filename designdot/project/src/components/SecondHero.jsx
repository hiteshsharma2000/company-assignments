import React from 'react'

const SecondHero = () => {
  return (
   <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 font-inter">
      <div className="max-w-4xl mx-auto  p-8 sm:p-12 rounded-2xl  flex flex-col lg:flex-row gap-10 items-center justify-center">

       
        {/* Left Column: Image with Overlaid Stats */}
        <div className="relative mt-10 md:mt-0 flex justify-around items-end w-full md:w-[45%] h-[400px] overflow-hidden">
  
  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#fde3b0] rounded-full z-0"></div>


  <img
    src="http://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
    alt="Traveler"
    className="w-80 md:w-[350px]  object-contain relative z-10"
  />


    
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">600%</p>
              <p className="text-sm text-gray-600">Destinations</p>
            </div>
          </div>

   
          <div className="absolute top-[90%] right-0 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2">
            <div className="bg-red-400 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15.5a4 4 0 00-8 0V16h8v-.5zM.9 14.5a.5.5 0 01.5-.5h4.293L8 10.293l2.207 2.207 2-2 2.5 2.5a.5.5 0 01-.707.707L14 13.707l-2-2-2.5 2.5-1.5-1.5L5.707 14H1.4a.5.5 0 01-.5-.5z" />
              </svg>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">5000+</p>
              <p className="text-sm text-gray-600">Customers</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 text-center lg:text-left">
          <p className="text-orange-500 font-semibold mb-2 ">Our Experience</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Our Stories Have <br className="hidden sm:inline" /> Adventures
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            We are experienced in bringing adventures to stay their journey, with all outdoor
            destinations in the world as our specialties. Start your adventure now! Nature has
            already called you!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
       
            <div className="bg-orange-50 p-6 rounded-xl text-center bg-white">
              <p className="text-3xl font-bold text-orange-600 mb-1">12K+</p>
              <p className="text-gray-700">Succes Journey</p>
            </div>
          
            <div className="bg-orange-50 p-6 rounded-xl text-center bg-white">
              <p className="text-3xl font-bold text-orange-600 mb-1">16+</p>
              <p className="text-gray-700">Awards Winning</p>
            </div>
          
            <div className="bg-orange-50 p-6 rounded-xl text-center bg-white">
              <p className="text-3xl font-bold text-orange-600 mb-1">20+</p>
              <p className="text-gray-700">Years Of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondHero