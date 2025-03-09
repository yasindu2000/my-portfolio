import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certification from './components/Certification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer'


function App() {
  return (
    <div className=''>
   <ToastContainer theme="dark"/>

    <Navbar/>
    <Hero/>
    <About/>
    <Certification/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App