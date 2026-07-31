import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useMemo } from 'react'

const PARTICLE_COUNT = 28

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
    id: index,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    duration: Math.random() * 6 + 6,
    delay: Math.random() * 6,
  }))
}

export default function AnimatedBackground() {
  const particles = useMemo(generateParticles, [])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { damping: 40, stiffness: 60 })
  const springY = useSpring(mouseY, { damping: 40, stiffness: 60 })

  const blobOneX = useTransform(springX, [-0.5, 0.5], [-30, 30])
  const blobOneY = useTransform(springY, [-0.5, 0.5], [-20, 20])
  const blobTwoX = useTransform(springX, [-0.5, 0.5], [24, -24])
  const blobTwoY = useTransform(springY, [-0.5, 0.5], [16, -16])

  useEffect(() => {
    const handleMove = (event) => {
      mouseX.set(event.clientX / window.innerWidth - 0.5)
      mouseY.set(event.clientY / window.innerHeight - 0.5)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]" />

      <motion.div
        style={{ x: blobOneX, y: blobOneY }}
        className="animate-blob absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-electric/30 blur-[110px]"
      />
      <motion.div
        style={{ x: blobTwoX, y: blobTwoY }}
        className="animate-blob absolute top-1/3 -right-32 h-[30rem] w-[30rem] rounded-full bg-violet/30 blur-[110px] [animation-delay:2s]"
      />
      <motion.div
        style={{ x: blobOneX, y: blobTwoY }}
        className="animate-blob absolute bottom-[-10rem] left-1/4 h-[26rem] w-[26rem] rounded-full bg-electric-light/15 blur-[110px] [animation-delay:4s]"
      />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="animate-float absolute rounded-full bg-white/50"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 6px 1px rgba(168,85,247,0.35)',
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  )
}
