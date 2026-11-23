import Image from "next/image";
import { ArrowUpRight, ChevronDown, Github, Mail } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { FEATURED_PROJECTS, GITHUB_PROFILE, MORE_PROJECTS, type FeaturedProject } from "@/config/projects";
import { createMailto } from "@/lib/mailto";

const ProjectCard = ({ project, index }: { project: FeaturedProject; index: number }) => (
  <article className="card reveal grid gap-8 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:p-8">
    <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          placeholder="blur"
          sizes="(min-width: 1024px) 600px, 100vw"
          className="aspect-[16/10] w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {project.highlights.map((highlight) => (
          <div key={highlight.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <dt className="sr-only">{highlight.label}</dt>
            <dd>
              <span className="block text-lg font-semibold tracking-tight text-white">{highlight.value}</span>
              <span className="block text-xs leading-5 text-neutral-500">{highlight.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>

    <div className="flex flex-col">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
        {String(index + 1).padStart(2, "0")} · {project.label}
      </p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {project.title}
      </h3>
      <p className="mt-4 text-pretty leading-7 text-neutral-400">{project.problem}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>

      <details className="group mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] [&[open]]:bg-white/[0.035]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 text-sm font-medium text-white">
          Read the case study
          <ChevronDown
            size={16}
            aria-hidden="true"
            className="text-neutral-400 transition group-open:rotate-180"
          />
        </summary>
        <div className="grid gap-5 border-t border-white/[0.06] px-4 py-5 text-sm leading-6">
          <div>
            <h4 className="font-semibold text-white">Architecture</h4>
            <p className="mt-1.5 text-neutral-400">{project.architecture}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Key decisions</h4>
            <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-2 text-neutral-300">
                  <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300" />
                  {decision}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <h4 className="font-semibold text-white">Scalability thinking</h4>
              <p className="mt-1.5 text-neutral-400">{project.scaling}</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Teaching value</h4>
              <p className="mt-1.5 text-neutral-400">{project.teaching}</p>
            </div>
          </div>
        </div>
      </details>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
        {project.website ? (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn-ghost py-2.5">
            Live project <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        ) : null}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-link">
            <Github size={16} aria-hidden="true" /> Source
          </a>
        ) : null}
        <a
          href={createMailto(`${project.title} architecture walkthrough`, project.walkthroughBody)}
          className="btn-link"
        >
          <Mail size={16} aria-hidden="true" /> Request a walkthrough
        </a>
      </div>
    </div>
  </article>
);

const ProofSection = () => (
  <section id="proof" className="section">
    <div className="container-x">
      <SectionHeader
        eyebrow="Selected work"
        title={
          <>
            Proof that shows the thinking, <span className="text-gradient">not just the stack.</span>
          </>
        }
        body="Each project is framed by the problem, the architecture, the decisions behind it, and what it teaches about building systems that last."
      />

      <div className="grid gap-6 lg:gap-8">
        {FEATURED_PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-24">
        <div className="reveal mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">More builds</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              From the GitHub archive
            </h3>
          </div>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="btn-ghost py-2.5">
            <Github size={16} aria-hidden="true" /> All repositories
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {MORE_PROJECTS.map((project) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card reveal group flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                  <p className="mt-0.5 text-sm text-cyan-200/80">{project.tagline}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0 text-neutral-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-400">{project.body}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="font-mono text-[11px] text-neutral-500 after:ml-1.5 after:content-['·'] last:after:content-none">
                    {tech}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProofSection;
