import { Reveal, Section } from "@/components/glass";

const pillars = [
  ["Curiosity", "I start by taking things apart to understand how they work."],
  ["Building", "Ideas only matter once someone can actually use them."],
  ["Design", "How it feels is part of how it works."],
  ["Learning", "Every project leaves me with something new to try next."],
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse-dot" />
            <span className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              09 — About
            </span>
          </div>
          <h2 className="mt-5 text-3xl leading-[1.05] font-semibold text-balance sm:text-4xl md:text-5xl">
            I Don't Just Learn Technology.
            <span className="text-gradient block">I Build With It.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            I'm a young Ghanaian developer and designer with a background in science and a growing
            focus on software, machine learning and digital products. I like taking an idea from a
            rough sketch to something running in a browser — designing it, coding it, and improving
            it once real people touch it.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Between client design work, web builds and AI experiments, the constant is the same:
            curiosity, then execution.
          </p>
        </Reveal>

        <div className="grid gap-px self-start overflow-hidden rounded-2xl border border-glass-border sm:grid-cols-2">
          {pillars.map(([title, body], i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full bg-[color-mix(in_oklab,white_4%,transparent)] p-7 backdrop-blur-md">
                <div className="font-display text-base font-semibold">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
