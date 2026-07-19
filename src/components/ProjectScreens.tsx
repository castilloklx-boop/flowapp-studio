"use client";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import React from "react";

export function ProjectScreens({ project }: { project: Project }) {
  const v = project.visual;
  const screens = getScreens(project, v);
  if (!screens.length) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {screens.map((screen, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
          {screen}
        </motion.div>
      ))}
    </div>
  );
}

function Shell({ v, title, children }: { v: any; title: string; children: React.ReactNode }) {
  return <div className="rounded-2xl overflow-hidden border h-full flex flex-col" style={{ background: v.bg, borderColor: v.border }}>
    <div className="h-8 md:h-10 flex items-center gap-2 px-3 border-b flex-shrink-0" style={{ background: v.surface, borderColor: v.border }}>
      <div className="flex gap-1.5"><span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ background: v.textSecondary + "40" }} /><span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ background: v.textSecondary + "40" }} /><span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full" style={{ background: v.textSecondary + "40" }} /></div>
      <span className="text-[10px] md:text-[11px] opacity-50 ml-1" style={{ color: v.textSecondary }}>{title}</span>
    </div>
    <div className="p-3 md:p-4 flex-1 overflow-y-auto">{children}</div>
  </div>;
}
function Pill({ color, label }: { color: string; label: string }) {
  return <span className="text-[9px] md:text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{ background: color + "18", color }}>{label}</span>;
}
function K({ v, label, val, sub, subC }: { v: any; label: string; val: string; sub?: string; subC?: string }) {
  return <div className="rounded-lg p-2 md:p-2.5" style={{ background: v.surface, border: `1px solid ${v.border}` }}><div className="text-[8px] md:text-[9px] uppercase tracking-wider" style={{ color: v.textSecondary }}>{label}</div><div className="text-sm md:text-base font-bold mt-0.5" style={{ color: v.textPrimary }}>{val}</div>{sub && <div className="text-[8px] md:text-[9px] mt-0.5" style={{ color: subC || v.textSecondary }}>{sub}</div>}</div>;
}
function T({ v, heads, rows }: { v: any; heads: string[]; rows: (string | React.ReactNode)[][] }) {
  return <div className="rounded-lg overflow-hidden border" style={{ borderColor: v.border }}><table className="w-full text-[10px] md:text-[11px]"><thead style={{ background: v.surface, color: v.textSecondary }}><tr>{heads.map(h => <th key={h} className="text-left p-2 font-medium">{h}</th>)}</tr></thead><tbody style={{ color: v.textPrimary }}>{rows.map((r, i) => <tr key={i} style={{ borderTop: `1px solid ${v.border}` }}>{r.map((d, j) => <td key={j} className="p-2">{d}</td>)}</tr>)}</tbody></table></div>;
}

/* ═══ Phone frame for mobile projects ═══ */
function PhoneFrame({ v, children }: { v: any; children: React.ReactNode }) {
  return <div className="w-[160px] md:w-[180px] rounded-[2rem] border-[3px] overflow-hidden flex flex-col mx-auto" style={{ borderColor: v.border + "80", background: v.bg }}>
    <div className="h-5 md:h-6 flex items-center justify-center border-b flex-shrink-0" style={{ borderColor: v.border }}><div className="w-10 md:w-12 h-0.5 md:h-1 rounded-full" style={{ background: v.border }} /></div>
    <div className="p-2 md:p-3 space-y-2 flex-1 overflow-y-auto" style={{ minHeight: 280 }}>{children}</div>
    <div className="h-3 md:h-4 flex items-center justify-center border-t flex-shrink-0" style={{ borderColor: v.border }}><div className="w-6 md:w-8 h-0.5 md:h-1 rounded-full" style={{ background: v.border }} /></div>
  </div>;
}
function PhoneScene({ v, title }: { v: any; title: string }) {
  return <Shell v={v} title={title}>
    <div className="flex gap-3 md:gap-4 justify-center flex-wrap items-start">
      <PhoneFrame v={v}><div className="text-[11px] md:text-[13px] font-bold" style={{ color: v.textPrimary }}>{title}</div><div className="text-[9px] md:text-[10px] mb-1" style={{ color: v.textSecondary }}>Schermata interattiva</div><div className="space-y-1.5">{Array.from({ length: 5 }, (_, i) => <div key={i} className="rounded-lg p-1.5" style={{ background: v.surface, border: `1px solid ${v.border}` }}><div className="h-1.5 rounded w-3/4 mb-1" style={{ background: v.textPrimary + "12" }} /><div className="h-1 rounded w-full" style={{ background: v.textPrimary + "08" }} /></div>)}</div></PhoneFrame>
      <PhoneFrame v={v}><div className="text-[11px] md:text-[13px] font-bold" style={{ color: v.textPrimary }}>Dettaglio</div><div className="text-[9px] md:text-[10px] mb-1" style={{ color: v.textSecondary }}>Vista dettaglio</div><div className="space-y-1.5"><div className="rounded-lg p-2" style={{ background: v.accentSecondary + "12", border: `1px solid ${v.accentSecondary}20` }}><div className="h-2 rounded w-2/3" style={{ background: v.accentSecondary + "25" }} /></div>{Array.from({ length: 4 }, (_, i) => <div key={i} className="rounded-lg p-1.5" style={{ background: v.surface, border: `1px solid ${v.border}` }}><div className="h-1 rounded w-1/2" style={{ background: v.textPrimary + "10" }} /></div>)}</div></PhoneFrame>
    </div>
  </Shell>;
}

