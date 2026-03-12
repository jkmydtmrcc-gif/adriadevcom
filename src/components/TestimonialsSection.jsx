import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marko Horvat',
    role: 'Restoran Adriatic',
    text: 'Stranica gotova za 2 tjedna, odmah počeli dobivati rezervacije online. Profesionalno i brzo — preporučujem svima koji žele ozbiljnu web prisutnost.',
    stars: 5,
  },
  {
    name: 'Ana Kovač',
    role: 'Frizerski salon Glam',
    text: 'Vidim stranicu, platim. Bez rizika. Preporučujem svima! Konačno imam web koji izgleda kao da sam platila puno više.',
    stars: 5,
  },
  {
    name: 'Ivan Babić',
    role: 'Apartmani Bačvice',
    text: 'Uštedim 3000€ godišnje na Airbnb provizijama. Direktni bookingovi rade odlično, a stranica je brza i lijepa.',
    stars: 5,
  },
]

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const t = testimonials[index]

  return (
    <section className="py-20 md:py-28 px-4 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-syne font-bold text-3xl md:text-4xl text-text-primary mb-4">
            Što kažu klijenti
          </h2>
          <p className="text-text-secondary text-lg">
            Zadovoljni biznisi diljem Hrvatske.
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-elevated border border-border p-6 flex flex-col"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 45px rgba(108, 92, 231, 0.3)' }}
            >
              <Quote className="text-accent/50 mb-4" size={32} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.stars }).map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={18} />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-6">"{item.text}"</p>
              <p className="font-syne font-semibold text-text-primary">{item.name}</p>
              <p className="text-text-muted text-sm">{item.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="rounded-2xl bg-elevated border border-border p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="text-accent/50 mb-4" size={28} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="text-amber-400 fill-amber-400" size={18} />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">"{t.text}"</p>
              <p className="font-syne font-semibold text-text-primary">{t.name}</p>
              <p className="text-text-muted text-sm">{t.role}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full border border-border text-text-primary hover:border-accent"
              aria-label="Prethodni"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              className="p-2 rounded-full border border-border text-text-primary hover:border-accent"
              aria-label="Sljedeći"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
