import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-10"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        action="mailto:chhancharayush007@gmail.com"
        method="POST"
        encType="text/plain"
        className="flex flex-col gap-6 text-left"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          required
          className="bg-gray-800 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 transition text-white font-semibold py-3 px-6 rounded-md"
        >
          Send Message
        </motion.button>
      </motion.form>

      <div className="flex justify-center gap-6 mt-10 text-white text-lg">
        <a href="mailto:chhancharayush007@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="hover:text-pink-500 transition" />
        </a>
        <a href="https://linkedin.com/in/ayush-chhanchar-278a19231/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-pink-500 transition" />
        </a>
        <a href="https://github.com/ayushchhanchar" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-pink-500 transition" />
        </a>
      </div>
    </section>
  )
}
