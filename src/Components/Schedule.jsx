import React from 'react';
import './Schedule.css'

function Schedule() {
  return (
    <div className='container schedule'>
        <h1 className='abttxthead ourschedule'>Our Schedlue</h1>
        <h1 className='maintxtschedule'>Check Our Classes Schedule</h1>
        <div className='table'>
            <table>
                <thead>
                    <tr className='tableheader'>
                        <td>Icon soppos de here</td>
                        <td>Monday</td>
                        <td>Tuesday</td>
                        <td>Wednesday</td>
                        <td>Thursday</td>
                        <td>Friday</td>
                        <td>Saturday</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className='row'>
                        <td className='colored'>8:00 Am</td>
                        <td>Weight LiftingDesert Antony</td>
                        <td>Aerobics Manny Johnes</td>
                        <td></td>
                        <td>Power Yoga Zahra Sharif</td>
                        <td>Cardio Kate Johnson</td>
                        <td>Boxing John Hard</td>
                    </tr>
                    <tr className='row'>
                        <td className='colored'>10:00 Am</td>
                        <td>Cardio Kate Johnson</td>
                        <td>Power YogaZahra Sharif</td>
                        <td>Weight Lifting Desert Antony</td>
                        <td></td>
                        <td>Aerobics Manny Johnes</td>
                        <td>Power Yoga Zahra Sharif</td>
                    </tr>
                    <tr className='row'>
                        <td className='colored'>12:00 Pm</td>
                        <td>Boxing John Hard</td>
                        <td></td>
                        <td>Cardio Kate Johnson</td>
                        <td>Aerobics Manny Johnes</td>
                        <td>Weight Lifting Desert Antony</td>
                        <td>Cardio Kate Johnson</td>
                    </tr>
                    <tr className='row'>
                        <td className='colored'>5:00 Pm</td>
                        <td>Power Yoga Zahra Sharif</td>
                        <td>Weight Lifting Desert Antony</td>
                        <td>Zumba Dance Zahra Sharif</td>
                        <td>Boxing John Hard</td>
                        <td></td>
                        <td>Aerobics Manny Johnes</td>
                    </tr>
                    <tr className='row'>
                        <td className='colored'>8:00 Pm</td>
                        <td>Zumba Dance Steven Hill</td>
                        <td>Boxing John Hard</td>
                        <td>Power Yoga Zahra Sharif</td>
                        <td>Weight Lifting Desert Antony</td>
                        <td>Boxing John Hard</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Schedule