"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Configuratore } from "@/components/Configuratore";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const stimaFactors = [
  "Numero e complessità delle schermate",
  "Quantità di flussi operativi",
  "Numero di ruoli utente e permessi",
  "Complessità del database e dati",
  "Integrazioni con altri software",
  "Automazioni necessarie",
  "Importazione di dati esistenti",
  "Necessità di una mobile app",
  "Livello di progettazione UX/UI",
  "Dashboard e report richiesti",
  "Requisiti di sicurezza",
  "Supporto successivo al rilascio",
];

const inclusions = [
  "Analisi dei processi",
  "Raccolta dei requisiti",
  "Architettura funzionale",
  "Definizione delle priorità",
  "Progettazione UX/UI",
  "Wireframe e prototipo navigabile",
  "Sviluppo frontend",
  "Sviluppo backend",
  "Database",
  "Sistema di autenticazione",
  "Ruoli e permessi",
  "Pannello amministrativo",
  "Dashboard",
  "Report",
  "API",
  "Integrazioni",
  "Automazioni",
  "Importazione iniziale dei dati",
  "Test funzionali e responsive",
  "Configurazione ambiente di produzione",
  "Deploy",
  "Documentazione essenziale",
  "Formazione iniziale",
  "Supporto dopo il rilascio",
];

export default function ContattiPage() {
  return (
    <>
      <section className="pt-[120px] pb-12 md:pt-[160px] md:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="max-w-[640px]"
          >
            <h1 className="text-[38px] md:text-[52px] lg:text-[64px] leading-[1.05] font-bold tracking-[-0.02em] text-foreground">
              Calcola una prima stima
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-secondary max-w-[560px]">
              Rispondi a poche domande e scopri una fascia indicativa di prezzo
              e tempistiche. In meno di due minuti, senza impegno.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="max-w-[640px] mx-auto">
            <Configuratore />
          </div>
        </Container>
      </section>

      {/* How we estimate */}
      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <Reveal>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-foreground">
                Come stimiamo un progetto
              </h2>
              <p className="mt-4 text-base text-secondary leading-relaxed max-w-[600px]">
                Ogni software viene stimato in base alle funzionalità, ai flussi
                operativi, agli utenti coinvolti e alle integrazioni necessarie.
                Non utilizziamo pacchetti standard.
              </p>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {stimaFactors.map((item, i) => (
                <Reveal key={item} delay={i * 0.04}>
                  <div className="bg-white border border-border rounded-xl p-4 text-sm text-secondary leading-relaxed flex items-start gap-2.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-shadow">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What can be included */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-[800px] mx-auto">
            <Reveal>
              <h2 className="text-[28px] md:text-[36px] font-bold tracking-[-0.02em] text-foreground">
                Cosa può essere incluso nel progetto
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-1">
              {inclusions.map((item, i) => (
                <Reveal key={item} delay={i * 0.02}>
                  <div className="flex items-center gap-3 p-3 bg-bg-alt border border-border rounded-xl text-sm text-foreground hover:bg-white transition-colors">
                    <Check size={14} className="text-accent flex-shrink-0" />
                    {item}
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-6 text-sm text-secondary leading-relaxed">
                Le attività vengono definite in base allo scope concordato. Non
                tutti gli elementi sono necessariamente inclusi in ogni
                progetto.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
