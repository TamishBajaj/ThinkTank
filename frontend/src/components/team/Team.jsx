import React from 'react'
import './Team.css'

import teamim from '../../assets/teamim.png'

const Team = () => {
  return (
    <div className='team_cont'>
        <div className='team_heads'>
            <h1>Meet Our Team</h1>
            {/* <h3>People Behing the sucess of idea</h3> */}

        </div>

        <div className='team_main'>
            <div className='team_image'>
                <img src={teamim} className='img_team' alt=''/>
            </div>

            <div className='team_details'>
                <h1>About ThinkTank</h1>
                <h3>Effeciency and Effectiveness is the key</h3>

                <p>At ThinkTank we are members from diverse background, different age groups but aligned on a common goal. If there is something we can call our family are these memebers who have always been the backbone of this idea. Our USP is to provide solution at the lowest price compared to our competitors.</p>
                <button className='team_btn'>Meet Our Developers</button>
            </div>

        </div>

    </div>
  )
}

export default Team