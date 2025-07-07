import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export const InteractiveGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let ticking = false
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Reduced grid size for better performance
  const gridSize = 12
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
      <div 
        className="grid gap-2 h-full w-full p-8"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {cells.map((cell) => {
          const row = Math.floor(cell / gridSize)
          const col = cell % gridSize
          const cellX = (col / gridSize) * window.innerWidth
          const cellY = (row / gridSize) * window.innerHeight
          const distance = Math.sqrt(
            Math.pow(mousePosition.x - cellX, 2) + Math.pow(mousePosition.y - cellY, 2)
          )
          const maxDistance = 150
          const intensity = Math.max(0, 1 - distance / maxDistance)

          return (
            <motion.div
              key={cell}
              className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-sm"
              animate={{
                opacity: intensity * 0.3,
                scale: 1 + intensity * 0.3,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut"
              }}
            />
          )
        })}
      </div>
    </div>
  )
}