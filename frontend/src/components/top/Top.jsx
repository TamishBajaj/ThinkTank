import React from 'react'
import './Top.css'
import imgg from '../../assets/top-1.jpg'


const Top = () => {
  return (
    <section className="hero-section">


    <div className="container">
    
      <div className="hero-content">
      
        <div className="hero-text">
       
          <h1 className="hero-heading">Unleash Your Team's Potential</h1>
          <p className="hero-description">
            Take your team to new heights with our platform for organizing and participating in online team events. 
            Collaborate, innovate, and showcase your skills in a dynamic and supportive community.
          </p>
          <button className="cta-button">Start Exploring</button>
          
        </div>
        <div className="hero-image">
          <img src={imgg} alt="Teamwork Illustration" />
        </div>
      </div>
      
    </div>
  </section>
  )
}

export default Top