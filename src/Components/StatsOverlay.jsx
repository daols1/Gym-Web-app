import React from 'react';
import './StatsOverlay.css'
import {FaRegSmile} from 'react-icons/fa'
import {GiStrongMan} from 'react-icons/gi'
import {CgGym} from 'react-icons/cg'
import {TbCoffee} from 'react-icons/tb'

function StatsOverlay() {
  return (
    <div className='stats-wrapper'>
        <div className='container stats'>
            <div className='icon-and-name'>
                <p className='stats-number'>874</p>
                <div>
                    <FaRegSmile className='stats-icon' />
                    <h4>Happy clients</h4>
                </div>
            </div>
            <div className='icon-and-name'>
                <p className='stats-number'>987</p>
                <div>
                    <GiStrongMan className='stats-icon' />
                    <h4>Total Clients</h4>
                </div>
            </div>
            <div className='icon-and-name'>
                <p className='stats-number'>587</p>
                <div>
                    <CgGym className='stats-icon' />
                    <h4>Gym Equipment</h4>
                </div>
            </div>
            <div className='icon-and-name'>
                <p className='stats-number'>748</p>
                <div>
                    <TbCoffee className='stats-icon' />
                    <h4>Cups Of Coffee</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StatsOverlay;