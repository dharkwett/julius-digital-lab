import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/glass";
import { designs, type DesignItem } from "@/content/portfolio";
import { cn } from "@/lib/utils";

function Lightbox({ item, onClose }: { item: DesignItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-[color-mix(in_oklab,var(--background)_82%,transparent)] p-4 backdrop-blur-xl"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass animate-scale-in grid max-h-[90svh] w-full max-w-5xl overflow-hidden rounded-2xl md:grid-cols-[1.4fr_1fr]"
      >
        <div className="max-h-[45svh] overflow-auto bg-[color-mix(in_oklab,black_35%,transparent)] md:max-h-[90svh]">
          <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
        </div>
        <div className="relative overflow-auto p-7">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-glass-border transition-colors hover:bg-[color-mix(in_oklab,white_8%,transparent)]"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="font-mono text-[11px] tracking-[0.24em] text-aqua uppercase">
            {item.category}
          </div>
          <h3 className="mt-3 pr-10 text-2xl font-semibold">{item.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          <div className="mt-6 border-t border-glass-border pt-4">
            <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Tools
            </div>
            <div className="mt-1.5 text-sm">{item.tools}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Design() {
  const [active, setActive] = useState<DesignItem | null>(null);

  return (
    <Section id="design">
      <SectionHeader
        eyebrow="03 — Design"
        title="Designing Beyond Code"
        description="My work isn't limited to programming. Branding, packaging, interfaces, posters and creative experiments — visual thinking is part of how I build."
      />

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {designs.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 80} className="break-inside-avoid">
            <button
              onClick={() => setActive(item)}
              className="glass glass-sheen group relative block w-full overflow-hidden rounded-2xl text-left transition-transform duration-500 hover:-translate-y-1.5"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]",
                  item.span === "tall" ? "aspect-[4/5]" : item.span === "wide" ? "aspect-[16/10]" : "aspect-square",
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_oklab,var(--background)_92%,transparent)] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-mono text-[10px] tracking-[0.22em] text-aqua uppercase">
                  {item.category}
                </div>
                <div className="mt-1.5 text-base font-semibold">{item.title}</div>
                <div className="mt-1 max-h-0 overflow-hidden text-xs text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100">
                  {item.description}
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active ? <Lightbox item={active} onClose={() => setActive(null)} /> : null}
    </Section>
  );
}
