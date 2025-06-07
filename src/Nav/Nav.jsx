import { useState } from 'react'
import { Link } from 'react-router-dom';
import './nav.css'

function Nav() {
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">THE AXR</div>
          <div className='inputsr'><input type="text" placeholder='Search' /></div>
          <ul className="navbar-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="../about.html">About</a></li>

        </ul>
    </nav>
    </>
  )
}

export default Nav
