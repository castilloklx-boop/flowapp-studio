import { Reveal } from "./Reveal";
import type { TechCategory } from "@/data/technologies";

interface TechGridProps {
  technologies: TechCategory[];
}

export function TechGrid({ technologies }: TechGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
      {technologies.map((cat, i) => (
        <Reveal key={cat.label} delay={i * 0.06} className="h-full">
          <div className="bg-white border border-border rounded-2xl p-6 h-full hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-shadow">
            <p className="text-sm font-bold tracking-tight text-foreground mb-2">
              {cat.label}
            </p>
            <p className="text-xs text-secondary leading-relaxed mb-4">
              {cat.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium px-2.5 py-1 bg-accent/8 text-accent rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
