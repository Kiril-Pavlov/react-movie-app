import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <Link to='/'>
        <div className='navbar-link'>Home</div>
      </Link>
      <Link to='wishlist'>
        <div className='navbar-link'>Wishlist</div>
      </Link>
      <Link to='contact'>
        <div className='navbar-link'>Contact</div>
      </Link>
    </nav>
  )
}

export default Navbar