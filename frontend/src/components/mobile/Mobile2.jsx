import React from 'react'
import './Mobile2.css'

import arrow from '../../assets/arrow1.gif'

import mb1 from '../../assets/rocket.gif'
import mb2 from '../../assets/mb2.gif'
import mb3 from '../../assets/mb3.gif'
import mb4 from '../../assets/mb4.gif'
import mb5 from '../../assets/mb5.gif'
import mb6 from '../../assets/mb6.gif'

const Mobile2 = () => {
  return (
    <div className='mobile_cards'>

        <div className='mobile_heads'>
        <h1>Mobile App Development</h1>
        <h3>We build future not Apps</h3>
        </div>

        

        <div className='mobile_detcards'>
          <div className='mobile_row'>

            <div className='mobile_carddetail'>

                   <img src={mb2} alt='' className='service_icon'/>
                    <h3>Android Applications</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>

            </div>

            <div className='mobile_carddetail'>

                   <img src={mb3} alt='' className='service_icon'/>
                    <h3>iOS Applicatins</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>

            </div>

            <div className='mobile_carddetail'>

                    <img src={mb4} alt='' className='service_icon'/>
                    <h3>Cross Platform Applications</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>

            </div>


          </div>

          <div className='mobile_row'>

            <div className='mobile_carddetail'>
                   <img src={mb5} alt='' className='service_icon'/>
                    <h3>Progresive Web apps</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>

            </div>

            <div className='mobile_carddetail'>

                   <img src={mb1} alt='' className='service_icon'/>
                    <h3>App for Startups</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>

            </div>

            <div className='mobile_carddetail'>

                   <img src={mb6} alt='' className='service_icon'/>
                    <h3>3d Unity Game Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>

            </div>

          </div>

        </div>

    </div>
  )
}

export default Mobile2