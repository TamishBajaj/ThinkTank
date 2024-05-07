import React from 'react'
import './About.css'


const About = () => {
  return (
    <section className="about-us-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h2>About Us</h2>
            <p>Welcome to our innovative platform where creativity meets collaboration.</p>
          </div>
          <p className="about-description">
            We are a team of passionate individuals dedicated to fostering innovation and creativity in the tech community.
            Our mission is to provide a platform where teams can come together, solve challenges, and showcase their
            skills to the world. Whether you're a student eager to learn, a company seeking fresh talent, or a
            professional looking to expand your network, we have something for everyone.
          </p>
          <p className="about-description">
            Our values of inclusivity, creativity, and collaboration drive everything we do. We believe in the power of
            teamwork, diversity, and continuous learning to drive positive change and make a real impact in the world.
          </p>
        </div>
        <div className="col-lg-6">
          <div className="about-image">
           
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About