# Flowapp Studio

Web app e app su misura per aziende. Progettiamo e sviluppiamo software costruito intorno ai processi reali.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Linguaggio:** TypeScript
- **Stile:** Tailwind CSS v4
- **Animazioni:** Framer Motion
- **Icone:** Lucide React
- **Font:** Inter (Google Fonts)
- **Colore primario:** `#338181`

## Avvio

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Comandi

```bash
npm run dev      # Avvia server di sviluppo
npm run build    # Build di produzione
npm run start    # Avvia server di produzione
npm run lint     # ESLint
```

## Pagine

| Route               | Pagina               |
| ------------------- | -------------------- |
| `/`                 | Home                 |
| `/soluzioni`        | Soluzioni            |
| `/work`             | Progetti             |
| `/work/[slug]`      | Dettaglio progetto   |
| `/come-lavoriamo`   | Come lavoriamo       |
| `/contatti`         | Contatti (configuratore) |

## Configuratore

Il configuratore di stima (`/contatti`) permette di ottenere una fascia di prezzo e tempistiche indicative in meno di due minuti, rispondendo a 5 domande. La stima viene mostrata prima di richiedere dati personali.

## Dati mock

- `projects.ts` — 4 progetti (casi studio)
- `services.ts` — 13 esempi di soluzioni realizzabili
- `testimonials.ts` — 3 testimonianze
- `technologies.ts` — 3 categorie tecnologiche

## Componenti

- `Configuratore` — Wizard multi-step per la stima
- `Header` — Navigazione con CTA "Calcola una stima"
- `Footer` — Footer semplificato
- `Container`, `SectionHeader`, `Button`, `ProjectCard`, `TestimonialCard`, `TechGrid`, `DashboardMockup`, `Reveal`
