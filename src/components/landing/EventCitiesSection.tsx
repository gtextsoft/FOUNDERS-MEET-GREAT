import { MapPin, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { EVENT_CITY, EVENT_DATE_DISPLAY } from "@/lib/event";

const cities = [
  { city: EVENT_CITY, date: EVENT_DATE_DISPLAY },
];

const EventCitiesSection = () => (
  <section id="cities" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-mid/60 to-transparent" />
    <div className="container max-w-5xl mx-auto relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-eyebrow">Location</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Event <span className="gold-gradient-text italic">Location &amp; Date</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-1 gap-4 sm:gap-6 max-w-md mx-auto">
        {cities.map((c, i) => (
          <ScrollReveal key={c.city} delay={i * 0.1}>
            <div className="glass-card gold-border-glow card-accent-top rounded-2xl p-8 sm:p-10 text-center group hover:border-gold/35 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors ring-1 ring-gold/20">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4 gold-gradient-text">{c.city}</h3>
              <div className="inline-flex items-center justify-center gap-2.5 text-sm text-muted-foreground mb-8 px-4 py-2 rounded-full bg-gold/5 border border-gold/15">
                <CalendarDays className="w-4 h-4 text-gold" />
                <span className="font-body">{c.date}</span>
              </div>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href="#register">Register Now</a>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center text-sm text-muted-foreground mt-10 font-body">
          Venue details will be shared with registered attendees.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default EventCitiesSection;
