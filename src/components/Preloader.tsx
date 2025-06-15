import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white text-4xl font-bold"
          >
            Ayush.dev
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
