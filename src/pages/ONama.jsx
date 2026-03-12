import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { Shield, Zap, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Transparentnost',
    desc: 'Bez skrivenih troškova. Kažemo vam točno što dobivate i koliko košta. Vidite stranicu prije nego platite — nikad obrnuto.',
  },
  {
    icon: Zap,
    title: 'Kvaliteta',
    desc: 'Moderne tehnologije, brza učitavanja, čist kod. Vaša stranica radi na svim uređajima i zadužuje Google, ne samo lijepo izgleda.',
  },
  {
    icon: Heart,
    title: 'Brzina',
    desc: 'Isporuka u 7–21 dan ovisno o paketu. Komunikacija bez odgađanja. Kad kažemo rok, držimo ga.',
  },
]

const reasons = [
  'Vidite stranicu prije plaćanja — nikad ne plaćate „na slijepo“.',
  'Fiksne cijene bez skrivenih doplata za osnovne stvari.',
  'Sve pod jednim krovom: dizajn, razvoj, hosting savjeti, SEO.',
  'Prilagođeno malim i srednjim biznisima u Hrvatskoj.',
  'Garancija zadovoljstva: ako niste zadovoljni, ne naplaćujemo.',
  'Brza isporuka i jasna komunikacija od prvog kontakta.',
]

export default function ONama() {
  return (
    <>
      <Helmet>
        <title>O nama — Adria Dev Web Agencija</title>
        <meta name="description" content="Adria Dev je web agencija iz Hrvatske. Izrađujemo moderne web stranice i pružamo SEO usluge za male i srednje biznise." />
        <link rel="canonical" href="https://www.adriadev.com/o-nama" />
      </Helmet>
      <PageHero
        title="Tko smo mi"
        subtitle="Mala agencija s velikim standardima. Naša misija: svaki hrvatski biznis zaslužuje profesionalnu online prisutnost po pristupačnoj cijeni."
      />

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Adria Dev je nastao iz jednostavne ideje — mali biznisi zaslužuju profesionalnu online prisutnost po pristupačnoj cijeni. Previše restorana, salona i obrta nema nikakvu stranicu ili ima zastarjelu koja ne donosi rezultate. Previše iznajmljivača plaća velike provizije platformama umjesto da investira u vlastitu stranicu.
            </p>
            <p>
              Mi to mijenjamo. Radimo moderne, brze stranice koje konvertiraju; pomažemo vam da vas Google nađe; i ne tražimo predujam — vidite rezultat, pa odlučite. Transparentnost i kvaliteta su u središtu svega što radimo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-surface/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-syne font-bold text-2xl md:text-3xl text-text-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Naše vrijednosti
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {},
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                className="rounded-2xl bg-elevated border border-border p-6 md:p-8 text-center hover:border-accent/40 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-accent mx-auto mb-4">
                  <v.icon size={28} />
                </div>
                <h3 className="font-syne font-semibold text-xl text-text-primary mb-2">{v.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-syne font-bold text-2xl md:text-3xl text-text-primary text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Zašto mi?
          </motion.h2>
          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } }, hidden: {} }}
          >
            {reasons.map((r, i) => (
              <motion.li
                key={i}
                variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="w-6 h-6 rounded-full bg-accent/30 text-accent flex items-center justify-center text-xs font-mono shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {r}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-surface/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-text-secondary leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tim Adria Dev čine dizajneri i developeri s iskustvom u webu i marketingu. Radimo isključivo za klijente koji cijene jasnu komunikaciju i konkretne rezultate. Ako to zvuči kao vi — javite se za besplatnu konzultaciju.
          </motion.p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
