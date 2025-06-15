import { useRef, useEffect } from "react"
import gsap from "gsap"

export const useTilt3D = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY

      gsap.to(el, {
        rotationY: deltaX * 10,
        rotationX: -deltaY * 10,
        transformPerspective: 1000,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.01,
      })
    }

    const resetTilt = () => {
      gsap.to(el, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }

    el.addEventListener("mousemove", handleMove)
    el.addEventListener("mouseleave", resetTilt)

    return () => {
      el.removeEventListener("mousemove", handleMove)
      el.removeEventListener("mouseleave", resetTilt)
    }
  }, [])

  return ref
}
