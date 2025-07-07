import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Node {
  id: number
  x: number
  y: number
  connections: number[]
}

export const NeuralNetwork = () => {
  const [nodes, setNodes] = useState<Node[]>([])
  const [activeConnections, setActiveConnections] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Reduced node count for better performance
    const nodeCount = 8
    const newNodes: Node[] = []
    
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections: []
      })
    }

    // Create fewer connections
    newNodes.forEach(node => {
      const connectionCount = Math.floor(Math.random() * 2) + 1
      for (let i = 0; i < connectionCount; i++) {
        const targetId = Math.floor(Math.random() * nodeCount)
        if (targetId !== node.id && !node.connections.includes(targetId)) {
          node.connections.push(targetId)
        }
      }
    })

    setNodes(newNodes)

    // Slower animation interval
    const interval = setInterval(() => {
      const allConnections: string[] = []
      newNodes.forEach(node => {
        node.connections.forEach(targetId => {
          allConnections.push(`${node.id}-${targetId}`)
        })
      })

      const randomConnection = allConnections[Math.floor(Math.random() * allConnections.length)]
      setActiveConnections(prev => {
        const newSet = new Set(prev)
        newSet.add(randomConnection)
        setTimeout(() => {
          setActiveConnections(current => {
            const updated = new Set(current)
            updated.delete(randomConnection)
            return updated
          })
        }, 2000)
        return newSet
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        
        {/* Connections */}
        {nodes.map(node =>
          node.connections.map(targetId => {
            const target = nodes[targetId]
            if (!target) return null
            
            const connectionKey = `${node.id}-${targetId}`
            const isActive = activeConnections.has(connectionKey)
            
            return (
              <motion.line
                key={connectionKey}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth={isActive ? "1.5" : "0.5"}
                opacity={isActive ? 0.6 : 0.2}
                animate={{
                  strokeDasharray: isActive ? ["0 100", "100 0"] : "0 100",
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
            )
          })
        )}
        
        {/* Nodes */}
        {nodes.map(node => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="#ec4899"
            animate={{
              r: [3, 4, 3],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.id * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  )
}