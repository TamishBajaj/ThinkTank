import React from 'react'
import './Services.css'
import { FaCheck } from "react-icons/fa";

const Services  = () => {
  return (
  <section id='services'>

    <h5>What I Offer?</h5>
    <h2>Services</h2>

    <div className="container service__container">

      <article className="service"> 
      <div className="service__head">
        <h3>UI/UX Design</h3>
      </div>
      <ul className='service__list'>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>


        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>
      </ul>
      </article>

      {/* end of UI/UX */}

      <article className="service"> 
      <div className="service__head">
        <h3>Web development</h3>
      </div>
      <ul className='service__list'>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>


        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>
      </ul>
      </article>
{/* 
      End of web dev */}

      <article className="service"> 
      <div className="service__head">
        <h3>Product Management</h3>
      </div>
      <ul className='service__list'>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>


        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>

        <li>
          <FaCheck  className='service__list-icon'/>
          <p>I am a UX designer delivered a lot of projects</p>
        </li>
      </ul>
      </article>
    </div>

    </section>
  )
}

export default Services 