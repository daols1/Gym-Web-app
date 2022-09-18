import React from 'react'
import './Video.css'
import {AiFillPlayCircle} from 'react-icons/ai'

function Video() {
  return (
    <div className='container video'>
        <h1>
            Explore Fitness Life
        </h1>
        <h4 className='watchnow'>Watch Now</h4>
        <div className='blinker'><AiFillPlayCircle className='playbtn'/></div>
    </div>
  )
}

export default Video