import { ArrowRight, FileDown, MapPin } from "lucide-react";
import { CONTACT, SITE, STACK_GROUPS } from "@/config/constants";
import { MVP_EMAIL_HREF, TEACHING_EMAIL_HREF } from "@/lib/mailto";

const ARCHITECTURE_LAYERS = [
  ["client", "React · Next.js", "SSR, protected routes, typed UI"],
  ["api", "NestJS modules", "auth · appointment · payment · audit"],
  ["data", "PostgreSQL · MongoDB", "TypeORM migrations, Mongoose models"],
  ["ops", "CI · Docker · Vercel", "lint → types → tests → build"],
] as const;

const STATS = [
  { value: "20+", label: "NestJS modules in one platform" },
  { value: "8", label: "full-stack apps on GitHub" },
  { value: "28 wk", label: "intensive engineering program" },
  { value: "Daily", label: "technical instruction" },
];

const MARQUEE_ITEMS = STACK_GROUPS.flatMap((group) => group.items);

const SystemVisual = () => (
  <div aria-hidden="true" className="reveal relative">
    <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-cyan-300/40 via-white/5 to-violet-400/40 opacity-60 blur-sm" />
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/90 p-5 backdrop-blur-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </div>
        <span className="font-mono text-xs text-neutral-500">architecture.map.ts</span>
      </div>

      <div className="grid gap-2.5 font-mono text-[13px]">
        {ARCHITECTURE_LAYERS.map(([layer, tech, note], index) => (
          <div
            key={layer}
            className="grid grid-cols-[72px_1fr] items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5"
          >
            <span className="text-cyan-300">
              <span className="text-neutral-600">0{index + 1}</span> {layer}
            </span>
            <span>
              <span className="block font-sans text-sm font-medium text-white">{tech}</span>
              <span className="mt-0.5 block text-neutral-500">{note}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-2.5 font-mono text-xs text-emerald-200">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        ci: lint ✓ types ✓ tests ✓ build ✓
      </div>
    </div>
  </div>
);

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden px-4 pb-10 pt-32 sm:px-6 sm:pt-40 lg:px-8">
    <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
    <div aria-hidden="true" className="aurora pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]" />

    <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 font-medium text-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {CONTACT.availability}
          </span>
          <span className="inline-flex items-center gap-1.5 text-neutral-400">
            <MapPin size={14} aria-hidden="true" />
            {CONTACT.location}
          </span>
        </div>

        <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]">
          I build complex systems <span className="text-gradient">and make them understandable.</span>
        </h1>
        <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-neutral-400">
          Full-stack engineer and technical trainer working in Next.js, NestJS, and TypeScript. I
          help startups ship maintainable products and help developers truly understand modern
          software architecture.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a href={TEACHING_EMAIL_HREF} className="btn-primary">
            Hire me for instruction <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href={MVP_EMAIL_HREF} className="btn-ghost">
            Discuss your MVP
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-neutral-300 hover:text-white"
          >
            <FileDown size={16} aria-hidden="true" /> Resume
          </a>
        </div>
      </div>

      <SystemVisual />
    </div>

    <dl className="container-x mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] lg:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-ink-950/90 p-5 sm:p-6">
          <dt className="text-sm text-neutral-500">{stat.label}</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
        </div>
      ))}
    </dl>

    <div className="marquee-mask container-x mt-12 overflow-hidden" aria-label="Technologies I work with">
      <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
          <li
            key={`${item}-${index}`}
            aria-hidden={index >= MARQUEE_ITEMS.length ? true : undefined}
            className="whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-xs text-neutral-400"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default HeroSection;
