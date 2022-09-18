import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

function ClassesHero() {
  return (
    <div className='about-hero container'>
        <h1 className='main-hero-txt'>Classes</h1>
        <div className='navigation-box'>Home <MdArrowForwardIos className='arrow-icon' /> Classes</div>
    </div>
  )
}

export default ClassesHero