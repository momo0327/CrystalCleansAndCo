import React from 'react';
import { DollarSign, Clock, Users, ArrowRight } from 'lucide-react';

const CleaningBenefitsSection = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Rimliga priser",
      description: "Vi erbjuder konkurrenskraftiga priser för alla våra städtjänster utan att kompromissa med kvaliteten."
    },
    {
      icon: Clock,
      title: "Sparar din tid",
      description: "Istället för att slösa din tid på städning så gör vi det möjligt för dig att fokusera på något roligare."
    },
    {
      icon: Users,
      title: "Professionella städare",
      description: "Våra erfarna städare arbetar för en framtid där varje hem och kontor är rent, oavsett teknisk kunskap eller tid."
    }
  ];

  return (
    <section className=" h-full py-24 md:py-64 px-6 bg-white">
        
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Vårt arbete gör skillnad
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8  md:mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-6">
              {/* Icon */}
              <div className=" w-8 h-8 md:w-12 md:h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <benefit.icon className=" w-4 h-4 md:w-6 md:h-6 text-gray-900" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CleaningBenefitsSection;