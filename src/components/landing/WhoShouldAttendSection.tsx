import { Briefcase, Rocket, Crown, TrendingUp, Building2, Flame } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const audiences = [
  { icon: Rocket, label: "Founders" },
  { icon: Briefcase, label: "Entrepreneurs" },
  { icon: Crown, label: "CEOs & Executives" },
  { icon: TrendingUp, label: "Investors" },
  { icon: Building2, label: "Professionals" },
  { icon: Flame, label: "Growth-minded Leaders" },
];

const WhoShouldAttendSection = () => (
  <section className="section-padding-lg">
    <div className="container max-w-5xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-4">Ideal For</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Who Should <span className="gold-gradient-text">Attend?</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {audiences.map((a, i) => (
          <ScrollReveal key={a.label} delay={i * 0.07}>
            <div className="glass-card gold-border-glow rounded-xl p-6 sm:p-8 text-center group hover:border-gold/40 transition-all duration-300">
              <a.icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-display text-sm sm:text-base font-semibold">{a.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhoShouldAttendSection;
