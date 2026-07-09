import { Users, Mic2, Lightbulb, Compass, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Users, title: "Network with founders and leaders", description: "Build connections that open doors to partnerships, funding, and growth." },
  { icon: Mic2, title: "Meet Dr. Stephen Akintayo in person", description: "Gain direct access to a globally recognized entrepreneur and investor." },
  { icon: Lightbulb, title: "Gain fresh business insight", description: "Discover strategies and frameworks to scale your business faster." },
  { icon: Compass, title: "Explore new opportunities", description: "Uncover ventures, markets, and collaborations you haven't considered." },
  { icon: Star, title: "Be in the right room", description: "Surround yourself with ambitious, high-caliber professionals." },
];

const WhyAttendSection = () => (
  <section id="why-attend" className="section-padding-lg relative">
    <div className="container max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-eyebrow">Why Attend</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Five Reasons to <span className="gold-gradient-text italic">Be There</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.08}>
            <div className="glass-card gold-border-glow card-accent-top rounded-xl p-6 sm:p-8 h-full group hover:border-gold/35 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300 ring-1 ring-gold/15">
                <r.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{r.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyAttendSection;
