import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import Blob from "../components/Blob"
import { fadeUp } from "../utils/motion"
import MagneticButton from "../components/MagneticButton"
import { AnimatedText } from "../components/AnimatedText"

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden relative"
    >
      <Blob />

      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center relative z-10">
        {/* Floating Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -top-10 -right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Terminal Intro Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-black/90 border border-green-500/50 rounded-lg p-6 w-full text-left mb-8 text-green-400 font-mono shadow-2xl backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-2">terminal</span>
          </div>
          <p>
            <span className="text-pink-400">➜</span>{" "}
            <span className="text-green-300">~</span> npx ayush-portfolio
          </p>
          <motion.p 
            className="mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ✔ Launching portfolio...
          </motion.p>
          <motion.p 
            className="mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Typewriter
              words={[
                "👋 Welcome to Ayush Chhanchar's Developer Terminal",
                "🚀 Full Stack | React | Node | MongoDB | Cybersecurity",
                "💼 Building the future, one line of code at a time",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={45}
              deleteSpeed={20}
              delaySpeed={1500}
            />
          </motion.p>
        </motion.div>

        {/* Hero Heading with Staggered Animation */}
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
            Hi, I'm{" "}
            <motion.span 
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Ayush Chhanchar
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-8"
        >
          <AnimatedText
            text="Frontend / Full Stack Developer passionate about building beautiful and scalable web experiences."
            className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed"
            delay={2500}
          />
        </motion.div>

        {/* Enhanced Resume Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MagneticButton href="/AyushChhanchar_Resume.pdf" download>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
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
          className="flex gap-6"
        >
          {[
            { icon: FaGithub, href: "https://github.com/ayushchhanchar", color: "hover:text-gray-400" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/ayush-chhanchar-278a19231/", color: "hover:text-blue-400" },
            { icon: FaEnvelope, href: "mailto:chhancharayush007@gmail.com", color: "hover:text-red-400" }
          ].map(({ icon: Icon, href, color }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`text-gray-300 ${color} transition-all duration-300`}
              whileHover={{ 
                scale: 1.2, 
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
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-pink-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}