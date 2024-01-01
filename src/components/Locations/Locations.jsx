import React from 'react'
import './locations.css'
import LocationCard from '../LocationCard/LocationCard'
import Newyork from '../../assets/newyork.png'
import Massachusetts from '../../assets/massachusetts.png'
import Newjersey from '../../assets/newjersey.png'
import Connecticut from '../../assets/connectictu.png'
import Rhode from '../../assets/rhodeisland.png'


const Locations = () => {
    return (
        <div id="locations">
            <div className="locationsDescription">
                <h1>Our Locations</h1>
                <p>Find a place to book!</p>
            </div>
            <div className="locationCards">
                <LocationCard img={Newyork} title='Newyork' short='NY' />
                <LocationCard img={Connecticut} title='Connecticut' short='CT' />
                <LocationCard img={Rhode} title='Rhode Island' short='RI' />
                <LocationCard img={Massachusetts} title='Massachusetts' short='MA' />
                <LocationCard img={Newjersey} title='New Jersey' short='NJ' />
            </div>
        </div>
    )
}

export default Locations