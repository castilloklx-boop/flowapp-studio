"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";
import { Calculator, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function WorkPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return projects;
    const q = query.toLowerCase();
    return projects.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.industry.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.keywords.some((k) => k.toLowerCase().includes(q)) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <>
      <section className="pt-[120px] pb-12 md:pt-[160px] md:pb-16">
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}>
            <SectionHeader
              title="Progetti realizzati"
              description="Una selezione di piattaforme, dashboard, app e strumenti digitali progettati per semplificare processi reali in settori diversi."
            />
            <p className="text-[11px] text-secondary/60 mt-2 max-w-[480px] leading-relaxed">
              I progetti mostrati includono case study dimostrativi basati su scenari realistici e soluzioni tecnicamente fattibili.
            </p>
          </motion.div>
          <div className="mt-8 relative max-w-[420px]">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary/50" />
            <input
              type="text" value={query} onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca per settore, esigenza o tecnologia..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-bg-alt border border-border rounded-full text-foreground placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
            />
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          {filtered.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((project) => <ProjectCard key={project.slug} project={project} />)}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <p className="text-secondary text-lg">Nessun progetto trovato.</p>
              <p className="text-secondary/60 text-sm mt-2">Prova con un altro settore o una diversa esigenza.</p>
              <button onClick={() => setQuery("")} className="mt-6 text-sm font-medium text-accent hover:underline">Mostra tutti i progetti</button>
            </div>
          )}
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-foreground">
        <Container>
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="text-[32px] md:text-[42px] leading-[1.08] font-bold tracking-[-0.02em] text-white">Hai un progetto in mente?</h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/60 max-w-[460px] mx-auto">Raccontaci cosa ti serve e ricevi una prima stima in meno di due minuti.</p>
              <div className="mt-8"><Button href="/contatti" variant="secondary" className="border-white/20 text-white hover:bg-white/10 gap-2"><Calculator size={17} /> Calcola una stima</Button></div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
