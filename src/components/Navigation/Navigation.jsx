import React, { useState } from 'react'
import './navigation.css'
import Logo from '../../assets/colorLogo.png'
import { Link } from 'react-router-dom'
import MobileNav from '../MobileNav/MobileNav';
import { useContextProvider } from '../../context.jsx';

const Navigation = () => {
    const { selected, setSelected } = useContextProvider();

    return (
        <div className="navContainer">
            <MobileNav />
            <div id='nav'>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navItems">

                    <Link
                        to={'/'}
                        style={selected === 'Home' ? { color: 'white', background: 'black' } : {}}
                        onClick={() => setSelected('Home')}
                        className="navItem">
                        Home
                    </Link>


                    <Link
                        to={'/about'}
                        style={selected === 'About' ? { color: 'white', background: 'black' } : {}}
                        onClick={() => setSelected('About')}
                        className="navItem">
                        About
                    </Link>


                    <Link
                        to={'/how-it-works'}
                        style={selected === 'How' ? { color: 'white', background: 'black' } : {}}
                        onClick={() => setSelected('How')}
                        className="navItem">
                        How It Works
                    </Link>



                    <Link
                        to={'/contact'}
                        style={selected === 'Contact' ? { color: 'white', background: 'black' } : {}}
                        onClick={() => setSelected('Contact')}
                        className="navItem">
                        Contact Us
                    </Link>



                </div>
                <div className='button'>
                    <button className='getStarted'>
                        Get Started
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navigation