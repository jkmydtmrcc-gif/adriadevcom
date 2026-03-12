import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Stranica nije pronađena | Adria Dev</title>
      </Helmet>
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-24">
        <div className="text-center">
          <motion.div
            className="font-syne font-bold text-8xl md:text-9xl text-accent/30 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.div>
          <motion.h1
            className="font-syne font-bold text-2xl md:text-3xl text-text-primary mb-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Stranica nije pronađena
          </motion.h1>
          <motion.p
            className="text-text-secondary mb-8 max-w-md mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Možda ste unijeli krivu adresu ili je stranica premještena.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-light transition-colors"
            >
              <Home size={20} /> Natrag na početnu
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
