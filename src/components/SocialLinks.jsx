import { motion } from 'framer-motion'
import { GithubIcon, InstagramIcon, LinkedinIcon } from './icons/BrandIcons'
import { SOCIAL_LINKS } from '../lib/constants'

const ICONS = {
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  github: GithubIcon,
}

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ name, href, icon }) => {
        const Icon = ICONS[icon]
        return (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300 transition-colors duration-200 hover:text-white"
            whileHover={{ y: -4, scale: 1.08, borderColor: 'rgba(168,85,247,0.6)' }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
          >
            <Icon className="h-[18px] w-[18px]" />
          </motion.a>
        )
      })}
    </div>
  )
}
