import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const postsBySlug = {
  'zasto-svaki-restoran-treba-web-stranicu-2025': {
    title: 'Zašto svaki restoran treba web stranicu u 2025.',
    date: '2025-03-01',
    category: 'Web',
    excerpt: 'Facebook i Instagram nisu dovoljni. Otkrijte zašto vlastita web stranica donosi više rezervacija i povjerenja gostiju.',
    content: `
      Godinama su restorani oslanjali isključivo na društvene mreže. Ali algoritmi mijenjaju pravila — vaš post vidi sve manje ljudi, a oglasi koštaju. Vlastita web stranica ostaje vaša: uvijek dostupna, profesionalna i u vašoj kontroli.

      Na vlastitoj stranici možete prikazati cijeli jelovnik, radno vrijeme, lokaciju i — što je ključno — omogućiti online rezervacije. Gosti koji traže „restoran Split“ ili „večera u Zagrebu“ češće će završiti na stranici koja im odmah nudi rezervaciju. To smanjuje trenje i povećava broj punih stolova.

      SEO (optimizacija za Google) na vašoj stranici radi za vas 24/7. Kada netko traži „seafood restoran Rijeka“, vaša stranica može biti među prvim rezultatima. To ne možete postići samo putem Facebooka.

      Investicija u jednostavnu, brzu i mobilno prilagođenu stranicu isplati se u roku mjeseci. Plaćate jednom, a stranica radi godinama. Ako želite savjet kako započeti — javite nam za besplatnu konzultaciju.
    `,
  },
  'kako-ustedjeti-na-airbnb-provizijama-direktni-booking': {
    title: 'Kako uštedjeti na Airbnb provizijama — direktni booking',
    date: '2025-02-15',
    category: 'Apartmani',
    excerpt: 'Direktni bookingovi mogu vam uštedjeti tisuće eura godišnje.',
    content: `
      Airbnb i Booking.com naplaćuju proviziju i gostu i vlasniku. Zbrojimo li sve, možete izgubiti 15–20% prihoda samo na provizijama. Za apartman koji zarađuje 15 000€ godišnje to je 2500–3000€.

      Rješenje je vlastita web stranica s booking sustavom. Gost rezervira direktno kod vas, plaća kaparu ili puni iznos, a vi ne dijelite proviziju s platformom. Vaša stranica može imati kalendar dostupnosti, galeriju, cijene po sezonama i integraciju s plaćanjem.

      Mnogi iznajmljivači i dalje koriste Airbnb za doseg, ali na stranici navode „Rezerviraj direktno i uštedi“ — dio gostiju rado prelazi na direktnu rezervaciju kad vidi prednost. Tako smanjujete ovisnost o platformama i povećavate marginu.

      Izrada apartmanske stranice s bookingom uključuje sve navedeno i obično se isplati u prvoj sezoni. Ako želite procjenu za vaš objekt — pošaljite nam upit.
    `,
  },
  'seo-za-pocetnike-kako-te-google-nade': {
    title: 'SEO za početnike — kako te Google nađe',
    date: '2025-02-01',
    category: 'SEO',
    excerpt: 'Osnove SEO-a bez žargona.',
    content: `
      SEO (Search Engine Optimization) znači optimizacija za tražilice — u praksi uglavnom za Google. Cilj je da vas ljudi pronađu kad upisuju ključne riječi vezane uz vaš biznis.

      Tri stvari koje najviše utječu: kvaliteta i relevantnost sadržaja (tekstovi, stranice), tehnička ispravnost stranice (brzina, mobilni prikaz, meta podaci) i povjerenje (poveznice s drugih stranica, recenzije). Ne trebate biti stručnjak — dovoljno je imati jasne stranice, odgovarajuće naslove i brzu stranicu.

      Za lokalni biznis posebno je važan Google My Business (Google Moj posao). Popunite profil, dodajte fotografije, radno vrijeme i kategorije. Odgovarajte na recenzije. To je besplatno i jako utječe na to tko vas vidi kad netko traži „frizerka centar“ ili „automehaničar Split“.

      Ako želite da netko preuzme SEO za vas — od analize ključnih riječi do redovitih izvještaja — možemo predložiti paket prilagođen vašem budžetu.
    `,
  },
  '5-razloga-zasto-vasa-web-stranica-gubi-klijente': {
    title: '5 razloga zašto vaša web stranica gubi klijente',
    date: '2025-01-20',
    category: 'Web',
    excerpt: 'Sporo učitavanje, loš mobilni prikaz, nejasne CTA.',
    content: `
      1. Sporo učitavanje — ako se stranica učitava duže od nekoliko sekundi, mnogi posjetitelji odu. Brzina utječe i na Google rang.

      2. Loš mobilni prikaz — većina prometa dolazi s mobitela. Ako se stranica lomi ili je tekst nečitak, gubite konverzije.

      3. Nejasna poruka — posjetitelj mora u nekoliko sekundi shvatiti što nudite i što treba napraviti (nazvati, rezervirati, naručiti). Ako to nije očito, odlaze.

      4. Zastarjeli dizajn — stara stranica ne izaziva povjerenje. Moderan, čist izgled povećava vjerodostojnost.

      5. Nema jasnog poziva na akciju (CTA) — „Kontaktirajte nas“, „Rezerviraj“, „Naruči“ moraju biti vidljivi i jednostavni.

      Rješenje je redizajn s fokusom na brzinu, mobilnost i jasne korake za korisnika. Ako želite besplatnu procjenu vaše trenutne stranice — javite se.
    `,
  },
  'google-my-business-besplatni-alat-koji-malo-tko-koristi': {
    title: 'Google My Business — besplatni alat koji malo tko koristi',
    date: '2025-01-10',
    category: 'SEO',
    excerpt: 'Optimizirajte svoj Google profil i budite vidljiviji lokalnim kupcima.',
    content: `
      Google Moj posao (Google My Business, danas dio Google Business Profilea) je besplatan profil koji se prikazuje kad netko traži vaš biznis ili usluge u blizini. Ako ga niste popunili, konkurencija vas lako nadmaši.

      Što trebate: točan naziv, adresa, kategorija, radno vrijeme, web stranica i telefon. Zatim fotografije — izložba, proizvodi, tim. Što više kvalitetnih slika, to bolje. Recenzije su važne: odgovarajte na sve, pozitivne i negativne, profesionalno i kratko.

      Kategorije odaberite pažljivo — one određuju u kojim pretragama ćete se pojaviti. Jednom mjesečno objavite novost ili ponudu (post na profilu) da ostanete aktivni.

      Optimizacija profila traje nekoliko sati, a rezultat je dugotrajan. Ako želite da vam netko to uredi i da vas vodi kroz proces — ponudimo i tu uslugu.
    `,
  },
  'koliko-kosta-web-stranica-u-hrvatskoj-2025': {
    title: 'Koliko košta web stranica u Hrvatskoj 2025',
    date: '2025-01-05',
    category: 'Cijene',
    excerpt: 'Pregled tržišta: što možete očekivati za 400€, 700€ ili 1200€.',
    content: `
      Cijene variraju ovisno o složenosti. Gruba podjela: jednostavna prezentacija (5–7 stranica, kontakt, mobilna verzija) kreće od oko 400€. Srednje složena stranica (više stranica, booking ili posebne sekcije) obično 600–800€. Web shop ili kompleksna stranica s više jezika i naprednim funkcijama 1000€ i više.

      Na cijenu utječu: broj stranica, dizajn (predložak vs. custom), booking ili webshop, višejezičnost, SEO optimizacija i održavanje. Pitanje je što vam stvarno treba: manji biznis često ne treba najskuplji paket.

      Bitno je pitati što je uključeno: hosting, domena, SSL, izmjene nakon predaje, obuka. Neke agencije naplate „jeftino“, a zatim naplaćuju svaku izmjenu posebno. Transparentna ponuda s fiksnom cijenom i jasnim opsegom rada štedi novac i živce.

      Kod nas možete vidjeti stranicu prije plaćanja i dobiti jasnu ponudu bez skrivenih troškova. Pogledajte cijene ili pošaljite upit za prilagođenu ponudu.
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? postsBySlug[slug] : null

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-syne font-bold text-2xl text-text-primary mb-4">Članak nije pronađen</h1>
          <Link to="/blog" className="text-accent-light hover:underline">← Natrag na blog</Link>
        </div>
      </div>
    )
  }

  const paragraphs = post.content.trim().split('\n\n').filter(Boolean)

  return (
    <>
      <Helmet>
        <title>{post.title} | Adria Dev Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://www.adriadev.com/blog/${slug}`} />
      </Helmet>
      <article className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-accent-light mb-8"
            >
              <ArrowLeft size={18} /> Natrag na blog
            </Link>
            <span className="text-xs font-medium text-accent-light bg-accent/20 px-2 py-1 rounded">{post.category}</span>
            <time className="block text-text-muted text-sm mt-2">{post.date}</time>
            <h1 className="font-syne font-bold text-3xl md:text-4xl text-text-primary mt-4 mb-6">{post.title}</h1>
            <p className="text-text-secondary text-lg leading-relaxed mb-10">{post.excerpt}</p>
            <div className="prose prose-invert max-w-none">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-text-secondary leading-relaxed mb-4">
                  {p.trim()}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </article>
    </>
  )
}
