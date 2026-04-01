import { useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion'
import { type RefObject } from 'react'

interface UseScrollSectionOptions {
  target: RefObject<HTMLElement | null>
  offset?: [string, string]
}

export function useScrollSection({ target, offset = ['start end', 'end start'] }: UseScrollSectionOptions) {
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as any,
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return { scrollYProgress, smoothProgress }
}

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export function useSeedRandom(seed: number) {
  // Simple seeded pseudo-random for consistent "random" positions
  const random = (min: number, max: number) => {
    const x = Math.sin(seed++) * 10000
    const r = x - Math.floor(x)
    return min + r * (max - min)
  }

  return { random }
}
