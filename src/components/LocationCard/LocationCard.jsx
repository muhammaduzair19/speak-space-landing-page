import React from 'react'
import './locationcard.css'
import Newyork from '../../assets/newyork.png'

const LocationCard = ({ img, title, short }) => {
    return (
        <div className='locationCard'>
            <div className="locationImage">
                <img src={img} alt="" />
            </div>
            <div className="locationText">
                <h2>{title}</h2>
                <h4>{short}</h4>
            </div>
        </div>
    )
}

export default LocationCard