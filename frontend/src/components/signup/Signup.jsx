import {React} from 'react'

// import axios from 'axios';
import { BiLogoFirefox } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

import './Signup.css'

const Signup = () => {
  return (
    <>
    <div className='topii'> </div>

   
<div className='containers'>
 <div className='content'>
     <h2><BiLogoFirefox className='logo'/>ThinkTank</h2>

     <div className='text-sci'>
         <h2>Welcome!<br /><span>To place of Innovations</span></h2>
         <p>We are a one stop solution for all tech Solutions for small scale buisness</p>

         <div className='social-icons'>
             <a href='#home'><FaLinkedin className='iconss' /></a>
             <a href='#home'><FaInstagramSquare className='iconss' /></a>
             <a href='#home'><FaGithub className='iconss'/></a>
             <a href='#home'><FaFacebook className='iconss' /></a>
         </div>
     </div>
 </div>
 <div className='logreg-box'>
        

        <div className='form-box register'>
            <form action='#'>
                <h2>Sign Up</h2>

                <div className='input-box'>
                    <span className='icon'><FaUser /></span>
                    <input type='text' placeholder='Name' required />
                    <label>Name</label>
                </div>

                <div className='input-box'>
                    <span className='icon'><IoMdMail /></span>
                    <input type='email' placeholder='Email' required />
                    <label>Email</label>
                </div>

                <div className='input-box'>
                    <span className='icon'><FaLock /></span>
                    <input type='password' placeholder='Password' required />
                    <label>Password</label>
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox'/>I agree to terms and conditions</label>
                    
                </div>

                <button type='submit' className='butn'>Sign Up</button>

                <div className='login-register'>
                    <p>ALready have an Account?<a href='#Home' className='register-link'>Sign In</a></p>
                </div>
            </form>
        </div>
    </div>

   </div>
    </>
  )
}

export default Signup