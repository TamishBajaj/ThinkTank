import React from 'react'
import './Webtwo.css'
import webim from '../../assets/webone_img.jpg'

const Webtwo = () => {
  return (
    <div className='webtwo_cont'>
        <div className='wetwo_img'>
            <img src={webim} alt='' className='web_imgs'/>
            
     </div>

        <div className='webtwo_detail'>

            <h1>We Help to build your Startup Online</h1>
            <p>We aim at building high end Web Apps for Startups and buisness which can help them increase there online presence and help them scale there buisness. We are determined to provide top notch quality of software at the lowest prices comparable to any other competitior</p>
            <button className='webi_btn'>Lets Make Your Website</button>

        </div>

    </div>
  )
}

export default Webtwo