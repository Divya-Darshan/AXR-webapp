import { useState } from 'react'

import './nav.css'

function Nav() {
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">THE AXR</div>
          <ul className="navbar-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Nav
