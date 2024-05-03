import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-heading'>Testimonial</p>
            <h1 className='primary-heading'>What they are saying</h1>
            <p className="primary-text">
            Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et
          elit.dolor turpis molestindui magnis facilisis at fringilla quamNon
            </p>
        </div>
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>Lorem ipusm dolor sit amet consectetur. Non tincidunt magna non et
          elit.dolor turpis molestindui magnis facilisis at fringilla quamNon</p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>John Doc</h2>
        </div>
    </div>
  )
}

export default Testimonial
