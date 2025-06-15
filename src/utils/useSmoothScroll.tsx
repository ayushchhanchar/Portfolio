// hooks/useSmoothScroll.ts
import { useEffect } from "react"
import SmoothScroll from "smooth-scroll"

export const useSmoothScroll = () => {
  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 700,
      speedAsDuration: true,
      offset: 80, // Adjust if you have a fixed navbar
      easing: "easeInOutCubic",
    })

    return () => scroll.destroy()
  }, [])
}
