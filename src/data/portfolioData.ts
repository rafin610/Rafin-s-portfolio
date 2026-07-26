import { Project, IdeaItem, TimelineMilestone, SkillCategory, LearningItem } from '../types';

export const PERSONAL_INFO = {
  name: "Ahmed Rafin",
  role: "Student · Developer · Creative Technologist · Product Thinker",
  location: "Bangladesh",
  email: "ahmedrafin014@gmail.com",
  whatsapp: "+880 1629-221285",
  whatsappUrl: "https://wa.me/8801629221285?text=Hi%20Ahmed,%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect!",
  github: "https://github.com/ahmedrafin",
  linkedin: "https://linkedin.com/in/ahmedrafin",
  twitter: "https://x.com/ahmedrafin014",
  discord: "rafin#0001",
  bio: "A Bangladeshi student, developer, creative technologist, product thinker, gamer, and future entrepreneur. Passionate about turning raw curiosity into elegant digital products that make an impact.",
  quote: "I don't just want to use technology. I want to understand it, build with it, and eventually create something meaningful of my own.",
  portraitPath: new URL("../assets/images/ahmed_rafin_real_portrait_1785078265376.jpg", import.meta.url).href,
  orbPath: new URL("../assets/images/abstract_orb_sphere_1785077491599.jpg", import.meta.url).href
};

export const PROJECTS: Project[] = [
  {
    id: "beatflow",
    number: "01",
    title: "BEATFLOW",
    headline: "Music should feel effortless.",
    description: "A modern music player focused on smooth interaction, beautiful listening experiences, interactive playlists, synced lyrics, and ambient visualizer dynamics.",
    tags: ["React", "Web Audio API", "Tailwind CSS", "Motion", "Audio Engine"],
    status: "Interactive Prototype",
    color: "from-blue-500/20 to-indigo-500/10",
    category: "Audio Technology",
    featuredVisual: new URL("../assets/images/regenerated_image_1785078943872.png", import.meta.url).href,
    fullOverview: "BeatFlow was built out of frustration with cluttered streaming interfaces. It presents a distraction-free digital soundscape where audio playback reactive visuals match the pulse of the song.",
    keyFeatures: [
      "Custom Web Audio API frequency visualizer with real-time spectrum analysis",
      "Dynamic background gradient response syncing with album art dominance",
      "Seamless playlist queues and instant local track preview player",
      "Distraction-free immersive fullscreen player with synced typography"
    ],
    liveDemoType: "beatflow"
  },
  {
    id: "boibazar",
    number: "02",
    title: "BOIBAZAR",
    headline: "A better way to discover books.",
    description: "A premium digital bookstore concept designed specifically for the Bangladeshi book market, blending editorial discovery with modern e-commerce.",
    tags: ["React", "Tailwind CSS", "Search Indexing", "E-Commerce", "UI/UX"],
    status: "Active Concept",
    color: "from-amber-500/20 to-orange-500/10",
    category: "Product & E-Commerce",
    featuredVisual: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    fullOverview: "BoiBazar reimagines how readers in Bangladesh browse Bengali literature and global titles. Instead of cold algorithmic grids, BoiBazar offers curated editorial shelves, reader reviews, and instant author spotlights.",
    keyFeatures: [
      "Editorial shelf layouts tailored to Bangladeshi literary heritage and modern releases",
      "Smart category filtering (Humayun Ahmed, Thriller, Tech, Academic, Self-Improvement)",
      "Instant reader preview reader and sample chapter drawer",
      "Localized checkout interface designed for mobile banking (bKash/Nagad concept)"
    ],
    liveDemoType: "boibazar"
  },
  {
    id: "smart-pdf",
    number: "03",
    title: "SMART PDF READER",
    headline: "Reading should be more interactive.",
    description: "A smarter document experience that helps users read, understand, organize, highlight, summarize, translate, and query complex PDF documents.",
    tags: ["TypeScript", "PDF Engine", "AI Summarizer", "React", "Productivity"],
    status: "In Development",
    color: "from-cyan-500/20 to-emerald-500/10",
    category: "Intelligent Tools",
    featuredVisual: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80",
    fullOverview: "Static PDFs are hard to navigate and comprehend quickly. Smart PDF Reader integrates intelligent text extraction, key phrase highlighting, and quick summarization to make research seamless.",
    keyFeatures: [
      "Interactive reader with real-time text chunk highlighting and sticky note annotations",
      "Instant summary panel breaking down 50-page documents into 3-bullet core insights",
      "Multi-language translation helper tailored for academic research in English and Bengali",
      "Quick search engine with smart semantic section jumps"
    ],
    liveDemoType: "pdfreader"
  },
  {
    id: "nafs-control",
    number: "04",
    title: "NAFS CONTROL",
    headline: "Technology should help us control our attention.",
    description: "A personal discipline and digital habit management concept designed to help people build better daily routines, track focus sessions, and regain digital sovereignty.",
    tags: ["React", "State Architecture", "Habit Engine", "Tailwind CSS", "Mindfulness"],
    status: "Beta Concept",
    color: "from-emerald-500/20 to-teal-500/10",
    category: "Human & Attention",
    featuredVisual: "/src/assets/images/regenerated_image_1785078946015.jpg",
    fullOverview: "Nafs (Self-Discipline) Control treats human attention as a sacred resource. It provides calm visual trackers for screen limits, meditation, focus blocks, and habit consistency without anxiety-inducing gamification.",
    keyFeatures: [
      "Calm, distraction-free daily intention tracker",
      "Focus timer with soft atmospheric audio and visual pulse",
      "Reflection journal with privacy-first local storage",
      "Attention audit charts showing screen time shift over 30-day cycles"
    ],
    liveDemoType: "nafs"
  },
  {
    id: "red-paradox",
    number: "05",
    title: "RED PARADOX",
    headline: "Competition creates identity.",
    description: "An esports team, gaming hub, and digital community platform built around competitive gaming, teamwork, identity, and youth leadership in Bangladesh.",
    tags: ["React", "Community Hub", "Esports", "Tailwind CSS", "Branding"],
    status: "Community Live",
    color: "from-rose-500/20 to-red-600/10",
    category: "Gaming & Brand",
    featuredVisual: "/src/assets/images/regenerated_image_1785078947259.png",
    fullOverview: "Red Paradox brings competitive gamers together. Born out of a passion for esports and tactical gaming, it serves as an official team portal, tournament calendar, player roster showcase, and media channel.",
    keyFeatures: [
      "High-energy minimalist roster showcase with active player stats & main roles",
      "Match schedules and tournament result logs with livestream links",
      "Community hub integration for Discord scrims and tournament signups",
      "Custom branded merch & team highlight reel gallery"
    ],
    liveDemoType: "redparadox"
  }
];

