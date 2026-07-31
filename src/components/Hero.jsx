import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Mail, Rocket } from 'lucide-react'
import GradientButton from './GradientButton'
import SocialLinks from './SocialLinks'
import { CONTACT_EMAIL } from '../lib/constants'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero({ onNotifyClick }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-28 pb-16 text-center sm:pt-24"
    >
      <motion.div
        style={{ opacity: parallaxOpacity, y: parallaxY }}
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.span
          variants={item}
          className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 uppercase"
        >
          <Rocket className="h-3.5 w-3.5 text-violet-light" strokeWidth={2} />
          Launching Soon
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Something <span className="text-gradient">Amazing</span> is
          <br className="hidden sm:block" /> Coming.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
        >
          We&rsquo;re crafting innovative digital experiences that empower businesses to grow.{' '}
          <span className="text-slate-200">BrainItFuture</span> is launching soon.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <GradientButton variant="primary" onClick={onNotifyClick}>
            <Mail className="h-4 w-4" strokeWidth={2} />
            Notify Me
          </GradientButton>
          <GradientButton as="a" href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
            Contact Us
          </GradientButton>
        </motion.div>

        <motion.div variants={item} className="mt-12">
          <SocialLinks />
        </motion.div>
      </motion.div>

      <motion.a
        href="#countdown"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-slate-500 transition-colors hover:text-slate-300"
        aria-label="Scroll to explore"
      >
        <span className="text-[11px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  )
}
