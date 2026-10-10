export const PERSONAL_INFO = {
  name: "Vaibhav Chopade",
  title: "Full-Stack Developer",
  secondaryTitle: "Software Developer | AI & Automation Enthusiast",
  tagline: "Building web applications, business tools and custom software solutions.",
  bio: "I build practical web applications, backend systems, dashboards and automation tools using modern technologies.",
  email: "chopadevaibhav03@gmail.com",
  github: "https://github.com/chopadevaibhav03",
  linkedin: "https://www.linkedin.com/in/vaibhav-chopade-8280ba239/",
  location: "Pune, India",
  availability: "Available for freelance projects & development roles",
};

export const CURRENTLY_EXPLORING = [
  {
    title: "AI & LLM Applications",
    description: "Building intelligent workflows with LangChain, RAG architectures, local LLM orchestration via Ollama, and structured tool calling.",
    technologies: ["LangChain", "Tool Calling", "RAG", "LLMs", "Ollama", "Python", "FastAPI", "REST APIs"],
  },
  {
    title: "Database Automation",
    description: "Exploring methods to automate routine database diagnostics, indexing queries, and administration workflows.",
    technologies: ["Oracle SQL", "PostgreSQL", "Python", "Bash Scripts"],
  },
  {
    title: "System Monitoring",
    description: "Deepening hands-on exposure to Linux administration, server resource metrics, and background health checks.",
    technologies: ["Linux / RHEL", "Systemd", "Process Monitoring", "Shell Scripting"],
  },
  {
    title: "Backend Architecture",
    description: "Refining API design patterns, modular architecture, and service reliability using Spring Boot and FastAPI.",
    technologies: ["Spring Boot", "FastAPI", "REST APIs", "Clean Architecture"],
  },
];

