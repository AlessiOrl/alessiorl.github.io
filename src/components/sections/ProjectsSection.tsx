import { ScrollReveal } from '../ui/ScrollReveal'
import { Polaroid } from '../ui/Polaroid'
import { TerminalSnippet } from '../ui/TerminalSnippet'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 'zigbee',
    title: 'ZigbeeMacropad',
    description: 'A small device, built to remove friction. Physical controls for digital actions — simple idea, endlessly useful.',
    rotation: -3,
    color: '#3a332c',
    terminal: ['zigbee2mqtt status: online', 'devices connected: 12', 'macropad: listening...'],
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <rect x="5" y="9" width="4" height="3" rx="0.5" />
        <rect x="10" y="9" width="4" height="3" rx="0.5" />
        <rect x="15" y="9" width="4" height="3" rx="0.5" />
      </svg>
    ),
  },
  {
    id: 'codee',
    title: 'Codee',
    description: 'A lightweight assistant that lives where conversations already happen. Built to automate the small things that add up.',
    rotation: 2,
    color: '#2a3428',
    terminal: ['codee deploy --env production', '✓ webhook configured', '✓ bot online: ready'],
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'AI Work',
    description: 'Running models locally, building RAG pipelines, testing agents. Not chasing hype — just trying to understand what actually works.',
    rotation: -1.5,
    color: '#2c2a3a',
    terminal: ['ollama run llama3', 'loading model...', '>>> ready for inference'],
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
]

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-16"
            style={{ color: 'var(--color-text)' }}
          >
            Projects
          </h2>
        </ScrollReveal>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotate: project.rotation * 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : undefined}
              transition={{
                duration: 0.8,
                delay: i * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Polaroid
                caption={project.title}
                rotation={project.rotation}
                onClick={() => setExpandedProject(
                  expandedProject === project.id ? null : project.id
                )}
              >
                <div
                  className="w-full h-full flex items-center justify-center p-4"
                  style={{ backgroundColor: project.color, color: 'var(--color-accent)' }}
                >
                  {project.icon}
                </div>
              </Polaroid>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedProject === project.id ? 'auto' : 0,
                  opacity: expandedProject === project.id ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-3">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {project.description}
                  </p>
                  <TerminalSnippet
                    lines={project.terminal}
                    title={project.id}
                    className="text-xs"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
