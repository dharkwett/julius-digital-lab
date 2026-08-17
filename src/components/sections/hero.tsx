import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { MagneticButton } from "@/components/glass";
import { cv, profile } from "@/content/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-20 md:px-8"
    >
      <div className="liquid-bg animate-drift pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-[38rem] opacity-70 blur-2xl" />

      <div className="inline-flex w-fit items-center gap-3 rounded-full border border-glass-border bg-[color-mix(in_oklab,white_5%,transparent)] px-4 py-2 backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse-dot" />
        <span className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground sm:text-[11px]">
          {profile.status}
        </span>
      </div>

      <h1 className="mt-8 max-w-5xl text-[clamp(2.6rem,8vw,6rem)] leading-[0.95] font-semibold text-balance">
        <span className="block text-muted-foreground/80 text-[0.34em] font-mono tracking-[0.3em] uppercase">
          {profile.name}
        </span>
        <span className="text-gradient mt-4 block">{profile.headline}</span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {profile.intro}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <MagneticButton href="#projects">
          Explore My Work
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </MagneticButton>
        <MagneticButton href={cv.url} download={cv.fileName} variant="ghost">
          <Download className="h-4 w-4" />
          Download CV
        </MagneticButton>
      </div>

      <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-glass-border sm:grid-cols-3">
        {[
          ["Focus", "Software • AI • Design"],
          ["Based in", profile.location],
          ["Currently", "Building & shipping"],
        ].map(([k, v]) => (
          <div key={k} className="bg-[color-mix(in_oklab,white_4%,transparent)] px-5 py-4 backdrop-blur-md">
            <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              {k}
            </dt>
            <dd className="mt-1.5 text-sm font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <a
        href="#development"
        className="mt-16 inline-flex items-center gap-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full border border-glass-border animate-float-y">
          <ArrowDown className="h-4 w-4" />
        </span>
        Scroll to my development journey
      </a>
    </section>
  );
}
