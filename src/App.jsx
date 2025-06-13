import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/components/HomePage'
import CafeDuPort from './assets/components/CafeDuPort'
import CrazyHorse from './assets/components/CrazyHorse'
import NotFound from './assets/components/NotFound'
import SamyBar from './assets/components/SamyBar'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/cafeduport' element={<CafeDuPort />}/>
      <Route path='/samybar' element={<SamyBar />}/>
      <Route path='/crazyhorse' element={<CrazyHorse />}/>
      <Route path='/*' element={<NotFound />}/>
      
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
