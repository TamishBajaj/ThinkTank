/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from "react-icons/md";

import { FaWhatsapp } from "react-icons/fa";

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a7f0pwc', 'template_qj75fjk', form.current, {
        publicKey: 'E7b4zStBJIO7L9qHC',
      })
     
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5 className='headi'>Get In Touch</h5>
      <h2 className='headin'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyacc171813@gmail.com</h5>
            <a href='mailto:dummyacc171813@gmail.com' target='_blank'><span className='bt'>Send a Message</span></a>
          </article>

          

          <article className="contact__option">
          <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9876543210</h5>
            <a href='https://api.whatsapp.com/send?phone+91987654321' target='_blank'><span className='bt'>Send a Message</span></a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message'  rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn' >Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact