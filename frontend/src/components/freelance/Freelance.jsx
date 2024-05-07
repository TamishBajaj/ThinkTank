import React from 'react'
import './Freelance.css'

import free from '../../assets/freelance.jpg'

import { TiTickOutline } from "react-icons/ti";

const Freelance = () => {
  return (
    <div className='freee'>
        <h2 className='main_head'>The best part? Everything.</h2>
        <h5 className='main_p'>Us vs The Competitors</h5>
    
    <div className='freelance'>
        
        
        <div className='freelance_main'>
            
        

            <div className='freelance_option'>
                <div className='freelance_detail'> 
                <TiTickOutline className='freelance_arrow'/>
                    <h3>Stick to your budget</h3>
                </div>
                <div>
                    <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                </div>


                <div className='freelance_detail'>
                <TiTickOutline className='freelance_arrow'/>
                    <h3>Get quality work done quickly</h3>
                </div>
                <div>
                    <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                </div>


                <div className='freelance_detail'>
                <TiTickOutline className='freelance_arrow'/>
                    <h3>Pay when you're happy</h3>
                </div>
                <div>
                    <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                </div>


                <div className='freelance_detail'>
                <TiTickOutline className='freelance_arrow'/>
                    <h3>Count on 24/7 support</h3>
                </div>
                <div>
                    <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                </div>
            </div>
            
        </div>

        <div className='img_contai'>
            <img src={free} alt='' className='freelance_img'/>
        </div>

    </div>
    </div>
  )
}

export default Freelance