import React from 'react'
import './AboutHero.css'
import {MdArrowForwardIos} from 'react-icons/md'

function AboutHero() {
  return (
    <div className='about-hero container'>
        <h1 className='main-hero-txt'>About Us</h1>
        <div className='navigation-box'>Home <MdArrowForwardIos className='arrow-icon' /> About Us</div>
    </div>
  )
}

export default AboutHero