import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const FinalCTASection = () => (
  <section className="section-padding-lg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-navy-mid via-background to-navy-mid" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl animate-glow-pulse" />

    <div className="container max-w-3xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Don't Miss This Exclusive <span className="gold-gradient-text">Founder's Meet &amp; Greet</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Join Dr. Stephen Akintayo live in Philadelphia, Dallas, or Houston and connect with a room full of possibility.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <Button variant="hero" size="xl" asChild>
          <a href="#register">Book My Seat Now</a>
        </Button>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTASection;
