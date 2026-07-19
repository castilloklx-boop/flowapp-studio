import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowapp.studio"),
  title: {
    default: "Flowapp Studio — Web app e app su misura per aziende",
    template: "%s — Flowapp Studio",
  },
  description:
    "Progettiamo e sviluppiamo web app, app mobile, gestionali, dashboard e portali su misura. Sostituiamo Excel, centralizziamo dati e automatizziamo processi aziendali.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Flowapp Studio — Web app e app su misura per aziende",
    description:
      "Web app e app su misura costruite intorno ai tuoi processi aziendali. Ricevi una prima stima in meno di due minuti.",
    type: "website",
    locale: "it_IT",
    images: [{ url: "/logo.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "Inter, sans-serif", maxWidth: "720px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: 800 }}>Flowapp Studio</h1>
            <p style={{ fontSize: "1.2rem", color: "#555", marginTop: "1rem" }}>Web app e app su misura per la tua azienda. Progettiamo e sviluppiamo gestionali, dashboard, portali e strumenti digitali.</p>
            <p style={{ marginTop: "1rem" }}><a href="/contatti" style={{ color: "#338181" }}>Richiedi una stima →</a></p>
            <hr style={{ margin: "2rem 0", borderColor: "#e5e5e5" }} />
            <p style={{ fontSize: "0.9rem", color: "#999" }}>Attiva JavaScript per vedere il sito completo con progetti, case study e configuratore interattivo.</p>
          </div>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
