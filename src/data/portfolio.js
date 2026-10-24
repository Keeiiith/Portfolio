

export const profile = {
  name: "Keith Ryan N. Almanzor",
  firstName: "Keith",
  initials: "KA",
  role: "Frontend Developer & UI/UX Designer",
  status: "Available for new opportunities",
  location: "Angeles City, Philippines",
  headline: "I design and build clean interfaces for web and mobile.",
  intro:
    "A frontend developer and UI/UX designer building simple, fast web and mobile apps. CS student at Holy Angel University.",
  statement:
    "I design in Figma and build in code, so what you see in the design is what ships.",
  subtitle:
    "BS Computer Science student at Holy Angel University.",
  bio: [
    "I'm a Computer Science student at Holy Angel University who enjoys the space between design and code. I design screens in Figma, then build them with Flutter and JavaScript so they work well on real devices.",
  ],
  // TODO: replace with your real links
  email: "keithryanalmanzor@gmail.com",
  resume: "/resume.pdf", 
  socials: {
    github: "https://github.com/Keeiiith",
    linkedin: "https://www.linkedin.com/in/keith-ryan-almanzor-459343345",
    twitter: "https://x.com/your-username",
  },
};

export const education = [
  {
    period: "2023 — Present",
    degree: "BS Computer Science",
    school: "Holy Angel University",
    badges: ["Dean's Lister", "SINAG 2026 Awardee"],
    description:
      "Consistently maintained top academic standing, and recognized for representing HAU in competitive hackathons in 2026 ",
  },
  {
    period: "2021 — 2023",
    degree: "STEM Strand",
    school: "Angeles City Science High School",
    badges: ["With Honors", "Math Society Member"],
    description:
      "Graduated with honors and was an active member of one of the school's most prominent academic clubs.",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "Java", "HTML", "CSS", "JavaScript", "Dart"],
  },
  {
    title: "Frameworks & Tools",
    items: ["Flutter", "Supabase", "VS Code", "Figma", "GitHub", "AWS"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication & Collaboration",
      "Teamwork & Adaptability",
      "Time Management",
      "Problem-Solving",
      "Fast Learner",
    ],
  },
];

// Lines typed out in the hero terminal. Edit freely.
export const terminal = [
  { cmd: "whoami", out: profile.name },
  { cmd: "role", out: "Frontend Developer · UI/UX Designer" },
  { cmd: "stack --main", out: "Flutter · Figma · JavaScript · Dart" },
  { cmd: "school", out: "BS Computer Science, Holy Angel University" },
  { cmd: "status", out: profile.status },
];

// Logo for each tool in the stack (PNG files live in /public/logos).
// Tools without an entry here show a letter instead.
export const logos = {
  Python: "/logos/python.png",
  Java: "/logos/java.png",
  HTML: "/logos/html.png",
  CSS: "/logos/css.png",
  JavaScript: "/logos/javascript.png",
  Dart: "/logos/dart.png",
  Flutter: "/logos/flutter.png",
  Supabase: "/logos/supabase.png",
  "VS Code": "/logos/vscode.png",
  Figma: "/logos/figma.png",
  GitHub: "/logos/github.png",
  AWS: "/logos/aws.png",
  Dify: "/logos/dify.png",
  Godot: "/logos/godot.png",
  MySQL: "/logos/mysql.png",
  PostgreSQL: "/logos/postgresql.png",
};

