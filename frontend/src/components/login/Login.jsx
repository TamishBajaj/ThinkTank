import {React,useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

import axios from 'axios';
import { BiLogoFirefox } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { BASE_URL } from '../../config.js';

import './Login.css'


const Login = () => {

    const navigate = useNavigate();

    const [formData,setFormData]=useState({
        email:'',
        password:''
    });

    const {email,password}=formData

    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit=async e=>{
       console.log("yes hitting")
       console.log(BASE_URL)
        e.preventDefault();
        try{
            const res=await axios.post(`${BASE_URL}/api/v1/login`,{email,password});
            console.log("submitted")
            console.log(res.data)
            const { token } = res.data; // Assuming the token is returned in the response data

            // Store the token in local storage
            localStorage.setItem('token', token);
            
                navigate('/newEvent')
            
        }catch(err){
            console.error(err.response.data)
        }
    };
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
        <div className='form-box login'>
            <form onSubmit={onSubmit}>
                <h2>Sign In</h2>
                <div className='input-box'>
                    <span className='icon'><IoMdMail /></span>
                    <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} required  />
                    <label>Email</label>
                </div>

                <div className='input-box'>
                    <span className='icon'><FaLock /></span>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} minLength="6" />
                    <label>Password</label>
                </div>

                <div className='remember-forgot'>
                    <label><input type='checkbox'/>Remeber me</label>
                    <a href='#home'>Forgot Password</a>
                </div>

                <button type="submit" className='butn'>Sign In</button>

                <div className='login-register'>
                    <p>Do you have an Account?<a href='#home' className='register-link'>Sign Up</a></p>
                </div>
            </form>
        </div>

        
    </div>

   </div>
  
   </> 
  )
}

export default Login;

