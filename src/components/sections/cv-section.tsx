import { Download, ExternalLink, FileText } from "lucide-react";
import { MagneticButton, Reveal, Section, SectionHeader } from "@/components/glass";
import { cv, profile } from "@/content/portfolio";

export function CvSection() {
  return (
    <Section id="cv">
      <SectionHeader eyebrow="07 — Resume" title="My CV" description={cv.description} />

      <Reveal className="mt-14">
        <div className="glass glass-sheen grid overflow-hidden rounded-2xl md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center gap-5 p-8">
            <div className="grid h-16 w-14 shrink-0 place-items-center rounded-lg border border-glass-border bg-[color-mix(in_oklab,var(--aqua)_12%,transparent)]">
              <FileText className="h-6 w-6 text-aqua" />
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-lg font-semibold">{cv.fileName}</div>
              <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11px] text-muted-foreground">
                <span className="rounded-full border border-glass-border px-2 py-0.5">
                  {cv.fileType}
                </span>
                <span>{cv.fileSize}</span>
              </div>
            </div>
          </div>

          <p className="border-t border-glass-border px-8 py-6 text-sm leading-relaxed text-muted-foreground md:border-t-0 md:border-l">
            {profile.name} — developer, designer and digital product builder based in{" "}
            {profile.location}. The full document covers education, experience, projects and skills.
          </p>

          <div className="flex flex-wrap gap-3 border-t border-glass-border p-8 md:border-t-0 md:border-l">
            <MagneticButton href={cv.url} download={cv.fileName}>
              <Download className="h-4 w-4" />
              Download CV
            </MagneticButton>
            <MagneticButton href={cv.url} external variant="ghost">
              <ExternalLink className="h-4 w-4" />
              View CV
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
