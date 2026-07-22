import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { faqItems } from "@/lib/funnel-content";

const FAQSection = () => (
  <section id="faq" className="funnel-section border-y border-navy/10 bg-white">
    <div className="container mx-auto max-w-3xl px-4">
      <ScrollReveal>
        <SectionHeader
          label="Questions before you register"
          title="Frequently asked questions"
          align="center"
        />
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <Accordion type="single" collapsible className="mt-8 border-y border-navy/10">
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-navy/10">
              <AccordionTrigger className="font-body text-left text-sm font-semibold text-navy hover:no-underline sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
