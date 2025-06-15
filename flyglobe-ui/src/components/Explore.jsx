import React from "react";
export default function Explore() {
  

  const items = [
    {name:"mountain",img:"https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?cs=srgb&dl=cold-snow-dawn-618833.jpg&fm=jpg"},
    {name:"Beach",img:"https://tse2.mm.bing.net/th?id=OIP.RiAwMqCxjeA1eT47OC-f0gHaFM&pid=Api&P=0&h=220"},
    {name:"desert",img:"https://facts.net/wp-content/uploads/2021/06/Sahara-Desert.jpg"},
    {name:"Lakes",img:"https://img.veenaworld.com/wp-content/uploads/2022/10/Breathtaking-Lakes-to-Visit-in-Switzerland-Once-in-a-Lifetime-scaled-e1665510931429.jpg"},
   ];
  return (
    <section id='explore' className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Categories</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="shadow rounded overflow-hidden gap-[10px]">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center font-semibold capitalize">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
