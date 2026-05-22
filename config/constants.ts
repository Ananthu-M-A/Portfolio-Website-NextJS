import project0 from "../public/projects/project-0.png";
import project1 from "../public/projects/project-1.png";
import project2 from "../public/projects/project-2.png";
import project3 from "../public/projects/project-3.png";
import project5 from "../public/projects/project-5.png";
import project7 from "../public/projects/project-7.png";
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
    title: "Fix Your Phone",
    website: process.env.NEXT_PUBLIC_FIXYOURPHONE_URL,
    github: process.env.NEXT_PUBLIC_FIXYOURPHONE_GITHUB,
    image: project0,
    description: "A platform for mastering smartphone repair with professional guides, tools & more.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Portfolio",
    website: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    github: process.env.NEXT_PUBLIC_PORTFOLIO_GITHUB,
    image: project1,
    description: "Showcases my skills, projects, and professional journey with responsive design and animations.",
    technologies: ["Next.js", "React", "TS", "Tailwind", "Framer Motion"]
  },
  {
    title: "Refix Garage",
    website: process.env.NEXT_PUBLIC_REFIX_GARAGE_URL,
    github: process.env.NEXT_PUBLIC_REFIX_GARAGE_GITHUB,
    image: project3,
    description: "Smartphone service-center management system with service tracking, billing, and analytics.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Chart.js"]
  },
  {
    title: "Wanderlust",
    website: process.env.NEXT_PUBLIC_WANDERLUST_URL,
    github: process.env.NEXT_PUBLIC_WANDERLUST_GITHUB,
    image: project2,
    description: "Hotel & restaurant booking platform with live chat, chatbot, and payment integration.",
    technologies: ["React", "Node", "Express", "Tailwind", "MongoDB", "Stripe", "Socket.IO"]
  },
  {
    title: "Hit the Smiley",
    website: process.env.NEXT_PUBLIC_HIT_SMILEY_URL,
    github: process.env.NEXT_PUBLIC_HIT_SMILEY_GITHUB,
    image: noimage,
    description: "Interactive game with animations, score tracking & responsive design built with React and GSAP.",
    technologies: ["React", "TS", "Redux", "GSAP", "Tailwind"]
  },
  {
    title: "README Generator",
    website: process.env.NEXT_PUBLIC_README_GENERATOR_URL,
    github: process.env.NEXT_PUBLIC_README_GENERATOR_GITHUB,
    image: project5,
    description: "Generates professional GitHub README files with AI integration for dynamic content creation and customization.",
    technologies: ["Next.js", "TS", "Tailwind", "Gemini AI"]
  },
  {
    title: "Smart Depot",
    website: process.env.NEXT_PUBLIC_SMARTDEPOT_URL,
    github: process.env.NEXT_PUBLIC_SMARTDEPOT_GITHUB,
    image: project7,
    description: "E-commerce platform for service engineers with secure checkout and order tracking.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Razorpay", "Chart.js"]
  },
  {
    title: "E-Learning",
    website: process.env.NEXT_PUBLIC_ELEARNING_URL,
    github: process.env.NEXT_PUBLIC_ELEARNING_GITHUB,
    image: noimage,
    description: "Online courses platform with course management, progress tracking, and authentication.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind", "Redux"]
  },
  {
    title: "Confidently",
    website: process.env.NEXT_PUBLIC_CONFIDENTLY_URL,
    github: process.env.NEXT_PUBLIC_CONFIDENTLY_GITHUB,
    image: noimage,
    description: "Practice interviews with slot booking, user management, and real-time communication.",
    technologies: ["Next.js", "Nest.js", "MongoDB", "Socket.IO", "Tailwind"]
  },
  {
    title: "Netflix Clone",
    website: process.env.NEXT_PUBLIC_NETFLIX_CLONE_URL,
    github: process.env.NEXT_PUBLIC_NETFLIX_CLONE_GITHUB,
    image: noimage,
    description: "React-based Netflix clone with API integration and responsive UI.",
    technologies: ["React", "CSS", "Axios", "JS"]
  },

  {
    title: "Weather App",
    website: process.env.NEXT_PUBLIC_WEATHER_URL,
    github: process.env.NEXT_PUBLIC_WEATHER_GITHUB,
    image: noimage,
    description: "Displays current weather using API integration.",
    technologies: ["HTML", "CSS", "JS", "API"]
  },
  {
    title: "Demo Portfolio",
    website: process.env.NEXT_PUBLIC_DEMO_PORTFOLIO_URL,
    github: process.env.NEXT_PUBLIC_DEMO_PORTFOLIO_GITHUB,
    image: noimage,
    description: "Bootstrap-based portfolio template with contact form.",
    technologies: ["HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Password Generator",
    website: process.env.NEXT_PUBLIC_PSWD_GENERATOR_URL,
    github: process.env.NEXT_PUBLIC_PSWD_GENERATOR_GITHUB,
    image: noimage,
    description: "Generates strong passwords with authentication and storage.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind"]
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
    ...findProject("Confidently"),
    label: "Practice interview platform",
    problem:
      "Interview preparation needs scheduling, role-aware sessions, progress visibility, and real-time communication without becoming operationally messy.",
    architecture:
      "Next.js handles the product interface and protected flows, while Nest.js organizes backend responsibilities around users, bookings, sessions, and communication.",
    decisions: [
      "JWT authentication",
      "Role-based authorization",
      "Socket.IO communication",
      "Protected dashboards",
      "Modular Nest.js services",
    ],
    scaling:
      "Domain separation keeps the platform ready for future mentor analytics, notification workers, and independent session services.",
    teaching:
      "Useful for explaining auth boundaries, real-time events, and why backend modules should map to business capabilities.",
    video: "Authentication Flow Breakdown",
    walkthroughBody:
      "Hi Ananthu, I would like to see the Confidently authentication flow architecture walkthrough.",
  },
  {
    ...findProject("Smart Depot"),
    label: "Engineer-focused commerce system",
    problem:
      "Service engineers need reliable product discovery, order tracking, secure checkout, and admin visibility in one focused workflow.",
    architecture:
      "A Next.js storefront is supported by server-side data flows, payment integration, inventory-aware product modeling, and operational dashboards.",
    decisions: [
      "Razorpay checkout",
      "Order lifecycle tracking",
      "MongoDB modeling",
      "Dashboard analytics",
      "API-first data access",
    ],
    scaling:
      "The core commerce flow is isolated from reporting concerns so analytics can grow without slowing buyer actions.",
    teaching:
      "A practical example for teaching payment states, API contracts, and dashboard data aggregation.",
    video: "Scaling This Architecture",
    walkthroughBody:
      "Hi Ananthu, I would like to see the Smart Depot scaling architecture walkthrough.",
  },
  {
    ...findProject("Refix Garage"),
    label: "Service-center management system",
    problem:
      "Repair businesses need service tracking, billing, customer updates, and visibility into operational bottlenecks.",
    architecture:
      "The application models service tickets as the center of the system, connecting customer records, billing, status changes, and admin analytics.",
    decisions: [
      "Service workflow modeling",
      "Billing records",
      "Chart.js analytics",
      "MongoDB persistence",
      "Responsive admin UI",
    ],
    scaling:
      "A workflow-first model makes it easier to add technician assignment, SLA reporting, and customer notifications later.",
    teaching:
      "Strong teaching material for turning messy real-world operations into clean domain models.",
    video: "Nest.js Module Design Explained",
    walkthroughBody:
      "Hi Ananthu, I would like to see the Refix Garage module design walkthrough.",
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
];

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