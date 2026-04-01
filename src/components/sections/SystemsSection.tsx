import { ScrollReveal } from '../ui/ScrollReveal'
import { TerminalSnippet } from '../ui/TerminalSnippet'
import { PinnedNote } from '../ui/PinnedNote'

export function SystemsSection() {
  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Systems & Infrastructure
          </h2>
          <p
            className="text-center max-w-lg mx-auto mb-16 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            There's always something running in the background.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Terminal */}
          <ScrollReveal direction="left" delay={0.1}>
            <TerminalSnippet
              title="homelab"
              lines={[
                'unraid status: healthy',
                'containers: 24 running',
                'uptime: 142 days',
                'network: all services green',
              ]}
            />
          </ScrollReveal>

          {/* Philosophy notes */}
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.2}>
              <PinnedNote
                text="An Unraid server, containers, services talking to each other — a small ecosystem that keeps evolving."
                rotation={-1.5}
              />
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.35}>
              <div
                className="p-5 rounded-sm"
                style={{
                  backgroundColor: 'var(--color-paper)',
                  boxShadow: '0 2px 12px var(--color-shadow)',
                }}
              >
                <p className="font-handwritten text-lg mb-3" style={{ color: 'var(--color-accent)' }}>
                  I like systems that are:
                </p>
                <ul className="space-y-1">
                  {['reliable', 'understandable', 'mine'].map((item) => (
                    <li
                      key={item}
                      className="font-body text-sm flex items-center gap-2"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      <span style={{ color: 'var(--color-accent)' }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
