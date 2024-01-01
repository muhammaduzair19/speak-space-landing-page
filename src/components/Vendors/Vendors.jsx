import React from 'react'
import './vendors.css'
import Google from '../../assets/googleplay.png'
import Apple from '../../assets/applestore.png'
import Vendor from '../../assets/vendorsImage.png'

const Vendors = () => {
    return (

        <div id="vendors">
            <div className="textSide">
                <div className="nameSection">
                    <hr />
                    <p>Vendors</p>
                </div>
                <div className="headingSection">
                    <h1>Get the best Vendors in One Place</h1>
                </div>
                <div className="descriptionSection">
                    <p>Dictumst aenean amet sit sodales tincidunt malesuada pellentesque facilisis. Semper aliquam tristique adipiscing gravida egestas. Neque consequat auctor ligula non. Elit malesuada quisque vel nunc ullamcorper malesuada faucibus lorem. Porttitor accumsan tellus egestas faucibus elit adipiscing. Lorem dui dolor maecenas id dui platea commodo id ut. Sit venenatis tincidunt morbi porttitor imperdiet.
                        Ullamcorper diam laoreet nunc lectus. Dolor.</p>
                </div>
                <div className="downloadButtonsSection">
                    <div>
                        <img src={Google} alt="" />
                    </div>
                    <div>
                        <img src={Apple} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="imageSide">
                <img src={Vendor} alt="" />
            </div>
        </div>

    )
}

export default Vendors