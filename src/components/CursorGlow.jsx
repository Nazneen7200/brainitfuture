import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.4 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFinePointer)
    if (!isFinePointer) return undefined

    const handleMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-40 h-[420px] w-[420px] rounded-full mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(96,165,250,0.16) 0%, rgba(168,85,247,0.10) 40%, transparent 70%)',
      }}
    />
  )
}
