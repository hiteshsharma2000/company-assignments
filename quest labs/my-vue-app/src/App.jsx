// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import UI from './components/UI';
import SolarSystem from './components/SolarSystem';


const App = () => {
  return (
    <div className="App ">
      
      <Header />

      <br />
     
      
     
      <br />
      <br />
      <Hero />
<br />
<br />
<br />
<SolarSystem/>
<br />
      <UI/>
      <Features />
      <Footer />
   
    </div>
  );
};

export default App;
