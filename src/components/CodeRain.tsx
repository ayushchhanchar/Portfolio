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
      characters: Array.from({ length: Math.floor(Math.random() * 20) + 10 }, 
        () => codeChars[Math.floor(Math.random() * codeChars.length)]
      ),
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3
    })

    const initialDrops = Array.from({ length: 30 }, (_, i) => createDrop(i))
    setDrops(initialDrops)

    const interval = setInterval(() => {
      setDrops(prevDrops => 
        prevDrops.map(drop => ({
          ...drop,
          characters: drop.characters.map(() => 
            Math.random() > 0.98 ? codeChars[Math.floor(Math.random() * codeChars.length)] : drop.characters[0]
          )
        }))
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-5">
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
            duration: 10 / drop.speed,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {drop.characters.map((char, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [1, 0.3, 1],
                color: ['#10b981', '#34d399', '#10b981'],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1,
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