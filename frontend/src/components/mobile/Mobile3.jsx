import React from 'react'
import './Mobile3.css'

import det1 from '../../assets/det1.png'
import det2 from '../../assets/det2.png'

const Mobile3 = () => {
  return (
   <div className='mob_details_main'>

      <div className="det_head">
            <h1>Still Not Convinced with whats in it for You</h1>
            <p>We do exacty what you need for your startup to grow faster. Its a structured process we follow for ultimate sucess</p>
      </div>

      <div className='det_card_mob'>
            <div className='det_card'>
                <img src={det1} alt='' className='det_icn'/>

                <div className='det_det'>
                    <h3>Minimum viable product</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quos voluptatibus. Ad atque reiciendis libero tenetur quidem dicta iure numquam?</p>
                </div>

            </div>

            <div className='det_card'>

            <img src={det2} alt='' className='det_icn'/>

                <div className='det_det'>
                    <h3>Deveopment in small parts</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatem totam quo reiciendis iusto fugiat necessitatibus eum repellendus cupiditate architecto!</p>
                </div>

            </div>
      </div>

   </div>
  )
}

export default Mobile3