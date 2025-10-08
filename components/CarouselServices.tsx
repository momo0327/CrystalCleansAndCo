"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  JSX,
} from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ServicesCarouselProps {
  services: ServiceCard[];
  initialScroll?: number;
}

type ServiceCard = {
  src: string;
  title: string;
  category: string;
  description: string;
  content: React.ReactNode;
};

export const ServicesCarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const CarouselServices = ({
  services,
  initialScroll = 0,
}: ServicesCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  // Client-side only window checks
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = isMobileView ? 350 : 550;
    const gap = isMobileView ? 4 : 8;
    const scrollPosition = (cardWidth + gap) * (index + 1);
    carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    setCurrentIndex(index);
  };

  const items = services.map((service, index) => (
    <ServicesCard key={service.src} card={service} index={index} />
  ));

  return (
    <ServicesCarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-6 overflow-hidden [scrollbar-width:none] hide-scrollbar md:py-10"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl"
            )}
          >
            {items.map((item, index) => (
           <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.3 }}
           transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
           key={"service-card" + index}
           className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
         >
           {item}
         </motion.div>
         
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center px-6 md:px-24 mt-4">
          <Button
         onClick={() => window.location.hash = "#contact"}                 
          className="bg-[#002657] text-white py-3 px-12 md:py-4 md:px-24 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
            Boka nu
          </Button>

          <div className="mr-10 flex justify-end gap-2">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                "p-3 rounded-full transition-colors",
                canScrollLeft
                  ? "bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={cn(
                "p-3 rounded-full transition-colors",
                canScrollRight
                  ? "bg-gray-200 hover:bg-gray-300 text-gray-700 cursor-pointer"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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
      </div>
    </ServicesCarouselContext.Provider>
  );
};

export const ServicesCard = ({
  card,
  index,
  layout = false,
}: {
  card: ServiceCard;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(ServicesCarouselContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useOutsideClick(containerRef as React.RefObject<HTMLDivElement>, () =>
    handleClose()
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p className="text-base font-medium text-black dark:text-white">
                {card.category}
              </motion.p>
              <motion.p className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white">
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-96 flex-col items-start justify-start overflow-hidden rounded-lg bg-gray-100 md:h-[40rem] md:w-[32rem] dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 z-40 p-8">
          <p className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </p>
          <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </p>
        </div>
        <ServicesBlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const ServicesBlurImage = ({
  src,
  className,
  alt,
  ...rest
}: {
  src: string;
  className?: string;
  alt: string;
  [key: string]: any;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt ?? "Service image"}
      {...rest}
    />
  );
};
