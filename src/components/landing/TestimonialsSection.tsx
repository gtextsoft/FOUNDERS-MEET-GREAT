import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Meeting Dr. Akintayo changed the trajectory of my business. The connections I made that evening led to a partnership that doubled our revenue within a year.",
    initials: "AO",
    role: "Founder",
  },
  {
    quote:
      "I came expecting a lecture — I left with a mentor, three investor leads, and a completely new perspective on scaling. This is unlike any event I've attended.",
    initials: "MR",
    role: "CEO",
  },
  {
    quote:
      "Dr. Stephen doesn't just inspire — he equips. The frameworks he shared were immediately actionable. I implemented one the next morning and saw results in weeks.",
    initials: "CN",
    role: "Investor",
  },
  {
    quote:
      "The caliber of people in that room was unmatched. Founders, investors, executives — all in one space with real intention. Worth every second.",
    initials: "DO",
    role: "Executive",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding-lg relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl" />

    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Past Attendees <span className="gold-gradient-text italic">Say</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.initials} delay={i * 0.09}>
            <div className="glass-card gold-border-glow card-accent-top rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-gold/35 hover:-translate-y-0.5 group">
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-gold/10">
                <div className="w-10 h-10 rounded-full bg-gold/10 ring-1 ring-gold/20 flex items-center justify-center text-gold font-display font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-body text-xs text-gold/80 uppercase tracking-wider">{t.role}</p>
                  <p className="font-body text-xs text-muted-foreground">Past attendee</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
