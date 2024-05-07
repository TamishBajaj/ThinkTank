import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const headerSocials = () => {
  return (
    <div className='header__socials'>
        {/* target=blank is used so that it opens in new tab  */}
        <a href="https://www.linkedin.com/in/tamish-bajaj-81979a222/" target='_blank'><FaLinkedin /></a> 
        <a href="https://github.com/TamishBajaj" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default headerSocials