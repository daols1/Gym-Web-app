import React from 'react';
import './HSection1.css';
import smallimg from '../assets/home/about-trainer.jpg';
import stronggirl from '../assets/home/about-img-one.png';

function HSection1() {
  return (
    <div className='container homesection1'>
        <div className='imgside'>
            <div className='circles'>
                
            </div>
            <img src={stronggirl} alt="" className='stronggirl' />
            <div className='fitnessside'>
                fitness
            </div>
        </div>
        <div className='hsection1txt' >
            <p className='abttxthead'>ABOUT US</p>
            <h1 className='abtmaintxt'>Welcome To Our Fitness Gym</h1>
            <p className='homesecparag'>Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.<br /> Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.</p>
            <div className='namelearnmore'>
                <img src={smallimg} alt="" className='smallimg'/>
                <div>
                    <h1>Denis Robinson</h1>
                    <p>Our Coach</p>
                </div>
                <button className='joinbtn explore'>Explore Now</button>
            </div>
        </div>
    </div>
  )
}

export default HSection1;