import { useState } from 'react'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
   <div className="bg-gray-800 text-white shadow-2xs">

      <nav className="relative p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">AXR</div>

        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/190/402/large_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
              alt="menu"
              className="w-8 h-8 object-contain"
            />
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:space-x-6 text-lg">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Mobile Dropdown Nav */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 shadow-md transition-all duration-300 z-10 lg:hidden">
            <ul className="flex flex-col p-4 space-y-2 text-lg">
              <li><a href="#" className="block hover:text-gray-300">Home</a></li>
              <li><a href="#" className="block hover:text-gray-300">About</a></li>
              <li><a href="#" className="block hover:text-gray-300">Services</a></li>
              <li><a href="#" className="block hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
}

export default App
