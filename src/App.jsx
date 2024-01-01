import { useState } from 'react'
import './app.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Categories from './components/Categories/Categories'
import Vendors from './components/Vendors/Vendors'
import Locations from './components/Locations/Locations'
import Events from './components/Events/Events';
import IncredibleLocation from './components/IncredibleLocation/IncredibleLocation';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="main">

      <Header />
      <Home />
      <Categories />
      <Vendors />
      <Locations />
      <Events />
      <IncredibleLocation />
      <Footer />

    </div>

  )
}

export default App
