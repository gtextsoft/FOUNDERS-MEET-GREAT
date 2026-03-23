import { MapPin, CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const cities = [
  { city: "Philadelphia", date: "Saturday, 28th March 2026", time: "10:00 AM" },
  { city: "Dallas", date: "Saturday, 4th April 2026", time: "TBA" },
  { city: "Houston", date: "Saturday, 11th April 2026", time: "TBA" },
];

const EventCitiesSection = () => (
  <section id="cities" className="section-padding relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-mid to-background" />
    <div className="container max-w-5xl mx-auto relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-gold/70 font-body text-sm tracking-[0.2em] uppercase mb-4">Locations</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Event <span className="gold-gradient-text">Cities &amp; Dates</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {cities.map((c, i) => (
          <ScrollReveal key={c.city} delay={i * 0.1}>
            <div className="glass-card gold-border-glow rounded-xl p-6 sm:p-8 text-center group hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 sm:mb-6 group-hover:bg-gold/20 transition-colors">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 gold-gradient-text">{c.city}</h3>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                <CalendarDays className="w-4 h-4 text-gold/60" />
                <span className="font-body">{c.date}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Clock className="w-4 h-4 text-gold/60" />
                <span className="font-body">{c.time}</span>
              </div>
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href="#register">Register Now</a>
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <p className="text-center text-sm text-muted-foreground mt-10 font-body italic">
          Venue details will be shared with registered attendees.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default EventCitiesSection;
