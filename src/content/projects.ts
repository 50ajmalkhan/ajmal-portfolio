export type Project = {
  slug: string;
  title: string;
  role: string;
  period: string;
  type: string;
  liveUrl?: string;
  description: string;
  contributions: string[];
  tech: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "protaige",
    title: "Protaigé",
    role: "Senior Full Stack Developer (Sole Engineer)",
    period: "Apr 2025 – Present",
    type: "AI Marketing Platform — Multi-Agent Campaign Generation",
    liveUrl: "https://www.protaige.com/",
    description:
      "AI-powered marketing platform that generates complete, brand-safe campaigns from a single brief — replacing weeks of agency work with minutes of automated production. Multi-agent system where specialized agents collaborate on strategy, copywriting, and visual design.",
    contributions: [
      "Architected multi-agent AI orchestration system in Python/FastAPI",
      "Built React frontend with chat-to-campaign interface",
      "Implemented Brand DNA system for brand-consistent AI outputs",
      "Integrated LLMs (OpenAI, Anthropic) and image generation models",
      "Built complete admin panel for users, subscriptions, and analytics",
      "Implemented Stripe payment integration (subscriptions, billing, webhooks)",
      "Optimized AWS infrastructure costs through resource right-sizing",
      "Set up CI/CD pipelines and Sentry monitoring",
    ],
    tech: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "LangChain",
      "OpenAI",
      "Anthropic",
      "Pinecone",
      "AWS",
      "Stripe",
      "Docker",
    ],
    featured: true,
  },
  {
    slug: "workbot-teamgpt",
    title: "WorkBot / TeamGPT",
    role: "Senior Full Stack Engineer",
    period: "Dec 2023 – Present",
    type: "No-Code AI Chatbot Platform · WorkHub",
    liveUrl: "https://workhub.ai/",
    description:
      "No-code AI chatbot platform powering customer support automation across chat, voice, and email — used by 1,000+ companies.",
    contributions: [
      "Built FastAPI backend powering AI chatbot conversations",
      "Designed RAG pipeline using Pinecone vector embeddings for accurate, context-aware responses",
      "Architected multi-agent workflows using LangChain for query routing and tool calling",
      "Developed React-based no-code chatbot builder",
      "Built voice agent functionality with real-time speech recognition",
      "Implemented multilingual support across 50+ languages",
      "Integrated 100+ third-party services (Google Drive, Slack, Shopify, CRM, etc.)",
      "Built analytics dashboard with React and Recharts",
      "Set up Jenkins CI/CD with Bugsnag monitoring",
    ],
    tech: [
      "React",
      "FastAPI",
      "Python",
      "LangChain",
      "Pinecone",
      "OpenAI",
      "Anthropic",
      "PostgreSQL",
      "Redis",
      "Jenkins",
      "AWS",
    ],
    featured: true,
  },
  {
    slug: "workhub-connect",
    title: "WorkHub Connect",
    role: "Full Stack Developer",
    period: "Apr 2022 – Dec 2023",
    type: "Real-time Communication Platform · WorkHub",
    liveUrl: "https://workhub.ai/",
    description:
      "Real-time communication platform enabling remote workers to call, message, and share availability status — supporting thousands of concurrent users.",
    contributions: [
      "Developed React frontend with real-time messaging UI, voice/video calling, and presence indicators",
      "Built FastAPI backend with WebSocket connections for real-time event delivery",
      "Integrated Socket.io for live messaging and presence updates",
      "Implemented Firebase Authentication and Firestore data storage",
      "Optimized WebSocket connection handling for low-latency message delivery",
      "Implemented CI/CD with Jenkins, Sentry tracking, AWS deployment",
    ],
    tech: [
      "React",
      "FastAPI",
      "Python",
      "Socket.io",
      "Firebase",
      "PostgreSQL",
      "AWS",
      "Jenkins",
      "Sentry",
    ],
    featured: true,
  },
  {
    slug: "giddyops",
    title: "GiddyOps Laundry System",
    role: "Full Stack Developer · Experts Cloud",
    period: "Nov 2021 – Apr 2022",
    type: "Call Center Management System",
    description:
      "Call center management system for a laundry service company, automating call routing, distribution, tracking, and reporting.",
    contributions: [
      "Built React frontend with Redux for live call queues and agent management",
      "Developed Python/FastAPI backend integrated with Twilio for call handling",
      "Implemented automated call distribution and intelligent routing",
      "Created reporting module with real-time call analytics",
    ],
    tech: ["React", "Redux", "FastAPI", "Python", "Twilio", "PostgreSQL"],
  },
  {
    slug: "rezolve",
    title: "Rezolve",
    role: "Full Stack Developer · Experts Cloud",
    period: "Feb 2021 – Dec 2021",
    type: "PDF Annotation Platform",
    liveUrl: "https://www.rezolve.io/",
    description:
      "Advanced PDF markup and annotation platform allowing users to upload PDFs, draw shapes (triangles, clouds, custom polygons), add images and text overlays, and persist annotations.",
    contributions: [
      "Built advanced PDF annotation tooling using Fabric.js",
      "Developed React frontend with highly interactive canvas-based editor",
      "Implemented FastAPI backend for PDF parsing and annotation storage",
      "Designed PostgreSQL schema for multi-page annotation persistence",
      "Optimized rendering performance for large PDFs",
    ],
    tech: ["React", "Fabric.js", "FastAPI", "Python", "PostgreSQL"],
  },
  {
    slug: "multivendor",
    title: "MultiVendor E-commerce Platform",
    role: "Full Stack Developer · Experts Cloud",
    period: "Dec 2020 – Nov 2021",
    type: "Multi-vendor E-commerce Marketplace",
    description:
      "Multi-vendor marketplace allowing multiple sellers to list products and customers to purchase from a unified storefront.",
    contributions: [
      "Built React frontend with unified browsing, vendor storefronts, cart, and checkout",
      "Developed FastAPI backend with REST APIs for vendor onboarding, products, orders, and commission management",
      "Implemented role-based access control (vendor / customer / admin)",
      "Integrated payment gateways and order fulfillment workflows",
      "Designed PostgreSQL schema for multi-tenant vendor isolation",
    ],
    tech: ["React", "FastAPI", "Python", "PostgreSQL"],
  },
];
