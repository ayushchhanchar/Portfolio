import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const words = children.split(" ")

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            rotateX: 0 
          } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.1,
            ease: [0.215, 0.61, 0.355, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}