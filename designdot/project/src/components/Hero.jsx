import { FaAndroid, FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
   <section className="font-[poppins] w-full  min-h-[90vh] flex flex-col md:flex-row items-center justify-evenly px-6 md:px-16 lg:px-24 py-10">
   
      <div className="w-[40%] text-center md:text-left space-y-6">
      <h1 className="font-[510] text-4xl md:text-[4.5rem] leading-tight ">
  Discover  the <br />
  <span className="text-gray-900">Best  Lovely <br />Places</span>
</h1>
        <p className="text-gray-600 leading-relaxed">
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us.
        </p>

  
        <div className="ml-[10px] mt-6 bg-white shadow-lg rounded-full flex flex-col md:flex-row items-center gap-4 p-4 w-[95%]">
    
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-gray-400 text-sm mb-1">Where</label>
            <input
              type="text"
              placeholder="Center Point, Lo..."
              className="outline-none text-gray-700 font-medium"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gray-200 h-10"></div>

     
        <div className="flex flex-col w-full md:w-1/2">
  <label className="text-gray-400 text-sm mb-1">Date</label>
  <input
    type="date"
    className="outline-none text-gray-700 font-medium appearance-none [color-scheme:light]"
    placeholder="dd/mm/yyyy"
  />
</div>

         
          <button className="bg-orange-500 hover:bg-orange-600 transition text-white p-4 rounded-full shadow-md flex items-center justify-center">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Right Image Section */}
    <div className="relative mt-10 md:mt-0 flex justify-around items-end w-full md:w-[45%] h-[400px] overflow-hidden">
  
  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#fde3b0] rounded-full z-0"></div>


  <img
    src="http://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
    alt="Traveler"
    className="w-80 md:w-[350px]  object-contain relative z-10"
  />


    
          <div className="absolute top-1/2 left-5 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          
          </div>

   
          <div className="absolute top-[90%] right-15 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2">
            <div className="bg-red-400 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15.5a4 4 0 00-8 0V16h8v-.5zM.9 14.5a.5.5 0 01.5-.5h4.293L8 10.293l2.207 2.207 2-2 2.5 2.5a.5.5 0 01-.707.707L14 13.707l-2-2-2.5 2.5-1.5-1.5L5.707 14H1.4a.5.5 0 01-.5-.5z" />
              </svg>
            </div>
          
          </div>
          <div className="absolute top-[25%] right-15 -translate-y-1/2 z-20 bg-white p-3 sm:p-4 rounded-xl shadow-md flex items-center gap-2">
            <div className="bg-blue-400 p-2 rounded-lg">
             <FaAndroid/>
            </div>
          
          </div>
        </div>


    </section>
  )
}

export default Hero