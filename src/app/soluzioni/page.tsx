"use client";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Check, FileSpreadsheet, Database, Repeat, Eye, BarChart3, Users } from "lucide-react";

const problems = [
  { icon: FileSpreadsheet, title: "Dati sparsi tra Excel, email e WhatsApp", conseq: "Le informazioni si perdono, le versioni cambiano e il team perde tempo a ricostruire cosa è successo.", solution: "Centralizziamo dati, documenti e attività in una piattaforma unica con ruoli, stati e workflow chiari." },
  { icon: Repeat, title: "Processi manuali difficili da controllare", conseq: "Non sai chi ha fatto cosa, quando e perché. Ogni verifica richiede email, chiamate e controlli incrociati.", solution: "Creiamo sistemi che tracciano attività, responsabilità e stati, rendendo ogni passaggio visibile e verificabile." },
  { icon: Database, title: "Gestionale vecchio o poco adatto", conseq: "Il software attuale è lento, rigido o non segue più i processi reali dell'azienda. Il team lo evita o lo usa male.", solution: "Progettiamo un nuovo gestionale su misura, costruito intorno ai flussi attuali e alle persone che lo useranno." },
  { icon: Eye, title: "Mancanza di dashboard e visibilità", conseq: "Decisioni prese a sensazione. Manager e responsabili non hanno KPI, stati di avanzamento o alert in tempo reale.", solution: "Realizziamo dashboard operative con indicatori chiave, stati aggiornati e notifiche automatiche." },
  { icon: BarChart3, title: "Troppe attività ripetitive", conseq: "Il team copia dati, prepara report, invia comunicazioni manuali. Ore perse ogni settimana in operazioni evitabili.", solution: "Automatizziamo ciò che è ripetitivo: notifiche, report, import/export dati, promemoria e follow-up." },
  { icon: Users, title: "Clienti o team senza un portale unico", conseq: "Clienti, fornitori o dipendenti non sanno dove trovare informazioni, documenti o stati. Chiamano, scrivono, si confondono.", solution: "Sviluppiamo portali self-service e aree riservate dove ogni utente vede solo ciò che gli serve." },
];

const softwareTypes = [
  { title: "Web app su misura", use: "Per digitalizzare processi aziendali complessi", who: "Team operativi, manager, back office", features: "Autenticazione, ruoli, dashboard, workflow, notifiche, report", example: "Gestionale per studio dentistico" },
  { title: "Dashboard operative", use: "Per avere KPI e stati sempre aggiornati", who: "Manager, responsabili, direzione", features: "Grafici, KPI, alert, drill-down, export, viste personalizzate", example: "Dashboard finanziaria in tempo reale" },
  { title: "Portali clienti", use: "Per offrire self-service a clienti e partner", who: "Clienti B2B, fornitori, collaboratori", features: "Area riservata, documenti, ticket, stati, comunicazioni", example: "Portale clienti per servizi professionali" },
  { title: "Gestionali interni", use: "Per organizzare lavoro, dati e processi", who: "Dipendenti, team operativi, amministrazione", features: "Anagrafiche, attività, documenti, scadenze, permessi", example: "Gestionale produzione industriale" },
  { title: "App mobile", use: "Per accedere ai dati anche in mobilità", who: "Tecnici, operatori sul campo, agenti", features: "Lista attività, check-in, foto, firma, sync offline", example: "App per tecnici manutentori" },
  { title: "Automazioni e integrazioni", use: "Per collegare strumenti ed eliminare lavoro manuale", who: "Qualsiasi reparto con processi ripetitivi", features: "API, webhook, sincronizzazione dati, trigger automatici", example: "Integrazione gestionale ↔ CRM" },
  { title: "CRM verticali", use: "Per gestire relazioni cliente specifiche del settore", who: "Commerciali, agenti, customer care", features: "Pipeline, follow-up, storico, documenti, reminder", example: "CRM per agenzie immobiliari" },
  { title: "Sistemi di prenotazione", use: "Per gestire appuntamenti, sale e disponibilità", who: "Reception, segreteria, clienti finali", features: "Agenda, slot, conferme, pagamenti, reminder SMS", example: "Prenotazioni per centri estetici" },
];

const sectorMatrix = [
  ["Studi dentistici","Agenda, pazienti, piani cura, preventivi"],
  ["Ristoranti","Tavoli, comande, turni, magazzino"],
  ["Hotel","Camere, ospiti, check-in, housekeeping"],
  ["Produzione","Commesse, qualità, macchine, magazzino"],
  ["Logistica","Spedizioni, tratte, tracking, autisti"],
  ["Finanza","Report, cashflow, scadenze, portafogli"],
  ["Palestre","Abbonamenti, corsi, ingressi, app mobile"],
  ["Cantieri","Avanzamento, squadre, materiali, sicurezza"],
  ["Cliniche","Agenda, referti, pazienti, sale"],
  ["Officine","Veicoli, interventi, ricambi, preventivi"],
  ["Immobiliari","Immobili, clienti, trattative, visite"],
  ["Farmacie","Scorte, ordini, scadenze, vendite"],
];