export const PROJECTS = [
  {
    id: "atc-simulator",
    title: "Air Traffic Simulation System",
    category: "Systems",
    projectType: "Technical Exploration",
    shortDescription: "Simulation-oriented software application exploring air traffic queueing, state machines, and coordinated sector handoffs.",
    status: "Technical Exploration",
    statusType: "exploration",
    technologies: ["C++", "Algorithms", "State Machines", "Simulation", "Data Structures"],
    github: "https://github.com/chopadevaibhav03",
    demo: null,
    caseStudy: {
      overview: "An exploration into deterministic state machines and priority queue algorithms modeled around air traffic sequencing and runway coordination.",
      problem: "Air traffic control systems must handle aircraft arrivals, approach vectors, and departure queues safely with zero tolerance for conflicting state transitions.",
      approach: "Modeled aircraft as stateful entities undergoing strict transitions (Cruising → Holding → Approach → Landing) managed by a central scheduler.",
      keyFeatures: [
        "Discrete-event simulation loop tracking position updates and altitude brackets",
        "Priority queue sequencing based on remaining fuel, flight schedules, and emergency status",
        "Conflict detection alerting on proximity violations within simulated airspace",
        "Modular architecture separating physics update loops from scheduling policies"
      ],
      contribution: "Constructed the core state machine, arrival priority queue algorithms, and separation distance calculation logic.",
      challenges: "Modeling non-blocking simulation ticks while maintaining accurate time calculations across hundreds of concurrent entities.",
      learned: "Deepened knowledge of state machines, priority queues, and concurrency paradigms in systems programming.",
    },
  },
  {
    id: "ai-dba-agent",
    title: "AI DBA & Automation Exploration",
    category: "AI & Automation",
    projectType: "Technical Exploration",
    shortDescription: "Exploration of AI-assisted database monitoring and administrative workflow automation using local LLMs and FastAPI.",
    status: "Technical Exploration",
    statusType: "exploration",
    technologies: ["Python", "FastAPI", "Ollama", "Oracle SQL", "Linux", "Tool Calling"],
    github: "https://github.com/chopadevaibhav03",
    demo: null,
    caseStudy: {
      overview: "An experimental exploration into how local language models with strict tool-calling capabilities can safely inspect database health and summarize server metrics.",
      problem: "Database administrators spend substantial time querying routine performance views (tablespace usage, lock contention, active sessions). Traditional dashboards require manual correlation.",
      approach: "Built a Python/FastAPI prototype using local Ollama models with constrained function-calling schema. The model never runs arbitrary SQL; it selects pre-audited diagnostic functions.",
      keyFeatures: [
        "Constrained tool calling strictly executing safe, pre-approved read-only diagnostic routines",
        "Natural language queries mapped to structured database inspection calls",
        "Local model inference ensuring zero external transmission of query structures or metadata",
        "Structured JSON response formatting for database status summaries"
      ],
      contribution: "Designed the tool-calling function signatures, implemented safety boundaries to prohibit non-read queries, and developed the FastAPI orchestration layer.",
      challenges: "Ensuring deterministic output from local LLMs and preventing prompt injection from attempting unauthorized schema modifications.",
      learned: "Gained practical insights into prompt engineering, JSON schema enforcement, and the importance of zero-trust boundaries when integrating LLMs with system tools.",
    },
  },
  {
    id: "biofuel-supply-chain",
    title: "Biofuel Supply Chain Management",
    category: "Web",
    projectType: "Academic / Personal Project",
    shortDescription: "Web application tracking biofuel production batches, raw material logistics, and distribution pipelines from source to consumer.",
    status: "Academic Project",
    statusType: "completed",
    technologies: ["Angular", "Java", "Spring Boot", "SQL", "Relational DB"],
    github: "https://github.com/chopadevaibhav03/projectBiofuel",
    demo: null,
    caseStudy: {
      overview: "A specialized supply chain tracking portal developed to model the lifecycle of biomass feedstock conversion into refined biofuel products.",
      problem: "Tracking sustainable biofuel requires recording feedstock provenance, production batch parameters, and transportation logistics across separate distribution checkpoints.",
      approach: "Implemented a multi-tier application with an Angular frontend communicating with Spring Boot microservices backed by relational database tables.",
      keyFeatures: [
        "Batch tracking through raw material collection, processing, and distribution stages",
        "Role-based views for collection agents, facility supervisors, and distributors",
        "Relational schema tracking volume metrics, dates, and facility locations",
        "Inventory logs with date-stamped records and status indicators"
      ],
      contribution: "Designed database tables for batch states, implemented Spring Boot REST endpoints, and developed Angular components for shipment verification.",
      challenges: "Designing a schema flexible enough to handle varied feedstock types without requiring table alterations for each category.",
      learned: "Strengthened understanding of Angular component communication, TypeScript interfaces, and Spring Data persistence.",
    },
  },
];

export const SERVICES = [
  {
    id: "web-apps",
    title: "Web Applications",
    description: "Custom responsive web applications built for performance, clear user workflows, and long-term maintainability.",
    deliverables: ["Full-Stack Architecture", "Responsive Frontend (React/Angular)", "RESTful APIs", "Database Integration"],
    bestFor: "Businesses and founders needing custom web software tailored to their exact workflow.",
  },
  {
    id: "dashboards",
    title: "Business Dashboards & Admin Panels",
    description: "Tailored internal tools, admin portals, and data visualization dashboards that turn raw operational data into actionable insights.",
    deliverables: ["Role-Based Access Control", "Data Tables & Filters", "KPI & Metric Visualizations", "Export & Reporting"],
    bestFor: "Teams spending hours on spreadsheets or needing unified control panels for operations.",
  },
  {
    id: "backend-apis",
    title: "Backend & REST APIs",
    description: "Robust, documented backend services engineered with Java Spring Boot or Python FastAPI for web and mobile frontends.",
    deliverables: ["API Schema & Documentation", "Data Validation & Sanitization", "Secure Authentication", "Database Optimization"],
    bestFor: "Projects needing clean, scalable backend infrastructure with predictable response contracts.",
  },
  {
    id: "database-apps",
    title: "Database-Driven Applications",
    description: "Structured relational database design, migration scripts, and performant data-access layers across PostgreSQL, MySQL, and Oracle.",
    deliverables: ["Schema Design & Normalization", "Query Optimization & Indexing", "CRUD Operations", "Data Integrity Safeguards"],
    bestFor: "Applications with complex data relationships requiring reliable transactional integrity.",
  },
  {
    id: "automation",
    title: "Automation & Custom Tooling",
    description: "Custom scripts and automation workflows that eliminate repetitive manual steps across systems, files, and databases.",
    deliverables: ["Python & Shell Automation", "Scheduled Background Jobs", "Data Migration Scripts", "System Health Checks"],
    bestFor: "Organizations looking to save developer or staff hours by automating recurring digital tasks.",
  },
  {
    id: "ai-features",
    title: "Practical AI & LLM Integration",
    description: "Grounded integration of local or API-driven LLM capabilities into software for text extraction, classification, and tool calling.",
    deliverables: ["Structured Tool Calling", "Local Model Deployment (Ollama)", "Prompt Engineering", "Safe Execution Boundaries"],
    bestFor: "Applications looking to add intelligent assistant or classification features without unnecessary hype.",
  },
];

