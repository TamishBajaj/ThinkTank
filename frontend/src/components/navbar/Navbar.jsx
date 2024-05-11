import React, { useState ,useEffect} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import menuicon from  "../../assets/menu-icon.png"
import tarf from '../../assets/target.gif'
import thinklogo from '../../assets/thinklogo.png'

const Navbar = ({ onLoginClick }) => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('');

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    useEffect(() => {
        const handleScroll = () => {
            const heroComponent = document.getElementById('hero');
            const yOffset = window.pageYOffset;
            if (heroComponent && yOffset >= heroComponent.offsetTop) {
                // User has scrolled past the hero component, close the mobile menu
                setMobileMenu(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <nav className='main__container'>
        <img src={thinklogo} alt="" className='logox' />
        <ul className={mobileMenu ? '':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='Servicess_contain' smooth={true}  duration={500}>Services</Link></li>
            <li><Link to='freee' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='contract' smooth={true} offset={-260} duration={500}>let's Work</Link></li>
            <li><Link to='card_container' smooth={true} offset={-260} duration={500}>Events</Link></li>
            <li><Link to='industry' smooth={true} offset={-260} duration={500}>Our departments</Link></li>
            <button className='nav__button' onClick={onLoginClick}>Host</button>
            {/* <li><Link className='nav__button'>Login</Link></li> */}
        </ul>
        <img src={menuicon} alt="" className='menu__icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar