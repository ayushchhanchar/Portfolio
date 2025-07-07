import { motion } from "framer-motion"
import { fadeUp } from "../utils/motion"
import { HolographicCard } from "../components/HolographicCard"
import { LiquidButton } from "../components/LiquidButton"
import { TextReveal } from "../components/TextReveal"

export const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, color: "from-pink-500 to-red-500" },
    { name: "React & TypeScript", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Backend Development", level: 80, color: "from-green-500 to-teal-500" },
    { name: "Cybersecurity", level: 75, color: "from-orange-500 to-yellow-500" },
  ]

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto text-center relative">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-2 border-pink-500/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl font-bold mb-12"
      >
        <TextReveal>About Me</TextReveal>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left space-y-6"
        >
          <TextReveal
            className="text-gray-300 text-lg leading-relaxed"
            delay={0.2}
          >
            I'm a passionate 4th-year Computer Science student specializing in Cybersecurity at Oriental College of Technology, Bhopal. 
          </TextReveal>
          
          <TextReveal
            className="text-gray-300 text-lg leading-relaxed"
            delay={0.4}
          >
            My journey in web development started with curiosity and has evolved into a deep passion for creating beautiful, functional, and secure digital experiences.
          </TextReveal>

          <TextReveal
            className="text-gray-300 text-lg leading-relaxed"
            delay={0.6}
          >
            I specialize in modern frontend technologies like React and TypeScript, while also building robust backend solutions. My cybersecurity background gives me a unique perspective on building secure applications.
          </TextReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="pt-4"
          >
            <LiquidButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Connect
            </LiquidButton>
          </motion.div>
        </motion.div>

        {/* Right side - Skills with animated bars */}
        <HolographicCard className="p-8">
          <h3 className="text-2xl font-bold text-white mb-8">Technical Expertise</h3>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-pink-400 font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      repeatDelay: 3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </HolographicCard>
      </div>

      {/* Animated statistics */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        {[
          { number: "50+", label: "Projects Completed", icon: "🚀" },
          { number: "2+", label: "Years Experience", icon: "⏱️" },
          { number: "15+", label: "Technologies", icon: "💻" },
          { number: "100%", label: "Passion Level", icon: "❤️" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="text-4xl mb-2"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {stat.icon}
            </motion.div>
            <motion.div
              className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {stat.number}
            </motion.div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}