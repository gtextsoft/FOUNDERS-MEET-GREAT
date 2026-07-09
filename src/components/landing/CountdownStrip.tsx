import { useEventCountdown } from "@/hooks/use-event-countdown";

interface CountdownStripProps {
  compact?: boolean;
}

const CountdownStrip = ({ compact = false }: CountdownStripProps) => {
  const countdown = useEventCountdown();
  const units = [
    { value: countdown.days, label: "Days" },
    { value: countdown.hours, label: "Hrs" },
    { value: countdown.minutes, label: "Min" },
    { value: countdown.seconds, label: "Sec" },
  ];

  return (
    <div className={compact ? "flex gap-2" : "flex flex-wrap gap-2 sm:gap-3"}>
      {units.map((unit) => (
        <div
          key={unit.label}
          className={
            compact
              ? "min-w-[3rem] rounded-md border border-border bg-card px-2 py-1.5 text-center"
              : "min-w-[4rem] rounded-lg border border-border bg-card px-3 py-2 text-center"
          }
        >
          <p className={`font-body font-semibold tabular-nums text-foreground ${compact ? "text-sm" : "text-lg sm:text-xl"}`}>
            {String(unit.value).padStart(2, "0")}
          </p>
          <p className={`font-body uppercase text-muted-foreground ${compact ? "text-[9px] tracking-wide" : "text-[10px] tracking-wider"}`}>
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountdownStrip;
