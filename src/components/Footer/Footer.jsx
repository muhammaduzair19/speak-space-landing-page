import React from 'react'
import './footer.css'
import { FaRegCopyright } from 'react-icons/fa'
import Logo from '../../assets/logo.png'
import Google from '../../assets/googleplay.png'
import Apple from '../../assets/applestore.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer">

            <div className='innerDiv'>

                <div className="footerTop">

                    <div className="descriptionAndLogo">
                        <img src={Logo} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, provident. Perferendis sunt unde, enim magnam labore laboriosam laudantium id quaerat quisquam numquam.</p>
                        <div className="downloadButtonsSection">
                            <img src={Google} alt="" />
                            <img src={Apple} alt="" />
                        </div>
                    </div>


                    <div className="socialMedia">
                        <h2>Social Media</h2>
                        <a href="https://www.facebook.com/" target='_blank' >Facebook</a>
                        <a href="https://www.youtube.com/" target='_blank' >Youtube</a>
                        <a href="https://vimeo.com/" target='_blank' >Vimeo</a>
                        <a href="https://www.x.com/" target='_blank' >Twitter</a>
                        <a href="https://www.linkedin.com/" target='_blank' >LinkedIn</a>
                        <a href="https://www.instagram.com/" target='_blank' >Instagram</a>
                    </div>



                    <div className="contactUs">
                        <h2>Contact Us</h2>
                        <p>123 Main Street Anytown, USA 12345</p>
                        <p>support@seakspaces.com</p>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>



                <div className="footerBottom">
                    <Link
                        to={'privacy-policy'}
                        style={{ color: 'white' }}>

                        Privacy Policy
                    </Link>
                    <p>
                        <span>
                            <FaRegCopyright />
                        </span>
                        Seak Spaces, 2023
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Footer