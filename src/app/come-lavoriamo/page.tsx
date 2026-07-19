"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { Calculator, Search, PenTool, Code2, Rocket, RefreshCw, MessageSquare, FileText, Check, ArrowRight } from "lucide-react";

const phases = [
  {
    num: "01", icon: MessageSquare, title: "Consulenza iniziale",
    what: "Capiamo obiettivi, vincoli, strumenti attuali, budget indicativo e priorità.",
    output: "Documento di sintesi con obiettivi, contesto e prime ipotesi di soluzione.",
    duration: "1–2 incontri",
    example: "Un'azienda logistica ci racconta che perde 8 ore a settimana a consolidare dati tra 3 software diversi."
  },
  {
    num: "02", icon: Search, title: "Analisi dei processi",
    what: "Mappiamo flussi, ruoli, dati, documenti, eccezioni e colli di bottiglia. Intervistiamo chi usa gli strumenti ogni giorno.",
    output: "Mappa dei processi attuali, elenco dei punti critici e opportunità di miglioramento.",
    duration: "1–3 settimane",
    example: "Scopriamo che il 40% del tempo del team operations è speso a copiare dati tra Excel e il gestionale."
  },
  {
    num: "03", icon: PenTool, title: "Architettura e UX/UI Design",
    what: "Definiamo moduli, permessi, viste, automazioni e integrazioni. Progettiamo wireframe, prototipi navigabili e design system.",
    output: "Wireframe, prototipo interattivo, lista funzionalità con priorità, stima raffinata.",
    duration: "2–4 settimane",
    example: "Creiamo un prototipo cliccabile della dashboard dispatch che il cliente può testare prima dello sviluppo."
  },
  {
    num: "04", icon: Code2, title: "Sviluppo e integrazioni",
    what: "Costruiamo frontend, backend, database, API, aree riservate, automazioni. Sviluppiamo per moduli, con demo periodiche.",
    output: "Ambiente di test accessibile, moduli rilasciati progressivamente, documentazione tecnica.",
    duration: "4–14 settimane",
    example: "Rilasciamo prima il modulo dispatch, poi tracking, poi portale clienti. Ogni 2 settimane demo con il team."
  },
  {
    num: "05", icon: Rocket, title: "Test e rilascio",
    what: "Testiamo flussi principali, permessi, performance, sicurezza e responsive. Prepariamo ambiente di produzione e documentazione.",
    output: "Software pubblicato, documentazione utente, formazione iniziale, ambiente configurato.",
    duration: "1–3 settimane",
    example: "Prima del go-live simuliamo 500 spedizioni per verificare che il sistema regga il carico reale."
  },
  {
    num: "06", icon: RefreshCw, title: "Miglioramento continuo",
    what: "Raccogliamo feedback dagli utenti reali, misuriamo metriche d'uso e pianifichiamo evoluzioni e nuove funzionalità.",
    output: "Backlog evolutivo, report di utilizzo, nuove funzionalità prioritarie.",
    duration: "Continuativa",
    example: "Dopo 2 mesi scopriamo che il 30% degli autisti usa la app offline: ottimizziamo la sincronizzazione."
  },
];

const outputs = [
  "Mappa dei processi attuali", "Lista funzionalità con priorità", "Wireframe e flussi utente",
  "Prototipo navigabile", "Design system e componenti", "Architettura moduli e dati",
  "Ambiente demo accessibile", "Stima funzionale e budget", "Documentazione essenziale",
  "Formazione utenti", "Piano evolutivo post-rilascio", "Supporto tecnico dedicato",
];

const estimationFactors = [
  "Complessità dei flussi operativi", "Numero di ruoli utente e permessi",
  "Quantità e tipo di dati da gestire", "Integrazioni con altri software",
  "Necessità di una mobile app", "Livello di progettazione UX/UI",
  "Dashboard e report richiesti", "Automazioni e notifiche",
  "Requisiti di sicurezza", "Importazione di dati esistenti",
  "Urgenza e tempistiche", "Supporto post-rilascio",
];

