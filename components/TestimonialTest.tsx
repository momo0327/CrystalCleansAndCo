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
import { ChevronLeft, ChevronRight, Quote, SparkleIcon, Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  initialScroll?: number;
  title?: string;
  badge?: string;
}

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number; // 1-5 star rating
  businessLogo?: string; // URL to business logo
  businessName?: string; // Alternative to logo if no image
  color?: string;
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

export const TestimonialCarousel = ({ 
  testimonials, 
  initialScroll = 0,
  title = "Vad våra kunder säger",
  badge = "Recensioner"
}: TestimonialCarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  // Intersection Observer to detect when carousel is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of component is visible
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isVisible]);

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
      {/* Centered Header with Badge */}
      <div id="reviews" className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -10 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full  dark:bg-blue-900/20 border border-[#002657] dark:border-blue-800"
        >
          {/* <SparkleIcon className="w-4 h-4 text-[#0287FE]" /> */}
          <span className=" text-[#002657]">{badge}</span>
        </motion.div>

        {/* Title with Sparkles */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-light text-gray-900 dark:text-neutral-200 max-w-3xl">
            {title}
          </h2>
          {/* Decorative Sparkles */}
          <span className="absolute -top-3 -right-8 md:-right-12 w-6 h-6 md:w-8 md:h-8 text-[#0287FE] animate-pulse">
            <SparkleIcon className="w-full h-full" />
          </span>
          <span className="absolute -bottom-2 -left-6 md:-left-10 w-4 h-4 md:w-6 md:h-6 text-[#0287FE] animate-pulse" style={{ animationDelay: '0.3s' }}>
            <SparkleIcon className="w-full h-full" />
          </span>
        </motion.div>
      </div>

      <div className="relative w-full" ref={containerRef}>
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
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
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
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4 md:w-5 md:h-5",
              i < rating
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-8 md:px-8 md:py-10 relative flex-shrink-0 flex flex-col justify-between w-[350px] md:w-[500px] min-w-[250px] md:min-w-[320px] h-auto min-h-[450px] md:min-h-[420px] border border-gray-200 dark:border-gray-700  hover:shadow-xl transition-all duration-300 group"
    >
      {/* Stars Rating */}
      {renderStars(testimonial.rating)}
      
      {/* Large Quote Icon - Light Blue */}
      <Quote className="w-8 h-8 md:w-10 md:h-10 mb-4 text-[#0287FE]/20 group-hover:text-[#0287FE]/40 transition-colors absolute top-8 right-6" />
      
      {/* Testimonial Text - Gray */}
      <blockquote
        className={cn(
          "text-gray-700 dark:text-gray-300 text-base md:text-lg font-normal leading-relaxed md:leading-relaxed flex-grow mb-6",
          "max-w-full"
        )}
      >
        "{testimonial.text}"
      </blockquote>
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-6" />
      
      {/* Footer with Customer Info and Business Logo */}
      <div className="flex items-center justify-between gap-4">
        {/* Customer Info */}
        <div className="flex-1">
          <p className="text-gray-900 dark:text-gray-100 font-semibold text-sm md:text-base">
            {testimonial.name}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm mt-1">
            {testimonial.role}
          </p>
        </div>
        
        {/* Business Logo or Name */}
        {testimonial.businessLogo ? (
          <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative rounded-lg overflow-hidden  flex items-center justify-center  ">
            <Image
              src={testimonial.businessLogo}
              alt={testimonial.businessName || "Business logo"}
              fill
              className="object-contain p-1"
            />
          </div>
        ) : testimonial.businessName ? (
          <div className="flex-shrink-0 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <p className="text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300">
              {testimonial.businessName}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};