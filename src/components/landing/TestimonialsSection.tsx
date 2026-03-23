import ScrollReveal from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Meeting Dr. Akintayo changed the trajectory of my business. The connections I made that evening led to a partnership that doubled our revenue within a year.",
    initials: "AO",
  },
  {
    quote:
      "I came expecting a lecture — I left with a mentor, three investor leads, and a completely new perspective on scaling. This is unlike any event I've attended.",
    initials: "MR",
  },
  {
    quote:
      "Dr. Stephen doesn't just inspire — he equips. The frameworks he shared were immediately actionable. I implemented one the next morning and saw results in weeks.",
    initials: "CN",
  },
  {
    quote:
      "The caliber of people in that room was unmatched. Founders, investors, executives — all in one space with real intention. Worth every second.",
    initials: "DO",
  },
];

const TestimonialsSection = () => (
  <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/3 blur-3xl" />

    <div className="container max-w-6xl mx-auto px-4 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block text-gold/80 font-body text-sm tracking-[0.2em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            What Past Attendees Say
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.09}>
            <div className="glass-card rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg hover:shadow-gold/5 group">
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-display font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.title}</p>
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
