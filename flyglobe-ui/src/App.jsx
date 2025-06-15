import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExplorePage from './pages/ExplorePage'
import Dealspage from './pages/Dealspage'
import DestinationsPage from './pages/DestinationsPage'
import ContactPage from './pages/ContactPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/deals" element={<Dealspage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
