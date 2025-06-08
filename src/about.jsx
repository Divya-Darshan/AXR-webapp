import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.jsx'
import Ab from './about/ab.jsx'
import Foot from './footer/foot.jsx'

ReactDOM.createRoot(document.getElementById('abo')).render(
  <React.StrictMode>
    <Nav />

    <Ab />

    <Foot />
    
  </React.StrictMode>
)
