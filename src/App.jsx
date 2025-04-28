import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ReplaceFeature from './components/ReplaceFeature'
import RecomendedSection from './components/RecomendedSection'
import JoinSection from './components/JoinSection'
import Collaborate from './components/Collaborate '
import TripPlanner from './components/TripPlanner'

const App = () => {
  return (
    <div className='md:px-28  '>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ReplaceFeature />
      <RecomendedSection />
      <JoinSection />
      <Collaborate />
      <TripPlanner />
    </div>
  )
}

export default App
