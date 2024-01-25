import React, { useState } from 'react'
import { SlMenu } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Logo from '../../assets/colorLogo.png'
import './mobileNav.css'
import { motion } from "framer-motion"
import { IoMdClose } from 'react-icons/io'




const MobileNav = () => {
    const [selected, setSelected] = useState('Home')
    const [menuOpen, setMenuOpen] = useState(false)

    const menuVariants = {
        hidden: {
            x: "-110%"
        },
        show: {
            x: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
            }
        }
    }

    return (
        <div className='mobileNav'>

            
            <div onClick={() => setMenuOpen(true)}>
                <SlMenu />
            </div>


            <motion.div className="mobileNavItems"
                variants={menuVariants}
                initial='hidden'
                animate={menuOpen ? 'show' : 'hidden'}>

                <div
                    className='crossIcon'
                    onClick={() => {
                        setMenuOpen(false)
                    }}>

                        
                    <IoMdClose />
                </div>



                <Link
                    to={'/'}
                    onClick={() => setMenuOpen(false)}
                    className="mobileNavItem">

                    Home
                </Link>


                <Link
                    to={'/about'}
                    onClick={() => setMenuOpen(false)}
                    className="mobileNavItem">
                    About
                </Link>


                <Link
                    to={'/how-it-works'}
                    onClick={() => setMenuOpen(false)}
                    className="mobileNavItem">
                    How It Works
                </Link>



                <Link
                    to={'/contact'}
                    onClick={() => setMenuOpen(false)}
                    className="mobileNavItem">
                    Contact Us
                </Link>

            </motion.div>
            <div className="mobileNavLogo">
                <img src={Logo} alt="" />
            </div>
        </div>
    )
}

export default MobileNav