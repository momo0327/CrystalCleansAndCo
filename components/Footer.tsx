import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

                          <Image
                            src="/image 1-2.png"
                            width={58}
                            height={58}
                            alt="Crystal Cleans Logo"
                            priority
                          />
                          
              <span className="text-xl font-bold">Crystal Cleans & Co</span>
              <div/>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Professional cleaning services with Swedish quality standards. Making your home spotless since 2018.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Regular Cleaning",
                "Deep Cleaning",
                "Move-in/Move-out",
                "Post-Construction",
                "Window Cleaning",
                "Carpet Cleaning",
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
                { name: "About Us", href: "/#about" },
                { name: "Pricing", href: "/pricing" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
                { name: "FAQ", href: "/faq" },
                { name: "Reviews", href: "/reviews" },
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
                <span className="text-gray-400">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@cleanpro.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span className="text-gray-400">
                  123 Clean Street
                  <br />
                  Stockholm, Sweden 12345
                </span>
              </div>
            </div>
          </div>
        </div>

      

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} CleanPro. All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  )
}
