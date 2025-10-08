"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
  {
    question: "Hur hanterar ni husdjur?",
    answer:
      "Vi älskar husdjur! Berätta gärna om du har husdjur så tar vi lämpliga försiktighetsåtgärder. Vi använder husdjursvänliga produkter och ser till att de är bekväma under städningen.",
  },
  {
    question: "Kan jag göra speciella önskemål?",
    answer:
      "Absolut! Vi anpassar oss gärna efter dina behov. Vill du att vi fokuserar extra på vissa ytor eller använder speciella metoder, säg bara till vid bokning eller i din kundprofil.",
  },
]

export function FAQSection() {
  return (
    <section className="md:px-4 text-white">
      <div className="w-full max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-blue-100/30"
            >
              <AccordionTrigger className="text-left text-white hover:text-gray-200 font-medium text-lg sm:text-xl py-3 sm:py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-200 text-base sm:text-lg pb-4 pt-1 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
