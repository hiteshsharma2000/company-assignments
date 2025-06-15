import React from 'react'
import Hero from '../components/Hero';
import Explore from '../components/Explore';
import Deals from '../components/Deals';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Destinations from '../components/Destinations';
import DiscoverDestinations from '../components/Discover';

export default function Home() {
  return (
    <main>
      <Hero />
    <br />
      <Deals />
      <br />
      <DiscoverDestinations/>
      <br />
      <Destinations/>
      <br />
      <br />
      <br />
        <Explore />
        <br />
      <Contact/>
    </main>
  );
}