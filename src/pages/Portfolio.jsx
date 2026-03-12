import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { ExternalLink } from 'lucide-react'

const categories = ['Sve', 'Web stranice', 'Web shopovi', 'SEO', 'Apartmani']

const projects = [
  { title: 'Restoran Adriatic', industry: 'Gastronomija', desc: 'Prezentacijska stranica s rezervacijama i jelovnikom.', category: 'Web stranice', slug: 'restoran-adriatic' },
  { title: 'Salon Glam', industry: 'Ljepota', desc: 'Frizerski salon s online rezervacijama i galerijom.', category: 'Web stranice', slug: 'salon-glam' },
  { title: 'Trgovina Mediteran', industry: 'Trgovina', desc: 'Web shop s plaćanjem karticom i virmanom.', category: 'Web shopovi', slug: 'trgovina-mediteran' },
  { title: 'Apartmani Bačvice', industry: 'Smještaj', desc: 'Direktni booking bez provizija, višejezično.', category: 'Apartmani', slug: 'apartmani-bacvice' },
  { title: 'Fitness Centar Power', industry: 'Sport', desc: 'Stranica s rasporedom, cijenikom i kontaktom.', category: 'Web stranice', slug: 'fitness-power' },
  { title: 'Odvjetnički ured Kovač', industry: 'Usluge', desc: 'Profesionalna prezentacija s blogom i SEO optimizacijom.', category: 'SEO', slug: 'odvjetnicki-kovac' },
  { title: 'Vinska kuća Dalmatia', industry: 'Gastronomija', desc: 'Web shop vina i turistička prezentacija.', category: 'Web shopovi', slug: 'vinska-kuca-dalmatia' },
  { title: 'Villa Sunset', industry: 'Smještaj', desc: 'Luksuzni apartmani s booking sustavom i galerijom.', category: 'Apartmani', slug: 'villa-sunset' },
]

export default function Portfolio() {
  const [activeCat, setActiveCat] = useState('Sve')

  const filtered = activeCat === 'Sve'
    ? projects
    : projects.filter((p) => p.category === activeCat)

  return (
    <>
      <Helmet>
        <title>Portfolio — Naši Radovi | Adria Dev</title>
        <meta name="description" content="Pogledajte projekte Adria Dev: web stranice, web shopovi i SEO za hrvatske biznise." />
        <link rel="canonical" href="https://www.adriadev.com/portfolio" />
      </Helmet>
      <PageHero
        title="Naši radovi"
        subtitle="Projekti koje smo realizirali za restorane, salone, trgovine i iznajmljivače diljem Hrvatske."
      />
      <section className="px-4 pb-10">
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="text-text-secondary text-center leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ovdje možete pregledati primjere naših projekata: web stranice s rezervacijama, web shopove, apartmanske stranice s direktnim bookingom i stranice s naprednom SEO optimizacijom. Svi projekti su prilagođeni klijentima iz Hrvatske — različite branše, od gastronomije i ljepote do smještaja i trgovine. Ako tražite sličan rezultat za svoj biznis, <Link to="/kontakt" className="text-accent-light hover:underline">javite nam se</Link> i predložit ćemo vam odgovarajući paket.
          </motion.p>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCat === cat
                    ? 'bg-accent text-white'
                    : 'bg-elevated border border-border text-text-secondary hover:text-text-primary hover:border-accent/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
          >
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group rounded-2xl bg-elevated border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-accent-glow/30"
              >
                <div className="aspect-video bg-gradient-to-br from-accent/30 to-accent-light/20 flex items-center justify-center text-4xl text-text-muted">
                  {p.industry === 'Gastronomija' && '🍽️'}
                  {p.industry === 'Ljepota' && '💇'}
                  {p.industry === 'Trgovina' && '🛒'}
                  {p.industry === 'Smještaj' && '🏠'}
                  {p.industry === 'Sport' && '💪'}
                  {p.industry === 'Usluge' && '⚖️'}
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-accent-light bg-accent/20 px-2 py-1 rounded">
                    {p.category}
                  </span>
                  <h3 className="font-syne font-semibold text-lg text-text-primary mt-2 mb-1">{p.title}</h3>
                  <p className="text-text-muted text-xs mb-2">{p.industry}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className="inline-flex items-center gap-1 text-accent-light text-sm font-medium group-hover:gap-2 transition-all">
                    Pogledaj <ExternalLink size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
