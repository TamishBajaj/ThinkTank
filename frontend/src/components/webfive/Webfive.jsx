import React from 'react'
import './Webfive.css'
import prj1 from '../../assets/proj1.jpg'


const Webfive = () => {
  return (
    <div className='web mobile_proj'>

    <div className='proj_headi'>
        <h1>Top Web Projects</h1>
        <h3>Beautiy lies here</h3>

    </div>

    <div className='mobile_toproj'>
        <div className='first_left'>
            <h3>Title:-</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugit dolorum corrupti ipsam dignissimos architecto necessitatibus quaerat! Quasi dicta at placeat illum? Earum debitis quibusdam sit ad at ullam voluptatum.</p>
            
            <div className='proj_buttons'>
                <button className='bute demo_btn'><a href=''>Demo</a></button>
                <button className='bute git_btn'><a href=''>Github Link</a></button>
            </div>
            

        </div>

        <div className='first_right'>
            <img src={prj1} alt='' className='proj_imgss'/>

        </div>

    </div>

    <div className='mobile_toproj'>

    <div className='first_right'>
            <img src={prj1} alt='' className='proj_imgss'/>

        </div>
        
        <div className='first_left'>
            <h3>Title:-</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugit dolorum corrupti ipsam dignissimos architecto necessitatibus quaerat! Quasi dicta at placeat illum? Earum debitis quibusdam sit ad at ullam voluptatum.</p>
            
            <div className='proj_buttons'>
                <button className='bute demo_btn'><a href=''>Demo</a></button>
                <button className='bute git_btn'><a href=''>Github Link</a></button>
            </div>
            

        </div>

        

    </div>

    <div className='mobile_toproj'>
        <div className='first_left'>
            <h3>Title:-</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa fugit dolorum corrupti ipsam dignissimos architecto necessitatibus quaerat! Quasi dicta at placeat illum? Earum debitis quibusdam sit ad at ullam voluptatum.</p>
            
            <div className='proj_buttons'>
                <button className='bute demo_btn'><a href=''>Demo</a></button>
                <button className='bute git_btn'><a href=''>Github Link</a></button>
            </div>
            

        </div>

        <div className='first_right'>
            <img src={prj1} alt='' className='proj_imgss'/>

        </div>

    </div>


</div>
  )
}

export default Webfive