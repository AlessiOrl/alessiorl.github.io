import { ScrollReveal } from '../ui/ScrollReveal'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const automations = [
  { label: 'Lights', icon: '💡', connected: true },
  { label: 'Climate', icon: '🌡️', connected: true },
  { label: 'Presence', icon: '📍', connected: true },
  { label: 'Media', icon: '🎵', connected: false },
  { label: 'Security', icon: '🔒', connected: true },
]

export function AutomationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Automation
          </h2>
          <p
            className="text-center max-w-md mx-auto mb-4 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I don't like repetitive actions. So I automate them.
          </p>
          <p
            className="text-center max-w-md mx-auto mb-16 text-sm leading-relaxed"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Lights, environment, small daily interactions — everything connected, but only where it makes sense.
          </p>
        </ScrollReveal>

        {/* Flow diagram */}
        <div ref={ref} className="relative">
          {/* Central hub */}
          <motion.div
            className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-12 relative z-10"
            style={{
              backgroundColor: 'var(--color-paper)',
              boxShadow: '0 4px 20px var(--color-shadow)',
              border: '2px solid var(--color-accent)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : undefined}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl">🏠</span>
          </motion.div>

          {/* Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {automations.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              >
                {/* Connection line */}
                <div
                  className="w-px h-6 hidden md:block"
                  style={{
                    backgroundColor: item.connected ? 'var(--color-accent)' : 'var(--color-border)',
                    opacity: item.connected ? 0.6 : 0.2,
                  }}
                />

                {/* Node */}
                <motion.div
                  className="w-16 h-16 rounded-lg flex flex-col items-center justify-center gap-1 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--color-paper)',
                    boxShadow: '0 2px 10px var(--color-shadow)',
                    border: `1px solid ${item.connected ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    opacity: item.connected ? 1 : 0.5,
                  }}
                  whileHover={{ scale: 1.1, y: -4 }}
                >
                  <span className="text-lg">{item.icon}</span>
                </motion.div>
                <span
                  className="font-mono text-xs"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.label}
                </span>

                {/* Status dot */}
                <div className="flex items-center gap-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: item.connected ? '#4ade80' : 'var(--color-text-muted)',
                    }}
                  />
                  <span className="font-mono text-[10px]" style={{ color: 'var(--color-text-muted)' }}>
                    {item.connected ? 'on' : 'off'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
