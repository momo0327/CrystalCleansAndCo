import { SparkleIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mohammed",
      role: "Gelatostation",
      text: "Vi behövde en pålitlig städfirma för vårt kafé, och valet kunde inte varit bättre. Allt från golv till glassdisken hålls i toppskick. De arbetar diskret innan öppning och lämnar alltid en fräsch doft i lokalen. Våra kunder märker verkligen skillnaden!",
      color: "bg-[#002657]",
      textColor: "text-white",
      nameColor: "text-gray-100",
      roleColor: "text-gray-300"
    },
    {
      id: 2,
      name: "Ahmed", 
      role: "Smash Market",
      text: "Som restaurang är det avgörande att allt hålls rent, särskilt i köket. Städteamet gör ett fantastiskt jobb varje kväll inget lämnas åt slumpen. Golv, ytor och köksutrustning är alltid fläckfria. Det märks att de har erfarenhet av restaurangmiljöer!",
      color: "bg-[#0287FE]/70",
      textColor: "text-black",
      nameColor: "text-gray-900",
      roleColor: "text-black"
    },
    {
      id: 3,
      name: "Castro",
      role: "Tandklinik",
      text: "Vi är otroligt nöjda med städningen! Kliniken måste alltid vara hygienisk och skinande ren, och teamet lever verkligen upp till det. De är noggranna, punktliga och anpassar sig efter våra öppettider. Våra patienter kommenterar ofta hur fräscht det känns här!",
      color: "bg-gray-900",
      textColor: "text-white",
      nameColor: "text-white",
      roleColor: "text-gray-400"
    },
    {
      id: 4,
      name: "Ifrax",
      role: "Privat person", 
      text: "Jag älskar att komma hem efter jobbet när de har varit här allt doftar rent och ytorna glänser! Städarna är både trevliga och professionella, och jag känner mig trygg med att släppa in dem i mitt hem. Det har verkligen förenklat vardagen.",
      color: "bg-[#C0FA01]",
      textColor: "text-gray-900",
      nameColor: "text-black",
      roleColor: "text-gray-700"
    }
  ];
  
  return (
    <section className="py-10 md:py-36 bg-gray-50">
      <div className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
            <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-neutral-200 mb-6 md:mb-0">
              Vad våra kunder säger
              {/* Sparkles beside title */}
            <span className="absolute -top-2 w-8 h-8 text-[#0287FE]">
                   <SparkleIcon />
                 </span>
                 <span className="absolute top-3 px-4 w-6 h-6 text-[#0287FE]">
                   <SparkleIcon />
                 </span>
            </h2>
            
            {/* Navigation Buttons - Show on medium screens and up */}
            <div className="hidden md:flex gap-3">
              <button 
                onClick={() => {
                  const container = document.querySelector('.testimonial-scroll-container');
                  if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
                }}
                className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button 
                onClick={() => {
                  const container = document.querySelector('.testimonial-scroll-container');
                  if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
                }}
                className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <TestimonialCarousel testimonials={testimonials} />
      
      {/* Navigation Buttons - Show on mobile only, below cards */}
      <div className="md:hidden px-4 mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3">
            <button 
              onClick={() => {
                const container = document.querySelector('.testimonial-scroll-container');
                if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
              }}
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button 
              onClick={() => {
                const container = document.querySelector('.testimonial-scroll-container');
                if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
              }}
              className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;