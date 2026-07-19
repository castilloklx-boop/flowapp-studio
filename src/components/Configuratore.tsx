"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check, Calculator, Send, Clock, Gauge, Euro } from "lucide-react";
import { Button } from "./Button";
import Link from "next/link";

type Step = 0 | 1 | 2 | 3 | 4 | 5;

interface Selections {
  tipo: string;
  utenti: string[];
  funzionalita: string[];
  complessita: string;
  materiali: string;
}

interface EstimateResult {
  fascia: string;
  settimane: string;
  complessita: string;
  peso: number;
}

const tipiProgetto = [
  { value: "webapp", label: "Web app (gestionale, dashboard, portale)", type: "webapp" as const },
  { value: "both", label: "Web app con app mobile", type: "both" as const },
  { value: "miglioramento", label: "Miglioramento di un software esistente", type: "miglioramento" as const },
  { value: "nonso", label: "Non lo so ancora", type: "nonso" as const },
];

const opzioniUtenti = [
  "Dipendenti",
  "Amministratori",
  "Commerciali",
  "Tecnici o operatori",
  "Clienti",
  "Fornitori",
  "Collaboratori esterni",
];

const funzionalitaConPeso: { nome: string; peso: number }[] = [
  { nome: "Accesso utenti", peso: 2 },
  { nome: "Ruoli e permessi", peso: 3 },
  { nome: "Dashboard", peso: 2 },
  { nome: "Gestione clienti", peso: 2 },
  { nome: "Gestione ordini o commesse", peso: 3 },
  { nome: "Gestione attività", peso: 2 },
  { nome: "Calendario o prenotazioni", peso: 2 },
  { nome: "Gestione documenti", peso: 1 },
  { nome: "Report", peso: 2 },
  { nome: "Notifiche", peso: 1 },
  { nome: "Pagamenti", peso: 4 },
  { nome: "Area clienti", peso: 3 },
  { nome: "API o integrazioni", peso: 4 },
  { nome: "Automazioni", peso: 3 },
  { nome: "App mobile", peso: 5 },
  { nome: "Non lo so ancora", peso: 0 },
];

const opzioniComplessita = [
  { value: "essenziale", label: "Essenziale", desc: "Pochi utenti, un flusso principale e funzionalità semplici." },
  { value: "intermedio", label: "Intermedio", desc: "Più utenti, ruoli differenti, dashboard, documenti o automazioni." },
  { value: "avanzato", label: "Avanzato", desc: "Molti flussi, integrazioni, permessi complessi, report o app mobile." },
  { value: "nonso", label: "Non lo so", desc: "Preferisco che sia Flowapp a valutare la complessità." },
];

const opzioniMateriali = [
  { value: "idea", label: "Solo un'idea" },
  { value: "funzionalita", label: "Una descrizione delle funzionalità" },
  { value: "excel", label: "File Excel o processi già definiti" },
  { value: "wireframe", label: "Wireframe o prototipo" },
  { value: "design", label: "Design già pronto" },
  { value: "esistente", label: "Software esistente da migliorare" },
];

