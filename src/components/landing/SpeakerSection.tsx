const speakerImg = "https://28coe.com/wp-content/uploads/2021/09/Dr.-Stephen-Akintayo-3-scaled.jpg";
import ScrollReveal from "./ScrollReveal";

const SpeakerSection = () => (
  <section id="speaker" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid to-background" />
    <div className="container max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative mx-auto lg:mx-0 max-w-sm">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-gold/20 via-transparent to-gold/10 blur-md" />
            <img
              src={speakerImg}
              alt="Dr. Stephen Akintayo"
              className="relative rounded-2xl w-full object-cover shadow-2xl shadow-black/40"
            />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal direction="right">
            <span className="inline-block text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-4">
              Featured Speaker
            </span>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.08}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gold-gradient-text">Dr. Stephen Akintayo</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.16}>
            <div className="space-y-4 font-body text-muted-foreground text-base leading-relaxed">
              <p>
                Dr. Stephen Akintayo is a globally recognized entrepreneur, bestselling author, prolific investor, and visionary business leader. With a career spanning real estate, agriculture, technology, and media, he has built a multi-million dollar portfolio and helped thousands of individuals across the world build wealth, scale their businesses, and create lasting impact.
              </p>
              <p>
                Known for his direct, no-nonsense approach to business and personal development, Dr. Akintayo has spoken on stages across Africa, Europe, the Middle East, and the Americas. His mission is simple: to raise a generation of wealth creators who lead with purpose and build with strategy.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default SpeakerSection;
