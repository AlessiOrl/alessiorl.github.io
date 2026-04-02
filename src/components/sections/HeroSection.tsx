import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const heroQuotes = [
  {
    lines: [
      "I build things that live somewhere between code and the real world.",
      "Systems, tools, experiments — some useful, some just curiosity."
    ]
  },
  {
    lines: [
      "Not just software. Not just hardware.",
      "I like building systems that quietly make life better — one experiment at a time."
    ]
  },
  {
    lines: [
      "This is not a portfolio.",
      "It's a collection of things I've built, tested, broken, and rebuilt."
    ]
  },
  {
    lines: [
      "Builder of small systems,",
      "explorer of ideas,",
      "obsessed with making things work better."
    ]
  },
]

const QUOTE_ROTATION_INTERVAL_MS = 9000

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scatterX1 = useTransform(scrollYProgress, [0, 0.5], [0, -80])
  const scatterX2 = useTransform(scrollYProgress, [0, 0.5], [0, 60])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-3, -12])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [2, 8])

  // Rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % heroQuotes.length)
    }, QUOTE_ROTATION_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="intro"
      ref={ref}
      className="relative flex min-h-screen shrink-0 items-center justify-center overflow-hidden py-16 md:py-24"
    >
      {/* Scattered background elements */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-32 h-40 opacity-20 hidden md:block"
        style={{
          y: y1,
          x: scatterX1,
          rotate: rotate1,
          backgroundColor: 'var(--color-paper)',
          boxShadow: '0 4px 20px var(--color-shadow)',
        }}
      />
      <motion.div
        className="absolute top-[25%] right-[10%] w-24 h-28 opacity-15 hidden md:block"
        style={{
          y: y3,
          x: scatterX2,
          rotate: rotate2,
          backgroundColor: 'var(--color-paper-dark)',
          boxShadow: '0 4px 20px var(--color-shadow)',
        }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[15%] w-20 h-20 rounded-full opacity-10 hidden md:block"
        style={{
          y: y2,
          backgroundColor: 'var(--color-accent)',
        }}
      />

      {/* Small scattered note decorations */}
      <motion.div
        className="absolute top-[60%] right-[20%] font-handwritten text-sm opacity-20 hidden lg:block"
        style={{ y: y2, rotate: rotate2, color: 'var(--color-text-muted)' }}
      >
        todo: fix the thing
      </motion.div>
      <motion.div
        className="absolute top-[35%] left-[5%] font-handwritten text-xs opacity-15 hidden lg:block"
        style={{ y: y1, rotate: rotate1, color: 'var(--color-text-muted)' }}
      >
        v0.4.2 — almost there
      </motion.div>

      {/* Main content */}
      <motion.div
        className="page-shell relative z-10 flex flex-col items-center text-center"
        style={{ opacity }}
      >
        {/* Subtle name */}
        <motion.p
          className="mb-10 font-handwritten text-lg tracking-wide md:text-xl"
          style={{ color: 'var(--color-text-muted)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Alessio Orlando
        </motion.p>

        {/* Rotating quote */}
        <div className="mx-auto flex min-h-[180px] w-full max-w-5xl items-center justify-center md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="mx-auto w-full max-w-4xl font-heading text-3xl leading-tight text-center md:text-5xl lg:text-6xl"
              style={{ color: 'var(--color-text)' }}
            >
              {heroQuotes[quoteIndex].lines.map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-2' : ''}>
                  {line}
                </p>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-handwritten text-sm" style={{ color: 'var(--color-text-muted)' }}>
              scroll to explore
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
