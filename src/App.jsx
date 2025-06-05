import Navbar from './pages/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Hero from './pages/Hero'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
