import React from 'react'
import './Testimonial.css'
import {BsFacebook, BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import client2 from '../assets/home/client2.jpg';
import client3 from '../assets/home/client3.jpg';
import client4 from '../assets/home/client4.jpg';

function Testimonial() {
  return (
    <div className='container testimonial'>
      <h1 className='abttxthead pricing-head-txt'>Testimonial</h1>
      <h1 className='abtmaintxt main-pricing'>What Our Clients Says</h1>
      <div className='testimonies'>
        <div className='testimony'>
          <div className='name-and-pic'>
            <div className='client-wrapper'><img src={client2} alt="" className='client-pic'/></div>
            <div>
              <h3>Scott Swanson</h3>
              <p>Our Client</p>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores laudantium veniam nihil. Ab, excepturi</p>
          <div className='trainer-socials'>
            <BsFacebook className='tranier-social-icon icon-here' />
            <BsTwitter className='tranier-social-icon icon-here' />
            <FaInstagram className='tranier-social-icon icon-here' />
          </div>
        </div>
        <div className='testimony'>
          <div className='name-and-pic'>
            <div className='client-wrapper'><img src={client3} alt="" className='client-pic'/></div>
            <div>
              <h3>Scott Swanson</h3>
              <p>Our Client</p>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores laudantium veniam nihil. Ab, excepturi</p>
          <div className='trainer-socials'>
            <BsFacebook className='tranier-social-icon icon-here' />
            <BsTwitter className='tranier-social-icon icon-here' />
            <FaInstagram className='tranier-social-icon icon-here' />
          </div>
        </div>
        <div className='testimony'>
          <div className='name-and-pic'>
            <div className='client-wrapper'><img src={client4} alt="" className='client-pic'/></div>
            <div>
              <h3>Scott Swanson</h3>
              <p>Our Client</p>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores laudantium veniam nihil. Ab, excepturi</p>
          <div className='trainer-socials'>
            <BsFacebook className='tranier-social-icon icon-here' />
            <BsTwitter className='tranier-social-icon icon-here' />
            <FaInstagram className='tranier-social-icon icon-here' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
