import React from 'react'
import './FormSec.css'

function FormSec() {
  return (
    <div className='form-sec container'>
      <div className='form-sec-txt'>
        <h1 className='abttxthead pricing-head-txt'>OUR STATICS</h1>
        <h1 className='abtmaintxt main-pricing'>We Are Best In Our Classes</h1>
        <p className='greyed-txt'>Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.<br/>Integer placerat vitae metus posuere tincidunt. Nullam suscipit ante ac aliquet viverra vestibulum ante ipsum primis.</p>
        <div className='barandname brandname-new'>
          <div className='barandnameinner'>
            <h4>Client Satisfaction</h4>
            <h4>90%</h4>
          </div>
            <div className='bar bar-new'></div>
        </div>
        <div className='barandname brandname-new'>
          <div className='barandnameinner'>
            <h4>Support Customer</h4>
            <h4>70%</h4>
          </div>
            <div className='bar'></div>
        </div>
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
  )
}

export default FormSec