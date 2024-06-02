import React from 'react'
import { Icon } from '../MenuIcon/Icon.jsx'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "./index.css"
import { Reveal } from '../Reveal/Reveal.jsx'


export const Header = () => {
  return (
    
      <header style={{zIndex:"999"}} id='header' className='header'>
        <p className='h1 green-text'>Thor <span className='blue-text'>.</span></p>
        <div  className='header-links-wrap'>
          <HashLink  to={'#aboutme'}  smooth  className='styled-link'>Me</HashLink>
          <HashLink  to={'#bootcamp'} smooth className='styled-link'>BootCamp</HashLink>
          <HashLink  to={'#mywork'} smooth className='styled-link'>Work</HashLink>
          <HashLink  to={'#contactme'} className='styled-link'>Contact</HashLink>
        {/* <button><Icon icon="material-symbols:menu-open" /></button> */}
        </div>
      </header>
   
  )
}
