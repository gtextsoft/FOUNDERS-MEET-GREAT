import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT_DATE_DISPLAY, EVENT_TARGET_DATE } from "@/lib/event";
import heroBg from "@/assets/hero-bg.jpg";

const speakerImg = "https://28coe.com/wp-content/uploads/2021/09/Dr.-Stephen-Akintayo-3-scaled.jpg";

function useCountdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, EVENT_TARGET_DATE - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

const HeroSection = () => {
  const countdown = useCountdown();
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
        <div className="absolute inset-0 hero-grid" />
      </div>

      <div className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full bg-gold/8 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 left-[10%] w-56 h-56 rounded-full bg-gold/5 blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="container max-w-7xl mx-auto px-4 relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="date-pill">
                <CalendarDays className="w-3.5 h-3.5" />
                {EVENT_DATE_DISPLAY}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-5 sm:mb-6 mt-6"
            >
              London CEO &amp; Founders{" "}
              <span className="gold-gradient-text italic">Meet &amp; Greet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-gold-light/90 text-sm sm:text-base tracking-[0.14em] uppercase mb-4"
            >
              Connect. Collaborate. Grow.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              Join Dr. Stephen Akintayo, Founder SACI HOLDINGS, for an exclusive London CEO &amp; Founders Meet &amp; Greet on {EVENT_DATE_DISPLAY}.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4"
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <a href="#register">Register Now</a>
              </Button>
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
                <a href="#cities">See Location</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10"
            >
              <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.18em] mb-3">Event begins in</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Min" },
                  { value: countdown.seconds, label: "Sec" },
                ].map((unit) => (
                  <div key={unit.label} className="glass-card gold-border-glow card-accent-top rounded-xl px-4 sm:px-5 py-3 min-w-[4rem] sm:min-w-[4.5rem] text-center">
                    <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient-text tabular-nums leading-none">{String(unit.value).padStart(2, "0")}</p>
                    <p className="font-body text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-1.5">{unit.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gold/10"
            >
              {[
                { value: "London", label: "Location", icon: MapPin },
                { value: "Limited", label: "Seats Available", icon: null },
                { value: "Dr. Stephen Akintayo", label: "Featured Speaker", icon: null },
              ].map((stat) => (
                <div key={stat.label} className="flex items-start gap-2.5">
                  {stat.icon && <stat.icon className="w-4 h-4 text-gold/70 mt-1 shrink-0" />}
                  <div>
                    <p className="font-display text-xl sm:text-2xl font-semibold gold-gradient-text leading-tight">{stat.value}</p>
                    <p className="font-body text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end mt-2 sm:mt-4 lg:mt-0"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold/25 via-gold/5 to-transparent blur-md opacity-80" />
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-gold/20 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-gold/15 rounded-full" />
              <img
                src={speakerImg}
                alt="Dr. Stephen Akintayo"
                className="relative rounded-2xl w-full aspect-[4/5] object-cover object-top shadow-2xl shadow-black/50 ring-1 ring-gold/20"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card gold-border-glow card-accent-top rounded-xl p-4 sm:p-5">
                <p className="font-display text-lg font-semibold text-gold-light">Dr. Stephen Akintayo</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">Founder, SACI HOLDINGS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
