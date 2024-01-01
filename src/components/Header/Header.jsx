import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'


const Header = () => {
    return (
        <div className="header">
            <div className='headerText'>
                <div id="logo">
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <h1>Find a value.</h1>
                    <h1>Enjoy Yourself.</h1>
                </div>
            </div>
        </div>
    )
}

export default Header