import React from 'react'
import './Contract.css'

import imk1 from '../../assets/contract1.gif'
import imk2 from '../../assets/contract2.gif'
import imk3 from '../../assets/contract3.gif'

const Contract = () => {
  return (
    <div className='contract'>
        <div className='headingss'>
            <h1>How to get Your Work Done?</h1>
            <h3>Fexible Working Model To meet your specific needs</h3>
        </div>

        <div className='actions'>
            <div className='details_action'>
                <div className='headi'>
                    <img src={imk1} alt='' className='contract_img'/>
                    <h3>Freelancing Model</h3>

                </div>
                
                <p>When the buget is fixed and cannot be negotiated due to diversification of resources in various departments. Where the focus is to grow the brand in an organised manner the Freelancer is the best Suited</p>
                
            </div>

            

            <div className='details_action'>
                <div className='headi'>
                    <img src={imk2} alt='' className='contract_img'/>
                    <h3>Hiring Model</h3>

                </div>
                
                <p>When the vision is long term and company needs a stable tech person onboared to cater to the needs of all technical requirement. When budget is not a constraint and you want to build a stable version of your software Hiring model is the best suited</p>
                
            </div>

            

            <div className='details_action'>
                <div className='headi'>
                    <img src={imk3} alt='' className='contract_img'/>
                    <h3>Contract Based Model</h3>

                </div>
                
                <p>When the aim to get the work done completely from start to end with a limited budget. Contract based model is best suited for you if you want us to take care of your software, maintain it improve it according to your needs. We also provide our customer with special analytic tool with this.</p>

            </div>


        </div>

    </div>
  )
}

export default Contract