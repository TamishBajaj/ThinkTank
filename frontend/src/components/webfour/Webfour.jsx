import React from 'react'
import './Webfour.css'
import imj from '../../assets/webthree_im2.jpg'
import tick from '../../assets/verified.gif'

import webp from '../../assets/webapp.svg'

const Webfour = () => {
  return (
    <div className='webfour_cont'>
        

        <div className='webtwo_details'>

            <h1>Affordable and Effective Web Services</h1>
            <p><img src={tick} alt='' className='tickk'/>Modern Design</p>
            <p><img src={tick} alt='' className='tickk'/>Domain</p>
            <p><img src={tick} alt='' className='tickk'/>Hosting</p>
            <p><img src={tick} alt='' className='tickk'/>User Friendly CMS</p>
            <p><img src={tick} alt='' className='tickk'/>Mobile Optimised</p>
            <p><img src={tick} alt='' className='tickk'/>New Email setup</p>

        </div>

        <div className='wetwo_imgs'>
            <img src={webp} alt='' className='web_imgss'/>
            
     </div>

    </div>
  )
}

export default Webfour