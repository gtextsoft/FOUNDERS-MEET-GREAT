import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid to-background" />
    <div className="container max-w-4xl mx-auto text-center relative z-10">
      <ScrollReveal>
        <span className="inline-block text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-4">
          About the Event
        </span>
      </ScrollReveal>
      <ScrollReveal delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          What is <span className="gold-gradient-text">America&apos;s Founders&apos; Meet &amp; Greet?</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.16}>
        <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          This is a premium gathering designed for entrepreneurs, founders, executives, investors, and professionals who want to expand their network, sharpen their vision, and engage in meaningful business conversations. It's more than an event — it's a catalyst for your next chapter of growth.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
