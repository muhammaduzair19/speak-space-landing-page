import { useState } from 'react'
import './app.css'

import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './pages/About/About'
import HowItWorks from './pages/HowItWorks/HowItWorks'
import Contact from './pages/Contact/Contact'
import Privacy from './pages/Privacy/Privacy'


function App() {

  return (


    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy-policy' element={<Privacy />} />
      </Route>
    </Routes>


  )
}

export default App
