import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './Nav/Nav.jsx'
import Vid from './Vid/vid.jsx'
import Grid from './grid/grid.jsx'
import G2 from './grid/grid2.jsx'
import Foot from './footer/foot.jsx'
import App from './App';  // Import the new App component

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Nav />
    <Vid />
    <Grid />
    <G2 />
    <Foot />
        <App /> 
  </StrictMode>,
)
