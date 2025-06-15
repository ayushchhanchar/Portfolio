import { useRef, useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  download?: boolean
}

const MagneticButton = ({ children, className = "", href = "#", download }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      const { left, top, width, height } = ref.current.getBoundingClientRect()
      const mouseX = e.clientX
      const mouseY = e.clientY
      const centerX = left + width / 2
      const centerY = top + height / 2
      const distX = mouseX - centerX
      const distY = mouseY - centerY
      const distance = Math.sqrt(distX ** 2 + distY ** 2)

      const maxDistance = 100
      const strength = Math.max(0, 1 - distance / maxDistance)

      x.set(distX * strength)
      y.set(distY * strength)
    }

    const reset = () => {
      x.set(0)
      y.set(0)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", reset)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", reset)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      <a
        href={href}
        download={download}
        className={`group inline-flex items-center gap-2 px-6 py-3 text-white bg-pink-600 rounded-md font-semibold text-sm md:text-base hover:bg-pink-700 transition-all transform shadow-lg relative overflow-hidden ${className}`}
      >
        {children}
        <span className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-20 transition duration-300 blur-sm rounded-md" />
      </a>
    </motion.div>
  )
}

export default MagneticButton
