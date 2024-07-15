import Hero from "../components/hero/Hero";
// import Top from "../components/top/Top";
import Features from "../components/features/Features";

// import Working from "../components/working/Working";
// import Middle from "../components/middle/Middle";
import Cards from "../components/cards/Cards";
import Projects from "../components/projects/Projects";
import Service from "../components/specialservice/Service";

import Industry from "../components/industry/Industry";
import Freelance from "../components/freelance/Freelance";
import Contract from "../components/contract/Contract";
import Workings from "../components/workings/Workings";
// import Team from "../components/team/Team";


import React from 'react'

const home = () => {
  return (
    <div>
        <Hero />
        
        <Service />
        <Freelance />
        <Contract />

        
        <Cards />
        
        
        <Workings />
        {/* <Projects /> */}
{/*         <Team /> */}

        <Industry />
        
        
        
        {/* <Features /> */}
        
       
        
       
    </div>
  )
}

export default home
