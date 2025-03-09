import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certification from './components/Certification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div>
   <ToastContainer theme="dark"/>

    <Navbar/>
    <Hero/>
    <About/>
    <Certification/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default App