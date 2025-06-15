import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Typewriter } from "react-simple-typewriter"
import Blob from "../components/Blob"
import { fadeUp } from "../utils/motion"
import MagneticButton from "../components/MagneticButton"
// import { useTextReveal } from "../utils/textReveal"


export const Hero = () => {
    // const textRef = useTextReveal(".hero-title")
  return (
    <section
      id="home"
      className=" h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden"
    >
      <Blob />

      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center">
        {/* Terminal Intro Box */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-black/80 border border-green-500 rounded-md p-4 w-full text-left mb-8 text-green-400 font-mono shadow-md"
        >
          <p>
            <span className="text-pink-400">➜</span>{" "}
            <span className="text-green-300">~</span> npx ayush-portfolio
          </p>
          <p className="mt-2">✔ Launching portfolio...</p>
          <p className="mt-2">
            <Typewriter
              words={[
                "👋 Welcome to Ayush Chhanchar's Developer Terminal",
                "🚀 Full Stack | React | Node | MongoDB | Cybersecurity",
              ]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={45}
              deleteSpeed={20}
              delaySpeed={1500}
            />
          </p>
        </motion.div>

        {/* Hero Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Hi, I'm <span className="text-pink-500">Ayush Chhanchar</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mt-4 max-w-xl text-lg text-gray-300">
            Frontend / Full Stack Developer passionate about building beautiful and scalable web experiences.
          </p>
        </motion.div>

        {/* Resume Download */}
       <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8"
            >
            <MagneticButton href="/AyushChhanchar_Resume.pdf" download>
                📄 Download Resume
            </MagneticButton>
            </motion.div>


        {/* Social Icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 mt-6"
        >
          <a href="https://github.com/ayushchhanchar" target="_blank" rel="noreferrer">
            <FaGithub size={28} className="hover:text-pink-500 transition" />
          </a>
          <a href="https://linkedin.com/in/ayush-chhanchar-278a19231/" target="_blank" rel="noreferrer">
            <FaLinkedin size={28} className="hover:text-pink-500 transition" />
          </a>
          <a href="mailto:chhancharayush007@gmail.com">
            <FaEnvelope size={28} className="hover:text-pink-500 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}



// h-screen flex flex-col justify-center items-center text-center px-4 pt-20