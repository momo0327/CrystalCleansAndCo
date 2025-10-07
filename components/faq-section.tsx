"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How often should I schedule professional cleaning?",
    answer:
      "For residential homes, we recommend bi-weekly or monthly cleaning to maintain a consistently clean environment. For high-traffic commercial spaces, weekly cleaning is often necessary. However, we can customize a schedule that fits your specific needs and budget.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use eco-friendly, non-toxic cleaning products that are effective yet safe for your family, pets, and the environment. If you have specific product preferences or sensitivities, we're happy to accommodate your needs by using products you provide or recommend.",
  },
  {
    question: "Are your cleaning staff insured and background-checked?",
    answer:
      "Yes, all our cleaning professionals undergo thorough background checks and are fully insured and bonded. This provides peace of mind that your property is in safe hands. We also provide ongoing training to ensure our team maintains the highest standards of professionalism.",
  },
  {
    question: "What if I'm not satisfied with the cleaning service?",
    answer:
      "Your satisfaction is our top priority. If you're not completely happy with any aspect of our service, please let us know within 24 hours, and we'll return to address any areas of concern at no additional cost. We stand behind our work with a 100% satisfaction guarantee.",
  },
  {
    question: "Do I need to be home during the cleaning service?",
    answer:
      "No, you don't need to be present during the cleaning. Many of our clients provide a key or access code. We have strict security protocols for key handling and client privacy. Of course, if you prefer to be home during the service, that's perfectly fine too.",
  },
  {
    question: "What's included in your deep cleaning service?",
    answer:
      "Our deep cleaning service is comprehensive and includes everything in our regular cleaning plus extras like inside appliances, baseboards, window sills, detailed bathroom scrubbing, cabinet fronts, light fixtures, and more. It's perfect for first-time cleanings or seasonal refreshes.",
  },
  {
    question: "How do you handle pets in the home?",
    answer:
      "We love pets! Please let us know if you have pets so we can take appropriate precautions. Our team is trained to ensure doors remain closed and pets are comfortable. We use pet-safe cleaning products, but we recommend keeping sensitive pets in a separate area during cleaning.",
  },
  {
    question: "Can I add special requests to my cleaning service?",
    answer:
      "We encourage special requests and aim to accommodate your specific needs. Whether it's focusing extra attention on certain areas or using specific cleaning methods, just let us know your preferences when booking or add them to your client profile.",
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
