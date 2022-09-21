import React from 'react';
import Header from '../Components/Header';
import HSection1 from '../Components/HSection1';
import HCardSection from '../Components/HCardSection'
import Video from '../Components/Video';
import Schedule from '../Components/Schedule';
import StatsOverlay from '../Components/StatsOverlay';
import Professional from '../Components/Professional';
import Pricing from '../Components/Pricing';
import FormSec from '../Components/FormSec';
import Testimonial from '../Components/Testimonial';
// import Loader from '../Components/Loader';


function Home() {

  return (
    < >
      <Header />
      <HSection1 />
      <Video />
      <HCardSection />
      <Schedule />
      <StatsOverlay />
      <Professional />
      <Pricing />
      <FormSec />
      <Testimonial />
    </>
  )
}

export default Home