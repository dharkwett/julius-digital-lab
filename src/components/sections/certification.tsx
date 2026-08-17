import { useEffect, useState } from "react";
import { Maximize2, ShieldCheck, X } from "lucide-react";
import { MagneticButton, Reveal, Section, SectionHeader } from "@/components/glass";
import { certification } from "@/content/portfolio";

export function Certification() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Section id="certification">
      <SectionHeader
        eyebrow="06 — Certification"
        title="Certification & Continuous Learning"
        description="Formal learning alongside self-directed building."
      />

      <Reveal className="mt-14">
        <div className="glass grid overflow-hidden rounded-2xl lg:grid-cols-[1.3fr_1fr]">
          <button
            onClick={() => setOpen(true)}
            className="group relative block bg-[color-mix(in_oklab,black_30%,transparent)] p-6 md:p-8"
            aria-label="Open certificate in larger viewer"
          >
            <img
              src={certification.image}
              alt={`${certification.provider} ${certification.program} certificate`}
              loading="lazy"
              className="w-full rounded-xl border border-glass-border shadow-[0_30px_80px_-35px_black] transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute right-10 bottom-10 grid h-10 w-10 place-items-center rounded-full border border-glass-border bg-[color-mix(in_oklab,var(--background)_70%,transparent)] opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>

          <div className="p-7 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-glass-border px-3 py-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-aqua" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
                {certification.provider}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold">{certification.program}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {certification.title}
            </p>

            <dl className="mt-7 space-y-4">
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Date of issue
                </dt>
                <dd className="mt-1 text-sm">{certification.date}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Programme
                </dt>
                <dd className="mt-1 text-sm">{certification.note}</dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Skills / focus
                </dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {certification.focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-glass-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton variant="ghost" onClick={() => setOpen(true)}>
                <Maximize2 className="h-4 w-4" />
                View Certificate
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
          className="animate-fade-in fixed inset-0 z-[100] grid place-items-center bg-[color-mix(in_oklab,var(--background)_85%,transparent)] p-4 backdrop-blur-xl"
        >
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="glass absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full"
          >
            <X className="h-4 w-4" />
          </button>
          <img
            src={certification.image}
            alt="Certificate full view"
            onClick={(e) => e.stopPropagation()}
            className="animate-scale-in max-h-[85svh] w-full max-w-5xl rounded-2xl border border-glass-border object-contain"
          />
        </div>
      ) : null}
    </Section>
  );
}
