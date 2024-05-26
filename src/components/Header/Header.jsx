import React from 'react'
import { Icon } from '../MenuIcon/Icon.jsx'
import { Link, NavLink } from 'react-router-dom'
import "./index.css"

export const Header = () => {
  return (
    <header className='header'>
      <h1>Thor</h1>
      <div className='header-links-wrap'>
        <Link>Me</Link>
        <Link>Work</Link>
        <Link>BootCamp</Link>
        <Link>Contact</Link>
      <button><Icon icon="material-symbols:menu-open" /></button>
      </div>
    </header>
  )
}
