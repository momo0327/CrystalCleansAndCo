"use client";
import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileMenu();
  };

  return (
    <div className="overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-bgColor shadow-sm">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Group 8.png"
                width={140}
                height={140}
                alt="Crystal Cleans & Co - Professionell Städtjänst"
                priority
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-darkBlue hover:text-lightBlue transition-colors font-medium"
              >
                Tjänster
              </button>

              <button
                onClick={() => scrollToSection('About')}
                className="text-darkBlue hover:text-lightBlue transition-colors font-medium"
              >
                Om oss
              </button>

              <button
                onClick={() => scrollToSection('reviews')}
                className="text-darkBlue hover:text-lightBlue transition-colors font-medium"
              >
                Recensioner
              </button>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-lightBlue hover:bg-[#9db5e8] text-darkBlue text-md font-titleFont font-bold px-4 py-6 rounded-full transition-all uppercase tracking-wide"
              >
                BOKA STÄD
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden w-8 h-6 flex flex-col justify-center gap-1.5 relative z-[70]"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-darkBlue transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-darkBlue transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Covers Entire Screen */}
      <div
        className={`lg:hidden fixed inset-0 bg-lightBlue transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto z-[60]' : 'opacity-0 pointer-events-none invisible'
        }`}
        style={{ zIndex: isMobileMenuOpen ? 60 : -9999 }}
      >
        {/* Close Button (X) - Top Right */}
        <div className="absolute top-0 right-0 p-6">
          <button
            onClick={closeMobileMenu}
            className="w-8 h-6 flex flex-col justify-center gap-1.5"
            aria-label="Close menu"
          >
            <span className="block h-0.5 w-full bg-darkBlue transition-all duration-300 rotate-45 translate-y-1" />
            <span className="block h-0.5 w-full bg-darkBlue transition-all duration-300 -rotate-45 -translate-y-1" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full justify-between px-6 pt-32 pb-16">
          {/* Navigation Links - Top */}
          <div className="flex flex-col space-y-10">
            <button
              onClick={() => scrollToSection('services')}
              className="text-5xl font-titleFont text-darkBlue hover:text-darkBlue/80 transition-colors text-left"
            >
              TJÄNSTER
            </button>

            <button
              onClick={() => scrollToSection('About')}
              className="text-5xl font-titleFont text-darkBlue hover:text-darkBlue/80 transition-colors text-left"
            >
              OM OSS
            </button>

            <button
              onClick={() => scrollToSection('reviews')}
              className="text-5xl font-titleFont text-darkBlue hover:text-darkBlue/80 transition-colors text-left"
            >
              RECENSIONER
            </button>
          </div>

          {/* Bottom Section - Social Media & CTA */}
          <div className="space-y-8">
            {/* Social Media Links */}
            <div className="flex gap-8">
              <a
                href="https://www.tiktok.com/@crystalcleansab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBlue hover:text-darkBlue/80 transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBlue hover:text-darkBlue/80 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBlue hover:text-darkBlue/80 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Mobile CTA Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-darkBlue hover:bg-darkBlue/90 text-white font-titleFont font-bold py-7 rounded-full uppercase tracking-wide text-xl"
            >
              BOKA STÄDNING
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
