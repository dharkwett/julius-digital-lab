import { GlassPanel, Reveal, Section, SectionHeader } from "@/components/glass";
import { journey, stack } from "@/content/portfolio";

export function Journey() {
  return (
    <Section id="development">
      <SectionHeader
        eyebrow="01 — Development"
        title="My Software Development Journey"
        description="Not a wall of logos. A path: how curiosity about technology turned into designing, building and shipping real digital products."
      />

      <ol className="relative mt-16 space-y-4 md:space-y-6">
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[15px] w-px bg-gradient-to-b from-transparent via-[color-mix(in_oklab,var(--aqua)_35%,transparent)] to-transparent md:left-[19px]"
        />
        {journey.map((step, i) => (
          <Reveal as="li" key={step.phase} delay={i * 80} className="relative pl-12 md:pl-16">
            <span className="absolute top-6 left-0 grid h-8 w-8 place-items-center rounded-full border border-glass-border bg-background font-mono text-[10px] text-aqua md:h-10 md:w-10 md:text-[11px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <GlassPanel className="p-6 transition-transform duration-500 hover:-translate-y-1 md:p-8">
              <div className="font-mono text-[11px] tracking-[0.28em] text-aqua">{step.phase}</div>
              <h3 className="mt-3 text-xl font-semibold md:text-2xl">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {step.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-glass-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </GlassPanel>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-lg font-semibold">Technology constellation</h3>
          <span className="font-mono text-[11px] text-muted-foreground">explored / built with</span>
        </div>
        <div className="hairline mt-4" />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {stack.map((tech, i) => (
            <li
              key={tech}
              style={{ animationDelay: `${(i % 6) * 0.6}s` }}
              className="glass glass-sheen animate-float-y rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
