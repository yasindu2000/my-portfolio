import { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 w-full fixed z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        
        <div className="text-3xl font-bold cursor-pointer text-white">
          <Link to="home" spy={true} smooth={true} duration={500}>Portfolio</Link>
        </div>

        
        <div className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About Me</Link>
          <Link to="certification" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Certificates</Link>
          <Link to="projects" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Projects</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Contact</Link>
        </div>

        
        <div className="hidden md:flex space-x-4 text-2xl gap-3">
          <a href="https://www.facebook.com/yasindu.dahanayake" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/yasindu-dahanayaka-6342ba261" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yasindu2000" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
            <FaGithub />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white cursor-pointer">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4 flex flex-col items-center space-y-4">
          <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="certification" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Certificates</Link>
          <Link to="projects" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>

         
          <div className="flex space-x-6 mt-4 text-2xl">
            <a href="https://www.facebook.com/yasindu.dahanayake" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/yasindu-dahanayaka-6342ba261" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/yasindu2000" className="text-gray-400 hover:text-white hover:scale-125 transition duration-300">
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