function calcolaPunteggio(s: Selections): { peso: number; note: string[] } {
  let peso = 0;
  const note: string[] = [];

  // Tipo progetto
  if (s.tipo === "webapp") { peso += 2; note.push("Web app"); }
  else if (s.tipo === "both") { peso += 6; note.push("Web app + mobile"); }
  else if (s.tipo === "miglioramento") { peso += 1; note.push("Miglioramento software esistente"); }
  else { peso += 2; note.push("Tipologia da definire"); }

  // Utenti — più ruoli, più peso
  const numUtenti = s.utenti.length;
  peso += Math.min(numUtenti * 0.7, 3);
  if (numUtenti >= 4) note.push(`${numUtenti} tipologie di utenti`);
  else if (numUtenti > 0) note.push(`${numUtenti} tipologie utenti`);

  // Funzionalità con peso specifico
  let pesoFunz = 0;
  for (const f of s.funzionalita) {
    const match = funzionalitaConPeso.find((x) => x.nome === f);
    if (match) pesoFunz += match.peso;
  }
  peso += pesoFunz;
  const numFunz = s.funzionalita.filter((f) => f !== "Non lo so ancora").length;
  if (numFunz > 0) note.push(`${numFunz} funzionalità`);

  // Complessità indicata
  if (s.complessita === "essenziale") peso += 1;
  else if (s.complessita === "intermedio") peso += 4;
  else if (s.complessita === "avanzato") peso += 8;
  else if (s.complessita === "nonso") peso += 3;
  note.push(`Complessità: ${s.complessita === "nonso" ? "da valutare" : s.complessita}`);

  // Materiali — se ha già materiali chiari, leggera riduzione perché il lavoro di analisi è minore
  if (s.materiali === "excel" || s.materiali === "funzionalita") peso *= 0.95;
  else if (s.materiali === "wireframe" || s.materiali === "design") peso *= 0.88;
  else if (s.materiali === "esistente") peso *= 1.0;

  return { peso: Math.round(peso), note };
}

function pesoAFascia(peso: number, tipo: string): EstimateResult {
  if (tipo === "miglioramento") {
    if (peso <= 6) return { fascia: "5.000 € – 10.000 €", settimane: "2–5 settimane", complessita: "Variabile", peso };
    if (peso <= 14) return { fascia: "8.000 € – 16.000 €", settimane: "4–8 settimane", complessita: "Variabile", peso };
    return { fascia: "12.000 € – 22.000 €", settimane: "6–12 settimane", complessita: "Variabile", peso };
  }

  if (tipo === "both" || peso >= 26) {
    return { fascia: "22.000 € – 45.000 €", settimane: "10–18 settimane", complessita: "Molto avanzato", peso };
  }

  if (peso >= 19) {
    return { fascia: "18.000 € – 32.000 €", settimane: "8–14 settimane", complessita: "Avanzato", peso };
  }

  if (peso >= 12) {
    return { fascia: "12.000 € – 22.000 €", settimane: "5–9 settimane", complessita: "Avanzato", peso };
  }

  if (peso >= 7) {
    return { fascia: "7.000 € – 14.000 €", settimane: "3–6 settimane", complessita: "Intermedio", peso };
  }

  if (peso >= 4) {
    return { fascia: "5.000 € – 9.000 €", settimane: "2–4 settimane", complessita: "Essenziale", peso };
  }

  return { fascia: "4.000 € – 7.000 €", settimane: "2–3 settimane", complessita: "Essenziale", peso };
}

const inputClass =
  "w-full px-4 py-3 text-sm bg-white border border-border rounded-xl text-foreground placeholder:text-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all";

interface FormData {
  nome: string;
  email: string;
  azienda: string;
  telefono: string;
  descrizione: string;
  privacyAccepted: boolean;
}

