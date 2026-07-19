import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Marquee } from "@/components/Marquee";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { technologies } from "@/data/technologies";
import { HomeClient } from "./HomeClient";

export default function Home() {
  return (
    <>
      <HomeClient projects={projects} testimonials={testimonials} technologies={technologies} />
    </>
  );
}
