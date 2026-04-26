export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Fabric.js",
      "Socket.io-client",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "Async/Await",
      "Pydantic",
      "SQLAlchemy",
      "Celery",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "LLM Integration",
      "OpenAI",
      "Anthropic",
      "LangChain",
      "RAG",
      "Multi-Agent Systems",
      "Pinecone",
      "Embeddings",
      "Prompt Engineering",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Git",
      "Jenkins",
      "GitHub Actions",
      "AWS EC2",
      "AWS S3",
      "AWS Lambda",
      "CI/CD",
      "Linux",
    ],
  },
  {
    title: "Real-time & Comms",
    items: ["Socket.io", "WebSockets", "Twilio", "Firebase"],
  },
  {
    title: "Payments & Monitoring",
    items: ["Stripe", "Sentry", "Bugsnag"],
  },
];
