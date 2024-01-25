import React from 'react'
import './howItWorks.css'
import ComingSoon from '../../assets/comingSoon.png'

const HowItWorks = () => {
  return (
    <div id='howItWorks'>

      <div className='pageImage'>
        <img src={ComingSoon} alt="" />
      </div>
      <div>
        <h1>Coming Soon</h1>
      </div>

      <div className='howText'>
        <p>
          Mattis viverra velit duis in. Mauris ipsum nulla sed mattis egestas suscipit urna consequat sit. Risus blandit egestas erat mollis mi amet nullam pellentesque auctor. Sed dignissim non sit quam amet arcu sit turpis pretium.        </p>


      </div>

    </div>
  )
}

export default HowItWorks