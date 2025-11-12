"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { AvatarCircles } from "@/components/ui/avatar-circles";

function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video - Full Screen */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/clean.mp4" type="video/mp4" />
          <source src="/cleaning-hero-video.webm" type="video/webm" />
        </video>
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content - Bottom Layout */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            {/* Left Column - Main Heading */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-light text-white leading-tight">
                Kristallklara ytor,
                <br />
                professionell perfektion
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => (window.location.hash = "#contact")}
                  size="lg"
                  className="bg-white/90 hover:bg-white text-neutral-900 font-medium px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all inline-flex items-center gap-2 group"
                >
                  Kontakta Oss
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Avatar Circles & Reviews */}
            <motion.div
              className="space-y-6 lg:pb-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Avatar Circles with Rating */}
              <div className="flex items-center gap-4">
                <AvatarCircles
                  numPeople={99}
                  avatarUrls={[
                    {
                      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
                      profileUrl: "#",
                    },
                    {
                      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
                      profileUrl: "#",
                    },
                  
                  ]}
                />
                
                {/* Star Rating */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-white font-semibold">4.5</span>
                  <span className="text-white/80 text-sm">(100+ reviews)</span>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-xl bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
              Vi skapar skinande rena miljöer för hem och arbetsplatser med miljövänliga produkter och noggrannhet i varje detalj.              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;