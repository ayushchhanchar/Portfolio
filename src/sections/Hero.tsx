import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import { fadeUp } from "../utils/motion"
import MagneticButton from "../components/MagneticButton"
import { AnimatedText } from "../components/AnimatedText"
import { GlitchText } from "../components/GlitchText"
import { TextReveal } from "../components/TextReveal"
import { MorphingShape } from "../components/MorphingShape"

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden relative"
    >
      <MorphingShape />

      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Enhanced Terminal Intro Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-black/90 border border-green-500/50 rounded-lg p-6 w-full text-left mb-8 text-green-400 font-mono shadow-2xl backdrop-blur-sm relative overflow-hidden"
        >
          {/* Scanning line effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          
          <div className="flex items-center gap-2 mb-4 relative z-10">
            <motion.div 
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="w-3 h-3 bg-yellow-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            />
            <span className="text-gray-400 text-sm ml-2">ayush@portfolio:~$</span>
          </div>
          <p className="relative z-10">
            <span className="text-pink-400">➜</span>{" "}
            <span className="text-green-300">~</span> npx create-awesome-developer
          </p>
          <motion.p 
            className="mt-2 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▋
            </motion.span>
            {" "}Initializing portfolio...
          </motion.p>
          <motion.p 
            className="mt-2 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Typewriter
              words={[
                "🚀 Full Stack Developer | React Specialist | UI/UX Enthusiast",
                "💻 Building scalable web applications with modern technologies",
                "🎨 Crafting beautiful user experiences that users love",
                "🔒 Cybersecurity-focused development practices",
              ]}
              loop={true}
              cursor
              cursorStyle="▋"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </motion.p>
        </motion.div>

        {/* Enhanced Hero Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-6"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <TextReveal delay={0.2}>
              Hi, I'm
            </TextReveal>
            {" "}
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GlitchText className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                Ayush Chhanchar
              </GlitchText>
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-8"
        >
          <TextReveal
            className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
            delay={2.5}
          >
            Frontend Developer passionate about creating exceptional digital experiences with cutting-edge technologies and beautiful animations.
          </TextReveal>
        </motion.div>

        {/* Enhanced Resume Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-md opacity-75 blur-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <MagneticButton href="/AyushChhanchar_Resume.pdf" download>
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              📄
            </motion.span>
            Download Resume
          </MagneticButton>
        </motion.div>

        {/* Enhanced Social Icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 relative"
        >
          {[
            { icon: FaGithub, href: "https://github.com/ayushchhanchar", color: "hover:text-gray-400", name: "GitHub" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/ayush-chhanchar-278a19231/", color: "hover:text-blue-400", name: "LinkedIn" },
            { icon: FaEnvelope, href: "mailto:chhancharayush007@gmail.com", color: "hover:text-red-400", name: "Email" }
          ].map(({ icon: Icon, href, color, name }, i) => (
            <motion.div key={i} className="relative group">
              <motion.a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`text-gray-300 ${color} transition-all duration-300 relative z-10 block`}
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 + i * 0.1 }}
              >
                <Icon size={32} />
              </motion.a>
              
              {/* Orbital ring effect */}
              <motion.div
                className="absolute inset-0 border-2 border-pink-500/30 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 2, 
                  opacity: [0, 1, 0],
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full mt-2"
              animate={{ 
                y: [0, 12, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <motion.p 
            className="text-gray-400 text-xs mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}