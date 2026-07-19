export interface TechCategory {
  label: string;
  description: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  {
    label: "Applicazioni",
    description:
      "Per creare interfacce moderne, veloci e accessibili su qualsiasi dispositivo.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend e database",
    description:
      "Per gestire utenti, dati, logiche applicative, notifiche, integrazioni e automazioni.",
    items: ["Node.js", "Python", "Laravel", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    label: "Pubblicazione e integrazioni",
    description:
      "Per pubblicare, aggiornare e collegare il software in modo affidabile e scalabile.",
    items: ["Vercel", "Docker", "API", "Servizi cloud"],
  },
];
