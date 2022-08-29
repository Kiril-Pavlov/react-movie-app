import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <Link to='/' className='navbar-link'>
        <div>Home</div>
      </Link>
      <Link to='wishlist' className='navbar-link'>
        <div>Wishlist</div>
      </Link>
      <Link to='contact' className='navbar-link'>
        <div>Contact</div>
      </Link>
    </nav>
  )
}

export default Navbar