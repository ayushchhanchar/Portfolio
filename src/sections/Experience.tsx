import { motion } from "framer-motion"
import { fadeUp } from "../utils/motion"
import { useGsapFadeIn } from "../utils/useGsapFadeIn"
import { useRef } from "react"


export const Experience = () => {
    const sectionRef: any = useRef(null)
    useGsapFadeIn(sectionRef)

  return (
    <section  ref={sectionRef} id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-semibold text-pink-400">React JS Intern — ABSTINENT RESEARCH AND TECHNOLOGIES</h3>
        <p className="text-gray-300 mt-2 text-sm">Sept 2024 – Nov 2024</p>
        <ul className="mt-4 list-disc list-inside text-gray-400 space-y-1 text-sm">
          <li>Built responsive websites using React.</li>
          <li>Worked on a live project called <b>Vibe</b>, integrating workflows with React Flow.</li>
          <li>Collaborated on performance optimization and component reuse.</li>
          <li>Delivered visually appealing and customizable interfaces.</li>
        </ul>
      </motion.div>
    </section>
  )
}
