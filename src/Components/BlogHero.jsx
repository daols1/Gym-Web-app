import React from 'react'
import {MdArrowForwardIos} from 'react-icons/md'

function BlogHero() {
  return (
    <div className='about-hero container'>
        <h1 className='main-hero-txt'>Blog</h1>
        <div className='navigation-box'>Home <MdArrowForwardIos className='arrow-icon' /> Blog</div>
    </div>
  )
}

export default BlogHero