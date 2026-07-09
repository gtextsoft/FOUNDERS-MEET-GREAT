interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => (
  <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
    <p className="font-body text-xs uppercase tracking-[0.2em] text-gold/75 mb-3">{label}</p>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight text-balance">
      {title}
    </h2>
    {description && (
      <p className="mt-4 font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
