import { ArrowUpRight, Github as GithubIcon, Linkedin, Mail, Phone } from "lucide-react";
import { MagneticButton, Reveal, Section } from "@/components/glass";
import { profile } from "@/content/portfolio";

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, Icon: Phone },
    {
      label: "GitHub",
      value: `@${profile.githubUser}`,
      href: profile.github,
      Icon: GithubIcon,
      external: true,
    },
    {
      label: "LinkedIn",
      value: profile.linkedin ? "View profile" : "Add your LinkedIn URL",
      href: profile.linkedin,
      Icon: Linkedin,
      external: true,
    },
  ];

  return (
    <Section id="contact" className="pb-16">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="liquid-bg animate-drift pointer-events-none absolute inset-0 opacity-60 blur-2xl" />
          <div className="relative">
            <span className="font-mono text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
              10 — Contact
            </span>
            <h2 className="mt-5 max-w-3xl text-3xl leading-[1.05] font-semibold text-balance sm:text-4xl md:text-5xl">
              Have an idea worth building?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              I'm interested in building useful digital products, experimenting with emerging
              technology, collaborating with creative people, and working on interesting projects.
            </p>

            <div className="mt-9">
              <MagneticButton href={`mailto:${profile.email}`}>
                <Mail className="h-4 w-4" />
                Send me an email
              </MagneticButton>
            </div>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-glass-border sm:grid-cols-2">
              {links.map(({ label, value, href, Icon, external }) => {
                const disabled = !href;
                const Wrapper = disabled ? "div" : "a";
                return (
                  <li key={label}>
                    <Wrapper
                      {...(disabled
                        ? {}
                        : {
                            href,
                            ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
                          })}
                      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 bg-[color-mix(in_oklab,white_4%,transparent)] px-6 py-5 transition-colors hover:bg-[color-mix(in_oklab,white_8%,transparent)]"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-aqua" />
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                          {label}
                        </span>
                        <span className="block truncate text-sm">{value}</span>
                      </span>
                      {!disabled ? (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      ) : null}
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-5 pb-12 md:px-8">
      <div className="hairline" />
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 pt-7">
        <div className="min-w-0">
          <div className="truncate font-display text-sm font-semibold">{profile.name}</div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            {profile.status}
          </div>
        </div>
        <div className="font-mono text-[11px] text-muted-foreground">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
