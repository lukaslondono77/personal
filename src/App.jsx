import React from 'react'
import ThreeBackground from './components/ThreeBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <ThreeBackground />
      <Navbar />
      <div className="content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  )
}

export default App
