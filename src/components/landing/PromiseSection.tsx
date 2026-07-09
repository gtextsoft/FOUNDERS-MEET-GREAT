import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const deliverables = [
  "Meet Dr. Stephen Akintayo in person — not through a screen or recording.",
  "Network with founders, CEOs, and investors in a curated London room.",
  "Leave with practical insight you can apply to growth, capital, and partnerships.",
  "Get venue details and event instructions after you register.",
];

const PromiseSection = () => (
  <section id="about" className="funnel-section">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <ScrollReveal>
          <SectionHeader
            label="Why this event exists"
            title={<>Most networking events waste your evening. This one is built to produce outcomes.</>}
            description="London CEO & Founders Meet & Greet is a structured in-person evening for entrepreneurs and executives who want meaningful access — not another crowded mixer with no direction."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-body text-sm font-medium text-foreground">When you register, you get:</p>
            <ul className="mt-5 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  <span className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default PromiseSection;
