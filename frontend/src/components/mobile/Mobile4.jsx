import React from 'react'
import './Mobile4.css'
import mb11 from '../../assets/mb11.svg'

const Mobile4 = () => {
  return (
    <div className='mobileval_main'>
        <div className='values_mob'>
            <div className='dt det1'>
                <h2>5+</h2>
                <h3>Years of Experience</h3>

            </div>

            <div className='dt det2'>
                <h2>40+</h2>
                <h3>Certified Experts</h3>

            </div>

            <div className='dt det3'>
                <h2>100%</h2>
                <h3>Satisfaction</h3>

            </div>

            <div className='dt det4'>
                <h2>3000+</h2>
                <h3>Clients</h3>

            </div>


        </div>

        <div className='mob_info'>

            <div className='info_left'>
                <h3>One Stop Solution for All</h3>
                <h1>Progressive App Development</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed unde. Quis, odit ad harum illo a nobis, at, exercitationem error vitae sit ut facere impedit fuga! Pariatur vero ipsam, iste odio praesentium laboriosam eveniet iusto assumenda reiciendis eius, ut debitis, quod quam. Repellendus repudiandae quidem, aperiam enim porro aut. Consequuntur aliquid maxime libero maiores modi laboriosam rem quod sequi!</p>
                <button className='work_btn'>Get Your work Done</button>

            </div>

            <div className='info_right'>
                <img src={mb11} alt='' className='info_img'/>

            </div>

        </div>

    </div>
  )
}

export default Mobile4