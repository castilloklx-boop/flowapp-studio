"use client";

import Link from "next/link";
import { Container } from "./Container";
import { useState } from "react";
import { CookiePreferencesModal } from "./CookieBanner";

const footerLinks = {
  pagine: [
    { href: "/soluzioni", label: "Soluzioni" },
    { href: "/work", label: "Progetti" },
    { href: "/come-lavoriamo", label: "Come lavoriamo" },
    { href: "/contatti", label: "Contatti" },
  ],
  social: [
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://github.com", label: "GitHub" },
  ],
};

export function Footer() {
  const [showPrefs, setShowPrefs] = useState(false);

  return (
    <footer className="bg-bg-alt border-t border-border">
      <Container>
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
            <div>
              <Link href="/" className="text-lg font-bold tracking-tight text-foreground">Flowapp Studio</Link>
              <p className="mt-3 text-sm text-secondary max-w-[340px] leading-relaxed">
                Flowapp Studio sviluppa web app, app mobile e software gestionali su misura per aziende.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] font-semibold text-secondary mb-4">Pagine</p>
                <ul className="space-y-2.5">
                  {footerLinks.pagine.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-secondary hover:text-foreground transition-colors">{link.label}</Link></li>)}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] font-semibold text-secondary mb-4">Contatti</p>
                <ul className="space-y-2.5">
                  {footerLinks.social.map((link) => <li key={link.label}><a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-secondary hover:text-foreground transition-colors">{link.label}</a></li>)}
                  <li><a href="mailto:hello@flowapp.studio" className="text-sm text-secondary hover:text-foreground transition-colors">hello@flowapp.studio</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <p className="text-xs text-secondary">&copy; {new Date().getFullYear()} Flowapp Studio.</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/privacy-policy" className="text-xs text-secondary hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="text-xs text-secondary hover:text-foreground transition-colors">Cookie Policy</Link>
              <button onClick={() => setShowPrefs(true)} className="text-xs text-secondary hover:text-foreground transition-colors">Preferenze cookie</button>
            </div>
          </div>

          <p className="mt-4 text-[10px] text-secondary/50 leading-relaxed max-w-[500px]">
            I progetti mostrati includono case study dimostrativi basati su scenari realistici e soluzioni tecnicamente fattibili.
          </p>
        </div>
      </Container>
      <CookiePreferencesModal open={showPrefs} onClose={() => setShowPrefs(false)} />
    </footer>
  );
}
