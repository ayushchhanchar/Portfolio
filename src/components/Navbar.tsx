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
        {/* Logo */}
        <motion.h1 
          className="text-xl font-bold transition-all duration-500 capitalize"
          whileHover={{ scale: 1.05 }}
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {active === "home" ? "Ayush.dev" : `/${active}`}
          </span>
        </motion.h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((section, i) => (
            <motion.a
              key={i}
              href={`#${section}`}
              className={`relative text-sm font-medium uppercase transition-colors duration-300 ${
                active === section ? "text-pink-500" : "text-gray-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
              {active === section && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}