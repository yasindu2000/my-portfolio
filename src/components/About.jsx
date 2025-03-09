import React from 'react'
import AboutImg from '../assets/logo.jpg'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'


function About() {
  return (
    <div className="bg-black text-white py-30" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <h2 className="text-5xl font-bold text-center mb-15">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          <img
            src={AboutImg}
            alt=""
            className="w-72 h-100 rounded object-cover mb-8 md:mb-0 transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            " I'm a MERN Stack Developer and an undergraduate at NSBM Green University. 
            Passionate about building modern, responsive web applications, I specialize 
            in creating scalable and efficient solutions. Always eager to learn and innovate
            in the world of full-stack development."
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 font-mono text-lg">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 font-mono text-lg">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 font-mono text-lg">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 font-mono text-lg">
                  Express JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12 font-mono text-lg">
                  Mongo DB
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-start -ml-5">
                <div className='p-4 cursor-pointer hover:scale-125 transition duration-300 ease-in'>
                    <RiReactjsLine className='text-5xl text-cyan-400'/>
                 
                </div>
                <div className="p-4 cursor-pointer hover:scale-125 transition duration-300 ease-in">
                    <SiMongodb className='text-5xl text-green-500'/>
                </div>
                <div className="p-4 cursor-pointer hover:scale-125 transition duration-300 ease-in">
                    <FaNodeJs className='text-5xl text-green-500'/>
                </div>
                <div className="p-4 cursor-pointer hover:scale-125 transition duration-300 ease-in">
                    <SiExpress className='text-5xl text-green-700'/>
                </div>
                <div className="p-4 cursor-pointer hover:scale-125 transition duration-300 ease-in">
                    <SiJavascript className="text-5xl text-yellow-500"/>
                </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    
  )
}

export default About