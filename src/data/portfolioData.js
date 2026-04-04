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

export const projects = [
  {
    slug: "harbor-finance",
    title: "Harbor Finance",
    discipline: "Frontend",
    track: "Engineering Projects",
    shortDescription:
      "A responsive analytics workspace for finance teams to monitor revenue, cash flow, and forecast confidence in one view.",
    detailDescription:
      "Harbor Finance turns fragmented reporting into a focused dashboard experience built for decision-making, not spreadsheet wrangling.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "REST API"],
    gradient:
      "linear-gradient(145deg, rgba(46,46,46,0.96), rgba(122,139,122,0.92) 46%, rgba(245,243,239,0.95))",
    accent: "rgba(216, 167, 177, 0.72)",
    problem:
      "Finance operations teams often toggle across disconnected dashboards, CSV exports, and custom spreadsheets just to answer basic performance questions. Harbor Finance consolidates those workflows into a fast, structured interface designed for quick scanning and confident reporting.",
    features: [
      "Modular KPI dashboard with drill-down panels for revenue, burn, and runway.",
      "Scenario comparison views for forecast confidence and plan variance.",
      "Saved filters and responsive tables that stay usable on smaller screens.",
      "Accessible data visualizations with clear hover and focus states.",
    ],
    implementation: [
      {
        title: "React architecture",
        body: "The app is split into route-level shells, feature modules, and shared visualization primitives so dashboard views can evolve without duplicating layout or state logic.",
      },
      {
        title: "API integration",
        body: "A thin service layer normalizes portfolio and reporting endpoints, keeping request, loading, and error behavior consistent across charts, tables, and summary cards.",
      },
      {
        title: "State management",
        body: "UI state is localized per feature while shared filters live in a synchronized context, which keeps interactions predictable without introducing unnecessary global complexity.",
      },
      {
        title: "Performance",
        body: "Heavy panels render incrementally, chart payloads are memoized at the adapter boundary, and visual transitions are tuned to feel smooth without blocking interaction.",
      },
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "pulse-workspace",
    title: "Pulse Workspace",
    discipline: "Fullstack",
    track: "Engineering Projects",
    shortDescription:
      "A collaborative task and documentation platform for small product teams that need planning, communication, and delivery in one place.",
    detailDescription:
      "Pulse Workspace combines kanban planning, lightweight documentation, and workflow automation into a calm product operations hub.",
    tech: ["React", "Node.js", "MySQL", "Tailwind CSS", "JWT Auth"],
    gradient:
      "linear-gradient(145deg, rgba(122,139,122,0.96), rgba(245,243,239,0.9) 58%, rgba(216,167,177,0.82))",
    accent: "rgba(46, 46, 46, 0.2)",
    problem:
      "Growing teams often piece together tasks, specs, and decision logs across separate tools, which leads to lost context and duplicated status updates. Pulse Workspace centralizes those rituals into one interface designed for clarity, ownership, and momentum.",
    features: [
      "Shared boards with deadlines, assignees, and status grouping.",
      "Rich documentation pages connected directly to tickets and milestones.",
      "Role-based access for contributors, reviewers, and admins.",
      "Real-time activity feed that surfaces changes without overwhelming the user.",
    ],
    implementation: [
      {
        title: "React architecture",
        body: "The frontend uses route-based layouts, reusable card and panel components, and feature folders for boards, docs, and settings to keep the surface area maintainable.",
      },
      {
        title: "API integration",
        body: "REST endpoints for boards, comments, and workspace settings are wrapped with consistent request helpers that handle auth, optimistic updates, and failure recovery.",
      },
      {
        title: "State management",
        body: "Server-backed entities are refreshed per route, while interaction-heavy state such as filters, drawers, and modals stays close to the components that own it.",
      },
      {
        title: "Performance",
        body: "Pagination, incremental rendering, and targeted data refreshes keep the interface responsive even when boards and activity feeds grow larger.",
      },
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "atlas-commerce",
    title: "Atlas Commerce",
    discipline: "Frontend",
    track: "Engineering Projects",
    shortDescription:
      "A premium storefront experience focused on fast browsing, strong hierarchy, and conversion-driven product detail design.",
    detailDescription:
      "Atlas Commerce is a frontend-heavy e-commerce build that emphasizes polish, performance, and a product-first browsing flow.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Stripe API"],
    gradient:
      "linear-gradient(145deg, rgba(245,243,239,0.98), rgba(216,167,177,0.8) 48%, rgba(122,139,122,0.96))",
    accent: "rgba(255,255,255,0.72)",
    problem:
      "Many storefronts overload users with dense merchandising and repetitive navigation patterns. Atlas Commerce strips the experience back to focused storytelling, faster discovery, and cleaner product comparison.",
    features: [
      "Editorial landing pages with product storytelling and conversion prompts.",
      "Filterable product grid with accessible sorting and quick comparison.",
      "Mobile-optimized product detail pages with sticky purchase actions.",
      "Checkout flow designed to minimize distractions and reduce drop-off.",
    ],
    implementation: [
      {
        title: "React architecture",
        body: "The storefront is composed from layout shells, merchandising sections, and product modules that can be rearranged without changing core logic.",
      },
      {
        title: "API integration",
        body: "Product, inventory, and checkout flows are separated into adapters so the interface can respond cleanly to loading states, out-of-stock cases, and purchase success paths.",
      },
      {
        title: "State management",
        body: "Cart data is persisted across sessions while filters, sort state, and quick views remain scoped to shopping surfaces for simpler reasoning.",
      },
      {
        title: "Performance",
        body: "Visual assets are lazy-loaded, long lists are progressively rendered, and motion stays restrained so the experience feels premium without becoming heavy.",
      },
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "caremap-case-study",
    title: "CareMap",
    discipline: "UX/UI",
    track: "UX/Product Projects",
    shortDescription:
      "A healthcare scheduling case study that reduces friction for patients coordinating appointments, reminders, and follow-up tasks.",
    detailDescription:
      "CareMap reframes care coordination as a calmer end-to-end journey, with clear priorities, low-cognitive-load flows, and accessible information design.",
    tech: ["Figma", "User Research", "Wireframing", "Design Systems", "Prototyping"],
    gradient:
      "linear-gradient(145deg, rgba(216,167,177,0.92), rgba(255,255,255,0.96) 50%, rgba(122,139,122,0.85))",
    accent: "rgba(122, 139, 122, 0.35)",
    problem:
      "Patients managing multiple visits and follow-ups often face fragmented instructions, unclear timelines, and stressful communication. CareMap redesigns that experience to reduce uncertainty and make next steps obvious.",
    features: [
      "End-to-end patient journey mapping from booking through follow-up.",
      "Clear appointment cards with priorities, reminders, and prep notes.",
      "Low-friction mobile interactions for rescheduling and document upload.",
      "Accessible UI system optimized for readability and trust.",
    ],
    implementation: [
      {
        title: "Design architecture",
        body: "The case study was organized around task flows, shared components, and a scalable visual system so each screen reinforced the same information hierarchy.",
      },
      {
        title: "Research synthesis",
        body: "Interview findings and usability observations were translated into concise design principles that guided structure, copy tone, and interaction behavior.",
      },
      {
        title: "System thinking",
        body: "Reusable patterns for cards, alerts, and timelines ensured consistency across patient, caregiver, and administrative touchpoints.",
      },
      {
        title: "Validation",
        body: "Prototype iterations focused on simplifying terminology, tightening decision points, and reducing the number of steps required to complete common actions.",
      },
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://www.figma.com/",
  },
  {
    slug: "civic-service-portal",
    title: "Civic Service Portal",
    discipline: "Fullstack",
    track: "Engineering Projects",
    shortDescription:
      "A digital service platform that helps residents submit requests, track case updates, and understand response timelines.",
    detailDescription:
      "Civic Service Portal is a public-sector workflow tool designed to make service requests more transparent and easier to manage.",
    tech: ["React", "Node.js", "MySQL", "REST API", "Accessibility"],
    gradient:
      "linear-gradient(145deg, rgba(245,243,239,0.96), rgba(122,139,122,0.94) 48%, rgba(46,46,46,0.92))",
    accent: "rgba(216, 167, 177, 0.48)",
    problem:
      "Residents often submit requests into black-box systems and receive little clarity about status, ownership, or expected timelines. Civic Service Portal creates a transparent request flow with meaningful feedback at every stage.",
    features: [
      "Multi-step intake forms with progress save and resume support.",
      "Status tracker with service-level expectations and notifications.",
      "Admin dashboard for triage, routing, and workload visibility.",
      "Accessibility-first patterns for forms, tables, and feedback states.",
    ],
    implementation: [
      {
        title: "React architecture",
        body: "The interface is separated into resident and admin surfaces that share a common design language while serving very different task models.",
      },
      {
        title: "API integration",
        body: "Case submission, status updates, and notification delivery flow through clearly defined endpoints with validation at both the client and server layers.",
      },
      {
        title: "State management",
        body: "Long-form workflows use draft persistence and route-aware state so users do not lose progress when navigating between service steps.",
      },
      {
        title: "Performance",
        body: "Form sections are chunked into smaller steps, admin tables support targeted refreshes, and perceived responsiveness is reinforced with deliberate loading feedback.",
      },
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    slug: "northstar-design-system",
    title: "Northstar Design System",
    discipline: "UX/UI",
    track: "UX/Product Projects",
    shortDescription:
      "A reusable design system that aligns product, design, and engineering teams around one visual language and implementation workflow.",
    detailDescription:
      "Northstar Design System documents interface patterns, interaction principles, and design-to-code conventions for faster, more consistent product delivery.",
    tech: ["Figma", "Design Tokens", "Prototyping", "Accessibility", "Documentation"],
    gradient:
      "linear-gradient(145deg, rgba(255,255,255,0.96), rgba(216,167,177,0.82) 46%, rgba(245,243,239,0.98), rgba(122,139,122,0.76))",
    accent: "rgba(46, 46, 46, 0.22)",
    problem:
      "Teams moving quickly often accumulate visual drift and inconsistent interactions, which slows delivery and weakens trust. Northstar establishes a shared system for consistency without sacrificing flexibility.",
    features: [
      "Foundational tokens for color, spacing, type, elevation, and interaction.",
      "Documented component patterns with states, rationale, and usage rules.",
      "Design-to-code mapping that reduces handoff ambiguity for engineers.",
      "Accessibility guidance embedded directly into component specs.",
    ],
    implementation: [
      {
        title: "System architecture",
        body: "The system starts with tokens and semantic layers, then builds up components and page patterns so decisions stay traceable from brand to implementation.",
      },
      {
        title: "Design operations",
        body: "Figma libraries, naming conventions, and documentation templates were aligned to support collaboration instead of creating another disconnected asset set.",
      },
      {
        title: "Collaboration model",
        body: "Component definitions were written to clarify developer expectations for spacing, states, responsiveness, and interaction timing.",
      },
      {
        title: "Scalability",
        body: "Patterns were designed to support both marketing and product surfaces, which kept the system broad enough to be useful but focused enough to stay maintainable.",
      },
    ],
    githubUrl: "https://github.com/",
    liveUrl: "https://www.figma.com/",
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
