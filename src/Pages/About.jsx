import React from 'react'
import './About.css'
import AboutHero from '../Components/AboutHero'
import HSection1 from '../Components/HSection1'
import FormSec from '../Components/FormSec'
import Testimonial from '../Components/Testimonial'
import Professional from '../Components/Professional'
import Video from '../Components/Video'



function About() {
  return (
    <>
      <AboutHero />
      <HSection1 />
      <FormSec />
      <Testimonial />
      <Video />
      <Professional  />
    </>
  )
}

export default About