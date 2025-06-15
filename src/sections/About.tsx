import { motion } from "framer-motion"
import { fadeUp } from "../utils/motion"

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-center">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-300 text-lg leading-relaxed"
      >
        I'm a 4th-year B.Tech student in Computer Science (Cyber Security) at Oriental College of Technology, Bhopal. I enjoy building visually stunning and responsive websites using modern frontend tools. I love learning about React, security, and real-world project development.
      </motion.p>
    </section>
  )
}
