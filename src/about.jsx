import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.jsx'
import Ab from './about/ab.jsx'
import Foot from './footer/foot.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />

    <Ab />

    <Foot />
    
  </StrictMode>,
)
