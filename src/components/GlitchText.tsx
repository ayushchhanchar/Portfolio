import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  children: string
  className?: string
}

export const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div 
      className={`relative inline-block ${className}`}
      onHoverStart={() => setGlitchActive(true)}
      onHoverEnd={() => setGlitchActive(false)}
    >
      <motion.span
        className="relative z-10"
        animate={glitchActive ? {
          x: [0, -2, 2, -1, 1, 0],
          textShadow: [
            "0 0 0 transparent",
            "2px 0 0 #ff0000, -2px 0 0 #00ffff",
            "-2px 0 0 #ff0000, 2px 0 0 #00ffff",
            "1px 0 0 #ff0000, -1px 0 0 #00ffff",
            "-1px 0 0 #ff0000, 1px 0 0 #00ffff",
            "0 0 0 transparent"
          ]
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
      
      {glitchActive && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70"
            animate={{
              x: [-2, 2, -1],
              clipPath: ["inset(0 0 0 0)", "inset(20% 0 30% 0)", "inset(60% 0 10% 0)"]
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-cyan-500 opacity-70"
            animate={{
              x: [2, -2, 1],
              clipPath: ["inset(0 0 0 0)", "inset(40% 0 20% 0)", "inset(10% 0 70% 0)"]
            }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.span>
        </>
      )}
    </motion.div>
  )
}