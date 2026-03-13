// Global easing: ease out expo — savršeno glatko, premium
export const easeOutExpo = [0.16, 1, 0.3, 1]

export const pageVariants = {
  initial: { opacity: 0, y: 30, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
    transition: { duration: 0.3, ease: easeOutExpo },
  },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutExpo },
  },
  viewport: { once: true, margin: '-50px' },
}

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
}

export const cardHover = {
  whileHover: {
    y: -6,
    boxShadow: '0 20px 60px rgba(108, 92, 231, 0.25)',
    transition: { duration: 0.3, ease: easeOutExpo },
  },
}

export const buttonHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: easeOutExpo },
}
