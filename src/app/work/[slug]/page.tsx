import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ProjectScreens } from "@/components/ProjectScreens";
import { ArrowLeft, Calculator } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.payoff}`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const v = project.visual;

  return (
    <>
      {/* Hero */}
      <section
        className="pt-[120px] pb-16 md:pt-[160px] md:pb-28 relative overflow-hidden"
        style={{ background: v.bg }}
      >
        <div className="absolute top-0 left-0 right-0 h-px opacity-20" style={{ background: `linear-gradient(90deg, transparent, ${v.accentSecondary || v.textPrimary}, transparent)` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:opacity-70"
            style={{ color: v.textSecondary }}
          >
            <ArrowLeft size={16} />
            Torna ai progetti
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div className="pt-1">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-xs uppercase tracking-[0.1em] font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: v.accentSecondary ? v.accentSecondary + "20" : v.textPrimary + "15", color: v.accentSecondary || v.textPrimary }}>
                    {project.category}
                  </span>
                  <span className="text-xs font-medium" style={{ color: v.textSecondary }}>{project.industry}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full border" style={{ color: v.textSecondary, borderColor: v.textSecondary + "40" }}>Case study dimostrativo</span>
                </div>
                <h1 className="text-[40px] md:text-[52px] lg:text-[64px] leading-[1.05] font-bold tracking-[-0.02em]" style={{ color: v.textPrimary }}>
                  {project.title}
                </h1>
                <p className="mt-3 text-lg md:text-xl font-medium opacity-75" style={{ color: v.textSecondary }}>{project.payoff}</p>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-[520px] opacity-80" style={{ color: v.textSecondary }}>{project.description}</p>
                <div className="mt-6 h-px w-16 opacity-20" style={{ background: v.accentSecondary || v.textPrimary }} />
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-2xl overflow-hidden" style={{ background: v.surface, border: `1px solid ${v.border}` }}>
                <ProjectVisual project={project} variant="hero" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Contesto e obiettivo
              </h2>
            </Reveal>
            <div className="lg:col-span-2 space-y-5">
              <Reveal delay={0.1}>
                <div className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="text-sm uppercase tracking-[0.1em] font-semibold text-accent mb-2">
                    Il problema
                  </h3>
                  <p className="text-base text-secondary leading-relaxed">
                    {project.context}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="bg-white border border-border rounded-2xl p-6">
                  <h3 className="text-sm uppercase tracking-[0.1em] font-semibold text-accent mb-2">
                    La sfida tecnica
                  </h3>
                  <p className="text-base text-secondary leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution & What we built */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Soluzione
              </h2>
            </Reveal>
            <div className="lg:col-span-2">
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8">
                  <h3 className="text-sm uppercase tracking-[0.1em] font-semibold text-secondary mb-4">
                    Cosa abbiamo realizzato
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.whatWeBuilt.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 bg-bg-alt border border-border rounded-xl p-4 hover:bg-white transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Full mockups gallery */}
      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-10">
              Schermate del prodotto
            </h2>
          </Reveal>
          <div className="max-w-[1000px] mx-auto">
            <ProjectScreens project={project} />
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-10">
              Il processo
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1">
            {[
              { n: "01", t: "Consulenza", d: "Analisi dei processi attuali e definizione obiettivi." },
              { n: "02", t: "Analisi", d: "Mappatura flussi, dati, utenti e requisiti tecnici." },
              { n: "03", t: "Design", d: "Wireframe, prototipi e design system del prodotto." },
              { n: "04", t: "Sviluppo", d: "Frontend, backend, database e prime integrazioni." },
              { n: "05", t: "Test", d: "Verifica funzionale, permessi, performance e sicurezza." },
              { n: "06", t: "Rilascio", d: "Deploy graduale, formazione e monitoraggio iniziale." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="bg-bg-alt border border-border rounded-xl p-4 h-full hover:bg-white transition-colors">
                  <span className="text-lg font-bold text-accent/25">{s.n}</span>
                  <h4 className="text-xs font-bold text-foreground mt-1">{s.t}</h4>
                  <p className="text-[10px] text-secondary leading-relaxed mt-1">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech & Outcome */}
      <section className="py-16 md:py-24 bg-bg-alt border-y border-border">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <Reveal>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Tecnologie utilizzate
                </h2>
                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {project.techReasoning}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 bg-white border border-border rounded-full text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal delay={0.1}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
                  Impatto atteso
                </h2>
                <p className="text-sm text-secondary leading-relaxed mb-5">
                  {project.outcome}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white border border-border rounded-xl p-4 text-center"
                    >
                      <p className="text-xl font-bold tracking-tight text-accent">
                        {m.value}
                      </p>
                      <p className="text-[10px] text-secondary mt-1 leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: v.bg }}>
        <Container>
          <div className="text-center max-w-[520px] mx-auto">
            <Reveal>
              <h2
                className="text-[28px] md:text-[38px] leading-[1.08] font-bold tracking-[-0.02em]"
                style={{ color: v.textPrimary }}
              >
                Vuoi costruire una soluzione simile per la tua azienda?
              </h2>
              <p className="mt-4 text-base leading-relaxed opacity-70 max-w-[440px] mx-auto" style={{ color: v.textSecondary }}>
                Partiamo dai tuoi processi reali e adattiamo funzionalità, tecnologie e budget alle tue esigenze.
              </p>
              <div className="mt-8">
                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full border transition-all duration-300 hover:bg-white/10"
                  style={{
                    borderColor: v.accentSecondary || v.textSecondary,
                    color: v.textPrimary,
                  }}
                >
                  <Calculator size={17} />
                  Calcola una stima
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
