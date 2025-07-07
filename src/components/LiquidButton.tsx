import { motion } from "framer-motion"
import { useState } from "react"

interface LiquidButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const LiquidButton = ({ children, onClick, className = "" }: LiquidButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      className={`relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600" />
      
      {/* Liquid effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={isHovered ? { 
          clipPath: "circle(100% at 50% 50%)" 
        } : { 
          clipPath: "circle(0% at 50% 50%)" 
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      />
      
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={isHovered ? { 
          scale: [0, 1.5], 
          opacity: [0.5, 0] 
        } : {}}
        transition={{ duration: 0.6 }}
      />
      
      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}