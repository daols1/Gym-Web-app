import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

function ContactHero() {
  return (
    <div className='about-hero container'>
        <h1 className='main-hero-txt'>Contact Us</h1>
        <div className='navigation-box'>Home <MdArrowForwardIos className='arrow-icon' /> Contact Us</div>
    </div>
  )
}

export default ContactHero