import React from 'react'
import { Link } from 'react-scroll'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
        <div className="container py-4 flex justify-center md:justify-between items-center">
            <div className="text-4xl font-bold  hidden md:inline cursor-pointer text-white" id='home'>Portfolio</div>
            <div className="space-x-6 text-xl font-semibold">
                <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out">Home</Link>
                <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">About Me</Link>
                <Link to="certification" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Certificates</Link>
                <Link to="projects" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Projects</Link>
                <Link to="contact" spy={true} smooth={true} duration={500} className="hover:text-gray-400 cursor-pointer">Contact</Link>
            </div>
            <div className="flex space-x-4 my-4 md:my-0 gap-2">
                        <a href="https://www.facebook.com/yasindu.dahanayake" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300 ease-in text-2xl">
                          <FaFacebook />
                        </a>
                        
                        <a href="https://www.linkedin.com/in/yasindu-dahanayaka-6342ba261" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300 ease-in text-2xl">
                          <FaLinkedin />
                        </a>
                        <a href="https://github.com/yasindu2000" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300 ease-in text-2xl">
                          <FaGithub />
                        </a>
                      </div>
        </div>
    </nav>
  )
}

export default Navbar