export const IDEAS: IdeaItem[] = [
  {
    id: "boibazar-exp",
    title: "BoiBazar Live Audio Sampler",
    tagline: "Audiobook excerpts narrated in Bengali dialects.",
    problem: "Readers in Bangladesh rarely get to sample audiobook performances before purchasing full licenses.",
    coreIdea: "Provide 60-second high-fidelity ambient voice previews for top Bengali bestsellers.",
    solution: "A lightweight web player embedded right in the book detail drawer with synced transcript highlighting.",
    status: "Building",
    tags: ["E-Commerce", "Audio", "Bengali Literature"],
    category: "Publishing",
    updatedAt: "July 2026"
  },
  {
    id: "beatflow-cloud",
    title: "BeatFlow Cloud Sync",
    tagline: "Peer-to-peer library streaming without heavy server costs.",
    problem: "Personal local music collections are fragmented across laptop and mobile devices.",
    coreIdea: "Use WebRTC data channels to stream music directly from desktop storage to mobile browser.",
    solution: "Zero cloud storage fees; complete privacy and instant high-res playback.",
    status: "Exploring",
    tags: ["WebRTC", "P2P", "Audio"],
    category: "Networking",
    updatedAt: "June 2026"
  },
  {
    id: "nafs-blocker",
    title: "Nafs Hardware Attention Key",
    tagline: "Physical USB device to trigger quiet study mode.",
    problem: "Software blockers are too easy to bypass with two clicks during urge moments.",
    coreIdea: "A physical NFC tag or USB dongle that locks browser distraction tabs until tapped again.",
    solution: "Combines physical tactile action with browser extension protocol.",
    status: "Thinking",
    tags: ["Hardware", "Focus", "IoT"],
    category: "Mindfulness",
    updatedAt: "May 2026"
  },
  {
    id: "himi-loom",
    title: "Himi Loom",
    tagline: "Generative textile & pattern design tool inspired by Bangladeshi Jamdani geometry.",
    problem: "Traditional artisan patterns from Bangladesh are losing digital archive visibility.",
    coreIdea: "Use vector algorithms to generate modern responsive grid artwork based on historic Jamdani motifs.",
    solution: "Web canvas generator outputting SVG exportable assets for modern web designers and apparel creators.",
    status: "Experimenting",
    tags: ["Generative Art", "SVG", "Heritage"],
    category: "Creative Tech",
    updatedAt: "July 2026"
  },
  {
    id: "epiccut-studio",
    title: "EpicCut Studio",
    tagline: "Automated gaming highlight reel generator for esports clips.",
    problem: "Gamers spend hours slicing 2-hour twitch streams to find 10-second multi-kills.",
    coreIdea: "Detect loud audio spikes and killfeed UI changes to slice clips automatically.",
    solution: "A browser-based client video analyzer rendering fast MP4 reels.",
    status: "Exploring",
    tags: ["Video AI", "Esports", "WebAssembly"],
    category: "Gaming Tools",
    updatedAt: "April 2026"
  },
  {
    id: "digital-productivity",
    title: "Minimalist Bangla OCR Scratchpad",
    tagline: "Instant hand-written Bengali note digitizer.",
    problem: "Handwritten class notes in Bangla are tedious to turn into clean searchable text.",
    coreIdea: "Ultra-fast canvas drawing board with lightweight OCR model to convert Bangla script into plain markdown.",
    solution: "Runs locally in browser, instantly saving text into markdown files.",
    status: "Coming Soon",
    tags: ["OCR", "Bangla NLP", "Productivity"],
    category: "Tools",
    updatedAt: "July 2026"
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
    description: "Diving deep into competitive gaming, tactical mechanics, esports team coordination, and creating the Red Paradox community.",
    quote: "Gaming taught me leadership under intense pressure.",
    iconName: "Gamepad2"
  },
  {
    id: "technology",
    period: "Pivot",
    title: "Technology",
    subtitle: "From consumer to creator.",
    description: "Understanding the building blocks of operating systems, cloud infrastructures, web servers, and modern device ecosystems.",
    quote: "Consuming technology was no longer enough.",
    iconName: "Cpu"
  },
  {
    id: "coding",
    period: "Execution",
    title: "Coding & Engineering",
    subtitle: "Writing first lines of code and mastering syntax.",
    description: "Learning HTML, CSS, JavaScript, React, Tailwind, Node.js, and mobile development. Turning logic into functional user interfaces.",
    quote: "Code is the paint; the browser is the canvas.",
    iconName: "Code2"
  },
  {
    id: "products",
    period: "Current Stage",
    title: "Building Products",
    subtitle: "Crafting real tools like BeatFlow, BoiBazar, & Nafs Control.",
    description: "Shifting focus from small code snippets to complete, human-centered products that solve genuine needs in music, reading, and discipline.",
    quote: "Focusing on usability, aesthetics, and true purpose.",
    iconName: "Layers"
  },
  {
    id: "entrepreneurship",
    period: "Future",
    title: "Entrepreneurship",
    subtitle: "Creating something that matters.",
    description: "Building sustainable ventures, empowering youth technology in Bangladesh, and creating software that leaves a lasting positive footprint.",
    quote: "Still learning. Still building. Still becoming.",
    iconName: "Rocket"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Foundations",
    description: "The fundamental web languages and design principles I rely on daily.",
    skills: [
      { name: "HTML5", level: "Building" },
      { name: "CSS3 / Modern Layouts", level: "Building" },
      { name: "JavaScript (ES6+)", level: "Building" },
      { name: "Responsive Architecture", level: "Building" },
      { name: "Tailwind CSS v4", level: "Building" }
    ]
  },
  {
    category: "Development",
    description: "Frontend libraries, build systems, and workflow engines.",
    skills: [
      { name: "React 19", level: "Building" },
      { name: "Vite", level: "Building" },
      { name: "Node.js", level: "Practicing" },
      { name: "Git & Version Control", level: "Building" },
      { name: "GitHub Workflows", level: "Building" }
    ]
  },
  {
    category: "Mobile",
    description: "Cross-platform mobile frameworks for pocket-sized experiences.",
    skills: [
      { name: "Flutter", level: "Practicing" },
      { name: "Dart", level: "Practicing" },
      { name: "Expo", level: "Exploring" },
      { name: "React Native", level: "Exploring" }
    ]
  }
];

export const LEARNING_GOALS: LearningItem[] = [
  { subject: "JavaScript & Advanced Async Logic", stage: "Building", focus: "Deep event loop comprehension, Web Workers, & performance optimization.", progressPercentage: 85 },
  { subject: "React Architecture & Custom Hooks", stage: "Building", focus: "Clean state isolation, custom hooks, and Motion layout animations.", progressPercentage: 80 },
  { subject: "Mobile App Development (Flutter & Expo)", stage: "Practicing", focus: "Creating native mobile clients with fluid 60fps animations.", progressPercentage: 65 },
  { subject: "Cloud Infrastructure & Automation", stage: "Exploring", focus: "Containerization, serverless functions, and CI/CD pipelines.", progressPercentage: 50 },
  { subject: "Product Design & User Psychology", stage: "Understanding", focus: "Designing tools that respect human attention and reduce cognitive noise.", progressPercentage: 75 },
  { subject: "Business Strategy & Entrepreneurship", stage: "Understanding", focus: "Turning software concepts into viable, self-sustaining ventures.", progressPercentage: 60 }
];