export const projects = [
  {
    title: "SAFE-T",
    subtitle: "Situational Awareness & Fast Evacuation Tracker",
    role: "Frontend Developer",
    period: "Dec 2025",
    award: "2nd Place",
    description:
      "A cross-platform mobile app that gives faster situational awareness and evacuation support during emergencies. I built the Flutter frontend and connected external APIs to show real-time emergency information.",
    tags: ["Flutter", "Dart", "REST APIs", "Team Adarna"],
    image: "/projects/safe-t.webp",
    fit: "contain",
    github: "https://github.com/Keeiiith/SAFE-T",
  },
  {
    title: "AldawWave",
    subtitle: "Data-Driven Commute Recommender",
    role: "UI/UX Designer & Assistant Frontend Developer",
    period: "Sep – Nov 2025",
    award: "Top 10 · PJDSC 2025",
    description:
      "A web app that helps commuters reduce heat exposure while traveling. I designed the interface and turned heat-index data and commute recommendations into screens that are easy to read.",
    tags: ["UI/UX", "Figma", "Responsive Design", "Frontend"],
    image: "/projects/aldawwave.webp",
    github: "https://github.com/RandelYumul/AldawWave",
  },
  {
    title: "ADAPT",
    subtitle: "Automated Data Assessment for Professional Trajectories",
    role: "Frontend Developer & UI/UX Designer",
    period: "Mar 2026",
    award: null,
    description:
      "An AI-powered career platform that checks claimed skills against verified ability. I made the wireframes, prototypes, user flows, and design system for resume upload, skill tests, results, learning paths, and job matches.",
    tags: ["Figma", "Design System", "Prototyping", "AI"],
    image: "/projects/adapt.webp",
    github: "https://github.com/Kimch-i/ADAPT",
  },
  {
    title: "FundBuddy",
    subtitle: "AI-Driven Financial Reporting",
    role: "Frontend Developer & UI/UX Designer",
    period: "Oct 2025",
    award: null,
    description:
      "A mobile app for liquidation, transaction tracking, and financial reporting. I designed the screens and built them in Flutter, working with the team to connect the financial workflows.",
    tags: ["Flutter", "Dart", "Figma", "Mobile"],
    image: "/projects/fundbuddy.webp",
    fit: "contain",
    github: "https://github.com/JReshley/Fund-Buddy",
    figma: "https://www.figma.com/design/KjPboXic75tiVga2KrXt3U/FUBU--Fund-Buddy?node-id=2-151&t=HW4FP3W9XAEfI7qI-1",
  },
  {
    title: "Angeles City Science High School Website",
    subtitle: "School information website",
    role: "Frontend Developer",
    period: "2023",
    award: null,
    description:
      "An informational website showing the school's programs, history, and announcements. I built and organized the pages with a focus on clear navigation and easy-to-read content.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/projects/acsci.webp",
    fit: "contain",
    private: true,
  },
];

// Shown when someone clicks the locked GitHub button on a private project.
export const privateNotice = {
  title: "This repository is private",
  body: "The code and files for this project include sensitive information about teachers from that time. The consent we asked for was only for using it during that school year, and I don't have permission from them to show it publicly right now.",
  note: "If you'd like to know more about the project, feel free to contact me.",
};

// Newest first.
export const experience = [
  {
    period: "Nov 2025",
    title: "Cloudstaff's AI Hackathon 2025",
    org: "Cloudstaff",
    badge: "2nd Place",
    description:
      "Built the frontend and the APIs for weather reports and maps, using Flutter and Dart.",
  },
  {
    period: "Sep – Nov 2025",
    title: "Philippine Junior Data Science Challenge (PJDSC) 2025",
    org: "University of the Philippines Diliman",
    badge: "Top 10 Finalist",
    description: "Built the frontend of our team's application and help create the mascot of the app as part of the Top 10 finalists.",
  },
  {
    period: "Jun 2025 – Mar 2026",
    title: "Operations Team Staff",
    org: "AWS Learning Club · Holy Angel University",
    badge: null,
    description:
      "Helped plan and run organization events, workshops, and student activities.",
  },
  {
    period: "Jun 2024 – Apr 2025",
    title: "Associate Director for Community Development",
    org: "League of Outstanding Programmers (LOOP) · Holy Angel University",
    badge: null,
    description:
      "Helped plan community activities and ran the organization's social media account, posting announcements and organizing events to keep members engaged.",
  },
  {
    period: "Jun 2024 – Jun 2025",
    title: "Finance Staff",
    org: "HAU College Student Council · School of Computing",
    badge: null,
    description:
      "Helped manage the budget, expense records, and financial documents for student council events.",
  },
];

export const navLinks = [
  { id: "top", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "stack", label: "My Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
