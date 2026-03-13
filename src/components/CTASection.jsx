import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface to-accent/10" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-accent/20 blur-3xl -top-20 -right-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-accent-light/20 blur-3xl bottom-0 left-1/4"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
          Spremni za novu web stranicu?
        </h2>
        <p className="text-text-secondary text-lg md:text-xl mb-10">
          Besplatna konzultacija. Bez obveze. Vidite rezultat prije plaćanja.
        </p>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-base hover:bg-accent-light hover:shadow-accent-glow transition-all duration-200"
        >
          Kontaktirajte nas danas <ArrowRight size={20} />
        </Link>
        <p className="text-text-secondary text-sm mt-4">
          Ili nas kontaktirajte direktno:{' '}
          <a href="https://wa.me/385976425423" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline font-medium">
            WhatsApp +385 97 642 5423
          </a>
        </p>
      </motion.div>
    </section>
  )
}
