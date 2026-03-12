import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const handleLeave = () => setVisible(false)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [visible])

  return (
    <motion.div
      className="cursor-glow fixed pointer-events-none z-[9999] w-[400px] h-[400px] rounded-full"
      style={{
        left: position.x,
        top: position.y,
        background: 'radial-gradient(circle, rgba(108, 92, 231, 0.15) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    />
  )
}
