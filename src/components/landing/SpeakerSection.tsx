import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { speakerCredentials } from "@/lib/funnel-content";

const speakerImg = "https://28coe.com/wp-content/uploads/2021/09/Dr.-Stephen-Akintayo-3-scaled.jpg";

const SpeakerSection = () => (
  <section id="speaker" className="funnel-section border-y border-border bg-card/30">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:items-start">
        <ScrollReveal direction="left">
          <figure>
            <img
              src={speakerImg}
              alt="Dr. Stephen Akintayo"
              className="w-full rounded-2xl border border-border object-cover object-top aspect-[4/5]"
            />
            <figcaption className="mt-4 border-l-2 border-gold/50 pl-4">
              <p className="font-display text-lg font-semibold text-foreground">Dr. Stephen Akintayo</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">Founder, SACI HOLDINGS</p>
            </figcaption>
          </figure>
        </ScrollReveal>

        <div>
          <ScrollReveal direction="right">
            <SectionHeader
              label="Your host"
              title="The person leading the room"
              description="Dr. Stephen Akintayo is a globally recognized entrepreneur, bestselling author, and investor. He has built across real estate, agriculture, technology, and media — and mentored thousands of founders worldwide."
            />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-gold pl-4 font-display text-xl italic leading-relaxed text-foreground/90 sm:text-2xl">
              &ldquo;My mission is to raise a generation of wealth creators who lead with purpose and build with strategy.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.16}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {speakerCredentials.map((credential) => (
                <li
                  key={credential}
                  className="rounded-lg border border-border bg-card px-4 py-3 font-body text-sm text-muted-foreground"
                >
                  {credential}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.22}>
            <p className="mt-6 font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
              At this London meet &amp; greet, you get direct access — a conversation in the room, not a one-way presentation from a distance.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default SpeakerSection;
