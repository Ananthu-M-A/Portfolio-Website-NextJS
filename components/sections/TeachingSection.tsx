import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { ARTICLE_IDEAS, CONTACT } from "@/config/constants";
import { createMailto } from "@/lib/mailto";

const RENDER_STEPS = [
  ["Request", "Browser enters a route", "GET /courses"],
  ["Render", "Server or client owns the work", "RSC · SSR · CSR"],
  ["Hydrate", "Interaction becomes available", "useEffect → ready"],
] as const;

const TeachingSection = () => (
  <section id="teaching" className="section">
    <div className="container-x">
      <SectionHeader
        eyebrow="Teaching"
        title={
          <>
            I teach systems, <span className="text-gradient">not just syntax.</span>
          </>
        }
        body="I break modern web architecture into practical mental models developers can actually apply in production."
      />

      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="card reveal p-7 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">Featured lesson</p>
          <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white">
            SSR vs CSR in Next.js, explained like system design
          </h3>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Where rendering happens, why it matters for user experience, and how product
            constraints, not trends, should decide the architecture.
          </p>

          <ol className="relative mt-10 grid gap-3 sm:grid-cols-3">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[2.1rem] hidden h-px bg-gradient-to-r from-cyan-300/50 via-violet-300/40 to-transparent sm:block"
            />
            {RENDER_STEPS.map(([title, body, code], index) => (
              <li key={title} className="relative">
                <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/30 bg-ink-950 font-mono text-xs text-cyan-200">
                  {index + 1}
                </span>
                <h4 className="mt-4 font-semibold text-white">{title}</h4>
                <p className="mt-1 text-sm text-neutral-400">{body}</p>
                <code className="mt-3 inline-block rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-neutral-500">
                  {code}
                </code>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-3">
          {ARTICLE_IDEAS.map((article) => (
            <div key={article.title} className="card reveal p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                {article.url ? "Published" : "In the writing queue"}
              </p>
              <h3 className="mt-2 font-semibold text-white">{article.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-neutral-400">{article.body}</p>
              {article.url ? (
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn-link mt-3">
                  Read the article <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <a
                  href={createMailto(
                    `Teaching note request: ${article.title}`,
                    `Hi Ananthu,\n\nI would like to read or discuss this teaching note:\n${article.title}\n`
                  )}
                  className="btn-link mt-3"
                >
                  Request an early breakdown <ArrowRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
          {CONTACT.medium ? (
            <a
              href={CONTACT.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost reveal justify-between"
            >
              More writing on Medium <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  </section>
);

export default TeachingSection;
