"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Facilities Manager, TechCorp",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Since installing AirSense in our office building, employee sick days have decreased by 23%. The data has helped us identify and address air quality issues we didn't even know existed.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Environmental Safety Officer, Manufacturing Inc.",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The industrial sensors from AirSense have been crucial in helping us maintain compliance with environmental regulations. The real-time alerts have prevented several potential issues.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Hospital Administrator, City Medical Center",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Air quality is critical in healthcare environments. AirSense provides the precision monitoring we need to ensure patient and staff safety. The system is reliable and easy to use.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "School Principal, Greenwood Elementary",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Our students' health is our top priority. AirSense helps us maintain optimal air quality in classrooms, and parents appreciate our commitment to providing a healthy learning environment.",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Homeowner & Mother",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "As a mother of two children with asthma, AirSense gives me peace of mind. I can monitor our home's air quality in real-time and take action when needed. It's been a game-changer for our family.",
    rating: 5,
  },
]

export function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff =
      diff > testimonials.length / 2
        ? diff - testimonials.length
        : diff < -testimonials.length / 2
          ? diff + testimonials.length
          : diff

    if (normalizedDiff === 0) {
      // Center card
      return {
        transform: "translateX(0%) scale(1)",
        opacity: 1,
        zIndex: 3,
      }
    } else if (normalizedDiff === 1) {
      // Next card (right)
      return {
        transform: "translateX(80%) scale(0.85)",
        opacity: 0.6,
        zIndex: 2,
      }
    } else if (normalizedDiff === -1) {
      // Previous card (left)
      return {
        transform: "translateX(-80%) scale(0.85)",
        opacity: 0.6,
        zIndex: 2,
      }
    } else {
      // Hidden cards
      return {
        transform: normalizedDiff > 0 ? "translateX(100%) scale(0.7)" : "translateX(-100%) scale(0.7)",
        opacity: 0,
        zIndex: 1,
      }
    }
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="relative h-96 overflow-hidden">
        {testimonials.map((testimonial, index) => {
          const style = getCardStyle(index)
          return (
            <div
              key={testimonial.id}
              className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out"
              style={style}
            >
              <div className="w-full max-w-lg mx-4">
                <div className="bg-gray-900 rounded-lg p-8 text-center relative border border-gray-800 hover:border-[#f485c7]/30 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f485c7]/10 to-transparent rounded-lg"></div>
                  <div className="relative z-10">
                    <div className="mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        width={80}
                        height={80}
                        alt={testimonial.name}
                        className="rounded-full mx-auto mb-4 border-4 border-[#f485c7]/20"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-[#f485c7] fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-300 mb-6 italic leading-relaxed line-clamp-4">
                      "{testimonial.content}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="text-[#f485c7] text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white border border-gray-700 z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-800 text-white border border-gray-700 z-10"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#f485c7] scale-110" : "bg-gray-600 hover:bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {isAutoPlaying ? "Pause" : "Play"} Auto-scroll
        </button>
      </div>
    </div>
  )
}
