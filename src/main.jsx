import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './nav.jsx'
import Slider from './slider/slider.jsx'
import Imgg from './img/img.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Slider />
    <Imgg />
  </StrictMode>,
)
