import CV from '../../assets/Tamish_Bajaj_Resume.pdf'
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';
import DP from '../../assets/portfolio_pic.jpg'; // Import your profile picture
import './Display.css'; // Import the CSS file for styling

function Display() {
  const [typedText, setTypedText] = useState('');
  const text = "Tamish Bajaj"; // Text you want to display with typing effect
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 80); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, [text]);


  const [typoText,setTypoText]=useState('');
  const txt="Full Stack Developer & Entrepreneur";
  useEffect(()=>{
    let index=0;
    const typgInterval=setInterval(()=>{
      if(index<=txt.length){
        setTypoText(txt.substring(0,index));
        index++;
      }
      else{
        clearInterval(typgInterval);
      }
    },80)

    return ()=>clearInterval(typgInterval);
  },[txt]);


  return (
    <section className='home' id='home'>
      <div className="home-content">
      <h1>Hi, It's<br /> <span>{typedText}</span></h1>
            <h3 className='text-animation'>{typoText} </h3>
        <div className='social-icons'>
          <a href="https://www.linkedin.com/in/tamish-bajaj-81979a222/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/tamish_ab17"><FaInstagram /></a>
          <a href="https://github.com/TamishBajaj"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        <div className='btn-group'>
        <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn'>Contact</a>
        </div>
      </div>

      <div className='home-img'>
        <img src={DP} alt='personal' className='floating-image'/>
      </div>
    </section>
  );
}

export default Display;
