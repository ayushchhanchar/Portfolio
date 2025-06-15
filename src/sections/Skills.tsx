import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaGithub, FaJava
} from "react-icons/fa"
import {
  SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiVite
} from "react-icons/si"
import { useTilt3D } from "../utils/useTilt3D"

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: "HTML", icon: <FaHtml5 />, group: "Frontend", size: "small", bg: "bg-gradient-to-br from-orange-600 to-red-500" },
  { name: "CSS", icon: <FaCss3Alt />, group: "Frontend", size: "small", bg: "bg-gradient-to-br from-blue-500 to-cyan-400" },
  { name: "JavaScript", icon: <FaJs />, group: "Frontend", size: "medium", bg: "bg-gradient-to-br from-yellow-400 to-yellow-500" },
  { name: "TypeScript", icon: <SiTypescript />, group: "Frontend", size: "small", bg: "bg-gradient-to-br from-blue-400 to-blue-600" },
  { name: "React", icon: <FaReact />, group: "Frontend", size: "small", bg: "bg-gradient-to-br from-cyan-400 to-teal-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, group: "Frontend", size: "small", bg: "bg-gradient-to-br from-teal-400 to-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, group: "Backend", size: "medium", bg: "bg-gradient-to-br from-green-500 to-lime-400" },
  { name: "Express", icon: <SiExpress />, group: "Backend", size: "small", bg: "bg-gradient-to-br from-gray-600 to-gray-500" },
  { name: "MongoDB", icon: <SiMongodb />, group: "Backend", size: "medium", bg: "bg-gradient-to-br from-green-500 to-emerald-400" },
  { name: "Java", icon: <FaJava />, group: "Backend", size: "small", bg: "bg-gradient-to-br from-red-500 to-pink-500" },
  { name: "Git", icon: <FaGitAlt />, group: "Tools", size: "small", bg: "bg-gradient-to-br from-orange-500 to-yellow-400" },
  { name: "GitHub", icon: <FaGithub />, group: "Tools", size: "medium", bg: "bg-gradient-to-br from-gray-700 to-gray-800" },
  { name: "Vite", icon: <SiVite />, group: "Tools", size: "small", bg: "bg-gradient-to-br from-purple-500 to-indigo-500" },
]

export const Skills = () => {
  const groups = ["Frontend", "Backend", "Tools"]
  const cardRefs = useRef<HTMLDivElement[]>([])
  const bounceTweens = useRef<gsap.core.Tween[]>([])

  useEffect(() => {
    const cards = cardRefs.current

    ScrollTrigger.create({
      trigger: "#skills",
      start: "top 80%",
      once: true,
      onEnter: () => {
        // Step 1: Initial chaos
        gsap.fromTo(
          cards,
          {
            x: () => gsap.utils.random(-500, 500),
            y: () => gsap.utils.random(-400, 400),
            scale: () => gsap.utils.random(0.7, 1.5),
            rotation: () => gsap.utils.random(-45, 45),
            opacity: 0.4,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            ease: "expo.inOut",
            duration: 2.5,
            stagger: 0.3,
            onComplete: () => {
              // Step 2: Infinite float per card
              cards.forEach((el, i) => {
                const tween = gsap.to(el, {
                  x: () => gsap.utils.random(-40, 40),
                  y: () => gsap.utils.random(-40, 40),
                  rotation: () => gsap.utils.random(-10, 10),
                  duration: gsap.utils.random(1.5, 2.5),
                  ease: "sine.inOut",
                  yoyo: true,
                  repeat: -1,
                  delay: i * 0.03,
                })
                bounceTweens.current.push(tween)

                // Pause on hover
                el.addEventListener("mouseenter", () => tween.pause())
                el.addEventListener("mouseleave", () => tween.resume())
              })
            }
          }
        )
      }
    })
  }, [])

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center text-white mb-16"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 xl:mb-0">
        {groups.map((grp) => (
          <div key={grp} className="relative flex flex-col items-center">
            <div className="absolute -top-8 bg-pink-600 text-white px-4 py-1 rounded-full shadow-md z-10">
              {grp}
            </div>
            <div className="h-1 w-16 bg-pink-400 mt-4 mb-4" />
            <div className="flex flex-wrap justify-center gap-6">
              {skills
                .filter((s) => s.group === grp)
                .map((skill, i) => {
                  const colSpan =
                    skill.size === "large" ? "w-[240px] h-[200px]" :
                    skill.size === "medium" ? "w-[200px] h-[160px]" :
                    "w-[160px] h-[120px]"

                  const tiltRef = useTilt3D()
                  const localRef = useRef<HTMLDivElement>(null)

                  useEffect(() => {
                    if (localRef.current) cardRefs.current.push(localRef.current)
                  }, [])

                  return (
                    <motion.div
                      key={i}
                      ref={(el) => {
                        localRef.current = el
                        if (tiltRef) (tiltRef as any).current = el
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 180, damping: 20 }}
                      className={`${colSpan} ${skill.bg} p-4 rounded-xl text-white flex flex-col items-start justify-end shadow-xl hover:shadow-pink-500/30 cursor-pointer transition-all duration-300`}
                    >
                      <div className="text-4xl mb-2">{skill.icon}</div>
                      <div className="text-lg font-semibold">{skill.name}</div>
                    </motion.div>
                  )
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
