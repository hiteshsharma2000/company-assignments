// src/components/CategoriesSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

const categories = [
  { name: "Beach", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Desert", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { name: "Mountain", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid" },
  { name: "Temple", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
  { name: "Tower", img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93" },
  { name: "Pyramid", img: "https://images.unsplash.com/photo-1518684079-3c830dcef090" },
    { name: "Temple", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29" },
  { name: "Tower", img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93" },
];

export default function CategoriesSlider() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
   
   useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation) {
      const swiper = swiperRef.current;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiperRef, prevRef, nextRef]);

  return (
    <section className=" py-12 px-6 md:px-16">
      {/* Header */}
      <div className="mx-[30px] flex items-center justify-between mb-8">
        <div className="ml-[25px]">
          <h2 className="font-[poppins] text-2xl md:text-4xl font-[550] text-gray-900">Categories</h2>
          <br />
          <p className="text-gray-600 max-w-md text-sm">
            Here are lots of interesting destinations to visit,<br /> but don’t be confused—they’re already grouped <br />by category.
          </p>
        </div>
        {/* Navigation buttons */}
     
        <div className="flex gap-2">
          <button ref={prevRef} className="w-10 h-10 text-[1.5rem] rounded-full border flex items-center justify-center hover:bg-black hover:text-white">‹</button>
          <button ref={nextRef} className="w-10 h-10 text-[1.5rem] rounded-full border flex items-center justify-center hover:bg-black hover:text-white">›</button>
        </div>
   
      </div>

      {/* Slider */}
    <div className="relative w-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
             modules={[Navigation, Autoplay]}        // 👈 include Autoplay here
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        
        loopedSlides={6}      
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,            
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
 
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-32 h-44 rounded-full overflow-hidden shadow-md relative">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-800 font-medium">{cat.name}</p>
            </div>
          </SwiperSlide>
        ))}

     
      </Swiper>
    </div>
    </section>
  );
}
