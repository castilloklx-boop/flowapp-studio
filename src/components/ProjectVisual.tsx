"use client";

import type { Project } from "@/data/projects";

type Variant = "card" | "hero";

export function ProjectVisual({ project, variant }: { project: Project; variant: Variant }) {
  const v = project.visual;
  const card = variant === "card";
  const cls = card ? "w-full h-full" : "w-full";
  return <div className={cls}>{renderBySlug(project.slug, v, card, project)}</div>;
}

/* ═══ Shell ═══ */
function Shell({ v, title, card, sidebar, topTabs, children }: { v: any; title: string; card: boolean; sidebar?: React.ReactNode; topTabs?: React.ReactNode; children: React.ReactNode }) {
  const h = card ? "h-5" : "h-8 md:h-10";
  const ph = card ? "p-1" : "p-2 md:p-4";
  return <div className={`rounded-2xl flex flex-col h-full overflow-hidden border`} style={{ background: v.bg, borderColor: v.border }}>
    <div className={`${h} flex items-center gap-2 px-2 md:px-3 border-b flex-shrink-0`} style={{ background: v.surface, borderColor: v.border }}>
      <div className="flex gap-1 md:gap-1.5"><span className={`${card?"w-1.5 h-1.5":"w-2 h-2 md:w-2.5 md:h-2.5"} rounded-full`} style={{ background: v.textSecondary + "40" }} /><span className={`${card?"w-1.5 h-1.5":"w-2 h-2 md:w-2.5 md:h-2.5"} rounded-full`} style={{ background: v.textSecondary + "40" }} /><span className={`${card?"w-1.5 h-1.5":"w-2 h-2 md:w-2.5 md:h-2.5"} rounded-full`} style={{ background: v.textSecondary + "40" }} /></div>
      <span className={`${card?"text-[7px]":"text-[9px] md:text-[10px]"} opacity-50 truncate`} style={{ color: v.textSecondary }}>{title}</span>
    </div>
    {topTabs && <div className={`${card?"px-1.5 py-1":"px-3 py-2"} border-b flex-shrink-0 flex gap-1.5 md:gap-2 overflow-x-auto`} style={{ borderColor: v.border }}>{topTabs}</div>}
    <div className="flex flex-1 min-h-0">
      {sidebar && <div className={`${card?"w-[38px]":"w-[44px] md:w-[130px]"} flex-shrink-0 border-r overflow-y-auto`} style={{ background: v.surface, borderColor: v.border }}>{sidebar}</div>}
      <div className={`flex-1 min-w-0 overflow-y-auto ${ph}`}>{children}</div>
    </div>
  </div>;
}

function Side({ v, card, items }: { v: any; card: boolean; items: { label: string; active?: boolean }[] }) {
  return <div className={`${card?"py-1":"py-2 md:py-3"} space-y-0.5 px-1 md:px-2`}>
    {items.map((item, i) => (
      <div key={i} className={`flex items-center gap-1.5 md:gap-2 ${card?"px-1 py-1":"px-2 py-1.5"} rounded-lg cursor-default`}
        style={{ background: item.active ? v.accentSecondary + "12" : "transparent", color: item.active ? v.accentSecondary : v.textSecondary }}>
        <span className={`${card?"w-1 h-1":"w-1.5 h-1.5"} rounded-full flex-shrink-0`} style={{ background: item.active ? v.accentSecondary : v.textSecondary + "40" }} />
        {!card && <span className="text-[10px] md:text-[11px] truncate">{item.label}</span>}
      </div>
    ))}
  </div>;
}

function Pill({ color, label }: { color: string; label: string }) {
  return <span className="text-[8px] md:text-[9px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{ background: color + "18", color }}>{label}</span>;
}

function K({ v, card, label, val, sub, subColor }: { v: any; card: boolean; label: string; val: string; sub?: string; subColor?: string }) {
  return <div className={`${card?"rounded p-1":"rounded-lg p-2 md:p-2.5"}`} style={{ background: v.surface, border: `1px solid ${v.border}` }}>
    <div className={`${card?"text-[6px]":"text-[8px] md:text-[9px]"} uppercase tracking-wider`} style={{ color: v.textSecondary }}>{label}</div>
    <div className={`font-bold mt-0.5 ${card?"text-[9px]":"text-sm md:text-base"}`} style={{ color: v.textPrimary }}>{val}</div>
    {sub && <div className={`${card?"text-[6px]":"text-[8px] md:text-[9px]"} mt-0.5`} style={{ color: subColor || v.textSecondary }}>{sub}</div>}
  </div>;
}

function Tab({ v, label, active }: { v: any; label: string; active?: boolean }) {
  return <span className={`${active?"":"opacity-50"} text-[9px] md:text-[10px] font-medium px-2 md:px-3 py-1 rounded-full whitespace-nowrap`} style={{ background: active ? v.accentSecondary + "15" : "transparent", color: active ? v.accentSecondary : v.textSecondary }}>{label}</span>;
}

import React from "react";

/* ════════════════════════════════════════════
   ATLAS — LOGISTICA
   ════════════════════════════════════════════ */
