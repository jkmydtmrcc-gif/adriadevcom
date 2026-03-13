import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Zadovoljnih klijenata', duration: 2 },
  { value: 2, suffix: '-3', label: 'Tjedna isporuke', duration: 2 },
  { value: 100, suffix: '%', label: 'Zadovoljstvo ili vraćamo novac', duration: 2 },
  { value: 24, suffix: '/7', label: 'Podrška', duration: 2 },
]

function AnimatedNumber({ value, suffix, duration }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const end = value
    const startTime = performance.now()
    const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))
    const step = (timestamp) => {
      const elapsed = (timestamp - startTime) / 1000
      const t = Math.min(elapsed / duration, 1)
      const progress = easeOutExpo(t)
      setCount(Math.floor(progress * end))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="font-mono font-bold">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {},
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-elevated border border-border p-6 md:p-8 text-center hover:border-accent/50 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
              }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(108, 92, 231, 0.25)', transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl text-accent-light mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} duration={stat.duration} />
              </div>
              <p className="text-text-secondary text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
