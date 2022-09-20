// import React, { useState } from 'react';
import './Professional.css';
import {BsFacebook, BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import teach1 from '../assets/home/trainer1.jpg'
import teach2 from '../assets/home/trainer2.jpg'
import teach3 from '../assets/home/trainer3.jpg'

function Professional() {

  // const [scroller, setScroller] = useState('translateX(0)')




   return (
    <div className='container professional'>
        <h1 className='abttxthead professional-head-txt'>Professional</h1>
        <h1 className='abtmaintxt main-professional'>Our Professional Trainers</h1>
        <div className='trainers'>
          <div className='trainer'>
            <div className='trainer-img'>
              <img src={teach1} alt="" className='trainer-img-itself' />
            </div>
            <h2 className='trainer-name'>Ruth Edwards</h2>
            <h4 className='trainer-position'>Fitness Trainer</h4>
            <div className='trainer-socials'>
              <BsFacebook className='tranier-social-icon' />
              <BsTwitter className='tranier-social-icon' />
              <FaInstagram className='tranier-social-icon' />
            </div>
          </div>
          <div className='trainer'>
            <div className='trainer-img'>
              <img src={teach2} alt="" className='trainer-img-itself' />
            </div>
            <h2 className='trainer-name'>Ruth Edwards</h2>
            <h4 className='trainer-position'>Fitness Trainer</h4>
            <div className='trainer-socials'>
              <BsFacebook className='tranier-social-icon' />
              <BsTwitter className='tranier-social-icon' />
              <FaInstagram className='tranier-social-icon' />
            </div>
          </div>
          <div className='trainer'>
            <div className='trainer-img'>
              <img src={teach3} alt="" className='trainer-img-itself' />
            </div>
            <h2 className='trainer-name'>Ruth Edwards</h2>
            <h4 className='trainer-position'>Fitness Trainer</h4>
            <div className='trainer-socials'>
              <BsFacebook className='tranier-social-icon' />
              <BsTwitter className='tranier-social-icon' />
              <FaInstagram className='tranier-social-icon' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Professional;