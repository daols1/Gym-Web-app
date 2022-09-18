import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
// import { FaBeer, FaHiMenuAlt3 } from 'react-icons/io';
// import { IoMdMenu } from "react-icons/io";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import './NavBar.css'

function NavBar() {

  // const drop = { display : 'flex'};

  const [nav, setNav] = useState(true)

  const iconHandler = () => {
    setNav(!nav)
  }
  
  const style = nav ? {display:'none'} : {display:'flex'}
  
  
  const mql = window.matchMedia('(max-width: 600px)');



  return (
    <>
    <div className='nav-container'>
        <nav>
            <Link to='/' className=''><div><img src={logo} alt="" className='logo'/></div></Link>
            <div className='navs' >
                <Link to='/' className='navlink'>Home</Link>
                <Link to='/about' className='navlink'>About Us</Link>
                <Link to='/classes' className='navlink'>Classes</Link>
                <Link to='/pages' className='navlink'>Pages</Link>
                <Link to='/blog' className='navlink'>Blog</Link>
                <Link to='/contact' className='navlink'>Contact Us</Link>
            </div>
            { mql && 
            <div className='navs' style={style} >
            <Link to='/' className='navlink'>Home</Link>
            <Link to='/about' className='navlink'>About Us</Link>
            <Link to='/classes' className='navlink'>Classes</Link>
            <Link to='/pages' className='navlink'>Pages</Link>
            <Link to='/blog' className='navlink'>Blog</Link>
            <Link to='/contact' className='navlink'>Contact Us</Link>
        </div>
            
            }
        </nav> 
      <button className='joinbtn btn'>Join now</button>
      {/* <div className='hamburger'><HiMenuAlt3 className='icontop' /></div> */}
      <div className='hamburger'>{nav ? 

      <HiMenuAlt3 className='icontop' onClick={iconHandler} /> 
      : 
      <HiOutlineX className='icontop' onClick={iconHandler} />} 
      
      </div>
    </div>
    </>
  )
}

export default NavBar;