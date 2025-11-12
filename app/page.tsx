
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
import { TestimonialCarousel } from "@/components/TestimonialTest"
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
import CTASection from "@/components/CtaSection"
import VideoReviews from "@/components/VideoReviews"
import Steps from "@/components/Steps"
import Achievements from "@/components/Achievments"

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
{/* <Text/> */}
        {/* Services Section */}
        <Services/>
        {/* <SponsorsSection/> */}
{/* <About/> */}
<Info/>

{/* <CurvedLoop 
marqueeText="Crystal ✦ Cleans ✦ And ✦ Co  ✦"
speed={2}
 curveAmount={300}
direction="right"
 interactive={true}
/> */}
      
      <CTASection/>

      <div className="container px-4 md:px-6 lg:py-32 max-w-7xl mx-auto">


      
<BeforeAfter />
</div>

<section id="reviews" className="py-36 md:py-24 lg:py-36  ">
<TestimonialCarousel testimonials={[
  {
    id: 1,
    name: "Mohammed",
    role: "Gelatostation",
    text: "Vi behövde en pålitlig städfirma för vårt kafé, och valet kunde inte varit bättre. Allt från golv till glassdisken hålls i toppskick. De arbetar diskret innan öppning och lämnar alltid en fräsch doft i lokalen.",
    rating: 5, // NEW: 1-5 stars
    businessLogo: "/gelato.png", // NEW: Optional logo URL
  },
  {
    id: 2,
    name: "Ahmed", 
    role: "Smash Market",
    text: "Som restaurang är det avgörande att allt hålls rent, särskilt i köket. Städteamet gör ett fantastiskt jobb varje kväll inget lämnas åt slumpen. Golv, ytor och köksutrustning är alltid fläckfria.",
    rating: 5, // NEW: 1-5 stars
    businessLogo: "/smash1.jpg", // NEW: Optional logo URL
  },
  {
    id: 3,
    name: "Castro",
    role: "Tandklinik",
    text: "Vi är otroligt nöjda med städningen! Kliniken måste alltid vara hygienisk och skinande ren, och teamet lever verkligen upp till det. De är noggranna, punktliga och anpassar sig efter våra öppettider.",
    rating: 5, // NEW: 1-5 stars
    businessLogo: "/smile.png.avif", // NEW: Optional logo URL
  },
  {
    id: 4,
    name: "Ifrax",
    role: "Privat person",
    text: "Jag älskar att komma hem efter jobbet när de har varit här allt doftar rent och ytorna glänser! Städarna är både trevliga och professionella, och jag känner mig trygg med att släppa in dem i mitt hem.",
    rating: 5, // NEW: 1-5 stars
  }
]}/> 

</section>
{/* <section id="reviews" className="py-36 md:py-24  ">
<TestimonialsSection/>
</section> */}
   
{/* <VideoReviews/> */}
    
   <section className="py-24 md:py-32">
   <Achievements/>

   </section>

<Steps/>
      

        {/* FAQ Section */}
        <section id="faq">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            </div>
             <div className="mx-auto   md:p-16 rounded-lg">
            <FAQSection />
            </div>
            {/* <div className="text-center mt-6">
              <p className="text-gray-600 mb-6" >Har du fler frågor?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                onClick={() => window.location.href = "mailto:kontakt@crystalcleans.se?subject=Hello"}

                className="bg-[#002657]  hover:bg-blue-700">Kontakta Oss</Button>
                <Button variant="outline" className="border-[#002657]  text-[#002657]  hover:bg-blue-50">
                  <Phone className="mr-2 h-4 w-4" />  +46 76-306 35 43
                </Button>
              </div>
            </div> */}
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