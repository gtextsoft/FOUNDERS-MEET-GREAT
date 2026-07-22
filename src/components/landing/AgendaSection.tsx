import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { agenda } from "@/lib/funnel-content";

const AgendaSection = () => (
  <section id="agenda" className="funnel-section">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
        <ScrollReveal>
          <SectionHeader
            label="Evening schedule"
            title="Here is exactly how the event runs"
            description="No vague programming. You will know what happens from arrival to close before you book your seat."
          />
          <div className="mt-8 space-y-2 border-l-2 border-royal/30 pl-4">
            <p className="font-body text-sm text-muted-foreground">
              <span className="font-semibold text-navy">Start time:</span> 6:00 PM
            </p>
            <p className="font-body text-sm text-muted-foreground">
              <span className="font-semibold text-navy">Approx. end:</span> 9:30 PM
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Arrive 15 minutes early for check-in.
            </p>
          </div>
          <Button variant="hero" size="lg" className="mt-6 w-full sm:w-auto" asChild>
            <a href="#register">Reserve your seat</a>
          </Button>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute bottom-3 left-[0.65rem] top-3 w-px bg-royal/25 sm:left-4" aria-hidden />
          <ol className="space-y-0">
            {agenda.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.04}>
                <li className="relative grid grid-cols-[1.5rem_1fr] gap-4 pb-8 sm:grid-cols-[2rem_1fr] sm:gap-6">
                  <div className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-royal bg-background sm:mt-1.5 sm:h-3.5 sm:w-3.5" />
                  <div className="min-w-0">
                    <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-crimson">
                      {item.time}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-wide text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default AgendaSection;