export default function SoluzioniPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-12 md:pt-[160px] md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-transparent pointer-events-none" />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }} className="max-w-[720px]">
            <h1 className="text-[38px] md:text-[52px] lg:text-[64px] leading-[1.05] font-bold tracking-[-0.02em] text-foreground">Soluzioni software per processi reali</h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-secondary max-w-[560px]">Progettiamo web app, dashboard, portali, gestionali e automazioni intorno al modo in cui la tua azienda lavora ogni giorno.</p>
            <div className="mt-6">
              <Button href="/contatti" variant="primary" className="gap-2"><Calculator size={17} /> Raccontaci il progetto</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Marquee */}
      <Marquee text="Web app su misura · Dashboard operative · Portali clienti · Gestionale interno · Automazioni · API · App mobile · Integrazioni" speed={35} className="border-y border-border/30" />

      {/* Problems */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-4">Problemi che risolviamo</h2><p className="text-base text-secondary max-w-[600px] mb-10">Situazioni reali che le aziende vivono ogni giorno e che il software giusto può eliminare.</p></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="bg-bg-alt border border-border rounded-2xl p-6 h-full hover:bg-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/8 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300"><p.icon size={20} /></div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-secondary/80 mb-3 leading-relaxed bg-red-50/30 border-l-2 border-red-200 px-3 py-1.5 rounded-r-lg">{p.conseq}</p>
                  <div className="flex items-start gap-2"><Check size={14} className="text-accent mt-0.5 flex-shrink-0" /><p className="text-xs text-foreground leading-relaxed">{p.solution}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / After */}
      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <div className="max-w-[900px] mx-auto">
            <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground text-center mb-10">Prima e dopo Flowapp</h2></Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <Reveal delay={0.1}>
                <div className="bg-white border border-border rounded-2xl p-6 md:p-8 h-full">
                  <h3 className="text-sm font-bold text-secondary/60 uppercase tracking-wider mb-4">Prima</h3>
                  <ul className="space-y-3">{["Fogli Excel separati e versioni diverse","Dati duplicati e inconsistenti","Aggiornamenti manuali ogni giorno","Nessuna visibilità su attività e scadenze","Errori frequenti nei passaggi di dati","Richieste sparse via email e WhatsApp"].map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-secondary"><span className="w-1.5 h-1.5 rounded-full bg-red-300 mt-1.5 flex-shrink-0" />{item}</li>)}</ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-white border border-accent/20 rounded-2xl p-6 md:p-8 h-full" style={{ background: "linear-gradient(135deg, #33818108, #33818102)" }}>
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">Dopo Flowapp</h3>
                  <ul className="space-y-3">{["Piattaforma unica con ruoli e accessi","Dati centralizzati e coerenti","Automazioni per attività ripetitive","Dashboard chiare con KPI e stati","Processi tracciabili e verificabili","Portale dedicato per ogni tipo di utente"].map((item, i) => <li key={i} className="flex items-start gap-2.5 text-sm text-foreground"><Check size={14} className="text-accent mt-0.5 flex-shrink-0" />{item}</li>)}</ul>
                  <div className="mt-4 text-[10px] text-accent/60">→ Impatto atteso: −60% attività manuali, +40% visibilità operativa</div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Software types */}
      <section className="py-20 md:py-28">
        <Container>
          <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-4">Tipi di software che costruiamo</h2><p className="text-base text-secondary max-w-[600px] mb-10">Ogni progetto è diverso. Ecco le tipologie più richieste, con esempi concreti.</p></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softwareTypes.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="bg-bg-alt border border-border rounded-2xl p-6 hover:bg-white hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300 group">
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">{s.title}</h3>
                  <div className="mt-3 space-y-2 text-xs">
                    <div className="flex gap-2"><span className="text-secondary/60 w-20 flex-shrink-0">A cosa serve</span><span className="text-secondary">{s.use}</span></div>
                    <div className="flex gap-2"><span className="text-secondary/60 w-20 flex-shrink-0">Per chi</span><span className="text-secondary">{s.who}</span></div>
                    <div className="flex gap-2"><span className="text-secondary/60 w-20 flex-shrink-0">Funzionalità</span><span className="text-secondary">{s.features}</span></div>
                    <div className="flex gap-2"><span className="text-secondary/60 w-20 flex-shrink-0">Esempio</span><span className="text-accent font-medium">{s.example}</span></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Marquee 2 */}
      <Marquee text="Excel sostituito · Dati centralizzati · Processi tracciabili · Meno attività manuali · Più visibilità · Portali self-service" speed={45} className="border-y border-border/30" />

      {/* Sector matrix */}
      <section className="py-20 md:py-28 bg-bg-alt border-y border-border">
        <Container>
          <Reveal><h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] text-foreground mb-4">Settori e soluzioni</h2><p className="text-base text-secondary max-w-[600px] mb-10">Abbiamo sviluppato concept per oltre 15 settori. Ogni soluzione è adattata al contesto specifico.</p></Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {sectorMatrix.map((row, i) => (
              <Reveal key={row[0]} delay={i * 0.03}>
                <div className="bg-white border border-border rounded-xl p-4 h-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow">
                  <div className="text-xs font-bold text-foreground mb-1.5">{row[0]}</div>
                  <div className="text-[10px] text-secondary leading-relaxed">{row[1]}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <Container>
          <div className="text-center max-w-[560px] mx-auto">
            <Reveal>
              <h2 className="text-[28px] md:text-[38px] leading-[1.08] font-bold tracking-[-0.02em] text-white">Hai un processo che oggi funziona male?</h2>
              <p className="mt-4 text-base leading-relaxed text-white/60 max-w-[460px] mx-auto">Descrivici strumenti, passaggi e obiettivi. Ti aiutiamo a capire che tipo di software serve, quali funzionalità includere e da dove partire.</p>
              <div className="mt-8"><Button href="/contatti" variant="secondary" className="border-white/20 text-white hover:bg-white/10 gap-2"><Calculator size={17} /> Richiedi una stima</Button></div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
