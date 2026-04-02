import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'

const toolkit = [
  'TypeScript + React',
  'Automation scripts',
  'APIs and integrations',
  'Cloud dashboards',
]

const workNotes = [
  {
    label: 'Role',
    value: 'IT generalist',
    detail: 'Keeps systems tidy, practical, and quietly reliable.',
  },
  {
    label: 'Focus',
    value: 'Modern tools',
    detail: 'Builds small workflows, dashboards, and internal utilities.',
  },
  {
    label: 'Approach',
    value: 'Rustic workspace',
    detail: 'Warm desk energy, clean code habits, and a bias for usable results.',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="page-shell relative">
        <div className="about-grid">
          <ScrollReveal className="about-intro" direction="up" distance={32}>
            <p className="about-kicker">About the builder</p>
            <h2 id="about-title" className="about-title">
              Just an IT guy making modern tools feel right at home in a worn-in workspace.
            </h2>
            <p className="about-lead">
              Placeholder for now, but the idea is simple: I like practical systems, thoughtful interfaces,
              and the kind of tooling that removes friction instead of showing off.
            </p>

            <div className="about-toolkit">
              {toolkit.map((item, index) => (
                <motion.span
                  key={item}
                  className="about-chip"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px 0px' }}
                  transition={{ delay: 0.12 + index * 0.08, duration: 0.55 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </ScrollReveal>

          <div className="about-stack">
            {workNotes.map((note, index) => (
              <ScrollReveal
                key={note.label}
                className="about-card"
                delay={0.08 * index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                distance={28}
              >
                <p className="about-card-label">{note.label}</p>
                <p className="about-card-value">{note.value}</p>
                <p className="about-card-detail">{note.detail}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="about-workbench-wrap" delay={0.12} direction="up" distance={40}>
          <div className="about-workbench">
            <div className="about-workbench-copy">
              <p className="about-workbench-kicker">Workbench log</p>
              <p className="about-workbench-title">
                The vibe is analogue at the edges, efficient at the center.
              </p>
              <p className="about-workbench-text">
                Think timber desk, notebooks, cables, coffee rings, then layer in fast deployments,
                cleaner components, and tools that actually save time. That tension is the whole point.
              </p>
            </div>

            <div className="about-terminal">
              <div className="about-terminal-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="about-terminal-body font-mono">
                <p>&gt; profile.load</p>
                <p>role: versatile it guy</p>
                <p>status: building useful things</p>
                <p>setup: rustic desk + modern stack</p>
                <p className="about-terminal-accent">result: clean tools, less friction</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
