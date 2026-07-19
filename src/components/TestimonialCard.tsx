import { Reveal } from "./Reveal";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  index,
}: TestimonialCardProps) {
  return (
    <Reveal delay={index * 0.12}>
      <blockquote className="bg-bg-alt border border-border rounded-2xl p-8 md:p-10 h-full flex flex-col hover:bg-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
        <div className="text-accent/30 mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
          </svg>
        </div>
        <p className="text-base md:text-lg leading-relaxed text-foreground flex-1">
          {quote}
        </p>
        <footer className="mt-6 pt-6 border-t border-border">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-secondary mt-0.5">
            {role}, {company}
          </p>
        </footer>
      </blockquote>
    </Reveal>
  );
}
