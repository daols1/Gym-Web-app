import React from 'react'
import './Header.css'
import strong from '../assets/home/strongmanimg.png';
import {AiFillHeart, AiOutlineBarChart} from 'react-icons/ai'


function Header() {
  return (
    <div className='header container'>
      <div className='headerside1'>
          <div className="twosidetxt">
              <span className='span1'>The best</span>
              <span className='span2'> Fitness Club</span>
          </div>
          <div className="mainherotxt">Work Hard To Get Better Life</div>
          <div className="paragraph">Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.</div>
          <button className='joinbtn btn getstarted'>Get Started</button>
      </div>
      <div className='headerside2'>
        <div className="bgcircle">
          <div className="floatingtxt1">
            <AiOutlineBarChart className='floatingicon' />
            <div className='floattxtinner'>
              <h2 className='floatmaintxt'>Calories Burned</h2>
              <h2>100bpm</h2>
            </div>
          </div>
        </div>
        <div className="bgfull">
          <div className="floatingtxt2">
            <AiFillHeart className='floatingicon' />
            <div className='floattxtinner'>
              <h2 className='floatmaintxt'>Heart Rate</h2>
              <h2>100bpm</h2>
            </div>
          </div>
        </div>
        <div className="imghero"><img src={strong} alt='David the strong man' className='image'/></div>
      </div>
    </div>
  )
}

export default Header
