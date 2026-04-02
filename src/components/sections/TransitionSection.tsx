import { ScrollReveal } from '../ui/ScrollReveal'

export function TransitionSection() {
  return (
    <section
      id="between-worlds"
      className="transition-section relative overflow-hidden"
      aria-labelledby="transition-title"
    >
      <div className="page-shell flex min-h-[72vh] items-center justify-center text-center">
        <ScrollReveal direction="up" distance={36}>
          <p className="transition-kicker">Between systems and self</p>
          <h2 id="transition-title" className="transition-title">
            Not everything important in my life fits inside a ticket, a dashboard, or a deployment log.
          </h2>
        </ScrollReveal>
      </div>
    </section>
  )
}
