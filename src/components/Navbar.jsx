import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container py-4 flex justify-center md:justify-between items-center">
            <div className="text-4xl font-bold  hidden md:inline cursor-pointer  text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text" id='home'>Portfolio</div>
            <div className="space-x-6 text-xl">
                <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">About Me</Link>
                <Link to="services" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Certificates</Link>
                <Link to="projects" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Projects</Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Contact</Link>
            </div>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer font-bold text-center">Connect Me</button>
        </div>
    </nav>
  )
}

export default Navbar