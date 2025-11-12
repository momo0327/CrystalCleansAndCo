"use client";

import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/image 13.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 lg:px-20 lg:py-32">
            <div className="max-w-2xl">

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-10">
                Vi hjälper stora som
                <br />
                små företag
              </h2>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => window.location.hash = "#contact"}
                  size="lg"
                  className="bg-white/90 hover:bg-white text-neutral-900 font-medium px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all inline-flex items-center gap-2 group"
                >
                  Ta kontakt
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                {/* <Button
                  onClick={() => window.location.hash = "#contact"}
                  size="lg"
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/80 hover:border-white font-medium px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all inline-flex items-center gap-2 group"
                >
                  Ta kontakt
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;