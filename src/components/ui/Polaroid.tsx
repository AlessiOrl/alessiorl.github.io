import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface PolaroidProps {
  children?: ReactNode
  caption?: string
  rotation?: number
  className?: string
  bgColor?: string
  onClick?: () => void
}

export function Polaroid({
  children,
  caption,
  rotation = 0,
  className = '',
  bgColor,
  onClick,
}: PolaroidProps) {
  return (
    <motion.div
      className={`relative inline-block cursor-pointer ${className}`}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        y: -8,
        transition: { duration: 0.3 },
      }}
      onClick={onClick}
    >
      {/* Tape */}
      <div className="tape tape-top" />

      {/* Frame */}
      <div
        className="p-3 pb-12 shadow-lg"
        style={{
          backgroundColor: 'var(--color-paper)',
          boxShadow: '0 4px 20px var(--color-shadow), 0 2px 8px var(--color-shadow)',
        }}
      >
        {/* Image area */}
        <div
          className="w-full aspect-square overflow-hidden"
          style={{
            backgroundColor: bgColor || 'var(--color-bg-secondary)',
            minWidth: '160px',
          }}
        >
          {children || (
            <div className="w-full h-full flex items-center justify-center opacity-30">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <p
            className="font-handwritten text-lg mt-2 text-center"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {caption}
          </p>
        )}
      </div>
    </motion.div>
  )
}
