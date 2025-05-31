import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.jsx'
import Vid from './Vid/vid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Vid />
  </StrictMode>,
)
