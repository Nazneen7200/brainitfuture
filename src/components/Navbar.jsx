import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="fixed inset-x-0 top-0 z-30 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <div className="glass flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet shadow-[0_0_18px_-2px_rgba(168,85,247,0.7)]">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2} />
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            BrainIt<span className="text-gradient">Future</span>
          </span>
        </div>

        <span className="glass hidden items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-light opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-light" />
          </span>
          Coming Soon
        </span>
      </div>
    </motion.header>
  )
}
