"use client";

import React from 'react';
import { CarouselServices } from '@/components/CarouselServices'; // Import the custom carousel
import { Badge } from './ui/badge';

const ServicesSection = () => {
  const services = [
    {
      src: "/home.jpg",
      title: "Hem städ",
      category: "Hemtjänster",
      description: "Fyll några enkla uppgifter så är ditt konto igång på nolltid. Det tar en minut.",
      content: <ServiceContent 
        title="Hem städ" 
        description="Professionell hemstädning anpassad efter dina behov. Vi tar hand om allt från grundlig rengöring till regelbunden underhållsstädning så att du kan fokusera på det som verkligen betyder något för dig."
      />
    },
    {
      src: "/office.jpg",
      title: "Kontor städ", 
      category: "Företagstjänster",
      description: "Fyll några enkla uppgifter så är ditt konto igång på nolltid. Det tar en minut.",
      content: <ServiceContent 
        title="Kontor städ" 
        description="Håll din arbetsplats ren och professionell med våra skräddarsydda kontorstjänster. Vi erbjuder flexibla lösningar som passar ditt företags schema och behov."
      />
    },
    {
      src: "/window.jpeg",
      title: "Fönster städ",
      category: "Specialtjänster",
      description: "Fyll några enkla uppgifter så är ditt konto igång på nolltid. Det tar en minut.",
      content: <ServiceContent 
        title="Fönster städ" 
        description="Kristallklara fönster som låter ljuset strömma in. Våra erfarna fönsterputsare använder professionell utrustning för att ge dig perfekta resultat varje gång."
      />
    },
    {
      src: "/moving.png",
      title: "Flytt städ",
      category: "Flyttjänster",
      description: "Fyll några enkla uppgifter så är ditt konto igång på nolltid. Det tar en minut.", 
      content: <ServiceContent 
        title="Flytt städ" 
        description="Gör din flytt smidigare med vår professionella flyttstädning. Vi säkerställer att både din gamla och nya bostad är skinande ren och redo."
      />
    }
  ];

  return (
    <section className="py-10  bg-blue-200/20">
      <div className="max-w-7xl mx-auto">
        <div className='py-12 px-6  md:py-12 '>
          <Badge className="bg-[blue-200/20] border border-[#002657] text-[#002657]">
            Tjänster
          </Badge>
          <h2 className="text-4xl md:text-4xl font-semibold text-[#002657] mt-6 mb-6">
            Vad vi erbjuder
          </h2>    
          <p className='text-gray-500'>
            Att få kompensation för tågförseningar ska inte kännas jobbigt. 
            Slipp formulär och <br />långdragna processer. 
            Låt oss sköta det så that du kan fokusera på något roligare.
          </p>
        </div>
      </div>

      {/* Move carousel outside the constrained container */}
      <CarouselServices services={services} />
    </section>
  );
};

// Content component for the modal/expanded view
const ServiceContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl">
      <h3 className="text-2xl md:text-3xl font-bold text-neutral-700 dark:text-neutral-200 mb-6">
        {title}
      </h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-sans max-w-3xl leading-relaxed mb-8">
        {description}
      </p>
      
      {/* Additional service details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-200">Vad ingår:</h4>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>• Professionell utrustning</li>
            <li>• Miljövänliga produkter</li>
            <li>• Kvalitetsgaranti</li>
            <li>• Flexibla tider</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-semibold text-neutral-700 dark:text-neutral-200">Fördelar:</h4>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
            <li>• Spara tid och energi</li>
            <li>• Professionella resultat</li>
            <li>• Trygg och säker service</li>
            <li>• Konkurrenskraftiga priser</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4 ">
        <button className="bg-[#002657] text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-800 transition-colors">
          Boka nu
        </button>
        <button className="border border-gray-300 text-gray-700 py-3 px-8 rounded-lg font-medium hover:bg-gray-50 transition-colors">
          Läs mer
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;