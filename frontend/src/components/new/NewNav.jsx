import React from 'react'
import './NewNav.css'

function NewNav() {
  return (
    <header className='header'>
        <a href='#home' className='logo'>Tamish <span>Bajaj</span></a>

        <nav className='navbar'>
            <a href='#home' className='active'>Home</a>
            <a href='#Service_contain'>Services</a>
            <a href='#portfolio'>About Us</a>
            <a href='#education'>Your Work</a>
            <a href='#contact'>Departments</a>
            <button>Host</button>
        </nav>
    </header>
  )
}

export default NewNav