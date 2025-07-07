import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextReveal } from "../components/TextReveal"

gsap.registerPlugin(ScrollTrigger)

const educationData = [
  {
    title: "B.Tech - Computer Science (Cyber Security)",
    institution: "Oriental College of Technology",
    duration: "Aug 2021 – May 2025",
    description: "Specializing in Cybersecurity with focus on web application security, network protocols, and secure coding practices.",
    grade: "Current CGPA: 8.2/10",
    logo: "🎓",
    color: "from-pink-500 to-purple-600"
  },
  {
    title: "12th Grade - CBSE Board",
    institution: "Jawaharlal Nehru School(S.W.), Bhopal",
    duration: "2020 – 2021",
    description: "Science stream with Mathematics, Physics, Chemistry, and Computer Science.",
    grade: "Percentage: 85%",
    logo: "📚",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "10th Grade - CBSE Board",
    institution: "Jawaharlal Nehru School(S.W.), Bhopal",
    duration: "2018 – 2019",
    description: "Completed secondary education with excellent performance in Mathematics and Science.",
    grade: "Percentage: 88%",
    logo: "🏫",
    color: "from-green-500 to-teal-500"
  },
]

export const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline cards on scroll
      gsap.fromTo(
        ".education-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Animate timeline line
      gsap.fromTo(
        ".timeline-line",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Animate dots
      gsap.fromTo(
        ".timeline-dot",
        {
          scale: 0,
          rotation: -180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-24 px-6 max-w-6xl mx-auto relative"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4">
            <TextReveal>🎓 Academic Journey</TextReveal>
          </h2>
        </motion.div>
        <TextReveal
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          delay={0.5}
        >
          My educational background and academic achievements that shaped my technical expertise
        </TextReveal>
      </div>

      {/* Timeline Container */}
      <div ref={timelineRef} className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-600 timeline-line origin-top" />

        {/* Education Cards */}
        <div className="space-y-16">
          {educationData.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`education-card relative flex items-center ${
                  isLeft ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    className="timeline-dot w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-gray-900"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(236, 72, 153, 0.6)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.logo}
                  </motion.div>
                </div>

                {/* Education Card */}
                <motion.div
                  className={`w-full md:w-[45%] ${
                    isLeft ? 'md:pr-12' : 'md:pl-12'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-xl`}>
                    <div className="bg-gray-900 rounded-2xl p-8 h-full">
                      {/* Duration Badge */}
                      <motion.div
                        className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.duration}
                      </motion.div>

                      {/* Institution */}
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.institution}
                      </h3>

                      {/* Title */}
                      <h4 className="text-lg font-semibold text-pink-300 mb-3">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Grade */}
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-yellow-300 font-medium text-sm">
                          {item.grade}
                        </span>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 opacity-10">
                        <motion.div
                          className="text-6xl"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          {item.logo}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connection Line */}
                <motion.div
                  className={`hidden md:block absolute top-1/2 w-12 h-0.5 bg-gradient-to-r ${item.color} ${
                    isLeft 
                      ? 'left-1/2 ml-8' 
                      : 'right-1/2 mr-8'
                  }`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-sm border border-pink-500/20 rounded-full px-8 py-4">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            🚀
          </motion.span>
          <span className="text-gray-300 font-medium">
            Continuous Learning & Growth
          </span>
        </div>
      </motion.div>
    </section>
  )
}