import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Questions from './components/Questions'
import Home from './components/Home'

const Allroutes = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/quiz' element={<Questions/>}  />
        </Routes>
    </div>
  )
}

export default Allroutes