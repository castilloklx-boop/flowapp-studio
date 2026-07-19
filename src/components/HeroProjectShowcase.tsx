"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ProjectVisual } from "./ProjectVisual";
import type { Project } from "@/data/projects";

const showcaseProjects = [
  { slug: "dentalflow", label: "Studio dentistico", payoff: "Agenda e piani di cura digitali" },
  { slug: "tableops", label: "Ristorazione", payoff: "Mappa tavoli, comande e turni sala" },
  { slug: "hoteldesk", label: "Hotel", payoff: "Camere, check-in e housekeeping" },
  { slug: "fitmanager", label: "Fitness", payoff: "App mobile per iscritti e trainer" },
  { slug: "atlas-ops-platform", label: "Logistica", payoff: "Spedizioni, tratte e tracking live" },
  { slug: "manuboard", label: "Produzione", payoff: "Commesse, macchine e controllo qualità" },
  { slug: "ledgerview-dashboard", label: "Finanza", payoff: "Cash flow, scadenze e report" },
];

export function HeroProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((p) => (p + 1) % showcaseProjects.length), 2200);
  }, []);

  useEffect(() => {
    if (!reduced && !paused) startTimer();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [reduced, paused, startTimer]);

  const current = showcaseProjects[active];
  const project = projects.find((p) => p.slug === current.slug);
  if (!project) return null;

  return (
    <div className="relative w-full">
      {/* Frame */}
      <div className="rounded-2xl overflow-hidden border border-border bg-bg-alt shadow-[0_4px_40px_rgba(0,0,0,0.05)]">
        {/* Info bar */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 border-b border-border bg-white">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent whitespace-nowrap">
              {current.label}
            </span>
            <span className="text-[8px] md:text-[10px] text-secondary truncate">
              {current.payoff}
            </span>
          </div>
          <Link
            href={`/work/${current.slug}`}
            className="text-[9px] md:text-[10px] font-medium text-accent hover:underline whitespace-nowrap ml-2"
          >
            Vedi progetto →
          </Link>
        </div>

        {/* Animated visual */}
        <div className="aspect-[16/10] w-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={reduced ? {} : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduced ? {} : { opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              className="absolute inset-0"
            >
              <ProjectVisual project={project} variant="hero" />
            </motion.div>
          </AnimatePresence>

          {/* Gradient overlay at bottom for dots visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 py-2 md:py-2.5 bg-white border-t border-border">
          {showcaseProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); if (!reduced) startTimer(); }}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-4 md:w-5 h-1.5 md:h-2 bg-accent" : "w-1.5 md:w-2 h-1.5 md:h-2 bg-border hover:bg-secondary/50"
              }`}
              aria-label={`Progetto ${i + 1}: ${showcaseProjects[i].label}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
