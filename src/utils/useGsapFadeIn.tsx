import { useEffect } from "react"
import type {RefObject} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const useGsapFadeIn = (sectionRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [sectionRef])
}
