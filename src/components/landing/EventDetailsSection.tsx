import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { eventLogistics } from "@/lib/funnel-content";

const EventDetailsSection = () => (
  <section id="event-details" className="funnel-section">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <ScrollReveal>
          <SectionHeader
            label="Practical details"
            title="Everything you need before you register"
            description="Venue address is shared privately with confirmed attendees. Register with a valid email and phone number so the team can send your instructions."
          />
          <Button variant="hero" size="lg" className="mt-8 w-full sm:w-auto" asChild>
            <a href="#register">Complete registration</a>
          </Button>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="overflow-hidden border border-navy/10 bg-white">
            <table className="w-full text-left">
              <tbody>
                {eventLogistics.map((row, index) => (
                  <tr
                    key={row.label}
                    className={index !== eventLogistics.length - 1 ? "border-b border-navy/10" : ""}
                  >
                    <th className="w-[38%] px-5 py-4 align-top font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-royal">
                      {row.label}
                    </th>
                    <td className="px-5 py-4 font-body text-sm font-medium text-navy">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default EventDetailsSection;
