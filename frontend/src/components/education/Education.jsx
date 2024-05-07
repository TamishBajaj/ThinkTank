import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section className='education' id='education'>
        <h2 className='heading'>MY EDUCATION</h2>
        <hr className='line'></hr>

        <div className='timeline-items'>
            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                   
                    <div className='timeline-content'>
                    <h3 className='date'>2018</h3>
                        <h3>Primary School (class 10th)</h3>
                        <p>SD Vidya School, Ambala Cantt </p>
                        <p>(91%)</p>

                    </div>
                
            </div>

            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    
                    <div className='timeline-content'>
                    <h3 className='date'>2018-2020</h3>
                        <h3>Secondary School (class 12th)</h3>
                        <p>Murlidhar DAV Ambala City</p>
                        <p>(91%)</p>
                        
                    </div>
                
            </div>

            <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    
                    <div className='timeline-content'>
                    <h3 className='date'>2021-2025</h3>
                        <h3>Graduation (Ongoing)</h3>
                        <p>Indian Institute Of Information and Technology(IIIT), Sonepat</p>
                        <p> (CGPA:- 8.4) </p>
                        
                    </div>
                
            </div>


            {/* <div className='timeline-item'>
                <div className='timeline-dot'></div>
                    
                    <div className='timeline-content'>
                    <h3 className='date__timeline'>2024</h3>
                        <h3>Job 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, autem? Maxime consectetur dolorum cupiditate deleniti sint, dicta placeat sequi nam.</p>
                        
                    </div>
                
            </div> */}

            
        </div>

    </section>
  )
}

export default Education
