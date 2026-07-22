import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import DiamondRule from "./DiamondRule";

const deliverables = [
  "Meet Dr. Stephen Akintayo in person — not through a screen or recording.",
  "Network with founders, CEOs, and investors in a curated London room.",
  "Leave with practical insight you can apply to growth, capital, and partnerships.",
  "Get venue details and event instructions after you register.",
];

const PromiseSection = () => (
  <section id="about" className="funnel-section">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <ScrollReveal>
          <SectionHeader
            label="Why this event exists"
            title={<>Most networking evenings waste your time. This one is built for outcomes.</>}
            description="London CEO & Founders Meet & Greet is a structured in-person evening for entrepreneurs and executives who want meaningful access — not another crowded mixer with no direction."
          />
          <DiamondRule className="mt-8 justify-start" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div>
            <p className="font-body text-sm font-semibold text-navy">When you register, you get:</p>
            <ul className="mt-5 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3 border-b border-navy/10 pb-4 last:border-0 last:pb-0">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-royal/10">
                    <Check className="h-3 w-3 text-royal" />
                  </span>
                  <span className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item}
                  </span>
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
