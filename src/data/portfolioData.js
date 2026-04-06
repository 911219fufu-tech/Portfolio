import unlmedDetail from "../assets/projects/unlmed-detail.png";
import unlmtdCover from "../assets/projects/unlmtd-cover.jpeg";
import readyRecipeCover from "../assets/projects/readyrecipe-cover.jpeg";
import readyRecipeDetail from "../assets/projects/readyrecipe-detail.jpeg";
import sudokuGameCover from "../assets/projects/sudokugame-cover.png";
import sudokuGameDetail from "../assets/projects/sudokugame-detail.png";
import joystickJournalCover from "../assets/projects/joystickjournal-cover.png";
import joystickJournalDetail from "../assets/projects/joystickjournal-detail.png";
import chronosenseCover from "../assets/projects/chronosense-cover.png";
import chronosenseDetail from "../assets/projects/chronosense-detail.png";

export const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

export const heroRoles = [
  "Frontend Developer",
  "UX/UI Designer",
  "Software Engineer",
];

export const galleryItems = [
  {
    title: "City Mornings",
    subtitle: "Noticing rhythm in everyday spaces",
    gradient:
      "linear-gradient(140deg, rgba(255,255,255,0.95), rgba(240,225,209,0.9) 40%, rgba(216,167,177,0.82))",
  },
  {
    title: "Weekend Hikes",
    subtitle: "Nature keeps my work grounded",
    gradient:
      "linear-gradient(145deg, rgba(122,139,122,0.94), rgba(194,211,193,0.8) 55%, rgba(255,255,255,0.95))",
  },
  {
    title: "Coffee Notes",
    subtitle: "Small rituals, clearer thinking",
    gradient:
      "linear-gradient(135deg, rgba(242,234,223,0.96), rgba(216,167,177,0.75) 60%, rgba(255,255,255,0.9))",
  },
  {
    title: "Museum Afternoons",
    subtitle: "Studying composition and pacing",
    gradient:
      "linear-gradient(135deg, rgba(247,244,239,0.95), rgba(225,214,203,0.88) 52%, rgba(122,139,122,0.35))",
  },
  {
    title: "Golden Hour",
    subtitle: "Light, contrast, and restraint",
    gradient:
      "linear-gradient(145deg, rgba(216,167,177,0.92), rgba(248,235,220,0.92) 58%, rgba(255,255,255,0.98))",
  },
  {
    title: "Travel Sketches",
    subtitle: "Different contexts sharpen empathy",
    gradient:
      "linear-gradient(135deg, rgba(255,255,255,0.98), rgba(199,215,203,0.85) 50%, rgba(122,139,122,0.95))",
  },
  {
    title: "Evening Runs",
    subtitle: "Momentum without noise",
    gradient:
      "linear-gradient(145deg, rgba(46,46,46,0.9), rgba(122,139,122,0.75) 45%, rgba(245,243,239,0.82))",
  },
  {
    title: "Street Details",
    subtitle: "Design cues hidden in plain sight",
    gradient:
      "linear-gradient(135deg, rgba(245,243,239,0.95), rgba(233,223,217,0.88) 52%, rgba(216,167,177,0.88))",
  },
];

