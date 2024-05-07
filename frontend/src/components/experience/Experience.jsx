import React from 'react'
import './Experience.css'
import { HiCheckBadge } from "react-icons/hi2";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">

      <div className="experience__frontend">
        <h3>Frontend  Development</h3>

        <div className="experience__content">
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
            <div>
            
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
            </div>
          
          

          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
            
          <h4>CSS</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
            
          <h4>Javascript</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
           
          <h4>TailwindCSS</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
            
          <h4>ReactJS</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
           
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
        </div>

      </div>

      <div className="experience__backend">
      <h3>Backend Development</h3>

      <div className="experience__content">
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
            
          <h4>Node JS</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
            
          <h4>Express JS</h4>
          <small className='text-light'>Experienced</small>
            </div>
          
          </article>
          <article className='experience__details'>
          <HiCheckBadge className='experience__detail-icon'/>
          <div>
            
          <h4>MongoDB</h4>
          <small className='text-light'>Experienced</small>
            </div>
          

          </article>
          
        </div>
        
        </div>

      </div>

    </section>
  )
}

export default Experience