const trustItems = [
  { value: "1 evening", label: "Focused format" },
  { value: "Live Q&A", label: "Direct access" },
  { value: "Curated room", label: "Founder-to-founder" },
  { value: "London", label: "Central location" },
];

const TrustBar = () => (
  <section className="border-b border-border bg-card/50">
    <div className="container mx-auto max-w-6xl px-4 py-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {trustItems.map((item) => (
          <div key={item.label} className="border-l border-gold/30 pl-4">
            <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">{item.value}</p>
            <p className="mt-1 font-body text-xs text-muted-foreground sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
