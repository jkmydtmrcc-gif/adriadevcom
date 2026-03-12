import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { Globe, TrendingUp, ShoppingCart, Calendar, Home, MapPin, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Izrada web stranica',
    short: 'Moderna, brza stranica koja konvertira — od 299€ s hostingom.',
    desc: 'Moderne, brze i mobilno prilagođene web stranice koje konvertiraju posjetitelje u klijente. Koristimo najnovije tehnologije kako bi vaša stranica bila brza, sigurna i lako pronašiva na Googleu. Bez skrivenih troškova — vidite rezultat prije nego platite.',
    benefits: ['Responsive dizajn za sve uređaje', 'Brzina učitavanja optimizirana za SEO', 'Kontakt forme i CTA', 'SSL certifikat uključen', 'Osnovna ili napredna SEO optimizacija', 'Hosting i domena savjetovanje'],
    fromPrice: '299',
    href: '/kontakt',
  },
  {
    icon: TrendingUp,
    title: 'SEO optimizacija',
    short: 'Više prometa s Googlea — ključne riječi, brzina, sadržaj. Cijena na upit.',
    desc: 'Povećajte vidljivost na Googleu i dovedite više organičkog prometa. Radimo na ključnim riječima, tehničkom SEO-u, brzini stranice i kvaliteti sadržaja. Izvještaji i preporuke redovito. Cijena prilagođena vašim potrebama.',
    benefits: ['Analiza ključnih riječi', 'Tehnički SEO (meta, struktura, brzina)', 'Optimizacija sadržaja', 'Google My Business', 'Mjesečni izvještaji', 'Blog i sadržaj za SEO'],
    fromPrice: 'na upit',
    href: '/kontakt',
  },
  {
    icon: ShoppingCart,
    title: 'Web shopovi',
    short: 'Prodajte online bez provizija platformi — kartice, virman, poštarina.',
    desc: 'Prodajte online bez visokih provizija platformi. Jednostavan admin panel, plaćanja putem kartica i virmana, poštarina i skladište. Idealno za male i srednje proizvodače i trgovce.',
    benefits: ['Neograničeni proizvodi (ovisno o paketu)', 'Plaćanja: kartice, virman', 'Upravljanje narudžbama', 'Poštarina i dostava', 'Bez mjesečne provizije platformi', 'Mobilna trgovina'],
    fromPrice: '499',
    href: '/kontakt',
  },
  {
    icon: Calendar,
    title: 'Booking sustavi',
    short: 'Online rezervacije za salone i restorane — termini, obavijesti, depozit.',
    desc: 'Online rezervacije za salone, restorane, teretane i uslužne djelatnosti. Gosti rezerviraju termin, vi primate obavijest. Smanjite prazne termine i uštedite vrijeme.',
    benefits: ['Kalendar i raspored termina', 'Email/SMS obavijesti', 'Depozit ili plaćanje unaprijed', 'Integracija s vašim stranicama', 'Pregled rezervacija u jednom mjestu', 'Podrška za više lokacija'],
    fromPrice: '299',
    href: '/kontakt',
  },
  {
    icon: Home,
    title: 'Apartmanske stranice',
    short: 'Direktni booking bez Airbnb provizije — kalendar, kapara, više jezika.',
    desc: 'Direktni bookingovi bez Airbnb i Booking.com provizija. Vaši gosti rezerviraju direktno s vama — vi zadržavate punu cijenu. Posebno prilagođeno za iznajmljivače u Hrvatskoj.',
    benefits: ['Kalendar dostupnosti', 'Online plaćanje ili kapara', 'Višejezičnost (HR, EN, DE)', 'Galerija i opisi', 'Cjenici po sezonama', 'Ušteda na provizijama'],
    fromPrice: '499',
    href: '/kontakt',
  },
  {
    icon: MapPin,
    title: 'Google My Business',
    short: 'Optimizirajte Google profil — fotografije, recenzije, lokalni SEO. Na upit.',
    desc: 'Optimizacija vašeg Google profila kako bi vas lokalni kupci lakše pronašli. Fotografije, radno vrijeme, recenzije i kategorije — sve uredno i profesionalno. Cijena na upit.',
    benefits: ['Optimizacija profila', 'Fotografije i opisi', 'Radno vrijeme i kontakt', 'Odgovori na recenzije', 'Kategorije i usluge', 'Lokalni SEO savjeti'],
    fromPrice: 'na upit',
    href: '/kontakt',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Usluge() {
  return (
    <>
      <Helmet>
        <title>Usluge — Izrada Web Stranica, SEO, Web Shopovi | Adria Dev</title>
        <meta name="description" content="Izrada web stranica, SEO optimizacija, web shopovi, booking sustavi i apartmanske stranice. Profesionalne usluge za hrvatske biznise." />
        <link rel="canonical" href="https://www.adriadev.com/usluge" />
      </Helmet>
      <PageHero
        title="Naše usluge"
        subtitle="Od prezentacijske stranice do web shopa i naprednog SEO-a. Sve što vam treba za uspjeh na internetu — transparentno i bez iznenađenja."
      />
      <section className="px-4 py-10 md:py-14">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="rounded-2xl bg-elevated/80 border border-border/80 px-6 py-8 md:px-10 md:py-10 text-center"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-syne font-semibold text-lg text-text-primary mb-4">
              Što nudimo
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Na ovoj stranici predstavljamo sve usluge: izrada web stranica (od 299€ s hostingom), web shopovi, booking sustavi za restorane i salone, apartmanske stranice za direktne bookinge te SEO i Google My Business.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Za web pakete imate fiksnu cijenu; za SEO i prilagođene projekte cijena je na upit. Svaki projekt prilagodimo vašim potrebama — pošaljite upit i opisat ćemo što možemo ponuditi i za koliko.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pregled usluga — animirani grid koji ispunjava prostor */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full opacity-[0.07] blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'linear-gradient(135deg, #6C5CE7, #A29BFE)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <motion.h2
            className="font-syne font-bold text-2xl md:text-3xl text-text-primary text-center mb-4"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Sve usluge na jednom mjestu
          </motion.h2>
          <motion.p
            className="text-text-secondary text-center max-w-2xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kliknite ili scrollajte dolje za detaljan opis svake usluge, uključene benefite i cijene.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={item}
                className="group relative rounded-2xl bg-elevated/90 border border-border p-6 md:p-7 hover:border-accent/50 transition-colors duration-300"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 35px rgba(108, 92, 231, 0.25)',
                  transition: { duration: 0.25 },
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/30 transition-colors"
                  whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }
                >
                  <s.icon size={24} />
                </motion.div>
                <h3 className="font-syne font-semibold text-lg text-text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {s.short}
                </p>
                <span className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 text-accent-light text-xs font-medium transition-opacity duration-200 flex items-center gap-1">
                  Detalji dolje <ArrowRight size={14} />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-6 md:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-syne font-bold text-xl md:text-2xl text-text-primary text-center mb-10"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Detaljno o svakoj usluzi
          </motion.h2>
          <motion.div
            className="space-y-8 md:space-y-10"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map((s) => (
              <motion.article
                key={s.title}
                variants={item}
                className="group rounded-2xl bg-elevated border border-border p-6 md:p-8 lg:p-10 hover:border-accent/50 transition-colors duration-300"
                whileHover={{ boxShadow: '0 0 40px rgba(108, 92, 231, 0.2)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 md:gap-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/30 transition-colors">
                    <s.icon size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-syne font-bold text-xl md:text-2xl lg:text-3xl text-text-primary mb-3">
                      {s.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-5">
                      {s.desc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {s.benefits.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-text-secondary text-sm">
                          <Check className="text-success shrink-0" size={18} />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-mono text-lg md:text-xl text-accent-light font-semibold">
                        {s.fromPrice === 'na upit' ? 'Na upit' : `od ${s.fromPrice}€`}
                      </span>
                      <Link
                        to={s.href}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent/20 text-accent-light font-medium text-sm hover:bg-accent hover:text-white transition-colors duration-200"
                      >
                        Zatražite ponudu <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
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
