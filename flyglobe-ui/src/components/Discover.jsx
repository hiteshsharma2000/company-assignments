import React from "react";

const destinations = [
  {
    title: "ROME",
    country: "Italy",
    image: "https://tse1.mm.bing.net/th?id=OIP.L-Pbqg3IM5Pp4JP5SzeTKQHaE8&pid=Api&P=0&h=220",
    price: "$500*"
  },
  {
    title: "ROME",
    country: "Italy",
    image: "https://tse2.mm.bing.net/th?id=OIP.myUev7Xlll0qJvv-O7MauQHaE0&pid=Api&P=0&h=220",
    price: "$500*"
  },
  {
    title: "ROME",
    country: "Italy",
    image: "https://c8.alamy.com/comp/C3P2NM/roman-emperor-augustus-caesar-statue-rome-italy-C3P2NM.jpg",
    price: "$500*"
  },
  {
    title: "ROME",
    country: "Italy",
    image: "https://tse2.mm.bing.net/th?id=OIP.hGa3hMjdmgHluMiUhrTzSAHaEO&pid=Api&P=0&h=220",
    price: "$500*"
  },
  {
    title: "ROME",
    country: "Italy",
    image: "https://images.nationalgeographic.org/image/upload/v1638891605/EducationHub/photos/roman-forum.jpg",
    price: "$500*"
  },
];

const filters = [
  "All",
  "Asian",
  "European",
  "Middle-East",
  "Beach Paradise",
  "Nature Retreats",
  "Romantic Escapes",
  "Cultural Immersion",
  "African",
  "American"
];

export default function DiscoverDestinations() {
  return (
    <section id='discover' className="max-w-[1440px] mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
    
        <div>
          <h2 className="text-md font-medium mb-1 border-l-2 border-black pl-2">DISCOVER</h2>
          <br />
          <h1 className="text-3xl font-bold mb-4 leading-tight">
            More than 100 destinations <br /> waiting for you
          </h1>
       
          <p className="text-gray-600 max-w-xl mb-8">
            Explore our curated list of the best countries to visit in 2024 and discover
            incredible destinations waiting to be explored
          </p>

        <br />
       <div className="flex flex-wrap gap-3">
            {filters.map((filter, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full border ${
                  filter === "All" ? "bg-[#0F172A] text-white" : "text-black border-gray-300"
                } text-sm`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

      
        <div className="grid grid-cols-3 grid-rows-3 gap-4 max-h-[80vh]">
        
          <div className=" relative  ">
            <img
              src={destinations[0].image}
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[0].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>
          <div className=" relative sm:col-start-2 sm:col-span-2 sm:col-span-4  sm:row-span-1 sm:row-span-3">
            <img
              src='https://tse3.mm.bing.net/th?id=OIP.YWxKGjvuPB-9eTbuHDoP5wHaKX&pid=Api&P=0&h=220'
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[1].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>
          <div className=" relative  ">
            <img
              src={destinations[2].image}
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[2].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>
          <div className=" relative  ">
            <img
              src={destinations[3].image}
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[3].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>
          <div className=" relative  ">
            <img
              src={destinations[4].image}
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[4].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>
          <div className=" relative  ">
            <img
              src={destinations[1].image}
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[1].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>
          <div className=" relative col-span-2 col-span-3 ">
            <img
              src={destinations[1].image}
              alt="Rome"
              className="w-full h-full object-cover "
            />
            <div className="absolute inset-0 bg-black/30 "></div>
            <div className="absolute top-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{destinations[1].title}</h3>
              <span className="bg-white text-black text-xs px-2 py-0.5 rounded">
                {destinations[1].country}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <p className="text-lg font-bold">fr {destinations[1].price}</p>
              <span className="text-xs">1000+ Destinations</span>
            </div>
          </div>

     
        </div>
      </div>
    </section>
  );
}