function getScreens(p: Project, v: any): React.ReactNode[] {
  const slug = p.slug;
  const m = p.metrics;
  const w = p.whatWeBuilt;
  const t = p.technologies;

  /* ═══ ATLAS / LOGITRACK ═══ */
  if (slug === "atlas-ops-platform" || slug === "logitrack") return [
    <Shell v={v} title="Dashboard operativa"><div className="space-y-3">
      <div className="flex justify-between items-end"><div><div className="text-xs opacity-60" style={{color:v.textSecondary}}>Panoramica</div><div className="text-lg font-bold" style={{color:v.textPrimary}}>32 spedizioni attive</div></div><div className="flex gap-1.5"><Pill color={v.accentSecondary} label="24h"/><Pill color="#22C55E" label="94%"/></div></div>
      <div className="grid grid-cols-4 gap-2"><K v={v} label="In transito" val="18" sub="+3" subC="#22C55E"/><K v={v} label="Consegnate" val="11" sub="92%"/><K v={v} label="In attesa" val="3" sub="Mag. Nord"/><K v={v} label="Autisti" val="24/28" sub="85%"/></div>
      <T v={v} heads={["ID","Cliente","Destinazione","Autista","Kg","Stato","ETA"]} rows={[["SP-1042","Elettronica Ind. Srl","Milano Centro","M. Rossi","340",<Pill key="a" color="#3B82F6" label="Transito"/>,"14:30"],["SP-1043","MetalWorks SpA","Verona Est","L. Bianchi","120",<Pill key="b" color="#22C55E" label="OK"/>,"11:15"],["SP-1044","Logistica Nord","Bologna","A. Verdi","890",<Pill key="c" color="#EF4444" label="Ritardo"/>,"16:45"],["SP-1045","Tecno Supply","Torino","G. Neri","210",<Pill key="d" color="#3B82F6" label="Transito"/>,"13:00"],["SP-1048","BuildCo Mat.","Napoli","D. Ferri","1200",<Pill key="e" color="#F59E0B" label="Attesa"/>,"18:00"]]}/>
    </div></Shell>,
    <Shell v={v} title="Tracking spedizione"><div className="space-y-3">
      <div className="flex items-start gap-3"><div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{background:v.accentSecondary+"15"}}>Pacco</div><div><div className="text-sm font-bold" style={{color:v.textPrimary}}>SP-1042 — Elettronica Industriale</div><div className="text-[10px] mt-0.5" style={{color:v.textSecondary}}>Milano Centro · Via Torino 24 · 340 kg · D-8842</div></div><Pill color="#3B82F6" label="In transito"/></div>
      <div className="grid grid-cols-4 gap-2"><K v={v} label="Partenza" val="09:30" sub="Mag. Verona"/><K v={v} label="ETA" val="14:30" sub="−12 min" subC="#22C55E"/><K v={v} label="Km" val="148" sub="78%"/><K v={v} label="Autista" val="M. Rossi" sub="⭐ 4.9"/></div>
      <div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Cronologia</div><div className="ml-3 pl-3 border-l-2 space-y-0" style={{borderColor:v.border}}>{[["14:05","Ingresso Milano","Città"],["12:20","Sosta tecnica","Sosta"],["10:45","Casello Verona Est","Strada"],["09:30","Partenza magazzino","Mag"]].map((s,i)=><div key={i} className="relative pb-3 last:pb-0"><div className="absolute -left-[19px] w-3 h-3 rounded-full border-2 flex items-center justify-center text-[7px]" style={{background:v.accentSecondary,borderColor:v.accentSecondary}}></div><div className="text-[10px] opacity-50" style={{color:v.textSecondary}}>{s[0]}</div><div className="text-[11px]" style={{color:v.textPrimary}}>{s[2]} {s[1]}</div></div>)}</div></div>
    </div></Shell>,
    <Shell v={v} title="Gestione flotta"><div className="space-y-3">
      <div className="grid grid-cols-4 gap-2"><K v={v} label="In viaggio" val="18" sub="62%"/><K v={v} label="In carico" val="4"/><K v={v} label="Manutenzione" val="2"/><K v={v} label="Disponibili" val="4" sub="14%"/></div>
      <T v={v} heads={["Targa","Modello","Autista","Stato","Km","Carb."]} rows={[["FL-284","Iveco Daily","M. Rossi",<Pill key="a" color="#3B82F6" label="Viaggio"/>,"148","62%"],["FL-156","Mercedes Spr.","L. Bianchi",<Pill key="b" color="#22C55E" label="OK"/>,"95","40%"],["FL-331","Iveco Daily","A. Verdi",<Pill key="c" color="#EF4444" label="Ritardo"/>,"210","28%"],["FL-098","Fiat Ducato","G. Neri",<Pill key="d" color="#3B82F6" label="Viaggio"/>,"87","55%"]]}/>
    </div></Shell>,
    <Shell v={v} title="Report mensile"><div className="space-y-3">
      <div className="grid grid-cols-3 gap-2"><K v={v} label="Spedizioni" val="1.240" sub="+8%"/><K v={v} label="Puntualità" val="94.2%" sub="+1.2%" subC="#22C55E"/><K v={v} label="Resi" val="1.8%" sub="−0.4%" subC="#22C55E"/></div>
      <div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Performance per magazzino</div>{[["Mag. Verona","98.2%","1.240"],["Mag. Milano","96.8%","980"],["Mag. Bologna","94.5%","720"]].map((r,i)=><div key={i} className="flex items-center gap-2 mb-1"><span className="text-[10px] w-24" style={{color:v.textPrimary}}>{r[0]}</span><div className="flex-1 h-2 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:r[1],background:v.accentSecondary}}/></div><span className="text-[10px] w-12 text-right font-semibold" style={{color:v.textPrimary}}>{r[1]}</span></div>)}</div>
    </div></Shell>,
  ];

  /* ═══ NORTHLINE ═══ */
  if (slug === "northline-portal") return [
    <Shell v={v} title="Dashboard clienti"><div className="space-y-3">
      <div className="flex justify-between items-end"><div><div className="text-[10px] opacity-60" style={{color:v.textSecondary}}>Buongiorno, Acme Industriale</div><div className="text-base font-bold" style={{color:v.textPrimary}}>Progetti attivi</div></div><div className="flex gap-1.5"><Pill color={v.accentSecondary} label="4 attivi"/><Pill color="#22C55E" label="2 completati"/></div></div>
      <div className="grid grid-cols-4 gap-2"><K v={v} label="Documenti" val="127" sub="12 nuovi"/><K v={v} label="Ticket" val="3" sub="1 urgente" subC="#EF4444"/><K v={v} label="Fatture" val="€ 284K" sub="4 scad." subC="#F59E0B"/><K v={v} label="SLA" val="98.4%" sub="+1.2%" subC="#22C55E"/></div>
      {[["P-042 Ristrutturazione HQ","75%","In corso","12 giu"],["P-038 Digitalizzazione archivi","92%","Completato","05 giu"],["P-045 Audit sicurezza IT","40%","In corso","30 giu"]].map((r,i)=><div key={i} className="rounded-xl border p-3 flex items-center gap-3" style={{background:v.surface,borderColor:v.border}}><div className="flex-1"><div className="text-xs font-semibold" style={{color:v.textPrimary}}>{r[0]}</div><div className="text-[10px]" style={{color:v.textSecondary}}>Scadenza {r[3]}</div></div><div className="w-20 h-1.5 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:r[1],background:r[2]==="Completato"?"#22C55E":v.accentSecondary}}/></div><span className="text-[10px] font-bold" style={{color:v.textPrimary}}>{r[1]}</span></div>)}
    </div></Shell>,
    <Shell v={v} title="Archivio documenti"><div className="space-y-2">{[["Relazione trimestrale Q2.pdf","2.4 MB","12 giu 2026"],["Contratto servizi 2026.pdf","1.1 MB","08 giu"],["Piano esecutivo HQ.pdf","4.7 MB","01 giu"],["Report audit IT.docx","890 KB","28 mag"],["Fattura proforma Q2.pdf","340 KB","20 mag"],["Certificazione ISO.pdf","1.8 MB","15 mag"]].map((d,i)=><div key={i} className="flex items-center gap-2 p-2 rounded-lg" style={{color:v.textPrimary}}><span className="text-base">File</span><div className="flex-1"><div className="text-xs">{d[0]}</div><div className="text-[10px]" style={{color:v.textSecondary}}>{d[1]} · {d[2]}</div></div></div>)}</div></Shell>,
    <Shell v={v} title="Dettaglio progetto"><div className="space-y-3">
      <div className="flex items-center gap-2"><Pill color={v.accentSecondary} label="In corso"/><Pill color="#EF4444" label="Priorità alta"/></div>
      <div className="text-sm font-bold" style={{color:v.textPrimary}}>Fase 3/4 — Ristrutturazione piano terra</div>
      <div className="grid grid-cols-4 gap-2"><K v={v} label="Budget" val="€ 340K" sub="78%"/><K v={v} label="Avanz." val="75%" sub="−3%"/><K v={v} label="Documenti" val="34"/><K v={v} label="Next call" val="15 giu"/></div>
      <div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Timeline</div><div className="ml-3 pl-3 border-l-2 space-y-0" style={{borderColor:v.border}}>{[["05 giu","Approvazione variante",true],["28 mag","Impianti elettrici",true],["15 mag","Inizio lavori",true],["02 mag","Sopralluogo",true]].map((s,i)=><div key={i} className="relative pb-3 last:pb-0"><div className="absolute -left-[19px] w-3 h-3 rounded-full flex items-center justify-center text-[7px]" style={{background:v.accentSecondary,border:`2px solid ${v.accentSecondary}`}}></div><div className="text-[10px] opacity-50" style={{color:v.textSecondary}}>{s[0]}</div><div className="text-[11px]" style={{color:v.textPrimary}}>{s[1]}</div></div>)}</div></div>
    </div></Shell>,
    <Shell v={v} title="Ticket aperti"><div className="space-y-3"><T v={v} heads={["Ticket","Oggetto","Priorità","Stato","Data"]} rows={[["T-142","Richiesta documentazione","Alta",<Pill key="a" color="#F59E0B" label="In attesa"/>,"10 giu"],["T-138","Modifica contrattuale","Media",<Pill key="b" color="#3B82F6" label="In corso"/>,"08 giu"],["T-145","Accesso portale","Bassa",<Pill key="c" color="#22C55E" label="Risolto"/>,"05 giu"]]}/></div></Shell>,
  ];

  /* ═══ FIELDER + FITMANAGER (mobile) ═══ */
  if (slug === "fielder-mobile") return [
    <Shell v={v} title="App mobile — Lista interventi"><div className="flex gap-3 md:gap-4 justify-center flex-wrap items-start">
      <PhoneFrame v={v}><div className="text-[11px] md:text-[13px] font-bold" style={{color:v.textPrimary}}>Oggi · Milano nord</div><div className="text-[9px] mb-2" style={{color:v.textSecondary}}>4 interventi</div>{[["Manut. HVAC","Via Roma 12","09:00-10:30","IN CORSO"],["Rip. caldaia","C.so Italia 45","11:00-12:30","IN CORSO"],["Verifica imp.","P.za Duomo 3","14:00-15:00","DA FARE"]].map((j,i)=><div key={i} className="p-2 rounded-lg mb-1.5" style={{background:v.surface,border:`1px solid ${v.border}`}}><div className="text-[10px] font-semibold" style={{color:v.textPrimary}}>{j[0]}</div><div className="text-[8px] mt-0.5" style={{color:v.textSecondary}}>Via {j[1]} · Orario {j[2]}</div></div>)}<div className="flex items-center gap-1 text-[8px] justify-center py-1" style={{color:v.accentSecondary}}>Sync Dati salvati · sync auto</div></PhoneFrame>
    </div></Shell>,
    <Shell v={v} title="Checklist intervento"><div className="flex gap-3 md:gap-4 justify-center flex-wrap items-start">
      <PhoneFrame v={v}><div className="text-[11px] font-bold" style={{color:v.textPrimary}}>INT-2841</div><div className="text-[9px] mb-2" style={{color:v.textSecondary}}>Checklist</div><div className="space-y-1">{[["Verifica pressione","OK","#22C55E"],["Pulizia filtri","OK","#22C55E"],["Controllo termostato","OK","#22C55E"],["Test accensione","IN CORSO","#3B82F6"],["Compila rapporto","Da comp.",v.textSecondary],["Firma cliente","Da firm.",v.textSecondary]].map((c,i)=><div key={i} className="flex items-center gap-2 text-[10px]" style={{color:c[1]==="OK"?"#22C55E":v.textSecondary}}><div className="w-3 h-3 rounded border flex items-center justify-center text-[7px]" style={{borderColor:c[1]==="OK"?"#22C55E":v.border}}>{c[1]==="OK"?"":""}</div>{c[0]}</div>)}</div><div className="w-full py-1.5 rounded-full text-center text-[10px] font-semibold mt-2" style={{background:v.accentSecondary,color:v.bg}}>Completa</div></PhoneFrame>
    </div></Shell>,
    <Shell v={v} title="Firma digitale"><div className="flex gap-3 justify-center flex-wrap items-start">
      <PhoneFrame v={v}><div className="text-[11px] font-bold" style={{color:v.textPrimary}}>Firma cliente</div><div className="text-[9px] mb-2" style={{color:v.textSecondary}}>INT-2841</div><div className="rounded-lg border-2 border-dashed flex items-center justify-center" style={{height:100,borderColor:v.border}}><span className="text-[20px] opacity-20" style={{color:v.textSecondary,fontFamily:"cursive"}}>Mario Bianchi</span></div><div className="w-full py-1.5 rounded-full text-center text-[9px] mt-2" style={{border:`1px solid ${v.border}`,color:v.textSecondary}}>Annulla</div><div className="w-full py-1.5 rounded-full text-center text-[9px] font-semibold mt-1" style={{background:v.accentSecondary,color:v.bg}}>Conferma firma</div></PhoneFrame>
    </div></Shell>,
    <Shell v={v} title="Dashboard coordinatori"><div className="space-y-3"><div className="grid grid-cols-4 gap-2"><K v={v} label="Tecnici" val="18/22" sub="82%"/><K v={v} label="Interventi" val="47" sub="38 ok"/><K v={v} label="Ritardi" val="3" subC="#EF4444"/><K v={v} label="Tempo" val="52 min" sub="−8%"/></div><T v={v} heads={["Tecnico","Intervento","Stato","Inizio"]} rows={[["M. Rossi ⭐4.9","Manut. HVAC",<Pill key="a" color="#3B82F6" label="In corso"/>,"09:00"],["L. Bianchi ⭐4.7","Rip. caldaia",<Pill key="b" color="#F59E0B" label="Viaggio"/>,"11:00"],["A. Verdi ⭐4.5","Verifica imp.",<Pill key="c" color="#F59E0B" label="Attesa"/>,"14:00"],["G. Neri ⭐4.8","Sost. filtro",<Pill key="d" color="#22C55E" label="OK"/>,"08:30"]]}/></div></Shell>,
  ];

  if (slug === "fitmanager") return [
    <Shell v={v} title="App mobile"><div className="flex gap-3 md:gap-4 justify-center flex-wrap items-start">
      <PhoneFrame v={v}><div className="text-[11px] font-bold" style={{color:v.textPrimary}}>Corsi oggi</div><div className="text-[9px] mb-2" style={{color:v.textSecondary}}>4 corsi programmati</div>{[["HIIT Avanzato","09:00","18/20",v.accentSecondary],["Yoga Flow","11:00","15/15","#EF4444"],["Spinning","14:00","12/25",v.accentSecondary]].map((c,i)=><div key={i} className="p-2 rounded-lg mb-1.5" style={{background:v.surface,border:`1px solid ${v.border}`}}><div className="text-[10px] font-semibold" style={{color:v.textPrimary}}>{c[0]}</div><div className="text-[8px] flex justify-between mt-0.5"><span style={{color:v.textSecondary}}>{c[1]}</span><span style={{color:c[3]}}>{c[2]}</span></div></div>)}</PhoneFrame>
      <PhoneFrame v={v}><div className="text-[11px] font-bold" style={{color:v.textPrimary}}>Scheda MR</div><div className="text-[9px] mb-2" style={{color:v.textSecondary}}>Push Day</div>{[["Panca piana","4×10 · 80kg","OK"],["Squat","3×8 · 100kg","OK"],["Rematore","3×12 · 60kg","IN CORSO"],["Curl","3×10 · 30kg","DA FARE"]].map((e,i)=><div key={i} className="p-2 rounded-lg mb-1.5" style={{background:v.surface,border:`1px solid ${v.border}`}}><div className="text-[10px] font-semibold" style={{color:v.textPrimary}}>{e[0]}</div><div className="text-[8px] flex justify-between mt-0.5"><span style={{color:v.textSecondary}}>{e[1]}</span><span style={{color:e[2]==="OK"?"#22C55E":v.textSecondary}}>{e[2]}</span></div></div>)}</PhoneFrame>
    </div></Shell>,
    <Shell v={v} title="Dashboard amministrativa"><div className="space-y-3"><div className="grid grid-cols-4 gap-2"><K v={v} label="Abbonati" val="842" sub="+12%"/><K v={v} label="Ingressi" val="142" sub="Oggi"/><K v={v} label="Corsi" val="4/4" sub="100%"/><K v={v} label="Scadenze" val="18" sub="7gg" subC="#F59E0B"/></div><T v={v} heads={["Corso","Orario","Trainer","Posti","Iscritti"]} rows={[["HIIT","09:00","M. Conti","20","18"],["Yoga","11:00","S. Verdi","15","15"],["Spin","14:00","L. Neri","25","12"],["Funct.","18:30","M. Conti","20","20"]]}/></div></Shell>,
    <Shell v={v} title="Abbonamenti"><div className="space-y-3"><T v={v} heads={["Cliente","Piano","Scadenza","Stato"]} rows={[["A. Ferrari","Premium Annuale","15/09/26",<Pill key="a" color="#22C55E" label="Attivo"/>],["B. Esposito","Mensile Base","01/07/26",<Pill key="b" color="#F59E0B" label="Scadenza"/>],["C. Romano","Premium","22/12/26",<Pill key="c" color="#22C55E" label="Attivo"/>],["D. Colombo","Trimestrale","10/08/26",<Pill key="d" color="#22C55E" label="Attivo"/>]]}/><div className="text-[10px]" style={{color:v.textSecondary}}>Euro Mensile: € 42.800 · Rinnovo Rinnovo auto: 68%</div></div></Shell>,
    <Shell v={v} title="Check-in"><div className="flex gap-3 justify-center flex-wrap items-start">
      <PhoneFrame v={v}><div className="text-[11px] font-bold" style={{color:v.textPrimary}}>Check-in</div><div className="text-[9px] mb-2" style={{color:v.textSecondary}}>Scansiona QR</div><div className="rounded-lg border-2 flex items-center justify-center" style={{height:100,borderColor:v.border}}><div className="text-center" style={{color:v.textSecondary}}><div className="text-lg">QR</div><div className="text-[9px] mt-1">QR Code</div></div></div><div className="text-center text-[8px] mt-1" style={{color:v.accentSecondary}}> Check-in 142 oggi</div></PhoneFrame>
    </div></Shell>,
  ];

  /* ═══ LEDGERVIEW / FINANCEVIEW ═══ */
  if (slug === "ledgerview-dashboard" || slug === "financeview") return [
    <Shell v={v} title="Dashboard"><div className="space-y-3">
      <div className="grid grid-cols-4 gap-2"><K v={v} label="Cash Flow" val="€ 842K" sub="+12.4%" subC="#22C55E"/><K v={v} label="Crediti" val="€ 1.24M" sub="−8.2%" subC="#EF4444"/><K v={v} label="Debiti" val="€ 612K" sub="+3.1%"/><K v={v} label="Margine" val="24.8%" sub="+1.4pp" subC="#22C55E"/></div>
      <div className="grid grid-cols-2 gap-3"><div className="rounded-xl p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Entrate/Uscite</div><div className="flex items-end gap-1 h-20">{[65,78,58,88,92,98].map((h,i)=><div key={i} className="flex-1 rounded-t-sm" style={{height:`${h}%`,background:v.accentSecondary}}/>)}</div><div className="flex justify-between mt-1 text-[8px]" style={{color:v.textSecondary}}><span>Gen</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mag</span><span>Giu</span></div></div><div className="rounded-xl p-3 border space-y-2" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium" style={{color:v.textSecondary}}>Top clienti</div>{[["Industrie Meccaniche","€ 842K"],["TecnoSupply Srl","€ 621K"],["Logistica Nord","€ 487K"],["MetalWorks SpA","€ 365K"]].map((c,i)=><div key={i} className="flex justify-between text-[10px]"><span style={{color:v.textPrimary}}>{c[0]}</span><span className="font-semibold" style={{color:v.textPrimary}}>{c[1]}</span></div>)}</div></div>
    </div></Shell>,
    <Shell v={v} title="Fatture"><div className="space-y-3">
      <div className="flex gap-1.5 flex-wrap"><Pill color={v.accentSecondary} label="Tutte (847)"/><Pill color="#22C55E" label="Pagate"/><Pill color="#F59E0B" label="In scadenza"/><Pill color="#EF4444" label="Scadute"/></div>
      <T v={v} heads={["Nr.","Cliente","Importo","Scadenza","Stato"]} rows={[["F-1310","MetalWorks","€ 67.900","05 lug",<Pill key="a" color="#F59E0B" label="In scad."/>],["F-1302","Logistica N.","€ 31.600","28 giu",<Pill key="b" color="#F59E0B" label="In scad."/>],["F-1291","TecnoSupply","€ 12.850","22 giu",<Pill key="c" color="#EF4444" label="Scaduta"/>],["F-1284","Industrie M.","€ 48.200","15 giu",<Pill key="d" color="#EF4444" label="Scaduta"/>],["F-1276","FoodEx","€ 22.400","08 giu",<Pill key="e" color="#22C55E" label="Pagata"/>]]}/>
    </div></Shell>,
    <Shell v={v} title="Report mensile"><div className="space-y-3">
      <div className="flex justify-between"><div className="text-sm font-bold" style={{color:v.textPrimary}}>Giugno 2026</div><Pill color="#22C55E" label="+12.4% vs Maggio"/></div>
      <div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Confronto mensile</div>{[["Ricavi","€ 842K","€ 748K","+12.4%","#22C55E"],["Costi","€ 612K","€ 594K","+3.1%","#F59E0B"],["Margine","24.8%","22.5%","+2.3pp","#22C55E"]].map((r,i)=><div key={i} className="flex items-center gap-2 mb-1.5"><span className="text-[10px] w-14" style={{color:v.textSecondary}}>{r[0]}</span><span className="text-[10px] w-16 text-right font-semibold" style={{color:v.textPrimary}}>{r[1]}</span><span className="text-[9px] w-12 text-right" style={{color:v.textSecondary}}>{r[2]}</span><span className="text-[9px] text-right font-medium" style={{color:r[4]}}>{r[3]}</span></div>)}</div>
    </div></Shell>,
    <Shell v={v} title="Cash flow"><div className="space-y-3"><div className="grid grid-cols-3 gap-2"><K v={v} label="Saldo iniziale" val="€ 1.42M"/><K v={v} label="Entrate" val="€ 842K" subC="#22C55E"/><K v={v} label="Uscite" val="€ 612K" subC="#EF4444"/></div><div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Previsione 3 mesi</div>{[["Luglio","€ 890K","#22C55E"],["Agosto","€ 780K",v.accentSecondary],["Settembre","€ 920K","#22C55E"]].map((r,i)=><div key={i} className="flex items-center gap-2 mb-1"><span className="text-[10px] w-16" style={{color:v.textPrimary}}>{r[0]}</span><div className="flex-1 h-2 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:"85%",background:r[2]}}/></div><span className="text-[10px] font-semibold" style={{color:v.textPrimary}}>{r[1]}</span></div>)}</div></div></Shell>,
  ];

  /* ═══ DENTALFLOW ═══ */
  if (slug === "dentalflow") return [
    <Shell v={v} title="Agenda appuntamenti"><div className="space-y-3">
      <div className="flex justify-between items-center"><div className="text-lg font-bold" style={{color:v.textPrimary}}>8 appuntamenti</div><div className="flex gap-1"><Pill color={v.accentSecondary} label="3 poltrone"/><Pill color="#EF4444" label="1 urgente"/></div></div>
      <T v={v} heads={["Ora","Paziente","Trattamento","Poltrona","Stato","Note"]} rows={[["09:00","M. Rossi","Igiene dentale","P1",<Pill key="a" color="#22C55E" label=""/>,"Richiamo 6m"],["10:00","L. Bianchi","Controllo","P2",<Pill key="b" color="#3B82F6" label="Corso"/>,"RX panoramica"],["11:30","A. Verdi","Otturazione","P1",<Pill key="c" color="#F59E0B" label="Attesa"/>,"Anestesia"],["14:00","S. Neri","Prima visita","P3",<Pill key="d" color={v.accentSecondary} label="Conf."/>,"Nuovo paz."],["15:30","G. Galli","Devitalizzazione","P2",<Pill key="e" color={v.accentSecondary} label="Conf."/>,"2ª/3 seduta"]]}/>
    </div></Shell>,
    <Shell v={v} title="Scheda paziente"><div className="space-y-3">
      <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{background:v.accentSecondary+"15",color:v.accentSecondary}}>MR</div><div><div className="text-sm font-bold" style={{color:v.textPrimary}}>M. Rossi</div><div className="text-[10px]" style={{color:v.textSecondary}}>Paziente dal 2021 · Ultima: 10/05/2026</div></div><Pill color={v.accentSecondary} label="Richiamo 6 mesi"/></div>
      <div className="grid grid-cols-4 gap-2"><K v={v} label="Piano cure" val="Fase 2/3" sub="Attivo"/><K v={v} label="Preventivo" val="€ 1.200" sub="Approvato"/><K v={v} label="App. passati" val="7"/><K v={v} label="Next recall" val="10/12/26"/></div>
      <div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Piano di cura</div><div className="space-y-2"><div className="flex items-center gap-2 text-[11px]" style={{color:v.textPrimary}}><span style={{color:"#22C55E"}}>OK</span>Fase 1 — Igiene + RX</div><div className="flex items-center gap-2 text-[11px]" style={{color:v.textPrimary}}><span style={{color:"#3B82F6"}}>IN CORSO</span>Fase 2 — Otturazione molare</div><div className="flex items-center gap-2 text-[11px]" style={{color:v.textPrimary}}><span style={{color:v.accentSecondary}}>DA FARE</span>Fase 3 — Controllo finale</div></div></div>
    </div></Shell>,
    <Shell v={v} title="Preventivo"><div className="space-y-3">
      <div className="flex justify-between"><div><div className="text-sm font-bold" style={{color:v.textPrimary}}>Preventivo #284</div><div className="text-[10px]" style={{color:v.textSecondary}}>M. Rossi · 10/05/2026</div></div><Pill color={v.accentSecondary} label="Approvato"/></div>
      <T v={v} heads={["Voce","Importo"]} rows={[["Igiene dentale","€ 80"],["RX panoramica","€ 60"],["Otturazione molare","€ 250"],["Anestesia","€ 40"],["Controllo finale","€ 60"]]}/>
      <div className="flex justify-between font-bold text-sm" style={{color:v.textPrimary}}><span>Totale</span><span style={{color:v.accentSecondary}}>€ 490</span></div>
      <div className="text-[10px] px-3 py-2 rounded-lg flex items-center gap-2" style={{background:v.accentSecondary+"10",color:v.accentSecondary}}> Approvato 12/05/2026 · Valido 30 giorni</div>
    </div></Shell>,
    <Shell v={v} title="Recall e promemoria"><div className="space-y-3"><div className="grid grid-cols-3 gap-2"><K v={v} label="Da contattare" val="12" sub="Questa sett."/><K v={v} label="Confermati" val="8"/><K v={v} label="Non risponde" val="2" subC="#EF4444"/></div><T v={v} heads={["Paziente","Recall","Stato","Azione"]} rows={[["P. Conti","08/07",<Pill key="a" color="#F59E0B" label="Contattare"/>,"SMS"],["F. Mazzi","15/07",<Pill key="b" color="#22C55E" label="OK"/>,"Promemoria"],["D. Ferri","22/07",<Pill key="c" color="#F59E0B" label="Attesa"/>,"Richiama"],["R. Neri","01/08",<Pill key="d" color="#EF4444" label="No risp."/>,"Secondo invio"]]}/></div></Shell>,
  ];

  /* ═══ TABLEOPS ═══ */
  if (slug === "tableops") return [
    <Shell v={v} title="Sala ristorante"><div className="space-y-3"><div className="flex justify-between items-center"><div className="text-lg font-bold" style={{color:v.textPrimary}}>14 prenotazioni</div><div className="flex gap-1"><Pill color="#22C55E" label="3 camerieri"/><Pill color="#3B82F6" label="Cucina attiva"/></div></div><div className="grid grid-cols-5 gap-1.5">{[["T1","2","Rossi","OCCUP"],["T2","4","Bianchi","IN CORSO"],["T3","2","Verdi","OCCUP"],["T4","6","Neri","IN CORSO"],["T5","3","Galli","OCCUP"],["T6","2","Rossi","OCCUP"],["T7","4","Mazzi","IN CORSO"],["T8","2","Ferri","OCCUP"],["T9","6","Conti","IN CORSO"],["T10","3","Espo.","OCCUP"]].map((t,i)=><div key={i} className="rounded-lg p-1.5 text-center" style={{background:t[3]==="IN CORSO"?v.accentSecondary+"12":v.textPrimary+"04",border:`1px solid ${t[3]==="IN CORSO"?v.accentSecondary+"15":"transparent"}`}}><div className="text-[11px] font-bold" style={{color:v.textPrimary}}>{t[0]}</div><div className="text-[9px]" style={{color:v.textSecondary}}>{t[1]} pax</div><div className="text-[8px] mt-0.5" style={{color:v.textSecondary}}>{t[2]}</div></div>)}</div></div></Shell>,
    <Shell v={v} title="Comande cucina"><div className="space-y-3">
      <div className="flex gap-2 flex-wrap">{["Tutte","In corso","Pronto","Servito"].map((t,i)=><span key={t} className="text-[10px] px-3 py-1 rounded-full" style={{background:i===0?v.accentSecondary+"15":"transparent",color:i===0?v.accentSecondary:v.textSecondary}}>{t}</span>)}</div>
      <T v={v} heads={["#","Tavolo","Piatto","Q.tà","Stato","Ora"]} rows={[["C-12","T4","Risotto ai funghi","2",<Pill key="a" color="#3B82F6" label="Corso"/>,"19:35"],["C-13","T4","Tagliata di manzo","3",<Pill key="b" color="#F59E0B" label="Attesa"/>,"19:35"],["C-08","T1","Insalata di mare","2",<Pill key="c" color="#22C55E" label="Servito"/>,"19:15"],["C-15","T7","Carbonara","2",<Pill key="d" color="#3B82F6" label="Corso"/>,"20:35"],["C-18","T9","Grigliata mista","4",<Pill key="e" color="#F59E0B" label="Attesa"/>,"21:10"]]}/>
    </div></Shell>,
    <Shell v={v} title="Magazzino"><div className="space-y-3"><div className="grid grid-cols-3 gap-2"><K v={v} label="Ingredienti" val="342"/><K v={v} label="In esaurimento" val="2" subC="#EF4444"/><K v={v} label="Ordini aperti" val="3"/></div><T v={v} heads={["Ingrediente","Q.tà","Soglia","Alert"]} rows={[["Farina 00","24 kg","20 kg","OK"],["Pomodoro pelato","8 kg","10 kg",<Pill key="a" color="#EF4444" label="⚠️"/>],["Olio EVO","12 L","5 L","OK"],["Parmigiano","3 kg","4 kg",<Pill key="b" color="#EF4444" label="⚠️"/>],["Uova","60 pz","40 pz","OK"]]}/></div></Shell>,
    <Shell v={v} title="Report vendite"><div className="space-y-3"><div className="grid grid-cols-4 gap-2"><K v={v} label="Coperti" val="78" sub="vs 72 ieri"/><K v={v} label="Incasso" val="€ 4.820" sub="+12%"/><K v={v} label="Medio" val="€ 61,80"/><K v={v} label="Food cost" val="28.4%" sub="−1.2%" subC="#22C55E"/></div><T v={v} heads={["Categoria","Venduti","Incasso","Margine"]} rows={[["Primi","28","€ 980","72%"],["Secondi","22","€ 1.540","68%"],["Pizze","18","€ 630","82%"]]}/></div></Shell>,
  ];

  /* ═══ HOTELDESK ═══ */
  if (slug === "hoteldesk") return [
    <Shell v={v} title="Reception"><div className="space-y-3">
      <div className="grid grid-cols-3 gap-2 text-center">{[["Occupate","48","#22C55E"],["Libere","8",v.accentSecondary],["Pulizie","4","#F59E0B"]].map(x=><div key={x[0]} className="rounded-lg p-3" style={{background:x[2]+"10"}}><div className="text-2xl font-bold" style={{color:x[2]}}>{x[1]}</div><div className="text-[10px] mt-1" style={{color:v.textSecondary}}>{x[0]}</div></div>)}</div>
      <T v={v} heads={["Camera","Ospite","Check-in","Check-out","Stato","Note"]} rows={[["301","M. Bianchi","14 giu","16 giu",<Pill key="a" color="#3B82F6" label="Check-in"/>,"Cuscino extra"],["205","L. Verdi","12 giu","15 giu",<Pill key="b" color="#22C55E" label="Soggiorno"/>,"—"],["412","P. Neri","10 giu","14 giu",<Pill key="c" color="#EF4444" label="Check-out"/>,"Late 13h"],["108","A. Conti","14 giu","18 giu",<Pill key="d" color="#3B82F6" label="Check-in"/>,"Culla"]]}/>
    </div></Shell>,
    <Shell v={v} title="Housekeeping"><div className="space-y-3"><div className="grid grid-cols-3 gap-2"><K v={v} label="Da pulire" val="4"/><K v={v} label="In pulizia" val="2"/><K v={v} label="Pronte" val="54" subC="#22C55E"/></div><T v={v} heads={["Piano","Camere","Personale","Stato"]} rows={[["1°","6/8","A. Bianchi","OK"],["2°","8/8","M. Neri","OK"],["3°","3/6","L. Verdi","In corso"],["4°","1/4","G. Rossi","In corso"]]}/></div></Shell>,
    <Shell v={v} title="Richieste ospiti"><div className="space-y-3"><T v={v} heads={["Camera","Richiesta","Orario","Stato"]} rows={[["205","Cuscino extra","10:15",<Pill key="a" color="#22C55E" label="Fatto"/>],["301","Servizio in camera","12:30",<Pill key="b" color="#3B82F6" label="Corso"/>],["108","Culla","11:00",<Pill key="c" color="#22C55E" label="Fatto"/>],["412","Late checkout","08:00",<Pill key="d" color="#22C55E" label="OK"/>]]}/></div></Shell>,
    <Shell v={v} title="Occupazione"><div className="space-y-3"><div className="grid grid-cols-4 gap-2"><K v={v} label="Oggi" val="85%"/><K v={v} label="Settimana" val="78%" sub="+5%"/><K v={v} label="Mese" val="72%"/><K v={v} label="RevPAR" val="€ 142" sub="+8%"/></div><div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-2" style={{color:v.textSecondary}}>Previsione 7 giorni</div>{[["Lun","82%",60],["Mar","88%",65],["Mer","92%",68],["Gio","85%",62],["Ven","78%",55],["Sab","95%",72],["Dom","90%",66]].map((r,i)=><div key={i} className="flex items-center gap-2 mb-1"><span className="text-[10px] w-8" style={{color:v.textPrimary}}>{r[0]}</span><div className="flex-1 h-1.5 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:r[1],background:v.accentSecondary}}/></div></div>)}</div></div></Shell>,
  ];

  /* ═══ ALL OTHER PROJECTS (4 rich screens each) ═══ */
  return [
    <Shell v={v} title={`${p.title} — Dashboard`}><div className="space-y-3">
      <div className="flex justify-between items-end"><div><div className="text-xs opacity-60" style={{color:v.textSecondary}}>{p.industry}</div><div className="text-lg font-bold" style={{color:v.textPrimary}}>{p.title}</div></div><div className="flex gap-1.5"><Pill color={v.accentSecondary} label={p.category}/><Pill color="#22C55E" label="Attivo"/></div></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">{m.slice(0,4).map((mk,i)=><K key={i} v={v} label={mk.label} val={mk.value}/>)}</div>
      <T v={v} heads={["Modulo","Stato","Priorità"]} rows={w.slice(0,5).map((item,i)=><>{item}</>).map((item,i): any=>[w[i],<Pill key="a" color={i<w.length*0.6?"#22C55E":i<w.length*0.8?"#3B82F6":"#F59E0B"} label={i<w.length*0.6?"Completato":i<w.length*0.8?"In corso":"Pianificato"}/>,<Pill key="b" color={i<2?"#EF4444":"#F59E0B"} label={i<2?"Alta":"Media"}/>])}/>
    </div></Shell>,
    <Shell v={v} title={`${p.title} — Dettaglio`}><div className="space-y-3">
      <p className="text-xs leading-relaxed" style={{color:v.textPrimary}}>{p.solution.slice(0,220)}{p.solution.length>220?"...":""}</p>
      <div className="flex flex-wrap gap-1.5">{t.map(tech=><span key={tech} className="text-[10px] px-2 py-1 rounded-full" style={{background:v.accentSecondary+"10",color:v.accentSecondary}}>{tech}</span>)}</div>
      <div className="grid grid-cols-3 gap-2">{m.slice(0,3).map((mk,i)=><K key={i} v={v} label={mk.label} val={mk.value}/>)}</div>
    </div></Shell>,
    <Shell v={v} title={`${p.title} — Flusso operativo`}><div className="space-y-3">
      <div className="grid grid-cols-4 gap-2 text-center">{["Raccolta dati","Elaborazione","Validazione","Output"].map((step,i)=><div key={step} className="rounded-lg p-2" style={{background:i<=1?v.accentSecondary+"10":v.textPrimary+"04",border:`1px solid ${i<=1?v.accentSecondary+"20":v.textPrimary+"06"}`}}><div className="w-8 h-8 rounded-full mx-auto flex items-center justify-center font-bold text-sm" style={{color:i<=1?v.accentSecondary:v.textSecondary}}>{i+1}</div><div className="text-[10px] font-semibold mt-1" style={{color:v.textPrimary}}>{step}</div></div>)}</div>
      <div className="rounded-lg p-3 border" style={{background:v.surface,borderColor:v.border}}><div className="text-[10px] font-medium mb-1" style={{color:v.textSecondary}}>Descrizione processo</div><p className="text-[11px]" style={{color:v.textPrimary}}>{p.solution.slice(0,180)}{p.solution.length>180?"...":""}</p></div>
    </div></Shell>,
    <Shell v={v} title={`${p.title} — Risultati attesi`}><div className="space-y-3">
      {m.map((mk,i)=><div key={i} className="flex items-center gap-3 p-2 rounded-lg" style={{background:v.surface,border:`1px solid ${v.border}`}}><div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:v.accentSecondary+"12"}}><span className="text-base font-bold" style={{color:v.accentSecondary}}>{mk.value}</span></div><div><div className="text-xs font-semibold" style={{color:v.textPrimary}}>{mk.label}</div><div className="text-[9px]" style={{color:v.textSecondary}}>Impatto atteso dopo il rilascio</div></div></div>)}
    </div></Shell>,
  ];
}
