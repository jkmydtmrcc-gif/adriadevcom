import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const webPackages = [
  {
    name: 'Basic',
    price: '299',
    period: 'Jednokratno',
    features: ['Do 5 stranica', 'Mobilna verzija', 'Kontakt forma', 'SSL certifikat', 'Hosting 1. godina uključen', 'Domena savjetovanje', 'Osnovna SEO optimizacija', 'Isporuka: 7-10 dana'],
    cta: 'Odaberite Basic',
    href: '/kontakt',
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '499',
    period: 'Jednokratno',
    features: ['Do 10 stranica', 'Mobilna verzija', 'Kontakt forma + booking', 'SSL certifikat', 'Hosting 1. godina uključen', 'Google Analytics', 'Blog sekcija', 'Napredna SEO optimizacija', 'Isporuka: 10-14 dana'],
    cta: 'Odaberite Standard',
    href: '/kontakt',
    highlighted: true,
    badge: 'Najpopularnije',
  },
  {
    name: 'Premium',
    price: '799',
    period: 'Jednokratno',
    features: ['Neograničene stranice', 'Sve iz Standard paketa', 'Web shop (do 50 proizvoda)', 'Višejezičnost (HR + EN)', 'Hosting 1. godina uključen', 'Prioritetna podrška', 'Besplatno održavanje 3 mj', 'Isporuka: 14-21 dan'],
    cta: 'Odaberite Premium',
    href: '/kontakt',
    highlighted: false,
  },
]

export default function PricingSection({ showSeo = false, compact = false }) {
  return (
    <section className={`px-4 ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28'}`}>
      <div className="max-w-6xl mx-auto">
        {!compact && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
              Transparentne cijene
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Bez skrivenih troškova. Plaćate tek kad vidite gotovu stranicu.
            </p>
          </motion.div>
        )}

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {webPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={{
                hidden: { opacity: 0, y: 56 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className={`relative rounded-2xl border p-6 md:p-8 flex flex-col ${
                pkg.highlighted
                  ? 'bg-elevated border-accent shadow-accent-glow'
                  : 'bg-elevated border-border hover:border-accent/50'
              }`}
              whileHover={{ scale: 1.04, boxShadow: pkg.highlighted ? '0 0 55px rgba(108, 92, 231, 0.4)' : '0 0 40px rgba(108, 92, 231, 0.25)' }}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-medium">
                  {pkg.badge}
                </span>
              )}
              <h3 className="font-syne font-bold text-xl text-text-primary mb-1">{pkg.name}</h3>
              <div className="mt-4 mb-6">
                <span className="font-mono text-3xl md:text-4xl font-bold text-accent-light">{pkg.price}€</span>
                <span className="text-text-secondary text-sm ml-1">{pkg.period}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                    <Check className="text-success shrink-0 mt-0.5" size={18} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={pkg.href}
                className={`block text-center py-3 px-4 rounded-full font-medium text-sm transition-all ${
                  pkg.highlighted
                    ? 'bg-accent text-white hover:bg-accent-light hover:shadow-accent-glow'
                    : 'border border-border text-text-primary hover:border-accent hover:text-accent-light'
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {showSeo && (
          <>
            <motion.h3
              className="font-syne font-bold text-2xl text-text-primary mt-16 mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              SEO i dodatne usluge
            </motion.h3>
            <motion.p
              className="text-text-secondary text-center text-sm mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Cijena SEO optimizacije, Google My Business, link buildinga i redovitog održavanja ovisi o vašim potrebama. Pošaljite upit i prilagodit ćemo ponudu.
            </motion.p>
            <motion.div
              className="rounded-2xl bg-elevated border border-accent/40 p-8 text-center max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="font-syne font-semibold text-xl text-text-primary">SEO i održavanje — na upit</h4>
              <p className="text-text-secondary text-sm mt-2">Google My Business, napredna optimizacija, blog postovi, mjesečno održavanje — sve prema dogovoru.</p>
              <Link to="/kontakt" className="inline-block mt-4 px-6 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors">
                Zatražite ponudu →
              </Link>
            </motion.div>
          </>
        )}

        <motion.p
          className="text-center text-text-secondary text-sm mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-1"><Check className="text-success" size={16} /> Hosting 1. godina uključen</span>
          <span className="flex items-center gap-1"><Check className="text-success" size={16} /> Vidite stranicu prije plaćanja</span>
          <span className="flex items-center gap-1"><Check className="text-success" size={16} /> Bez skrivenih troškova</span>
          <span className="flex items-center gap-1"><Check className="text-success" size={16} /> Zadovoljstvo ili vraćamo novac</span>
        </motion.p>
      </div>
    </section>
  )
}
