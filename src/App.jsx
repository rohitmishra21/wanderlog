import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'

const App = () => {
  return (
    <div className='md:px-28  '>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </div>
  )
}

export default App
