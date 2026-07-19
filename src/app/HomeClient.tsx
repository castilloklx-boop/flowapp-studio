"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TechGrid } from "@/components/TechGrid";
import { Reveal } from "@/components/Reveal";
import { Configuratore } from "@/components/Configuratore";
import { HeroProjectShowcase } from "@/components/HeroProjectShowcase";
import { Marquee } from "@/components/Marquee";
import Link from "next/link";
import { ArrowRight, Calculator, Search, PenTool, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import type { Testimonial } from "@/data/testimonials";
import type { TechCategory } from "@/data/technologies";

const problems = [
  { title: "Troppi strumenti separati", desc: "Dati, documenti e attività sono distribuiti tra Excel, WhatsApp, email e software differenti." },
  { title: "Troppo lavoro manuale", desc: "Il team perde tempo copiando informazioni, aggiornando file e ripetendo sempre le stesse operazioni." },
  { title: "Gestionale poco adatto", desc: "Il software attuale è rigido, complicato oppure non segue realmente i processi dell'azienda." },
  { title: "Poca visibilità", desc: "Non è semplice capire cosa è stato fatto, chi deve intervenire e quali attività sono ancora aperte." },
];

const processSteps = [
  { num: "01", icon: Search, title: "Analisi", desc: "Comprendiamo il problema, gli utenti e le funzionalità necessarie." },
  { num: "02", icon: PenTool, title: "Prototipo", desc: "Progettiamo i flussi e le schermate principali del software." },
  { num: "03", icon: Code2, title: "Sviluppo", desc: "Realizziamo web app, backend, database e integrazioni." },
  { num: "04", icon: Rocket, title: "Rilascio", desc: "Testiamo il prodotto, lo pubblichiamo e pianifichiamo eventuali evoluzioni." },
];

interface Props { projects: Project[]; testimonials: Testimonial[]; technologies: TechCategory[]; }

export function HomeClient({ projects, testimonials, technologies }: Props) {
  return (
    <>
      <section className="pt-[120px] pb-16 md:pt-[160px] md:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
            <div className="pt-2 md:pt-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}>
                <h1 className="text-[40px] md:text-[54px] lg:text-[66px] leading-[1.05] font-bold tracking-[-0.02em] text-foreground">Web app e app su misura per la tua azienda.</h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed text-secondary max-w-[480px]">Progettiamo e sviluppiamo gestionali, dashboard, portali e strumenti digitali costruiti intorno ai tuoi processi.</p>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-accent font-medium max-w-[460px]">Raccontaci cosa deve fare il software e ricevi subito una prima stima di prezzo e tempistiche.</p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Button href="/contatti" variant="primary" className="gap-2"><Calculator size={17} />Calcola una stima</Button>
                  <Button href="/work" variant="secondary">Vedi i progetti</Button>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.1 }}>
              <HeroProjectShowcase projects={projects} />
            </motion.div>
          </div>
        </Container>
      </section>

      <Marquee text="Web app su misura · Dashboard operative · Portali clienti · Gestionale interno · Automazioni · App mobile · API · Integrazioni" speed={35} />

      <section className="relative h-[280px] md:h-[360px] overflow-hidden border-b border-border/30">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&q=90&fit=crop" alt="Dashboard e analytics aziendali" className="w-full h-full object-cover absolute inset-0" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <Container className="relative h-full flex items-center">
          <div className="max-w-[480px]"><p className="text-sm uppercase tracking-[0.2em] font-semibold text-accent mb-3">Il nostro approccio</p><p className="text-xl md:text-2xl font-bold text-white leading-tight">Progettiamo ogni software intorno ai processi reali della tua azienda.</p></div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <Container>
          <Reveal><p className="text-lg md:text-xl leading-relaxed text-foreground max-w-[760px] font-medium">Flowapp Studio progetta e sviluppa web app e app su misura. Creiamo gestionali, dashboard, portali clienti e strumenti interni che sostituiscono Excel, centralizzano dati e automatizzano i processi da cui dipende il lavoro quotidiano dei team.</p></Reveal>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">{[{v:"24+",l:"Concept settoriali"},{v:"6",l:"Fasi di lavoro"},{v:"4–14",l:"Settimane tipiche"},{v:"1",l:"Piattaforma su misura"}].map((m,i)=><Reveal key={m.l} delay={i*0.08}><div className="bg-white border border-border rounded-xl p-4 text-center"><div className="text-2xl md:text-3xl font-bold text-accent">{m.v}</div><div className="text-[10px] md:text-xs text-secondary mt-1">{m.l}</div></div></Reveal>)}</div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader title="Un software costruito sul tuo modo di lavorare" description="Sostituiamo strumenti frammentati con una sola applicazione progettata intorno ai tuoi processi." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06} className="h-full">
                <div className="bg-bg-alt border border-border rounded-2xl p-6 h-full hover:bg-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
                  <span className="text-2xl font-bold text-accent/15">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-bold tracking-tight text-foreground mt-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <SectionHeader title="Calcola una prima stima" description="Rispondi a poche domande e scopri una fascia indicativa di prezzo e tempistiche." className="mb-10" />
            <Configuratore />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader label="Progetti" title="Cosa abbiamo realizzato." description="Web app, gestionali e dashboard sviluppati per aziende in settori diversi." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 12).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <Reveal><div className="mt-10 text-center"><Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors">Scopri di più<ArrowRight size={16} /></Link></div></Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <SectionHeader title="Dall'idea al software" description="Quattro fasi per passare dal problema al prodotto funzionante." />
          <div className="mt-14">
            <div className="hidden lg:block"><div className="relative"><div className="absolute top-7 left-[8%] right-[8%] h-[2px] bg-border" /><div className="grid grid-cols-4 gap-1 relative">{processSteps.map((step, i) => <Reveal key={step.num} delay={i * 0.08}><div className="relative pt-7 text-center p-4 rounded-xl"><div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center z-10"><step.icon size={18} /></div><h4 className="mt-4 text-sm font-bold text-foreground">{step.title}</h4><p className="mt-2 text-xs text-secondary leading-relaxed">{step.desc}</p></div></Reveal>)}</div></div></div>
            <div className="lg:hidden space-y-1">{processSteps.map((step, i) => <Reveal key={step.num} delay={i * 0.06}><div className="flex items-start gap-4 bg-white border border-border rounded-2xl p-5"><div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0"><step.icon size={18} /></div><div><div className="flex items-center gap-2 mb-1"><span className="text-xs font-bold text-accent">{step.num}</span><h4 className="text-sm font-bold text-foreground">{step.title}</h4></div><p className="text-xs text-secondary leading-relaxed">{step.desc}</p></div></div></Reveal>)}</div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader title="Tecnologie moderne e affidabili" description="Scegliamo lo stack tecnico in base al progetto, agli utenti, ai dati e alle integrazioni necessarie." />
          <div className="mt-14"><TechGrid technologies={technologies} /></div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <SectionHeader title="Cosa dicono i nostri clienti." description="Feedback da responsabili operativi e team che usano i nostri software ogni giorno." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-1">{testimonials.map((t, i) => <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} company={t.company} index={i} />)}</div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-foreground">
        <Container>
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="text-[32px] md:text-[42px] leading-[1.08] font-bold tracking-[-0.02em] text-white">Pronto a ricevere una stima?</h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-white/60 max-w-[480px] mx-auto">In meno di due minuti scopri una fascia indicativa di prezzo e tempistiche per il tuo progetto.</p>
              <div className="mt-8"><Button href="/contatti" variant="secondary" className="border-white/20 text-white hover:bg-white/10 gap-2"><Calculator size={17} />Calcola una stima</Button></div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
