import { ScrollReveal } from '../ui/ScrollReveal'
import { Polaroid } from '../ui/Polaroid'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const iterationSteps = [
  { label: 'idea', icon: '💡' },
  { label: 'prototype', icon: '🔧' },
  { label: 'fix', icon: '🩹' },
  { label: 'improve', icon: '✨' },
  { label: 'repeat', icon: '🔁' },
]

export function MakerSection() {
  const cycleRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cycleRef, { once: true, margin: '-80px' })

  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Maker
          </h2>
          <p
            className="text-center max-w-md mx-auto mb-6 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            When something doesn't exist, I make it.
          </p>
          <p
            className="text-center max-w-md mx-auto mb-16 text-sm leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            3D printing became a way to think differently — not just writing solutions, but shaping them.
          </p>
        </ScrollReveal>

        {/* Iteration cycle */}
        <div ref={cycleRef} className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {iterationSteps.map((step, i) => (
            <motion.div
              key={step.label}
              className="flex items-center gap-2 md:gap-4"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : undefined}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div
                className="flex flex-col items-center gap-1 px-4 py-3 rounded-sm"
                style={{
                  backgroundColor: 'var(--color-paper)',
                  boxShadow: '0 2px 8px var(--color-shadow)',
                }}
              >
                <span className="text-2xl">{step.icon}</span>
                <span className="font-handwritten text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {step.label}
                </span>
              </div>
              {i < iterationSteps.length - 1 && (
                <motion.span
                  className="font-mono text-lg hidden sm:inline"
                  style={{ color: 'var(--color-accent)' }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.6 } : undefined}
                  transition={{ delay: i * 0.15 + 0.3 }}
                >
                  →
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Polaroid gallery */}
        <div className="flex flex-wrap justify-center gap-6">
          <ScrollReveal delay={0.1}>
            <Polaroid caption="first print" rotation={-4}>
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#3a332c' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" style={{ color: 'var(--color-accent)' }}>
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            </Polaroid>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <Polaroid caption="iteration #47" rotation={2}>
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#2c3a2c' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" style={{ color: 'var(--color-accent)' }}>
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
            </Polaroid>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Polaroid caption="it works!" rotation={-1.5}>
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#3a2c34' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" style={{ color: 'var(--color-accent)' }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </Polaroid>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
