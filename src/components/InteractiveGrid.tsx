import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export const InteractiveGrid = () => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const gridSize = 20
  const cells = Array.from({ length: gridSize * gridSize }, (_, i) => i)

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10">
      <div 
        className="grid gap-1 h-full w-full p-4"
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
          const maxDistance = 200
          const intensity = Math.max(0, 1 - distance / maxDistance)

          return (
            <motion.div
              key={cell}
              className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-sm"
              animate={{
                opacity: intensity * 0.5,
                scale: 1 + intensity * 0.5,
                backgroundColor: intensity > 0.3 ? "#ec4899" : "#8b5cf6",
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
            />
          )
        })}
      </div>
    </div>
  )
}