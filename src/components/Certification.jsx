import React from 'react'
import { SiUdemy } from 'react-icons/si';
import Img from '../assets/images.png'
import Img2 from '../assets/download.png'
const services = [
    {
      id: 1,
      image:<SiUdemy className="text-4xl text-purple-600 mt-5"/>,
      title: "UI/UX Design With Figma",
      description: "This certification ability to create wireframes, prototypes, and interactive designs for websites and apps.",
      link:<a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-497d7cd9-5a7e-4a60-8aac-c8dd0ce60822.pdf" className="mt-4 inline-block text-green-400 hover:text-blue-500" >Read More</a>

    },
    {
      id: 2,
      image:<SiUdemy className="text-4xl text-purple-600 mt-5"/>,
      title: "OOP With Java",
      description: "Object-Oriented Programming (OOP) is a paradigm that organizes code into objects, which contain attributes (fields) and methods (functions).",
      link:<a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-00cbe6ef-16fa-4ae1-a12b-5d6e8957f8b6.pdf" className="mt-4 inline-block text-green-400 hover:text-blue-500" >Read More</a>
    },
    {
      id: 3,
      title: "React TainwindCSS Firebase",
      image:<SiUdemy className="text-4xl text-purple-600 mt-5"/>,
      description: "A React app styled with Tailwind CSS, using Firebase for authentication, database, and hosting",
      link:<a href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-f634ec89-6a06-4cbe-b11d-baae382e697e.pdf" className="mt-4 inline-block text-green-400 hover:text-blue-500" >Read More</a>
    },
    {
      id: 4,
      title: "Getting Started With NodeJS",
      image:<img 
      src={Img} 
      alt="Simplilearn Logo" 
      className="w-8 h-9 mt-5"
    />,
      description: "Node.js is a fast, scalable, server-side JavaScript runtime built on Chrome's V8 engine.",
      link:<a href="https://simpli-web.app.link/e/j0ASJxLSzRb" className="mt-4 inline-block text-green-400 hover:text-blue-500" >Read More</a>
    },
    {
      id: 5,
      image:<img 
      src={Img2}  
      alt="Simplilearn Logo" 
      className="w-8 h-9 mt-5"
    />,
      title: "React JS",
      description: "React is a JavaScript library for building fast, interactive, and reusable user interfaces.",
      link:<a href="https://www.dpitcampus.lk/lms/mod/customcert/view.php?id=1754&downloadown=1" className="mt-4 inline-block text-green-400 hover:text-blue-500" >Read More</a>
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Promote your business with our digital marketing servises",
      link:<a href="" className="mt-4 inline-block text-green-400 hover:text-blue-500" >Read More</a>
    },
  ];

function Certification() {
  return (
    <div className="bg-black text-white py-3" id="certification">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 mb-30 ">
        <h2 className="text-5xl font-bold text-center mb-15 p-10">My Certification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                
              </div>
              {service.image}
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500 font-mono">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300 font-">{service.description}</p>
              {service.link}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certification