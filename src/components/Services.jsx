import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { SERVICES } from '../lib/constants'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-violet-light uppercase">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
            Built to power your growth
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            From idea to launch, we design and build the technology that moves your business
            forward.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
