// src/components/Hero.js
import React from 'react';
import img1 from "../assets/ss1.png"
const Hero = () => {
  return (
    <section className="text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-white-800">Transform Your Product with Intelligent In-App Experiences</h1>
        <p className="mt-4 text-white-600">Empower growth & Marketing Teams to Boost Engagement and Conversion 10x faster without data or engineering team</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Get Started</button>
      
      </div>
     <br />
     <br />
      <img className='m-auto' src={img1} alt="" />
    </section>
  );
};

export default Hero;
