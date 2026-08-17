import { ArrowUpRight, Github as GithubIcon } from "lucide-react";
import { MagneticButton, Reveal, Section, SectionHeader } from "@/components/glass";
import { profile } from "@/content/portfolio";

// Decorative activity grid — deterministic, no external API required.
const cells = Array.from({ length: 7 * 26 }, (_, i) => (i * 37) % 11);

export function Github() {
  return (
    <Section id="github">
      <SectionHeader
        eyebrow="08 — Open Source"
        title="Code, Experiments & Open Source"
        description="Where the unfinished ideas, experiments and work-in-progress builds live."
      />

      <Reveal className="mt-14">
        <div className="glass glass-sheen grid overflow-hidden rounded-2xl lg:grid-cols-[1fr_1.2fr]">
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-glass-border bg-[color-mix(in_oklab,white_6%,transparent)]">
                <GithubIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  GitHub
                </div>
                <div className="truncate font-display text-lg font-semibold">
                  @{profile.githubUser}
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Repositories, experiments and the code behind projects I'm building. Always something
              in progress.
            </p>
            <div className="mt-8">
              <MagneticButton href={profile.github} external>
                View GitHub
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          <div className="border-t border-glass-border p-8 md:p-10 lg:border-t-0 lg:border-l">
            <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Activity
            </div>
            <div
              aria-hidden
              className="mt-5 grid grid-flow-col grid-rows-7 gap-1 overflow-hidden"
            >
              {cells.map((v, i) => (
                <span
                  key={i}
                  style={{
                    animationDelay: `${(i % 26) * 0.05}s`,
                    background:
                      v > 7
                        ? "color-mix(in oklab, var(--aqua) 70%, transparent)"
                        : v > 4
                          ? "color-mix(in oklab, var(--aqua) 35%, transparent)"
                          : "color-mix(in oklab, white 6%, transparent)",
                  }}
                  className="animate-fade-in aspect-square rounded-[3px]"
                />
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] text-muted-foreground">
              Illustrative visualisation — visit GitHub for live activity.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
