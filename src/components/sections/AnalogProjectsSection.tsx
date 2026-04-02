import type { CSSProperties } from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'

const analogProjects = [
  {
    title: 'Small Batch Liquor',
    caption: 'Testing infusions, labels, and bottle notes with a kitchen-lab mindset.',
    note: 'amber / herbs / late evening',
    angle: '-3deg',
    tint: 'var(--polaroid-liquor)',
  },
  {
    title: 'Bread Weekends',
    caption: 'A placeholder project around fermentation, timing, and getting a loaf just right.',
    note: 'starter / flour dust / patience',
    angle: '2deg',
    tint: 'var(--polaroid-bread)',
  },
  {
    title: 'Coffee Ritual',
    caption: 'Dialing in grind, water, and routine until the whole process feels intentional.',
    note: 'beans / steam / morning light',
    angle: '-2deg',
    tint: 'var(--polaroid-coffee)',
  },
  {
    title: 'Table Experiments',
    caption: 'Tiny food-and-drink ideas, plated casually, documented like field notes.',
    note: 'wood / glass / notebook',
    angle: '3deg',
    tint: 'var(--polaroid-table)',
  },
]

export function AnalogProjectsSection() {
  return (
    <section
      id="analog-projects"
      className="analog-section relative overflow-hidden py-20 md:py-28"
      aria-labelledby="analog-projects-title"
    >
      <div className="page-shell">
        <ScrollReveal className="analog-head" direction="up" distance={34}>
          <p className="analog-kicker">Beyond the IT desk</p>
          <div className="analog-heading-row">
            <h2 id="analog-projects-title" className="analog-title">
              Projects shaped more by taste, process, and atmosphere than by tickets.
            </h2>
            <p className="analog-lead">
              Placeholder examples for the slower side of the workbench: liquor, bread, coffee,
              and other hands-on experiments that still carry the same love for craft.
            </p>
          </div>
        </ScrollReveal>

        <div className="analog-polaroid-grid">
          {analogProjects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              className="analog-polaroid-item"
              delay={0.08 * index}
              direction="up"
              distance={30}
            >
              <article
                className="analog-polaroid"
                style={{ '--polaroid-rotate': project.angle } as CSSProperties}
              >
                <div className="analog-polaroid-frame">
                  <div
                    className="analog-polaroid-photo"
                    style={{ '--polaroid-tint': project.tint } as CSSProperties}
                  >
                    <div className="analog-polaroid-glow" />
                    <p className="analog-polaroid-note">{project.note}</p>
                  </div>

                  <div className="analog-polaroid-copy">
                    <p className="analog-polaroid-title">{project.title}</p>
                    <p className="analog-polaroid-caption">{project.caption}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
