import { Helmet } from 'react-helmet-async'
import PageHero from '../components/PageHero'
import PricingSection from '../components/PricingSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparison = {
  headers: ['', 'Basic', 'Standard', 'Premium'],
  rows: [
    ['Stranice', 'Do 5', 'Do 10', 'Neograničeno'],
    ['Mobilna verzija', true, true, true],
    ['Kontakt forma', true, true, true],
    ['Booking / rezervacije', false, true, true],
    ['SSL certifikat', true, true, true],
    ['Hosting (1. godina)', true, true, true],
    ['SEO optimizacija', 'Osnovna', 'Napredna', 'Napredna'],
    ['Google Analytics', false, true, true],
    ['Blog', false, true, true],
    ['Web shop', false, false, 'Do 50 proizvoda'],
    ['Višejezičnost', false, false, 'HR + EN'],
    ['Održavanje', false, false, '3 mj besplatno'],
    ['Isporuka', '7-10 dana', '10-14 dana', '14-21 dan'],
  ],
}

function Cell({ children, isHeader }) {
  if (isHeader) {
    return (
      <th className="text-left py-4 px-4 font-syne font-semibold text-text-primary border-b border-border">
        {children}
      </th>
    )
  }
  if (children === true) return <td className="py-4 px-4 text-success"><Check size={20} /></td>
  if (children === false) return <td className="py-4 px-4 text-text-muted"><X size={18} /></td>
  return <td className="py-4 px-4 text-text-secondary text-sm">{children}</td>
}

export default function Cijene() {
  return (
    <>
      <Helmet>
        <title>Cijene — Web Stranice i SEO Paketi | Adria Dev</title>
        <meta name="description" content="Transparentne cijene za web stranice. Basic 299€, Standard 499€, Premium 799€. Hosting uključen. SEO na upit. Bez skrivenih troškova." />
        <link rel="canonical" href="https://www.adriadev.com/cijene" />
      </Helmet>
      <PageHero
        title="Transparentne cijene, bez iznenađenja"
        subtitle="Sve što dobivate za fiksnu cijenu. Vidite stranicu prije plaćanja — bez predujma za standardne pakete."
      />
      <section className="px-4 pb-12 md:pb-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="prose prose-invert max-w-none text-text-secondary text-center space-y-4"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              Naše cijene su fiksne i uključuju sve navedeno u paketu — bez doplata za „osnovne“ stvari. U svaki web paket uračunat je i <strong className="text-text-primary">hosting za prvu godinu</strong>, tako da nakon predaje stranice ne morate tražiti hosting posebno. Domena vam možemo pomoći odabrati i povezati; ako već imate domenu, prilagodimo se. SSL certifikat (https) uključen je u sve pakete. SEO optimizacija (Google, brzina, meta tagovi) dolazi u osnovnoj ili naprednoj razini ovisno o paketu; za posebne SEO projekte, redovito održavanje ili dodatne usluge cijena je <strong className="text-text-primary">na upit</strong> — prilagodit ćemo ponudu vašim ciljevima i budžetu.
            </p>
          </motion.div>
        </div>
      </section>
      <PricingSection showSeo />
      <section className="py-16 md:py-24 px-4 overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-syne font-bold text-2xl md:text-3xl text-text-primary mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Usporedba paketa
          </motion.h2>
          <motion.div
            className="rounded-2xl bg-elevated border border-border overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-surface/80">
                  {comparison.headers.map((h, i) => (
                    <Cell key={i} isHeader>{h}</Cell>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, i) => (
                  <tr key={i} className="border-b border-border/80 hover:bg-elevated/80 transition-colors">
                    <td className="py-4 px-4 text-text-secondary text-sm font-medium">{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <Cell key={j}>{cell}</Cell>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
      <FAQSection />
      <CTASection />
    </>
  )
}
