interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-royal">
      {label}
    </p>
    <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-wide text-navy sm:text-4xl lg:text-[2.85rem]">
      {title}
    </h2>
    {description && (
      <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeader;
