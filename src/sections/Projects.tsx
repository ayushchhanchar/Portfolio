import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaGithub} from "react-icons/fa"
import { useTilt3D } from "../utils/useTilt3D"
import { fadeUp } from "../utils/motion"

const projects = [
  {
    title: "Employee Management System",
    description: "Full-stack app using React, Node.js, MongoDB, and Recoil for managing employee data, attendance, time tracking, and leave workflows.",
    tech: ["React", "Recoil", "Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ayushchhanchar/Employee-Manager",
    image: "/images/project-employee.png", // Add your local image
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with user authentication (Passport.js), secure sessions, and stylish frontend using Tailwind CSS.",
    tech: ["HTML", "CSS", "JS", "Tailwind", "Node.js", "Express", "MongoDB", "Passport.js"],
    github: "https://github.com/ayushchhanchar/Chat-App.git",
    image: "/images/project-chat.png",
  },
  {
    title: "Recipe App",
    description: "React-based app to manage personal recipes, upload images, and track ingredients with localStorage persistence.",
    tech: ["React", "Tailwind", "localStorage", "MongoDB"],
    github: "https://github.com/ayushchhanchar/Recepie-App.git",
    image: "/images/project-recipe.png",
  },
]

export const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => {
          const cardRef = useTilt3D()
          const isOpen = expanded === i

          return (
            <motion.div
              key={i}
              ref={cardRef}
              layout
              layoutId={`project-${i}`}
              onClick={() => setExpanded(isOpen ? null : i)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ layout: { duration: 0.6, type: "spring" } }}
              className={`bg-gray-800 rounded-xl p-6 shadow-xl cursor-pointer transition-all duration-300 hover:shadow-pink-500/30 ${
                isOpen ? "col-span-2 lg:col-span-3" : ""
              }`}
            >
              <motion.h3 className="text-xl font-semibold text-pink-400">
                {proj.title}
              </motion.h3>
              <motion.p className="text-gray-300 mt-2 text-sm">
                {proj.description}
              </motion.p>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-xs px-2 py-1 rounded-full text-pink-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.01 }}
                    className="mt-6 space-y-4"
                  >
                    {/* Image */}
                    {proj.image && (
                      <motion.img
                        src={proj.image}
                        alt={proj.title}
                        className="rounded-lg shadow-lg w-full h-60 object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      />
                    )}

                    {/* GitHub + Links */}
                    <div className="flex gap-4">
                      <a
                        href={proj.github}
                        target="_blank"
                        className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"
                      >
                        <FaGithub /> GitHub
                      </a>
                      {/* {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          className="text-gray-300 hover:text-white flex items-center gap-2 text-sm"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )} */}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
