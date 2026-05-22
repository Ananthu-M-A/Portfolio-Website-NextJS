"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  CheckCircle2,
  Code2,
  Cpu,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  Network,
  Play,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const STACK_ICONS = {
  "Frontend Systems": Code2,
  "Backend Architecture": Server,
  "Engineering Workflow": Workflow,
} as const;
import {
  ARTICLE_IDEAS,
  CERTIFICATIONS,
  CONTACT,
  CREDENTIAL_ISSUERS,
  ENGINEERING_ADVANTAGES,
  FEATURED_PROJECTS,
  METRICS,
  PROOF_STRIP,
  STACK_GROUPS,
  TEACHING_ADVANTAGES,
  TESTIMONIALS,
} from "@/config/constants";

const SectionHeader = ({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
      {title}
    </h2>
    <p className="mt-5 text-base leading-8 text-neutral-400 sm:text-lg">{body}</p>
  </div>
);

const createMailto = (email: string | undefined, subject: string, body: string) => {
  const recipient = email || "";
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactForm = ({ email }: { email: string | undefined }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    intent: "Technical instruction",
    message: "",
  });

  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Intent: ${form.intent}`,
      "",
      form.message,
    ].join("\n");

    return createMailto(email, `${form.intent} inquiry from ${form.name || "ananthuma.com"}`, body);
  }, [email, form]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
    >
      <div className="mb-6 flex items-center gap-3">
        <Mail className="text-cyan-300" size={24} />
        <div>
          <h3 className="text-xl font-semibold text-white">Send a Focused Inquiry</h3>
          <p className="text-sm text-neutral-500">Opens your email client with the context filled in.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm text-neutral-300">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/50"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-neutral-300">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/50"
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm text-neutral-300">
        Inquiry type
        <select
          value={form.intent}
          onChange={(event) => setForm((current) => ({ ...current, intent: event.target.value }))}
          className="rounded-md border border-white/10 bg-black/30 px-3 py-3 text-white outline-none transition focus:border-cyan-300/50"
        >
          <option>Technical instruction</option>
          <option>MVP architecture consultation</option>
          <option>Project collaboration</option>
          <option>General conversation</option>
        </select>
      </label>

      <label className="mt-4 grid gap-2 text-sm text-neutral-300">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          className="resize-none rounded-md border border-white/10 bg-black/30 px-3 py-3 text-white outline-none transition placeholder:text-neutral-600 focus:border-cyan-300/50"
          placeholder="Share the role, product, architecture question, or mentoring need."
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-cyan-950 transition hover:bg-cyan-200"
      >
        Prepare Email <Send size={17} />
      </button>
    </form>
  );
};

const SystemVisual = () => (
  <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#080b12] p-5 shadow-2xl shadow-cyan-950/20">
    <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
      <div className="flex gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-300" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
      </div>
      <span className="text-xs text-neutral-500">architecture.map.ts</span>
    </div>

    <div className="grid gap-3 text-sm">
      {[
        ["Client", "Next.js App Router", "SSR + protected UI"],
        ["API", "Nest.js modules", "Auth, users, courses, sessions"],
        ["Data", "PostgreSQL / MongoDB", "Relational + document models"],
        ["Ops", "Docker + deploy pipeline", "Repeatable release flow"],
      ].map(([layer, tech, note], index) => (
        <div
          key={layer}
          className="group grid grid-cols-[80px_1fr] gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
        >
          <div className="font-mono text-xs uppercase tracking-widest text-cyan-300">
            0{index + 1} {layer}
          </div>
          <div>
            <div className="font-medium text-white">{tech}</div>
            <div className="mt-1 text-neutral-400">{note}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-5 grid grid-cols-3 gap-3">
      {["Next.js", "Nest.js", "TypeScript"].map((item) => (
        <span
          key={item}
          className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-center text-xs font-medium text-cyan-100"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default function Home() {
  const teachingEmailHref = createMailto(
    CONTACT.email,
    "Technical instruction interview",
    "Hi Ananthu,\n\nI would like to discuss a technical instruction, mentoring, or curriculum role.\n\nContext:\nPreferred time:\n"
  );
  const mvpEmailHref = createMailto(
    CONTACT.email,
    "MVP architecture consultation",
    "Hi Ananthu,\n\nI would like to discuss an MVP architecture review.\n\nProduct context:\nCurrent stack:\nBiggest concern:\nPreferred time:\n"
  );
  const generalEmailHref = createMailto(
    CONTACT.email,
    "Conversation from ananthuma.com",
    "Hi Ananthu,\n\nI found your portfolio and would like to connect.\n"
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070d] text-neutral-300 selection:bg-cyan-300 selection:text-cyan-950">
      <Navbar />

      <section id="home" className="relative px-4 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08111f_0%,#05070d_42%,#05070d_100%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">
              <Sparkles size={16} />
              Production-grade engineer + technical educator
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              I Build Complex Systems - And Make Them Understandable.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Full-stack engineer and technical trainer specializing in Next.js,
              Nest.js, and scalable learning-focused architecture. I help startups
              build better products and help learners understand modern software
              engineering deeply.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <a
                href={teachingEmailHref}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-cyan-950 transition hover:bg-cyan-200"
              >
                Hire Me for Instruction <ArrowRight size={17} />
              </a>
              <a
                href={mvpEmailHref}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/5"
              >
                Discuss Your MVP <Rocket size={17} />
              </a>
            </div>

            <div className="mt-10 grid gap-3 border-y border-white/10 py-5 sm:grid-cols-2 lg:grid-cols-4">
              {PROOF_STRIP.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <SystemVisual />
        </div>
      </section>

      <section id="systems" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Dual-value matrix"
            title="Teaching Makes the Engineering Sharper. Engineering Makes the Teaching Real."
            body="The overlap is the advantage: systems thinking, human explanation, and production judgment reinforcing each other."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "Teaching Developers Changed How I Build Software",
                items: TEACHING_ADVANTAGES,
              },
              {
                icon: Boxes,
                title: "Building Production Systems Changed How I Teach",
                items: ENGINEERING_ADVANTAGES,
              },
            ].map((column) => (
              <div
                key={column.title}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
              >
                <column.icon className="mb-5 text-cyan-300" size={28} />
                <h3 className="mb-6 text-2xl font-semibold text-white">{column.title}</h3>
                <div className="grid gap-4">
                  {column.items.map((item) => (
                    <div key={item.title} className="rounded-md border border-white/10 p-4">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-neutral-400">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="System breakdowns"
            title="Proof That Shows the Thinking, Not Just the Stack."
            body="Each project is framed by the problem, architecture, technical decisions, and what it teaches about scalable systems."
          />

          <div className="grid gap-8">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.name}
                className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.03] p-5 lg:grid-cols-[0.9fr_1.1fr] lg:p-6"
              >
                <div>
                  <div className="overflow-hidden rounded-md border border-white/10 bg-black">
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      width={760}
                      height={460}
                      className="h-64 w-full object-cover opacity-85"
                    />
                  </div>
                  <div className="mt-4 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-4">
                    <div className="flex items-center gap-3">
                      <a
                        href={createMailto(
                          CONTACT.email,
                          `${project.name} architecture walkthrough`,
                          project.walkthroughBody
                        )}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cyan-300 text-cyan-950 transition hover:bg-cyan-200"
                        aria-label={`Request ${project.name} architecture walkthrough`}
                      >
                        <Play size={18} fill="currentColor" />
                      </a>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          1-Minute Architecture Walkthrough
                        </p>
                        <p className="text-sm text-cyan-100">{project.video}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.website ? (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/5"
                      >
                        Live Project <ExternalLink size={16} />
                      </a>
                    ) : null}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-300/40 hover:bg-white/5"
                      >
                        Source Code <Github size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                    {project.label}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">{project.name}</h3>

                  <div className="mt-6 grid gap-5">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Problem
                      </h4>
                      <p className="mt-2 leading-7 text-neutral-400">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                        Architecture Decisions
                      </h4>
                      <p className="mt-2 leading-7 text-neutral-400">{project.architecture}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.decisions.map((decision) => (
                        <span
                          key={decision}
                          className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-neutral-200"
                        >
                          {decision}
                        </span>
                      ))}
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-md border border-white/10 p-4">
                        <h4 className="font-semibold text-white">Scalability Thinking</h4>
                        <p className="mt-2 text-sm leading-6 text-neutral-400">
                          {project.scaling}
                        </p>
                      </div>
                      <div className="rounded-md border border-white/10 p-4">
                        <h4 className="font-semibold text-white">Teaching Value</h4>
                        <p className="mt-2 text-sm leading-6 text-neutral-400">
                          {project.teaching}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="teaching" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pedagogy"
            title="I Teach Systems, Not Just Syntax."
            body="I break down modern web architecture into practical mental models developers can actually apply in production."
          />

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
              <BookOpenCheck className="mb-5 text-cyan-300" size={30} />
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300">
                Featured lesson
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                SSR vs CSR in Next.js, Explained Like System Design
              </h3>
              <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
                A practical breakdown of where rendering happens, why it matters for
                user experience, and how product constraints should guide the
                architecture decision.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  ["Request", "Browser enters a route"],
                  ["Render", "Server or client owns the work"],
                  ["Hydrate", "Interaction becomes available"],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-md border border-white/10 p-4">
                    <Cpu className="mb-3 text-cyan-300" size={18} />
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="mt-2 text-sm text-neutral-400">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {ARTICLE_IDEAS.map((article) => (
                <div
                  key={article.title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-300/30"
                >
                  <p className="text-sm text-cyan-300">Draft-ready architecture note</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{article.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-400">{article.body}</p>
                  <a
                    href={createMailto(
                      CONTACT.email,
                      `Teaching note request: ${article.title}`,
                      `Hi Ananthu,\n\nI would like to read or discuss this teaching note:\n${article.title}\n`
                    )}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 hover:text-cyan-100"
                  >
                    Request this breakdown <ArrowRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Core Tools, Grouped by Engineering Responsibility.
            </h2>
            <div className="mt-8 grid gap-5">
              {STACK_GROUPS.map((group) => {
                const Icon = STACK_ICONS[group.title];

                return (
                  <div
                    key={group.title}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className="text-cyan-300" size={22} />
                      <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
            <ShieldCheck className="mb-5 text-cyan-300" size={30} />
            <h3 className="text-3xl font-semibold text-white">
              Built Through Deliberate Practice.
            </h3>
            <p className="mt-4 leading-7 text-neutral-400">
              My background is proof that modern engineering skill is earned
              through deep repetition, production building, and continuous learning.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {CREDENTIAL_ISSUERS.map((credential) => (
                <span
                  key={credential}
                  className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100"
                >
                  {credential}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3">
              {CERTIFICATIONS.slice(0, 4).map((certification) => (
                <a
                  key={certification.name}
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/10 bg-black/20 p-4 transition hover:border-cyan-300/40"
                >
                  <p className="font-medium text-white">{certification.name}</p>
                  <p className="mt-1 text-sm text-neutral-500">{certification.issuer}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Trust signals"
            title="Evidence of Clarity, Discipline, and Transferable Systems Thinking."
            body="The goal is not to list effort. It is to show the kind of engineering behavior that reduces confusion and risk."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric.value}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-4xl font-semibold text-white">{metric.value}</p>
                <h3 className="mt-3 font-semibold text-cyan-200">{metric.label}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">{metric.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {TESTIMONIALS.map((quote) => (
              <blockquote
                key={quote}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-6 text-lg leading-8 text-neutral-200"
              >
                &ldquo;{quote}&rdquo;
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
            <GraduationCap className="mb-5 text-cyan-300" size={30} />
            <h2 className="text-3xl font-semibold text-white">
              Need Someone Who Can Teach Modern Engineering Clearly?
            </h2>
            <p className="mt-4 leading-7 text-neutral-400">
              I am actively exploring remote opportunities in technical
              instruction, mentoring, and curriculum support focused on modern
              JavaScript ecosystems and backend architecture.
            </p>
            <a
              href={teachingEmailHref}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-cyan-950 transition hover:bg-cyan-200"
            >
              Book a 15-Minute Technical Interview <ArrowRight size={17} />
            </a>
            <p className="mt-4 text-sm text-neutral-500">
              Curriculum discussions, live teaching evaluation, or architecture
              walkthroughs welcome.
            </p>
          </div>

          <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-7">
            <Network className="mb-5 text-cyan-300" size={30} />
            <h2 className="text-3xl font-semibold text-white">
              Building an MVP That Needs Strong Architecture From Day One?
            </h2>
            <p className="mt-4 leading-7 text-neutral-300">
              I help startups avoid fragile foundations by building scalable,
              maintainable systems using modern TypeScript frameworks.
            </p>
            <a
              href={mvpEmailHref}
              className="mt-7 inline-flex items-center gap-2 rounded-md border border-cyan-300/40 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
            >
              Get a Free 20-Minute MVP Consultation <ArrowRight size={17} />
            </a>
            <p className="mt-4 text-sm text-neutral-500">
              We will discuss architecture, scalability risks, feature
              prioritization, and launch strategy.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-7xl">
          <ContactForm email={CONTACT.email} />
        </div>

        <footer className="mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            Modern software engineering is not just about building systems - it is
            about making complexity understandable.
          </p>
          <div className="flex gap-4">
            <a href={CONTACT.linkedin} className="hover:text-cyan-300">
              LinkedIn
            </a>
            <a href={CONTACT.github} className="hover:text-cyan-300">
              GitHub
            </a>
            <a href={generalEmailHref} className="hover:text-cyan-300">
              Email
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}
