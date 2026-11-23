import type { StaticImageData } from "next/image";
import oruma from "../public/projects/oruma.webp";
import fixyourphone from "../public/projects/fixyourphone.webp";
import portfolio from "../public/projects/portfolio.webp";
import refixgarage from "../public/projects/refixgarage.webp";
import readmegenerator from "../public/projects/readmegenerator.webp";

export const GITHUB_PROFILE = "https://github.com/Ananthu-M-A";
const repo = (name: string) => `${GITHUB_PROFILE}/${name}`;

export type FeaturedProject = {
  title: string;
  label: string;
  website?: string;
  github?: string;
  image: StaticImageData;
  stack: string[];
  highlights: { value: string; label: string }[];
  problem: string;
  architecture: string;
  decisions: string[];
  scaling: string;
  teaching: string;
  video: string;
  walkthroughBody: string;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "ORUMA",
    label: "Digital wellness platform · Patients, therapists, admins",
    website: process.env.NEXT_PUBLIC_ORUMA_URL || "https://oruma.vercel.app",
    github: process.env.NEXT_PUBLIC_ORUMA_GITHUB || repo("Oruma"),
    image: oruma,
    stack: ["React 18", "Vite", "NestJS", "TypeORM", "PostgreSQL", "Razorpay", "Playwright"],
    highlights: [
      { value: "20+", label: "NestJS domain modules" },
      { value: "36", label: "automated test files" },
      { value: "3", label: "user roles with RBAC" },
    ],
    problem:
      "People looking for mental-wellness support struggle to find trusted therapists, book and pay for sessions, and keep continuity of care in one place, while care teams juggle scheduling, payments, and follow-ups by hand.",
    architecture:
      "A React + Vite client talks to a modular NestJS API backed by PostgreSQL through TypeORM. The API is split into domain modules (auth, appointment, availability, payment, case-sheet, therapist, ticket, notification, audit, privacy) with JWT/Passport auth, scheduled jobs, and versioned migrations.",
    decisions: [
      "Domain-driven NestJS modules",
      "JWT + Passport role-based access",
      "TypeORM migrations, sync off in prod",
      "Razorpay payment flow",
      "Scheduled reminders (@nestjs/schedule)",
      "Audit and privacy modules",
      "Vitest, Jest and Playwright test layers",
      "CI: lint, type-check, test, build",
    ],
    scaling:
      "Booking stays the single source of truth while Zoom and WhatsApp handoffs are staff-managed for the MVP, so provider APIs can be plugged in later without reshaping the domain. Migrations and a documented launch checklist keep deployments repeatable.",
    teaching:
      "A complete reference for teaching how a real SaaS backend is carved into modules, how auth and payments cross those boundaries, and how a layered test strategy protects a growing codebase.",
    video: "ORUMA architecture walkthrough",
    walkthroughBody: "Hi Ananthu, I would like to see the ORUMA platform walkthrough.",
  },
  {
    title: "Refix Garage",
    label: "Service-center management system · Live business",
    website: process.env.NEXT_PUBLIC_REFIX_GARAGE_URL || "https://www.refixgarage.com/",
    github:
      process.env.NEXT_PUBLIC_REFIX_GARAGE_GITHUB ||
      repo("RefixGarage-Service-Center-Management-WebApp-NextJS"),
    image: refixgarage,
    stack: ["Next.js", "TypeScript", "NextAuth", "MongoDB", "Zod", "Chart.js", "jsPDF"],
    highlights: [
      { value: "8", label: "operational modules" },
      { value: "PDF", label: "invoice generation" },
      { value: "Live", label: "customer status tracking" },
    ],
    problem:
      "A smartphone repair business needed one system for intake, service tracking, inventory, engineers, billing, and customer-facing status updates instead of paper slips and spreadsheets.",
    architecture:
      "A full-stack Next.js app with NextAuth (MongoDB adapter) for staff auth, Mongoose models built around the service ticket, Zod-validated forms, and a public site where customers check their repair status.",
    decisions: [
      "Service ticket as the core aggregate",
      "NextAuth with MongoDB adapter",
      "Zod + React Hook Form validation",
      "PDF invoices with jsPDF",
      "Chart.js business analytics",
      "Inventory and engineer management",
      "Email notifications via Nodemailer",
    ],
    scaling:
      "Because every workflow hangs off the ticket, new capabilities (multi-branch support, SMS updates, warranty tracking) attach to an existing aggregate instead of new silos.",
    teaching:
      "Shows how to model a real business workflow end to end: from domain entity to validation, auth, reporting, and the documents a customer actually receives.",
    video: "Refix Garage workflow walkthrough",
    walkthroughBody: "Hi Ananthu, I would like to see the Refix Garage architecture walkthrough.",
  },
  {
    title: "README Generator",
    label: "AI developer tool · Gemini-powered",
    website:
      process.env.NEXT_PUBLIC_README_GENERATOR_URL || "https://githubreadmegenerator.ananthuma.com/",
    github:
      process.env.NEXT_PUBLIC_README_GENERATOR_GITHUB ||
      repo("GitHub-README-Generator-NextJS-GeminiAI"),
    image: readmegenerator,
    stack: ["Next.js", "TypeScript", "Gemini API", "Upstash Redis", "NextAuth", "Zod", "Jest"],
    highlights: [
      { value: "AI", label: "Gemini content generation" },
      { value: "Redis", label: "rate limiting with Upstash" },
      { value: "GFM", label: "live markdown preview" },
    ],
    problem:
      "Developers skip documentation because writing a structured, professional README from scratch is slow, so good projects look unfinished.",
    architecture:
      "Next.js server routes call Google Gemini behind authenticated, Zod-validated requests. Upstash Redis rate limiting protects the AI quota, and react-markdown with GFM renders the output as a live preview.",
    decisions: [
      "Server-side Gemini calls (keys never reach the client)",
      "Upstash Redis rate limiting",
      "NextAuth-protected generation",
      "Zod request validation",
      "react-markdown + remark-gfm preview",
      "Customizable templates",
    ],
    scaling:
      "Rate limiting and server-only AI calls keep cost predictable as usage grows; templates and GitHub integrations can be added without touching the generation pipeline.",
    teaching:
      "A practical lesson in shipping AI features responsibly: protecting keys, controlling cost, validating input, and rendering model output safely.",
    video: "README Generator AI workflow",
    walkthroughBody: "Hi Ananthu, I would like to see the README Generator architecture walkthrough.",
  },
  {
    title: "Fix Your Phone",
    label: "Smartphone repair learning platform",
    website: process.env.NEXT_PUBLIC_FIXYOURPHONE_URL,
    github: process.env.NEXT_PUBLIC_FIXYOURPHONE_GITHUB,
    image: fixyourphone,
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      { value: "Guides", label: "structured repair content" },
      { value: "Mobile", label: "first learning UI" },
      { value: "Typed", label: "content models" },
    ],
    problem:
      "Aspiring technicians struggle to access structured repair knowledge, reliable workflows, and practical troubleshooting guidance in one place.",
    architecture:
      "A Next.js frontend built from reusable, typed content components with responsive delivery patterns, so new guides are data rather than new pages.",
    decisions: [
      "Component-driven UI",
      "TypeScript content models",
      "Framer Motion transitions",
      "Responsive learning interface",
      "Modular page structure",
    ],
    scaling:
      "Supports future premium courses, authentication, progress tracking, and community-driven repair resources.",
    teaching:
      "Good for explaining reusable frontend architecture, scalable UI systems, and content-focused application design.",
    video: "Fix Your Phone walkthrough",
    walkthroughBody: "Hi Ananthu, I would like to see the Fix Your Phone platform walkthrough.",
  },
  {
    title: "Portfolio",
    label: "This site · Server-first Next.js",
    website: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://www.ananthuma.com",
    github: process.env.NEXT_PUBLIC_PORTFOLIO_GITHUB || repo("Portfolio-Website-NextJS"),
    image: portfolio,
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    highlights: [
      { value: "RSC", label: "server components by default" },
      { value: "Static", label: "prerendered routes" },
      { value: "CI", label: "lint, types, build" },
    ],
    problem:
      "A developer portfolio has to communicate architecture thinking and project depth, not just screenshots, while loading fast for recruiters on any device.",
    architecture:
      "Next.js App Router with server-rendered section components, small client islands for interactivity, data-driven content, and generated SEO assets (Open Graph image, sitemap, robots).",
    decisions: [
      "Server Components by default",
      "Data-driven content config",
      "Generated Open Graph image",
      "Scroll-driven CSS animations",
      "GitHub Actions CI",
    ],
    scaling:
      "Content lives in config files, so case studies, articles, or a CMS can be added without touching layout components.",
    teaching:
      "Useful for demonstrating server/client boundaries, performance budgets, and SEO in a modern Next.js app.",
    video: "Portfolio system design walkthrough",
    walkthroughBody: "Hi Ananthu, I would like to see the Portfolio architecture walkthrough.",
  },
];

