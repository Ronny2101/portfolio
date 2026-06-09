export const projects = [
  {
    name: "Rolex",
    url: "http://rolexwatch.uz/",
    tagline: "Full-stack Luxury watch e-commerce",
    description:
      "Real-time marketplace with live chat, dynamic filters synced to URL, and multilingual support across 4 languages.",
    tech: ["Next.js", "NestJS", "GraphQL", "MongoDB", "TypeScript", "Docker"],
    accent: "#7C3AED",
  },
  {
    name: "Cyber",
    url: "http://cybertechnical.uz/",
    tagline: "Cyber Technical e-commerce for local businesses",
    description:
      "Enables small  stores to manage products, process orders, and grow online with a full admin dashboard.",
    tech: ["React", "Express", "MongoDB", "TypeScript", "Redux Toolkit"],
    accent: "#D97706",
  },
];

export const experience = [
  {
    type: "work" as const,
    title: "Full Stack Developer",
    company: "Personal Projects",
    period: "Jan 2025 — Present",
    description:
      "Developed authentication systems admin dashboards product managment and responsive user interfaces.",
    tech: ["React", "Next.js", "NestJS", "MongoDB", "GraphQL", "Docker"],
  },
  {
    type: "work" as const,
    title: "Cyber Security Student",
    company: "HAAD Academy",
    period: "Jan 2026 — Present",
    description:
      "Learning network security web application security penetration testing, Linux systems, vulnerability assesment and cybersecurity fundamentals.",
    tech: ["Linux", "Networking", "Web Security", "OWASP", "Burp Suite", "Nmap"],
  },
  {
    type: "education" as const,
    title: "MERN & NESTJS Full-Stack Developer",
    company: "Devex Academy",
    period: "Jan 2025 — May 2026",
    description: "Computer Science, Busan, South Korea.",
    tech: [],
  },
];

export const skillCategories = [
  {
    name: "Languages",
    items: ["TypeScript", "JavaScript", "Bash", "SQL"],
    border: "#2563EB",
  },
  {
    name: "Full Stack",
    items: ["React", "Next.js", "NestJS", "FastAPI", "Express", "GraphQL", "Tailwind CSS", "Prisma"],
    border: "#7C3AED",
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
    border: "#059669",
  },
  {
    name: "AI",
    items: ["Gemini API", "OpenAI API", "PyTorch", "RAG", "LangChain", "Langfuse", "Embeddings"],
    border: "#D97706",
  },
  {
    name: "DevOps",
    items: ["Docker", "Nginx", "Caddy", "GitHub Actions", "Linux"],
    border: "#DC2626",
  },
  {
    name: "AI Tooling",
    items: ["Claude Code", "GitHub Copilot", "Codex", "Gemini CLI", "Cursor", "MCP"],
    border: "#4F46E5",
  },
];
