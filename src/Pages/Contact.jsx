import React from 'react'
import ContactHero from '../Components/ContactHero'
import {BiMailSend} from 'react-icons/bi'
import './Contact.css'


function Contact() {
  return (
    <>
    <ContactHero />
    <div className='form-sec container contact-us-form'>
      <div className='form-sec-txt'>
        <h1 className='abttxthead pricing-head-txt'>CONTACT US</h1>
        <h1 className='abtmaintxt main-pricing black'>Get In Touch</h1>
        <p className='greyed-txt black'>Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.<br/>Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.</p>
      </div>
      <div className='form-sec-form'>
        <h1 className='abtmaintxt main-pricing'>Get Appointment</h1>
        <form action="" className='form'>
          <input type="text" placeholder='Full name' className='form-side-input' />
          <input type="Email" placeholder='Email Address' className='form-side-input' />
          <input type="number" placeholder='Phone Number' className='form-side-input' />
          <textarea name="message..." id="" cols="30" rows="10" className='form-side-input'></textarea>
          <button className='joinbtn submit'>Submit</button>
        </form>
      </div>
    </div>
    </>
    
  )
}

export default Contact