export const PROFESSIONAL_EXPERIENCE = [
  {
    role: "Software Developer (SDE 1)",
    company: "BlueStock Fintech",
    period: "Oct 2024 — Nov 2024",
    type: "Professional Role",
    summary: "Worked on REST API development for IPO functionality, implemented stock market business logic, and participated in agile team sprints.",
    highlights: [
      "Developed backend REST API endpoints serving IPO listing data and subscription statistics.",
      "Collaborated with frontend and QA engineers to resolve data validation edge cases.",
      "Worked with relational database models and optimized query logic for financial records.",
      "Maintained version control and branch workflows in an active team repository."
    ],
    technologies: ["Python", "REST APIs", "PostgreSQL", "Git", "Agile SDLC"],
  },
  {
    role: "Java Developer Intern",
    company: "TAS Innovation",
    period: "Aug 2023 — Sept 2023",
    type: "Internship",
    summary: "Hands-on software internship focusing on Java object-oriented programming, graphical interface components, and application logic.",
    highlights: [
      "Engineered game logic and user interaction loops utilizing core Java and OOP principles.",
      "Implemented event listeners and state management for real-time user inputs.",
      "Practiced clean modular coding standards and documentation."
    ],
    technologies: ["Java", "OOP", "GUI Design", "Software Logic"],
  },
  {
    role: "Agile Methodology Virtual Program",
    company: "Forage",
    period: "July 2023",
    type: "Industry Program",
    summary: "Comprehensive simulation of industry software development lifecycle (SDLC), sprint planning, user stories, and retrospective workflows.",
    highlights: [
      "Created structured user stories, acceptance criteria, and task breakdowns.",
      "Practiced sprint planning, backlog grooming, and Agile ceremonies."
    ],
    technologies: ["Agile", "Scrum", "SDLC", "Jira Concepts"],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "Angular", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend & APIs",
    skills: ["REST APIs", "Java", "Spring Boot", "Python", "FastAPI", "API Architecture", "Maven"],
  },
  {
    name: "Databases",
    skills: ["Oracle SQL", "MySQL", "PostgreSQL", "SQL Server", "H2 Database", "Relational Modeling"],
  },
  {
    name: "AI & Machine Learning",
    skills: ["LangChain", "Tool Calling", "RAG", "LLMs", "Local LLMs (Ollama)", "AI Agents", "Prompt Engineering", "Python Automation"],
  },
  {
    name: "Systems & DevOps",
    skills: ["Linux (RHEL/Ubuntu)", "Git & GitHub", "AWS (EC2, S3)", "Jenkins", "Apache Tomcat", "Bash Scripting"],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Understand",
    description: "Deep dive into your actual problem, objectives, user personas, and technical constraints before writing any code.",
  },
  {
    step: "02",
    title: "Plan",
    description: "Define the project scope, system architecture, database schema, and milestone schedule with zero ambiguity.",
  },
  {
    step: "03",
    title: "Build",
    description: "Develop the software iteratively with clean code, frequent progress updates, and testable intermediate deliverables.",
  },
  {
    step: "04",
    title: "Test",
    description: "Validate core user flows, edge cases, responsive behaviors, and API reliability to ensure stability.",
  },
  {
    step: "05",
    title: "Deliver",
    description: "Deploy to your hosting environment, provide thorough documentation, and support a smooth handover.",
  },
];
