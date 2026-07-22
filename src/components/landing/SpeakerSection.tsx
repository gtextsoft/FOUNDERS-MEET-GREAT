import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import DiamondRule from "./DiamondRule";
import { speakerCredentials } from "@/lib/funnel-content";
import speakerImg from "@/assets/dr.jpg";

const SpeakerSection = () => (
  <section id="speaker" className="funnel-section border-y border-navy/10 bg-white">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
        <ScrollReveal direction="left">
          <figure className="relative">
            <div className="absolute -left-3 -top-3 h-full w-full border border-royal/25" aria-hidden />
            <img
              src={speakerImg}
              alt="Dr. Stephen Akintayo"
              className="relative w-full object-cover object-top aspect-[4/5]"
            />
            <figcaption className="mt-5 border-l-[3px] border-crimson pl-4">
              <p className="font-display text-xl font-bold tracking-wide text-navy">
                Dr. Stephen Akintayo
              </p>
              <p className="mt-1 font-body text-sm font-medium text-royal">Founder, SACI Holdings</p>
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
            <DiamondRule className="mt-6 justify-start" />
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.1}>
            <blockquote className="mt-8 border-l-[3px] border-royal pl-4 font-body text-lg italic leading-relaxed text-navy/85 sm:text-xl">
              &ldquo;My mission is to raise a generation of wealth creators who lead with purpose and build with strategy.&rdquo;
            </blockquote>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.16}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {speakerCredentials.map((credential) => (
                <li
                  key={credential}
                  className="border-b border-navy/10 py-3 font-body text-sm text-muted-foreground"
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
