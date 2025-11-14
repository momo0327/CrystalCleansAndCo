"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Badge } from './ui/badge';

const Steps = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      title: "Preliminär bokning och offert",
      description: "Kontakta oss för att boka och få en noggrann kostnadsuppskattning baserad på dina behov"
    },
    {
      number: "02",
      title: "Förberedelse för arbete",
      description: "Vi förbereder all utrustning och material, bekräftar detaljer med dig innan start"
    },
    {
      number: "03",
      title: "Utför städtjänster",
      description: "Vårt team utför noggrann städning och säkerställer hög kvalitet och din tillfredsställelse"
    },
    {
      number: "04",
      title: "Kund nöjdhet och uppföljning",
      description: "Vi följer upp för att säkerställa att du är nöjd och hanterar eventuella frågor"
    }
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
        threshold: 0.1, // Trigger when 10% of component is visible
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

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-[#002657] rounded-3xl mx-6 my-20 md:mx-12 lg:mx-auto lg:max-w-7xl overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          {/* Badge - Animates first */}
          <div
            className={`transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Badge className="bg-[#002657] border border-white hover:bg-[#002657] text-white gap-2 px-4 py-2 mb-6">
              Steg
            </Badge>
          </div>

          {/* Title - Animates second */}
          <h2 
            className={`text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight max-w-3xl transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Vi gör vår arbetsprocess
            <br />
            transparent för dig
          </h2>
        </div>

        {/* Divider - Animates third */}
        <div 
          className={`h-px bg-white/10 mb-12 transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 scale-x-100' 
              : 'opacity-0 scale-x-0'
          }`}
          style={{ 
            transitionDelay: '300ms',
            transformOrigin: 'left'
          }}
        ></div>

        {/* Steps Grid - Each step animates sequentially */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${450 + (index * 150)}ms` }}
            >
              <div className="flex gap-6">
                {/* Number */}
                <div className="flex-shrink-0">
                  <span className="text-5xl md:text-6xl font-normal text-white/30 group-hover:text-white/50 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xl md:text-2xl font-normal text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;