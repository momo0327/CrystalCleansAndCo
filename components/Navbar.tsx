"use client";
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import { FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Add scroll listener with hide/show logic
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if navbar should have glass background
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show/hide navbar based on scroll direction
      // Always show in hero section (first ~100vh or 800px)
      if (currentScrollY < 800) {
        setIsVisible(true);
      } else {
        // After hero section, hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'py-3' 
          : 'py-6'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className={`transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'container mx-auto px-4 max-w-7xl' 
            : 'container mx-auto px-4'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-white/70 backdrop-blur-xl shadow-lg rounded-full px-6 py-3 border border-white/20' 
              : 'px-2'
          }`}>
            {/* Logo */}
            <div className="flex items-center  ml-[8px] md:ml-[-8px] ">
              {/* Desktop Logo */}
              <Image
                src="/logo2.png"
                width={isScrolled ? 120 : 200}
                height={isScrolled ? 120 : 200}
                alt="Crystal Cleans Logo"
                priority
                onClick={() => window.location.hash = "#"}
                className="hidden md:block cursor-pointer transition-all duration-300"
              />
              {/* Mobile Logo */}
              <Image
                src="/mobile.png"
                width={isScrolled ? 30 : 40}
                height={isScrolled ? 30 : 40}
                alt="Crystal Cleans Logo"
                priority
                onClick={() => window.location.hash = "#"}
                className="md:hidden cursor-pointer transition-all duration-300"
              />
              {/* <span className={`text-md hidden md:block font-semibold transition-all duration-300 ${
                isScrolled ? 'text-[#002657]' : 'text-white'
              }`}>
                Crystal Cleans & Co
              </span> */}
            </div>
            
            {/* Desktop Navigation */}
            <nav className={`hidden md:flex gap-2 transition-all duration-300 rounded-full ${
              isScrolled 
                ? 'px-0 py-0' 
                : 'bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5'
            }`}>
              <Link 
                href="#services" 
                className={`px-5 py-2 text-md font-medium transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#002657]' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Expertis
              </Link>
              <Link 
                href="#About" 
                className={`px-5 py-2 text-md font-medium transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#002657]' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Om oss
              </Link>
             
              <Link 
                href="#reviews" 
                className={`px-5 py-2 text-md font-medium transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#002657]' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Recensioner
              </Link>
              
              <Link 
                href="#faq" 
                className={`px-5 py-2 text-md font-medium transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#002657]' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                FAQ
              </Link>
            </nav>
            
            {/* Desktop Buttons */}
            <div className="flex items-center gap-3">
              <Button 
                onClick={() => window.location.hash = "#contact"}
                className={`hidden md:flex transition-all duration-300 px-12 py-6  text-md rounded-full ${
                  isScrolled 
                    ? 'bg-[#002657] hover:bg-[#001a3d] text-white' 
                    : 'bg-[#002657] hover:bg-[#001a3d] text-white shadow-lg'
                }`}
              >
                Kontakta
              </Button>
              
              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className={`md:hidden z-50 relative transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/20 bg-white/10 backdrop-blur-md border border-white/20'
                }`}
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
        <div className="flex items-center justify-between ml-[-12px]  border-gray-100">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/logo2.png"
              width={200}
              height={200}
              alt="Crystal Cleans Logo"
            /> */}
            {/* <span className="text-lg font-semibold text-[#002657]">Crystal Cleans & Co</span> */}
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
          <div className="px-6  overflow-y-auto">
            <div className="space-y-4">
              <Link 
                href="#services" 
                className="block text-3xl font-normal text-gray-900 hover:text-[#002657] transition-colors py-3  border-gray-100"
                onClick={closeMobileMenu}
              >
                Expertis
              </Link>

              <Link 
                href="#About" 
                className="block text-3xl font-normal text-gray-900 hover:text-[#002657] transition-colors py-3  border-gray-100"
                onClick={closeMobileMenu}
              >
                Om oss
              </Link>
            
              <Link 
                href="#reviews" 
                className="block text-3xl font-normal text-gray-900 hover:text-[#002657] transition-colors py-3  border-gray-100"
                onClick={closeMobileMenu}
              >
                Recensioner
              </Link>
              <Link 
                href="#faq" 
                className="block text-3xl font-normal text-gray-900 hover:text-[#002657] transition-colors  py-3 border-gray-100"
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 ">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Kontakta oss</h3>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone className="h-4 w-4 text-[#002657]" />
                <span>+46 76-306 35 43</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Mail className="h-4 w-4 text-[#002657]" />
                <span>kontakt@crystalcleans.se</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin className="h-4 w-4 text-[#002657]" />
                <span>Göteborg, Sverige</span>
              </div>
            </div>
            <div className="flex py-6 gap-4 ">
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
        </div>

        {/* Mobile CTA Buttons - Fixed at bottom */}
        <div className="absolute mb-14 bottom-0 left-0 right-0 p-6 border-t rounded-2xl  bg-gray-50/20 space-y-3">
          <Button 
            variant="outline" 
            className="w-full border-[#002657] text-[#002657] hover:bg-blue-50 py-4 text-base rounded-full"
            onClick={() => {
              window.location.href = "mailto:kontakt@crystalcleans.se?subject=Hello";
              closeMobileMenu();
            }}
          >
            Kontakta
          </Button>
          <Button 
            className="w-full bg-[#002657] hover:bg-blue-700 py-4 text-base rounded-full"
            onClick={() => {
              window.location.hash = "#contact";
              closeMobileMenu();
            }}
          >
            Boka Nu
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar