import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";

const outcomes = [
  {
    title: "Sharper direction for your next move",
    detail:
      "Hear frameworks on scaling, wealth creation, and leadership from someone who has built across multiple industries.",
  },
  {
    title: "Relationships that can open doors",
    detail:
      "The room is intentionally composed of founders and operators — the people who can partner, invest, or refer.",
  },
  {
    title: "Answers to the questions you cannot Google",
    detail:
      "Use the live Q&A to ask what actually matters for your business stage, market, and goals.",
  },
  {
    title: "A room that matches your ambition",
    detail: "No passive audience. Everyone is there to connect, contribute, and build.",
  },
];

const OutcomesSection = () => (
  <section id="why-attend" className="funnel-section border-y border-navy/10 bg-white">
    <div className="container mx-auto max-w-6xl px-4">
      <ScrollReveal>
        <SectionHeader
          label="What you walk away with"
          title="Four outcomes attendees come for"
          description="Each part of the evening is designed to move you from introduction to conversation to next step."
        />
      </ScrollReveal>

      <div className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
        {outcomes.map((outcome, index) => (
          <ScrollReveal key={outcome.title} delay={index * 0.05}>
            <div className="grid gap-2 py-6 sm:grid-cols-[5rem_1fr] sm:gap-8 sm:py-7">
              <p className="font-display text-2xl font-bold tracking-wide text-royal">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="font-display text-xl font-bold tracking-wide text-navy sm:text-2xl">
                  {outcome.title}
                </h3>
                <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {outcome.detail}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OutcomesSection;
