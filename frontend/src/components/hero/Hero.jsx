import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

const Hero = () => {

  const handleButtonClick = () => {
    // Find the target section by its class name
    const webtwoSection = document.querySelector('.Servicess_contain');
    // Scroll to the target section
    if (webtwoSection) {
      webtwoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='hero' id='hero'>
        <div className='hero-text'>
            <h1>The Place Where Innovation Meets Challanges</h1>
            <p>Our-cutting Edge ciriculum is designed to empower students with the knowledge ,skills,and expereinces needed to excel in the dynamic feild of education</p>
            <button className='hero__button' onClick={handleButtonClick}>Explore More<img src={darkArrow}></img></button>

        </div>

    </div>
  )
}

export default Hero