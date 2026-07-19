import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project }: ProjectCardProps) {
  const v = project.visual;
  return (
    <Link href={`/work/${project.slug}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] } }}
        className="rounded-2xl overflow-hidden border border-border bg-white hover:border-foreground/10 hover:shadow-[0_16px_56px_rgba(0,0,0,0.09)] transition-all duration-400 h-full flex flex-col"
      >
        <div className="aspect-[16/10] w-full relative overflow-hidden flex-shrink-0" style={{ background: v.bg }}>
          <div className="group-hover:scale-[1.02] transition-transform duration-500 ease-out origin-center h-full">
            <ProjectVisual project={project} variant="card" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent pointer-events-none" />
          <div className="absolute top-3 left-3 flex gap-1.5">
            <span className="text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md" style={{ background: "rgba(255,255,255,0.18)", color: "#fff", backdropFilter: "blur(10px)" }}>
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-[8px] font-medium px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.7)", backdropFilter: "blur(6px)" }}>
              Demo
            </span>
          </div>
        </div>
        <div className="p-4 md:p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="text-base md:text-lg font-bold tracking-tight text-foreground leading-tight">{project.title}</h3>
            <ArrowRight size={14} className="text-secondary/30 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 flex-shrink-0 -translate-x-1 group-hover:translate-x-0" />
          </div>
          <p className="text-[11px] text-secondary leading-relaxed">{project.payoff}</p>
          <p className="text-xs text-secondary/80 leading-relaxed line-clamp-2 mt-2 flex-1">{project.shortDescription}</p>
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-border/60">
            <div className="flex flex-wrap gap-1">{project.technologies.slice(0, 3).map(t => <span key={t} className="text-[9px] font-medium px-1.5 py-0.5 bg-bg-alt rounded-full text-secondary/70 group-hover:text-secondary transition-colors">{t}</span>)}</div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
interface ProjectCardProps { project: Project }
