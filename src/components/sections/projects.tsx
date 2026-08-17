import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/glass";
import { projects, type Project } from "@/content/portfolio";

function host(url: string) {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={(index % 2) * 90}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass glass-sheen group block overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1.5"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-glass-border">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
          ) : (
            <div className="liquid-bg relative grid h-full w-full place-items-center bg-[color-mix(in_oklab,white_3%,transparent)]">
              <div className="grid-bg absolute inset-0 opacity-60" />
              <span className="relative font-display text-4xl font-semibold text-foreground/25 sm:text-5xl">
                {project.name}
              </span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-[color-mix(in_oklab,var(--background)_70%,transparent)] px-3 py-1.5 font-mono text-[11px] backdrop-blur-md">
              {host(project.url)}
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4 p-6">
          <div className="min-w-0">
            <div className="font-mono text-[11px] tracking-[0.2em] text-aqua uppercase">
              {project.category}
            </div>
            <h3 className="mt-2 truncate text-xl font-semibold">{project.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Visit Live Site
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="02 — Built"
        title="Things I've Built"
        description="Live websites and digital products. Every card opens the real thing in a new tab."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.url} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