export const MORE_PROJECTS = [
  {
    title: "Confidently",
    tagline: "Real-time mock interview platform",
    body: "Face-to-face interview practice with slot booking, expert and admin roles, and Google/LinkedIn sign-in, over a NestJS API with Socket.IO gateways.",
    stack: ["Next.js", "NestJS", "MongoDB", "Socket.IO", "TanStack Query"],
    github: repo("Confidently-Interview-Practicing-WebApp-NextJS-NestJS"),
  },
  {
    title: "Wanderlust",
    tagline: "Hotel & restaurant booking",
    body: "Real-time availability, Stripe payments, Socket.IO live chat plus a chatbot, Google Maps, analytics dashboards, and PDF invoices stored on Cloudinary.",
    stack: ["React", "Express", "MongoDB", "Stripe", "Socket.IO"],
    github: repo("Wanderlust-Hotel-Booking-WebApp-MERN"),
  },
  {
    title: "E-Learning Platform",
    tagline: "Courses, progress, certificates",
    body: "MERN learning platform with a course catalog, interactive lessons, progress tracking, and certification, using Redux for client state and JWT auth.",
    stack: ["React", "Redux", "Express", "MongoDB", "JWT"],
    github: repo("E-Learning-Platform-MERN"),
  },
  {
    title: "SmartDepot",
    tagline: "E-commerce for repair engineers",
    body: "Specialised tools store with catalog, cart, Razorpay checkout, order tracking, and account management for smartphone service engineers.",
    stack: ["Next.js", "MongoDB", "Razorpay", "shadcn/ui", "JWT"],
    github: repo("SmartDepot-ECommerce-WebApp-NextJS"),
  },
];
