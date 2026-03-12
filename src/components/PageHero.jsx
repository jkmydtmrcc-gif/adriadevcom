import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, className = '' }) {
  return (
    <section className={`py-20 md:py-28 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="font-syne font-bold text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-text-secondary text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
