import { useEffect, useState } from "react"
import { Hero } from "./sections/Hero"
import { Navbar } from "./components/Navbar"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { About } from "./sections/About"
import { Skills } from "./sections/Skills"
import { Contact } from "./sections/Contact"
import { Education } from "./sections/Education"
import Preloader from "./components/Preloader"
import { FloatingChatbot } from "./components/FloatingChatbot"
import { ScrollProgress } from "./components/ScrollProgress"
import { useSmoothScroll } from "./utils/useSmoothScroll"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useSmoothScroll()

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white font-sans scroll-smooth dark">
          <ScrollProgress />
          <Navbar />
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <About />
          <Skills />
          <Contact />
          <FloatingChatbot />
        </div>
      )}
    </>
  )
}

export default App