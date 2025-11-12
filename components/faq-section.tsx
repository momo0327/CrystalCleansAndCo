"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "Hur ofta bör jag boka städning?",
    answer:
      "För hem rekommenderar vi varannan vecka eller månadsvis för att hålla det rent och fräscht. För kontor eller lokaler med mycket trafik kan veckostädning vara bäst. Vi kan också anpassa schemat efter dina behov och din budget.",
  },
  {
    question: "Vilka städprodukter använder ni?",
    answer:
      "Vi använder miljövänliga och giftfria produkter som är effektiva och säkra för familj, husdjur och miljön. Har du särskilda önskemål eller känsligheter använder vi gärna produkter du föredrar.",
  },
  {
    question: "Är era städare försäkrade och kontrollerade?",
    answer:
      "Ja, alla våra städare är försäkrade och bakgrundskontrollerade. Vi ser också till att de får kontinuerlig utbildning för att hålla högsta professionella standard.",
  },
  {
    question: "Vad händer om jag inte är nöjd med städningen?",
    answer:
      "Din nöjdhet är viktigast för oss. Är du inte helt nöjd med något moment, hör av dig inom 24 timmar så kommer vi tillbaka och åtgärdar det utan extra kostnad. Vi står alltid bakom vårt arbete.",
  },
  {
    question: "Behöver jag vara hemma när städningen sker?",
    answer:
      "Nej, du behöver inte vara hemma. Många kunder lämnar nyckel eller kod. Vi har strikta rutiner för säkerhet och integritet. Vill du vara hemma går det självklart också bra.",
  },
  {
    question: "Vad ingår i en storstädning?",
    answer:
      "Vår storstädning är omfattande och inkluderar allt från vanlig städning plus extras som insida av vitvaror, lister, fönsterbrädor, detaljerad badrumsrengöring, skåpsdörrar, lampor och mer. Perfekt för första gången eller en grundlig uppfräschning.",
  },
]

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="w-full py-12 md:py-24 lg:py-28">
      <div className="container px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-2">
            {/* Badge - Animates first */}
            <div
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              <Badge className="bg-white text-[#002657] gap-2 px-4 py-2 mb-6 rounded-full hover:text-[#002657] hover:bg-white dark:bg-blue-900/20 border border-[#002657] dark:border-blue-800">
                FAQ
              </Badge>
            </div>

            {/* Title - Animates second */}
            <h2 
              className={`text-3xl font-medium tracking-tighter text-gray-900 md:text-5xl transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              Frequently Asked Questions
            </h2>

            {/* Description - Animates third */}
            <p 
              className={`max-w-[900px] text-gray-600 md:text-xl transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Hitta svar på vanliga frågor om våra städtjänster, policys och rutiner.
            </p>
          </div>
        </div>

        {/* FAQ Accordion - Much wider */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border-b border-gray-200 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${450 + (index * 100)}ms` }}
              >
                <AccordionTrigger className="text-left text-[#002657] hover:text-[#0270d9] font-medium text-xl sm:text-2xl py-5 sm:py-6 [&>svg]:hidden">
                  <div className="flex items-center justify-between w-full gap-4 sm:gap-8 pr-2">
                    <span className="flex-1 text-left">{faq.question}</span>
                    <Plus className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0 transition-transform duration-300 data-[state=open]:rotate-45" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-lg sm:text-xl pb-6 pt-2 leading-relaxed pr-10 sm:pr-16">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      <style jsx global>{`
        [data-state="open"] .lucide-plus {
          transform: rotate(45deg);
        }
      `}</style>
    </section>
  )
}