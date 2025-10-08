"use client";
import React, { useState } from 'react'
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
  X,
} from "lucide-react"
import { HomeIcon } from "lucide-react"
import { FAQSection } from "@/components/faq-section"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <header className="fixed top-0 z-50 w-full bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center ml-[-15px]">
            <Image
              src="/image 1-2.png"
              width={58}
              height={58}
              alt="Crystal Cleans Logo"
              priority
            />
            <span className="text-md font-semibold text-[#002657]">
              Crystal Cleans & Co
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Tjänster
            </Link>
           
            <Link href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Recensioner
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>
          
          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-[#002657] text-[#002657] hover:bg-blue-50">
              Kontakta
            </Button>
            <Button className="hidden md:flex bg-[#002657] hover:bg-blue-700">Boka Nu</Button>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden z-50 relative "
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed top-0 right-0 h-screen w-full bg-white z-50 md:hidden
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Crystal Cleans Logo"
            />
            <span className="text-lg font-semibold text-[#002657]">Crystal Cleans & Co</span> */}
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={closeMobileMenu}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <div className="h-[calc(100vh-160px)] flex flex-col">
          {/* Navigation Links */}
          <div className="px-6 py-6 overflow-y-auto">
            <div className="space-y-4">
              <Link 
                href="#services" 
                className="block text-xl font-medium text-gray-900 hover:text-[#002657] transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                Tjänster
              </Link>
            
              <Link 
                href="#testimonials" 
                className="block text-xl font-medium text-gray-900 hover:text-[#002657] transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                Recensioner
              </Link>
              <Link 
                href="#faq" 
                className="block text-xl font-medium text-gray-900 hover:text-[#002657] transition-colors py-3 border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Kontakta oss</h3>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone className="h-4 w-4 text-[#002657]" />
                <span>+46 70 123 45 67</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail className="h-4 w-4 text-[#002657]" />
                <span>crystalcleans@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin className="h-4 w-4 text-[#002657]" />
                <span>Göteborg, Sverige</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA Buttons - Fixed at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-white space-y-3">
          <Button 
            variant="outline" 
            className="w-full border-[#002657] text-[#002657] hover:bg-blue-50 py-4 text-base"
            onClick={closeMobileMenu}
          >
            Kontakta
          </Button>
          <Button 
            className="w-full bg-[#002657] hover:bg-blue-700 py-4 text-base"
            onClick={closeMobileMenu}
          >
            Boka Nu
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar