import React from 'react'
import './Workings.css'



import work1 from '../../assets/webflow1.gif'
import work2 from '../../assets/webflow2.gif'
import work3 from '../../assets/webthree-3.gif'
import work4 from '../../assets/search.gif'
import work5 from '../../assets/rocket.gif'
import work6 from '../../assets/webthree-2.gif'
import arw from '../../assets/arrowr.gif'
import arwd from '../../assets/arrowd.gif'
import arwl from '../../assets/arrowl.gif'

const Workings = () => {
  return (
    <div className='working_main'>
        <div className='working_head'>
            <h1>How We Work</h1>
            <h3>It has always been a structured way</h3>

        </div>

        <div className='workflow_cards'>
            <div className='workflow_row'>
                <div className='workflow_plus'>
                    <img src={work1} className='workflow_img' alt=''/>
                    <h3>Requirement Analysis</h3>

                </div>

                <div className='workflow_minus'>
                    <img src={arw} alt='' className='worflow_arrow'/>
                </div>
                <div className='workflow_plus'>
                    <img src={work2} className='workflow_img' alt=''/>
                    <h3>Design</h3>

                </div>

                

                <div className='workflow_minus'>
                    <img src={arw} alt='' className='worflow_arrow'/>
                </div>

                <div className='workflow_plus'>
                <img src={work3} className='workflow_img' alt=''/>
                    <h3>Development</h3>
                    <img src={arwd} className='down_arrow' alt=''/>
                </div>

            </div>



            <div className='workflow_row'>
                <div className='workflow_plus'>
                    <img src={work6} className='workflow_img' alt=''/>
                    <h3>Maintainance</h3>

                </div>

                <div className='workflow_minus'>
                    <img src={arwl} alt='' className='worflow_arrow'/>
                </div>
                <div className='workflow_plus'>
                    <img src={work5} className='workflow_img' alt=''/>
                    <h3>Launch</h3>

                </div>

                

                <div className='workflow_minus'>
                    <img src={arwl} alt='' className='worflow_arrow'/>
                </div>

                <div className='workflow_plus'>
                <img src={work4} className='workflow_img' alt=''/>
                    <h3>Testing</h3>
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default Workings