export function Configuratore() {
  const [step, setStep] = useState<Step>(0);
  const [selections, setSelections] = useState<Selections>({
    tipo: "",
    utenti: [],
    funzionalita: [],
    complessita: "",
    materiali: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    azienda: "",
    telefono: "",
    descrizione: "",
    privacyAccepted: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const stima = useMemo(() => {
    if (step !== 5) return null;
    if (selections.tipo === "") return null;
    const { peso } = calcolaPunteggio(selections);
    return pesoAFascia(peso, selections.tipo);
  }, [step, selections]);

  const toggleArray = (arr: string[], item: string) =>
    arr.includes(item) ? arr.filter((i) => i !== item) : [...arr, item];

  const canNext = (): boolean => {
    if (step === 0) return selections.tipo !== "";
    if (step === 1) return true;
    if (step === 2) return true;
    if (step === 3) return selections.complessita !== "";
    if (step === 4) return selections.materiali !== "";
    return true;
  };

  const nextStep = () => {
    if (canNext()) {
      if (step === 4) {
        setStep(5);
      } else {
        setStep((prev) => (prev + 1) as Step);
      }
    }
  };

  const prevStep = () => {
    if (step === 5) {
      setStep(4);
    } else {
      setStep((prev) => (prev - 1) as Step);
    }
  };

  const modificaRisposte = () => {
    setStep(0);
    setShowForm(false);
  };

  const validateForm = (): boolean => {
    const e: Record<string, string> = {};
    if (!formData.nome.trim()) e.nome = "Il nome è obbligatorio";
    if (!formData.email.trim()) e.email = "L'email è obbligatoria";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      e.email = "Inserisci un'email valida";
    if (!formData.privacyAccepted) e.privacy = "Devi accettare la Privacy Policy per inviare la richiesta";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const resetAll = () => {
    setStep(0);
    setSelections({ tipo: "", utenti: [], funzionalita: [], complessita: "", materiali: "" });
    setShowForm(false);
    setSubmitted(false);
    setFormData({ nome: "", email: "", azienda: "", telefono: "", descrizione: "", privacyAccepted: false });
    setErrors({});
  };

  const stepLabels = ["Tipo", "Utenti", "Funzioni", "Complessità", "Stato"];

  return (
    <div>
      {!submitted && (
        <div className="h-1 bg-border rounded-full mb-6">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: step === 5 ? "100%" : `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          />
        </div>
      )}

      {!submitted && step !== 5 && (
        <div className="flex justify-between mb-8">
          {stepLabels.map((label, i) => (
            <button
              key={label}
              onClick={() => { if (i < step) setStep(i as Step); }}
              className="flex flex-col items-center gap-1.5 flex-1"
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${
                  i < step ? "bg-accent text-white"
                  : i === step ? "bg-foreground text-white"
                  : "bg-bg-alt text-secondary border border-border"
                }`}
              >
                {i < step ? <Check size={11} /> : i + 1}
              </div>
              <span className={`hidden sm:block text-[10px] font-medium text-center leading-tight ${
                i <= step ? "text-foreground" : "text-secondary/40"
              }`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      )}

      <div className="bg-bg-alt border border-border rounded-2xl p-6 md:p-8">
        <AnimatePresence mode="wait">
          {/* SUCCESS STATE */}
          {submitted ? (
            <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <Check size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Richiesta inviata</h3>
              <p className="mt-2 text-sm text-secondary max-w-[340px] mx-auto">
                Ti contatteremo per approfondire il progetto e confermare una stima più precisa.
              </p>
              <button onClick={resetAll} className="mt-6 text-sm font-medium text-accent hover:underline">
                Torna al configuratore
              </button>
            </motion.div>
          ) : step === 5 && stima ? (
            /* ESTIMATE RESULT */
            <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-[480px] mx-auto">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Calculator size={20} className="text-accent" />
              </div>

              <h3 className="text-xl font-bold text-foreground text-center">La tua stima</h3>

              {/* Price & Time row */}
              <div className="mt-5 flex items-stretch gap-2">
                <div className="flex-1 bg-white border border-border rounded-xl p-4 text-center">
                  <p className="text-[11px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Investimento</p>
                  <p className="text-lg font-bold text-accent leading-tight">{stima.fascia}</p>
                </div>
                <div className="flex-1 bg-white border border-border rounded-xl p-4 text-center">
                  <p className="text-[11px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Tempistiche</p>
                  <p className="text-lg font-bold text-foreground leading-tight">{stima.settimane}</p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-center gap-5 text-xs text-secondary">
                <span className="inline-flex items-center gap-1"><Gauge size={12} className="text-accent" />{stima.complessita}</span>
                <span className="inline-flex items-center gap-1"><Euro size={12} className="text-accent" />IVA esclusa</span>
              </div>

              {/* Feature badges */}
              {selections.funzionalita.filter(f => f !== "Non lo so ancora").length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-1">
                  {selections.funzionalita.filter(f => f !== "Non lo so ancora").slice(0, 6).map(f => (
                    <span key={f} className="text-[10px] px-2 py-0.5 bg-accent/6 text-accent rounded-full">{f}</span>
                  ))}
                  {selections.funzionalita.filter(f => f !== "Non lo so ancora").length > 6 && (
                    <span className="text-[10px] px-2 py-0.5 text-secondary">
                      +{selections.funzionalita.filter(f => f !== "Non lo so ancora").length - 6}
                    </span>
                  )}
                </div>
              )}

              <p className="mt-4 text-[11px] text-secondary text-center max-w-[360px] mx-auto leading-relaxed">
                La stima è indicativa. Dopo una breve call definiamo funzionalità, priorità, prezzo e tempistiche più precise.
              </p>

              {!showForm ? (
                <div className="mt-5 flex flex-col sm:flex-row gap-2.5 justify-center">
                  <Button onClick={() => setShowForm(true)} variant="primary" size="sm">
                    Richiedi una valutazione
                  </Button>
                  <button onClick={modificaRisposte} className="px-4 py-2.5 text-sm font-medium text-secondary hover:text-foreground rounded-full transition-colors">
                    Modifica le risposte
                  </button>
                </div>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-left">
                  <h4 className="text-sm font-bold text-foreground mb-4 text-center">Lascia i tuoi recapiti</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Nome e cognome *</label>
                        <input type="text" value={formData.nome} onChange={e => setFormData({...formData, nome: e.target.value})} className={inputClass} placeholder="Il tuo nome" />
                        {errors.nome && <p className="text-[11px] text-red-500 mt-1">{errors.nome}</p>}
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Email *</label>
                        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClass} placeholder="nome@azienda.it" />
                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Azienda</label>
                        <input type="text" value={formData.azienda} onChange={e => setFormData({...formData, azienda: e.target.value})} className={inputClass} placeholder="Nome azienda" />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Telefono</label>
                        <input type="tel" value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} className={inputClass} placeholder="+39 ..." />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-[0.08em] font-semibold text-secondary mb-1">Breve descrizione del progetto</label>
                      <textarea rows={3} value={formData.descrizione} onChange={e => setFormData({...formData, descrizione: e.target.value})} className={`${inputClass} resize-none`} placeholder="Descrivi in poche parole il software che ti serve..." />
                    </div>
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input type="checkbox" checked={formData.privacyAccepted} onChange={e => setFormData({...formData, privacyAccepted: e.target.checked})} className="sr-only" />
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${formData.privacyAccepted ? "bg-accent border-accent" : "border-border"}`}>
                        {formData.privacyAccepted && <Check size={10} className="text-white" />}
                      </div>
                      <span className="text-[10px] text-secondary leading-relaxed">
                        Ho letto la{" "}
                        <Link href="/privacy-policy" target="_blank" className="text-accent hover:underline">Privacy Policy</Link>
                        . *
                      </span>
                    </label>
                    {errors.privacy && <p className="text-[11px] text-red-500 mt-1">{errors.privacy}</p>}
                    <Button onClick={handleFormSubmit} variant="primary" className="w-full gap-1.5 text-sm">
                      Invia la richiesta
                      <Send size={14} />
                    </Button>
                    <p className="text-[10px] text-secondary/60 text-center leading-relaxed">
                      Useremo i dati solo per rispondere alla richiesta.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* FORM STEPS */
            <motion.div key={`step${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              {step === 0 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Cosa vuoi realizzare?</h3>
                  <p className="text-xs text-secondary mb-5">Scegli la tipologia di progetto</p>
                  <div className="space-y-2">
                    {tipiProgetto.map(t => (
                      <label key={t.value} className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${selections.tipo === t.value ? "border-accent bg-accent/6" : "border-border bg-white hover:border-secondary/30"}`}>
                        <input type="radio" name="tipo" value={t.value} checked={selections.tipo === t.value} onChange={() => setSelections({...selections, tipo: t.value})} className="sr-only" />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selections.tipo === t.value ? "border-accent" : "border-border"}`}>
                          {selections.tipo === t.value && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <span className="text-sm text-foreground">{t.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Chi utilizzerà il software?</h3>
                  <p className="text-xs text-secondary mb-5">Puoi selezionare più opzioni</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {opzioniUtenti.map(u => (
                      <label key={u} className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all text-sm ${selections.utenti.includes(u) ? "border-accent bg-accent/6 text-foreground" : "border-border bg-white text-secondary hover:border-secondary/30"}`}>
                        <input type="checkbox" checked={selections.utenti.includes(u)} onChange={() => setSelections({...selections, utenti: toggleArray(selections.utenti, u)})} className="sr-only" />
                        <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${selections.utenti.includes(u) ? "bg-accent border-accent" : "border-border"}`}>
                          {selections.utenti.includes(u) && <Check size={8} className="text-white" />}
                        </div>
                        {u}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Quali funzionalità servono?</h3>
                  <p className="text-xs text-secondary mb-5">Seleziona quelle che ti interessano</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {funzionalitaConPeso.map(f => (
                      <label key={f.nome} className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all text-sm ${selections.funzionalita.includes(f.nome) ? "border-accent bg-accent/6 text-foreground" : "border-border bg-white text-secondary hover:border-secondary/30"}`}>
                        <input type="checkbox" checked={selections.funzionalita.includes(f.nome)} onChange={() => setSelections({...selections, funzionalita: toggleArray(selections.funzionalita, f.nome)})} className="sr-only" />
                        <div className={`w-3.5 h-3.5 rounded border-2 flex items-center justify-center flex-shrink-0 ${selections.funzionalita.includes(f.nome) ? "bg-accent border-accent" : "border-border"}`}>
                          {selections.funzionalita.includes(f.nome) && <Check size={8} className="text-white" />}
                        </div>
                        {f.nome}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Quanto è complesso il progetto?</h3>
                  <p className="text-xs text-secondary mb-5">Scegli l&apos;opzione più vicina alla tua situazione</p>
                  <div className="space-y-2">
                    {opzioniComplessita.map(c => (
                      <label key={c.value} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${selections.complessita === c.value ? "border-accent bg-accent/6" : "border-border bg-white hover:border-secondary/30"}`}>
                        <input type="radio" name="complessita" value={c.value} checked={selections.complessita === c.value} onChange={() => setSelections({...selections, complessita: c.value})} className="sr-only" />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${selections.complessita === c.value ? "border-accent" : "border-border"}`}>
                          {selections.complessita === c.value && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{c.label}</p>
                          <p className="text-xs text-secondary mt-0.5">{c.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Hai già qualcosa?</h3>
                  <p className="text-xs text-secondary mb-5">Indica da dove parti</p>
                  <div className="space-y-2">
                    {opzioniMateriali.map(m => (
                      <label key={m.value} className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${selections.materiali === m.value ? "border-accent bg-accent/6" : "border-border bg-white hover:border-secondary/30"}`}>
                        <input type="radio" name="materiali" value={m.value} checked={selections.materiali === m.value} onChange={() => setSelections({...selections, materiali: m.value})} className="sr-only" />
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selections.materiali === m.value ? "border-accent" : "border-border"}`}>
                          {selections.materiali === m.value && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <span className="text-sm text-foreground">{m.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step >= 0 && step <= 4 && (
                <div className="mt-8 flex items-center justify-between">
                  {step > 0 ? (
                    <button type="button" onClick={prevStep} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-secondary hover:text-foreground transition-colors">
                      <ChevronLeft size={16} /> Indietro
                    </button>
                  ) : <div />}
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canNext()}
                    className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full transition-all ${
                      canNext() ? "bg-foreground text-white hover:bg-foreground/85 active:scale-[0.98]"
                      : "bg-border text-secondary/50 cursor-not-allowed"
                    }`}
                  >
                    {step === 4 ? "Calcola stima" : "Continua"}
                    {step === 4 ? <Calculator size={15} /> : <ChevronRight size={16} />}
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
