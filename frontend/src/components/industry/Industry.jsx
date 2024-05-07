import React from 'react'
import './Industry.css'

import im1 from '../../assets/industry1.gif'
import im2 from '../../assets/industry2.gif'
import im3 from '../../assets/industry3.gif'
import im4 from '../../assets/industry4.gif'
import im5 from '../../assets/industry5.gif'
import im6 from '../../assets/industry6.gif'
import im7 from '../../assets/industry7.gif'
import im8 from '../../assets/industry8.gif'

const Industry = () => {
  return (
    <div className='industry'>
      <div className='contnt'>
      <h1>You need it, we've got it</h1>
      <h3>We assist our Customers In any phase of Development</h3>
      </div>
      

      <div className='total_cards'>
        <div className='card_roww'>
          <div className='card_detail'>
              <img src={im1} alt='' className='industry_img'/>
              <h4>Healthcare</h4>
          </div>

          <div className='card_detail'>
          <img src={im2} alt='' className='industry_img'/>
              <h4>Automative</h4>
          </div>

          <div className='card_detail'>
          <img src={im3} alt='' className='industry_img'/>
              <h4>Education</h4>
          </div>

          <div className='card_detail'>
          <img src={im4}alt='' className='industry_img'/>
              <h4>Realestate</h4>
          </div>

        </div>

        <div className='card_roww'>

        <div className='card_detail'>

        <img src={im5} alt='' className='industry_img' />
              <h4>Travel and Tourism</h4>
        </div>


        <div className='card_detail'>
        <img src={im6} alt='' className='industry_img'/>
              <h4>Hospitality</h4>

        </div>

        <div className='card_detail'>

        <img src={im7} alt='' className='industry_img'/>
              <h4>Transport & Logistics</h4>

        </div>

        <div className='card_detail'>

        <img src={im8} alt='' className='industry_img'/>
              <h4>Games</h4>

        </div>

          </div>

          

      </div>

    </div>
  )
}

export default Industry