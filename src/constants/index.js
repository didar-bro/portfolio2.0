import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import {
  EcoWave1,
  EcoWave2,
  EcoWave3,
  EcoWave4,
  EcoWave5,
} from "../assets/projects";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BSC in Computer Science and Engineering",
    company_name: "North South University",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "2020 - 2024",
    points: [
      "I have done my Bachelor degree in Computer Science and Engineering form North South University in Dhaka, Bangladesh.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "North South University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jane 2024 - December 2024",
    points: [
      "Worked as a research assistant with DR. Mohammad Abdul Qayum(Assistant professor at North South University)  on Embedded System, robotics, Artificial Intelligence and Machine Learning. ",
    ],
  },
  {
    title: "MERN stack Developer",
    company_name: "Startsmartz",
    icon: shopify,
    iconBg: "white",
    date: "November 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Interior Design Website",
    description:
      "This website is a content-focused platform designed to present the company's interior design services, organized through clear navigation and categorized portfolios. It highlights completed projects with detailed showcases, introduces the company and owner portfolio, and includes a blog for updates and insights. The site also enables user engagement through clear calls to action such as contact, quotation, and consultation, without incorporating e-commerce functionality.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "mongodb", color: "text-green-500" },
      { name: "tailwind", color: "text-pink-500" },
      { name: "nextjs", color: "text-blue-500" },
      { name: "expressjs", color: "text-green-500" },
    ],
    images: [EcoWave1, EcoWave2, EcoWave3, EcoWave4, EcoWave5], // Multiple images for slideshow
    source_code_link: "https://github.com/",
    live_link: "https://ecowave-consultant.vercel.app/",
    details: "https://docs.example.com/interior-design",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "restapi", color: "text-green-500" },
      { name: "scss", color: "text-pink-500" },
    ],
    images: [jobit, carrent, tripguide], // Multiple images for slideshow
    source_code_link: "https://github.com/",
    live_link: "https://jobit-demo.example.com",
    details: "https://docs.example.com/jobit",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "text-blue-500" },
      { name: "supabase", color: "text-green-500" },
      { name: "css", color: "text-pink-500" },
    ],
    images: [tripguide, jobit, carrent], // Multiple images for slideshow
    source_code_link: "https://github.com/",
    live_link: "https://tripguide-demo.example.com",
    details: "https://docs.example.com/tripguide",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "text-blue-500" },
      { name: "supabase", color: "text-green-500" },
      { name: "css", color: "text-pink-500" },
    ],
    images: [tripguide, jobit, carrent], // Multiple images for slideshow
    source_code_link: "https://github.com/",
    live_link: "https://tripguide-demo.example.com",
    details: "https://docs.example.com/tripguide",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "text-blue-500" },
      { name: "supabase", color: "text-green-500" },
      { name: "css", color: "text-pink-500" },
    ],
    images: [tripguide, jobit, carrent], // Multiple images for slideshow
    source_code_link: "https://github.com/",
    live_link: "https://tripguide-demo.example.com",
    details: "https://docs.example.com/tripguide",
  },
];
export { services, technologies, experiences, testimonials, projects };
