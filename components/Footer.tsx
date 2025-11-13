import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram,FaLinkedin, FaTiktok } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div> */}
{/* 
                          <Image
                            src="/image 1-2.png"
                            width={58}
                            height={58}
                            alt="Crystal Cleans Logo"
                            priority
                          /> */}
                          
              <span className="text-xl font-bold">Crystal Cleans & Co</span>
              <div/>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional cleaning services with Swedish quality standards.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.instagram.com/crystalcleansab?igsh=bWhrZHM1aWtpZG4x" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@crystalcleansab?_t=ZN-90O1xIupbde&_r=1" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTiktok className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/crystal-cleans-ab-1b6b1a367/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Flyttstädning",
                "Hemstädning",
                "Fönsterputs",
                "Företagsstädning",
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Kontact", href: "#contact" },
                { name: "FAQ", href: "#faq" },
                { name: "Recensioner", href: "#reviews" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+46 76-306 35 43</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">kontakt@crystalcleans.se</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                Akaciagården 12,Angered                  
                <br />
                  Göteborg, Sverige
                </span>
              </div>
            </div>
          </div>
        </div>

      

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CrystalCleans&Co. All rights reserved.</p>
          <p className="text-gray-400 text-sm"> Powered by ZENIT</p>
        </div>
      </div>
    </footer>
  )
}
