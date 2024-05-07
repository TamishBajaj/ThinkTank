import React from 'react'
import './Webone.css'



const Webone = () => {

  const handleButtonClick = () => {
    // Find the target section by its class name
    const webtwoSection = document.querySelector('.Service_contain');
    // Scroll to the target section
    if (webtwoSection) {
      webtwoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='web_container'>
        <div className='inner'>
            
            <button className='explore_btn' onClick={handleButtonClick}>Need a Website?</button>
        </div>
    </div>
  )
}

export default Webone