import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import './Loader.css'

function Loader() {
  return (
    <div className='loader-container'>
        <div className='loader-inner'><AiOutlineLoading3Quarters className='icon-loader' /></div>
    </div>
  )
}

export default Loader