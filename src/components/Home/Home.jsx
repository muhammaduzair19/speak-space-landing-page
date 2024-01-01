import React from 'react'
import Google from '../../assets/googleplay.png'
import Phone from '../../assets/mobileimage.png'
import Apple from '../../assets/applestore.png'
import './home.css'

const Home = () => {
    return (
        <div id="home">
            <div className="downloadButtons">
                <div>
                    <img src={Google} alt="" />
                </div>
                <div>
                    <img src={Apple} alt="" />
                </div>
            </div>
            <div className="phonePicture">
                <img src={Phone} alt="" />
            </div>
        </div>
    )
}

export default Home