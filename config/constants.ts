import oruma from "../public/projects/oruma.png";
import fixyourphone from "../public/projects/fixyourphone.png";
import portfolio from "../public/projects/portfolio.png";
import refixgarage from "../public/projects/refixgarage.png";
import wanderlust from "../public/projects/wanderlust.png";
import smartdepot from "../public/projects/smartdepot.png";
import readmegenerator from "../public/projects/readmegenerator.png";
import noimage from "../public/projects/no-img-available.jpg";

export const HERO_CONTENT = `Welcome to my portfolio! I'm Ananthu M A, a skilled MERN stack developer with a comprehensive understanding of front-end and back-end technologies. My journey in tech began with a Diploma in Electronics Engineering, and I further honed my skills in computer science and software development through intensive training. With a knack for problem-solving and a keen eye for detail, I specialize in building scalable and efficient web applications. My portfolio showcases a range of projects, from complex e-commerce platforms to innovative hotel booking systems, demonstrating my versatility and commitment to excellence. Explore my work, and let's connect to discuss how I can contribute to your next big project!`;

export const ABOUT_TEXT = `Hello, I'm Ananthu M A, a MERN & Next.js/Nest.js full-stack developer. I build scalable web applications with clean architecture, focusing on dynamic user interfaces, secure backends, and seamless user experience. My work spans portfolio websites, e-learning platforms, booking systems, and e-commerce solutions, delivering high-quality, maintainable, and client-ready projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    type: "Freelance",
    description: `I completed an intensive 28-week MERN stack development program at BROTOTYPE, where my progress was regularly reviewed by industry experts. The program was rigorous, involving 12-16 hours of daily hands-on training, including day and night sessions. During this period, I built two main projects and several mini projects from scratch, honing my skills in full-stack development. One of these projects was completed within a challenging timeframe of just one and a half months, emphasizing my ability to manage deadlines and effectively manage time. This experience not only strengthened my technical skills but also cultivated my self-learning abilities, enabling me to stay current with the latest trends and technologies in the field.`,
    technologies: ["MERN", "Next.js", "RESTful API", "AWS EC2", "NGINX", "Tailwind CSS", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "ORUMA",
    website: process.env.NEXT_PUBLIC_ORUMA_URL,
    github: process.env.NEXT_PUBLIC_ORUMA_GITHUB,
    image: oruma,
    description: "Mental wellness and counselling platform for therapist discovery, appointment booking, and secure user management.",
    technologies: ["Next.js", "Nest.js", "PostgreSQL", "TypeORM", "Tailwind CSS" ]
  },
  {
    title: "Refix Garage",
    website: process.env.NEXT_PUBLIC_REFIX_GARAGE_URL,
    github: process.env.NEXT_PUBLIC_REFIX_GARAGE_GITHUB,
    image: refixgarage,
    description: "Smartphone service-center management system with service tracking, billing, and analytics.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Chart.js"]
  },
  {
    title: "Portfolio",
    website: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    github: process.env.NEXT_PUBLIC_PORTFOLIO_GITHUB,
    image: portfolio,
    description: "Showcases my skills, projects, and professional journey with responsive design and animations.",
    technologies: ["Next.js", "React", "TS", "Tailwind", "Framer Motion"]
  },
  {
    title: "Fix Your Phone",
    website: process.env.NEXT_PUBLIC_FIXYOURPHONE_URL,
    github: process.env.NEXT_PUBLIC_FIXYOURPHONE_GITHUB,
    image: fixyourphone,
    description: "A platform for mastering smartphone repair with professional guides, tools & more.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "README Generator",
    website: process.env.NEXT_PUBLIC_README_GENERATOR_URL,
    github: process.env.NEXT_PUBLIC_README_GENERATOR_GITHUB,
    image: readmegenerator,
    description: "Generates professional GitHub README files with AI integration for dynamic content creation and customization.",
    technologies: ["Next.js", "TS", "Tailwind", "Gemini AI"]
  },
];

const findProject = (title: string) => {
  const project = PROJECTS.find((project) => project.title === title);
  if (!project) {
    throw new Error(`Project not found: ${title}`);
  }

  return project;
};

export const FEATURED_PROJECTS = [
  {
    ...findProject("ORUMA"),
    label: "Mental wellness and counselling platform",
    problem:
      "Individuals seeking mental wellness support often face difficulty finding trusted professionals, booking sessions conveniently, and accessing a structured digital counselling experience in one place.",
    architecture:
      "Built with a scalable full-stack architecture using Next.js for frontend and backend, modular component design, secure authentication flows, role-based access control, and PostgreSQL database integration for structured data management.",
    decisions: [
      "Full-stack Next.js architecture",
      "Role-based authentication system",
      "Modular reusable component design",
      "PostgreSQL relational database",
      "Secure session and credential management",
      "Responsive mobile-first interface",
      "Scalable API route structure",
      "Admin-driven content and user management"
    ],
    scaling:
      "The platform architecture supports future expansion including video consultations, therapist dashboards, appointment automation, payment gateway integration, patient records, wellness programs, and multilingual support.",
    teaching:
      "Excellent for demonstrating scalable SaaS architecture, authentication workflows, database-driven application design, API structuring, and full-stack product engineering.",
    video: "ORUMA Architecture Walkthrough",
    walkthroughBody:
      "Hi Ananthu, I would like to see the ORUMA platform walkthrough.",
  },

  {
    ...findProject("Refix Garage"),
    label: "Service-center management system",
    problem:
    "Repair businesses need organized workflows for service tracking, billing management, and operational visibility.",
    architecture:
      "The application models repair workflows around service tickets connected to billing, customer management, and analytics dashboards.",
    decisions: [
      "Service workflow modeling",
      "Chart.js analytics",
      "MongoDB persistence",
      "Admin-focused UI",
      "Responsive dashboard architecture",
    ],
    scaling:
    "The workflow-first structure supports future technician assignment systems, notifications, and SLA tracking.",
    teaching:
    "Strong example for teaching real-world domain modeling and operational workflow architecture.",
    video: "Refix Garage Workflow Architecture",
    walkthroughBody:
    "Hi Ananthu, I would like to see the Refix Garage system walkthrough.",
  },
  
  {
    ...findProject("Portfolio"),
    label: "Personal developer portfolio",
    problem:
      "Developers need a professional platform that communicates technical ability, architecture thinking, and project depth beyond simple visual presentation.",
    architecture:
      "Designed using Next.js with animation-driven UI, modular sections, and scalable component organization for maintainability.",
    decisions: [
      "SSR optimization",
      "Tailwind styling system",
      "Reusable components",
      "Framer Motion transitions",
      "SEO-friendly structure",
    ],
    scaling:
    "The architecture allows future integration of blogs, CMS-driven content, analytics, and interactive case studies.",
    teaching:
    "Useful for demonstrating portfolio architecture, modern frontend practices, and scalable UI composition.",
    video: "Portfolio System Design Walkthrough",
    walkthroughBody:
    "Hi Ananthu, I would like to see the Portfolio architecture walkthrough.",
  },
  
  {
    ...findProject("Fix Your Phone"),
    label: "Smartphone repair learning platform",
    problem:
      "Aspiring technicians struggle to access structured repair knowledge, reliable repair workflows, and practical troubleshooting guidance in one place.",
    architecture:
      "Built with a scalable Next.js frontend architecture using reusable UI components, TypeScript safety, and responsive content delivery patterns.",
    decisions: [
      "Component-driven UI",
      "TypeScript integration",
      "Framer Motion animations",
      "Responsive learning interface",
      "Modular page structure",
    ],
    scaling:
      "The platform structure supports future additions like premium courses, authentication, progress tracking, and community-driven repair resources.",
    teaching:
      "Excellent for explaining reusable frontend architecture, scalable UI systems, and content-focused application design.",
    video: "Fix Your Phone Architecture Walkthrough",
    walkthroughBody:
      "Hi Ananthu, I would like to see the Fix Your Phone platform walkthrough.",
  },

  {
    ...findProject("README Generator"),
    label: "AI-powered README generation tool",
    problem:
      "Developers often struggle to create structured and professional documentation quickly for their repositories.",
    architecture:
      "Built with Next.js and AI-powered content generation workflows focused on dynamic documentation creation.",
    decisions: [
      "Gemini AI integration",
      "Dynamic markdown generation",
      "Reusable form systems",
      "Client-side rendering",
      "Tailwind UI architecture",
    ],
    scaling:
      "Prepared for template systems, GitHub integrations, and collaborative documentation workflows.",
    teaching:
      "Strong example for teaching AI-assisted tooling and practical developer productivity applications.",
    video: "README Generator AI Workflow",
    walkthroughBody:
      "Hi Ananthu, I would like to see the README Generator architecture walkthrough.",
  },
];

export const PROOF_STRIP = [
  "28-week immersive engineering practice",
  "Production-grade TypeScript frameworks",
  "Working technical trainer",
  "Google / Meta / IBM certified",
];

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

export const ARTICLE_IDEAS = [
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
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand"],
  },
  {
    title: "Backend Architecture",
    items: ["Nest.js", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Engineering Workflow",
    items: ["Git", "Docker", "REST APIs", "Authentication", "Deployment Pipelines"],
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
    value: "TypeScript",
    label: "Production framework focus",
    body: "Specialized in scalable JavaScript ecosystems using Next.js, Nest.js, and modern backend architecture.",
  },
];

export const TESTIMONIALS = [
  "Ananthu explains backend architecture in a way that removes intimidation completely.",
  "What stood out was not just technical skill, but the ability to explain decisions clearly.",
  "He approaches teaching like an engineer and engineering like a mentor.",
];

export const CONTACT = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
  github: process.env.NEXT_PUBLIC_GITHUB,
  email: process.env.NEXT_PUBLIC_EMAIL,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
};

export const ROLES = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Next.js / Nest.js Specialist",
  "Web Application Architect",
  "UI/UX-Oriented Developer",
];

export const SKILLS = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "UI/UX Design", level: 80 },
];

export const CERTIFICATIONS = [
  {
    name: "Google IT Support",
    issuer: "Google | Coursera",
    image: "/certifications/gits1.png",
    link: "https://coursera.org/share/dcf0b637f6d04762c43c5256092f4777",
  },
  {
    name: "IT Security: Defense against the Digital Dark Arts",
    issuer: "Google | Coursera",
    image: "/certifications/itsdadda3.png",
    link: "https://coursera.org/share/993643b65816646316f9cc6663f1e0a0",
  },
  {
    name: "Operating Systems and You: Becoming a Power User",
    issuer: "Google | Coursera",
    image: "/certifications/osybpu5.png",
    link: "https://coursera.org/share/08b0c2cccda0210db0edd7d93db00073",
  },
  {
    name: "System Administration and IT Infrastructure Services",
    issuer: "Google | Coursera",
    image: "/certifications/saitis6.png",
    link: "https://coursera.org/share/5ca338c4aacafee4feb9af50376fe7a0",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    image: "/certifications/tbbcn7.png",
    link: "https://coursera.org/share/9324f35b4530aea4d259ea747d8ba6a6",
  },
  {
    name: "Technical Support Fundamentals",
    issuer: "Google | Coursera",
    image: "/certifications/tsf9.png",
    link: "https://coursera.org/share/12ef6a470ab2a5672f6aeb684d5177c3",
  },
  {
    name: "Version Control",
    issuer: "Meta | Coursera",
    image: "/certifications/vc4.png",
    link: "https://coursera.org/share/aec4bdaf080959f21b5f397c08d8ea8b",
  },
  {
    name: "Programming with JavaScript",
    issuer: "Meta | Coursera",
    image: "/certifications/pwj8.png",
    link: "https://coursera.org/share/faf8635bce27ed9358f986636490314f",
  },
  {
    name: "Introduction to Front-End Development",
    issuer: "Meta | Coursera",
    image: "/certifications/ifed10.png",
    link: "https://coursera.org/share/fc71f2e0d56a26ad0c5308295ef1cba4",
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM | Coursera",
    image: "/certifications/ise2.png",
    link: "https://coursera.org/share/3df60db2f85c9d5df6ed1e569c51e74f",
  },
];