import React from 'react'
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function SharedLayout() {
  return (
    <>
        <NavBar className='navbarshared'/>
          <Outlet />
        <Footer />
    </>
  )
}

export default SharedLayout