import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/content/portfolio";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-4 rounded-full border px-4 py-2.5 transition-all duration-500 md:px-6",
          scrolled
            ? "border-glass-border bg-[color-mix(in_oklab,var(--background)_78%,transparent)] shadow-[0_20px_60px_-30px_black] backdrop-blur-xl"
            : "border-transparent bg-[color-mix(in_oklab,white_3%,transparent)] backdrop-blur-md",
        )}
      >
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-glass-border bg-[color-mix(in_oklab,var(--aqua)_16%,transparent)] font-display text-xs font-bold">
            JB
          </span>
          <span className="truncate font-display text-sm font-semibold tracking-tight">
            Julius Boamah
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-1.5 text-[13px] text-muted-foreground transition-colors hover:bg-[color-mix(in_oklab,white_7%,transparent)] hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full border border-glass-border lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 lg:hidden">
          <ul className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-[color-mix(in_oklab,white_7%,transparent)] hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
