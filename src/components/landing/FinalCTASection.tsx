import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { EVENT_DATE_DISPLAY } from "@/lib/event";

const FinalCTASection = () => (
  <section className="section-padding-lg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-mid via-background to-navy-mid" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/6 blur-3xl animate-glow-pulse" />
    <div className="absolute inset-0 hero-grid opacity-40" />

    <div className="container max-w-3xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <span className="section-eyebrow">Don&apos;t Wait</span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Secure Your Place at the{" "}
          <span className="gold-gradient-text italic">London Meet &amp; Greet</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Join Dr. Stephen Akintayo, Founder SACI HOLDINGS, in London on {EVENT_DATE_DISPLAY} and reserve your seat now.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Button variant="hero" size="xl" asChild>
          <a href="#register">Register Now</a>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
