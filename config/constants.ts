import project1 from "../public/projects/project-1.png";
import project2 from "../public/projects/project-2.png";
import project3 from "../public/projects/project-3.png";
import project4 from "../public/projects/project-4.png";
import project5 from "../public/projects/project-5.png";

export const HERO_CONTENT = `Welcome to my portfolio! I'm Ananthu M A, a skilled MERN stack developer with a comprehensive understanding of front-end and back-end technologies. My journey in tech began with a Diploma in Electronics Engineering, and I further honed my skills in computer science and software development through intensive training. With a knack for problem-solving and a keen eye for detail, I specialize in building scalable and efficient web applications. My portfolio showcases a range of projects, from complex e-commerce platforms to innovative hotel booking systems, demonstrating my versatility and commitment to excellence. Explore my work, and let's connect to discuss how I can contribute to your next big project!`;

export const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL;

export const ABOUT_TEXT = `Hello, I'm Ananthu M A, a dedicated MERN stack developer with a passion for creating scalable web applications and robust backends. With expertise in Node.js and Express.js, I thrive on building dynamic user interfaces using React.js. My problem-solving mindset, attention to detail, and ability to quickly adapt to new technologies enable me to deliver high-quality solutions in collaborative environments. Whether it's developing intricate hotel booking systems or comprehensive e-commerce platforms, I focus on leveraging the best practices and clean architecture to ensure maintainability and efficiency in my projects.`;

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
    title: "Portfolio Website",
    website: process.env.PORTFOLIO_URL,
    image: project4,
    description: "A personal portfolio website showcasing my skills, projects, and professional journey. The site includes sections for about me, projects, skills, and contact information.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"]
  },
  {
    title: "Wanderlust Hotel Booking Platform",
    website: process.env.WANDERLUST_URL,
    image: project2,
    description: "A cutting-edge platform for booking hotels with a chatbot system for hotel and restaurant reservations, featuring an admin panel for user, booking, and payment monitoring.",
    technologies: ["TypeScript", "Tailwind", "Stripe", "Socket.IO", "Vercel", "JWT", "Axios", "Cloudinary", "React-Chatbotify", "Google Places API"]
  },
  {
    title: "E-Learning Platform ( Launching Soon )",
    website: process.env.ELEARNING_URL,
    image: project5,
    description: "An online learning platform designed to offer courses and educational content, featuring user authentication, course management, and a clean, user-friendly interface.",
    technologies: ["React.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Password Generator Online ( Undergoing Maintenance )",
    website: process.env.PSWD_GENERATOR_URL,
    image: project3,
    description: "A web application that generates strong, customizable passwords.",
    technologies: ["React.js", "Express.js", "MongoDB", "TypeScript", "Tailwind"]
  },
  {
    title: "Smart Depot E-Commerce Platform",
    website: process.env.SMARTDEPOT_URL,
    image: project1,
    description: "An e-commerce platform designed for smartphone service engineers and trainers to purchase repair tools and spare parts, featuring secure payment integration and cloud deployment.",
    technologies: ["EJS", "Bootstrap", "Razorpay", "MVC", "Mongoose", "Chart.js", "Nodemailer"]
  },
];

export const CONTACT = {
  linkedin: process.env.LINKEDIN,
  github: process.env.GITHUB,
  email: process.env.EMAIL,
  instagram: process.env.INSTAGRAM,
};