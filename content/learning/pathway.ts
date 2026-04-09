import type { LearningStage, LearningResource } from "@/types/learning";

function resource(
  title: string,
  href: string,
  source: string,
  kind: LearningResource["kind"],
  description: string
): LearningResource {
  return { title, href, source, kind, description };
}

export const learningStages: LearningStage[] = [
  {
    id: "baseline-systems",
    title: "Phase 1: Baseline Systems",
    strapline: "Stop treating the machine like a sealed box.",
    order: 1,
    duration: "2-3 weeks",
    summary:
      "Build comfort with the terminal, editor, Git, and the browser’s request path so the rest of the stack has somewhere solid to attach.",
    outcomes: [
      "Explain what happens when a URL loads.",
      "Move around the filesystem and run commands without panic.",
      "Use one editor intentionally instead of bouncing between tools.",
      "Commit and inspect small changes in Git and GitHub.",
    ],
    articleSlugs: [
      "how-the-web-works",
      "command-line-basics",
      "choosing-and-using-an-ide",
      "git-and-github-workflows",
    ],
    resourceLinks: [
      resource(
        "MDN Learn Web Development",
        "https://developer.mozilla.org/en-US/docs/Learn_web_development",
        "MDN",
        "Documentation",
        "Good for framing the browser, documents, scripts, and the web stack at a high level."
      ),
      resource(
        "The Missing Semester",
        "https://missing.csail.mit.edu/",
        "MIT CSAIL",
        "Course",
        "A strong path for shell usage, version control, and practical developer tooling."
      ),
      resource(
        "Visual Studio Code Docs",
        "https://code.visualstudio.com/docs",
        "VS Code",
        "Documentation",
        "Use this as the base reference while Rico gets fluent in one editor."
      ),
    ],
  },
  {
    id: "web-experience",
    title: "Phase 2: Web Experience",
    strapline: "Learn to shape interfaces that make sense to humans.",
    order: 2,
    duration: "3-4 weeks",
    summary:
      "Focus on semantic HTML, resilient CSS, visual hierarchy, responsiveness, accessibility, and browser debugging before heavier frameworks enter the picture.",
    outcomes: [
      "Build a clean page with semantic HTML and reusable CSS.",
      "Spot weak hierarchy and improve it with spacing and typography.",
      "Ship layouts that survive mobile widths and keyboard navigation.",
      "Use DevTools to inspect DOM, CSS, and network behavior.",
    ],
    articleSlugs: [
      "html-and-css-foundations",
      "web-design-principles",
      "responsive-and-accessible-design",
      "browser-devtools-and-debugging",
    ],
    resourceLinks: [
      resource(
        "Responsive Web Design",
        "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
        "freeCodeCamp",
        "Course",
        "Hands-on work for HTML, CSS, and layout fluency."
      ),
      resource(
        "Learn Design",
        "https://web.dev/learn/design",
        "web.dev",
        "Documentation",
        "Useful for layout, color, typography, and intentional interface choices."
      ),
      resource(
        "WAI Tutorials",
        "https://www.w3.org/WAI/tutorials/",
        "W3C WAI",
        "Documentation",
        "Authoritative accessibility guidance Rico should keep close while building UI."
      ),
    ],
  },
  {
    id: "coding-workflow",
    title: "Phase 3: Coding Workflow",
    strapline: "Make the browser programmable, testable, and easier to reason about.",
    order: 3,
    duration: "3-4 weeks",
    summary:
      "Learn JavaScript and TypeScript as tools for state and behavior, then add debugging, testing, and performance habits so the codebase stays legible under change.",
    outcomes: [
      "Write browser-side logic with a clear data flow.",
      "Use types where they reduce ambiguity at boundaries.",
      "Create a basic test and verification loop before shipping changes.",
      "Measure performance instead of guessing at it.",
    ],
    articleSlugs: [
      "javascript-for-the-web",
      "typescript-practical-basics",
      "testing-and-quality",
      "web-performance-and-observability",
    ],
    resourceLinks: [
      resource(
        "JavaScript Guide",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        "MDN",
        "Documentation",
        "A practical starting point for language fundamentals in the browser."
      ),
      resource(
        "TypeScript Handbook",
        "https://www.typescriptlang.org/docs/handbook/intro.html",
        "TypeScript",
        "Documentation",
        "Use this once JavaScript basics feel real rather than theoretical."
      ),
      resource(
        "Introduction to Lighthouse",
        "https://developer.chrome.com/docs/lighthouse/overview/",
        "Chrome for Developers",
        "Documentation",
        "Useful for building an early habit of auditing performance and accessibility."
      ),
    ],
  },
  {
    id: "application-architecture",
    title: "Phase 4: Application Architecture",
    strapline: "Understand data, contracts, identity, and network boundaries.",
    order: 4,
    duration: "3-4 weeks",
    summary:
      "Move from front-end behavior into API contracts, persistence, identity systems, and networking so full-stack ideas stop feeling disconnected.",
    outcomes: [
      "Read and design a basic HTTP API contract.",
      "Model simple relational data with SQL.",
      "Explain the difference between authentication and authorization.",
      "Reason about DNS and connectivity failures without random guessing.",
    ],
    articleSlugs: [
      "http-and-rest-apis",
      "databases-and-sql",
      "authentication-and-authorization",
      "networking-and-dns",
    ],
    resourceLinks: [
      resource(
        "HTTP Overview",
        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
        "MDN",
        "Documentation",
        "The transport-level base for every API conversation."
      ),
      resource(
        "PostgreSQL Tutorial",
        "https://www.postgresql.org/docs/current/tutorial-start.html",
        "PostgreSQL",
        "Documentation",
        "A clean way to approach relational data with real SQL."
      ),
      resource(
        "OAuth 2.0",
        "https://oauth.net/2/",
        "OAuth.net",
        "Reference",
        "Helpful once Rico starts thinking about tokens and delegated authorization."
      ),
    ],
  },
  {
    id: "shipping-security",
    title: "Phase 5: Shipping and Security",
    strapline: "Learn what changes once software has to survive outside the laptop.",
    order: 5,
    duration: "3-4 weeks",
    summary:
      "Cover servers, containers, deployment, and security thinking so Rico can move from local success to systems that are reachable, maintainable, and harder to misuse.",
    outcomes: [
      "Explain what a server process needs to run.",
      "Use container vocabulary without hand-waving.",
      "Describe the path from commit to deployment and rollback.",
      "Recognize common security failures and safer defaults.",
    ],
    articleSlugs: [
      "linux-and-servers",
      "docker-and-containers",
      "cloud-deployment-basics",
      "cybersecurity-foundations",
    ],
    resourceLinks: [
      resource(
        "Docker Get Started",
        "https://docs.docker.com/get-started/",
        "Docker",
        "Documentation",
        "Strong for building a clean mental model of packaging and runtime."
      ),
      resource(
        "Deployments",
        "https://vercel.com/docs/deployments/overview",
        "Vercel Docs",
        "Documentation",
        "A straightforward reference for preview deploys, production deploys, and rollbacks."
      ),
      resource(
        "OWASP Top 10",
        "https://owasp.org/www-project-top-ten/",
        "OWASP",
        "Reference",
        "A current overview of common web-application security failures."
      ),
    ],
  },
];
