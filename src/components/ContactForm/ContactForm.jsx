import React from 'react'
import './contactform.css'

const ContactForm = () => {
    return (
        <div className="contactForm">
            <div className='formTop'>
                <h3>Contact Form</h3>
                <p>Get in touch with us today and we will get back to you.</p>
            </div>


            <form className='form'>
                <label>
                    <span>Full Name</span>
                    <input placeholder='e.g. John Doe' type="text" />
                </label>
                <label>
                    <span>Your Email</span>

                    <input placeholder='e.g. johndoe@gmail.com' type="text" />
                </label>

                <label>
                    <span>Subject</span>
                    <input placeholder='What is the problem' type="text" />
                </label>

                <label>
                    <span>Message</span>
                    <textarea placeholder='Could you describe your issue in more detail?' name="" id="" cols="10" rows="10"></textarea>
                </label>
                <button className='getStarted' >Submit Request</button>
            </form>
        </div>
    )
}

export default ContactForm