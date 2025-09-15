import project2 from "../public/projects/project-2.png";
import project4 from "../public/projects/project-4.png";
import project6 from "../public/projects/project-6.png";
import project12 from "../public/projects/project-12.png";
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
    title: "Portfolio",
    website: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    github: process.env.NEXT_PUBLIC_PORTFOLIO_GITHUB,
    image: project4,
    description: "Showcases my skills, projects, and professional journey with responsive design and animations.",
    technologies: ["Next.js", "React", "TS", "Tailwind", "Framer Motion"]
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
    title: "Refix Garage",
    website: process.env.NEXT_PUBLIC_REFIX_GARAGE_URL,
    github: process.env.NEXT_PUBLIC_REFIX_GARAGE_GITHUB,
    image: project6,
    description: "Smartphone service center management system with service tracking, billing, and analytics.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Chart.js"]
  },
  {
    title: "Hit the Smiley",
    website: process.env.NEXT_PUBLIC_HIT_SMILEY_URL,
    github: process.env.NEXT_PUBLIC_HIT_SMILEY_GITHUB,
    image: noimage,
    description: "Interactive game with animations, score tracking & responsive design.",
    technologies: ["React", "TS", "Redux", "GSAP", "Tailwind"]
  },
  {
    title: "README Generator",
    website: process.env.NEXT_PUBLIC_README_GENERATOR_URL,
    github: process.env.NEXT_PUBLIC_README_GENERATOR_GITHUB,
    image: project12,
    description: "Generates professional GitHub README files with AI integration.",
    technologies: ["Next.js", "TS", "Tailwind", "Gemini AI"]
  },
  {
    title: "Password Generator",
    website: process.env.NEXT_PUBLIC_PSWD_GENERATOR_URL,
    github: process.env.NEXT_PUBLIC_PSWD_GENERATOR_GITHUB,
    image: noimage,
    description: "Generates strong passwords with authentication and storage.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind"]
  },
  {
    title: "Smart Depot",
    website: process.env.NEXT_PUBLIC_SMARTDEPOT_URL,
    github: process.env.NEXT_PUBLIC_SMARTDEPOT_GITHUB,
    image: noimage,
    description: "E-commerce platform for service engineers with secure checkout and order tracking.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Razorpay", "Chart.js"]
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
    title: "E-Learning",
    website: process.env.NEXT_PUBLIC_ELEARNING_URL,
    github: process.env.NEXT_PUBLIC_ELEARNING_GITHUB,
    image: noimage,
    description: "Online courses platform with course management, progress tracking, and authentication.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind", "Redux"]
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
];


export const CONTACT = {
  linkedin: process.env.LINKEDIN,
  github: process.env.GITHUB,
  email: process.env.EMAIL,
  instagram: process.env.INSTAGRAM,
};