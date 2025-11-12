"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Star, ChevronDown } from "lucide-react";
import { AvatarCircles } from "./AvatarCircles";

type FormType = "offert" | "bokning";

const ModernContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "Flyttstädning",
    date: "",
    message: "",
  });

  const [formType, setFormType] = useState<FormType>("offert");
  const [submitted, setSubmitted] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const serviceOptions = [
    { value: "Flyttstädning", label: "Flyttstädning" },
    { value: "Hemstädning", label: "Hemstädning" },
    { value: "Fönsterputs", label: "Fönsterputs" },
    { value: "Företagsstädning", label: "Företagsstädning" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceSelect = (value: string) => {
    setFormData({ ...formData, serviceType: value });
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToTerms) {
      alert("Vänligen godkänn villkoren för att fortsätta");
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: formType }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          resetForm();
        }, 3000);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      alert("Något gick fel. Vänligen försök igen.");
      console.error(error);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "Flyttstädning",
      date: "",
      message: "",
    });
    setAgreeToTerms(false);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gray-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 text-black">
            {/* Badge - Animates first */}
            <div 
              className={`inline-block transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="px-4 py-2 rounded-full border border-black/20 text-sm font-medium bg-white/5">
                Contact Form
              </span>
            </div>

            {/* Heading - Animates second */}
            <div
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <h2 className="text-3xl lg:text-4xl font-medium mb-6 leading-tight">
                Fyll i formuläret för en <br /> gratis offert eller bokning
              </h2>
            </div>

            {/* Reviews - Animates third */}
            <div 
              className={`flex items-center gap-4 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              {/* Avatar Group */}
              <AvatarCircles
  numPeople={99}
  avatarUrls={[
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
  ]}
/>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.5</span>
                <span className="text-gray-400">(100+ reviews)</span>
              </div>
            </div>

            {/* Contact Information */}
            <div 
              className={`space-y-6 pt-8 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <h3 className="text-xl font-medium mb-6">Kontakta oss</h3>
              
              {/* Phone */}
              <div 
                className={`flex items-start gap-4 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Telefon</p>
                  <a href="tel:+46763063543" className="text-lg font-medium hover:text-[#0287FE] transition-colors">
                    +46 76-306 35 43
                  </a>
                </div>
              </div>

              {/* Email */}
              <div 
                className={`flex items-start gap-4 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a href="mailto:kontakt@crystalcleans.se" className="text-lg font-medium hover:text-[#0287FE] transition-colors">
                    kontakt@crystalcleans.se
                  </a>
                </div>
              </div>

              {/* Location */}
              <div 
                className={`flex items-start gap-4 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Serviceområde</p>
                  <p className="text-lg font-medium">Västra Götaland, Göteborg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form - Animates as a whole */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 border ">
              {/* Toggle Buttons */}
              <div className="flex gap-3 mb-8">
                <button
                  type="button"
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    formType === "offert"
                      ? "bg-[#002657] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setFormType("offert")}
                >
                  Offert
                </button>
                <button
                  type="button"
                  className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    formType === "bokning"
                      ? "bg-[#002657] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setFormType("bokning")}
                >
                  Bokning
                </button>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="text-green-800 font-semibold text-center">
                    ✓ Tack! Vi kontaktar dig inom 24 timmar.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Förnamn*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-gray-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Efternamn
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-gray-50"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefonnummer*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+46 76-306 35 43"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-gray-50"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-gray-50"
                    required
                  />
                </div>

                {/* Service Type Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tjänstetyp*
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all"
                    >
                      <span className="text-gray-900">
                        {serviceOptions.find(
                          (option) => option.value === formData.serviceType
                        )?.label}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                        {serviceOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleServiceSelect(option.value)}
                            className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-gray-900"
                          >
                            {option.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Date Field (only for booking) */}
                {formType === "bokning" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Önskat datum*
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all bg-gray-50"
                      required
                    />
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meddelande
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Lämna ditt meddelande till oss"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:border-transparent transition-all resize-none bg-gray-50"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-[#1a1a1a] focus:ring-[#1a1a1a]"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Jag godkänner{" "}
                    <a href="#" className="text-[#0287FE] hover:underline">
                      behandlingen av personuppgifter
                    </a>{" "}
                    och samtycker till att ta emot marknadsföringsmaterial.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!agreeToTerms}
                  className="w-full bg-[#002657] text-white py-4 px-6 rounded-full font-semibold text-lg hover:bg-[#2a2a2a] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Skicka förfrågan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </section>
  );
};

export default ModernContactSection;