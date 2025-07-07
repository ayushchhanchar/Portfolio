import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { useTilt3D } from "../utils/useTilt3D"
import { fadeUp } from "../utils/motion"
import { ProjectModal } from "../components/ProjectModal"
import { TextReveal } from "../components/TextReveal"

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
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto relative">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-full blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <TextReveal>Featured Projects</TextReveal>
          </h2>
        </motion.div>
        <TextReveal
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          delay={0.5}
        >
          A showcase of my recent work, featuring full-stack applications built with modern technologies and innovative solutions
        </TextReveal>
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
                hidden: { opacity: 0, y: 50, rotateX: -15 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  transition: { 
                    delay: i * 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }
                }
              }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                animate={isHovered ? {
                  background: [
                    "linear-gradient(0deg, #ec4899, #8b5cf6, #06b6d4)",
                    "linear-gradient(120deg, #ec4899, #8b5cf6, #06b6d4)",
                    "linear-gradient(240deg, #ec4899, #8b5cf6, #06b6d4)",
                    "linear-gradient(360deg, #ec4899, #8b5cf6, #06b6d4)",
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Project Image with enhanced effects */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                  transition={{ duration: 0.8 }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Enhanced Hover Overlay */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                    >
                      <motion.button
                        onClick={() => setSelectedProject(proj)}
                        className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(255,255,255,0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        View Details
                      </motion.button>
                      <motion.a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                        whileHover={{ 
                          scale: 1.05,
                          rotate: 360,
                          boxShadow: "0 0 20px rgba(255,255,255,0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <FaGithub size={20} />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 relative">
                <motion.h3 
                  className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors"
                  layoutId={`title-${i}`}
                  whileHover={{ x: 5 }}
                >
                  {proj.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm mb-4 line-clamp-3"
                  layoutId={`description-${i}`}
                >
                  {proj.description}
                </motion.p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30 text-pink-300 text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(236, 72, 153, 0.3)",
                        borderColor: "rgba(236, 72, 153, 0.6)"
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {proj.tech.length > 4 && (
                    <motion.span 
                      className="text-gray-400 text-xs px-2 py-1"
                      whileHover={{ scale: 1.1 }}
                    >
                      +{proj.tech.length - 4} more
                    </motion.span>
                  )}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setSelectedProject(proj)}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:opacity-90 transition-all relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(236, 72, 153, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">Learn More</span>
                  </motion.button>
                  <motion.a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-all relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Floating particles effect */}
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, particleIndex) => (
                    <motion.div
                      key={particleIndex}
                      className="absolute w-1 h-1 bg-pink-500 rounded-full"
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: "100%",
                        opacity: 0,
                      }}
                      animate={{
                        y: "-10%",
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: particleIndex * 0.2,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </div>
              )}
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