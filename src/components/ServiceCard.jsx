import { motion } from 'framer-motion'

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8 }}
      className="glass group relative overflow-hidden rounded-2xl p-7 text-left transition-colors duration-300 hover:border-violet-light/40"
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-electric/25 to-violet/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 text-violet-light ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>

      <h3 className="relative mt-5 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </motion.div>
  )
}
