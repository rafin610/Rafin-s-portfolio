import { Project, TimelineMilestone, SkillCategory, LearningItem, AIWorkflowStep, IdeaItem, CurrentlyBuildingItem } from '../types';

import portraitPath from '../assets/images/ahmed_rafin_real_portrait_1785078265376.jpg';
import orbPath from '../assets/images/abstract_orb_sphere_1785077491599.jpg';

export const PERSONAL_INFO = {
  name: "Ahmed Rafin",
  role: "Self-Taught Developer & AI Builder",
  location: "Bangladesh",
  email: "ahmedrafin014@gmail.com",
  whatsapp: "+880 1629 221285",
  whatsappUrl: "https://wa.me/8801629221285",
  github: "https://github.com/rafin610",
  facebook: "https://www.facebook.com/profile.php?id=100035494603229",
  twitter: "https://x.com/RafinAhmed78831",
  bio: "I'm a self-taught developer from Bangladesh, learning through building real projects. My main interests are web development, AI, AI-assisted development, automation, product building, and modern developer tools. I'm currently studying while building real projects — turning every idea into something I can ship and learn from.",
  quote: "I learn best by building real things. Instead of waiting until I know everything, I build, face problems, solve them, and improve along the way.",
  portraitPath: portraitPath,
  orbPath: orbPath
};

export const PROJECTS: Project[] = [
  {
    id: "odhyay",
    number: "01",
    title: "ODHYAY",
    headline: "A calm reading experience for Bangla readers.",
    description: "A digital reading platform focused on creating a calm and accessible reading experience for Bangla readers. Built with a modern web stack for fast, fluid interactions.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "PostgreSQL"],
    status: "Building / Live",
    color: "from-amber-500/20 to-orange-500/10",
    category: "Bangla Digital Reading Platform",
    liveUrl: "https://odhyay.vercel.app/",
    githubUrl: "https://github.com/rafin610/odhyay",
    keyFeatures: [
      "Digital book reading experience",
      "Book management and categorization",
      "Author profiles and discovery",
      "Reading progress tracking",
      "Admin functionality for content management"
    ]
  },
  {
    id: "the-dropout-college",
    number: "02",
    title: "THE DROPOUT COLLEGE",
    headline: "A community for self-driven learners and builders.",
    description: "A community platform for people who want to learn practical skills and build things outside traditional paths — covering coding, AI, content creation, video editing, esports, and creative technology.",
    tags: ["Community Platform", "Web", "Self-Education"],
    status: "Building",
    color: "from-indigo-500/20 to-purple-500/10",
    category: "Community Platform",
    liveUrl: "https://the-dropout-college.vercel.app/",
    githubUrl: "https://github.com/rafin610/The-dropout-college",
    keyFeatures: [
      "Platform for self-driven learners",
      "Focused on practical skills and building",
      "Covers coding, AI, content creation, and more"
    ]
  },
  {
    id: "dropclip",
    number: "03",
    title: "DROPCLIP",
    headline: "Simple video downloading for normal users.",
    description: "A lightweight desktop video downloader project focused on making video downloading simple and accessible for normal users. Built with Python and distributed as an executable.",
    tags: ["Python", "Desktop App", "CLI", "GitHub Releases"],
    status: "Experimental / Built",
    color: "from-cyan-500/20 to-emerald-500/10",
    category: "Desktop Application",
    githubUrl: "https://github.com/nirobmia-40/DropClip",
    keyFeatures: [
      "Lightweight desktop video downloader",
      "Simple interface for non-technical users",
      "Executable distribution via GitHub releases"
    ]
  }
];

export const CURRENTLY_BUILDING: CurrentlyBuildingItem[] = [
  {
    name: "Odhyay",
    description: "Bangla digital reading platform with enhanced typography and reader controls.",
    status: "Live & Iterating",
    url: "https://odhyay.vercel.app/"
  },
  {
    name: "The DropOut College",
    description: "Community platform connecting alternative learners, creators, and builders.",
    status: "Building & Growing",
    url: "https://the-dropout-college.vercel.app/"
  },
  {
    name: "AI & Local LLM Workflows",
    description: "Experimenting with Ollama, MCP servers, and agentic coding setups.",
    status: "Active Exploration"
  }
];