export default function ComeLavoriamoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-12 md:pt-[160px] md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent pointer-events-none" />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-[720px]">
            <h1 className="text-[38px] md:text-[52px] lg:text-[64px] leading-[1.05] font-bold tracking-[-0.02em] text-foreground">Come trasformiamo un processo in software</h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-secondary max-w-[560px]">Un metodo chiaro, collaborativo e orientato al risultato: prima capiamo come lavori, poi progettiamo e sviluppiamo lo strumento giusto.</p>
            <div className="mt-6"><Button href="/contatti" variant="primary" className="gap-2"><Calculator size={17} /> Partiamo da una call di analisi</Button></div>
          </motion.div>
        </Container>
      </section>

      {/* Marquee */}
      <Marquee text="Consulenza · Analisi · UX/UI Design · Sviluppo · Test · Rilascio · Evoluzione" speed={40} className="border-y border-border/30" />

      {/* Phases */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-4">Il processo in 6 fasi</h2><p className="text-base text-secondary max-w-[600px] mb-10">Ogni fase produce output concreti. Nessuna sorpresa, nessun mese al buio.</p></Reveal>
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <Reveal key={phase.num} delay={i * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_1.5fr] gap-4 lg:gap-8 bg-bg-alt border border-border rounded-2xl p-5 md:p-6 items-start hover:bg-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group">
                  <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:text-center lg:min-w-[80px]">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300"><phase.icon size={18} /></div>
                    <span className="text-lg font-bold text-accent/30">{phase.num}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{phase.title}</h3>
                    <p className="text-xs text-secondary mt-1.5 leading-relaxed">{phase.what}</p>
                    <div className="mt-2 flex items-start gap-1.5 text-[10px] text-accent"><span className="mt-0.5">⏱</span>{phase.duration}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white border border-border rounded-lg p-3 text-xs"><span className="font-semibold text-foreground">Output:</span> <span className="text-secondary">{phase.output}</span></div>
                    <div className="bg-accent/5 border border-accent/10 rounded-lg p-3 text-xs"><span className="font-semibold text-accent">Esempio:</span> <span className="text-secondary">{phase.example}</span></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What you get */}
      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-4">Cosa ricevi durante il percorso</h2><p className="text-base text-secondary max-w-[600px] mb-10">Output concreti in ogni fase, non solo promesse. Ecco cosa produciamo e condividiamo.</p></Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {outputs.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <div className="flex items-center gap-2 bg-white border border-border rounded-xl p-3 text-xs text-foreground hover:border-accent/30 hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-200">
                  <Check size={12} className="text-accent flex-shrink-0" />{item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaboration */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-10 text-center">Come collaboriamo</h2></Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Call brevi e operative", d: "Aggiornamenti rapidi, niente riunioni infinite. Ogni call ha un ordine del giorno e decisioni chiare." },
                { t: "Revisioni su prototipo", d: "Il cliente vede e testa il prototipo prima di qualsiasi sviluppo. Le modifiche costano poco." },
                { t: "Priorità condivise", d: "Definiamo insieme cosa è urgente e cosa può aspettare, con backlog trasparente." },
                { t: "Sviluppo per step", d: "Rilasciamo moduli funzionanti, non aspettiamo mesi per vedere qualcosa di concreto." },
                { t: "Demo periodiche", d: "Ogni 2 settimane mostriamo i progressi e raccogliamo feedback reali." },
                { t: "Niente mesi al buio", d: "Comunicazione costante via chat, email o tool condivisi. Mai lasciati senza risposta." },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 0.05}>
                  <div className="bg-bg-alt border border-border rounded-2xl p-5 h-full hover:bg-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.04)] transition-all">
                    <h4 className="text-sm font-bold text-foreground mb-1.5">{item.t}</h4>
                    <p className="text-xs text-secondary leading-relaxed">{item.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Estimation */}
      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-4">Come stimiamo tempi e budget</h2><p className="text-base text-secondary max-w-[600px] mb-10">Ogni stima si basa su fattori concreti. Niente pacchetti standard per progetti che richiedono soluzioni su misura.</p></Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {estimationFactors.map((item, i) => (
              <Reveal key={item} delay={i * 0.03}>
                <div className="bg-white border border-border rounded-xl p-3 text-xs text-secondary leading-relaxed flex items-start gap-2 hover:border-accent/30 transition-colors">
                  <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />{item}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}><p className="mt-6 text-sm text-secondary max-w-[600px] leading-relaxed">Dopo la call di analisi produciamo una stima dettagliata con funzionalità, priorità, tempistiche e costi. Ricevi tutto prima di decidere se partire.</p></Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <Container>
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="text-[28px] md:text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-white">Partiamo da una call di analisi</h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 max-w-[460px] mx-auto">Raccontaci cosa rallenta il tuo team. In 30 minuti capiamo insieme quali sono i prossimi passi.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contatti" variant="secondary" className="border-white/20 text-white hover:bg-white/10 gap-2"><Calculator size={17} /> Richiedi una stima</Button>
                <Button href="/soluzioni" variant="secondary" className="border-white/20 text-white hover:bg-white/10">Vedi le soluzioni</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
