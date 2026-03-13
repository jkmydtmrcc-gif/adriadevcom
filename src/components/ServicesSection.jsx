import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Globe, TrendingUp, ShoppingCart, Calendar, Home, MapPin, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Izrada web stranica',
    desc: 'Moderna, brza, mobilna stranica koja konvertira.',
    href: '/usluge',
  },
  {
    icon: TrendingUp,
    title: 'SEO optimizacija',
    desc: 'Da te Google nađe kad te netko traži.',
    href: '/usluge',
  },
  {
    icon: ShoppingCart,
    title: 'Web shopovi',
    desc: 'Prodaji online bez provizija platformi.',
    href: '/usluge',
  },
  {
    icon: Calendar,
    title: 'Booking sustavi',
    desc: 'Online rezervacije za salone i restorane.',
    href: '/usluge',
  },
  {
    icon: Home,
    title: 'Apartmanske stranice',
    desc: 'Direktni bookingovi bez Airbnb provizije.',
    href: '/usluge',
  },
  {
    icon: MapPin,
    title: 'Google My Business',
    desc: 'Besplatna optimizacija koja donosi lokalne kupce.',
    href: '/usluge',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-syne font-bold text-3xl md:text-4xl lg:text-5xl text-text-primary mb-4">
            Što radimo za vas
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Od jednostavne prezentacijske stranice do web shopa i naprednog SEO-a — sve pod jednim krovom.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((s, i) => (
            <motion.div key={i} variants={item}>
              <Link to={s.href}>
                <motion.div
                  className="h-full rounded-2xl bg-elevated border border-border p-6 md:p-8 flex flex-col hover:border-accent/50 transition-colors group"
                  whileHover={{
                    y: -6,
                    boxShadow: '0 20px 60px rgba(108, 92, 231, 0.25)',
                    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/30 transition-colors">
                    <s.icon size={24} />
                  </div>
                  <h3 className="font-syne font-semibold text-xl text-text-primary mb-2">{s.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-accent-light text-sm font-medium">
                    Saznaj više <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
