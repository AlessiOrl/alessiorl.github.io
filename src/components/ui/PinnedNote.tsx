import { motion } from 'framer-motion'

interface PinnedNoteProps {
  text: string
  rotation?: number
  color?: string
  className?: string
  pinColor?: string
}

export function PinnedNote({
  text,
  rotation = 0,
  color,
  className = '',
  pinColor,
}: PinnedNoteProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{
        scale: 1.04,
        rotate: 0,
        transition: { duration: 0.3 },
      }}
    >
      {/* Pin */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 shadow-sm"
        style={{ backgroundColor: pinColor || 'var(--color-pin)' }}
      />
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full z-10 opacity-60"
        style={{ backgroundColor: 'var(--color-bg)' }}
      />

      {/* Note */}
      <div
        className="px-5 py-4 shadow-md max-w-xs"
        style={{
          backgroundColor: color || 'var(--color-paper)',
          boxShadow: '0 3px 12px var(--color-shadow)',
        }}
      >
        <p className="font-handwritten text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
          {text}
        </p>
      </div>
    </motion.div>
  )
}
