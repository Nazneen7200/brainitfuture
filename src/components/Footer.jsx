import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-white/10 px-6 py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-electric to-violet">
            <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2} />
          </span>
          <span className="font-display text-sm font-semibold text-white">
            BrainIt<span className="text-gradient">Future</span>
          </span>
        </div>

        <SocialLinks />

        <p className="text-xs text-slate-500">
          &copy; 2026 BrainItFuture. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  )
}
