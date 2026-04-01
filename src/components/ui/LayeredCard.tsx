import { type ReactNode } from 'react'

interface LayeredCardProps {
  children: ReactNode
  layers?: number
  className?: string
}

export function LayeredCard({ children, layers = 2, className = '' }: LayeredCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Background layers */}
      {Array.from({ length: layers }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-sm"
          style={{
            backgroundColor: 'var(--color-paper)',
            transform: `rotate(${(i + 1) * 1.5}deg) translate(${(i + 1) * 2}px, ${(i + 1) * 2}px)`,
            boxShadow: '0 2px 8px var(--color-shadow)',
            zIndex: -i - 1,
          }}
        />
      ))}

      {/* Main card */}
      <div
        className="relative rounded-sm p-6"
        style={{
          backgroundColor: 'var(--color-paper)',
          boxShadow: '0 4px 16px var(--color-shadow)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
