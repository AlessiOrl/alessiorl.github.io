import { ScrollReveal } from '../ui/ScrollReveal'
import { PinnedNote } from '../ui/PinnedNote'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const categories = [
  { label: 'Software & Infrastructure', icon: '⚙️', rotation: -2 },
  { label: 'DIY Electronics', icon: '🔌', rotation: 1.5 },
  { label: 'AI Systems', icon: '🧠', rotation: -1 },
  { label: 'Physical Making', icon: '🛠️', rotation: 2.5 },
]

export function WhatIBuildSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            What I Build
          </h2>
          <p
            className="font-body text-center max-w-lg mx-auto mb-16 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Most of what I build starts from a simple need:<br />
            <span className="font-handwritten text-xl" style={{ color: 'var(--color-accent)' }}>
              "this could be better"
            </span>
            <br />
            From there it turns into code, hardware, or a mix of both.
          </p>
        </ScrollReveal>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="flex justify-center"
              initial={{
                opacity: 0,
                y: 30,
                rotate: cat.rotation * 3,
                scale: 0.9,
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                rotate: 0,
                scale: 1,
              } : undefined}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <PinnedNote
                text={`${cat.icon} ${cat.label}`}
                rotation={cat.rotation}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
