import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import ServicesSection from '../components/ServicesSection'
import ProcessSection from '../components/ProcessSection'
import PricingSection from '../components/PricingSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Adria Dev — Izrada Web Stranica i SEO | Hrvatska</title>
        <meta name="description" content="Profesionalna izrada web stranica i SEO optimizacija za hrvatske biznise. Vidite stranicu prije plaćanja. Od 299€, hosting uključen. Besplatna konzultacija." />
        <meta name="keywords" content="izrada web stranica hrvatska, web dizajn, SEO optimizacija, web stranica cijena, web agencija hrvatska" />
        <meta property="og:title" content="Adria Dev — Izrada Web Stranica i SEO" />
        <meta property="og:description" content="Moderna web stranica za vaš biznis. Plaćate tek kad vidite rezultat." />
        <link rel="canonical" href="https://www.adriadev.com" />
      </Helmet>
      <HeroSection />
      <section className="py-16 md:py-24 px-4 bg-surface/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-syne font-bold text-2xl md:text-3xl text-text-primary mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Zašto Adria Dev?
          </motion.h2>
          <motion.p
            className="text-text-secondary leading-relaxed mb-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            Adria Dev je web agencija iz Hrvatske koja se specijalizirala za male i srednje biznise: restorane, salone, obrte, iznajmljivače i trgovce. Ne prodajemo „pakete u oblaku“ — napravimo vam konkretnu, brzu i mobilnu stranicu koja radi na vašoj domeni, s hostingom uključenim u cijenu. Želimo da svaki klijent prije plaćanja vidi gotovu stranicu i da nema skrivenih troškova. Zato radimo transparentno: besplatna konzultacija, jasna ponuda, fiksna cijena.
          </motion.p>
          <motion.p
            className="text-text-secondary leading-relaxed mb-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.14 }}
          >
            Nudimo izradu web stranica od 299€ (Basic paket s do 5 stranica i hostingom), Standard paket od 499€ (više stranica, booking, blog) i Premium od 799€ (web shop, višejezičnost, održavanje). SEO optimizacija i dodatne usluge prilagođavamo vašim potrebama — cijena na upit. Svi paketi uključuju SSL certifikat, mobilnu verziju i osnovnu ili naprednu SEO optimizaciju. Ako želite savjet koji paket odabrati ili prilagođenu ponudu, <Link to="/kontakt" className="text-accent-light hover:underline font-medium">javite nam se</Link> — odgovaramo u roku 24 sata.
          </motion.p>
        </div>
      </section>
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection compact />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
