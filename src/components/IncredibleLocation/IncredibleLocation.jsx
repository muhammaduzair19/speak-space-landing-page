import React from 'react'
import VenueCard from '../VenueCard/VenueCard'
import './incrediblelocation.css'
import Herman from '../../assets/herman.png'
import Wiza from '../../assets/wiza.png'
import Wintheiser from '../../assets/Wintheiser.png'

const IncredibleLocation = () => {
    return (

        <div id="locationTwo">
            <div className="incredibleLocationDescription">
                <h1>Incredible Locations</h1>
                <p>Get started with us</p>
            </div>
            <div className="locationCards">
                <VenueCard img={Herman} name='Hermann Lounge' />
                <VenueCard img={Wintheiser} name='Wintheiser Lounge' />
                <VenueCard img={Wiza} name='Wiza Club' />
            </div>
        </div>
    )
}

export default IncredibleLocation