import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    slug: 'zasto-svaki-restoran-treba-web-stranicu-2025',
    title: 'Zašto svaki restoran treba web stranicu u 2025.',
    date: '2025-03-01',
    category: 'Web',
    excerpt: 'Facebook i Instagram nisu dovoljni. Otkrijte zašto vlastita web stranica donosi više rezervacija i povjerenja gostiju.',
  },
  {
    slug: 'kako-ustedjeti-na-airbnb-provizijama-direktni-booking',
    title: 'Kako uštedjeti na Airbnb provizijama — direktni booking',
    date: '2025-02-15',
    category: 'Apartmani',
    excerpt: 'Direktni bookingovi mogu vam uštedjeti tisuće eura godišnje. Kako napraviti stranicu koja rezervira umjesto platformi.',
  },
  {
    slug: 'seo-za-pocetnike-kako-te-google-nade',
    title: 'SEO za početnike — kako te Google nađe',
    date: '2025-02-01',
    category: 'SEO',
    excerpt: 'Osnove SEO-a bez žargona. Što raditi da vas kupci pronađu kad traže vaše usluge u Hrvatskoj.',
  },
  {
    slug: '5-razloga-zasto-vasa-web-stranica-gubi-klijente',
    title: '5 razloga zašto vaša web stranica gubi klijente',
    date: '2025-01-20',
    category: 'Web',
    excerpt: 'Sporo učitavanje, loš mobilni prikaz, nejasne CTA — i kako to popraviti.',
  },
  {
    slug: 'google-my-business-besplatni-alat-koji-malo-tko-koristi',
    title: 'Google My Business — besplatni alat koji malo tko koristi',
    date: '2025-01-10',
    category: 'SEO',
    excerpt: 'Optimizirajte svoj Google profil i budite vidljiviji lokalnim kupcima. Korak po korak.',
  },
  {
    slug: 'koliko-kosta-web-stranica-u-hrvatskoj-2025',
    title: 'Koliko košta web stranica u Hrvatskoj 2025',
    date: '2025-01-05',
    category: 'Cijene',
    excerpt: 'Pregled tržišta: što možete očekivati za 400€, 700€ ili 1200€ i kako odabrati pravi paket.',
  },
]

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Savjeti za Vaš Online Biznis | Adria Dev</title>
        <meta name="description" content="Savjeti o web stranicama, SEO-u i digitalnom marketingu za hrvatske biznise." />
        <link rel="canonical" href="https://www.adriadev.com/blog" />
      </Helmet>
      <PageHero
        title="Blog — savjeti za vaš online biznis"
        subtitle="Koristan sadržaj o web stranicama, SEO-u i tome kako dovesti više klijenata putem interneta."
      />
      <section className="px-4 pb-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-text-secondary leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ovdje objavljujemo članke o izradi web stranica, SEO optimizaciji, direktnim bookingima, Google My Businessu i cijenama. Cilj nam je da malim biznisima bude jasnije kako doći do bolje online prisutnosti i više klijenata. Ako imate prijedlog teme ili pitanje, pišite nam na kontakt.
          </motion.p>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
          >
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="block rounded-2xl bg-elevated border border-border p-6 md:p-8 hover:border-accent/50 transition-all duration-300 group"
                >
                  <span className="text-xs font-medium text-accent-light bg-accent/20 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <time className="block text-text-muted text-sm mt-2">{post.date}</time>
                  <h2 className="font-syne font-bold text-xl md:text-2xl text-text-primary mt-2 mb-3 group-hover:text-accent-light transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-accent-light text-sm font-medium">
                    Čitaj više <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
