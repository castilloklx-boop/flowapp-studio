"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/soluzioni", label: "Soluzioni" },
  { href: "/work", label: "Progetti" },
  { href: "/come-lavoriamo", label: "Come lavoriamo" },
  { href: "/contatti", label: "Contatti" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_0_#e5e5e5]" : ""
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground whitespace-nowrap">
              <img src="/logo.png" alt="Flowapp Studio" className="h-7 md:h-8 w-auto" />
              Flowapp Studio
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-accent bg-accent/8"
                      : "text-secondary hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-3">
                <Button href="/contatti" variant="primary">
                  Calcola una stima
                </Button>
              </div>
            </nav>

            <button
              onClick={toggleMobile}
              className="md:hidden p-2 -mr-2 rounded-full text-foreground hover:bg-foreground/5 transition-colors"
              aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden pt-[72px]">
          <div className="flex flex-col h-full">
            <Container className="flex-1 flex flex-col justify-center">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-4 text-2xl font-semibold rounded-xl transition-colors ${
                      pathname === link.href
                        ? "text-accent bg-accent/8"
                        : "text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-10">
                <Button href="/contatti" variant="primary" className="w-full text-base py-4">
                  Calcola una stima
                </Button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
