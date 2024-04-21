import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Projects from './component/Projects'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Contact from './component/Contact';
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
