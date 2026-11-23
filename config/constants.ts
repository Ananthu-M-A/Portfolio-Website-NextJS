export const TEACHING_ADVANTAGES = [
  {
    title: "Clear Architecture",
    body: "Explaining systems daily trained me to structure applications cleanly, document decisions, and reduce unnecessary complexity.",
  },
  {
    title: "Maintainable Code",
    body: "I build for future developers, not just for deployment day.",
  },
  {
    title: "Empathy-Driven UX",
    body: "Handling student confusion sharpened my ability to anticipate user friction and edge cases.",
  },
  {
    title: "Communication Speed",
    body: "Clients do not need translated engineering jargon. I communicate architecture clearly and efficiently.",
  },
];

export const ENGINEERING_ADVANTAGES = [
  {
    title: "Real-World Context",
    body: "I teach from implementation experience: authentication flows, API architecture, rendering strategies, deployment pipelines, and scalability decisions.",
  },
  {
    title: "Modern Stack Relevance",
    body: "My instruction is rooted in current production tooling: Next.js, Nest.js, TypeScript, PostgreSQL, Docker, and modern deployment workflows.",
  },
  {
    title: "Architectural Thinking",
    body: "I teach students how systems work, not just how tutorials work.",
  },
  {
    title: "Industry Readiness",
    body: "Students learn debugging, reasoning, and scalable thinking instead of memorizing syntax.",
  },
];

type ArticleIdea = {
  title: string;
  body: string;
  /** Set once the article is published (Medium, dev.to, etc.). */
  url?: string;
};

export const ARTICLE_IDEAS: ArticleIdea[] = [
  {
    title: "SSR vs CSR in Next.js, Explained Like System Design",
    body: "Route ownership, rendering cost, hydration, and where product constraints should decide the pattern.",
  },
  {
    title: "Why Junior Developers Misunderstand Backend Architecture",
    body: "A mentoring note on moving from routes and controllers to domain boundaries and data flow.",
  },
  {
    title: "Event-Driven Systems Without the Buzzwords",
    body: "A plain-language breakdown of producers, consumers, retries, and why async work changes failure modes.",
  },
  {
    title: "The Real Purpose of Nest.js Modules",
    body: "How modules help teams package capability, dependencies, and future scaling decisions.",
  },
];

export const STACK_GROUPS = [
  {
    title: "Frontend Systems",
    items: ["Next.js", "React", "TypeScript", "Vite", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend Architecture",
    items: ["NestJS", "Node.js", "Express", "PostgreSQL", "TypeORM", "MongoDB", "Mongoose", "Socket.IO"],
  },
  {
    title: "Engineering Workflow",
    items: ["Git", "GitHub Actions", "Docker", "Vitest", "Jest", "Playwright", "JWT / OAuth", "Zod"],
  },
  {
    title: "AI & Integrations",
    items: ["Gemini API", "Upstash Redis", "Razorpay", "Stripe", "Cloudinary", "Google Maps"],
  },
] as const;

export const CREDENTIAL_ISSUERS = [
  "Google",
  "Meta",
  "IBM",
  "Brototype Engineering Program",
];

export const METRICS = [
  {
    value: "28 Weeks",
    label: "Intensive engineering immersion",
    body: "12-16 hours/day focused on production-level development, debugging, and systems thinking.",
  },
  {
    value: "Daily",
    label: "Technical instruction",
    body: "Actively training learners through technical troubleshooting, concept clarity, and engineering habits.",
  },
  {
    value: "20+ modules",
    label: "In a single NestJS platform",
    body: "ORUMA's API spans auth, scheduling, payments, case sheets, audit, and privacy, backed by Vitest, Jest, and Playwright test layers.",
  },
];

type Testimonial = {
  quote: string;
  /** Name of the person quoted (shown only when set — add with their permission). */
  author?: string;
  /** e.g. "Student, MERN cohort" or "Founder, Acme". */
  role?: string;
  /** Optional link to the original (e.g. a LinkedIn recommendation). */
  source?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Ananthu explains backend architecture in a way that removes intimidation completely." },
  { quote: "What stood out was not just technical skill, but the ability to explain decisions clearly." },
  { quote: "He approaches teaching like an engineer and engineering like a mentor." },
];

export const CONTACT = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://www.linkedin.com/in/ananthuma/",
  github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/Ananthu-M-A",
  email: process.env.NEXT_PUBLIC_EMAIL,
  medium: process.env.NEXT_PUBLIC_MEDIUM || "https://medium.com/@ananthuma",
  leetcode: process.env.NEXT_PUBLIC_LEETCODE || "https://leetcode.com/u/ananthuma/",
  location: "Kerala, India",
  availability: "Open to remote roles",
};

export const CERTIFICATIONS = [
  {
    name: "Google IT Support",
    issuer: "Google | Coursera",
    link: "https://coursera.org/share/dcf0b637f6d04762c43c5256092f4777",
  },
  {
    name: "IT Security: Defense against the Digital Dark Arts",
    issuer: "Google | Coursera",
    link: "https://coursera.org/share/993643b65816646316f9cc6663f1e0a0",
  },
  {
    name: "Operating Systems and You: Becoming a Power User",
    issuer: "Google | Coursera",
    link: "https://coursera.org/share/08b0c2cccda0210db0edd7d93db00073",
  },
  {
    name: "System Administration and IT Infrastructure Services",
    issuer: "Google | Coursera",
    link: "https://coursera.org/share/5ca338c4aacafee4feb9af50376fe7a0",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    link: "https://coursera.org/share/9324f35b4530aea4d259ea747d8ba6a6",
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google | Coursera",
    link: "https://coursera.org/share/12ef6a470ab2a5672f6aeb684d5177c3",
  },
  {
    name: "Version Control",
    issuer: "Meta | Coursera",
    link: "https://coursera.org/share/aec4bdaf080959f21b5f397c08d8ea8b",
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta | Coursera",
    link: "https://coursera.org/share/faf8635bce27ed9358f986636490314f",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta | Coursera",
    link: "https://coursera.org/share/fc71f2e0d56a26ad0c5308295ef1cba4",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM | Coursera",
    link: "https://coursera.org/share/3df60db2f85c9d5df6ed1e569c51e74f",
  },
];
export const SITE = {
  url: "https://www.ananthuma.com",
  name: "Ananthu M A",
  title: "Ananthu M A | Production-Grade Engineer and Technical Educator",
  description:
    "Production-grade full-stack engineer and technical trainer helping teams build scalable systems and understand modern software architecture.",
  resume: "/resume.pdf",
} as const;
