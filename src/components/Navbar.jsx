import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const navLinks = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/cijene', label: 'Cijene' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/o-nama', label: 'O nama' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[400ms] ${
          scrolled ? 'bg-surface/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-1.5 group">
              <span className="font-syne font-bold text-xl md:text-2xl text-text-primary group-hover:text-accent-light transition-colors">
                Adria Dev
              </span>
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(108,92,231,0.6)]" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-2"
                >
                  {label}
                  {location.pathname === to && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/385976425423"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:text-[#20c05a] text-sm font-medium transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                +385 97 642 5423
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center px-5 py-2.5 rounded-full bg-accent text-white font-medium text-sm hover:bg-accent-light hover:shadow-accent-glow transition-all duration-200"
              >
                Besplatna ponuda
              </Link>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-text-primary"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Meni"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              className="absolute inset-0 bg-bg/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="absolute top-20 left-4 right-4 rounded-2xl bg-elevated border border-border p-6 shadow-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map(({ to, label }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={to}
                      className={`block py-2 text-lg font-medium ${
                        location.pathname === to ? 'text-accent' : 'text-text-primary'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <a
                  href="https://wa.me/385976425423"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp +385 97 642 5423
                </a>
                <Link
                  to="/kontakt"
                  className="mt-2 inline-flex justify-center items-center px-5 py-3 rounded-full bg-accent text-white font-medium"
                >
                  Besplatna ponuda
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
