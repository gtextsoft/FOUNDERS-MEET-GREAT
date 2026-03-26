import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const speakerImg = "https://28coe.com/wp-content/uploads/2021/09/Dr.-Stephen-Akintayo-3-scaled.jpg";

const TARGET_DATE = new Date("2026-03-28T10:00:00-04:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET_DATE - now);
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
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating gold orb */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-gold/3 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container max-w-7xl mx-auto px-4 relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-gold/80 font-body text-sm tracking-[0.2em] uppercase mb-6">
                3 Locations, 1 Country
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6"
            >
              America&apos;s <span className="gold-gradient-text">Founders&apos; Meet &amp; Greet</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-muted-foreground text-sm sm:text-lg leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              Join Dr. Stephen Akintayo for the official America&apos;s Founders&apos; Meet &amp; Greet tour in Philadelphia, Houston, and Dallas.
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
                <a href="#cities">See Locations</a>
              </Button>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 sm:gap-4 mt-7 sm:mt-8"
            >
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Min" },
                { value: countdown.seconds, label: "Sec" },
              ].map((unit) => (
                <div key={unit.label} className="glass-card rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 min-w-[3.8rem] sm:min-w-[4.2rem] text-center">
                  <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient-text tabular-nums">{String(unit.value).padStart(2, "0")}</p>
                  <p className="font-body text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{unit.label}</p>
                </div>
              ))}
              <div className="flex items-center ml-0 sm:ml-1">
                <p className="font-body text-xs text-muted-foreground">until Philadelphia kickoff</p>
              </div>
            </motion.div>

            {/* Social proof stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 sm:gap-8 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
            >
              {[
                { value: "3", label: "Locations" },
                { value: "1", label: "Country" },
                { value: "Dr. Stephen Akintayo", label: "Founder, Saci Holdings" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl sm:text-3xl font-bold gold-gradient-text">{stat.value}</p>
                  <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Speaker image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end mt-2 sm:mt-4 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-gold/30 via-gold/10 to-transparent blur-sm" />
              <img
                src={speakerImg}
                alt="Dr. Stephen Akintayo"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl shadow-black/40"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4">
                <p className="font-display text-sm font-semibold text-gold">Dr. Stephen Akintayo</p>
                <p className="font-body text-xs text-muted-foreground">Founder, Saci Holdings</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
