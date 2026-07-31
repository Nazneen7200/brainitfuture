import { AnimatePresence, motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import { LAUNCH_DATE } from '../lib/constants'

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

function pad(value) {
  return String(value).padStart(2, '0')
}

export default function CountdownTimer() {
  const timeLeft = useCountdown(LAUNCH_DATE)

  return (
    <section id="countdown" className="relative px-6 py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
          We&rsquo;re launching in
        </h2>
        <p className="mt-2 text-sm text-slate-500">Mark your calendar — the countdown has begun.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {UNITS.map(({ key, label }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass relative flex w-24 flex-col items-center overflow-hidden rounded-2xl py-6 sm:w-32"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-light/60 to-transparent" />
              <div className="relative h-10 overflow-hidden font-display text-3xl font-semibold text-white sm:text-4xl">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={timeLeft[key]}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="block"
                  >
                    {pad(timeLeft[key])}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="mt-2 text-[11px] tracking-[0.2em] text-slate-500 uppercase">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
