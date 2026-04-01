import { ScrollReveal } from '../ui/ScrollReveal'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const introWords = [
  "I spend most of my time building and experimenting.",
  "Sometimes it's infrastructure running quietly in the background,",
  "sometimes it's a physical object solving a very specific problem.",
  "",
  "I like understanding how things work —",
  "and then reshaping them into something more useful,",
  "or simply more mine."
]

export function IntroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 md:py-36 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div
            className="relative p-8 md:p-12"
            style={{
              backgroundColor: 'var(--color-paper)',
              boxShadow: '0 4px 30px var(--color-shadow)',
            }}
          >
            {/* Tape decoration */}
            <div className="tape tape-top" />

            {/* Subtle paper lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, var(--color-text) 31px, var(--color-text) 32px)',
                backgroundPositionY: '8px',
              }}
            />

            <div ref={ref} className="relative">
              {introWords.map((line, i) => (
                line === '' ? (
                  <div key={i} className="h-6" />
                ) : (
                  <motion.p
                    key={i}
                    className="font-heading text-lg md:text-xl leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : undefined}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {line}
                  </motion.p>
                )
              ))}
            </div>

            {/* Corner fold effect */}
            <div
              className="absolute bottom-0 right-0 w-8 h-8"
              style={{
                background: `linear-gradient(135deg, var(--color-paper) 50%, var(--color-bg-secondary) 50%)`,
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
