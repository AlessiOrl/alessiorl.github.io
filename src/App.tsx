import { NoiseOverlay } from './components/ui/NoiseOverlay'
import { Header } from './components/layout/Header'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ScopeProjectsSection } from './components/sections/ScopeProjectsSection'
import { TransitionSection } from './components/sections/TransitionSection'
import { AnalogProjectsSection } from './components/sections/AnalogProjectsSection'
import { FooterSection } from './components/sections/FooterSection'

function App() {
  return (
    <div className="site-frame min-h-screen">
      <NoiseOverlay />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="site-main flex min-h-screen flex-col">
        <HeroSection />
        <AboutSection />
        <ScopeProjectsSection />
        <TransitionSection />
        <AnalogProjectsSection />
        <FooterSection />
      </main>
    </div>
  )
}

export default App
