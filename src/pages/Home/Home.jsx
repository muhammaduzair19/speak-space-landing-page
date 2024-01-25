import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Categories from '../../components/Categories/Categories'
import Vendors from '../../components/Vendors/Vendors'
import Locations from '../../components/Locations/Locations'
import Events from '../../components/Events/Events';
import IncredibleLocation from '../../components/IncredibleLocation/IncredibleLocation';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <Vendors />
            <Locations />
            <Events />
            <IncredibleLocation />
            {/* <Footer /> */}
        </>
    )
}

export default Home