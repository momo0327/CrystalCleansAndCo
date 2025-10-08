"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-lg"
        >
          <source src="/clean.mp4" type="video/mp4" />
          <source src="/cleaning-hero-video.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Kristallklara ytor, professionell perfektion
            </motion.h1>
            <motion.p
              className="max-w-[600px] mx-auto text-white/90 md:text-xl drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Vi skapar skinande rena miljöer för hem och arbetsplatser med
              miljövänliga produkter och noggrannhet i varje detalj.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 min-[400px]:flex-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              onClick={() => (window.location.hash = "#contact")}
              size="lg"
              className="bg-white hover:bg-blue-100 shadow-lg borde font-lg text-blue-900"
            >
              Book Cleaning Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
