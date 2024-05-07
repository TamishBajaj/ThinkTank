import React from 'react'
import './Overview.css'
import img1 from '../../assets/backend.png'
import img2 from '../../assets/creator.png'
import img3 from '../../assets/web.png'
import img4 from '../../assets/mobile.png'

function Overview() {
  return (
    <section>
        <div className='overview__content' id='overview'>
        {/* <h3>Introduction</h3> */}
        <h1 className='heading'>Overview</h1>
        <p className='para'>Hi I am Tamish Bajaj a CSE undergrad at<span className='highlight__item'> Indian Institute Of Information and Technology(IIIT), Sonepat</span>. I am currently in my 3rd Year. I have a good hold on <span className='highlight__item'>Full Stack technology</span> and <span className='highlight__item'>Product Management Field</span>. I also have worked as <span className='highlight__item'>buisness development</span> intern. The combination of all the diverse skills makes a perfect fit for all those competitive roles. I am always open for discusion regarding any role.</p>

        </div>
        
        <div className='main__block'>
            <div className='upper__block'>
                <div className='block'>
                    <img src={img1} className='icon'/>
                    <h3>Web Developer</h3>
                </div>
                <div className='block'>
                <img src={img2} className='icon' />
                    <h3>Product Manager</h3>
                </div>
            </div>
            <div className='lower__block'> 
                <div className='block'>
                <img src={img3} className='icon'/>
                    <h3 >Backend Developer</h3>
                </div>
                <div className='block'>
                <img src={img4} className='icon' />
                    <h3>Buisness Strategy</h3>
                </div>

            </div>
        </div>

    </section>
  )
}

export default Overview