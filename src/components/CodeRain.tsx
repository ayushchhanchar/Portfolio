import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface RainDrop {
  id: number
  x: number
  characters: string[]
  speed: number
  opacity: number
}

export const CodeRain = () => {
  const [drops, setDrops] = useState<RainDrop[]>([])

  const codeChars = [
    '0', '1', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '{', '}', '[', ']', '(', ')', '<', '>', '/', '\\', '|', '-', '+', '=',
    'React', 'JS', 'TS', 'CSS', 'HTML', 'Node', 'API', 'DB', 'UI', 'UX'
  ]

  useEffect(() => {
    const createDrop = (id: number): RainDrop => ({
      id,
      x: Math.random() * 100,
      characters: Array.from({ length: Math.floor(Math.random() * 10) + 5 }, 
        () => codeChars[Math.floor(Math.random() * codeChars.length)]
      ),
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.2
    })

    // Reduced number of drops for better performance
    const initialDrops = Array.from({ length: 15 }, (_, i) => createDrop(i))
    setDrops(initialDrops)

    // Reduced update frequency
    const interval = setInterval(() => {
      setDrops(prevDrops => 
        prevDrops.map(drop => ({
          ...drop,
          characters: drop.characters.map(() => 
            Math.random() > 0.95 ? codeChars[Math.floor(Math.random() * codeChars.length)] : drop.characters[0]
          )
        }))
      )
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-3">
      {drops.map(drop => (
        <motion.div
          key={drop.id}
          className="absolute font-mono text-green-400 text-xs leading-tight"
          style={{
            left: `${drop.x}%`,
            opacity: drop.opacity,
          }}
          animate={{
            y: ['-100vh', '100vh'],
          }}
          transition={{
            duration: 15 / drop.speed,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
        >
          {drop.characters.map((char, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {char}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  )
}