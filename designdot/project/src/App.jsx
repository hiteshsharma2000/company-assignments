import { useState } from 'react'


import './App.css'
import CategoriesSlider from './components/CategoriesSlider';
import SecondHero from './components/SecondHero';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  

  return (
    <div className='bg-[#faf8ec]'>
     
    <Navbar/>
    <Hero/>
    <CategoriesSlider/>
    <SecondHero/>
    </div>
  )
}

export default App
