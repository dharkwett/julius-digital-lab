export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-70 [mask-image:radial-gradient(80%_60%_at_50%_20%,black,transparent)]" />
      <div className="animate-drift absolute -top-40 -left-32 h-[52rem] w-[52rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--aqua)_22%,transparent),transparent_65%)] blur-3xl" />
      <div className="animate-drift-slow absolute -top-24 right-[-14rem] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--violet)_20%,transparent),transparent_65%)] blur-3xl" />
      <div className="animate-drift-slow absolute bottom-[-20rem] left-1/3 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--amber)_10%,transparent),transparent_65%)] blur-3xl" />
    </div>
  );
}
