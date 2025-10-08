"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  initialScroll?: number;
}

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  text: string;
  color: string;
  textColor?: string;
  nameColor?: string;
  roleColor?: string;
};

export const TestimonialCarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const TestimonialCarousel = ({ testimonials, initialScroll = 0 }: TestimonialCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile ? 280 : 350;
      const gap = 24;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const items = testimonials.map((testimonial, index) => (
    <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
  ));

  return (
    <TestimonialCarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 overflow-hidden [scrollbar-width:none] hide-scrollbar md:py-10 testimonial-scroll-container"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-6 md:px-24 px-6",
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                  },
                }}
                key={"testimonial-card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </TestimonialCarouselContext.Provider>
  );
};

export const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: TestimonialItem;
  index: number;
}) => {
  return (
    <div 
      className={`${testimonial.color} rounded-xl p-4 md:px-8 relative flex-shrink-0 flex flex-col justify-between w-[350px] md:w-[500px] min-w-[250px] md:min-w-[320px] h-[450px] md:h-[400px]`}
    >
      {/* Large Quote Icon - Dynamic color based on background */}
      <Quote className={`w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-6 ${
        testimonial.color === 'bg-[#C0FA01]' ? 'text-gray-900/20' : 'text-white/20'
      }`} />
      
      {/* Testimonial Text - Using dynamic textColor */}
      <blockquote className={`${testimonial.textColor || 'text-white'} text-md  leading-tight md:text-xl md:leading-relaxed font-normal flex-grow`}>
        {testimonial.text}
      </blockquote>
      
      {/* Customer Name and Role - Using dynamic colors */}
      <div className="mt-4 md:mt-8">
        <p className={`${testimonial.nameColor || 'text-gray-300'} font-semibold text-sm md:text-base`}>
          {testimonial.name}
        </p>
        <p className={`${testimonial.roleColor || 'text-gray-400'} text-xs md:text-sm mt-1`}>
          {testimonial.role}
        </p>
      </div>
    </div>
  );
};