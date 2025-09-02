import project1 from "../public/projects/project-1.png";
import project2 from "../public/projects/project-2.png";
import project3 from "../public/projects/project-3.png";
import project4 from "../public/projects/project-4.png";
import project5 from "../public/projects/project-5.png";
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
    website: process.env.PORTFOLIO_URL,
    image: project4,
    description: "Showcases my skills, projects, and professional journey with responsive design and animations.",
    technologies: ["Next.js", "React", "TS", "Tailwind", "Framer Motion"]
  },
  {
    title: "Wanderlust",
    website: process.env.WANDERLUST_URL,
    image: project2,
    description: "Hotel & restaurant booking platform with live chat, chatbot, and payment integration.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind", "Stripe", "Socket.IO"]
  },
  {
    title: "E-Learning",
    website: process.env.ELEARNING_URL,
    image: project5,
    description: "Online courses platform with authentication, course management, and progress tracking.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind", "Redux"]
  },
  {
    title: "Password Generator",
    website: process.env.PSWD_GENERATOR_URL,
    image: project3,
    description: "Generates strong passwords with authentication and storage.",
    technologies: ["React", "Node", "Express", "MongoDB", "Tailwind"]
  },
  {
    title: "Smart Depot",
    website: process.env.SMARTDEPOT_URL,
    image: project1,
    description: "E-commerce platform for service engineers with secure checkout and order tracking.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Razorpay", "Chart.js"]
  },
  {
    title: "Refix Garage",
    website: process.env.REFIX_URL,
    image: noimage,
    description: "Garage management system with service tracking, billing, and analytics.",
    technologies: ["Next.js", "Node", "MongoDB", "Tailwind", "Chart.js"]
  },
  {
    title: "Interview App",
    website: process.env.INTERVIEW_URL,
    image: noimage,
    description: "Practice interviews with slot booking, user management, and real-time communication.",
    technologies: ["Next.js", "Nest.js", "MongoDB", "Socket.IO", "Tailwind"]
  },
  {
    title: "Hit the Smiley",
    website: process.env.HIT_SMILEY_URL,
    image: noimage,
    description: "Interactive game with score tracking, animations, and responsive design.",
    technologies: ["React", "TS", "Redux", "GSAP", "Tailwind"]
  },
  {
    title: "Netflix Clone",
    website: process.env.NETFLIX_CLONE_URL,
    image: noimage,
    description: "React-based Netflix clone with API integration and responsive UI.",
    technologies: ["React", "CSS", "Axios", "JS"]
  },
  {
    title: "Weather App",
    website: process.env.WEATHER_URL,
    image: noimage,
    description: "Displays current weather using API integration.",
    technologies: ["HTML", "CSS", "JS", "API"]
  },
  {
    title: "Demo Portfolio",
    website: process.env.DEMO_PORTFOLIO_URL,
    image: noimage,
    description: "Bootstrap-based portfolio template with contact form.",
    technologies: ["HTML", "CSS", "Bootstrap"]
  },
  {
    title: "README Generator",
    website: process.env.README_GENERATOR_URL,
    image: noimage,
    description: "Generates professional GitHub README files with AI integration.",
    technologies: ["Next.js", "TS", "Tailwind"]
  }
];


export const CONTACT = {
  linkedin: process.env.LINKEDIN,
  github: process.env.GITHUB,
  email: process.env.EMAIL,
  instagram: process.env.INSTAGRAM,
};