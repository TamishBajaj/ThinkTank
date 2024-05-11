import React, { useEffect } from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';
import building from '../../assets/building.gif'
import rocket from '../../assets/rocket.gif'
import search from '../../assets/search.gif'
import shopping from '../../assets/shopping.gif'
import strategy from '../../assets/strategy.gif'
import target from '../../assets/target.gif'
import arrow from '../../assets/right-arrow.gif'

const Service = () => {

    const navigate = useNavigate();

    const webProj = () => {
        navigate('/webdev');
      };

      const appProj = () => {
        navigate('/mobiledev');
      };

      useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='Servicess_contain'>
        <h1>Our Specialized Services</h1>
        <h3>We Render All your Digital Needs</h3>

        <div className='domain_buttons'>
            <button className='butins web_button' onClick={webProj}>Web Development</button>
            <button className='butins mobile_button' onClick={appProj}>Mobile Applications</button>
            <button className='butins buisness_button'>Buisness Growth</button>
            <button className='butins digital_button'>Digital Marketing</button>
        </div>

        <div className='servicess_cardss'>
            <div className='cardse_row'>
                <div className='onee_card'>
                    <img src={rocket} alt='' className='service_icon'/>
                    <h3>Web for Early-Stage Startups</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
                    
                </div>

                <div className='one_card'>
                    <img src={strategy} alt=''  className='service_icon'/>
                    <h3>Growth Strategiest</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
                </div>

                <div className='one_card'>
                   <img src={building} alt='' className='service_icon'/>
                    <h3>Marketing for Enterprises</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
                </div>

            </div>
            
            <div className='cardse_row'>

            <div className='onee_card'>
                   <img src={shopping} alt='' className='service_icon'/>
                    <h3>Mobile Applications</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
            </div>
            <div className='onee_card'>
                    <img src={search} alt=''  className='service_icon'/>
                    <h3>Brand Visibilty</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
            </div>
            <div className='onee_card'>
                    <img src={target} alt=''  className='service_icon'/>
                    <h3>Website Revamp</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, praesentium atque. Voluptatibus soluta aliquam consequuntur in cum expedita impedit eveniet.</p>
                    <button><img src={arrow} alt='' className='icon_button'/></button>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Service