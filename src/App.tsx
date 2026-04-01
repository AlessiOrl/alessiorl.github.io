import { ThemeProvider } from './context/ThemeContext'
import { NoiseOverlay } from './components/ui/NoiseOverlay'
import { HeroSection } from './components/sections/HeroSection'

function App() {
  return (
    <ThemeProvider>
      <NoiseOverlay />

      <main>
        <HeroSection />
      </main>
    </ThemeProvider>
  )
}

export default App
