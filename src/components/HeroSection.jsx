import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Check } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const phrases = [
  'Napravimo vašu web stranicu',
  'Povećamo vaš Google ranking',
  'Dovedemo vam više klijenata',
]

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2500)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setPhraseIndex((i) => (i + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 60 : 80
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, phraseIndex])

  const trustBadges = [
    'Plaćate tek kad vidite',
    'Isporuka za 2-3 tjedna',
    'Besplatna konzultacija',
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-16 px-4">
      {/* Floating blobs — sporo, organično */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[550px] h-[550px] rounded-full opacity-25 blur-3xl -top-40 -left-40"
          style={{ background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)' }}
          animate={{ y: [0, 60, 0], x: [0, 30, 0], scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full opacity-20 blur-3xl top-1/2 right-0"
          style={{ background: 'linear-gradient(135deg, #A29BFE, #6C5CE7)' }}
          animate={{ y: [0, -50, 0], x: [0, -25, 0], scale: [1.05, 1, 1.05], rotate: [0, -4, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute w-[350px] h-[350px] rounded-full opacity-15 blur-3xl bottom-20 left-1/3"
          style={{ background: '#6C5CE7' }}
          animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          className="text-accent-light font-medium text-sm md:text-base mb-4 uppercase tracking-wider"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Web stranice i SEO za hrvatske biznise
        </motion.p>
        <motion.h1
          className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6 min-h-[1.2em]"
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className="animate-pulse" aria-hidden>|</span>
        </motion.h1>
        <motion.p
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          Moderna web stranica i SEO optimizacija za vaš biznis. Vidite rezultat prije nego platite.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            to="/cijene"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent-light hover:shadow-accent-glow transition-all duration-200"
          >
            Pogledajte cijene
          </Link>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-border text-text-primary font-semibold text-base hover:border-accent hover:text-accent-light transition-all duration-200"
          >
            Besplatna konzultacija
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-10 text-text-secondary text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {trustBadges.map((badge, i) => (
            <span key={i} className="flex items-center gap-2">
              <Check className="text-success shrink-0" size={18} />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-muted"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>

      {/* Floating WhatsApp badge */}
      <motion.a
        href="https://wa.me/385976425423"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed right-4 sm:right-6 bottom-20 sm:bottom-24 z-40 flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-[#20c05a] transition-colors text-sm font-medium"
      >
        <WhatsAppIcon className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline">Pišite nam</span>
      </motion.a>
    </section>
  )
}
