import { ScrollReveal } from './ScrollReveal'

interface SectionTransitionProps {
  text: string
  className?: string
}

export function SectionTransition({ text, className = '' }: SectionTransitionProps) {
  return (
    <ScrollReveal className={`py-16 md:py-24 text-center ${className}`}>
      <p
        className="font-handwritten text-2xl md:text-3xl italic max-w-md mx-auto px-6"
        style={{ color: 'var(--color-text-muted)' }}
      >
        "{text}"
      </p>
    </ScrollReveal>
  )
}
