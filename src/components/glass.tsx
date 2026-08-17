import { useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function GlassPanel({
  children,
  className,
  sheen = true,
}: {
  children: ReactNode;
  className?: string;
  sheen?: boolean;
}) {
  return (
    <div className={cn("glass rounded-xl", sheen && "glass-sheen", className)}>{children}</div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-pulse-dot" />
        <span className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-5 text-3xl leading-[1.05] font-semibold text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-5 py-24 md:px-8 md:py-32", className)}>
      {children}
    </section>
  );
}

type MagneticProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  download?: string;
  external?: boolean;
  variant?: "primary" | "ghost";
  children: ReactNode;
};

/** Button / link with a subtle magnetic pull toward the cursor. */
export function MagneticButton({
  href,
  download,
  external,
  variant = "primary",
  className,
  children,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background,box-shadow] duration-300 will-change-transform",
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-[0_10px_40px_-12px_var(--aqua)] hover:shadow-[0_16px_50px_-10px_var(--aqua)]"
      : "glass glass-sheen text-foreground hover:border-[color-mix(in_oklab,var(--aqua)_45%,transparent)]",
    className,
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        {...(download ? { download } : {})}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
}
