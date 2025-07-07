import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { useTilt3D } from "../utils/useTilt3D"
import { fadeUp } from "../utils/motion"
import { ProjectModal } from "../components/ProjectModal"

const projects = [
  {
    title: "Employee Management System",
    description: "Full-stack app using React, Node.js, MongoDB, and Recoil for managing employee data, attendance, time tracking, and leave workflows.",
    longDescription: "A comprehensive employee management solution built with modern web technologies. Features include real-time attendance tracking, automated leave management, performance analytics, and role-based access control. The application uses Recoil for state management and provides a seamless user experience across all devices.",
    tech: ["React", "Recoil", "Tailwind", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ayushchhanchar/Employee-Manager",
    image: "/images/project-employee.png",
    features: [
      "Real-time attendance tracking with geolocation",
      "Automated leave management system",
      "Performance analytics and reporting",
      "Role-based access control",
      "Mobile-responsive design",
      "Email notifications for important updates"
    ]
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with user authentication (Passport.js), secure sessions, and stylish frontend using Tailwind CSS.",
    longDescription: "A modern real-time chat application featuring secure user authentication, private messaging, group chats, and file sharing capabilities. Built with Socket.io for real-time communication and Passport.js for robust authentication.",
    tech: ["HTML", "CSS", "JS", "Tailwind", "Node.js", "Express", "MongoDB", "Passport.js"],
    github: "https://github.com/ayushchhanchar/Chat-App.git",
    image: "/images/project-chat.png",
    features: [
      "Real-time messaging with Socket.io",
      "Private and group chat functionality",
      "File and image sharing",
      "User authentication and sessions",
      "Message history and search",
      "Responsive design for all devices"
    ]
  },
  {
    title: "Recipe App",
    description: "React-based app to manage personal recipes, upload images, and track ingredients with localStorage persistence.",
    longDescription: "A beautiful recipe management application that helps users organize their favorite recipes, plan meals, and create shopping lists. Features image upload, ingredient tracking, and nutritional information.",
    tech: ["React", "Tailwind", "localStorage", "MongoDB"],
    github: "https://github.com/ayushchhanchar/Recepie-App.git",
    image: "/images/project-recipe.png",
    features: [
      "Recipe creation and management",
      "Image upload and gallery",
      "Ingredient tracking and shopping lists",
      "Meal planning calendar",
      "Nutritional information display",
      "Recipe sharing and favorites"
    ]
  },
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A showcase of my recent work, featuring full-stack applications built with modern technologies
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => {
          const cardRef = useTilt3D()
          const isHovered = hoveredIndex === i

          return (
            <motion.div
              key={i}
              ref={cardRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: i * 0.2, duration: 0.6 }
                }
              }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                    >
                      <motion.button
                        onClick={() => setSelectedProject(proj)}
                        className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                      <motion.a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors"
                  layoutId={`title-${i}`}
                >
                  {proj.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm mb-4 line-clamp-3"
                  layoutId={`description-${i}`}
                >
                  {proj.description}
                </motion.p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 text-pink-300 text-xs px-2 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{proj.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setSelectedProject(proj)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.1), transparent)",
                }}
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear"
                }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}