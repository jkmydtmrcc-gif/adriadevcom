import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Moram li platiti unaprijed?',
    a: 'Ne. Vidite stranicu, pregledate je, i tek kad ste zadovoljni platite. Ne tražimo predujam za standardne pakete.',
  },
  {
    q: 'Koliko traje izrada?',
    a: 'Ovisno o paketu: Basic 7-10 dana, Standard 10-14 dana, Premium 14-21 dan. Nakon konzultacije dajemo točan rok.',
  },
  {
    q: 'Što ako mi se ne sviđa?',
    a: 'Besplatne izmjene dok niste zadovoljni. Ako nakon revizija i dalje niste zadovoljni, ne naplaćujemo — jednostavno je to.',
  },
  {
    q: 'Trebam li znati nešto o web stranicama?',
    a: 'Ne. Mi se brinemo za sve — hosting, domenu, SSL, brzinu, SEO. Vi samo kažete što želite i dobivate gotovu stranicu.',
  },
  {
    q: 'Mogu li sam uređivati stranicu?',
    a: 'Da. Dobivate pristup i kratku obuku. Ako želite, možemo i dalje raditi izmjene za vas po dogovoru.',
  },
  {
    q: 'Što uključuje SEO?',
    a: 'Optimizacija za Google (meta tagovi, brzina, struktura), osnovno ili napredno ovisno o paketu. Google My Business, Analytics i savjeti za sadržaj.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-text-secondary text-lg">
            Odgovori na pitanja koja nam najčešće postavljate.
          </p>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
            hidden: {},
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0 },
              }}
              className="rounded-xl bg-elevated border border-border overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-4 md:p-5 text-left font-syne font-semibold text-text-primary hover:bg-elevated/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="text-text-muted shrink-0" size={20} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 md:px-5 md:pb-5 text-text-secondary text-sm leading-relaxed border-t border-border pt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
