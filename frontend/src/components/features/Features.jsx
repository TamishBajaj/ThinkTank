import React from 'react'
import './Features.css'

import team from '../../assets/program-icon-1.png'
import curve from '../../assets/program-icon-2.png'
import talent from '../../assets/program-icon-3.png'

const Features = () => {
  return (
    <section className="features-section">
    <div className="container">
      <h2 className="section-heading">Why Choose Us?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">
            <img src={team} alt="Feature Icon 1" />
          </div>
          <h3 className="feature-title">Empower Your Team</h3>
          <p className="feature-description">
            Unlock the full potential of your team with our collaborative platform, fostering innovation and creativity
            through seamless communication and teamwork.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src={curve} alt="Feature Icon 2" />
          </div>
          <h3 className="feature-title">Stay Ahead of the Curve</h3>
          <p className="feature-description">
            Engage in cutting-edge challenges and hackathons designed to push boundaries, expand skill sets, and
            accelerate growth.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <img src={talent} alt="Feature Icon 3" />
          </div>
          <h3 className="feature-title">Showcase Your Talent</h3>
          <p className="feature-description">
            Elevate your team's profile and demonstrate your expertise to a global audience through project submissions
            and live presentations.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Features