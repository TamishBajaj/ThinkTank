import React from 'react'
import './Mobile.css'


const Mobile = () => {

  const handleButtonClick = () => {
    // Find the target section by its class name
    const webtwoSection = document.querySelector('.mobile_cards');
    // Scroll to the target section
    if (webtwoSection) {
      webtwoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='mobile_main'>
        <div className='inner'>
            
            <button className='explore_btn' onClick={handleButtonClick}>Need a Mobile App?</button>
        </div>
    </div>
  )
}

export default Mobile