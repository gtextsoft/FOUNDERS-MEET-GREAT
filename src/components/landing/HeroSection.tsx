import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { EVENT_CITY, EVENT_DATE_DISPLAY, EVENT_TIME_DISPLAY } from "@/lib/event";
import CountdownStrip from "./CountdownStrip";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative border-b border-border">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-background/88" />
    </div>

    <div className="container relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-28 sm:pb-20 sm:pt-32">
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-gold/80">
            Exclusive London founder gathering
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
            Meet Dr. Stephen Akintayo and connect with London&apos;s founder community — in one focused evening.
          </h1>
          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
            A private CEO &amp; Founders Meet &amp; Greet built for real conversations, direct access, and relationships that move your business forward.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#register">Reserve your seat</a>
            </Button>
            <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#agenda">See the evening schedule</a>
            </Button>
          </div>

          <p className="mt-4 font-body text-sm text-muted-foreground">
            Limited capacity. Venue details sent after registration.
          </p>
        </div>

        <aside className="rounded-2xl border border-border bg-card/90 p-5 sm:p-6">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-gold/80">Event snapshot</p>

          <dl className="mt-5 space-y-4">
            <div className="flex gap-3 border-b border-border pb-4">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <dt className="font-body text-xs uppercase tracking-wide text-muted-foreground">Date</dt>
                <dd className="mt-1 font-body text-sm font-medium text-foreground">{EVENT_DATE_DISPLAY}</dd>
              </div>
            </div>
            <div className="flex gap-3 border-b border-border pb-4">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <dt className="font-body text-xs uppercase tracking-wide text-muted-foreground">Time</dt>
                <dd className="mt-1 font-body text-sm font-medium text-foreground">{EVENT_TIME_DISPLAY}</dd>
              </div>
            </div>
            <div className="flex gap-3 border-b border-border pb-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <dt className="font-body text-xs uppercase tracking-wide text-muted-foreground">Location</dt>
                <dd className="mt-1 font-body text-sm font-medium text-foreground">{EVENT_CITY}, UK</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <dt className="font-body text-xs uppercase tracking-wide text-muted-foreground">Hosted by</dt>
                <dd className="mt-1 font-body text-sm font-medium text-foreground">Stephen Akintayo Foundation</dd>
              </div>
            </div>
          </dl>

          <div className="mt-6 border-t border-border pt-5">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Registration closes in
            </p>
            <CountdownStrip />
          </div>
        </aside>
      </div>
    </div>
  </section>
);

export default HeroSection;
