export const profile = {
  name: "Shaurya Pandey",
  title: "Full-Stack MERN Developer",
  location: "Lucknow, Uttar Pradesh",
  email: "shauryapandey4136@gmail.com",
  summary:
    "Full-Stack MERN Developer with practical experience in MongoDB, Express.js, React.js, and Node.js. Skilled in REST API development, JWT authentication, responsive UI design, and Git workflows.",
  focus:
    "I build role-based dashboards, production-ready APIs, and clean web interfaces for real users, with a strong interest in mentoring developers and improving full-stack delivery quality.",
  links: {
    github: "https://github.com/Shaurya4136",
    linkedin: "https://in.linkedin.com/in/shaurya-pandey-8807731a9",
    resume: "/Shaurya_Pandey_Resume_dev4.4.pdf",
    npm: "https://www.npmjs.com/package/@shaurya4136/code-compiler"
  }
};

export const metrics = [
  { label: "Developers mentored", value: "20+" },
  { label: "Learners trained", value: "200+" },
  { label: "MERN projects", value: "5" },
  { label: "Role completion rate", value: "95%" }
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "React Router", "Context API", "Sass", "Bootstrap", "Tailwind CSS", "UI/UX", "Figma"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "bcrypt", "MVC Architecture", "Socket.io"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "Mongoose", "CRUD", "RBAC", "Google Sheets API"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Render", "Vercel", "Netlify", "VS Code", "Chrome DevTools"]
  }
];

export const projects = [
  {
    name: "Coding Club Platform",
    eyebrow: "Full-stack community platform",
    image: "/images/coding-club.png",
    description:
      "A MERN platform for managing and showcasing a coding community with student and admin dashboards, authentication, and event-oriented workflows.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Mongoose", "Render"],
    highlights: [
      "Implemented JWT authentication with role-based admin and student access.",
      "Built RESTful APIs and dashboard flows for secure data management.",
      "Structured the app as a deployed, production-ready MERN project."
    ],
    links: [
      { label: "Live", href: "https://coding-club-jxro.onrender.com" },
      { label: "GitHub", href: "https://github.com/Shaurya4136/Coding-club" }
    ]
  },
  {
    name: "Clickkdesi E-Commerce",
    eyebrow: "Client delivery and checkout flow",
    image: "/images/clickkdesi.png",
    description:
      "A responsive cotton-wear e-commerce platform with shopping cart flows, Razorpay checkout, order storage, and operational order tracking.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay", "Google Sheets API"],
    highlights: [
      "Built a mobile-first shopping experience with optimized product presentation.",
      "Integrated Razorpay for secure online payments and checkout handling.",
      "Connected order data to MongoDB and Google Sheets for tracking."
    ],
    links: [{ label: "Live", href: "https://clickkdesistore.in/" }]
  },
  {
    name: "Chat Application",
    eyebrow: "Realtime messaging system",
    image: "/images/chat-app.png",
    description:
      "A realtime chat project with a Vite React frontend, Socket.io communication, API gateway layer, and multi-service backend structure.",
    stack: ["React", "Vite", "Socket.io", "Express", "API Gateway", "Docker Compose"],
    highlights: [
      "Designed a service-oriented structure with frontend, gateway, and backend services.",
      "Used Socket.io client and server packages for realtime communication.",
      "Prepared the architecture for scalable messaging features."
    ],
    links: [{ label: "GitHub", href: "https://github.com/Shaurya4136/chat-application" }]
  },
  {
    name: "Resume Analyzer",
    eyebrow: "Document parsing and analytics",
    image: "/images/resume-analyzer.png",
    description:
      "A resume analysis system with a React/Vite interface, Express backend, MongoDB storage, PDF parsing, Google Sheets integration, and Python service support.",
    stack: ["React", "Vite", "Express", "MongoDB", "PDF Parse", "Google APIs", "Python"],
    highlights: [
      "Built upload and parsing flows for PDF and document data extraction.",
      "Stored resume data in MongoDB and exported structured records to Google Sheets.",
      "Combined Node.js and Python service layers for analysis workflows."
    ],
    links: [{ label: "GitHub", href: "https://github.com/Shaurya4136/Resume-analyiser" }]
  },
  {
    name: "@shaurya4136/code-compiler",
    eyebrow: "Published developer tool",
    image: "/images/code-compiler.png",
    description:
      "A public NPM package for Docker-based multi-language code compilation, published as an MIT-licensed developer utility.",
    stack: ["Node.js", "Docker", "NPM", "Compiler Runtime", "MIT License"],
    highlights: [
      "Published package version 1.0.1 under the @shaurya4136 scope.",
      "Designed around isolated Docker execution for multi-language compilation.",
      "Demonstrates package publishing and reusable developer-tool delivery."
    ],
    links: [{ label: "NPM", href: "https://www.npmjs.com/package/@shaurya4136/code-compiler" }]
  }
];

export const experience = [
  {
    role: "MERN Stack Developer (Part-time)",
    company: "Zidio Development Pvt. Ltd.",
    period: "Jul 2025 - Present",
    highlights: [
      "Mentor 20+ developers through live coding, project reviews, and technical feedback.",
      "Collaborated with 20+ team members on REST API and JWT-based MERN projects.",
      "Helped maintain a 95% project completion rate while applying Git workflows and API design practices."
    ]
  },
  {
    role: "Trainer - Web Development & UI/UX",
    company: "Ensino Research and Development Pvt. Ltd.",
    period: "Nov 2024 - Jan 2025",
    highlights: [
      "Trained 200+ learners in HTML, CSS, JavaScript, and Figma.",
      "Guided learners through real-world projects, UI foundations, and internship-ready workflows."
    ]
  },
  {
    role: "Technical Advisor",
    company: "Concentrix Pvt. Ltd.",
    period: "Mar 2025 - May 2025",
    highlights: [
      "Provided cross-functional technical guidance on scalable system implementation.",
      "Resolved complex escalated issues across teams with structured troubleshooting."
    ]
  }
];

export const education = [
  {
    title: "B.Tech - Computer Science Engineering",
    institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    period: "2021 - 2025"
  },
  {
    title: "Intermediate - PCM (Class XII)",
    institution: "St. Joseph Montessori School, Lucknow",
    period: "2019 - 2021"
  }
];

export const achievements = [
  "Cisco Networking Fundamentals - Netcamp Solutions Pvt. Ltd. (Dec 2023)",
  "Momentum Award - Ensino R&D (Dec 2024)",
  "Appreciation Award - Ensino R&D (Dec 2024)",
  "Appreciation Award - Xtrude Engineers (Nov 2024)",
  "Published @shaurya4136/code-compiler on NPM with MIT license"
];
