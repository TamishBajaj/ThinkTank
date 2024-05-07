/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
   <footer>
    <a href='#link' className='footer__logo'>TAMISH</a>

    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#portfolio'>Portfolio</a></li>
      <li><a href='#testimonials'>Testimonials</a></li>
      <li><a href='#contact'>Contact</a></li>
      
    </ul>

    <div className='footer__socials'>
      <a href='#instagram'><FaInstagramSquare /></a>
      <a href='#facebook'><CiFacebook /></a>
      <a href='#twitter'><FaTwitter /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Tamish_ab. All rights reserved.</small>
    </div>
   </footer>
  )
}

export default Footer
