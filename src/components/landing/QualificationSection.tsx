import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const forYou = [
  "You are a founder, CEO, executive, or investor building in the UK or expanding into London.",
  "You want direct access to Dr. Stephen Akintayo — not just content online.",
  "You are ready to introduce yourself, your business, and what you are looking for.",
  "You value curated rooms over large, unfocused networking events.",
];

const notForYou = [
  "You are looking for a passive lecture with no interaction.",
  "You do not plan to network or participate in conversation.",
  "You cannot commit to the full evening schedule.",
];

const QualificationSection = () => (
  <section id="qualification" className="funnel-section border-y border-border bg-card/30">
    <div className="container mx-auto max-w-6xl px-4">
      <ScrollReveal>
        <SectionHeader
          label="Is this for you?"
          title="A quick filter before you register"
          description="This event works best when the room is full of people who are serious about building relationships and growing their business."
          align="center"
        />
      </ScrollReveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ScrollReveal delay={0.05}>
          <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="font-body text-sm font-semibold text-foreground">This is for you if</p>
            <ul className="mt-5 space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="font-body text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="h-full rounded-2xl border border-border bg-background p-6 sm:p-8">
            <p className="font-body text-sm font-semibold text-foreground">This may not be the right fit if</p>
            <ul className="mt-5 space-y-4">
              {notForYou.map((item) => (
                <li key={item} className="flex gap-3">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="font-body text-sm leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default QualificationSection;
