import React, { useEffect } from 'react'
import AboutImage from '../../assets/aboutImage.png'
import './about.css'
import { Link, animateScroll as scroll } from 'react-scroll'


const About = () => {


  const options = {
    duration: 300,
    smooth: true,
  };
  useEffect(() => {
    scroll.scrollToTop(options);
  }, [])


  return (
    <div id='about'>

      <div className='aboutImage'>
        <img src={AboutImage} alt="" />
      </div>
      <div>
        <h1>About</h1>
      </div>

      <div className='aboutText'>
        <p>
          SeakSpaces was founded by Pierre Jolicoeur in 2023. This came after realizing that there was no easy way to book venues for events with total transparency and no hassle. Our goal is to streamline and simplify the venue booking process, making it quicker and easier for anyone planning an event. We aim to lead with transparency, a user-friendly design, and a thorough approach to the event planning experience. Our platform is designed to make this process more transparent, convenient, and efficient for the end-user.
          Users will be able to explore a wide array of available venues, filter based on various preferences (like location, cost, capacity, etc.), view detailed descriptions and photos, check availability, and complete the booking process directly on the platform.
        </p>
        <p>
          The process of booking venues for events is often fraught with inconvenience and murkiness. This can lead to time-consuming searches, confusing communication and a lack of confidence in understanding the suitability of the potential venue.  There needs to be a simpler process.
        </p>
        <p>
          We're offering an online solution, an easy-to-use platform that serves as a one-stop-shop for venue searching and booking experience. Users of our platform will be able to conveniently browse, compare, and book available venues, getting all relevant details to facilitate informed decision-making promptly.
        </p>
        <p>
          We've aligned our platform to prioritize transparency and user-friendly interactions, ensuring our users derive full value in booking. We further elevate the user experience by offering additional services through party rental vendors.
        </p>

      </div>

    </div>
  )
}

export default About