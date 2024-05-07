import React, { useEffect } from 'react';

import Webone from "../components/webone/Webone";
import Webtwo from "../components/webtwo/Webtwo";
import Webthree from "../components/webthree/Webthree";
import Webfour from "../components/webfour/Webfour";
import Webfive from '../components/webfive/Webfive';

const Webdev = () => {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
}, []);
  return (
    <div>
    <Webone />
    <Webthree />
        <Webtwo />
        <Webfive />
        <Webfour />

        </div>
  )
}

export default Webdev