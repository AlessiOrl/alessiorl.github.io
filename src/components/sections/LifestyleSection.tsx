import { ScrollReveal } from '../ui/ScrollReveal'
import { Polaroid } from '../ui/Polaroid'
import { LayeredCard } from '../ui/LayeredCard'

const lifestyleItems = [
  {
    title: 'Coffee',
    emoji: '☕',
    description: "Coffee is part of the process. Lately, mostly Ethiopian — bright, complex, never boring.",
    rotation: -3,
    bgColor: '#3a2e24',
  },
  {
    title: 'Agrumello',
    emoji: '🍋',
    description: "A small experiment that turned into a ritual. A citrus twist on limoncello, made at home and refined over time.",
    rotation: 2,
    bgColor: '#3a3624',
  },
  {
    title: 'Cooking',
    emoji: '🍕',
    description: "Pizza, focaccia, anything that improves with iteration. Same mindset as everything else: try, adjust, try again.",
    rotation: -1,
    bgColor: '#2e3a28',
  },
]

export function LifestyleSection() {
  return (
    <section className="relative py-16 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-heading text-2xl md:text-3xl text-center mb-16"
            style={{ color: 'var(--color-text)' }}
          >
            Beyond Code
          </h2>
        </ScrollReveal>

        {/* Scrapbook layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {lifestyleItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="space-y-4">
                {/* Polaroid */}
                <Polaroid caption={item.title} rotation={item.rotation}>
                  <div
                    className="w-full h-full flex items-center justify-center text-4xl"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    {item.emoji}
                  </div>
                </Polaroid>

                {/* Description card */}
                <LayeredCard layers={1}>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {item.description}
                  </p>
                </LayeredCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
