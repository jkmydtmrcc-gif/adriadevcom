import { motion } from 'framer-motion'
import { Phone, Palette, Eye, Rocket } from 'lucide-react'

const steps = [
  { icon: Phone, title: 'Konzultacija', desc: 'Besplatni poziv, kažete što trebate.' },
  { icon: Palette, title: 'Dizajn', desc: 'Za 5-7 dana šaljemo preview.' },
  { icon: Eye, title: 'Pregled', desc: 'Vidite stranicu PRIJE nego platite.' },
  { icon: Rocket, title: 'Objava', desc: 'Plaćate, idemo live na vašu domenu.' },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Kako radimo
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Jednostavan proces od ideje do live stranice — bez iznenađenja.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line - visible on desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          <motion.div
            className="hidden lg:block absolute top-16 left-0 h-0.5 bg-accent rounded-full"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ maxWidth: '100%' }}
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative flex flex-col items-center text-center"
                variants={{
                  hidden: { opacity: 0, y: 56 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-elevated border-2 border-accent/50 flex items-center justify-center text-accent mb-4 relative z-10"
                  whileHover={{ scale: 1.12, boxShadow: '0 0 40px rgba(108, 92, 231, 0.45)' }}
                >
                  <span className="font-mono font-bold text-lg text-text-muted absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-xs">
                    {i + 1}
                  </span>
                  <step.icon size={28} />
                </motion.div>
                <h3 className="font-syne font-semibold text-lg text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-secondary text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
