import React, { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// SwiperCore.use([Autoplay, Pagination, Navigation]);
import  { useRef } from "react";

const locations = [
  {
    name: "LOS ANGELES",
    time: "2– Hours Away",
    image: "https://ts4.mm.bing.net/th?id=OIP.q8bws2pac2AFTvBx3E4ObgHaE8&pid=15.1",
  },
  {
    name: "MIAMI",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/OIP.YsV7L9Ymi6YK7atn1P_sbQHaE7?w=237&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  },
  {
    name: "NEW YORK",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/R.5b28c1fd91f9ee8a65981359332b7076?rik=Y7iPOosgwyCCxw&riu=http%3a%2f%2fwww.experiencify.com%2fwp-content%2fuploads%2f2015%2f02%2fnew-york.jpg&ehk=jTfdZL4HbRoqXHwEBP17ovrSfjt8KBuvyV9uLklFqJY%3d&risl=1&pid=ImgRaw&r=0",
  },
  {
    name: "LAS VEGAS",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/R.a72f3ec550791031f21369a550ceb75a?rik=g8UnR8gSkFTDlA&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f02%2fimage-Las-Vegas.jpg&ehk=aaQoknliBDPUUyV7xZk6BnImtT3QHxbiXiRlpDlR1Oo%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "TEXAS",
    time: "2– Hours Away",
    image: "https://ts2.mm.bing.net/th?id=OIP.8VXSSldKwTZAzgfRKqXLUgHaE9&pid=15.1",
  },
  {
    name: "CHICAGO",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/OIP.Ylo1ySvO59MMwRBRTWYxEQHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "SWITZERLAND",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/OIP.--bJlzKpZY8wS2t5SJxcugHaE8?rs=1&pid=ImgDetMain",
  },
  {
    name: "KASHMIR",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/OIP.VUw73zraReDEAd99Hcvi3gHaEK?o=7rm=3&rs=1&pid=ImgDetMain",
  },
  {
    name: "Ayodhya",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/OIP.SP4wbI0CX6N9apE62gq8kgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "DUBAI",
    time: "2– Hours Away",
    image: "https://th.bing.com/th/id/R.8378fe3481c9f8b60df41c8c617f2797?rik=DtQ9G73Z9QBbGw&riu=http%3a%2f%2fturismo.org%2fwp-content%2fuploads%2f2013%2f11%2fDubai.png&ehk=wQUUcnvOXXok4jrI8yInHylzDgRrzXYsslnI6s0IIJs%3d&risl=&pid=ImgRaw&r=0",
  }
];



export default function Destinations() {
  const swiperRef = useRef(null);
 return (
    <div id='destination' className="bg-white py-10">
      <div className="flex items-center justify-center mb-6">
        <span className="w-8 h-px bg-black" />
        <h2 className="mx-2 text-lg font-bold uppercase">Explore Nearby</h2>
      
      </div>

      <Swiper
      
        modules={[Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        
        speed={1500}
        pagination={{ clickable: true }}
      
  autoplay={{
    delay: 1, 
    disableOnInteraction: false,
  }}
  loop={false}
  allowTouchMove={false}                     
  loopAdditionalSlides={locations.length}  

        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 4 },
        }}
       
      >
        {locations.map((loc, idx) => (
          <SwiperSlide key={idx} className="!w-auto ">
            <div className="text-center">
              <img
                src={loc.image}
                alt={loc.name}
                className="mx-auto h-48 w-48 rounded-full object-cover"
              />
              <br />
              <h3 className="mt-3 text-sm font-bold uppercase">
                {loc.name}
              </h3>
              <p className="mt-3 text-sm text-gray-500">{loc.time}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
