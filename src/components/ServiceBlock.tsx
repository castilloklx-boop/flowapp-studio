import { Reveal } from "./Reveal";
import { Check } from "lucide-react";

interface ServiceBlockProps {
  title: string;
  description: string;
  items: string[];
  index: number;
}

export function ServiceBlock({ title, description, items, index }: ServiceBlockProps) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-3 text-base text-secondary leading-relaxed max-w-[380px]">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-accent" />
              </div>
              <span className="text-sm text-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