export const beyondCodingTabs = [
  {
    id: "photography",
    label: "Photography",
    intro:
      "Photography helps me notice composition, contrast, and timing. It is one of the ways I practice visual clarity outside of product work.",
    items: [
      {
        title: "New Orleans",
        caption: "Architecture and warm light",
        gradient:
          "linear-gradient(145deg, rgba(248,240,228,0.98), rgba(216,167,177,0.72) 52%, rgba(255,255,255,0.96))",
      },
      {
        title: "Golden Hour",
        caption: "Soft shadows and calm pacing",
        gradient:
          "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(244,224,198,0.86) 45%, rgba(122,139,122,0.34))",
      },
      {
        title: "Street Rhythm",
        caption: "Patterns hidden in everyday scenes",
        gradient:
          "linear-gradient(135deg, rgba(245,243,239,0.98), rgba(199,215,203,0.82) 50%, rgba(122,139,122,0.95))",
      },
      {
        title: "Quiet Corners",
        caption: "Framing stillness with intention",
        gradient:
          "linear-gradient(145deg, rgba(233,223,217,0.92), rgba(255,255,255,0.96) 52%, rgba(216,167,177,0.72))",
      },
      {
        title: "Window Light",
        caption: "Observing texture and atmosphere",
        gradient:
          "linear-gradient(135deg, rgba(247,244,239,0.96), rgba(225,214,203,0.82) 50%, rgba(122,139,122,0.28))",
      },
      {
        title: "Evening Walks",
        caption: "Small moments that feel cinematic",
        gradient:
          "linear-gradient(145deg, rgba(46,46,46,0.88), rgba(122,139,122,0.72) 46%, rgba(245,243,239,0.8))",
      },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    intro:
      "Travel changes how I read environments. New places sharpen my sense of atmosphere, rhythm, and what makes an experience feel memorable.",
    items: [
      {
        title: "New Orleans",
        note: "Architecture, texture, and light all shape how a place tells its story.",
        gradient:
          "linear-gradient(145deg, rgba(248,235,220,0.96), rgba(216,167,177,0.72) 48%, rgba(255,255,255,0.96))",
      },
      {
        title: "California",
        note: "Openness and calmness remind me that simple layouts often feel strongest.",
        gradient:
          "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(199,215,203,0.86) 52%, rgba(122,139,122,0.94))",
      },
      {
        title: "Taipei",
        note: "Density, pace, and signage offer lessons in information hierarchy.",
        gradient:
          "linear-gradient(145deg, rgba(233,223,217,0.92), rgba(245,243,239,0.98) 45%, rgba(46,46,46,0.24))",
      },
      {
        title: "Weekend Getaways",
        note: "Short trips reset perspective and help me notice what feels intuitive in unfamiliar contexts.",
        gradient:
          "linear-gradient(145deg, rgba(247,244,239,0.96), rgba(216,167,177,0.58) 44%, rgba(122,139,122,0.34))",
      },
    ],
  },
  {
    id: "daily-moments",
    label: "Daily Moments",
    intro:
      "Small routines shape how I think. The quiet parts of the day often influence how I approach clarity, pacing, and attention to detail.",
    items: [
      {
        title: "Baking",
        reflection:
          "Baking helps me slow down and focus on details, a mindset I also bring into design.",
        gradient:
          "linear-gradient(145deg, rgba(248,235,220,0.96), rgba(255,255,255,0.98) 50%, rgba(216,167,177,0.68))",
      },
      {
        title: "Coffee",
        reflection:
          "Coffee and quiet pauses give me space to reset and think more deliberately.",
        gradient:
          "linear-gradient(145deg, rgba(245,243,239,0.96), rgba(225,214,203,0.86) 52%, rgba(122,139,122,0.26))",
      },
      {
        title: "Daily Routines",
        reflection:
          "Simple routines shape how I think about consistency, structure, and calm interfaces.",
        gradient:
          "linear-gradient(145deg, rgba(255,255,255,0.98), rgba(199,215,203,0.76) 48%, rgba(122,139,122,0.92))",
      },
      {
        title: "Quiet Moments",
        reflection:
          "Stillness helps me notice what is essential and remove what is not.",
        gradient:
          "linear-gradient(145deg, rgba(233,223,217,0.9), rgba(255,255,255,0.98) 52%, rgba(216,167,177,0.68))",
      },
    ],
  },
  {
    id: "design-inspiration",
    label: "Design Inspiration",
    intro:
      "I draw design inspiration from atmosphere, composition, and how subtle details shape emotion and usability.",
    items: [
      {
        title: "Golden Hour",
        note: "Light and restraint",
      },
      {
        title: "Typography",
        note: "Tone through spacing and weight",
      },
      {
        title: "Micro Interactions",
        note: "Small feedback, clear intent",
      },
      {
        title: "Color & Mood",
        note: "Warm systems that stay calm",
      },
      {
        title: "Minimal Interfaces",
        note: "Less noise, stronger hierarchy",
      },
      {
        title: "Street Details",
        note: "Useful patterns hidden in plain sight",
      },
    ],
  },
];

export const projects = [
  {
  slug: "sudoku-game",
  title: "Sudoku Game",
  discipline: "Frontend",
  track: "Engineering Projects",
  timeline: "Jan 2026 - Mar 2026",
  cardImage: sudokuGameCover,
  image: sudokuGameDetail,

  shortDescription:
    "An interactive Sudoku game powered by algorithm-driven puzzle generation and real-time validation.",

  detailDescription:
    "Solve Sudoku with real-time feedback and algorithm-generated puzzles.",

  overviewStatement:
    "This project focuses on building a responsive puzzle experience by combining algorithmic logic with interactive frontend development. It enables users to play dynamically generated Sudoku boards while receiving immediate validation and feedback during gameplay.",

  tech: ["JavaScript", "HTML", "CSS", "Algorithm Design"],

  gradient:
    "linear-gradient(145deg, rgba(46,46,46,0.96), rgba(122,139,122,0.92) 46%, rgba(245,243,239,0.95))",

  accent: "rgba(216, 167, 177, 0.72)",

  problem:
    "Many Sudoku implementations are either static or lack responsive interaction, providing limited feedback and engagement. There is a need for a puzzle experience that combines correct board generation, real-time validation, and smooth interaction to support both usability and logical accuracy.",

  features: [
    "Dynamic Sudoku board generation using a backtracking algorithm.",
    "Real-time validation of user input across rows, columns, and grids.",
    "Interactive UI with immediate visual feedback for correct and incorrect entries.",
    "Multiple difficulty levels with consistent puzzle validity.",
    "Timer and game state tracking to enhance user engagement.",
  ],

  implementation: [
    {
      title: "Algorithm design",
      body: "Implemented a backtracking algorithm to generate valid Sudoku boards, ensuring each puzzle satisfies all constraints while supporting different difficulty levels.",
    },
    {
      title: "Game logic",
      body: "Built validation logic that continuously checks user input against Sudoku rules, enabling real-time feedback without disrupting interaction flow.",
    },
    {
      title: "Frontend interaction",
      body: "Developed an interactive interface using HTML, CSS, and JavaScript, focusing on responsive input handling and clear visual feedback.",
    },
    {
      title: "State management",
      body: "Managed game state including board configuration, timer, and user progress to maintain a smooth and consistent gameplay experience.",
    },
  ],
  reflectionTitle:
    "This project reinforced the importance of translating algorithmic logic into clear and responsive user interactions, ensuring that complex constraint-solving remains intuitive for users.",
  reflectionBody:
    "It highlighted how frontend experience and underlying logic must work together—real-time validation, state management, and feedback design all play a role in making the system feel seamless. If I continued the project, I would refine difficulty balancing, optimize performance for faster puzzle generation, and explore more advanced interaction patterns to enhance user engagement.",
  reflectionTags: ["Algorithmic thinking", "Frontend engineering", "Problem solving"],

  githubUrl: "https://github.com/911219fufu-tech/Sudoku-Game",
  liveUrl: "https://sudoku-game-indol-ten.vercel.app/",
},
  {
  slug: "joystick-journal",
  title: "Joystick Journal",
  discipline: "Fullstack",
  track: "Engineering Projects",
  timeline: "Sep 2024 - Jan 2025",
  cardImage: joystickJournalCover,
  image: joystickJournalDetail,

  shortDescription:
    "A full-stack game review platform that allows users to discover, rate, and share opinions on video games through an interactive and user-friendly interface.",

  detailDescription:
    "A full-stack platform for discovering, reviewing, and sharing video games.",

  overviewStatement:
    "Joystick Journal is an end-to-end product that combines user-centered design with full-stack development, enabling seamless browsing, reviewing, and real-time interaction with game content.",

  tech: ["React", "Node.js", "MySQL", "Tailwind CSS", "REST API"],

  gradient:
    "linear-gradient(145deg, rgba(122,139,122,0.96), rgba(245,243,239,0.9) 58%, rgba(216,167,177,0.82))",

  accent: "rgba(46, 46, 46, 0.2)",

  problem:
    "Many game review platforms are cluttered, difficult to navigate, or lack meaningful interaction, making it hard for users to quickly discover relevant content or share their opinions. There is a need for a platform that balances usability, clarity, and real-time interaction while supporting scalable user-generated content.",

  features: [
    "Interactive rating and review system with real-time feedback.",
    "Search and browse functionality for discovering games efficiently.",
    "User authentication system for personalized experiences.",
    "Responsive and clean UI designed for clarity and ease of use.",
    "Dynamic content updates without page reloads.",
  ],

  implementation: [
    {
      title: "UX / UI design",
      body: "Designed intuitive user flows for browsing, reviewing, and rating games, with a focus on visual hierarchy and clear interaction patterns to enhance usability.",
    },
    {
      title: "Frontend architecture",
      body: "Built a single-page application using React and React Router, enabling dynamic navigation and seamless user interactions across different views.",
    },
    {
      title: "API & data integration",
      body: "Integrated RESTful APIs to handle game data, user interactions, and reviews, ensuring consistent communication between frontend and backend.",
    },
    {
      title: "Backend system",
      body: "Developed backend services using Node.js and Express, implementing authentication, data storage, and database operations with MySQL.",
    },
  ],
  reflectionTitle:
    "This project reinforced the importance of designing systems that balance user experience with scalable architecture, ensuring that interaction flows remain intuitive while the underlying logic stays maintainable.",
  reflectionBody:
    "It also highlighted how frontend and backend decisions are deeply connected—choices in data structure, API design, and state handling directly shape the usability and responsiveness of the product. If I continued the project, I would focus on improving data modeling, expanding features like personalization, and refining performance for larger-scale user interactions.",
  reflectionTags: ["Fullstack thinking", "System design", "Product thinking"],

  githubUrl: "https://github.com/911219fufu-tech/Game-Review-Platform",
  liveUrl: "",
},
  {
    slug: "chronosense-case-study",
    title: "ChronoSense",
    discipline: "UX/UI",
    track: "UX/Product Projects",
    timeline: "FigBuild 2026 (Mar)",
    cardImage: chronosenseCover,
    image: chronosenseDetail,
    tag: ["Hackathon Project", "FigBuild 2026"],
    shortDescription:
      "A time-awareness app that helps users understand attention patterns and build more intentional workflows.",
    detailDescription:
      "A time-awareness app that reveals attention patterns and supports more intentional workflows.",
    overviewStatement:
      "Built during FigBuild 2026, ChronoSense explores how technology can make subjective time visible by translating attention patterns into real-time feedback. The system helps users recognize focus, distraction, and mental fatigue to support more intentional decision-making.",
    tech: ["Figma", "User Research", "Wireframing", "Design Systems", "Prototyping"],
    gradient:
      "linear-gradient(145deg, rgba(216,167,177,0.92), rgba(255,255,255,0.96) 50%, rgba(122,139,122,0.85))",
    accent: "rgba(122, 139, 122, 0.35)",
    problem:
      "People often lose track of time without understanding why—whether through distraction, lack of focus, or mental fatigue. Most tools focus on scheduling and productivity, but fail to address how time is actually experienced, creating a gap between measured time and perceived time.",
    features: [
      "Real-time visualization of attention states such as focus, distraction, and mental fatigue.",
      "Time perception feedback that helps users understand how time feels in different contexts.",
      "Subtle interventions (music, prompts) to guide users back when attention drifts.",
      "Minimal, non-intrusive interface designed to reduce cognitive load.",
      "Adaptive system that reflects individual time perception patterns.",
    ],
    implementation: [
      {
        title: "Experience design",
        body: "The app was designed to make subjective time visible, translating abstract attention states into intuitive visual feedback.",
      },
      {
        title: "Information mapping",
        body: "Complex signals such as focus and distraction were simplified into clear visual patterns for quick interpretation.",
      },
      {
        title: "Interaction design",
        body: "Interactions were lightweight and non-intrusive, ensuring the system supports awareness without becoming a distraction.",
      },
      {
        title: "Rapid prototyping",
        body: "Developed through fast iterations using Figma Make, enabling quick exploration and refinement of core ideas.",
      },
    ],
    actionButtons: [
      {
        label: "Prototype",
        href: "https://lunar-export-20547076.figma.site/",
        variant: "primary",
      },
      {
        label: "Live Demo",
        href: "https://www.youtube.com/watch?v=Rw9mmFBeTOY",
        variant: "secondary",
      },
      {
        label: "Presentation",
        href: "https://www.figma.com/deck/P7MK7sO1Xe8cqZ4EfJuHhY/ChronoScense?node-id=1-393&t=lRuccJo3JMUgpTgy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
        variant: "secondary",
      },
      {
        label: "Devpost",
        href: "https://devpost.com/software/chronosense",
        variant: "secondary",
      },
    ],
    reflectionLead:
      "This project reinforced the importance of making abstract concepts tangible, translating invisible states like attention and time perception into clear, intuitive experiences.",
    reflectionSupporting:
      "It also emphasized designing for awareness rather than control—creating systems that support users gently without interrupting their natural flow. If I continued the project, I would explore more data-driven validation and refine how feedback adapts to individual behavior patterns over time.",
    reflectionTags: ["Product thinking", "Interaction design", "System design"],
    githubUrl: "",
    liveUrl: "https://www.figma.com/",
  },
  {
  slug: "ready-recipe",
  title: "ReadyRecipe",
  discipline: "UX/UI",
  track: "UX/Product Projects",
  timeline: "Sep. 2024 - Jan. 2025",
  cardImage: readyRecipeCover,
  image: readyRecipeDetail,

  shortDescription:
    "A recipe-to-action web experience that helps users move from discovering meals to planning and selecting ingredients seamlessly.",

  detailDescription:
    "A UX-driven web prototype that connects recipe discovery with planning and ingredient selection in a unified flow.",

  overviewStatement:
    "ReadyRecipe explores how users can move from inspiration to action without friction. Instead of separating browsing, planning, and purchasing, the experience brings them into a single, continuous flow. The system helps users quickly evaluate recipes, understand requirements, and transition directly into ingredient selection, supporting more confident and efficient decision-making.",

  tech: ["Figma", "User Research", "Wireframing", "Interaction Design", "Prototyping"],

  gradient:
    "linear-gradient(145deg, rgba(245,243,239,0.96), rgba(216,167,177,0.9) 48%, rgba(122,139,122,0.85))",

  accent: "rgba(216, 167, 177, 0.35)",

  problem:
    "Users often discover recipes but struggle to translate them into actionable steps, needing to manually track ingredients, plan shopping, and switch between multiple tools. This fragmented process creates friction between inspiration and execution, making cooking less efficient and more cognitively demanding.",

  features: [
    "Integrated flow from recipe discovery to ingredient selection within a single interface.",
    "Clear recipe breakdown with time, difficulty, and required ingredients for quick evaluation.",
    "Ingredient grouping and simplified selection to reduce decision friction.",
    "Clean, structured layout that supports scanning and fast comparison between recipes.",
    "Minimal interaction patterns that prioritize clarity and reduce cognitive load.",
  ],

  implementation: [
    {
      title: "End-to-end experience design",
      body: "Mapped the full journey from discovering a recipe to preparing ingredients, ensuring each step transitions smoothly without context switching.",
    },
    {
      title: "Information architecture",
      body: "Structured recipe data, ingredients, and actions into a clear hierarchy so users can quickly understand requirements and next steps.",
    },
    {
      title: "Interaction design",
      body: "Designed low-friction interactions for ingredient selection and workflow progression, minimizing unnecessary steps.",
    },
    {
      title: "Product thinking",
      body: "Focused on bridging the gap between inspiration and execution by integrating decision-making and action into a single experience.",
    },
  ],

  actionButtons: [
    {
      label: "Prototype",
      href: "https://www.figma.com/proto/rbPVxdxRR8rQU8L2hB6xKl/ReadyRecipe?node-id=1-2&p=f&t=VB95QKlvuJLFbPbJ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      variant: "primary",
    },
    {
      label: "Live Demo",
      href: "https://www.youtube.com/watch?v=yXUzOGBmuSI",
      variant: "secondary",
    },
  ],

  githubUrl: "",
  liveUrl: "https://www.figma.com/",

  reflectionLead:
    "This project reinforced the importance of designing complete user journeys rather than isolated screens, focusing on how decisions and actions connect across the experience.",

  reflectionSupporting:
    "It also highlighted the value of reducing friction between inspiration and execution, ensuring users can move forward without unnecessary complexity. If I continued the project, I would explore deeper validation through usability testing and refine how recommendations adapt to different user contexts.",

  reflectionTags: ["Product thinking", "UX strategy", "Interaction design"],
  },
  {
    slug: "unlmtd",
    title: "UNLMTD",
    discipline: "UX/UI",
    track: "UX/Product Projects",
    timeline: "Feb 2025 - Jun 2025",
    cardImage: unlmtdCover,
    image: unlmedDetail,

    shortDescription:
      "A fitness recovery app prototype that helps users understand when to push or rest through clear, data-driven guidance.",

    detailDescription:
      "A UX-driven mobile app prototype that translates complex fitness and recovery data into simple, actionable insights for training decisions.",

    overviewStatement:
      "UNLMTD explores how users can make better training decisions through clearer feedback on their physical condition. Instead of relying on fragmented data or intuition, the experience brings together recovery, hydration, sleep, and activity into a single, understandable system. The goal is not just to track metrics, but to help users interpret them and act with confidence in their daily training routines.",

    tech: ["Figma", "User Research", "Wireframing", "Interaction Design", "Prototyping"],

    gradient:
      "linear-gradient(145deg, rgba(122,139,122,0.92), rgba(255,255,255,0.96) 50%, rgba(46,46,46,0.85))",

    accent: "rgba(122, 139, 122, 0.35)",

    problem:
      "Fitness users often struggle to interpret their physical condition and decide whether to push or rest. While data from wearables exists, it is often fragmented and difficult to translate into clear actions, leading to overtraining, fatigue, or inconsistent progress.",

    features: [
      "Wellness score that summarizes recovery, hydration, sleep, and training readiness.",
      "AI-inspired recovery suggestions such as rest, light activity, or targeted recovery actions.",
      "Adaptive workout recommendations based on current recovery status.",
      "Structured dashboard that allows users to quickly understand their condition at a glance.",
      "Progress tracking with simple insights that connect behavior to performance over time.",
    ],

    implementation: [
      {
        title: "End-to-end experience design",
        body: "Designed the full user journey from onboarding to daily decision-making, ensuring users can quickly understand and act on their condition.",
      },
      {
        title: "Information architecture",
        body: "Simplified complex fitness data into key categories such as recovery, hydration, and training readiness for fast interpretation.",
      },
      {
        title: "Interaction design",
        body: "Created clear, low-friction interactions that guide users toward decisions without overwhelming them with data.",
      },
      {
        title: "UX simplification",
        body: "Focused on translating complex data into actionable insights rather than exposing raw metrics.",
      },
    ],

    actionButtons: [
      {
        label: "Prototype",
        href: "https://www.figma.com/proto/ACsnCxm5Q88YNWgQsbyD6E/UNLMTD_FINAL?node-id=107-249&t=ddcWxLPueAfk4iFg-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=107%3A249&show-proto-sidebar=1",
        variant: "primary",
      },
    ],

    githubUrl: "",
    liveUrl: "https://www.figma.com/",

    reflectionLead:
      "This project reinforced the importance of helping users interpret data rather than simply presenting it.",

    reflectionSupporting:
      "It also highlighted how simplifying complex information into clear, actionable guidance can significantly improve decision-making. If I continued the project, I would validate how users respond to different types of feedback and refine how recommendations adapt over time.",

    reflectionTags: ["Product thinking", "Data-driven UX", "Interaction design"],
  },
  {
    slug: "us-police-visualization",
    title: "U.S. Police Data Exploration Platform",
    discipline: "Fullstack",
    track: "Data Visualization",
    timeline: "Sep 2023 - Dec 2023",

    shortDescription:
      "An interactive data platform that enables users to explore patterns in U.S. police shooting data through dynamic visualizations and filtering.",

    detailDescription:
      "A fullstack web application that transforms raw CSV data into an interactive dashboard with dynamic charts, filtering, and user interaction.",

    overviewStatement:
      "This project explores how data visualization and web technologies can support deeper understanding of complex societal datasets. By building a full data pipeline—from CSV ingestion to MySQL storage and frontend visualization—the system enables users to explore trends, compare variables, and interact with data in real time.",

    tech: ["JavaScript", "Node.js", "MySQL", "Plotly", "HTML", "CSS"],

    gradient:
      "linear-gradient(145deg, rgba(46,46,46,0.92), rgba(255,255,255,0.96) 50%, rgba(122,139,122,0.85))",

    accent: "rgba(46, 46, 46, 0.35)",

    problem:
      "Raw datasets are difficult to interpret without interactive tools. Static charts limit exploration and make it hard for users to identify patterns or relationships across multiple variables.",

    features: [
      "Dynamic chart generation (bar, line, pie) based on user-selected parameters.",
      "Interactive filtering system that allows users to explore different data attributes.",
      "Full data pipeline from CSV ingestion to MySQL database and frontend rendering.",
      "Multi-page web application including login, registration, and data exploration views.",
      "Dashboard-style interface that organizes data insights into a structured layout.",
    ],

    implementation: [
      {
        title: "Data pipeline",
        body: "Imported raw CSV data into MySQL and structured it for efficient querying and visualization.",
      },
      {
        title: "Backend integration",
        body: "Used Node.js (server.js) to connect the database and deliver data dynamically to the frontend.",
      },
      {
        title: "Interactive visualization",
        body: "Implemented dynamic charts using Plotly, enabling users to switch between visualization types and parameters.",
      },
      {
        title: "Frontend system",
        body: "Developed a multi-page interface including login, registration, and dashboard views to support user interaction.",
      },
    ],

    actionButtons: [
      {
        label: "GitHub",
        href: "YOUR_GITHUB_LINK",
        variant: "primary",
      },
    ],

    reflectionLead:
      "This project strengthened my understanding of how data flows through a fullstack system, from raw input to interactive visualization.",

    reflectionSupporting:
      "It also highlighted the importance of designing for exploration, where users can interact with data rather than passively consume it. If I continued the project, I would improve the UI clarity and introduce more advanced filtering and storytelling features.",

    reflectionTags: ["Fullstack", "Data visualization", "System design"],
  },
];

export const educationItems = [
  {
    school: "New York University, Tandon School of Engineering",
    degree: "M.S. in Computer Science",
    gpa: "4.0/4.0",
    duration: "Sep 2025 – May 2027",
    coursework: ["Human Computer Interaction", "Information Visualization", "Application Security"],
    honors: [],
    certifications: [],
    transcriptLinks: [
      {
        label: "NYU Transcript",
        href: "/transcript-nyu.pdf",
      },
    ],
  },
  {
    school: "San Francisco State University / Feng Chia University",
    degree: "B.S. Computer Science (Dual Degree)",
    gpa: "3.9/4.0, Summa Cum Laude",
    duration: "Sep 2021 – May 2025",
    coursework: ["Software Engineering", "Data Structures & Algorithms ", "Web Development"],
    honors: [
      {
        label: "Summa Cum Laude (SFSU)",
        href: "https://commencement.sfsu.edu/sites/default/files/documents/2025-Commencement-Main-Program-Online_accessible.pdf#page=41",
      },
      {
        label: "Academic Excellence Award (Ranked 1st in Department, FCU)",
        href: "https://commencement.fcu.edu.tw/114award/",
      },
      {
        label: "Dean’s List (5 semesters)",
        details: [
          "Dean’s List, SFSU, Fall 2023",
          "Dean’s List, SFSU, Spring 2024",
          "Dean’s List, SFSU, Fall 2024",
          "Dean’s List, FCU, Spring 2023",
          "Scholarship, FCU, Spring 2023",
        ],
      },
    ],
    certifications: ["AWS Academy Cloud Foundations (AWS)"],
    transcriptLinks: [
      {
        label: "SFSU Transcript",
        href: "/transcript-sfsu.pdf",
      },
      {
        label: "FCU Transcript",
        href: "/transcript-fcu.pdf",
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    emphasis: "Primary Focus",
    items: [
      "React",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "State Management",
      "Component-Based Architecture",
    ],
  },
  {
    title: "Backend",
    emphasis: "Supporting Experience",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MySQL",
      "API Design",
      "Data Modeling",
      "Authentication",
      "Backend Integration",
    ],
  },
  {
    title: "Design",
    emphasis: "Differentiator",
    items: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Design-to-Code Workflow",
      "Pixel-Perfect Implementation",
    ],
  },
  {
    title: "Additional",
    emphasis: "Breadth",
    items: [
      "Python",
      "Java",
      "C/C++",
      "Git",
      "GitHub",
      "Linux",
      "Basic Security (Kali Linux, Pen Testing)",
    ],
  },
];

export const contactLinks = [
  {
    type: "email",
    label: "Email",
    value: "jf5456@gmail.com",
    href: "mailto:jf5456@gmail.com",
  },
  {
    type: "phone",
    label: "Phone",
    value: "+1 (628) 488-2511",
    href: "tel:+16284882511",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/joycefu",
    href: "https://www.linkedin.com/in/joyce-fu-30a6b7288/",
  },
];
