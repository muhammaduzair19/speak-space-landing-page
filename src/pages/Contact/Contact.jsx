import React from 'react'
import './contact.css'
import Typing from '../../assets/typing.png'
import Phone from '../../assets/phone.png'
import Map from '../../assets/map.png'
import Email from '../../assets/email.png'
import Clock from '../../assets/clock.png'
import Side from '../../assets/contactSide.png'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div id='contactContainer' >
      <div id="contact">
        <div className='contactImage'>
          <img src={Side} alt="" />
        </div>


        <div className="leftContact">



          <div className="top">
            <div>
              <div className="tyingBro">
                <img src={Typing} alt="" />
              </div>
              <h1>Contact Us</h1>
            </div>
          </div>

          <div className="mobileForm">
            <ContactForm />
          </div>

          <div className="detailsSection">
            <div className="detailsLeft">
              <div className="detailBox">

                <img src={Map} alt="" />

                <div className='contactDetails'>
                  <h2>Physical Address</h2>
                  <p> 205 Lila Extension
                    Port Aliaberg
                    Western Cape
                    Cape Town, 1738</p>
                </div>
              </div>

              <div className="detailBox">

                <img src={Phone} alt="" />

                <div className='contactDetails'>
                  <h2>Phone Number</h2>
                  <p>(123) 456-7890</p>
                </div>
              </div>

              <div className="detailBox">

                <img src={Email} alt="" />

                <div className='contactDetails'>
                  <h2>Email</h2>
                  <p>support@seakspaces.com</p>
                </div>
              </div>

            </div>


            <div className="detailsRight">


              <div className="detailBox">

                <img src={Phone} alt="" />

                <div className='contactDetails'>
                  <h2>Business Number</h2>
                  <p>support@seakspaces.com</p>
                </div>
              </div>

              <div className="detailBox">

                <img src={Clock} alt="" />

                <div className='contactDetails'>
                  <h2>Operating Hours</h2>
                  <p>
                    Mon-Fri, 08:00 - 17:00 ET
                    <br />
                    Closed on Weekends
                  </p>
                </div>


              </div>

            </div>

          </div>


        </div>



        <div className="rightContact">

          <ContactForm />

        </div>
      </div>








    </div>
  )
}

export default Contact