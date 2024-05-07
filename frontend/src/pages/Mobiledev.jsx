import React, { useEffect } from 'react';

import Mobile from "../components/mobile/Mobile";
import Mobile2 from "../components/mobile/Mobile2";
import Mobile3 from "../components/mobile/Mobile3";
import Mobile4 from "../components/mobile/Mobile4";
import Mobile5 from "../components/mobile/Mobile5";

const Mobiledev = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
}, []);
  return (
    <div>

        
<Mobile />
        
        
        <Mobile2 />
        <Mobile4/>
        <Mobile3 />
        <Mobile5 />
       
    </div>
  )
}

export default Mobiledev