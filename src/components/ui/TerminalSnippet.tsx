import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TerminalSnippetProps {
  lines: string[]
  title?: string
  className?: string
  typingSpeed?: number
}

export function TerminalSnippet({
  lines,
  title = 'terminal',
  className = '',
  typingSpeed = 30,
}: TerminalSnippetProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState<number>(0)
  const [currentChar, setCurrentChar] = useState<number>(0)
  const [started, setStarted] = useState<boolean>(false)

  useEffect(() => {
    if (!started) return
    if (currentLine >= lines.length) return

    const line = lines[currentLine]
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev]
          updated[currentLine] = line.substring(0, currentChar + 1)
          return updated
        })
        setCurrentChar(c => c + 1)
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1)
        setCurrentChar(0)
        setDisplayedLines(prev => [...prev, ''])
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [started, currentLine, currentChar, lines, typingSpeed])

  return (
    <motion.div
      className={`rounded-lg overflow-hidden shadow-lg ${className}`}
      style={{ backgroundColor: 'var(--color-terminal-bg)' }}
      onViewportEnter={() => setStarted(true)}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="font-mono text-xs opacity-40" style={{ color: 'var(--color-terminal-text)' }}>
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 font-mono text-sm leading-relaxed" style={{ color: 'var(--color-terminal-text)' }}>
        {displayedLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="opacity-40 mr-2 select-none">$</span>
            <span>{line}</span>
            {i === currentLine && currentLine < lines.length && (
              <span className="cursor-blink ml-0.5">▋</span>
            )}
          </div>
        ))}
        {currentLine >= lines.length && displayedLines.length > 0 && (
          <div className="flex">
            <span className="opacity-40 mr-2 select-none">$</span>
            <span className="cursor-blink">▋</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}
