import React from 'react'
import './Footer2.css'
import { Link } from 'react-router-dom'

const Footer2 = () => {
    return (
        <div id='footerContainer'>
            <div className='footer2'>
                <Link
                    to={'privacy-policy'}
                    style={{ color: 'white' }}>

                    Privacy Policy
                </Link>

                <p>
                    ©SeakSpaces , All right reserved. 2024.
                </p>
            </div>
        </div>
    )
}

export default Footer2