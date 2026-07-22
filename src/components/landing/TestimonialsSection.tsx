import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const featured = {
  quote:
    "I came expecting a lecture — I left with a mentor, three investor leads, and a completely new perspective on scaling. This is unlike any event I've attended.",
  initials: "MR",
  role: "CEO, growth-stage company",
};

const supporting = [
  {
    quote:
      "Meeting Dr. Akintayo changed the trajectory of my business. The connections I made that evening led to a partnership that doubled our revenue within a year.",
    initials: "AO",
    role: "Founder",
  },
  {
    quote:
      "The caliber of people in that room was unmatched. Founders, investors, executives — all in one space with real intention.",
    initials: "DO",
    role: "Executive",
  },
  {
    quote:
      "Dr. Stephen doesn't just inspire — he equips. The frameworks he shared were immediately actionable.",
    initials: "CN",
    role: "Investor",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="funnel-section">
    <div className="container mx-auto max-w-6xl px-4">
      <ScrollReveal>
        <SectionHeader
          label="From past rooms"
          title="What past attendees report"
          description="These are from previous meet & greet experiences with Dr. Stephen Akintayo."
        />
      </ScrollReveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <ScrollReveal delay={0.05}>
          <figure className="border-l-[3px] border-crimson pl-5 sm:pl-6">
            <blockquote className="font-display text-2xl font-semibold leading-snug tracking-wide text-navy sm:text-3xl lg:text-[2.1rem]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-navy font-display text-sm font-bold text-white">
                {featured.initials}
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-navy">{featured.role}</p>
                <p className="font-body text-xs text-muted-foreground">Past attendee</p>
              </div>
            </figcaption>
          </figure>
        </ScrollReveal>

        <div className="space-y-5">
          {supporting.map((item, index) => (
            <ScrollReveal key={item.initials} delay={0.08 + index * 0.05}>
              <figure className="border-b border-navy/10 pb-5">
                <blockquote className="font-body text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 font-body text-xs font-semibold uppercase tracking-[0.12em] text-royal">
                  {item.role} · Past attendee
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
