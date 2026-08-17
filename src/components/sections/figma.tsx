import { ArrowUpRight } from "lucide-react";
import { MagneticButton, Reveal, Section, SectionHeader } from "@/components/glass";
import { figmaProjects } from "@/content/portfolio";

export function Figma() {
  return (
    <Section id="figma">
      <SectionHeader
        eyebrow="04 — Figma"
        title="Designed in Figma"
        description="Interface and product design work, prototyped end-to-end."
      />

      <div className="mt-14 space-y-8">
        {figmaProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="glass glass-sheen group grid overflow-hidden rounded-2xl lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative flex max-h-[34rem] items-start justify-center overflow-hidden bg-[color-mix(in_oklab,black_28%,transparent)] p-8">
                <div className="grid-bg absolute inset-0 opacity-50" />
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  loading="lazy"
                  className="relative w-full max-w-xs rounded-xl border border-glass-border object-cover object-top shadow-[0_30px_80px_-30px_black] transition-transform duration-[900ms] ease-out group-hover:-translate-y-2"
                />
              </div>

              <div className="p-7 md:p-10">
                <div className="font-mono text-[11px] tracking-[0.24em] text-aqua uppercase">
                  Figma Prototype
                </div>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                <dl className="mt-7 grid gap-px overflow-hidden rounded-xl border border-glass-border sm:grid-cols-2">
                  {[
                    ["Role", p.role],
                    ["Design focus", p.focus],
                    ["Challenge", p.challenge],
                    ["Approach", p.approach],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="bg-[color-mix(in_oklab,white_4%,transparent)] px-5 py-4"
                    >
                      <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                        {k}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed">{v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8">
                  <MagneticButton href={p.prototypeUrl} external>
                    View Prototype
                    <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
