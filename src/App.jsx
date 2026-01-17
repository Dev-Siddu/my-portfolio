import './App.css'
import HeroSection from './Components/HeroSection/HeroSection'
import NavBar from './Components/NavBar/NavBar'
import StatsBar from './Components/StatusBar/StatsBar'
import Experience from './Components/Experience/Experience' // Import the new component
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar />
      {/* The background light effect we discussed should be applied globally in App.css */}
      <div className="portfolio-bg-effect">
        <HeroSection />
        <StatsBar />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App