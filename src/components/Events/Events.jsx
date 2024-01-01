import React from 'react'
import Event from '../../assets/eventsImage.png'
import Google from '../../assets/googleplay.png'
import Apple from '../../assets/applestore.png'
import './events.css'

const Events = () => {
    return (

        <div id="events">
            <div className="imageSide">
                <img src={Event} alt="" />
            </div>
            <div className="textSide">
                <div className="nameSection">
                    <hr />
                    <p>Events</p>
                </div>
                <div className="headingSection">
                    <h1>We Offer a Wide Range of Events</h1>
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

        </div>

    )
}

export default Events