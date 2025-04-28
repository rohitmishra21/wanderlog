import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import ReplaceFeature from './components/ReplaceFeature'
import RecomendedSection from './components/RecomendedSection'
import JoinSection from './components/JoinSection'
import Collaborate from './components/Collaborate '
import TripPlanner from './components/TripPlanner'
import ProFeatures from './components/ProFeatures'
import ExploreDestinations from './components/ExploreDestinations'
import AdventureFeed from './components/AdventureFeed'

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
      <ProFeatures />
      <ExploreDestinations />
      <AdventureFeed />
    </div>
  )
}

export default App
