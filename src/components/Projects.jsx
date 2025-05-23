import React from 'react'
import burgetImg from '../assets/burger.png'
import productImg from '../assets/product.png'
import crudImg from '../assets/crud.png'
import libraryImg from '../assets/library.png'
import facebookImg from '../assets/facebook.png'

const projects = [
    {
      id: 1,
      name: "Product Store Site",
      technologies: "MERN Stack",
      image: productImg,
      github: "https://github.com/yasindu2000/Product-store-reactjs-nodejs.git",
    },
    {
      id: 2,
      name: "Student MenagementCRUD App",
      technologies: "MERN Stack",
      image: crudImg,
      github: "https://github.com/yasindu2000/MERN-Stack-CRUD-App.git",
    },
    {
      id: 3,
      name: "Burger Frontend Website",
      technologies: "React JS",
      image: burgetImg,
      github: "https://github.com/yasindu2000/burger-web.git",
    },
    {
      id: 4,
      name: "Library Menagement System",
      technologies: "MERN Stack",
      image: libraryImg,
      github: "https://github.com/yasindu2000/Bookstore-Management-System.git",
    },
    {
      id: 5,
      name: "Facebook Desktop Interface",
      technologies: "React JS",
      image: facebookImg,
      github: "https://github.com/yasindu2000/React-Facebook-Interface.git",
    }
    
  ];
  

function Projects() {
  return (
    <div className="bg-black text-white py-20" id="projects">
    <div className="container mx-auto px-8 md:px-16 lg:px-24 mb-30">
      <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
          transform transition-transform duration-300 hover:scale-105">
            <img src={project.image} alt={project.name} className="rounded-lg mb-4 
            w-full h-48 object-cover" />
            <h3 className="text-2xl font-bold mb-2 font-mono">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.technologies}</p>
            <a href={project.github} className="inline-block bg-gradient-to-r 
            from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
            rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Projects