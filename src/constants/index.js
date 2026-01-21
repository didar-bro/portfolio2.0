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
  python,
  langchain,
  openai,
  pytorch,
  sklearn,
  tensorflow,
} from "../assets";
import {
  EcoWave1,
  EcoWave2,
  EcoWave3,
  EcoWave4,
  EcoWave5,
  braintumor,
  chestxray,
  signlanguage,
  smokeprediction,
  facialemotion,
  strokeprediction,
  studentdropout,
  hyperkvasir,
  hospital1,
  hospital2,
  hospital3,
  streaming,
  streaming2,
  streaming3,
  elearning,
  elearning2,
  elearning3,
  hotel,
  hotel2,
  hotel3,
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
    title: "MERN Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Focused Developer",
    icon: backend,
  },
  {
    title: "AI/ML Developer and Researcher",
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },

  // 🔹 AI / ML Technologies
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "Scikit-learn",
    icon: sklearn,
  },
  {
    name: "OpenAI / LLM APIs",
    icon: openai,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
];

const experiences = [
  {
    title: "BSC in Computer Science and Engineering (AI Major)",
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
    images: [EcoWave1, EcoWave2, EcoWave3, EcoWave4, EcoWave5], // Single image
    source_code_link: "https://github.com/didarBro/Real-state-Website",
    live_link: "https://ecowave-consultant.vercel.app/",
    details: "https://docs.example.com/interior-design",
    category: "development",
  },
  {
    name: "Multi-Vendor Hotel Management System",
    description:
      "A comprehensive multi-vendor hotel management platform where multiple hotels can register, manage rooms, pricing, availability, and bookings from a centralized dashboard. The system supports role-based access for super admin, hotel admins, and staff, along with real-time room availability, booking management, customer records, and reporting features.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "expressjs", color: "text-green-500" },
      { name: "mongodb", color: "text-green-500" },
      { name: "tailwind", color: "text-pink-500" },
    ],
    images: [hotel, hotel2, hotel3],
    source_code_link: "https://github.com/didarBro/Hotel-Management-",
    live_link: "https://hotel-management-demo.vercel.app/",
    details: "https://docs.example.com/hotel-management",
    category: "development",
  },
  {
    name: "Hospital Management System",
    description:
      "A full-featured hospital management system designed to streamline administrative and clinical operations. It includes patient registration, appointment scheduling, doctor management, electronic medical records, billing, and role-based dashboards for admins, doctors, and reception staff. The system ensures efficient data handling and improved patient care workflows.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "expressjs", color: "text-green-500" },
      { name: "mongodb", color: "text-green-500" },
      { name: "tailwind", color: "text-pink-500" },
    ],
    images: [hospital1, hospital2, hospital3],
    source_code_link: "https://github.com/didarBro/Hospital-Management-System",
    live_link: "https://care-chain-frontend.vercel.app/login",
    details: "https://docs.example.com/hospital-management",
    category: "development",
  },
  {
    name: "E-Learning Management System",
    description:
      "An interactive e-learning management system that allows instructors to create and manage courses, upload video lessons, assignments, and quizzes. Students can enroll in courses, track progress, and access learning materials through a responsive interface. The platform includes authentication, role-based access, and performance analytics.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "expressjs", color: "text-green-500" },
      { name: "mongodb", color: "text-green-500" },
      { name: "tailwind", color: "text-pink-500" },
    ],
    images: [elearning, elearning2, elearning3],
    source_code_link: "https://github.com/didarBro/E-Learning-Management-System-",
    live_link: "https://elearning-platform-demo.vercel.app/",
    details: "https://docs.example.com/e-learning",
    category: "development",
  },
  {
    name: "Streaming Website",
    description:
      "A modern streaming platform built to deliver video content such as movies, series, or educational videos. The system supports user authentication, content categorization, search, watch history, and admin content management. Optimized for performance and scalability, the platform delivers a smooth and engaging viewing experience.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "nodejs", color: "text-green-500" },
      { name: "expressjs", color: "text-green-500" },
      { name: "mongodb", color: "text-green-500" },
      { name: "tailwind", color: "text-pink-500" },
    ],
    images: [streaming, streaming2, streaming3],
    source_code_link: "https://github.com/didarBro/Streaming-Website",
    live_link: "https://streaming-platform-demo.vercel.app/",
    details: "https://docs.example.com/streaming-platform",
    category: "development",
  },
  {
    name: "Chest X-ray Report Generation",
    description:
      "An AI-powered system that automatically analyzes chest X-ray images and generates comprehensive medical reports. Uses deep learning models to detect abnormalities, lung conditions, and provide diagnostic insights to assist radiologists.",
    tags: [
      { name: "Python", color: "text-yellow-500" },
      { name: "TensorFlow", color: "text-orange-500" },
      { name: "OpenCV", color: "text-blue-500" },
      { name: "Medical Imaging", color: "text-red-500" },
      { name: "NLP", color: "text-green-500" },
    ],
    images: [chestxray], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.chest-xray.com/",
    details: "https://docs.example.com/chest-xray",
    category: "ai-ml",
  },
  {
    name: "Brain Tumor Detection & Classification",
    description:
      "Computer vision system that detects and classifies brain tumors from MRI scans using convolutional neural networks. Classifies tumors into glioma, meningioma, pituitary, or no-tumor categories with high accuracy.",
    tags: [
      { name: "PyTorch", color: "text-red-500" },
      { name: "CNN", color: "text-purple-500" },
      { name: "Medical AI", color: "text-red-500" },
      { name: "Image Processing", color: "text-blue-500" },
      { name: "Grad-CAM", color: "text-green-500" },
    ],
    images: [braintumor], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.brain-tumor.ai/",
    details: "https://docs.example.com/brain-tumor",
    category: "ai-ml",
  },
  {
    name: "Vehicle Smoke Prediction & Classification",
    description:
      "Real-time computer vision system that detects and classifies vehicle smoke emissions using surveillance cameras. Helps environmental agencies monitor pollution and identify polluting vehicles.",
    tags: [
      { name: "YOLOv8", color: "text-purple-500" },
      { name: "OpenCV", color: "text-blue-500" },
      { name: "Real-time", color: "text-green-500" },
      { name: "Environmental AI", color: "text-green-500" },
      { name: "Computer Vision", color: "text-blue-500" },
    ],
    images: [smokeprediction], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.smoke-detection.com/",
    details: "https://docs.example.com/vehicle-smoke",
    category: "ai-ml",
  },
  {
    name: "Real-time Facial Emotion Detection",
    description:
      "Live emotion recognition system using webcam feed that detects seven basic emotions: anger, disgust, fear, happiness, sadness, surprise, and neutral. Built with deep learning models for real-time performance.",
    tags: [
      { name: "Deep Learning", color: "text-purple-500" },
      { name: "Real-time", color: "text-green-500" },
      { name: "OpenCV", color: "text-blue-500" },
      { name: "FER", color: "text-pink-500" },
      { name: "WebRTC", color: "text-blue-500" },
    ],
    images: [facialemotion], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.emotion-detection.com/",
    details: "https://docs.example.com/emotion-detection",
    category: "ai-ml",
  },
  {
    name: "Real-time Sign Language Detection",
    description:
      "Interactive system that translates American Sign Language gestures into text and speech in real-time. Uses pose estimation and sequence models to recognize dynamic gestures with high accuracy.",
    tags: [
      { name: "MediaPipe", color: "text-orange-500" },
      { name: "LSTM", color: "text-purple-500" },
      { name: "Real-time", color: "text-green-500" },
      { name: "Accessibility", color: "text-blue-500" },
      { name: "Gesture Recognition", color: "text-yellow-500" },
    ],
    images: [signlanguage], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.sign-language.com/",
    details: "https://docs.example.com/sign-language",
    category: "ai-ml",
  },
  {
    name: "Stroke Prediction using Machine Learning",
    description:
      "Predictive analytics system that identifies individuals at risk of stroke using patient health data. Implements multiple ML algorithms with feature importance analysis for early intervention.",
    tags: [
      { name: "Scikit-learn", color: "text-orange-500" },
      { name: "XGBoost", color: "text-green-500" },
      { name: "Feature Engineering", color: "text-blue-500" },
      { name: "Healthcare", color: "text-red-500" },
      { name: "Predictive Analytics", color: "text-purple-500" },
    ],
    images: [strokeprediction], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.stroke-prediction.com/",
    details: "https://docs.example.com/stroke-prediction",
    category: "ai-ml",
  },
  {
    name: "Student Dropout Prediction System",
    description:
      "Machine learning system that predicts student dropout risk using academic and demographic data. Helps educational institutions implement early intervention strategies to improve retention rates.",
    tags: [
      { name: "Random Forest", color: "text-green-500" },
      { name: "Logistic Regression", color: "text-blue-500" },
      { name: "EDA", color: "text-yellow-500" },
      { name: "Education", color: "text-blue-500" },
      { name: "Predictive Modeling", color: "text-purple-500" },
    ],
    images: [studentdropout], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.student-dropout.com/",
    details: "https://docs.example.com/student-dropout",
    category: "ai-ml",
  },
  {
    name: "Hyper-Kvasir Localization & Classification",
    description:
      "Advanced system for gastrointestinal disease detection from endoscopic images. Localizes anomalies and classifies them into multiple disease categories using state-of-the-art object detection models.",
    tags: [
      { name: "Detectron2", color: "text-purple-500" },
      { name: "Object Detection", color: "text-blue-500" },
      { name: "Medical AI", color: "text-red-500" },
      { name: "Endoscopy", color: "text-red-500" },
      { name: "Multi-class", color: "text-green-500" },
    ],
    images: [hyperkvasir], // Single image
    source_code_link:
      "https://github.com/didarBro/Kaggle-AI-ML-all-code-backup",
    live_link: "https://demo.hyper-kvasir.com/",
    details: "https://docs.example.com/hyper-kvasir",
    category: "ai-ml",
  },
];
export { services, technologies, experiences, testimonials, projects };
