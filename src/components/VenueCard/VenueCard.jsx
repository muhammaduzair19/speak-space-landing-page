import React from 'react';
import './venuecard.css'
import { FaStar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { CiMap } from "react-icons/ci";



const VenueCard = ({img, name}) => {


    return (
        <div className='venue-card'>
            <img src={img}
                alt="location images"
                className='venue-card-img' />
                
            <div className="venue-card-text">
                <div className="venue-card-text-top">
                    <h3>{name}</h3>
                    <span>
                        <FaStar />
                        5
                    </span>
                </div>
                <div className="venue-card-text-bottom">



                    <div>
                        <div className="venue-rates">
                            <FaSackDollar size='1.2em' />
                            $45/hr
                        </div>


                        <div className="venue-location">
                            <CiMap size='1.2em' />
                            3452 Juanita Bridge
                        </div>


                    </div>
                    <img src="https://as2.ftcdn.net/v2/jpg/03/83/25/83/1000_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="" className="person-img" />
                </div>
            </div>
        </div>
    )
}


export default VenueCard