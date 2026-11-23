import { ArrowUpRight, Code2, Server, Sparkles, Workflow } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { CERTIFICATIONS, CREDENTIAL_ISSUERS, STACK_GROUPS } from "@/config/constants";

const STACK_ICONS = {
  "Frontend Systems": Code2,
  "Backend Architecture": Server,
  "Engineering Workflow": Workflow,
  "AI & Integrations": Sparkles,
} as const;

const StackSection = () => (
  <section id="stack" className="section">
    <div className="container-x">
      <SectionHeader
        eyebrow="Stack"
        title={
          <>
            Core tools, grouped by <span className="text-gradient">engineering responsibility.</span>
          </>
        }
        body="Everything listed here shows up in shipped code on GitHub, not just in a tutorial folder."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {STACK_GROUPS.map((group) => {
          const Icon = STACK_ICONS[group.title];
          return (
            <div key={group.title} className="card reveal p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="card reveal mt-4 grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Built through deliberate practice.
          </h3>
          <p className="mt-3 leading-7 text-neutral-400">
            Modern engineering skill is earned through deep repetition, production building, and
            continuous learning.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {CREDENTIAL_ISSUERS.map((credential) => (
              <li key={credential} className="chip-accent">
                {credential}
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {CERTIFICATIONS.slice(0, 6).map((certification) => (
            <li key={certification.name}>
              <a
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-white/15 hover:bg-white/[0.04]"
              >
                <span>
                  <span className="block text-sm font-medium text-white">{certification.name}</span>
                  <span className="mt-1 block text-xs text-neutral-500">{certification.issuer}</span>
                </span>
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-neutral-600 transition group-hover:text-white"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default StackSection;
