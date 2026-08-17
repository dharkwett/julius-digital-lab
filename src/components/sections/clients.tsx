import { ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/glass";
import { caseStudies } from "@/content/portfolio";

export function Clients() {
  return (
    <Section id="clients">
      <SectionHeader
        eyebrow="05 — Clients"
        title="Built for Real People & Businesses"
        description="Work made for actual businesses and organisations — from brand material to live websites and product design."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {caseStudies.map((c, i) => (
          <Reveal key={c.business} delay={(i % 2) * 80}>
            <article className="glass glass-sheen group flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-7">
                <div className="min-w-0">
                  <div className="font-mono text-[10px] tracking-[0.22em] text-aqua uppercase">
                    {c.category}
                  </div>
                  <h3 className="mt-2 truncate text-xl font-semibold">{c.business}</h3>
                </div>
                {c.url ? (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${c.business}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-glass-border transition-colors hover:bg-[color-mix(in_oklab,white_8%,transparent)]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </div>

              {c.image ? (
                <div className="mx-7 overflow-hidden rounded-xl border border-glass-border">
                  <img
                    src={c.image}
                    alt={`${c.business} work`}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
              ) : null}

              <dl className="mt-6 grid gap-px border-t border-glass-border sm:grid-cols-3">
                {[
                  ["Challenge", c.challenge],
                  ["Solution", c.solution],
                  ["Result", c.result],
                ].map(([k, v]) => (
                  <div key={k} className="bg-[color-mix(in_oklab,white_3%,transparent)] px-6 py-5">
                    <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1.5 text-[13px] leading-relaxed text-foreground/85">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
