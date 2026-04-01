import { motion } from 'framer-motion';
import { BeyondCode } from './components/BeyondCode';
import { EasterEggOverlay } from './components/EasterEggOverlay';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MakerMindset } from './components/MakerMindset';
import { Navbar } from './components/Navbar';
import { Systems } from './components/Systems';
import { WhatIBuild } from './components/WhatIBuild';
import { navItems } from './data';
import { useDarkMode } from './hooks/useDarkMode';
import { useEasterEgg } from './hooks/useEasterEgg';
import { useScrollProgress } from './hooks/useScrollProgress';

export default function App() {
  const { theme, toggleTheme } = useDarkMode();
  const scrollProgress = useScrollProgress();
  const { easterEggActive, registerBrandTap, dismissEasterEgg } = useEasterEgg();

  return (
    <div className="min-h-screen bg-[var(--page-background)] text-[var(--page-foreground)] transition-colors duration-300">
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-teal-300 via-emerald-400 to-amber-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar items={navItems} theme={theme} onToggleTheme={toggleTheme} onBrandTap={registerBrandTap} />

      <EasterEggOverlay active={easterEggActive} onClose={dismissEasterEgg} />

      <main>
        <Hero />
        <WhatIBuild />
        <Systems />
        <MakerMindset />
        <BeyondCode />
      </main>

      <Footer />
    </div>
  );
}