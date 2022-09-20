import React, { useState } from 'react';
import './HCardSection.css';
import cimg1 from '../assets/home/class-img2.jpg'
import cimg2 from '../assets/home/class-img3.jpg'
import cimg3 from '../assets/home/class-img4.jpg'
import {IoMdBicycle} from 'react-icons/io'
import {GiMeditation} from 'react-icons/gi'
import {RiTodoLine} from 'react-icons/ri'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'

function HCardSection() {

    // let adder = 0

    const [slide, setSlide] = useState(0)
    
    const slideHandlerFront = () => {
        setSlide(slide+100)
    }

    const slideHandlerBack = () => {
        setSlide(slide-100)
    }

    // let style = `transform: translate(${slide} , 0)`

    // const [gofront, setGofront] = useState({transform: `translate(${adder}, 0)`})

    // const sliderFront = () => {
    //     setGofront({transform: `translate(${adder - 35}%, 0)`})
    //     adder = gofront
    // }

    // const sliderBack = () => {
    //     setGofront({transform: `translate(${adder + 35}%, 0)`})
    //     adder = gofront
    // }

  return (
    <div className='container cardsection'>
        <p className='abttxthead contactus'>Contact US</p>
        <h1 className='cardsecmaintxt'>Fitness Classes For Every Goal</h1>
        <div className='cards' style={{transform: `translate(${slide}px , 0)`}}>
            <div className='card card1'>
                <div className='imgwraper'><img src={cimg1} alt="" className='cimg' /></div>
                <div className='cardname-icon'>
                    <IoMdBicycle className='card-icon' />
                    <h2>Cardio and Srength Classes</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat fuga.</p>
                <div className='barandname'>
                    <div className='barandnameinner'>
                        <h4>Class Full</h4>
                        <h4>70%</h4>
                    </div>
                    <div className='bar'></div>
                </div>
            </div>
            <div className='card card2'>
                <img src={cimg2} alt="" className='cimg' />
                <div className='cardname-icon'>
                    <GiMeditation className='card-icon' />
                    <h2>Cardio and Srength Classes</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat fuga.</p>
                <div className='barandname'>
                    <div className='barandnameinner'>
                        <h4>Class Full</h4>
                        <h4>70%</h4>
                    </div>
                    <div className='bar'></div>
                </div>
            </div>
            <div className='card card3'>
                <img src={cimg3} alt="" className='cimg' />
                <div className='cardname-icon'>
                    <RiTodoLine className='card-icon' />
                    <h2>Cardio and Srength Classes</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat fuga.</p>
                <div className='barandname'>
                    <div className='barandnameinner'>
                        <h4>Class Full</h4>
                        <h4>70%</h4>
                    </div>
                    <div className='bar'></div>
                </div>
            </div>
            <div className='card card3'>
                <img src={cimg3} alt="" className='cimg' />
                <div className='cardname-icon'>
                    <RiTodoLine className='card-icon' />
                    <h2>Cardio and Srength Classes</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repellat fuga.</p>
                <div className='barandname'>
                    <div className='barandnameinner'>
                        <h4>Class Full</h4>
                        <h4>70%</h4>
                    </div>
                    <div className='bar'></div>
                </div>
            </div>
        </div>
        <div className='slide-div'><BsFillArrowLeftCircleFill onClick={slideHandlerBack} className='arr-icon' /><BsFillArrowRightCircleFill onClick={slideHandlerFront} className='arr-icon' /></div>
    </div>
  )
}

export default HCardSection
