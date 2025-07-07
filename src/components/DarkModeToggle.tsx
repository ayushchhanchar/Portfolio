import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setIsDark(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <motion.button
      onClick={() => setIsDark(!isDark)}
      className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 ${
        isDark ? 'bg-gray-700' : 'bg-yellow-400'
      }`}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
          isDark ? 'bg-gray-900 text-blue-400' : 'bg-white text-yellow-600'
        }`}
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </motion.div>
    </motion.button>
  )
}