export const IDEAS: IdeaItem[] = [
  {
    id: "odhyay-audio",
    title: "Odhyay Audio & Offline Mode",
    tagline: "Listen to Bangla literature on the go with zero connection drops.",
    status: "Building",
    category: "EdTech / Media",
    problem: "Bengali readers often lose reading progress when traveling with flaky internet, and audio alternatives for classic Bangla books are fragmented.",
    coreIdea: "Local IndexedDB caching + offline reader sync combined with lightweight text-to-speech narration.",
    solution: "A service worker caching layer with customizable audio playback pace and bookmarks.",
    tags: ["PWA", "Offline Sync", "Bangla TTS", "IndexedDB"]
  },
  {
    id: "dropout-hub",
    title: "The DropOut Showcase Hub",
    tagline: "A proof-of-work feed for youth building without degrees.",
    status: "Building",
    category: "Community",
    problem: "Young self-taught creators struggle to get feedback and credibility without traditional credentials or corporate resumes.",
    coreIdea: "Micro-ship logs where builders post daily changelogs, demos, and code repositories to earn community badges.",
    solution: "A minimalist dashboard tracking shipped projects, peer reviews, and live collaboration invites.",
    tags: ["Community", "Proof of Work", "Builders", "Next.js"]
  },
  {
    id: "local-dev-cli",
    title: "DevPilot Local Assistant",
    tagline: "Zero-latency code explanations powered entirely by local Ollama models.",
    status: "Experimenting",
    category: "Developer Tools / AI",
    problem: "Cloud AI tools have rate limits, privacy concerns with proprietary code, and require constant connectivity.",
    coreIdea: "A lightweight terminal CLI communicating directly with a local Ollama instance for git diff reviews and quick explanations.",
    solution: "Small Python/Node CLI tool that inspects staged git files and suggests commit messages and catches syntax mistakes locally.",
    tags: ["Local AI", "Ollama", "CLI", "Automation"]
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    id: "curiosity",
    period: "Early Days",
    title: "Curiosity",
    subtitle: "Taking things apart to see how they worked.",
    description: "It began with breaking old toys, dismantling computer hardware, and wondering what happens behind the screen whenever a button is clicked.",
    quote: "Questioning everything became a natural habit.",
    iconName: "Sparkles"
  },
  {
    id: "digital-world",
    period: "Growth",
    title: "Internet & Digital World",
    subtitle: "Discovering the global web from Bangladesh.",
    description: "Exploring blogs, online communities, forums, and early web platforms. Realizing that anyone with an internet connection can share ideas worldwide.",
    quote: "The web felt like an endless ocean of possibility.",
    iconName: "Globe"
  },
  {
    id: "gaming",
    period: "Identity",
    title: "Gaming & Competition",
    subtitle: "Strategy, reaction times, and team dynamics.",
    description: "Diving deep into competitive gaming, tactical mechanics, and esports team coordination. Learning leadership and teamwork under pressure.",
    quote: "Gaming taught me leadership under intense pressure.",
    iconName: "Gamepad2"
  },
  {
    id: "technology",
    period: "Pivot",
    title: "Technology",
    subtitle: "From consumer to creator.",
    description: "Understanding the building blocks of operating systems, web servers, and modern developer ecosystems. Shifting from consuming technology to wanting to build with it.",
    quote: "Consuming technology was no longer enough.",
    iconName: "Cpu"
  },
  {
    id: "coding",
    period: "Execution",
    title: "Self-Taught Coding",
    subtitle: "Writing first lines of code and learning by doing.",
    description: "Learning HTML, CSS, JavaScript, React, and modern tooling through online resources, documentation, and building real projects. No traditional CS path — just curiosity and determination.",
    quote: "Every bug taught me more than any textbook could.",
    iconName: "Code2"
  },
  {
    id: "ai-building",
    period: "Current Stage",
    title: "AI-Assisted Building",
    subtitle: "Using AI to learn faster and build smarter.",
    description: "Integrating AI into my development workflow — using it for research, planning, debugging, and experimenting with local models and automation. Building real projects like Odhyay and The DropOut College.",
    quote: "AI isn't replacing my learning — it's accelerating it.",
    iconName: "Layers"
  },
  {
    id: "future",
    period: "Next",
    title: "Keep Building",
    subtitle: "Ship more, learn more, build community.",
    description: "Continuing to build real products, grow The DropOut College community, and deepen my understanding of web development, AI, and production-level applications.",
    quote: "Still learning. Still building. Still becoming.",
    iconName: "Rocket"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building interfaces and user experiences for the web.",
    icon: "Code",
    skills: [
      { name: "HTML", level: "Comfortable" },
      { name: "CSS", level: "Comfortable" },
      { name: "JavaScript", level: "Working Knowledge" },
      { name: "React", level: "Working Knowledge" },
      { name: "Vite", level: "Working Knowledge" },
      { name: "Tailwind CSS", level: "Comfortable" }
    ]
  },
  {
    category: "Backend",
    description: "Server-side logic, APIs, and data handling.",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Learning" },
      { name: "Express.js", level: "Learning" },
      { name: "tRPC", level: "Exploring" }
    ]
  },
  {
    category: "Database",
    description: "Data storage, schemas, and validation.",
    icon: "Database",
    skills: [
      { name: "Supabase", level: "Working Knowledge" },
      { name: "PostgreSQL", level: "Learning" },
      { name: "Zod", level: "Learning" }
    ]
  },
  {
    category: "AI",
    description: "AI tools, models, and development workflows.",
    icon: "Bot",
    skills: [
      { name: "AI-assisted Development", level: "Working Knowledge" },
      { name: "Prompt Engineering", level: "Working Knowledge" },
      { name: "Ollama", level: "Exploring" },
      { name: "Hugging Face", level: "Exploring" },
      { name: "Local AI", level: "Exploring" },
      { name: "AI Agents", level: "Exploring" },
      { name: "MCP", level: "Exploring" },
      { name: "AI Automation", level: "Exploring" }
    ]
  },
  {
    category: "Tools",
    description: "Developer tools and deployment platforms.",
    icon: "Wrench",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "VS Code", level: "Comfortable" },
      { name: "Vercel", level: "Working Knowledge" },
      { name: "Android Studio", level: "Learning" },
      { name: "Expo", level: "Exploring" },
      { name: "Linux", level: "Learning" },
      { name: "PowerShell", level: "Working Knowledge" }
    ]
  }
];

