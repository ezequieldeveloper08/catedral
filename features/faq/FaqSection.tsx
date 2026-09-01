import React from "react"
import { siteContent } from "@/config/site-content"
import { SectionTitle } from "@/components/shared/SectionTitle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  const { faqs } = siteContent

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#13110C] border-y border-white/10">
      <div className="max-w-[1000px] mx-auto space-y-16">
        <SectionTitle
          badge="Tire Suas Dúvidas"
          title="Perguntas frequentes sobre o"
          titleHighlight="projeto e a construção."
          subtitle="Esclarecimentos sobre o andamento das obras, formas de contribuir e o funcionamento dos cultos."
          align="center"
        />

        <Accordion className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={String(index)}
              className="bg-[#1c1913] border border-white/10 px-6 py-1 rounded-[2px] transition-colors hover:border-white/20"
            >
              <AccordionTrigger className="text-left font-normal text-base text-[#EAE5DC] hover:text-[#E8651A] hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-light text-[rgba(234,229,220,0.7)] leading-relaxed pb-4 pt-1">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
