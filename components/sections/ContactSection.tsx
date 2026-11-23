import { ArrowRight, GraduationCap, Network } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { CONTACT, SITE } from "@/config/constants";
import { GENERAL_EMAIL_HREF, MVP_EMAIL_HREF, TEACHING_EMAIL_HREF } from "@/lib/mailto";

const FOOTER_LINKS = [
  { label: "GitHub", href: CONTACT.github, external: true },
  { label: "LinkedIn", href: CONTACT.linkedin, external: true },
  { label: "Medium", href: CONTACT.medium, external: true },
  { label: "LeetCode", href: CONTACT.leetcode, external: true },
  { label: "Resume", href: SITE.resume, external: true },
  { label: "Email", href: CONTACT.email ? GENERAL_EMAIL_HREF : undefined, external: false },
].filter((link): link is { label: string; href: string; external: boolean } => Boolean(link.href));

const OFFERS = [
  {
    icon: GraduationCap,
    title: "Need someone who can teach modern engineering clearly?",
    body: "Exploring remote roles in technical instruction, mentoring, and curriculum support for modern JavaScript ecosystems and backend architecture.",
    cta: "Book a 15-minute technical interview",
    href: TEACHING_EMAIL_HREF,
    note: "Curriculum discussions, live teaching evaluation, or architecture walkthroughs welcome.",
    primary: true,
  },
  {
    icon: Network,
    title: "Building an MVP that needs strong architecture from day one?",
    body: "I help startups avoid fragile foundations with scalable, maintainable systems built on modern TypeScript frameworks.",
    cta: "Get a free 20-minute MVP consultation",
    href: MVP_EMAIL_HREF,
    note: "Architecture, scalability risks, feature prioritization, and launch strategy.",
    primary: false,
  },
];

const ContactSection = () => (
  <section id="contact" className="section overflow-hidden pb-10">
    <div aria-hidden="true" className="aurora pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[600px] rotate-180" />

    <div className="container-x">
      <div className="reveal mx-auto mb-14 max-w-3xl text-center">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Let&apos;s build something <span className="text-gradient">people understand.</span>
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {OFFERS.map((offer) => (
          <div key={offer.title} className="card reveal flex flex-col p-7 sm:p-8">
            <offer.icon className="text-cyan-300" size={26} aria-hidden="true" />
            <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-white">
              {offer.title}
            </h3>
            <p className="mt-3 leading-7 text-neutral-400">{offer.body}</p>
            <div className="mt-auto pt-7">
              <a href={offer.href} className={offer.primary ? "btn-primary" : "btn-ghost"}>
                {offer.cta} <ArrowRight size={16} aria-hidden="true" />
              </a>
              <p className="mt-3 text-sm text-neutral-500">{offer.note}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-4">
        <ContactForm />
      </div>

      <footer className="mt-24 flex flex-col gap-6 border-t border-white/[0.08] pt-8 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p className="max-w-md">
          © {new Date().getFullYear()} {SITE.name}. Modern software engineering is about making
          complexity understandable.
        </p>
        <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  </section>
);

export default ContactSection;
