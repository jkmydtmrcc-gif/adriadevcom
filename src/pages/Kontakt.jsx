import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { Mail, Clock, MapPin } from 'lucide-react'
import WhatsAppIcon from '../components/WhatsAppIcon'

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
              className="space-y-4"
            >
              <h2 className="font-syne font-bold text-2xl text-text-primary mb-6">Kontakt podaci</h2>
              <a href="mailto:kontakt@adriadev.com" className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors w-full text-left">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-secondary">Email</p>
                  <p className="text-text-primary font-medium truncate">kontakt@adriadev.com</p>
                </div>
              </a>
              <a href="https://wa.me/385976425423" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl hover:border-[#25D366] transition-colors w-full text-left">
                <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-secondary">WhatsApp</p>
                  <p className="text-text-primary font-medium">+385 97 642 5423</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Radno vrijeme</p>
                  <p className="text-text-primary font-medium">Pon–Pet: 9:00–18:00</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface border border-border rounded-xl">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Lokacija</p>
                  <p className="text-text-primary font-medium">Hrvatska — radimo s klijentima diljem zemlje</p>
                </div>
              </div>
              <div className="rounded-2xl bg-elevated border border-border aspect-video flex items-center justify-center text-text-muted text-sm mt-6">
                [ Google Maps placeholder ]
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
