import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { DarkModeToggle } from "./DarkModeToggle"

const sections = ["home", "about", "education", "experience", "projects", "skills", "contact"]

export const Navbar = () => {
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md shadow-lg border-b border-gray-800/50" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <motion.h1 
          className="text-xl font-bold transition-all duration-500 capitalize relative"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {active === "home" ? "Ayush.dev" : `/${active}`}
          </motion.span>
          
          {/* Glowing effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-0 blur-lg"
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        </motion.h1>

        {/* Enhanced Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section, i) => (
            <motion.div key={i} className="relative">
              <motion.a
                href={`#${section}`}
                className={`relative text-sm font-medium uppercase transition-colors duration-300 ${
                  active === section ? "text-pink-500" : "text-gray-300 hover:text-white"
                }`}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px rgba(236, 72, 153, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
                
                {/* Enhanced underline */}
                {active === section && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-pink-500/20 rounded-md opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Right Side */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          
          {/* Enhanced Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white relative"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
            
            {/* Button glow effect */}
            <motion.div
              className="absolute inset-0 bg-pink-500/30 rounded-md opacity-0 blur-sm"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>
        </div>
      </div>
      
      {/* Navbar bottom glow */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.nav>
  )
}