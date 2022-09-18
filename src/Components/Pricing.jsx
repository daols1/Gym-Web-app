import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div className='container pricing'>
        <h1 className='abttxthead pricing-head-txt'>PRICING TABLE</h1>
        <h1 className='abtmaintxt main-pricing'>Choose Your Pricing Plan</h1>
        <div className='price-table'>
          <div className='standard'>
            <div className='price-top'>
                <h2 className="price-name">Standard Plan</h2>
                <h1 className="price-name">$35<span className='per-month'>/month</span></h1>
            </div>
            <ul className='price-features-list'>
                <li>Unlimited club access</li>
                <li>Group attendance</li>
                <li>Gym visits</li>
                <li>Visits to the bath complex</li>
                <li>Gym, fight club</li>
            </ul>
            <button className='joinbtn btn outline'>Join Now</button>
          </div>
          <div className='standard'>
            <div className='price-top second-black'>
                <h2 className="price-name">The OK!! Plan</h2>
                <h1 className="price-name">$35<span className='per-month'>/month</span></h1>
            </div>
            <ul className='price-features-list'>
                <li>Unlimited club access</li>
                <li>Group attendance</li>
                <li>Gym visits</li>
                <li>Visits to the bath complex</li>
                <li>Gym, fight club</li>
            </ul>
            <button className='joinbtn outline'>Join Now</button>
          </div>
          <div className='standard'>
            <div className='price-top last-white'>
                <h2 className="price-name">Big Man Plan</h2>
                <h1 className="price-name">$35<span className='per-month'>/month</span></h1>
            </div>
            <ul className='price-features-list'>
                <li>Unlimited club access</li>
                <li>Group attendance</li>
                <li>Gym visits</li>
                <li>Visits to the bath complex</li>
                <li>Gym, fight club</li>
            </ul>
            <button className='joinbtn btn outline'>Join Now</button>
          </div>
        </div>
    </div>
  )
}

export default Pricing