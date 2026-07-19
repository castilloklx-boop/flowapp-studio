"use client";

import { useEffect, useState } from "react";

export function Marquee({ text, speed = 40, className = "" }: { text: string; speed?: number; className?: string }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 md:py-6 select-none ${className}`}>
      <div
        className="inline-flex gap-8 md:gap-12"
        style={{
          animation: reduced ? "none" : `marquee ${speed}s linear infinite`,
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight inline-flex gap-8 md:gap-12">
            {text.split(" · ").map((word, j) => (
              <span key={j} className="opacity-[0.06]">{word}{j < text.split(" · ").length - 1 ? " ·" : ""}</span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
