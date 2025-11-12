"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Badge } from './ui/badge';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const stats = [
    {
      number: 57395,
      display: "57,395",
      label: "Kvadratmeter städade",
      suffix: ""
    },
    {
      number: 5000,
      display: "5,000",
      label: "Följare på sociala medier",
      suffix: ""
    },
    {
      number: 100,
      display: "100+",
      label: "Nöjda kunder",
      suffix: "+"
    },
    {
      number: 130,
      display: "130",
      label: "Stora kunder",
      suffix: ""
    }
  ];

  // Format number with comma separator
  const formatNumber = (num: number, index: number) => {
    if (index === 0) {
      // Format first number with comma (57,395)
      return num.toLocaleString('sv-SE');
    }
    return num.toString();
  };

  // Animate counting up
  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.number / steps;
        let currentCount = 0;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          currentCount += increment;
          
          if (step >= steps) {
            currentCount = stat.number;
            clearInterval(timer);
          }

          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = Math.floor(currentCount);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

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
        threshold: 0.2,
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
    <section ref={sectionRef} className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Heading */}
          <div>
            {/* Badge - Animates first */}
            <div
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <Badge className="bg-white border border-[#002657] hover:bg-gray-100 text-gray-700 gap-2 px-4 py-2 mb-6">
                Om oss
              </Badge>
            </div>

            {/* Title - Animates second */}
            <h2 
              className={`text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-12 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Vi är stolta över <br /> våra prestationer
            </h2>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`space-y-3 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + (index * 150)}ms` }}
              >
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tabular-nums">
                  {formatNumber(counts[index], index)}{stat.suffix}
                </h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;