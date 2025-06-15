import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const sections = ["home", "about", "education", "experience", "projects", "skills", "contact"]

export const Navbar = () => {
  const [active, setActive] = useState("home")

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
      className="fixed w-full top-0 bg-black bg-opacity-50 backdrop-blur z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-500 transition-all duration-500 capitalize">
          {active === "home" ? "Ayush.dev" : `/${active}`}
        </h1>

        <div className="space-x-5 hidden md:flex">
          {sections.map((section, i) => (
            <a
              key={i}
              href={`#${section}`}
              className={`relative text-sm font-medium uppercase transition-colors duration-300 ${
                active === section ? "text-pink-500" : "text-gray-300"
              }`}
            >
              {section}
              {active === section && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-pink-500 rounded"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
