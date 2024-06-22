import React from 'react'
import img2 from "../assets/ss2.png"
import img3 from "../assets/ss3.png"
const UI = () => {
  return (
    <>
    <div>

        <h1>AI-Driven Personalized UI</h1>
       <br /> <p>
        Enhance your app with AI-driven personalized UI, seamlessly integrated with your data stack for a tailored user experience</p>
       <br />
       <br />
       <br />
       <br />
       <img className='m-auto'  src={img2} alt="" />
   
    </div>
    <br />
    <br />
    <br />
    <br />
    <div className='relative bg-white/5 backdrop-blur-md p-8 rounded-lg'>
      <p>Dynamic & Intelligent experiences</p>
      <br />
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>
        Deliver Delightful In-App Experiences that drive <br /> Adoption, Engagement & Retention
      </h1>
      <br />
      <p>50+ Pre-Built In-app Components to get started within minutes</p>
      <br />
      <br />
      <img className='m-auto' src={img3} alt="In-app components" />
      <br />
      <br />
    </div>
    </>
  )
}

export default UI