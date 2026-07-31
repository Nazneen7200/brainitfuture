import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="relative flex h-20 w-20 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-electric-light border-r-violet-light"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="absolute inset-3 rounded-full border-2 border-transparent border-b-violet-light border-l-electric-light"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_4px_rgba(168,85,247,0.7)]" />
          </div>

          <motion.p
            className="font-display text-sm font-semibold tracking-[0.35em] text-transparent uppercase text-gradient"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            BrainItFuture
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
