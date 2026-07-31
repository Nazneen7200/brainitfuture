import { AnimatePresence, motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { CheckCircle2, Mail, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import GradientButton from './GradientButton'

export default function NotifyModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return
    setEmail('')
    setSubmitted(false)
  }, [open])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#a855f7', '#60a5fa', '#c084fc'],
    })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="glass relative w-full max-w-md rounded-2xl p-7 sm:p-8"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-5 right-5 text-slate-500 transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 text-violet-light ring-1 ring-white/10">
                  <Mail className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  Be first to know
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Drop your email and we&rsquo;ll let you know the moment BrainItFuture goes live.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-violet-light/50 focus:ring-2 focus:ring-violet-light/20"
                  />
                  <GradientButton type="submit" variant="primary" className="w-full">
                    Notify Me
                  </GradientButton>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center py-4 text-center"
              >
                <CheckCircle2 className="h-12 w-12 text-violet-light" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-xl font-semibold text-white">
                  You&rsquo;re on the list!
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  We&rsquo;ll email <span className="text-slate-200">{email}</span> as soon as we
                  launch.
                </p>
                <GradientButton variant="secondary" className="mt-6" onClick={onClose}>
                  Done
                </GradientButton>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
