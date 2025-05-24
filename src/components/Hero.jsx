import React from 'react'
import HeroImage from '../assets/yasindu_cv2.jpg'
import { Link } from 'react-scroll'




function Hero() {
  
  return (
    <div className='bg-black text-white text-center py-50 ' id='home'>
    
        <img src={HeroImage} alt="" className="mx-auto mb-10 w-60 h-60 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
        
        
        <h1 className='text-5xl font-bold'>
          I'm {" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Yasindu</span>
          , MERN-Stack Developer
        </h1>
        <p className='mt-5  text-gray-300 text-2xl'>
        I'm a MERN Stack Developer and an undergraduate at NSBM Green University. <br></br>
        Passionate about building modern, responsive web applications !!
        </p>
        <div className='mt-12 space-x-4'>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer  " ><Link to='contact' spy={true} smooth={true} duration={500}>Contact With Me</Link></button>
          {/* Download CV Button */}
<button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer"><a
href="/yasindu_cv.pdf" // Path to your CV in the public folder
download="yasindu_cv.pdf" // Sets file download name

>
Download CV
</a></button>
          
        </div>
        
        </div>
        
        
    
  )
}

export default Hero

