import React from 'react';
import logo  from '../assets/logo.png';
// import bg from '../assets/bg.jpg';
import {BsClockHistory, BsFillTelephoneOutboundFill, BsFacebook, BsTwitter} from 'react-icons/bs';
import {RiMapPin2Fill} from 'react-icons/ri';
import {HiMail} from 'react-icons/hi';
import {FaInstagram} from 'react-icons/fa';
// import NavBar from './NavBar';
import { Link } from "react-router-dom";
import './Footer.css'


function Footer() {
  return (
    <>
    <div className='footer container' style={{backgrouondImage:`url('../assets/bg.jpg')`}}>
        <div className='footer-sec-1'>
            <img src={logo} alt="" className='logo logofooter'/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, doloribus!</p>
            <div className='footer-sec-1-inner'>
                <BsClockHistory className='clock' />
                <div className='dtext'>
                    <h1 className='dtext-head'>Monday - Friday</h1>
                    <p className='dtext-text'>7:00Am - 10:00Pm</p>
                </div>
                <div className='dtext'>
                    <h1 className='dtext-head'>Saturday - Sunday</h1>
                    <p className='dtext-text'>7:00Am - 2:00Pm</p>
                </div>
            </div>
        </div>
        <div className='footer-sec-2'>
            <h1 className='footer-sec-2-head'>Our Links</h1>
            <div className='navsfooter' >
                <Link to='/' className='navlink navlinkd'>Home</Link>
                <Link to='/about' className='navlink navlinkd'>About Us</Link>
                <Link to='/classes' className='navlink navlinkd'>Classes</Link>
                <Link to='/pages' className='navlink navlinkd'>Pages</Link>
                <Link to='/blog' className='navlink navlinkd'>Blog</Link>
                <Link to='/contact' className='navlink navlinkd'>Contact Us</Link>
            </div>
        </div>
        <div className='footer-sec-3'>
            <h1 className='footer-sec-2-head'>Contact Us</h1>
            <div className='footercontact'>
                <div className='icon-text-down'>
                    <div ><RiMapPin2Fill className='icdown' /></div>
                    1247/Plot No. 39, 15th Phase, <br/>Colony, Kukatpally, Hyderabad
                </div>
                <div className='icon-text-down'>
                    <div ><BsFillTelephoneOutboundFill className='icdown'/></div>
                    1800-121-3637<br/>+91 555 234-8765
                </div>
                <div className='icon-text-down'>
                    <div><HiMail className='icdown'/></div>
                    info@gmail.com<br/>services@gmail.com
                </div>
            </div>
        </div>
        <div className='footer-sec-4'>
            <h1 className='footer-sec-2-head'>Our Newsletter</h1>
            <div className='footernews'>
                <input type="text" className='footer-searchbar ' placeholder='Email Address'/>
                <div className='icsocial'>
                    <BsFacebook className='icitself' />
                    <FaInstagram  className='icitself'/>
                    <BsTwitter className='icitself' />
                </div>
            </div>
        </div>
    </div>
    <div className='below-footer container'>
        <p>Copyright &copy; 2022 <span style={{color:'var(--red)'}}>DReactPractice</span> All rights reserved.🙌😎</p>
        <div className='below-footer-list'>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer;