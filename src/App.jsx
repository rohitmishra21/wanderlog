import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ReplaceFeature from './components/ReplaceFeature'
import RecomendedSection from './components/RecomendedSection'

const App = () => {
  return (
    <div className='md:px-28  '>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ReplaceFeature />
      <RecomendedSection />
    </div>
  )
}

export default App
