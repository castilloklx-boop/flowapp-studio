interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`max-w-[720px] ${className}`}>
      {label && (
        <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-accent mb-4">
          {label}
        </p>
      )}
      <h2 className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.08] font-bold tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base leading-relaxed text-secondary/80 max-w-[560px]">
          {description}
        </p>
      )}
    </div>
  );
}
