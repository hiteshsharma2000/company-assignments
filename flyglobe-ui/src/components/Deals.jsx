import React from "react";
export default function Deals() {
  const deals = ["bali", "switzerland", "tokyo"];
  return (
    <section id='deals' className="bg-[#fff7f5] py-16 ">
     
<h1 className="text-black text-center font-bold uppercase">-BEST OFFERS</h1>
<p class="text-center text-gray-800 max-w-xl mx-auto mt-4 my-auto sm:px-[5px]">
  We’re excited to offer you an exclusive voucher to help you save on your next adventure.
  Whether you're planning a weekend getaway, a family vacation, or a solo expedition.
</p>
<br />
<br />
<div className="flex justify-evenly flex-wrap gap-[25px]" >
  <img className="h-[10rem]" src="https://d1z1lsfevj66vj.cloudfront.net/Content/Image/WlSetting/Defaults/22/01bc4428-ef49-4f56-8637-139f6e948402_profile.webp" alt="" />
  <img className="h-[10rem]"  src="https://d1z1lsfevj66vj.cloudfront.net/Content/Image/WlSetting/Defaults/22/01bc4428-ef49-4f56-8637-139f6e948402_profile.webp" alt="" />
  <img className="h-[10rem]" src="https://d1z1lsfevj66vj.cloudfront.net/Content/Image/WlSetting/Defaults/22/01bc4428-ef49-4f56-8637-139f6e948402_profile.webp" alt="" />
  <img className="h-[10rem]" src="https://d1z1lsfevj66vj.cloudfront.net/Content/Image/WlSetting/Defaults/22/01bc4428-ef49-4f56-8637-139f6e948402_profile.webp" alt="" />
</div>
    </section>
  );
}
