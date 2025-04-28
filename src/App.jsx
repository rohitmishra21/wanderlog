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
import ItineraryIntro from './components/ItineraryIntro'
import ComboBtn from './components/ComboBtn'
import GoogleBtn from './components/GoogleBtn'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=' '>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ReplaceFeature />
      <RecomendedSection />
      <JoinSection btn={<GoogleBtn />} />
      <Collaborate />
      <TripPlanner />
      <ProFeatures />
      <ExploreDestinations />
      <AdventureFeed />
      <ItineraryIntro />
      <JoinSection btn={<ComboBtn />} />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default App
