// import {React} from 'react'

// // import axios from 'axios';
// import { BiLogoFirefox } from "react-icons/bi";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";

// import { IoMdMail } from "react-icons/io";
// import { FaLock } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";

// import './Signup.css'

// const Signup = () => {
//   return (
//     <>
//     <div className='topii'> </div>

   
// <div className='containers'>
//  <div className='content'>
//      <h2><BiLogoFirefox className='logo'/>ThinkTank</h2>

//      <div className='text-sci'>
//          <h2>Welcome!<br /><span>To place of Innovations</span></h2>
//          <p>We are a one stop solution for all tech Solutions for small scale buisness</p>

//          <div className='social-icons'>
//              <a href='#home'><FaLinkedin className='iconss' /></a>
//              <a href='#home'><FaInstagramSquare className='iconss' /></a>
//              <a href='#home'><FaGithub className='iconss'/></a>
//              <a href='#home'><FaFacebook className='iconss' /></a>
//          </div>
//      </div>
//  </div>
//  <div className='logreg-box'>
        

//         <div className='form-box register'>
//             <form action='#'>
//                 <h2>Sign Up</h2>

//                 <div className='input-box'>
//                     <span className='icon'><FaUser /></span>
//                     <input type='text' placeholder='Name' required />
//                     <label>Name</label>
//                 </div>

//                 <div className='input-box'>
//                     <span className='icon'><IoMdMail /></span>
//                     <input type='email' placeholder='Email' required />
//                     <label>Email</label>
//                 </div>

//                 <div className='input-box'>
//                     <span className='icon'><FaLock /></span>
//                     <input type='password' placeholder='Password' required />
//                     <label>Password</label>
//                 </div>

//                 <div className='remember-forgot'>
//                     <label><input type='checkbox'/>I agree to terms and conditions</label>
                    
//                 </div>

//                 <button type='submit' className='butn'>Sign Up</button>

//                 <div className='login-register'>
//                     <p>ALready have an Account?<a href='/login' className='register-link'>Sign In</a></p>
//                 </div>
//             </form>
//         </div>
//     </div>

//    </div>
//     </>
//   )
// }

// export default Signup

import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import './Register.css'
import google from '../../assets/google.png'
import eye from '../../assets/eye.png'

const Signup = () => {

  const { loginWithRedirect } = useAuth0();

  const [formData, setFormData] = useState({ username: '', email: '', password: ''})
  const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, formData);
      localStorage.setItem('token', res.data.token);
      navigate('/newEvent');
  } catch (error) {
      setError(error.response.data.message);
  }
}


  return (
    <div className='register_main'>

        <div className='login_head'>
         <h1>Create your new account.</h1>
         <h3>Create an account to start looking for the food you like </h3>

        </div>

        <form className='login_form' onSubmit={handleSubmit}>
        <div className='inpp'>
        <label for="email" className='lbl'>Email Address</label>
        <input type="text" id="email" name="email" className='inpt_fldd' placeholder='Enter Email' onChange={handleChange} />
        </div>

        <div className='inpp'>
        <label for="username" className='lbl'>User Name</label>
        <input type="text" id="username" name="username" className='inpt_fldd' placeholder='Enter username' onChange={handleChange} />
        </div>

        <div className='inpp'>

        <label for="password" className='lbl'>Password</label>

        <div className='eye_special'>

        
        <input type="password" id="password" name="password" className='inpt_fldd' placeholder='Password' onChange={handleChange} />
        <img src={eye} className='eye-icon'/>
        </div>
        </div>


        <div className='checkbox_class'>
        <input type='checkbox' className='check'/>
        <p>I Agree with <span className='highlight'>Terms of Service</span> and <span className='highlight'>Privacy Policy</span></p>

        </div>

        <button className='signin_btns' type="submit">Register</button>
        </form>

        <div className='fancy_style'>
            <div className='lines'>

            </div>

            <p>Or sign in with</p>

            <div className='lines'>

            </div>



        </div>

        <img className='google_icn' src={google} onClick={() => loginWithRedirect()}/>


        <p className='regis'>Have an account?<a href='/login' className='register_link'>Login</a></p>
    </div>
  )
}

export default Signup
