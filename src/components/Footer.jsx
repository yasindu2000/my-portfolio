import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0 gap-3">
            <a href="https://www.facebook.com/yasindu.dahanayake" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300 ease-in text-xl">
                                      <FaFacebook />
                                    </a>
                                    
                                    <a href="https://www.linkedin.com/in/yasindu-dahanayaka-6342ba261" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300 ease-in text-xl">
                                      <FaLinkedin />
                                    </a>
                                    <a href="https://github.com/yasindu2000" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300 ease-in text-xl">
                                      <FaGithub />
                                    </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      </footer>
  )
}

export default Footer