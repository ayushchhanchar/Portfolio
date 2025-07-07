import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Reduced spring stiffness for smoother performance
  const springConfig = { damping: 30, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    let ticking = false
    
    const moveCursor = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          cursorX.set(e.clientX - 16)
          cursorY.set(e.clientY - 16)
          setIsVisible(true)
          ticking = false
        })
        ticking = true
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseleave', () => setIsVisible(false))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseleave', () => setIsVisible(false))
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isVisible ? 1 : 0,
        }}
      >
        <div className="w-full h-full bg-pink-500 rounded-full" />
      </motion.div>
    </>
  )
}