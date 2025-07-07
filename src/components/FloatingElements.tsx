import { motion } from "framer-motion"

export const FloatingElements = () => {
  const elements = [
    { icon: "⚡", size: "text-2xl", delay: 0 },
    { icon: "🚀", size: "text-3xl", delay: 1 },
    { icon: "💎", size: "text-xl", delay: 2 },
    { icon: "🌟", size: "text-2xl", delay: 3 },
    { icon: "🔥", size: "text-xl", delay: 4 },
    { icon: "✨", size: "text-lg", delay: 5 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className={`absolute ${element.size} opacity-20`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            y: -100,
            rotate: 360,
            scale: [0, 1, 0],
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear",
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  )
}