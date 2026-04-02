import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'

const projects = [
  {
    index: '01',
    name: 'Ops Desk',
    summary: 'A small internal dashboard to keep an eye on services, backup checks, and recurring maintenance tasks.',
    stack: ['React', 'Status panels', 'Alert history'],
  },
  {
    index: '02',
    name: 'Ticket Triage Helper',
    summary: 'A lightweight workflow for sorting incoming IT requests, tagging urgency, and reducing repetitive manual steps.',
    stack: ['Automation', 'Forms', 'Routing rules'],
  },
  {
    index: '03',
    name: 'Device Notes Archive',
    summary: 'A tidy workspace for inventory details, setup notes, and quick-reference fixes for machines people actually use every day.',
    stack: ['Searchable records', 'Setup logs', 'Plain-language docs'],
  },
  {
    index: '04',
    name: 'Patch Window Planner',
    summary: 'A scheduling helper for updates, restart windows, and service-impact notes so maintenance stays visible and predictable.',
    stack: ['Maintenance', 'Change log', 'Team notes'],
  },
]

export function ScopeProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const [travelDistance, setTravelDistance] = useState(0)

  useEffect(() => {
    const updateTravelDistance = () => {
      const viewportWidth = viewportRef.current?.clientWidth ?? 0
      const railWidth = railRef.current?.scrollWidth ?? 0
      setTravelDistance(Math.max(railWidth - viewportWidth, 0))
    }

    updateTravelDistance()

    const resizeObserver = new ResizeObserver(() => {
      updateTravelDistance()
    })

    if (viewportRef.current) resizeObserver.observe(viewportRef.current)
    if (railRef.current) resizeObserver.observe(railRef.current)

    window.addEventListener('resize', updateTravelDistance)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateTravelDistance)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -travelDistance])
  const sectionHeight = `calc(100vh + ${travelDistance}px)`

  return (
    <section
      id="scope-projects"
      ref={sectionRef}
      className="scope-projects-section relative"
      style={{ height: sectionHeight }}
      aria-labelledby="scope-projects-title"
    >
      <div className="scope-projects-stage">
        <div className="page-shell">
          <ScrollReveal className="scope-projects-head" direction="up" distance={32}>
            <p className="scope-projects-kicker">In scope projects</p>
            <div className="scope-projects-heading-row">
              <h2 id="scope-projects-title" className="scope-projects-title">
                IT projects that belong to the practical side of the desk.
              </h2>
              <p className="scope-projects-lead">
                Scroll down and the rail moves sideways through placeholder examples tied to infrastructure,
                support workflows, maintenance, and day-to-day operational tooling.
              </p>
            </div>
          </ScrollReveal>

          <div className="scope-projects-rail-wrap">
            <div className="scope-projects-rail-hint">
              <span>Scroll down to move through projects</span>
              <span className="scope-projects-rail-line" />
            </div>

            <div ref={viewportRef} className="scope-projects-viewport">
              <motion.div ref={railRef} className="scope-projects-rail" style={{ x }} aria-label="In scope project cards">
                {projects.map((project) => (
                  <article key={project.name} className="scope-project-card">
                    <div className="scope-project-meta">
                      <p className="scope-project-index">{project.index}</p>
                      <p className="scope-project-name">{project.name}</p>
                    </div>

                    <p className="scope-project-summary">{project.summary}</p>

                    <div className="scope-project-tags">
                      {project.stack.map((tag) => (
                        <span key={tag} className="scope-project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
