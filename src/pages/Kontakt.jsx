import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Mail, MessageCircle, Clock, MapPin } from 'lucide-react'

const servicesOptions = [
  'Izrada web stranice',
  'SEO optimizacija',
  'Web shop',
  'Booking sustav',
  'Apartmanska stranica',
  'Google My Business',
  'Ostalo',
]

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, phone, service, message } = formData
    const subject = encodeURIComponent(`Upit: ${service || 'Kontakt'} - ${name}`)
    const body = encodeURIComponent(
      `Ime: ${name}\nEmail: ${email}\nTelefon: ${phone}\nUsluga: ${service || '—'}\n\nPoruka:\n${message}`
    )
    window.location.href = `mailto:kontakt@adriadev.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <Helmet>
        <title>Kontakt — Besplatna Konzultacija | Adria Dev</title>
        <meta name="description" content="Kontaktirajte Adria Dev za besplatnu konzultaciju. Odgovaramo u roku 24h." />
        <link rel="canonical" href="https://www.adriadev.com/kontakt" />
      </Helmet>
      <PageHero
        title="Kontaktirajte nas"
        subtitle="Imate pitanje ili želite besplatnu konzultaciju? Pošaljite poruku — javimo se u roku 24 sata."
      />
      <section className="px-4 pb-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            className="text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Koristite formu ispod za upit o web stranici, cijenama ili SEO-u. Možete nas i direktno kontaktirati putem emaila ili WhatsAppa. Radno vrijeme: ponedjeljak–petak 9–17h. Za hitne upite ostavite poruku — javit ćemo se čim stignemo.
          </motion.p>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-syne font-bold text-2xl text-text-primary mb-6">Pošaljite upit</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl bg-elevated border border-success/30 p-8 text-center"
                >
                  <p className="text-text-primary font-medium mb-2">Hvala!</p>
                  <p className="text-text-secondary text-sm">
                    Otvorit će vam se email klijent. Pošaljite poruku i javit ćemo se u roku 24h.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Ime i prezime *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="email@primjer.hr"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">Telefon</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="+385 9x xxx xxxx"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-1">Usluga</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      <option value="">Odaberite...</option>
                      {servicesOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Poruka *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-elevated border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                      placeholder="Opišite što vam treba..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light hover:shadow-accent-glow transition-all duration-200"
                  >
                    Pošalji upit
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-syne font-bold text-2xl text-text-primary mb-6">Kontakt podaci</h2>
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <Mail className="text-accent shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="text-text-secondary text-sm">Email</p>
                    <a href="mailto:kontakt@adriadev.com" className="text-text-primary font-medium hover:text-accent-light">
                      kontakt@adriadev.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MessageCircle className="text-accent shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="text-text-secondary text-sm">WhatsApp</p>
                    <a href="https://wa.me/385991234567" target="_blank" rel="noopener noreferrer" className="text-text-primary font-medium hover:text-accent-light">
                      +385 99 123 4567
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="text-accent shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="text-text-secondary text-sm">Radno vrijeme</p>
                    <p className="text-text-primary">Pon – Pet: 9–17h</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="text-accent shrink-0 mt-0.5" size={22} />
                  <div>
                    <p className="text-text-secondary text-sm">Lokacija</p>
                    <p className="text-text-primary">Hrvatska — radimo s klijentima diljem zemlje</p>
                  </div>
                </li>
              </ul>
              <div className="rounded-2xl bg-elevated border border-border aspect-video flex items-center justify-center text-text-muted text-sm">
                [ Google Maps placeholder ]
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
