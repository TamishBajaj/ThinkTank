import React from 'react'
import './Webthree.css'

import web1 from '../../assets/webthree-1.gif'
import web2 from '../../assets/webthree-2.gif'
import web3 from '../../assets/webthree-3.gif'
import web4 from '../../assets/webthree-4.gif'
import arrow from '../../assets/arrow1.gif'
import search from '../../assets/search.gif'
import target from '../../assets/target.gif'



const Webthree = () => {
  return (
    <div className='Service_contain'>
        <h1>Websites For Startup</h1>
        <h3>What Special Services Do we provide</h3>
        <div className='service_card'>
            <div className='cards_row'>
                <div className='one_card'>
                    <img src={web1} alt='' className='service_icon'/>
                    <h3>Responsive Web Designs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
                    
                </div>

                <div className='one_card'>
                    <img src={web2} alt=''  className='service_icon'/>
                    <h3>Brand Visibilty</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
                </div>

                <div className='one_card'>
                   <img src={web3} alt='' className='service_icon'/>
                    <h3>Modern UI's</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
                </div>

            </div>
            
            <div className='cards_row'>

            <div className='one_card'>
                   <img src={web4} alt='' className='service_icon'/>
                    <h3>Technical Support</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
            </div>
            <div className='one_card'>
                    <img src={search} alt=''  className='service_icon'/>
                    <h3>Domain and Hosting</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
            </div>
            <div className='one_card'>
                    <img src={target} alt=''  className='service_icon'/>
                    <h3>SEO Friendly</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Webthree