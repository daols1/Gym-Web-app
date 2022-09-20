import React, {useState} from 'react'
import './Testimonial.css'
import {BsFacebook, BsTwitter, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import client2 from '../assets/home/client2.jpg';
import client3 from '../assets/home/client3.jpg';
import client4 from '../assets/home/client4.jpg';

function Testimonial() {

  const [slide, setSlide] = useState(0)
    
    const slideHandlerFrontT = () => {
        setSlide(slide+100)
    }

    const slideHandlerBackT = () => {
        setSlide(slide-100)
    }

  return (
    <div className='container testimonial'>
      <h1 className='abttxthead pricing-head-txt'>Testimonial</h1>
      <h1 className='abtmaintxt main-pricing'>What Our Clients Says</h1>
      <div className='testimonies' style={{transform: `translate(${slide}px , 0)`}}>
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
      </div>
      <div className='slide-div'><BsFillArrowLeftCircleFill onClick={slideHandlerBackT} className='arr-icon black' /><BsFillArrowRightCircleFill onClick={slideHandlerFrontT} className='arr-icon black' /></div>
    </div>
  )
}

export default Testimonial
