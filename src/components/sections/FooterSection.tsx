import { ScrollReveal } from '../ui/ScrollReveal'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const easterEggLines = [
  '> whoami',
  'alessio',
  '> uptime',
  'too long to remember',
  '> cat /etc/motd',
  '"There\'s always another version to build."',
  '> exit',
  'goodbye. keep building.',
]

export function FooterSection() {
  const [showTerminal, setShowTerminal] = useState<boolean>(false)
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState<number>(0)

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'K') {
      setShowTerminal(prev => !prev)
      setTerminalLines([])
      setCurrentLine(0)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Type easter egg lines
  useEffect(() => {
    if (!showTerminal) return
    if (currentLine >= easterEggLines.length) return

    const timeout = setTimeout(() => {
      setTerminalLines(prev => [...prev, easterEggLines[currentLine]])
      setCurrentLine(l => l + 1)
    }, 600)

    return () => clearTimeout(timeout)
  }, [showTerminal, currentLine])

  return (
    <footer className="relative py-20 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <div
            className="inline-block px-8 py-6"
            style={{
              backgroundColor: 'var(--color-paper)',
              boxShadow: '0 4px 20px var(--color-shadow)',
            }}
          >
            <p
              className="font-heading text-lg md:text-xl leading-relaxed mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Most of my work lives on GitHub.<br />
              The rest is probably still in progress.
            </p>
            <a
              href="https://github.com/alessiorl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm transition-colors duration-300 hover:opacity-80"
              style={{ color: 'var(--color-accent)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              github.com/alessiorl
            </a>
          </div>
        </ScrollReveal>

        {/* Hidden terminal trigger */}
        <div className="mt-12">
          <button
            onClick={() => {
              setShowTerminal(prev => !prev)
              setTerminalLines([])
              setCurrentLine(0)
            }}
            className="font-mono text-xs cursor-pointer transition-opacity duration-300"
            style={{ color: 'var(--color-text-muted)', opacity: 0.3 }}
            title="try ctrl+shift+k"
          >
            ▋
          </button>
        </div>

        {/* Easter egg terminal */}
        <AnimatePresence>
          {showTerminal && (
            <motion.div
              initial={{ opacity: 0, y: 20, scaleY: 0.8 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: 20, scaleY: 0.8 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-lg overflow-hidden text-left max-w-md mx-auto"
              style={{
                backgroundColor: 'var(--color-terminal-bg)',
                boxShadow: '0 8px 30px var(--color-shadow-strong)',
              }}
            >
              <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="font-mono text-xs opacity-40" style={{ color: 'var(--color-terminal-text)' }}>
                  secret
                </span>
              </div>
              <div className="p-4 font-mono text-xs leading-relaxed min-h-[120px]" style={{ color: 'var(--color-terminal-text)' }}>
                {terminalLines.map((line, i) => (
                  <div key={i} className={line.startsWith('>') ? 'opacity-60' : 'mb-1'}>
                    {line}
                  </div>
                ))}
                {currentLine < easterEggLines.length && (
                  <span className="cursor-blink">▋</span>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Copyright */}
        <p
          className="mt-16 font-mono text-xs"
          style={{ color: 'var(--color-text-muted)', opacity: 0.4 }}
        >
          built with curiosity · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
