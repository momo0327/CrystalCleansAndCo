"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "Flyttstädning",
      description: "Professionell flyttstädning som uppfyller alla krav. Vi tar hand om allt från tak till golv och ser till att både din gamla och nya bostad är skinande ren vid inflyttning och utflyttning.",
      details: {
        includes: [
          "Rengöring av alla ytor, golv, väggar och tak",
          "Dammtorkning av lister, dörrar, skåp, garderober och hyllor",
          "Rengöring av kök: spis, ugn, kyl/frys, fläkt, skåp in- och utvändigt",
          "Badrum: dusch, badkar, toalett, kakel, handfat och golvbrunnar",
          "Fönsterputs in- och utvändigt (om åtkomligt)",
        ],
        benefits: [
          "Godkänd av hyresvärd",
          "Garanterad kvalitet",
          "Snabb och noggrann",
          "Professionell utrustning"
        ]
      }
    },
    {
      title: "Hemstädning",
      description: "Regelbunden hemstädning anpassad efter dina behov. Vi tar hand om din vardagsstädning så att du kan fokusera på det som verkligen betyder något för dig.",
      details: {
        includes: [
          "Dammsugning och golvvård",
          "Dammtorkning av möbler, lister och ytor",
          "Rengöring av kök (bänkar, diskbänk, spis, ytor)",
          "Rengöring av badrum (handfat, toalett, dusch, speglar)",
          "Tömning av sopor och återvinning",
        ],
        benefits: [
          "Flexibla tider",
          "Samma städare varje gång",
          "Miljövänliga produkter",
          "Trygg och säker service"
        ]
      }
    },
    {
      title: "Fönsterputsning",
      description: "Kristallklara fönster som låter ljuset strömma in. Vi använder professionell utrustning och miljövänliga produkter för att ge dig perfekta resultat.",
      details: {
        includes: [
          "Putsning av fönster in- och utvändigt",
          "Rengöring av karmar och fönsterbrädor",
          "Anpassning efter typ av fönster och åtkomlighet",
        ],
        benefits: [
          "Streak-free resultat",
          "Professionell utrustning",
          "Säker höjdarbete",
          "Snabb och effektiv"
        ]
      }
    },
    {
      title: "Företagsstädning",
      description: "Håll din arbetsplats ren och professionell med våra skräddarsydda företagstjänster. Vi erbjuder flexibla lösningar som passar ert företags schema och behov.",
      details: {
        includes: [
          "Dammsugning, golvvård och städning av alla allmänna ytor",
          "Tömning av papperskorgar och sopor",
          "Rengöring av toaletter och köksutrymmen",
          "Dammtorkning av skrivbord, hyllor och gemensamma ytor",
          "Flexibla scheman efter behov (dag, kväll eller helg)",
        ],
        benefits: [
          "Ökar medarbetarnas välmående",
          "Professionell image",
          "Flexibla tider",
          "Fast kontaktperson"
        ]
      }
    },
    {
      title: "Textiltvätt",
      description: "Professionell tvätt och vård av textilier. Vi tar hand om mattor, gardiner, möbelklädsel och andra textilier med omsorg och expertis.",
      details: {
        includes: [
          "Mattvätt och impregnering",
          "Gardin- och persienntvätt",
          "Soffa och möbelrengöring",
          "Madrass- och kuddrengöring",
          "Fläckborttagning",
        ],
        benefits: [
          "Förlänger textiliernas livslängd",
          "Allergenvänlig rengöring",
          "Professionell utrustning",
          "Miljövänliga metoder"
        ]
      }
    },
    {
      title: "Storstädning",
      description: "Omfattande städning som når varje vrå. Perfekt för vårstäd, höststäd eller när du vill ge ditt hem en grundlig genomgång.",
      details: {
        includes: [
          "Allt som ingår i hemstädning plus extra djuprengöring",
          "Rengöring av fönster, lister och lampor",
          "Rengöring av vitvaror och skåp in- och utvändigt",
          "Avkalkning och djuprengöring av badrum",
          "Specialrengöring efter önskemål",
        ],
        benefits: [
          "Heltäckande städning",
          "Når svåråtkomliga platser",
          "Uppfräschande resultat",
          "Planerad efter dina behov"
        ]
      }
    },
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

  return (
    <section ref={sectionRef} id='services' className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className='mb-16'>
          {/* Badge - Animates first */}
          <div
            className={`transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <Badge className="bg-white text-[#002657] gap-2 px-4 py-2 mb-6 rounded-full hover:bg-white hover:text-[#002657] dark:bg-blue-900/20 border border-[#002657] dark:border-blue-800">
              Tjänster
            </Badge>
          </div>

          {/* Title - Animates second */}
          <h2 
            className={`text-5xl md:text-7xl font-light text-neutral-900 mb-6 transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            Våra tjänster
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Service List (2 columns) */}
          <div className="lg:col-span-2 space-y-2">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`w-full text-left flex items-center gap-3 py-2.5 transition-all duration-700 group ${
                  selectedService === index
                    ? 'text-black'
                    : 'text-neutral-400 hover:text-neutral-600'
                } ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + (index * 100)}ms` }}
              >
                <ArrowRight 
                  className={`w-5 h-5 flex-shrink-0 transition-all ${
                    selectedService === index 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-50'
                  }`}
                />
                <span className="text-2xl md:text-4xl font-light">
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column - Service Content (3 columns - wider) */}
          <div 
            className={`lg:col-span-3 lg:sticky lg:top-24 lg:self-start transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="space-y-6">
              {/* Description with fade animation when service changes */}
              <p 
                key={`desc-${selectedService}`}
                className="text-lg text-black leading-relaxed animate-fadeIn"
              >
                {services[selectedService].description}
              </p>

              {/* Service Details */}
              <div className="rounded-xl">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-neutral-900 text-lg"></h4>
                    <ul 
                      key={`includes-${selectedService}`}
                      className="space-y-3 font-medium text-neutral-600 animate-fadeIn"
                    >
                      {services[selectedService].details.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#002657]"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  onClick={() => window.location.hash = "#contact"}
                  className="p-0 bg-white hover:bg-white hover:underline text-[#002657] text-lg rounded-lg font-medium inline-flex items-center gap-2 group"
                >
                  Boka nu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;