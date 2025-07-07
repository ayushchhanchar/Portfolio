import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const MorphingShape = () => {
  const [currentShape, setCurrentShape] = useState(0)
  
  const shapes = [
    "M48.5,-51.1C62.3,-37.4,72.8,-18.7,72.3,-0.6C71.7,17.6,60.2,35.2,46.3,48.3C32.4,61.4,16.2,70,0.6,69.3C-14.9,68.7,-29.9,58.8,-43.2,45.3C-56.6,31.8,-68.3,14.9,-67.1,-1.5C-65.9,-17.9,-51.7,-33.7,-37,-47.2C-22.3,-60.7,-11.2,-71.8,3.5,-75.6C18.1,-79.3,36.2,-75.8,48.5,-61.1Z",
    "M35.2,-45.8C45.1,-35.7,52.3,-23.8,55.8,-10.2C59.3,3.4,59.1,18.7,52.4,31.2C45.7,43.7,32.5,53.4,17.8,58.9C3.1,64.4,-13.1,65.7,-27.8,60.4C-42.5,55.1,-55.7,43.2,-62.1,28.1C-68.5,13,-68.1,-5.3,-62.8,-20.8C-57.5,-36.3,-47.3,-49,-34.2,-58.8C-21.1,-68.6,-5.1,-75.5,7.8,-85.1C20.7,-94.7,30.5,-107,35.2,-45.8Z",
    "M42.1,-52.3C54.8,-42.2,65.5,-28.4,69.8,-12.1C74.1,4.2,72,23,63.4,38.1C54.8,53.2,39.7,64.6,23.1,69.4C6.5,74.2,-11.6,72.4,-26.8,65.1C-42,57.8,-54.3,45,-60.1,29.8C-65.9,14.6,-65.2,-3,-58.8,-18.4C-52.4,-33.8,-40.3,-47,-26.1,-56.8C-11.9,-66.6,4.4,-73,19.8,-72.9C35.2,-72.8,49.7,-66.2,42.1,-52.3Z",
    "M38.7,-48.9C49.8,-38.1,58.2,-24.8,61.4,-9.8C64.6,5.2,62.6,21.9,54.8,35.4C47,48.9,33.4,59.2,18.2,63.8C3,68.4,-13.8,67.3,-28.1,60.7C-42.4,54.1,-54.2,42,-59.7,27.2C-65.2,12.4,-64.4,-4.1,-58.1,-18.4C-51.8,-32.7,-40,-44.8,-26.8,-55.2C-13.6,-65.6,1,-74.2,16.8,-75.1C32.6,-76,49.6,-69.2,38.7,-48.9Z"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      <motion.svg
        className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.path
          fill="url(#morphGradient)"
          filter="url(#glow)"
          d={shapes[currentShape]}
          transform="translate(100 100)"
          animate={{
            d: shapes[currentShape],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            d: { duration: 2, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.svg>
    </div>
  )
}