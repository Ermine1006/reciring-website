import WaitlistProvider from './context/WaitlistProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InvisibleNetwork from './components/InvisibleNetwork'
import MatchDemo from './components/MatchDemo'
import RevealExperience from './components/RevealExperience'
import FeatureStories from './components/FeatureStories'
import SocialProof from './components/SocialProof'
import ForInstitutions from './components/ForInstitutions'
import Team from './components/Team'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <InvisibleNetwork />
          <MatchDemo />
          <RevealExperience />
          <FeatureStories />
          <SocialProof />
          <ForInstitutions />
          <Team />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </WaitlistProvider>
  )
}

export default App
