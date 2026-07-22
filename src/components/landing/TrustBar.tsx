import { CalendarDays, Clock, MapPin } from "lucide-react";
import { EVENT_CITY, EVENT_DATE_DISPLAY, EVENT_TIME_DISPLAY } from "@/lib/event";

const meta = [
  {
    icon: CalendarDays,
    label: "Date",
    value: EVENT_DATE_DISPLAY,
    tone: "bg-royal/10 text-royal",
  },
  {
    icon: Clock,
    label: "Time",
    value: EVENT_TIME_DISPLAY,
    tone: "bg-crimson/10 text-crimson",
  },
  {
    icon: MapPin,
    label: "Venue",
    value: `${EVENT_CITY}, UK`,
    tone: "bg-royal/10 text-royal",
  },
];

const TrustBar = () => (
  <section className="border-b border-navy/10 bg-white">
    <div className="container mx-auto max-w-6xl px-4 py-6 sm:py-7">
      <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
        {meta.map((item) => (
          <div key={item.label} className="flex items-start gap-3.5">
            <span className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.tone}`}>
              <item.icon className="h-4.5 w-4.5 h-[1.125rem] w-[1.125rem]" />
            </span>
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 font-body text-sm font-semibold text-navy sm:text-[0.95rem]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
