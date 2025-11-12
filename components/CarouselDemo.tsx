// CarouselDemo.tsx - COMPLETE FILE
"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, SparkleIcon } from "lucide-react";
import { IconX } from "@tabler/icons-react";

// Types
type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

// Context
const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

// Simple cn utility
const cn = (...classes: (string | undefined | false)[]) => classes.filter(Boolean).join(" ");

// Carousel Component
function Carousel({ items }: { items: React.ReactNode[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    checkScrollability();
  }, []);

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll hide-scrollbar  py-10 md:py-20"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex flex-row gap-4 pl-4 mx-auto max-w-7xl">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mr-10 md:mr-44 flex justify-end gap-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={cn(
              "p-3 rounded-full transition-colors",
              canScrollLeft
                ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={cn(
              "p-3 rounded-full transition-colors",
              canScrollRight
                ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

// Card Component
function Card({ card, index }: { card: CardType; index: number }) {
  const [open, setOpen] = useState(false);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);


  return (
    <>
    
      <button
        onClick={() => setOpen(true)}
        className="flex-shrink-0 relative h-80 w-56 md:h-[40rem] md:w-96 rounded-3xl overflow-hidden bg-gray-200"
      >
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load image: ${card.src}`);
            e.currentTarget.style.display = 'none';
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-sm md:text-base font-medium text-white">{card.category}</p>
          <p className="mt-2 text-xl md:text-3xl font-semibold text-white">{card.title}</p>
        </div>
      </button>
    </>
  );
}


const data: CardType[] = [
    {
      category: "",
      title: "Omar Hassan",
      src: "/04-copy.jpg",  // Your local image
      content:'',
    },
    {
      category: "",
      title: "Abdirahman Cabdi ",
      src: "/03-copy.jpg",  // Your local image
      content: '',
    },
    {
      category: "",
      title: "Abdirahman Ali Hassan",
      src: "/08-copy.jpg",  // Your local image
      content: '',
    },
  ];

// Main Component
export function CarouselDemo() {
  return (
    <div className="w-full h-full py-20">
      <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
         <h2 className="relative text-3xl md:text-4xl lg:text-6xl font-medium text-gray-900 dark:text-neutral-200 mb-6 md:mb-0">
                      Vi är Crystal Cleans 
                      {/* Sparkles beside title */}
                    <span className="absolute -top-2 w-8 h-8 text-[#0287FE]">
                           <SparkleIcon />
                         </span>
                         <span className="absolute top-3 px-4 w-6 h-6 text-[#0287FE]">
                           <SparkleIcon />
                         </span>
                    </h2>
        <p className="text-md md:text-lg md:w-2/4 text-gray-600 dark:text-neutral-400">
        Hos oss möter du erfarna och noggranna städare som levererar förstklassig städning för både hem och företag. Vi erbjuder heltäckande städtjänster så du kan njuta av ett rent och fräscht hem, året runt.
        </p>
      </div>

      <Carousel items={data.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))} />
    </div>
  );
}