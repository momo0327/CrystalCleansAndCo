"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface Client {
  name: string
  logo: string
}

const clients: Client[] = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120&text=TechCorp" },
  { name: "GreenBuildings", logo: "/placeholder.svg?height=60&width=120&text=GreenBuildings" },
  { name: "HealthCare Plus", logo: "/placeholder.svg?height=60&width=120&text=HealthCare+" },
  { name: "EduSystems", logo: "/placeholder.svg?height=60&width=120&text=EduSystems" },
  { name: "IndustrialTech", logo: "/placeholder.svg?height=60&width=120&text=IndustrialTech" },
  { name: "SmartHomes", logo: "/placeholder.svg?height=60&width=120&text=SmartHomes" },
  { name: "CleanAir Inc", logo: "/placeholder.svg?height=60&width=120&text=CleanAir" },
  { name: "FutureLabs", logo: "/placeholder.svg?height=60&width=120&text=FutureLabs" },
  { name: "EcoSolutions", logo: "/placeholder.svg?height=60&width=120&text=EcoSolutions" },
  { name: "MedicalCenter", logo: "/placeholder.svg?height=60&width=120&text=MedicalCenter" },
]

export function InfiniteClientScroll() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const firstGroupRef = useRef<HTMLDivElement>(null)
  const secondGroupRef = useRef<HTMLDivElement>(null)

  // Duplicate the clients array to create a seamless loop
  const allClients = [...clients, ...clients]

  useEffect(() => {
    if (!scrollerRef.current || !firstGroupRef.current || !secondGroupRef.current) return

    // Set the animation duration based on the number of clients
    const pixelsPerSecond = 50
    const firstGroupWidth = firstGroupRef.current.offsetWidth
    const animationDuration = firstGroupWidth / pixelsPerSecond

    const scrollerElement = scrollerRef.current
    scrollerElement.style.setProperty("--animation-duration", `${animationDuration}s`)

    // Reset animation when it completes
    const handleAnimationIteration = () => {
      if (scrollerElement && !isPaused) {
        scrollerElement.style.animation = "none"
        scrollerElement.offsetHeight // Trigger reflow
        scrollerElement.style.animation = `scroll var(--animation-duration) linear infinite`
      }
    }

    scrollerElement.addEventListener("animationiteration", handleAnimationIteration)

    return () => {
      scrollerElement.removeEventListener("animationiteration", handleAnimationIteration)
    }
  }, [isPaused])

  return (
    <div
      className="relative w-full overflow-hidden bg-black py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-black to-transparent"></div>

      <div className="relative flex overflow-x-hidden">
        <div
          ref={scrollerRef}
          className="flex animate-scroll"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            animationDuration: "var(--animation-duration)",
          }}
        >
          <div ref={firstGroupRef} className="flex items-center justify-around min-w-max gap-16 px-8">
            {clients.map((client, index) => (
              <div
                key={`client-1-${index}`}
                className="flex items-center justify-center h-16 w-32 bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-[#f485c7]/30"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div ref={secondGroupRef} className="flex items-center justify-around min-w-max gap-16 px-8">
            {clients.map((client, index) => (
              <div
                key={`client-2-${index}`}
                className="flex items-center justify-center h-16 w-32 bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-110 border border-gray-800 hover:border-[#f485c7]/30"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
