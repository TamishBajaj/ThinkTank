import React from 'react'
import './Working.css'


const Working = () => {
  return (
    <section className="how-it-works-section">
      
      <div className="container">
        
        <div className="section-header">
          <h2>How It Works</h2>
          <hr className="line" />
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Step 1: Browse Events</h3>
            <p>Explore a wide range of exciting events hosted by organizers from various industries.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-user-plus"></i>
            </div>
            <h3>Step 2: Register Your Team</h3>
            <p>Register your team and get ready to participate in your chosen event.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Step 3: Solve Challenges</h3>
            <p>Work together with your team to solve the challenges presented in the event.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fas fa-upload"></i>
            </div>
            <h3>Step 4: Submit Your Solution</h3>
            <p>Submit your solution within the given timeframe and showcase your creativity and skills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Working