function AtlasV({ v, card }: { v: any; card: boolean }) {
  return     <Shell v={v} card={card} title="Atlas — Dashboard operativa" sidebar={<Side v={v} card={card} items={[
    {label:"Dashboard",active:true},{label:"Spedizioni"},{label:"Flotta"},{label:"Tracking"},{label:"Report"}]} />} topTabs={<>{["Tutte","In transito","Consegnate","Ritardi"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className={`space-y-2 md:space-y-3`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="In transito" val="18" sub="+3 vs ieri" subColor="#22C55E" />
        <K v={v} card={card} label="Consegnate" val="11" sub="92% on time" />
        <K v={v} card={card} label="In attesa" val="3" sub="Mag. Nord" subColor="#F59E0B" />
        <K v={v} card={card} label="Autisti attivi" val="24/28" sub="85% utilizzo" />
      </div>
      <Table v={v} card={card} heads={["ID","Cliente","Destinazione","Autista","Kg","Stato","ETA","Priorità"]} rows={[
        ["SP-1042","Elettronica Ind. Srl","Milano Centro","M. Rossi","340",<Pill key="a" color="#3B82F6" label="Transito"/>,"14:30",<Pill key="aa" color="#EF4444" label="Alta"/>],
        ["SP-1043","MetalWorks SpA","Verona Est","L. Bianchi","120",<Pill key="b" color="#22C55E" label="OK"/>,"11:15",<Pill key="bb" color="#F59E0B" label="Media"/>],
        ["SP-1044","Logistica Nord Srl","Bologna Borgo","A. Verdi","890",<Pill key="c" color="#EF4444" label="Ritardo"/>,"16:45",<Pill key="cc" color="#EF4444" label="Alta"/>],
        ["SP-1045","Tecno Supply Srl","Torino Lingotto","G. Neri","210",<Pill key="d" color="#3B82F6" label="Transito"/>,"13:00",<Pill key="dd" color="#22C55E" label="Bassa"/>],
        ["SP-1046","FoodEx Distribution","Firenze Rifredi","S. Conti","560",<Pill key="e" color="#F59E0B" label="Carico"/>,"15:10",<Pill key="ee" color="#F59E0B" label="Media"/>],
        ["SP-1047","Pharma Logistics","Roma Tiburtina","P. Gallo","75",<Pill key="f" color="#3B82F6" label="Transito"/>,"17:20",<Pill key="ff" color="#EF4444" label="Alta"/>],
      ]} />
    </div>
  </Shell>;
}

function Table({ v, card, heads, rows }: { v: any; card: boolean; heads: string[]; rows: (string|React.ReactNode)[][] }) {
  return <div className="rounded-lg overflow-hidden border" style={{ borderColor: v.border }}>
    <div className={`${card?"hidden":"flex"} items-center justify-between px-3 py-1.5 border-b text-[10px]`} style={{ background: v.surface, borderColor: v.border, color: v.textSecondary }}>
      <span style={{color:v.textPrimary}} className="font-medium">Ultime attività</span>
      <span>Filtra...</span>
      <span className="px-2 py-0.5 rounded-full cursor-default" style={{ background: v.accentSecondary + "15", color: v.accentSecondary }}>+ Nuova</span>
    </div>
    <table className="w-full"><thead style={{ background: v.surface, color: v.textSecondary }}><tr>{heads.map(h=><th key={h} className={`text-left p-1.5 md:p-2 ${card?"text-[7px]":"text-[9px] md:text-[10px]"} font-medium`}>{h}</th>)}</tr></thead><tbody style={{ color: v.textPrimary }}>{rows.map((r,i)=><tr key={i} style={{ borderTop: `1px solid ${v.border}` }}>{r.map((d,j)=><td key={j} className={`p-1.5 md:p-2 ${card?"text-[7px]":"text-[9px] md:text-[10px]"}`}>{d}</td>)}</tr>)}</tbody></table>
  </div>;
}

/* ════════════════════════════════════════════
   NORTHLINE — PORTALE CLIENTI
   ════════════════════════════════════════════ */
function NorthlineV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="Northline — Portale clienti" sidebar={<Side v={v} card={card} items={[{label:"Dashboard",active:true},{label:"Documenti"},{label:"Ticket"},{label:"Fatture"},{label:"Report"}]} />} topTabs={<>{["Dashboard","Documenti","Ticket","Fatture"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="flex justify-between items-end"><div><div className={`${card?"text-[7px]":"text-[10px]"} opacity-60`} style={{color:v.textSecondary}}>Buongiorno, Acme Industriale</div><div className={`font-bold ${card?"text-[10px]":"text-lg"}`} style={{color:v.textPrimary}}>Progetti attivi</div></div><div className="flex gap-1"><Pill color={v.accentSecondary} label="4 attivi"/><Pill color="#22C55E" label="2 completati"/></div></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Documenti" val="127" sub="12 nuovi" subColor={v.accentSecondary} />
        <K v={v} card={card} label="Ticket" val="3" sub="1 urgente" subColor="#EF4444" />
        <K v={v} card={card} label="Fatture" val="€ 284K" sub="4 in scadenza" subColor="#F59E0B" />
        <K v={v} card={card} label="SLA" val="98.4%" sub="+1.2%" subColor="#22C55E" />
      </div>
      <div className={`space-y-1.5 ${card?"space-y-1":""}`}>
        {[{n:"P-042 Ristrutturazione HQ",p:"75%",s:"In corso",d:"12 giu 2026",t:["Documenti","Ticket","Fatture"]},{n:"P-038 Digitalizzazione archivi",p:"92%",s:"Completato",d:"05 giu 2026",t:["Documenti"]},{n:"P-045 Audit sicurezza IT",p:"40%",s:"In corso",d:"30 giu 2026",t:["Documenti","Ticket"]}].map((p,i)=><div key={i} className={`rounded-xl border ${card?"p-1.5":"p-3"} space-y-1.5`} style={{background:v.surface,borderColor:v.border}}><div className="flex flex-wrap items-center justify-between gap-1.5"><div><div className={`${card?"text-[8px]":"text-xs"} font-semibold`} style={{color:v.textPrimary}}>{p.n}</div><div className={`${card?"text-[6px]":"text-[10px]"} mt-0.5`} style={{color:v.textSecondary}}>Scadenza {p.d}</div></div><div className="flex gap-1">{p.t.map(t=><span key={t} className={`${card?"text-[6px]":"text-[9px]"} px-1.5 py-0.5 rounded-full border`} style={{borderColor:v.border,color:v.textSecondary}}>{t}</span>)}{<Pill color={p.s==="Completato"?"#22C55E":v.accentSecondary} label={p.s}/>}</div></div><div className="flex items-center gap-2"><div className="flex-1 h-1 md:h-1.5 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:p.p,background:p.s==="Completato"?"#22C55E":v.accentSecondary}}/></div><span className={`${card?"text-[7px]":"text-[10px]"} font-bold`} style={{color:v.textPrimary}}>{p.p}</span></div></div>)}
      </div>
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   FIELDER — MOBILE APP
   ════════════════════════════════════════════ */
function FielderV({ v, card }: { v: any; card: boolean }) {
  const pw = card ? "w-[55px]" : "w-[140px] md:w-[165px]";
  return <div className="flex gap-2 md:gap-4 justify-center items-start h-full p-1 md:p-2 flex-wrap">
    {[ 
      {title:"Oggi · 4",items:[["Manut. HVAC","Via Roma 12","09:00-10:30","IN CORSO"],["Rip. caldaia","C.so Italia 45","11:00-12:30","IN CORSO"],["Verifica imp.","P.za Duomo 3","14:00-15:00","DA FARE"],["Sost. filtro","V.le Monza 88","15:30-16:30","DA FARE"]]},
      {title:"Checklist INT-2841",items:[["Verifica pressione","OK",0],["Pulizia filtri","OK",0],["Controllo termostato","OK",0],["Test accensione","IN CORSO",0],["Compila rapporto","Da comp.",0],["Firma cliente","Da firm.",0]]},
      {title:"Firma",items:[["Mario Bianchi","Da firm. Conferma",0]]},
    ].map((phone,pi)=><div key={pi} className={`${pw} rounded-2xl md:rounded-[1.5rem] border-2 md:border-[3px] overflow-hidden flex flex-col`} style={{borderColor:v.border,background:v.bg}}>
      <div className={`${card?"h-3":"h-5 md:h-7"} flex items-center justify-center border-b flex-shrink-0`} style={{borderColor:v.border}}><div className={`${card?"w-6 h-0.5":"w-10 md:w-12 h-0.5 md:h-1"} rounded-full`} style={{background:v.border}}/></div>
      <div className={`${card?"p-1":"p-2 md:p-3"} space-y-1 md:space-y-2 flex-1 overflow-y-auto`}>
        <div className={`${card?"text-[7px]":"text-[11px] md:text-[13px]"} font-bold`} style={{color:v.textPrimary}}>{phone.title}</div>
        {phone.items.slice(0,card?3:6).map((j,k)=><div key={k} className={`${card?"p-0.5":"p-1.5"} rounded-lg`} style={{background:v.surface,border:`1px solid ${v.border}`}}>
          <div className={`${card?"text-[6px]":"text-[9px] md:text-[10px]"} font-semibold`} style={{color:v.textPrimary}}>{j[0]}</div>
          {typeof j[1]==="string"&&j[1].length>3&&<div className={`${card?"text-[5px]":"text-[7px] md:text-[8px]"} mt-0.5`} style={{color:j[1]==="OK"?"#22C55E":v.textSecondary}}>{j[1]}</div>}
        </div>)}
        {pi===0&&<div className="flex items-center gap-1 text-[7px] md:text-[9px] justify-center py-0.5" style={{color:v.accentSecondary}}><span>Sync</span>Dati salvati · sync auto</div>}
      </div>
      <div className={`${card?"h-2":"h-3 md:h-4"} flex items-center justify-center border-t flex-shrink-0`} style={{borderColor:v.border}}><div className={`${card?"w-4 h-0.5":"w-6 md:w-8 h-0.5 md:h-1"} rounded-full`} style={{background:v.border}}/></div>
    </div>)}
  </div>;
}

/* ════════════════════════════════════════════
   LEDGERVIEW — FINANCE DASHBOARD
   ════════════════════════════════════════════ */
function LedgerV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="LedgerView — Dashboard Q2 2026" sidebar={<Side v={v} card={card} items={[{label:"Dashboard",active:true},{label:"Cash Flow"},{label:"Fatture"},{label:"Clienti"},{label:"Report"}]} />}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Cash Flow" val="€ 842K" sub="+12.4% vs Q1" subColor="#22C55E" />
        <K v={v} card={card} label="Crediti" val="€ 1.24M" sub="−8.2% vs mese" subColor="#EF4444" />
        <K v={v} card={card} label="Debiti" val="€ 612K" sub="+3.1% vs mese" />
        <K v={v} card={card} label="Margine" val="24.8%" sub="+1.4 pp" subColor="#22C55E" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        <div className={`rounded-xl ${card?"p-1.5":"p-3"} border`} style={{background:v.surface,borderColor:v.border}}>
          <div className="flex justify-between items-center mb-1.5 md:mb-2"><div className={`${card?"text-[7px]":"text-[10px]"} font-medium`} style={{color:v.textSecondary}}>Entrate / Uscite — 6 mesi</div><span className={`${card?"text-[5px]":"text-[8px]"} px-1.5 py-0.5 rounded-full`} style={{background:v.accentSecondary+"15",color:v.accentSecondary}}>Q2</span></div>
          <div className="flex items-end gap-1 h-16 md:h-24">{[{v:65,l:"Gen"},{v:78,l:"Feb"},{v:58,l:"Mar"},{v:88,l:"Apr"},{v:92,l:"Mag"},{v:98,l:"Giu"}].map((m,i)=><div key={i} className="flex-1 flex flex-col items-center gap-0.5"><div className="w-full rounded-sm" style={{height:`${m.v}%`,background:v.accentSecondary}}/><div className="w-full rounded-sm opacity-35" style={{height:`${m.v*0.6}%`,background:"#EF4444"}}/><span className={`${card?"text-[6px]":"text-[8px]"} mt-0.5`} style={{color:v.textSecondary}}>{m.l}</span></div>)}</div>
          <div className="flex gap-3 mt-1.5 md:mt-2 text-[8px] md:text-[9px]" style={{color:v.textSecondary}}><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block" style={{background:v.accentSecondary}}/>Entrate</span><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block opacity-35" style={{background:"#EF4444"}}/>Uscite</span></div>
        </div>
        <div className={`rounded-xl ${card?"p-1.5":"p-3"} border space-y-1.5 md:space-y-2`} style={{background:v.surface,borderColor:v.border}}>
          <div className={`${card?"text-[7px]":"text-[10px]"} font-medium`} style={{color:v.textSecondary}}>Top 5 clienti</div>
          {[["Industrie Meccaniche","€ 842K",85],["TecnoSupply Srl","€ 621K",63],["Logistica Nord Srl","€ 487K",49],["MetalWorks SpA","€ 365K",37],["FoodEx Distribution","€ 284K",29]].map((c,i)=><div key={i} className="flex items-center gap-1.5 md:gap-2"><span className={`${card?"text-[7px]":"text-[10px]"} w-3 md:w-4 font-mono`} style={{color:v.textSecondary}}>{i+1}</span><span className={`${card?"text-[7px]":"text-[10px]"} flex-1 truncate`} style={{color:v.textPrimary}}>{c[0]}</span><span className={`${card?"text-[7px]":"text-[10px]"} font-semibold`} style={{color:v.textPrimary}}>{c[1]}</span><div className="w-8 md:w-10 h-1 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:`${c[2]}%`,background:v.accentSecondary}}/></div></div>)}
        </div>
      </div>
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   DENTALFLOW — STUDIO DENTISTICO
   ════════════════════════════════════════════ */
function DentalV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="DentalFlow — Studio Dentistico" sidebar={<Side v={v} card={card} items={[{label:"Agenda",active:true},{label:"Pazienti"},{label:"Cure"},{label:"Preventivi"},{label:"Report"}]} />} topTabs={<>{["Agenda","Pazienti","Cure","Fatture"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="flex justify-between items-center"><div><div className={`${card?"text-[7px]":"text-[10px]"} opacity-60`} style={{color:v.textSecondary}}>Oggi · 14 Giugno 2026</div><div className={`font-bold ${card?"text-[10px]":"text-lg"}`} style={{color:v.textPrimary}}>{card?"Agenda":"Agenda appuntamenti"}</div></div><div className="flex gap-1"><Pill color={v.accentSecondary} label="8 app.ti"/><Pill color="#F59E0B" label="3 poltrone"/><Pill color="#EF4444" label="1 urgente"/></div></div>
      <Table v={v} card={card} heads={["Ora","Paziente","Trattamento","Poltrona","Stato","Note"]} rows={[
        ["09:00","M. Rossi","Igiene dentale","P1",<Pill key="a" color="#22C55E" label=" Completato"/>,"Richiamo 6 mesi"],
        ["10:00","L. Bianchi","Controllo periodico","P2",<Pill key="b" color="#3B82F6" label="In corso"/>,"RX panoramica"],
        ["11:30","A. Verdi","Otturazione molare","P1",<Pill key="c" color="#F59E0B" label="In attesa"/>,"Anestesia prevista"],
        ["14:00","S. Neri","Prima visita","P3",<Pill key="d" color={v.accentSecondary} label="Confermato"/>,"Nuovo paziente"],
        ["15:30","G. Galli","Devitalizzazione","P2",<Pill key="e" color={v.accentSecondary} label="Confermato"/>,"2ª seduta su 3"],
        ["17:00","F. Conti","Sbiancamento","P1",<Pill key="f" color={v.accentSecondary} label="Confermato"/>,"Pacchetto 3 sedute"],
      ]} />
      {!card && <div className="flex gap-2 text-xs" style={{color:v.textSecondary}}><span>Lista 12 pazienti in attesa recall</span><span>Report Fatturato oggi: € 2.840</span><span>DA FARE Prossima disponibilità: 18 giu</span></div>}
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   TABLEOPS — RISTORANTE
   ════════════════════════════════════════════ */
function TableV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="TableOps — Ristorante" sidebar={<Side v={v} card={card} items={[{label:"Sala",active:true},{label:"Cucina"},{label:"Comande"},{label:"Magazzino"},{label:"Report"}]} />} topTabs={<>{["Sala","Cucina","Prenotazioni","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="flex justify-between items-center"><div><div className={`${card?"text-[7px]":"text-[10px]"} opacity-60`} style={{color:v.textSecondary}}>Cena · 18:30 · 80 coperti</div><div className={`font-bold ${card?"text-[10px]":"text-lg"}`} style={{color:v.textPrimary}}>14 prenotazioni</div></div><div className="flex gap-1"><Pill color="#22C55E" label="3 camerieri"/><Pill color="#3B82F6" label="Cucina attiva"/></div></div>
      <div className="grid grid-cols-5 md:grid-cols-5 gap-1 md:gap-1.5">
        {[
          ["T1","2","19:00","Rossi","OCCUPATO",v.textPrimary+"08"],["T2","4","19:00","Bianchi","IN CORSO",v.accentSecondary+"15"],["T3","2","19:30","Verdi","OCCUPATO",v.textPrimary+"08"],
          ["T4","6","19:30","Neri","IN CORSO",v.accentSecondary+"15"],["T5","3","20:00","Galli","OCCUPATO",v.textPrimary+"08"],["T6","2","20:00","Rossi","OCCUPATO",v.textPrimary+"08"],
          ["T7","4","20:30","Mazzi","IN CORSO",v.accentSecondary+"15"],["T8","2","20:30","Ferri","OCCUPATO",v.textPrimary+"08"],["T9","6","21:00","Conti","IN CORSO",v.accentSecondary+"15"],
          ["T10","3","21:00","Esposito","OCCUPATO",v.textPrimary+"08"],
        ].map((t,i)=><div key={i} className={`${card?"rounded p-0.5":"rounded-lg p-1.5 md:p-2"} text-center`} style={{background:t[5],border:`1px solid ${t[4]==="IN CORSO"?v.accentSecondary+"20":"transparent"}`}}><div className={`${card?"text-[7px]":"text-[10px] md:text-[12px]"} font-bold`} style={{color:v.textPrimary}}>{t[0]}</div><div className={`${card?"text-[5px]":"text-[8px] md:text-[9px]"}`} style={{color:v.textSecondary}}>{t[1]} pax</div>{!card&&<div className={`text-[7px] md:text-[8px] mt-0.5`} style={{color:v.textSecondary}}>{t[3]} · {t[2]}</div>}</div>)}
      </div>
      {!card && <div className="flex gap-4 text-xs" style={{color:v.textSecondary}}><span>Comande in corso: 4</span><span>Pacco Ingredienti in esaurimento: 2</span><span>Euro Incasso stimato: € 2.840</span></div>}
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   HOTELDESK
   ════════════════════════════════════════════ */
function HotelV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="HotelDesk — Reception" sidebar={<Side v={v} card={card} items={[{label:"Reception",active:true},{label:"Housekeeping"},{label:"Richieste"},{label:"Report"}]} />} topTabs={<>{["Reception","Housekeeping","Ospiti","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-3 gap-1.5 md:gap-2">
        <div className={`${card?"rounded p-1":"rounded-lg p-2 md:p-3"} text-center`} style={{background:"#22C55E"+"10",border:`1px solid #22C55E20`}}><div className={`${card?"text-[10px]":"text-xl md:text-2xl"} font-bold`} style={{color:"#22C55E"}}>48</div><div className={`${card?"text-[6px]":"text-[9px] md:text-[10px]"} mt-0.5`} style={{color:v.textSecondary}}>Occupate</div></div>
        <div className={`${card?"rounded p-1":"rounded-lg p-2 md:p-3"} text-center`} style={{background:v.accentSecondary+"10",border:`1px solid ${v.accentSecondary}20`}}><div className={`${card?"text-[10px]":"text-xl md:text-2xl"} font-bold`} style={{color:v.accentSecondary}}>8</div><div className={`${card?"text-[6px]":"text-[9px] md:text-[10px]"} mt-0.5`} style={{color:v.textSecondary}}>Libere</div></div>
        <div className={`${card?"rounded p-1":"rounded-lg p-2 md:p-3"} text-center`} style={{background:"#F59E0B"+"10",border:`1px solid #F59E0B20`}}><div className={`${card?"text-[10px]":"text-xl md:text-2xl"} font-bold`} style={{color:"#F59E0B"}}>4</div><div className={`${card?"text-[6px]":"text-[9px] md:text-[10px]"} mt-0.5`} style={{color:v.textSecondary}}>Pulizie</div></div>
      </div>
      <Table v={v} card={card} heads={["Camera","Ospite","Check-in","Check-out","Stato","Note"]} rows={[
        ["301","M. Bianchi","14 giu","16 giu",<Pill key="a" color="#3B82F6" label="Check-in"/>,"Cuscino extra"],
        ["205","L. Verdi","12 giu","15 giu",<Pill key="b" color="#22C55E" label="Soggiorno"/>,"—"],
        ["412","P. Neri","10 giu","14 giu",<Pill key="c" color="#EF4444" label="Check-out"/>,"Late c/o 13:00"],
        ["108","A. Conti","14 giu","18 giu",<Pill key="d" color="#3B82F6" label="Check-in"/>,"Culla richiesta"],
        ["502","F. Gallo","11 giu","15 giu",<Pill key="e" color="#22C55E" label="Soggiorno"/>,"Dieta vegana"],
        ["310","S. Romano","14 giu","15 giu",<Pill key="f" color="#3B82F6" label="Check-in"/>,"—"],
      ]} />
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   FITMANAGER
   ════════════════════════════════════════════ */
function FitV({ v, card }: { v: any; card: boolean }) {
  const pw = card ? "w-[55px]" : "w-[140px] md:w-[160px]";
  return <div className="flex gap-2 md:gap-4 justify-center items-start h-full p-1 md:p-2 flex-wrap">
    {[
      {t:"Corsi oggi",d:[["HIIT Avanzato","09:00","18/20",v.accentSecondary],["Yoga Flow","11:00","15/15","#EF4444"],["Spinning","14:00","12/25",v.accentSecondary],["Functional","18:30","20/20","#EF4444"]]},
      {t:"Scheda MR",d:[["Panca piana","4×10 · 80kg","OK"],["Squat","3×8 · 100kg","OK"],["Rematore","3×12 · 60kg","IN CORSO"],["Curl bilanciere","3×10 · 30kg","DA FARE"]]},
      {t:"Abbonamento",d:[["Premium Annuale","Scade 15/09/26","Attivo"],["Ingressi","142 illimitati","In corso"],["Corsi","8/settimana","Inclusi"],["Rinnovo","Auto · Carta ****","15/09"]]},
    ].map((ph,pi)=><div key={pi} className={`${pw} rounded-2xl md:rounded-[1.5rem] border-2 md:border-[3px] overflow-hidden flex flex-col`} style={{borderColor:v.border,background:v.bg}}>
      <div className={`${card?"h-3":"h-5 md:h-7"} flex items-center justify-center border-b flex-shrink-0`} style={{borderColor:v.border}}><div className={`${card?"w-6 h-0.5":"w-10 md:w-12 h-0.5 md:h-1"} rounded-full`} style={{background:v.border}}/></div>
      <div className={`${card?"p-1":"p-2 md:p-3"} space-y-1 md:space-y-2 flex-1 overflow-y-auto`}>
        <div className={`${card?"text-[7px]":"text-[11px] md:text-[13px]"} font-bold`} style={{color:v.textPrimary}}>{ph.t}</div>
        {ph.d.slice(0,card?2:4).map((j,k)=><div key={k} className={`${card?"p-0.5":"p-1.5"} rounded-lg`} style={{background:v.surface,border:`1px solid ${v.border}`}}>
          <div className={`${card?"text-[6px]":"text-[9px] md:text-[10px]"} font-semibold`} style={{color:v.textPrimary}}>{j[0]}</div>
          <div className={`${card?"text-[5px]":"text-[7px] md:text-[8px]"} flex justify-between mt-0.5`}><span style={{color:v.textSecondary}}>{j[1]}</span><span style={{color:j[2]==="OK"?"#22C55E":j[2]==="Attivo"?v.accentSecondary:v.textSecondary}}>{j[2]}</span></div>
        </div>)}
      </div>
      <div className={`${card?"h-2":"h-3 md:h-4"} flex items-center justify-center border-t flex-shrink-0`} style={{borderColor:v.border}}><div className={`${card?"w-4 h-0.5":"w-6 md:w-8 h-0.5 md:h-1"} rounded-full`} style={{background:v.border}}/></div>
    </div>)}
  </div>;
}

/* ════════════════════════════════════════════
   ESTATEHUB — IMMOBILIARE
   ════════════════════════════════════════════ */
function EstateV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="EstateHub — Pipeline trattative" sidebar={<Side v={v} card={card} items={[{label:"Immobili",active:true},{label:"Clienti"},{label:"Visite"},{label:"Documenti"}]} />} topTabs={<>{["Pipeline","Immobili","Clienti","Agenda"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1 md:gap-2">
        {[["Visite","12","#3B82F6","Pos."],["Trattative","5","#F59E0B","Tratt."],["Proposte","3",v.accentSecondary,"Note"],["Chiusi","2","#22C55E","OK"]].map(x=><div key={x[0]} className={`${card?"rounded p-1":"rounded-lg p-2 md:p-3"} text-center`} style={{background:x[2]+"10",border:`1px solid ${x[2]}20`}}><div className={`${card?"text-[7px]":"text-[9px] md:text-[10px]"}`} style={{color:v.textSecondary}}>{x[3]} {x[0]}</div><div className={`${card?"text-[10px]":"text-xl md:text-2xl"} font-bold mt-0.5`} style={{color:x[2]}}>{x[1]}</div></div>)}
      </div>
      <Table v={v} card={card} heads={["Immobile","Tipologia","Valore","Fase","Agente","Cliente"]} rows={[
        ["Villa Panorama 24","Villa","€ 480K",<Pill key="a" color="#22C55E" label="Proposta"/>, "M. Rossi","F. Bianchi"],
        ["App. Milano 12","Appartamento","€ 320K",<Pill key="b" color="#F59E0B" label="Trattativa"/>, "S. Neri","L. Verdi"],
        ["Box Torino 5","Box auto","€ 85K",<Pill key="c" color="#3B82F6" label="Visita"/>, "M. Rossi","A. Conti"],
        ["Ufficio Milano 3","Ufficio","€ 210K",<Pill key="d" color="#3B82F6" label="Visita"/>, "G. Galli","P. Romano"],
        ["Loft Navigli","Loft","€ 590K",<Pill key="e" color="#22C55E" label="Proposta"/>, "S. Neri","D. Ferri"],
      ]} />
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   LEGALTRACK
   ════════════════════════════════════════════ */
function LegalV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="LegalTrack — Pratiche" sidebar={<Side v={v} card={card} items={[{label:"Pratiche",active:true},{label:"Scadenze"},{label:"Clienti"},{label:"Documenti"}]} />} topTabs={<>{["Tutte","Civile","Penale","Societario"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Pratiche" val="42" sub="+3 attive" />
        <K v={v} card={card} label="Scadenze 7gg" val="5" sub="2 urgenti" subColor="#EF4444" />
        <K v={v} card={card} label="Udienze" val="3" sub="Questa settimana" />
        <K v={v} card={card} label="Ore fatt." val="186" sub="Giugno 2026" />
      </div>
      <Table v={v} card={card} heads={["Pratica","Cliente","Tipo","Giudice","Scadenza","Udienza","Stato"]} rows={[
        ["RG-284","Rossi SpA","Civile","Trib. Milano","15/07/26","22/07/26",<Pill key="a" color="#3B82F6" label="In corso"/>],
        ["RG-291","Bianchi Srl","Penale","Corte Appello","20/06/26","28/06/26",<Pill key="b" color="#EF4444" label="Urgente"/>],
        ["RG-275","Verdi & C.","Societario","Trib. Imprese","01/08/26","—",<Pill key="c" color="#3B82F6" label="In corso"/>],
        ["RG-268","Neri SpA","Lavoro","Trib. Milano","05/07/26","12/07/26",<Pill key="d" color="#F59E0B" label="In attesa"/>],
        ["RG-255","Gialli Srl","Civile","Giud. Pace","12/08/26","—",<Pill key="e" color="#22C55E" label="Chiusa"/>],
      ]} />
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   EDUPORTAL
   ════════════════════════════════════════════ */
function EduV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="EduPortal — Area studente" sidebar={<Side v={v} card={card} items={[{label:"Dashboard",active:true},{label:"Corsi"},{label:"Voti"},{label:"Pagamenti"}]} />}>
    <div className="space-y-2 md:space-y-3">
      <div className="flex items-center gap-3 p-2 md:p-3 rounded-xl border" style={{background:v.surface,borderColor:v.border}}>
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{background:v.accentSecondary+"15",color:v.accentSecondary}}>FR</div>
        <div><div className={`font-bold ${card?"text-[9px]":"text-sm"}`} style={{color:v.textPrimary}}>F. Romano</div><div className={`${card?"text-[7px]":"text-[10px]"}`} style={{color:v.textSecondary}}>Web Development · Iscritto 01/02/2026</div></div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Presenze" val="18/22" sub="82%" subColor="#22C55E" />
        <K v={v} card={card} label="Media voti" val="28/30" sub="Eccellente" subColor={v.accentSecondary} />
        <K v={v} card={card} label="Pagamenti" val="€ 2.400" sub="3/4 rate" subColor="#F59E0B" />
      </div>
      <Table v={v} card={card} heads={["Modulo","Docente","Voto","Presenze","Stato"]} rows={[
        ["HTML & CSS","M. Conti","30/30","6/6",<Pill key="a" color="#22C55E" label="Completato"/>],
        ["JavaScript","L. Verdi","28/30","6/6",<Pill key="b" color="#22C55E" label="Completato"/>],
        ["React","A. Neri","—","4/6",<Pill key="c" color="#3B82F6" label="In corso"/>],
        ["Node.js","S. Galli","—","0/6",<Pill key="d" color="#F59E0B" label="Pianificato"/>],
      ]} />
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   AUTOSERVICE PRO
   ════════════════════════════════════════════ */
function AutoV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="AutoService Pro — Officina" sidebar={<Side v={v} card={card} items={[{label:"Officina",active:true},{label:"Veicoli"},{label:"Ricambi"},{label:"Fatture"}]} />} topTabs={<>{["Officina","Veicoli","Ricambi","Storico"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="App. oggi" val="12" sub="+2 vs ieri" />
        <K v={v} card={card} label="In corso" val="3" sub="Meccanici attivi" />
        <K v={v} card={card} label="Completati" val="9" sub="75% oggi" subColor="#22C55E" />
        <K v={v} card={card} label="Ricambi" val="2 carenti" sub="⚠️ Alert" subColor="#EF4444" />
      </div>
      <Table v={v} card={card} heads={["Veicolo","Targa","Intervento","Stato","Meccanico","Prev. consegna"]} rows={[
        ["Fiat Punto","AB123CD","Tagliando completo",<Pill key="a" color="#3B82F6" label="In corso"/>,"M. Rossi","14:00"],
        ["BMW Serie 3","EF456GH","Sostituzione freni",<Pill key="b" color="#22C55E" label="Completato"/>,"L. Bianchi","11:15"],
        ["Audi A4","IL789MN","Diagnosi elettronica",<Pill key="c" color="#F59E0B" label="In attesa"/>,"A. Verdi","16:00"],
        ["Ford Focus","OP012QR","Sostituzione gomme",<Pill key="d" color="#22C55E" label="Completato"/>,"G. Neri","10:30"],
        ["VW Golf","QR345ST","Distribuzione",<Pill key="e" color="#3B82F6" label="In corso"/>,"M. Rossi","17:00"],
      ]} />
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   RETAILPULSE
   ════════════════════════════════════════════ */
function RetailV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="RetailPulse — Vendite" sidebar={<Side v={v} card={card} items={[{label:"Vendite",active:true},{label:"Magazzino"},{label:"Promo"},{label:"Report"}]} />} topTabs={<>{["Vendite","Prodotti","Store","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Oggi" val="€ 24.8K" sub="+12% vs ieri" subColor="#22C55E" />
        <K v={v} card={card} label="Settimana" val="€ 142K" sub="+8% vs media" />
        <K v={v} card={card} label="Scontrini" val="412" sub="Oggi" />
        <K v={v} card={card} label="Resi" val="1.2%" sub="−0.3%" subColor="#22C55E" />
      </div>
      <Table v={v} card={card} heads={["Prodotto","Categoria","Venduti","Fatturato","Stock","Alert"]} rows={[
        ["Jeans Uomo","Abbigliamento","48","€ 3.840","120","OK OK"],
        ["T-shirt Donna","Abbigliamento","85","€ 1.275","45","⚠️ Basso"],
        ["Scarpe Running","Calzature","22","€ 2.640","15","⚠️ Minimo"],
        ["Giacca Inverno","Abbigliamento","12","€ 2.160","80","OK OK"],
        ["Borsa Pelle","Accessori","8","€ 1.040","22","OK OK"],
      ]} />
    </div>
  </Shell>;
}

/* ════════════════════════════════════════════
   PHARMASTOCK / BUILD / EVENT / FARM / CARE / SAAS / CLINIC / BEAUTY — Rich variants
   ════════════════════════════════════════════ */
function PharmaV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="PharmaStock — Magazzino" sidebar={<Side v={v} card={card} items={[{label:"Magazzino",active:true},{label:"Ordini"},{label:"Scadenze"},{label:"Report"}]} />} topTabs={<>{["Scorte","Ordini","Scadenze","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Referenze" val="14.820" sub="+120 nuove" />
        <K v={v} card={card} label="Scadenze" val="34" sub="Entro 30gg" subColor="#EF4444" />
        <K v={v} card={card} label="Ordini aperti" val="5" sub="3 in consegna" />
        <K v={v} card={card} label="Valore stock" val="€ 312K" sub="Inventariato" />
      </div>
      <Table v={v} card={card} heads={["Prodotto","Principio attivo","Q.tà","Scadenza","Fornitore","Alert"]} rows={[
        ["Tachipirina 500","Paracetamolo","120","12/2027","Farmacom SpA","OK"],
        ["Augmentin","Amoxicillina","45","08/2026","PharmaDistri","⚠️ Vicina!"],
        ["Voltaren gel","Diclofenac","82","03/2028","SaluteFarma","OK"],
        ["Brufen 400","Ibuprofene","18","09/2026","Farmacom SpA","⚠️ Sottoscorta"],
        ["Cardioaspirin","Acido acetil.","210","06/2028","PharmaDistri","OK"],
      ]} />
    </div>
  </Shell>;
}

function BuildV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="BuildControl — Cantieri" sidebar={<Side v={v} card={card} items={[{label:"Cantieri",active:true},{label:"Squadre"},{label:"Materiali"},{label:"Sicurezza"}]} />} topTabs={<>{["Cantieri","Squadre","Costi","Documenti"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Cantieri" val="8" sub="+2 avviati" />
        <K v={v} card={card} label="Budget tot." val="€ 4.2M" sub="78% allocato" />
        <K v={v} card={card} label="Squadre" val="12" sub="86 operai" />
        <K v={v} card={card} label="Ritardi" val="1" sub="⚠️ Uffici MI" subColor="#EF4444" />
      </div>
      <Table v={v} card={card} heads={["Cantiere","Avanzamento","Budget","Squadra","Capocantiere","Stato"]} rows={[
        ["Residenza Park","65%","€ 1.2M","Sq. Alfa","M. Conti",<Pill key="a" color="#22C55E" label="On track"/>],
        ["Centro Comm.le","42%","€ 890K","Sq. Beta","L. Verdi",<Pill key="b" color="#3B82F6" label="In corso"/>],
        ["Uffici Milano","28%","€ 1.5M","Sq. Gamma","A. Neri",<Pill key="c" color="#EF4444" label="Ritardo"/>],
        ["Scuola Elementare","78%","€ 620K","Sq. Delta","G. Galli",<Pill key="d" color="#22C55E" label="On track"/>],
      ]} />
    </div>
  </Shell>;
}

function EventV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="EventFlow — Regia evento" sidebar={<Side v={v} card={card} items={[{label:"Evento",active:true},{label:"Task"},{label:"Fornitori"},{label:"Partecipanti"}]} />}>
    <div className="space-y-2 md:space-y-3">
      <div className="flex justify-between"><div><div className={`${card?"text-[7px]":"text-[10px]"} opacity-60`} style={{color:v.textSecondary}}>18 giorni all&apos;evento</div><div className={`font-bold ${card?"text-[10px]":"text-lg"}`} style={{color:v.textPrimary}}>342/500 partecipanti</div></div><div className="flex gap-1 flex-wrap">{["12 fornitori","€ 48K budget","72% usato"].map(t=><span key={t} className="text-[8px] md:text-[9px] px-1.5 py-0.5 rounded-full" style={{background:v.textPrimary+"08",color:v.textSecondary}}>{t}</span>)}</div></div>
      <Table v={v} card={card} heads={["Task","Responsabile","Scadenza","Priorità","Stato"]} rows={[
        ["Conferma catering","M. Rossi","20 giu",<Pill key="a" color="#EF4444" label="Alta"/>,<Pill key="aa" color="#F59E0B" label="Da fare"/>],
        ["Contratto location","L. Bianchi","12 giu",<Pill key="b" color="#EF4444" label="Alta"/>,<Pill key="bb" color="#22C55E" label="Fatto"/>],
        ["Grafiche evento","A. Verdi","18 giu",<Pill key="c" color="#F59E0B" label="Media"/>,<Pill key="cc" color="#3B82F6" label="In corso"/>],
        ["Invio inviti","S. Neri","10 giu",<Pill key="d" color="#EF4444" label="Alta"/>,<Pill key="dd" color="#22C55E" label="Fatto"/>],
        ["Service audio","G. Galli","22 giu",<Pill key="e" color="#F59E0B" label="Media"/>,<Pill key="ee" color="#F59E0B" label="Da fare"/>],
      ]} />
    </div>
  </Shell>;
}

function FarmV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="FarmOps — Mappa campi" sidebar={<Side v={v} card={card} items={[{label:"Colture",active:true},{label:"Irrigazione"},{label:"Trattamenti"},{label:"Mezzi"}]} />}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-2 gap-1.5 md:gap-2">
        {[{n:"Frumento",ha:"80 ha",f:"Maturazione",p:"85%",c:"#EAB308"},{n:"Mais",ha:"45 ha",f:"Crescita",p:"60%",c:"#22C55E"},{n:"Soia",ha:"35 ha",f:"Fioritura",p:"75%",c:"#3B82F6"},{n:"Girasole",ha:"40 ha",f:"Crescita",p:"45%",c:"#F59E0B"}].map(x=><div key={x.n} className={`${card?"rounded p-1":"rounded-xl p-2 md:p-3"} border`} style={{background:v.surface,borderColor:v.border}}><div className="flex justify-between items-start"><div><div className={`font-bold ${card?"text-[8px]":"text-sm"}`} style={{color:v.textPrimary}}>{x.n}</div><div className={`${card?"text-[6px]":"text-[9px]"} mt-0.5`} style={{color:v.textSecondary}}>{x.ha} · {x.f}</div></div><span className={`${card?"text-[7px]":"text-[10px]"} font-bold`} style={{color:x.c}}>{x.p}</span></div><div className="h-1 md:h-1.5 rounded-full mt-1.5" style={{background:v.border}}><div className="h-full rounded-full" style={{width:x.p,background:x.c}}/></div></div>)}
      </div>
      {!card && <div className="flex gap-4 text-xs" style={{color:v.textSecondary}}><span>200 ha totali</span><span>Irrigazione attiva</span><span>3 mezzi operativi</span><span>Temp 24°C · Umidità 62%</span></div>}
    </div>
  </Shell>;
}

function CareV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="CareHome Hub — Ospiti" sidebar={<Side v={v} card={card} items={[{label:"Ospiti",active:true},{label:"Turni"},{label:"Terapie"},{label:"Attività"}]} />} topTabs={<>{["Ospiti","Turni","Terapie","Famiglie"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Ospiti" val="80" sub="Capacità 80" />
        <K v={v} card={card} label="Personale" val="32" sub="Oggi" />
        <K v={v} card={card} label="Terapie" val="124" sub="Sommin. oggi" />
        <K v={v} card={card} label="Attività" val="6" sub="Programmate" />
      </div>
      <Table v={v} card={card} heads={["Ospite","Camera","Terapia","Orario","Stato","Familiare"]} rows={[
        ["M. Bianchi","12","Antibiotico","15:00",<Pill key="a" color="#22C55E" label="Stabile"/>, "+39 335..."],
        ["L. Verdi","08","Insulina","12:30",<Pill key="b" color="#F59E0B" label="Monitoraggio"/>, "+39 347..."],
        ["A. Neri","15","—","—",<Pill key="c" color="#22C55E" label="Stabile"/>, "+39 329..."],
        ["S. Conti","04","Cardio","09:00",<Pill key="d" color="#EF4444" label="Attenzione"/>, "+39 333..."],
        ["F. Gallo","20","Antibiotico","18:00",<Pill key="e" color="#22C55E" label="Stabile"/>, "+39 340..."],
      ]} />
    </div>
  </Shell>;
}

function ManuV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="ManuBoard — Produzione" sidebar={<Side v={v} card={card} items={[{label:"Commesse",active:true},{label:"Macchine"},{label:"Qualità"},{label:"Magazzino"}]} />} topTabs={<>{["Commesse","Macchine","Qualità","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="Commesse" val="18" sub="+3 aperte" />
        <K v={v} card={card} label="OEE" val="78.4%" sub="+2.1% vs target" subColor="#22C55E" />
        <K v={v} card={card} label="Fermi" val="2.4h" sub="⚠️ Macchina 3" subColor="#EF4444" />
        <K v={v} card={card} label="Scarti" val="1.8%" sub="−0.3% vs mese" subColor="#22C55E" />
      </div>
      <Table v={v} card={card} heads={["Commessa","Prodotto","Q.tà","Avanz.","Macchina","Stato","Consegna"]} rows={[
        ["C-442","Pompa X200","500 pz","78%","M1/M2",<Pill key="a" color="#3B82F6" label="In corso"/>,"22 giu"],
        ["C-438","Valvola V12","1.200 pz","100%","M3",<Pill key="b" color="#22C55E" label="Completato"/>,"15 giu"],
        ["C-445","Motore M5","300 pz","42%","M1",<Pill key="c" color="#3B82F6" label="In corso"/>,"30 giu"],
        ["C-440","Pompa X100","800 pz","95%","M2/M4",<Pill key="d" color="#22C55E" label="Completato"/>,"18 giu"],
        ["C-448","Ingranaggio G3","600 pz","15%","M4",<Pill key="e" color="#F59E0B" label="In attesa"/>,"05 lug"],
      ]} />
    </div>
  </Shell>;
}

function SaaSV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="SaaS Metrics — Analytics" sidebar={<Side v={v} card={card} items={[{label:"Overview",active:true},{label:"Cohort"},{label:"Funnel"},{label:"Revenue"}]} />}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        <K v={v} card={card} label="MRR" val="$ 48.2K" sub="+8.4% MoM" subColor="#22C55E" />
        <K v={v} card={card} label="Churn" val="2.4%" sub="−0.3% vs Q1" subColor="#22C55E" />
        <K v={v} card={card} label="LTV" val="$ 1.240" sub="+12% YoY" subColor={v.accentSecondary} />
        <K v={v} card={card} label="CAC" val="$ 180" sub="−15% YoY" subColor="#22C55E" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
        <div className={`rounded-xl ${card?"p-1.5":"p-3"} border`} style={{background:v.surface,borderColor:v.border}}>
          <div className={`${card?"text-[7px]":"text-[10px]"} font-medium mb-2`} style={{color:v.textSecondary}}>MRR — ultimi 6 mesi</div>
          <div className="flex items-end gap-1 h-16 md:h-20">{[32,35,38,42,45,48].map((h,i)=><div key={i} className="flex-1 rounded-t-sm" style={{height:`${(h/50)*100}%`,background:v.accentSecondary}}/>)}</div>
          <div className="flex justify-between mt-1 text-[8px]" style={{color:v.textSecondary}}><span>Gen</span><span>Feb</span><span>Mar</span><span>Apr</span><span>Mag</span><span>Giu</span></div>
        </div>
        <div className={`rounded-xl ${card?"p-1.5":"p-3"} border space-y-2`} style={{background:v.surface,borderColor:v.border}}>
          <div className={`${card?"text-[7px]":"text-[10px]"} font-medium`} style={{color:v.textSecondary}}>Funnel attuale</div>
          {[["Visitatori","12.4K","100","#3B82F6"],["Trial","1.240","10.0",v.accentSecondary],["Attivi","842","6.8","#22C55E"],["Paying","520","4.2","#F59E0B"]].map(f=><div key={f[0]} className="flex items-center gap-1.5"><span className={`${card?"text-[8px]":"text-[11px]"} w-14 md:w-16`} style={{color:v.textSecondary}}>{f[0]}</span><div className="flex-1 h-1 md:h-1.5 rounded-full" style={{background:v.border}}><div className="h-full rounded-full" style={{width:`${parseFloat(f[2])*2}%`,background:f[3]}}/></div><span className={`${card?"text-[8px]":"text-[11px]"} w-8 text-right font-semibold`} style={{color:v.textPrimary}}>{f[1]}</span></div>)}
        </div>
      </div>
    </div>
  </Shell>;
}

function ClinicV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="ClinicBoard — Planner visite" sidebar={<Side v={v} card={card} items={[{label:"Agenda",active:true},{label:"Pazienti"},{label:"Referti"},{label:"Report"}]} />} topTabs={<>{["Agenda","Pazienti","Referti","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="grid grid-cols-5 gap-1 md:gap-1.5">
        {[{s:"S1",d:"Cardiologia",m:"Dott. Conti",st:"Occupata",c:"#3B82F6"},{s:"S2",d:"Ecografia",m:"Dott. Verdi",st:"Occupata",c:"#3B82F6"},{s:"S3",d:"Ortopedia",m:"Dott. Neri",st:"Occupata",c:"#F59E0B"},{s:"S4",d:"—",m:"—",st:"Libera",c:"#22C55E"},{s:"S5",d:"—",m:"—",st:"Libera",c:"#22C55E"}].map(x=><div key={x.s} className={`${card?"rounded p-1":"rounded-lg p-2"} text-center`} style={{background:x.c+"10",border:`1px solid ${x.c}20`}}><div className={`${card?"text-[8px]":"text-[11px]"} font-bold`} style={{color:v.textPrimary}}>{x.s}</div><div className={`${card?"text-[5px]":"text-[8px]"}`} style={{color:v.textSecondary}}>{x.d}</div><div className={`${card?"text-[5px]":"text-[7px]"}`} style={{color:x.c}}>{x.st}</div></div>)}
      </div>
      <Table v={v} card={card} heads={["Ora","Paziente","Visita","Sala","Medico","Referto"]} rows={[
        ["09:00","M. Bianchi","Cardiologica","S1","Dott. Conti",<Pill key="a" color="#22C55E" label="Pronto"/>],
        ["10:30","L. Verdi","Ecografia","S2","Dott. Verdi",<Pill key="b" color="#3B82F6" label="In redaz."/>],
        ["11:00","A. Neri","Ortopedica","S3","Dott. Neri",<Pill key="c" color="#F59E0B" label="In attesa"/>],
        ["14:00","S. Conti","Dermatologica","S1","Dott. Conti",<Pill key="d" color={v.accentSecondary} label="Previsto"/>],
        ["15:30","F. Galli","Neurologica","S2","Dott. Verdi",<Pill key="e" color={v.accentSecondary} label="Previsto"/>],
      ]} />
    </div>
  </Shell>;
}

function BeautyV({ v, card }: { v: any; card: boolean }) {
  return <Shell v={v} card={card} title="BeautySuite — Centro Estetico" sidebar={<Side v={v} card={card} items={[{label:"Agenda",active:true},{label:"Clienti"},{label:"Pacchetti"},{label:"Cassa"}]} />} topTabs={<>{["Agenda","Clienti","Trattamenti","Report"].map((t,i)=><Tab key={t} v={v} label={t} active={i===0} />)}</>}>
    <div className="space-y-2 md:space-y-3">
      <div className="flex justify-between"><div><div className={`${card?"text-[7px]":"text-[10px]"} opacity-60`} style={{color:v.textSecondary}}>Oggi · 14 appuntamenti</div><div className={`font-bold ${card?"text-[10px]":"text-lg"}`} style={{color:v.textPrimary}}>5/6 cabine attive</div></div><div className="flex gap-1"><Pill color={v.accentSecondary} label="Fatt. € 1.820"/></div></div>
      <Table v={v} card={card} heads={["Ora","Cliente","Trattamento","Operatore","Cabina","Pacchetto","Stato"]} rows={[
        ["09:00","M. Bianchi","Viso + Massaggio","S. Verdi","C1","Viso 5 sed. 3/5",<Pill key="a" color="#22C55E" label=""/>],
        ["10:30","L. Rossi","Manicure semiperm.","A. Conti","C2","Manicure 10 6/10",<Pill key="b" color="#3B82F6" label="In corso"/>],
        ["12:00","F. Neri","Pedicure curativo","S. Verdi","C3","—",<Pill key="c" color="#F59E0B" label="In attesa"/>],
        ["14:30","G. Galli","Trattamento corpo","A. Conti","C1","Corpo 3 sed. 1/3",<Pill key="d" color={v.accentSecondary} label="Conf."/>],
        ["16:00","S. Romano","Massaggio relax","S. Verdi","C2","—",<Pill key="e" color={v.accentSecondary} label="Conf."/>],
      ]} />
    </div>
  </Shell>;
}

/* ══════════════════════ ROUTING ══════════════════════ */
function renderBySlug(slug: string, v: any, card: boolean, p: Project): React.ReactNode {
  if (slug === "atlas-ops-platform" || slug === "logitrack") return <AtlasV v={v} card={card} />;
  if (slug === "northline-portal") return <NorthlineV v={v} card={card} />;
  if (slug === "fielder-mobile") return <FielderV v={v} card={card} />;
  if (slug === "ledgerview-dashboard" || slug === "financeview") return <LedgerV v={v} card={card} />;
  if (slug === "dentalflow") return <DentalV v={v} card={card} />;
  if (slug === "clinicboard") return <ClinicV v={v} card={card} />;
  if (slug === "fitmanager") return <FitV v={v} card={card} />;
  if (slug === "tableops") return <TableV v={v} card={card} />;
  if (slug === "hoteldesk") return <HotelV v={v} card={card} />;
  if (slug === "estatehub") return <EstateV v={v} card={card} />;
  if (slug === "legaltrack") return <LegalV v={v} card={card} />;
  if (slug === "eduportal") return <EduV v={v} card={card} />;
  if (slug === "autoservice-pro") return <AutoV v={v} card={card} />;
  if (slug === "retailpulse") return <RetailV v={v} card={card} />;
  if (slug === "pharmastock") return <PharmaV v={v} card={card} />;
  if (slug === "buildcontrol") return <BuildV v={v} card={card} />;
  if (slug === "eventflow") return <EventV v={v} card={card} />;
  if (slug === "farmops") return <FarmV v={v} card={card} />;
  if (slug === "manuboard") return <ManuV v={v} card={card} />;
  if (slug === "carehome-hub") return <CareV v={v} card={card} />;
  if (slug === "saas-metrics") return <SaaSV v={v} card={card} />;
  if (slug === "beautysuite") return <BeautyV v={v} card={card} />;
  return <AtlasV v={v} card={card} />;
}
