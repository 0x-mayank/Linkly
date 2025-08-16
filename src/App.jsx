import { useState } from 'react'
import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import About from '../components/About';

function App() {
  
  return (
    <div className="min-h-screen w-full bg-white relative">
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
      `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
  <div  className="relative z-10">

    <NavBar />
    <HeroSection />
    <About/>

  </div>

</div>
  )
}

export default App
