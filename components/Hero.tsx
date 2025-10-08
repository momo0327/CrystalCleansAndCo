import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Sparkles,
    Building2,
    Car,
    CheckCircle,
    Star,
    Phone,
    Mail,
    MapPin,
    Clock,
    Shield,
    Users,
    Award,
    Menu,
  } from "lucide-react"
function Hero() {
  return (
    <div>
         <section className="relative w-full h-screen overflow-hidden ">
  {/* Background Video */}
  <div className="absolute inset-0 z-0  " >
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-lg "
    >
      <source src="/clean.mp4" type="video/mp4" />
      <source src="/cleaning-hero-video.webm" type="video/webm" />
    </video>
    {/* Video overlay for better text readability */}
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center justify-center">
    <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none drop-shadow-lg">
        Kristallklara ytor, professionell perfektion
        </h1>
        <p className="max-w-[600px] mx-auto text-white/90 md:text-xl drop-shadow-md">
        Vi skapar skinande rena miljöer för hem och arbetsplatser med miljövänliga produkter och noggrannhet i varje detalj.
        </p>
      </div>
      
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button size="lg" className="bg-white hover:bg-blue-100 shadow-lg borde font-lg text-blue-900">
          Book Cleaning Now
        </Button>
      </div>
{/*       
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/90">
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <span>Insured & Bonded</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <span>Eco-Friendly</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <span>24/7 Support</span>
        </div>
      </div> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero