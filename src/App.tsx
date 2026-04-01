import { ThemeProvider } from './context/ThemeContext'
import { NoiseOverlay } from './components/ui/NoiseOverlay'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { SectionTransition } from './components/ui/SectionTransition'
import { HeroSection } from './components/sections/HeroSection'
import { IntroSection } from './components/sections/IntroSection'
import { WhatIBuildSection } from './components/sections/WhatIBuildSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SystemsSection } from './components/sections/SystemsSection'
import { MakerSection } from './components/sections/MakerSection'
import { AutomationSection } from './components/sections/AutomationSection'
import { LifestyleSection } from './components/sections/LifestyleSection'
import { FooterSection } from './components/sections/FooterSection'

function App() {
  return (
    <ThemeProvider>
      <NoiseOverlay />
      <ScrollProgress />
      <ThemeToggle />

      <main>
        <HeroSection />

        <IntroSection />

        <SectionTransition text="Things start messy. They get better over time." />

        <WhatIBuildSection />

        <SectionTransition text="Some ideas stay ideas. Others become systems." />

        <ProjectsSection />

        <SectionTransition text="Not everything is planned. Most things evolve." />

        <SystemsSection />

        <MakerSection />

        <SectionTransition text="There's always another version to build." />

        <AutomationSection />

        <LifestyleSection />

        <FooterSection />
      </main>
    </ThemeProvider>
  )
}

export default App