export const LEARNING_GOALS: LearningItem[] = [
  { subject: "Advanced JavaScript", stage: "Learning", focus: "Deep understanding of async patterns, closures, and performance." },
  { subject: "Backend Architecture", stage: "Learning", focus: "Building APIs, server logic, and understanding system design." },
  { subject: "AI Agents & MCP", stage: "Exploring", focus: "Building and experimenting with AI agents and model context protocols." },
  { subject: "Local AI & Automation", stage: "Exploring", focus: "Running models locally with Ollama, Hugging Face, and building automation workflows." },
  { subject: "React Native / Expo", stage: "Exploring", focus: "Cross-platform mobile development for iOS and Android." },
  { subject: "Production-Level Development", stage: "Learning", focus: "Building applications that can handle real users, real data, and real scale." }
];

export const AI_WORKFLOW_STEPS: AIWorkflowStep[] = [
  { label: "Research", description: "Use AI to explore topics, read documentation, and understand problems faster." },
  { label: "Plan", description: "Structure ideas, outline architecture, and map out features before coding." },
  { label: "Build", description: "Write code with AI assistance — accelerating implementation and solving blockers." },
  { label: "Debug", description: "Troubleshoot issues with AI-assisted root cause analysis and suggestions." },
  { label: "Automate", description: "Streamline repetitive tasks, workflows, and developer operations." },
  { label: "Ship", description: "Deploy, gather user feedback, and iterate quickly on real products." }
];

export const AI_EXPLORATIONS = [
  "Local AI (Ollama)",
  "Hugging Face Models",
  "AI Agents",
  "MCP (Model Context Protocol)",
  "AI Automation",
  "AI-Assisted Coding"
];
