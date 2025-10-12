
'use client'

export const dynamic = 'force-dynamic'

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
  SparkleIcon,
} from "lucide-react"
import { HomeIcon } from "lucide-react"
import { FAQSection } from "@/components/faq-section"
import Navbar from "@/components/Navbar"
import { Text } from '../components/Text'
import About  from '../components/About'
import  BeforeAfter  from '../components/BeforeAfter'
import ScrollDemo from "@/components/ScrollDemo"

import Hero from "@/components/Hero"
import Footer  from "@/components/Footer"
import SponsorsSection from "@/components/Sponsors"
import CurvedLoop from "@/components/CurvedLoop"
import TikTokEmbed from "@/components/TiktokEmbed"
import Services from "@/components/Services"
import Contact from "@/components/contact"
import Info from "@/components/info"
import TestimonialsSection from "@/components/TestimonailsSection"
import Cta from "@/components/Cta"
import nextDynamic from "next/dynamic";

const CarouselDemo = nextDynamic(
  () => import("@/components/CarouselDemo").then(mod => mod.CarouselDemo),
  { ssr: false } // <- ensures this component never runs on the server
);
// import dynamic from "next/dynamic";

// const CarouselDemo = dynamic(
//   () => import("@/components/CarouselDemo").then(mod => mod.CarouselDemo),
//   { ssr: false }
// );




export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">

<Navbar/>
      <main className="flex-1">
        {/* Hero Section */}
       <Hero/>
<Text/>
        {/* Services Section */}
        <Services/>
        {/* <SponsorsSection/> */}

{/* <About/> */}
<Info/>

<CurvedLoop 
marqueeText="Crystal ✦ Cleans ✦ And ✦ Co  ✦"
speed={2}
 curveAmount={300}
direction="right"
 interactive={true}
/>
      

<section id="reviews" className="py-36 md:py-24 lg:py-32 ">
<TestimonialsSection/>
</section>
   

        <div className="container px-4 md:px-6 max-w-7xl mx-auto">


      
    <BeforeAfter />
    </div>
   
       


      

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Badge className="bg-white border border-[#002657] text-[#002657]  hover:bg-blue-100">FAQ</Badge>
                <h2 className="text-3xl font-semibold tracking-tighter text-gray-900 md:text-4xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                Hitta svar på vanliga frågor om våra städtjänster, policys och rutiner.
                </p>
              </div>
            </div>
             <div className="mx-auto max-w-4xl bg-[#002657] p-10 md:p-16 rounded-lg">
            <FAQSection />
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Har du fler frågor?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                onClick={() => window.location.href = "mailto:crystalcleansab@gmail.com?subject=Hello"}

                className="bg-[#002657]  hover:bg-blue-700">Kontakta Oss</Button>
                <Button variant="outline" className="border-[#002657]  text-[#002657]  hover:bg-blue-50">
                  <Phone className="mr-2 h-4 w-4" />  +46 76-306 35 43
                </Button>
              </div>
            </div>
          </div>
        </section>
<CarouselDemo/>

<Cta/>


{/* <TikTokVideoContainer 
  videos={[
    { url: "https://www.tiktok.com/@crystalcleansab/video/7536288256569265430?is_from_webapp=1&sender_device=pc&web_id=7537021035360519702", title: "Video 1" },
    { url: "https://www.tiktok.com/@crystalcleansab/video/7535966872387276054?is_from_webapp=1&sender_device=pc&web_id=7537021035360519702", title: "Video 2" },
    { url: "https://www.tiktok.com/@crystalcleansab/video/7524505577901346070?is_from_webapp=1&sender_device=pc&web_id=7537021035360519702", title: "Video 3" }
  ]}
/> */}
      <Contact/>

      </main>

     <Footer/>
    </div>
  )
}