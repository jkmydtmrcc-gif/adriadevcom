import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Facebook, Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const footerLinks = {
  usluge: [
    { to: '/usluge', label: 'Izrada web stranica' },
    { to: '/usluge', label: 'SEO optimizacija' },
    { to: '/usluge', label: 'Web shopovi' },
    { to: '/usluge', label: 'Booking sustavi' },
  ],
  stranice: [
    { to: '/', label: 'Početna' },
    { to: '/cijene', label: 'Cijene' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/o-nama', label: 'O nama' },
    { to: '/blog', label: 'Blog' },
    { to: '/kontakt', label: 'Kontakt' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-1.5 mb-4">
              <span className="font-syne font-bold text-xl text-text-primary">Adria Dev</span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Web agencija iz Hrvatske. Izrađujemo moderne web stranice i pomažemo vam da vas Google nađe — bez skrivenih troškova i s garancijom zadovoljstva.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-syne font-semibold text-text-primary mb-4">Usluge</h3>
            <ul className="space-y-2">
              {footerLinks.usluge.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-text-secondary text-sm hover:text-accent-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-syne font-semibold text-text-primary mb-4">Stranice</h3>
            <ul className="space-y-2">
              {footerLinks.stranice.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-text-secondary text-sm hover:text-accent-light transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-syne font-semibold text-text-primary mb-4">Kontakt</h3>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>
                <a href="mailto:kontakt@adriadev.com" className="flex items-center gap-2 hover:text-text-primary transition-colors">
                  kontakt@adriadev.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/385976425423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-text-primary transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  +385 97 642 5423
                </a>
              </li>
              <li>
                <a href="https://wa.me/385976425423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#8888AA] hover:text-[#25D366] transition-colors">
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-text-muted text-xs mb-2">Newsletter — savjeti za vaš online biznis</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Vaš email"
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-elevated border border-border text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors"
                >
                  Prijava
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-border text-center text-text-muted text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2025 Adria Dev. Sva prava pridržana.
        </motion.div>
      </div>
    </footer>
  )
}
