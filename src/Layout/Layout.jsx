import React from 'react'
import './layout.css'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

const Layout = () => {
    return (
        <div id='layout'>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout