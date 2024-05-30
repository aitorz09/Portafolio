import React from 'react'
import { Icon } from '../MenuIcon/Icon.jsx'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "./index.css"
function scrollToSection(event) {
  event.preventDefault();
  const target = document.querySelector(event.target.hash);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 50, // ajusta el valor según sea necesario
      behavior: 'smooth'
    });
  }
}
export const Header = () => {
  return (
    <header id='header' className='header'>
      <p className='h1'>Thor</p>
      <div className='header-links-wrap'>
        <HashLink onClick={scrollToSection} to={'#header'} smooth offset={-5000} className='styled-link'>Me</HashLink>
        <HashLink onClick={scrollToSection} to={'#bootcamp'} className='styled-link'>BootCamp</HashLink>
        <HashLink onClick={scrollToSection} to={'#mywork'} className='styled-link'>Work</HashLink>
        <HashLink onClick={scrollToSection} to={'#contactme'} className='styled-link'>Contact</HashLink>
      <button><Icon icon="material-symbols:menu-open" /></button>
      </div>
    </header>
  )
}
