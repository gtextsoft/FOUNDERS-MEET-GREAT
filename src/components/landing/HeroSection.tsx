import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import speakerImg from "@/assets/dr.jpg";
import DiamondRule from "./DiamondRule";

const HeroSection = () => (
  <section className="sunburst-panel relative min-h-[100svh] overflow-hidden border-b border-navy/10">
    <div
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsla(214,72%,42%,0.08)_0%,transparent_42%),linear-gradient(120deg,hsla(221,55%,14%,0.04)_0%,transparent_50%)]"
      aria-hidden
    />

    {/* Soft London landmark silhouettes */}
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-[0.14] animate-london-drift"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' fill='%231A4BB8'%3E%3Cpath d='M0 288h80v-80h40v80h60V160h40v128h50V96h30v192h70V128h40v160h90V64h50v224h60V192h40v96h80V112h40v176h100V48h40v240h70V160h50v128h90V80h40v208h120V200h40v88h90z'/%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }}
    />

    <div className="container relative z-10 mx-auto grid max-w-6xl items-end gap-8 px-4 pb-10 pt-28 sm:pb-14 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-0 lg:pt-28">
      <motion.div
        className="max-w-xl pb-4 lg:pb-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.24em] text-royal">
          Stephen Akintayo Foundation presents
        </p>

        <h1 className="mt-4 font-display text-[2.65rem] font-extrabold leading-[0.92] tracking-wide text-navy sm:text-6xl lg:text-[4.35rem]">
          CEOs and Founders&apos;
          <span className="mt-1 block text-crimson">Meet &amp; Greet</span>
        </h1>

        <DiamondRule className="mt-6 justify-start" />

        <p className="mt-5 max-w-md font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
          An in-person evening in London with Dr. Stephen Akintayo — built for serious founders who want real access, not another crowded mixer.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
            <a href="#register">Reserve your seat</a>
          </Button>
          <Button variant="hero-outline" size="xl" className="w-full sm:w-auto" asChild>
            <a href="#agenda">Evening schedule</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <p
          className="pointer-events-none absolute left-1/2 top-[8%] z-0 -translate-x-1/2 select-none font-display text-[5.5rem] font-extrabold leading-none tracking-[0.04em] text-royal/25 sm:text-[7.5rem] lg:left-auto lg:right-0 lg:translate-x-0 lg:text-[9rem]"
          aria-hidden
        >
          LONDON
        </p>

        <div className="relative z-10 mx-auto w-[86%] sm:w-[78%] lg:ml-auto lg:mr-0 lg:w-[92%]">
          <div className="absolute -inset-x-6 bottom-0 top-[18%] rounded-[40%] bg-[radial-gradient(ellipse_at_center,hsla(214,72%,42%,0.28),transparent_68%)] blur-2xl" aria-hidden />
          <img
            src={speakerImg}
            alt="Dr. Stephen Akintayo, Founder of SACI Holdings"
            className="relative z-10 mx-auto block w-full object-cover object-top drop-shadow-[0_28px_50px_rgba(10,35,90,0.28)]"
          />
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-background via-background/70 to-transparent pb-4 pt-16 text-center lg:pb-8">
            <p className="font-display text-xl font-bold tracking-wide text-navy sm:text-2xl">
              Dr. Stephen Akintayo
            </p>
            <p className="mt-0.5 font-body text-sm font-medium text-royal">
              Founder, SACI Holdings
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
