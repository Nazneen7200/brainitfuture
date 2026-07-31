import { motion } from 'framer-motion'

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-light/60'

const variants = {
  primary: 'text-white shadow-[0_0_30px_-5px_rgba(99,102,241,0.6)]',
  secondary: 'glass text-slate-100 hover:border-white/25',
}

export default function GradientButton({
  as = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const Component = motion[as] ?? motion.button

  return (
    <Component
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.045, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      {...props}
    >
      {variant === 'primary' && (
        <span className="animate-gradient-x absolute inset-0 -z-10 rounded-full bg-[linear-gradient(90deg,#3b82f6,#a855f7,#3b82f6)] bg-[length:200%_200%]" />
      )}
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-70 bg-[linear-gradient(90deg,#60a5fa,#c084fc)]" />
      )}
      {children}
    </Component>
  )
}
