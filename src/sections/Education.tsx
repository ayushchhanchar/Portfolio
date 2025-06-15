import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const educationData = [
  {
    title: "B.Tech - Computer Science (Cyber Security)",
    institution: "Oriental College of Technology",
    duration: "Aug 2021 – May 2025",
    side: "left",
    logo: "/college-logo.png",
  },
  {
    title: "12th Grade - CBSE Board",
    institution: "Jawaharlal Nehru School(S.W.), Bhopal",
    duration: "2020 – 2021",
    side: "left",
    logo: "/school-logo.png",
  },
  {
    title: "10th Grade - CBSE Board",
    institution: "Jawaharlal Nehru School(S.W.), Bhopal",
    duration: "2018 – 2019",
    side: "left",
    logo: "/logo.png",
  },
]

export const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

 useEffect(() => {
  const el = sectionRef.current
  if (!el) return

  const cards = el.querySelectorAll(".edu-card")

  cards.forEach((card, index) => {
    const isLeft = educationData[index].side === "left"
    const dateEl = document.getElementById(`edu-date-${index}`)

    // Animate the card
    gsap.fromTo(
      card,
      {
        xPercent: 0,
        rotationY: 0,
      },
      {
        xPercent: isLeft ? 100 : -100,
        rotationY: isLeft ? -15 : 15,
        ease: "power3.inOut",
        duration: 1.0,
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    )

    // Animate the date
    if (dateEl) {
      gsap.fromTo(
        dateEl,
        {
          xPercent: 0,
        },
        {
          xPercent: isLeft ? -300 : 300, // move across the line
          ease: "power3.inOut",
          duration: 1.0,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers : true
          },
        }
      )
    }
  })
}, [])



  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-24 px-6   flex flex-col justify-center items-center text-center pt-20 overflow-hidden"
    >
      <h2 className="text-5xl font-extrabold text-center mb-24 tracking-tight text-pink-500">
        🎓 Academic History
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-600" />

        {educationData.map((item, i) => {
        const cardRef = useRef<HTMLDivElement>(null)
        const isLeft = item.side === "left"

        return (
          <div
            key={i}
            className={`edu-item mb-32 w-full flex flex-col md:flex-row items-center md:items-start ${
              isLeft
                ? "md:justify-start"
                : "md:justify-end md:flex-row-reverse"
            } relative perspective-[1000px]`}
          >
            {/* Content Card */}
            <div
                ref={cardRef}
                className="edu-card w-full md:w-[48%] bg-gray-800 p-10 rounded-xl shadow-xl z-10 transition-transform duration-700"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
                  {item.institution}
                </h3>
                <p className="text-lg text-pink-200 mb-1">{item.title}</p>
              </div>


            {/* Timeline Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white border-4 border-pink-600 flex items-center justify-center z-20 shadow-xl animate-pulse">
              <img
                src={item.logo}
                alt="logo"
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>

            {/* Date Label */}
            {/* Date Label */}
              <div
                className={`edu-date absolute top-1/2 text-sm md:text-base text-gray-400 transform -translate-y-1/2 ${
                  isLeft ? "left-[calc(50%+80px)] text-left" : "right-[calc(50%+80px)] text-right"
                }`}
                id={`edu-date-${i}`}
              >
                {item.duration}
              </div>

          </div>
  )
})}

      </div>
    </section>
  )
}
