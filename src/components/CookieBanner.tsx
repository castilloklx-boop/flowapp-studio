"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

type Consent = "all" | "necessary" | "custom" | null;

interface Preferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "flowapp_cookie_consent";

function getStoredConsent(): Consent {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try { const p = JSON.parse(stored); return p.consent || null; } catch { return null; }
}

function getStoredPrefs(): Preferences {
  if (typeof window === "undefined") return { necessary: true, analytics: false, marketing: false };
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return { necessary: true, analytics: false, marketing: false };
  try { const p = JSON.parse(stored); return p.prefs || { necessary: true, analytics: p.consent === "all", marketing: p.consent === "all" }; } catch { return { necessary: true, analytics: false, marketing: false }; }
}

function saveConsent(consent: Consent, prefs?: Preferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ consent, prefs: prefs || { necessary: true, analytics: consent === "all", marketing: consent === "all" }, timestamp: Date.now() }));
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<Consent>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setConsentState(getStoredConsent()); setLoaded(true); }, []);

  const acceptAll = useCallback(() => { saveConsent("all"); setConsentState("all"); }, []);
  const rejectNonNecessary = useCallback(() => { saveConsent("necessary"); setConsentState("necessary"); }, []);
  const savePrefs = useCallback((p: Preferences) => { saveConsent("custom", p); setConsentState("custom"); }, []);
  const showBanner = loaded && consent === null;
  const hasChosen = loaded && consent !== null;

  return { consent, loaded, showBanner, hasChosen, acceptAll, rejectNonNecessary, savePrefs, getStoredPrefs };
}

export function CookieBanner() {
  const { showBanner: shouldShow, acceptAll, rejectNonNecessary } = useCookieConsent();
  const [dismissed, setDismissed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const visible = shouldShow && !dismissed;

  if (!visible && !showModal) return null;

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-[520px]"
          >
            <div className="bg-white border border-border rounded-2xl shadow-[0_12px_50px_rgba(0,0,0,0.12)] p-4 md:p-5">
              <p className="text-[11px] md:text-xs text-secondary leading-relaxed pr-6">
                Usiamo cookie tecnici e, con il tuo consenso, cookie analitici per migliorare il sito.{" "}
                <Link href="/cookie-policy" className="text-accent hover:underline whitespace-nowrap">Cookie Policy</Link>
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <button onClick={rejectNonNecessary} className="text-[11px] font-medium px-4 py-2 rounded-full border border-border text-secondary hover:text-foreground hover:bg-foreground/5 transition-colors">Rifiuta</button>
                <button onClick={() => { setDismissed(true); setShowModal(true); }} className="text-[11px] font-medium px-4 py-2 rounded-full border border-border text-secondary hover:text-foreground hover:bg-foreground/5 transition-colors">Preferenze</button>
                <button onClick={acceptAll} className="text-[11px] font-semibold px-4 py-2 rounded-full bg-foreground text-white hover:bg-foreground/85 transition-colors ml-auto">Accetta</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <CookiePreferencesModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export function CookiePreferencesModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { savePrefs, acceptAll, rejectNonNecessary, getStoredPrefs } = useCookieConsent();
  const stored = getStoredPrefs();
  const [prefs, setPrefs] = useState<Preferences>(stored);

  useEffect(() => { setPrefs(getStoredPrefs()); }, [open]);

  if (!open) return null;

  const handleSave = () => { savePrefs(prefs); onClose(); };

  const toggle = (key: keyof Preferences) => {
    if (key === "necessary") return;
    setPrefs(p => ({ ...p, [key]: !p[key] }));
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className="relative bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full max-w-[440px] max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h3 className="text-base font-bold text-foreground">Preferenze cookie</h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-foreground/5 transition-colors"><X size={16} /></button>
        </div>
        <div className="p-5 space-y-5">
          {[
            { key: "necessary" as const, label: "Necessari", desc: "Essenziali per il funzionamento del sito. Non possono essere disattivati.", disabled: true },
            { key: "analytics" as const, label: "Analitici", desc: "Ci aiutano a capire come viene utilizzato il sito e a migliorarne contenuti e performance.", disabled: false },
            { key: "marketing" as const, label: "Marketing", desc: "Possono essere usati per misurare campagne o mostrare contenuti più pertinenti.", disabled: false },
          ].map(item => (
            <div key={item.key} className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                <div className="text-[11px] text-secondary mt-0.5 leading-relaxed">{item.desc}</div>
              </div>
              <button
                onClick={() => toggle(item.key)}
                disabled={item.disabled}
                className={`relative w-10 h-6 rounded-full transition-colors flex-shrink-0 ${item.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${prefs[item.key] ? "bg-accent" : "bg-border"}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${prefs[item.key] ? "translate-x-[18px]" : "translate-x-[2px]"}`} />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 p-5 border-t border-border">
          <button onClick={() => { rejectNonNecessary(); onClose(); }} className="text-[11px] font-medium px-4 py-2 rounded-full border border-border text-secondary hover:text-foreground transition-colors">Rifiuta non necessari</button>
          <button onClick={handleSave} className="text-[11px] font-medium px-4 py-2 rounded-full border border-border text-secondary hover:text-foreground transition-colors">Salva preferenze</button>
          <button onClick={() => { acceptAll(); onClose(); }} className="text-[11px] font-semibold px-4 py-2 rounded-full bg-foreground text-white hover:bg-foreground/85 transition-colors ml-auto">Accetta tutti</button>
        </div>
      </motion.div>
    </div>
  );
}
