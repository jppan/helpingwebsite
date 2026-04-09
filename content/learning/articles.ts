import type { LearningResource, TechArticle } from "@/types/learning";

function resource(
  title: string,
  href: string,
  source: string,
  kind: LearningResource["kind"],
  description: string
): LearningResource {
  return { title, href, source, kind, description };
}

const sharedResources = {
  mdnLearnWeb: resource(
    "MDN Learn Web Development",
    "https://developer.mozilla.org/en-US/docs/Learn_web_development",
    "MDN",
    "Documentation",
    "A broad map of the browser, HTML, CSS, JavaScript, accessibility, and performance."
  ),
  mdnHttpOverview: resource(
    "HTTP Overview",
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    "MDN",
    "Documentation",
    "A concise explanation of requests, responses, headers, methods, and status codes."
  ),
  mdnJavaScriptGuide: resource(
    "JavaScript Guide",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    "MDN",
    "Documentation",
    "A practical reference for core JavaScript syntax and browser-side concepts."
  ),
  mdnResponsiveDesign: resource(
    "Responsive Design",
    "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
    "MDN",
    "Documentation",
    "Introduces fluid layouts, breakpoints, and content-driven responsiveness."
  ),
  mdnTestingIntro: resource(
    "Introduction to Testing",
    "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Introduction",
    "MDN",
    "Documentation",
    "A readable starting point for test strategy and quality thinking."
  ),
  mdnPerformance: resource(
    "Web Performance",
    "https://developer.mozilla.org/en-US/docs/Web/Performance",
    "MDN",
    "Documentation",
    "Covers rendering, loading, responsiveness, and why sites feel fast or slow."
  ),
  mdnDebuggingHtml: resource(
    "Debugging HTML",
    "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Debugging_HTML",
    "MDN",
    "Documentation",
    "Good for learning how to inspect markup, console errors, and browser issues."
  ),
  chromeDevTools: resource(
    "Chrome DevTools",
    "https://developer.chrome.com/docs/devtools/",
    "Chrome for Developers",
    "Documentation",
    "The browser inspection, debugging, and performance toolkit Rico should learn early."
  ),
  chromeLighthouse: resource(
    "Introduction to Lighthouse",
    "https://developer.chrome.com/docs/lighthouse/overview/",
    "Chrome for Developers",
    "Documentation",
    "Explains audits for performance, accessibility, and best practices."
  ),
  webDevDesign: resource(
    "Learn Design",
    "https://web.dev/learn/design",
    "web.dev",
    "Documentation",
    "A modern front-end design primer on layout, color, typography, and responsive thinking."
  ),
  w3cWaiTutorials: resource(
    "WAI Tutorials",
    "https://www.w3.org/WAI/tutorials/",
    "W3C WAI",
    "Documentation",
    "Authoritative tutorials for accessible page structure, forms, menus, tables, and images."
  ),
  theOdinProject: resource(
    "Foundations Course",
    "https://www.theodinproject.com/paths/foundations/courses/foundations",
    "The Odin Project",
    "Course",
    "A structured developer-learning path that ties browser basics to practical projects."
  ),
  freeCodeCampResponsive: resource(
    "Responsive Web Design",
    "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    "freeCodeCamp",
    "Course",
    "Hands-on HTML and CSS exercises that reinforce layout and accessibility basics."
  ),
  missingSemester: resource(
    "The Missing Semester",
    "https://missing.csail.mit.edu/",
    "MIT CSAIL",
    "Course",
    "A strong overview of shell usage, version control, debugging, and automation."
  ),
  missingSemesterShell: resource(
    "Course Shell Lecture",
    "https://missing.csail.mit.edu/2020/course-shell/",
    "MIT CSAIL",
    "Course",
    "A focused lesson on shell navigation, pipes, redirection, and working from the terminal."
  ),
  vscodeDocs: resource(
    "Visual Studio Code Docs",
    "https://code.visualstudio.com/docs",
    "VS Code",
    "Documentation",
    "The central reference for editor setup, extensions, debugging, and workspace features."
  ),
  vscodeGettingStarted: resource(
    "Get Started with VS Code",
    "https://code.visualstudio.com/docs/getstarted/getting-started",
    "VS Code",
    "Documentation",
    "Covers the editor UI, command palette, settings, and workflow basics."
  ),
  vscodeTerminal: resource(
    "Terminal Basics",
    "https://code.visualstudio.com/docs/terminal/basics",
    "VS Code",
    "Documentation",
    "Useful for learning integrated terminals, tasks, profiles, and command execution."
  ),
  vscodeTypescript: resource(
    "TypeScript in Visual Studio Code",
    "https://code.visualstudio.com/docs/languages/typescript",
    "VS Code",
    "Documentation",
    "Shows how the editor supports type checking, refactors, and project navigation."
  ),
  gitDocs: resource(
    "Git Documentation",
    "https://git-scm.com/doc",
    "Git",
    "Documentation",
    "The canonical reference for commits, branches, rebases, merges, and other core commands."
  ),
  githubGetStarted: resource(
    "GitHub Get Started",
    "https://docs.github.com/en/get-started",
    "GitHub Docs",
    "Documentation",
    "Explains repositories, pull requests, issues, collaboration, and account basics."
  ),
  githubPages: resource(
    "What is GitHub Pages?",
    "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages",
    "GitHub Docs",
    "Documentation",
    "A good reference for simple static-site deployment and release thinking."
  ),
  reactLearn: resource(
    "Learn React",
    "https://react.dev/learn",
    "React",
    "Documentation",
    "A clear example of component-driven UI work once Rico has the browser basics down."
  ),
  typescriptHandbook: resource(
    "TypeScript Handbook",
    "https://www.typescriptlang.org/docs/handbook/intro.html",
    "TypeScript",
    "Documentation",
    "The official guide to types, narrowing, interfaces, and practical migration from JavaScript."
  ),
  nodeLearn: resource(
    "Node.js Learn",
    "https://nodejs.org/en/learn",
    "Node.js",
    "Documentation",
    "Useful when browser-side JavaScript starts connecting to servers, tools, and scripts."
  ),
  postgresTutorialStart: resource(
    "PostgreSQL Tutorial",
    "https://www.postgresql.org/docs/current/tutorial-start.html",
    "PostgreSQL",
    "Documentation",
    "A database-first route into connecting, querying, and understanding relational thinking."
  ),
  postgresSqlIntro: resource(
    "SQL Intro",
    "https://www.postgresql.org/docs/current/tutorial-sql-intro.html",
    "PostgreSQL",
    "Documentation",
    "Introduces tables, rows, queries, and the shape of relational data work."
  ),
  dockerGetStarted: resource(
    "Docker Get Started",
    "https://docs.docker.com/get-started/",
    "Docker",
    "Documentation",
    "A good starting place for images, containers, registries, and the local-to-production bridge."
  ),
  dockerContainers: resource(
    "What is a Container?",
    "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/",
    "Docker",
    "Documentation",
    "Breaks down containers without assuming deep infrastructure experience."
  ),
  owaspTop10: resource(
    "OWASP Top 10",
    "https://owasp.org/www-project-top-ten/",
    "OWASP",
    "Reference",
    "A current map of the most common web application security failure categories."
  ),
  owaspCheatSheets: resource(
    "OWASP Cheat Sheet Series",
    "https://cheatsheetseries.owasp.org/",
    "OWASP",
    "Reference",
    "Implementation-oriented guidance for authentication, sessions, validation, logging, and more."
  ),
  swaggerOpenApi: resource(
    "What Is OpenAPI?",
    "https://swagger.io/docs/specification/v3_0/about/",
    "Swagger",
    "Documentation",
    "Useful when Rico needs to describe or consume REST APIs in a standard format."
  ),
  oauth2: resource(
    "OAuth 2.0",
    "https://oauth.net/2/",
    "OAuth.net",
    "Reference",
    "A concise overview of delegated authorization, tokens, and the actors in OAuth flows."
  ),
  cloudflareDns: resource(
    "What Is DNS?",
    "https://www.cloudflare.com/learning/dns/what-is-dns/",
    "Cloudflare Learning Center",
    "Reference",
    "A readable explanation of how names resolve, cache, and route users to services."
  ),
  vercelDeployments: resource(
    "Deployments",
    "https://vercel.com/docs/deployments/overview",
    "Vercel Docs",
    "Documentation",
    "A simple deployment mental model for build output, previews, rollbacks, and environments."
  ),
  cisaSecureOurWorld: resource(
    "Secure Our World",
    "https://www.cisa.gov/secure-our-world",
    "CISA",
    "Reference",
    "Practical government guidance on passwords, phishing, updates, and account protection."
  ),
};

export const techArticles: TechArticle[] = [
  {
    title: "How the web works",
    slug: "how-the-web-works",
    category: "Systems literacy",
    stageId: "baseline-systems",
    summary: "Learn what actually happens between typing a URL and seeing a page so every later topic has context.",
    difficulty: "Foundational",
    readingTimeMinutes: 8,
    overview: [
      "Rico should not treat the web like magic. The more clearly he can picture the browser, the network, and the server as separate parts, the easier debugging becomes.",
      "This topic creates the base layer for API work, hosting, DNS, performance, and even cybersecurity because all of those disciplines depend on the same request path.",
    ],
    sections: [
      {
        title: "From address bar to rendered page",
        paragraphs: [
          "A browser starts by parsing the URL and asking where that site lives. DNS turns the human-readable name into an address the network can use.",
          "Once the browser knows where to go, it sends an HTTP request. The server answers with HTML, CSS, JavaScript, images, or data, and the browser assembles that into the page Rico sees.",
        ],
        bullets: [
          "DNS translates a name into an address.",
          "HTTP carries the request and response.",
          "The browser renders content and runs scripts locally.",
        ],
      },
      {
        title: "Why this mental model matters",
        paragraphs: [
          "When a page fails, Rico can ask better questions: is the name not resolving, is the server down, is the response broken, or is the browser failing to render it correctly?",
          "That framing prevents random guessing. It also sets up later work with APIs, databases, performance, and security, because all of them show up somewhere along this chain.",
        ],
      },
      {
        title: "The habit to build early",
        paragraphs: [
          "Every time a site feels wrong, identify which layer is responsible before touching code. The goal is to become someone who narrows failure instead of someone who accumulates tabs full of guesses.",
        ],
      },
    ],
    practice: [
      "Open DevTools on a site Rico uses and reload it while watching the Network tab.",
      "Write down the difference between DNS, HTTP, HTML, CSS, and JavaScript in one sentence each.",
      "Explain to someone else where a page can fail before it becomes visible.",
    ],
    resourceLinks: [sharedResources.mdnLearnWeb, sharedResources.mdnHttpOverview, sharedResources.chromeDevTools],
    relatedArticleSlugs: ["networking-and-dns", "http-and-rest-apis", "browser-devtools-and-debugging"],
  },
  {
    title: "Command line basics",
    slug: "command-line-basics",
    category: "Systems literacy",
    stageId: "baseline-systems",
    summary: "Use the terminal as a clear, inspectable tool instead of a scary one-shot interface.",
    difficulty: "Foundational",
    readingTimeMinutes: 9,
    overview: [
      "The command line matters because it exposes how the machine is organized. Rico does not need to become a shell wizard, but he does need fluency with navigation, files, and repeatable commands.",
      "Most serious tooling eventually drops back to the terminal, whether it is Git, Node, Docker, or deployment tooling.",
    ],
    sections: [
      {
        title: "What the shell is actually doing",
        paragraphs: [
          "The shell is a text interface for running programs, moving around directories, and combining tools. It is less about memorizing commands and more about understanding inputs, outputs, and current working directory.",
          "Once Rico understands where he is, what files exist there, and what a command will affect, the terminal stops feeling random.",
        ],
      },
      {
        title: "Small skills with high payoff",
        paragraphs: [
          "Navigation, listing files, making directories, moving files, reading files, and checking command help cover a surprising amount of day-to-day work.",
        ],
        bullets: [
          "Know how to check the current directory.",
          "Know how to list files before changing anything.",
          "Know how to read help output instead of guessing flags.",
        ],
      },
      {
        title: "The discipline that keeps it safe",
        paragraphs: [
          "The terminal is safest when Rico slows down enough to inspect state before acting. The workflow is: look, confirm, then run.",
        ],
      },
    ],
    practice: [
      "Create a temporary folder, move into it, make a subfolder, and remove it again.",
      "Use the integrated terminal in the editor for a week instead of a separate app.",
      "Before every command, say out loud what file or folder it will affect.",
    ],
    resourceLinks: [sharedResources.missingSemesterShell, sharedResources.vscodeTerminal, sharedResources.missingSemester],
    relatedArticleSlugs: ["choosing-and-using-an-ide", "git-and-github-workflows", "linux-and-servers"],
  },
  {
    title: "Choosing and using an IDE",
    slug: "choosing-and-using-an-ide",
    category: "Tooling",
    stageId: "baseline-systems",
    summary: "Treat the editor as a working environment, not just a place to type code.",
    difficulty: "Foundational",
    readingTimeMinutes: 8,
    overview: [
      "A good IDE or editor compresses cognitive load. Rico should learn one deeply enough that search, refactors, terminals, debugging, and extensions feel like one coherent workspace.",
      "The goal is not endless tooling comparison. It is to make a strong default environment and remove friction from daily work.",
    ],
    sections: [
      {
        title: "What matters more than brand choice",
        paragraphs: [
          "Whether Rico settles on VS Code or another editor, the important part is learning how the workspace is organized: file tree, command palette, settings, problems panel, source control view, and integrated terminal.",
          "Strong editor habits reduce context switching and make project exploration much faster.",
        ],
      },
      {
        title: "Extensions should support the workflow",
        paragraphs: [
          "Install only the extensions that solve repeated problems. Too many extensions create noise, slowdowns, and conflicting behaviors.",
        ],
        bullets: [
          "Language support for the main stack.",
          "Formatting and linting support.",
          "Git integration and debugger support.",
        ],
      },
      {
        title: "Learn keyboard-driven navigation early",
        paragraphs: [
          "Jump-to-file, jump-to-symbol, rename, and search-across-project are force multipliers. Rico becomes faster not by typing faster, but by traversing the codebase with intention.",
        ],
      },
    ],
    practice: [
      "Set up one workspace with formatting, a terminal profile, and one language extension.",
      "Use jump-to-file and project search instead of clicking through folders for a full day.",
      "Rename a variable through the editor’s refactor support instead of manual find-and-replace.",
    ],
    resourceLinks: [sharedResources.vscodeDocs, sharedResources.vscodeGettingStarted, sharedResources.vscodeTerminal],
    relatedArticleSlugs: ["command-line-basics", "browser-devtools-and-debugging", "git-and-github-workflows"],
  },
  {
    title: "Git and GitHub workflows",
    slug: "git-and-github-workflows",
    category: "Tooling",
    stageId: "baseline-systems",
    summary: "Learn version control as a safety system for thinking, not just as a backup button.",
    difficulty: "Foundational",
    readingTimeMinutes: 10,
    overview: [
      "Git matters because it lets Rico change code without losing the ability to inspect, explain, or undo work. GitHub matters because most real collaboration happens around repositories, pull requests, and reviews.",
      "The useful mental model is snapshot plus branch plus review, not a wall of commands.",
    ],
    sections: [
      {
        title: "The minimum Git model",
        paragraphs: [
          "A repository is the project history. A branch is a lane of work. A commit is a named snapshot that explains a coherent change.",
          "Once Rico understands that, status, add, commit, diff, log, branch, merge, and rebase start to feel understandable rather than ceremonial.",
        ],
      },
      {
        title: "GitHub adds collaboration structure",
        paragraphs: [
          "Pull requests turn code changes into reviewable conversations. Issues capture work. Branches make it possible to isolate work without destabilizing the main branch.",
        ],
      },
      {
        title: "Healthy habits beat clever commands",
        paragraphs: [
          "Commit small units. Read diffs before pushing. Name branches for purpose. Avoid rewriting history casually until the fundamentals feel stable.",
        ],
      },
    ],
    practice: [
      "Create a repo, make three small commits, then read the log and diff output.",
      "Open a practice pull request against a branch and summarize the change in plain language.",
      "Use `git status` before and after every operation until the state model feels natural.",
    ],
    resourceLinks: [sharedResources.gitDocs, sharedResources.githubGetStarted, sharedResources.missingSemester],
    relatedArticleSlugs: ["command-line-basics", "choosing-and-using-an-ide", "testing-and-quality"],
  },
  {
    title: "HTML and CSS foundations",
    slug: "html-and-css-foundations",
    category: "Web foundations",
    stageId: "web-experience",
    summary: "Start with structure and presentation before worrying about frameworks or animation.",
    difficulty: "Foundational",
    readingTimeMinutes: 10,
    overview: [
      "HTML describes meaning and structure. CSS controls presentation and layout. Rico needs to keep those roles separate because most front-end confusion begins when structure and styling get mixed together.",
      "A strong HTML and CSS base makes React, design systems, accessibility, and responsive layout easier later.",
    ],
    sections: [
      {
        title: "HTML is not a pile of divs",
        paragraphs: [
          "Semantic HTML gives shape to content. Headings, lists, buttons, links, forms, and landmarks tell browsers, assistive tools, and search engines what each part of the page is for.",
          "When Rico uses the right element for the job, styling gets easier and accessibility problems shrink before they start.",
        ],
      },
      {
        title: "CSS is a layout and state system",
        paragraphs: [
          "CSS handles spacing, typography, visual hierarchy, interaction states, and responsive adaptation. It is not just decoration.",
        ],
        bullets: [
          "Learn the box model.",
          "Learn flexbox and grid for layout.",
          "Understand how specificity and cascade change what wins.",
        ],
      },
      {
        title: "Keep the page explainable",
        paragraphs: [
          "A good front-end habit is making it obvious what content exists, what style system is shaping it, and which rules are safe to reuse.",
        ],
      },
    ],
    practice: [
      "Build a simple article page with headings, lists, buttons, and a form without using a framework.",
      "Recreate a card layout twice: once with flexbox and once with grid.",
      "Inspect the page in DevTools and trace why a specific style wins.",
    ],
    resourceLinks: [sharedResources.mdnLearnWeb, sharedResources.freeCodeCampResponsive, sharedResources.theOdinProject],
    relatedArticleSlugs: ["web-design-principles", "responsive-and-accessible-design", "browser-devtools-and-debugging"],
  },
  {
    title: "Web design principles",
    slug: "web-design-principles",
    category: "Web foundations",
    stageId: "web-experience",
    summary: "Learn the visual and structural decisions that make interfaces feel deliberate instead of accidental.",
    difficulty: "Foundational",
    readingTimeMinutes: 9,
    overview: [
      "Design literacy is not optional if Rico wants to build usable software. Even highly technical people make stronger products when they understand hierarchy, spacing, contrast, and content flow.",
      "The goal is not to become a brand designer overnight. It is to learn how interfaces guide attention and reduce friction.",
    ],
    sections: [
      {
        title: "Hierarchy is the first design job",
        paragraphs: [
          "Users should know what the page is for, what they should do next, and what matters most within a few seconds. Typography scale, spacing, contrast, and grouping create that hierarchy.",
          "Without hierarchy, even accurate content feels noisy and hard to trust.",
        ],
      },
      {
        title: "Design is systems thinking",
        paragraphs: [
          "Strong interfaces repeat spacing rules, color decisions, interaction patterns, and layout rhythms. Design systems exist because consistency reduces mental overhead for both builders and users.",
        ],
      },
      {
        title: "Taste grows through comparison",
        paragraphs: [
          "Rico should get used to studying real interfaces and asking why they feel clean, crowded, calm, or confusing. That question builds practical taste much faster than memorizing abstract principles.",
        ],
      },
    ],
    practice: [
      "Take one cluttered page and simplify its hierarchy using only spacing and typography changes.",
      "Write down a reusable spacing scale and apply it across a small UI.",
      "Collect three sites with strong hierarchy and explain what they do differently.",
    ],
    resourceLinks: [sharedResources.webDevDesign, sharedResources.w3cWaiTutorials, sharedResources.mdnLearnWeb],
    relatedArticleSlugs: ["html-and-css-foundations", "responsive-and-accessible-design", "web-performance-and-observability"],
  },
  {
    title: "Responsive and accessible design",
    slug: "responsive-and-accessible-design",
    category: "Web foundations",
    stageId: "web-experience",
    summary: "Build pages that adapt to different screens and remain usable for more people under more conditions.",
    difficulty: "Foundational",
    readingTimeMinutes: 10,
    overview: [
      "Responsiveness and accessibility are not polish layers. They are part of whether the product works at all.",
      "Rico should learn to think in constraints: narrow screens, keyboard users, zoomed layouts, reduced motion, low contrast environments, and interrupted attention.",
    ],
    sections: [
      {
        title: "Responsive design starts with content",
        paragraphs: [
          "The point of responsive design is not chasing device sizes. It is making content reflow gracefully as available space changes.",
          "That usually means fluid containers, adaptable media, sensible breakpoints, and layout choices driven by the content instead of by a preset screen list.",
        ],
      },
      {
        title: "Accessibility is part of correctness",
        paragraphs: [
          "Keyboard navigation, semantic landmarks, label associations, focus states, color contrast, and readable copy all affect whether real people can use the interface.",
        ],
        bullets: [
          "If a page cannot be navigated by keyboard, it is incomplete.",
          "If the structure is not semantic, assistive tech loses context.",
          "If motion and contrast are careless, some users are excluded.",
        ],
      },
      {
        title: "Build the checks into the workflow",
        paragraphs: [
          "Rico should inspect mobile layouts early, zoom pages regularly, and use automated audits as a starting point rather than a final authority.",
        ],
      },
    ],
    practice: [
      "Shrink a page to phone width and list every place where the content stops being readable.",
      "Tab through a page without using a mouse and fix every place focus is unclear or trapped.",
      "Run a Lighthouse accessibility audit and investigate the top failures manually.",
    ],
    resourceLinks: [sharedResources.mdnResponsiveDesign, sharedResources.w3cWaiTutorials, sharedResources.chromeLighthouse],
    relatedArticleSlugs: ["html-and-css-foundations", "web-design-principles", "browser-devtools-and-debugging"],
  },
  {
    title: "Browser DevTools and debugging",
    slug: "browser-devtools-and-debugging",
    category: "Web foundations",
    stageId: "web-experience",
    summary: "Use inspection tools to reduce guesswork when a page looks wrong, behaves wrong, or loads wrong.",
    difficulty: "Intermediate",
    readingTimeMinutes: 9,
    overview: [
      "Debugging gets easier when Rico learns to inspect live state instead of reasoning only from source files. Browsers expose the running page, the network, storage, layout, and console output for exactly this reason.",
      "DevTools turns front-end work from speculation into observation.",
    ],
    sections: [
      {
        title: "What to inspect first",
        paragraphs: [
          "If layout is wrong, inspect the DOM and computed styles. If data is missing, inspect the network response. If behavior is wrong, inspect the console and event flow.",
          "Each panel exists to answer a class of question, so Rico should learn to map symptoms to the right surface.",
        ],
      },
      {
        title: "Debugging is a narrowing process",
        paragraphs: [
          "The core habit is isolating the smallest reproducible failure. Change one variable, refresh the state, and verify what actually changed.",
        ],
        bullets: [
          "Confirm the bug is reproducible.",
          "Find the smallest failing case.",
          "Inspect the live browser state before editing code.",
        ],
      },
      {
        title: "Good debugging leaves evidence",
        paragraphs: [
          "Notes, screenshots, failing inputs, and a short explanation of the root cause help Rico learn faster and make team communication cleaner.",
        ],
      },
    ],
    practice: [
      "Find one layout bug and trace it through element styles, computed values, and the box model.",
      "Watch a page load and identify the slowest request in the Network panel.",
      "Use breakpoints or console logging to confirm the exact step where state diverges.",
    ],
    resourceLinks: [sharedResources.chromeDevTools, sharedResources.mdnDebuggingHtml, sharedResources.chromeLighthouse],
    relatedArticleSlugs: ["how-the-web-works", "html-and-css-foundations", "testing-and-quality"],
  },
  {
    title: "JavaScript for the web",
    slug: "javascript-for-the-web",
    category: "Programming",
    stageId: "coding-workflow",
    summary: "Learn the language that gives the browser memory, conditions, interaction, and data flow.",
    difficulty: "Foundational",
    readingTimeMinutes: 11,
    overview: [
      "JavaScript matters because it connects the interface to state and behavior. Rico does not need every edge case first; he needs a working command of values, functions, arrays, objects, async behavior, and DOM interaction.",
      "The best early goal is not cleverness. It is writing explainable code that behaves predictably.",
    ],
    sections: [
      {
        title: "The useful core",
        paragraphs: [
          "Variables, conditionals, loops, functions, objects, arrays, and modules cover most beginner work. Those concepts matter more than memorizing every built-in method.",
          "Rico should focus on understanding data transformation and control flow, because UI code is mostly state moving through those two systems.",
        ],
      },
      {
        title: "The browser adds another layer",
        paragraphs: [
          "In the web context, JavaScript also reads the DOM, handles events, performs fetch requests, and updates the screen when state changes.",
        ],
        bullets: [
          "Events connect user input to code.",
          "The DOM is the browser’s page structure API.",
          "Async code matters because network work does not finish instantly.",
        ],
      },
      {
        title: "Prefer clarity over tricks",
        paragraphs: [
          "If Rico can explain what each function takes in, returns, and mutates, he is on the right path. Clever shortcuts can wait until the fundamentals are stable.",
        ],
      },
    ],
    practice: [
      "Build a small interactive page with a form, a list, and a button-driven state update.",
      "Fetch JSON from a public API and render a loading, success, and error state.",
      "Rewrite one long function into a few smaller functions with clear inputs and outputs.",
    ],
    resourceLinks: [sharedResources.mdnJavaScriptGuide, sharedResources.theOdinProject, sharedResources.mdnLearnWeb],
    relatedArticleSlugs: ["typescript-practical-basics", "http-and-rest-apis", "testing-and-quality"],
  },
  {
    title: "TypeScript practical basics",
    slug: "typescript-practical-basics",
    category: "Programming",
    stageId: "coding-workflow",
    summary: "Use types to make behavior more explicit and catch mismatches earlier.",
    difficulty: "Intermediate",
    readingTimeMinutes: 9,
    overview: [
      "TypeScript is most useful when Rico already understands the JavaScript underneath it. The point is not ceremony; it is stronger feedback from the editor and compiler before bugs reach runtime.",
      "Type annotations help turn assumptions about data into something the tooling can verify.",
    ],
    sections: [
      {
        title: "What TypeScript adds",
        paragraphs: [
          "TypeScript tracks what values are allowed, what shapes objects have, and what functions expect or return. That reduces hidden contracts in a codebase.",
          "The biggest win is often navigation and refactoring confidence, not just error prevention.",
        ],
      },
      {
        title: "Use types where they clarify boundaries",
        paragraphs: [
          "Function inputs, API responses, component props, and shared domain objects are high-value places to add types. Over-typing internal trivia is usually a waste.",
        ],
        bullets: [
          "Start with obvious object shapes.",
          "Use unions for controlled variation.",
          "Let inference do work when the type is already clear.",
        ],
      },
      {
        title: "Type systems still need judgment",
        paragraphs: [
          "A project can be typed and still badly designed. Types improve clarity, but they do not replace naming, decomposition, or good architecture.",
        ],
      },
    ],
    practice: [
      "Convert a small JavaScript utility file to TypeScript and type its inputs and outputs.",
      "Model an API response with a type and render it in the UI without `any`.",
      "Use the editor to follow TypeScript errors until the project builds cleanly.",
    ],
    resourceLinks: [sharedResources.typescriptHandbook, sharedResources.vscodeTypescript, sharedResources.reactLearn],
    relatedArticleSlugs: ["javascript-for-the-web", "http-and-rest-apis", "testing-and-quality"],
  },
  {
    title: "Testing and quality",
    slug: "testing-and-quality",
    category: "Programming",
    stageId: "coding-workflow",
    summary: "Think about quality as a layered system of confidence, not just a pile of tests.",
    difficulty: "Intermediate",
    readingTimeMinutes: 9,
    overview: [
      "Testing matters because software fails in ways the author no longer sees. Rico should learn to create feedback loops that catch mistakes before users do.",
      "Quality work includes manual verification, automated tests, static checks, and sane rollout habits.",
    ],
    sections: [
      {
        title: "What should be tested",
        paragraphs: [
          "Business rules, state changes, edge cases, error handling, and user-critical flows deserve attention first. Not every line needs equal coverage.",
          "The right question is where failure would be expensive or hard to notice.",
        ],
      },
      {
        title: "Different feedback loops catch different risks",
        paragraphs: [
          "Type checking catches shape mismatches. Unit tests catch logic errors. Integration tests catch broken boundaries. Manual testing catches awkwardness and gaps that tools miss.",
        ],
      },
      {
        title: "Quality is a workflow habit",
        paragraphs: [
          "Read diffs before merging. Reproduce bugs before fixing them. Write down what changed and why. Those habits prevent a lot of avoidable churn.",
        ],
      },
    ],
    practice: [
      "Take one bug and write down a reproducible test case before changing code.",
      "Add a small automated test around a utility or transformation function.",
      "Create a release checklist with build, smoke test, and rollback thoughts.",
    ],
    resourceLinks: [sharedResources.mdnTestingIntro, sharedResources.chromeLighthouse, sharedResources.githubGetStarted],
    relatedArticleSlugs: ["browser-devtools-and-debugging", "git-and-github-workflows", "web-performance-and-observability"],
  },
  {
    title: "Web performance and observability",
    slug: "web-performance-and-observability",
    category: "Programming",
    stageId: "coding-workflow",
    summary: "Make sites feel fast by measuring actual bottlenecks and watching systems after they ship.",
    difficulty: "Intermediate",
    readingTimeMinutes: 9,
    overview: [
      "Performance is user experience expressed as waiting time, visual stability, and responsiveness. Rico should learn to measure before optimizing.",
      "Observability extends that mindset into production by asking what the system is doing after release, not just whether it passed locally.",
    ],
    sections: [
      {
        title: "What usually makes sites feel slow",
        paragraphs: [
          "Large assets, blocking scripts, expensive rendering work, too much JavaScript, and slow network responses are common causes.",
          "The browser exposes much of this already, so careful inspection often beats intuition.",
        ],
      },
      {
        title: "Performance work is prioritization",
        paragraphs: [
          "Not every metric matters equally. Rico should focus first on page load, main-thread blocking, layout shift, and the user actions that feel delayed.",
        ],
      },
      {
        title: "Observability keeps shipped systems honest",
        paragraphs: [
          "Logs, traces, error reporting, and basic uptime signals help confirm whether a change improved reality or just moved the problem somewhere less visible.",
        ],
      },
    ],
    practice: [
      "Run Lighthouse on a page, then inspect the heaviest opportunities instead of trying to fix every number.",
      "Use DevTools to identify one large asset and one blocking request.",
      "Write down three signals you would want after deploying a feature: traffic, errors, and response time.",
    ],
    resourceLinks: [sharedResources.mdnPerformance, sharedResources.chromeLighthouse, sharedResources.chromeDevTools],
    relatedArticleSlugs: ["web-design-principles", "testing-and-quality", "cloud-deployment-basics"],
  },
  {
    title: "HTTP and REST APIs",
    slug: "http-and-rest-apis",
    category: "Application architecture",
    stageId: "application-architecture",
    summary: "Understand how clients and servers exchange data so API work stops feeling abstract.",
    difficulty: "Intermediate",
    readingTimeMinutes: 10,
    overview: [
      "APIs are contracts over the network. Rico should see them as structured conversations: a client asks, a server responds, and both sides rely on shared expectations.",
      "Once HTTP basics are clear, REST stops being vocabulary and starts being design tradeoffs.",
    ],
    sections: [
      {
        title: "The transport layer first",
        paragraphs: [
          "HTTP defines methods, headers, status codes, and message bodies. Those details matter because they tell clients what happened and how to react.",
          "A strong API consumer learns to inspect the full response, not just the JSON body.",
        ],
      },
      {
        title: "REST is about resource-oriented structure",
        paragraphs: [
          "REST-style APIs typically organize around nouns such as users, posts, or orders, then use HTTP methods to express actions on those resources.",
        ],
        bullets: [
          "Use consistent naming.",
          "Return meaningful status codes.",
          "Treat documentation as part of the product.",
        ],
      },
      {
        title: "Good API thinking reduces friction on both sides",
        paragraphs: [
          "Well-designed APIs are predictable, versioned deliberately, and explicit about authentication, errors, and data shape.",
        ],
      },
    ],
    practice: [
      "Inspect a real API call in DevTools and note method, status, headers, and body separately.",
      "Write a small fetch client that handles loading, success, and error responses cleanly.",
      "Describe a sample resource in plain English before designing its endpoint.",
    ],
    resourceLinks: [sharedResources.mdnHttpOverview, sharedResources.swaggerOpenApi, sharedResources.mdnLearnWeb],
    relatedArticleSlugs: ["how-the-web-works", "authentication-and-authorization", "databases-and-sql"],
  },
  {
    title: "Databases and SQL",
    slug: "databases-and-sql",
    category: "Application architecture",
    stageId: "application-architecture",
    summary: "Learn how applications persist state and why relational thinking still matters.",
    difficulty: "Intermediate",
    readingTimeMinutes: 10,
    overview: [
      "A database is where application memory becomes durable. Rico should understand the difference between what lives in code, what lives in process memory, and what lives in persistent storage.",
      "SQL remains important because structured data and relationships show up everywhere, even when the surrounding stack changes.",
    ],
    sections: [
      {
        title: "Think in entities and relationships",
        paragraphs: [
          "Tables, rows, columns, keys, and joins represent real relationships in data. Good schema design begins with the domain, not with whichever query seems convenient today.",
          "Rico should ask what each table represents, what uniquely identifies a record, and how records relate to each other.",
        ],
      },
      {
        title: "SQL is a language for asking precise questions",
        paragraphs: [
          "SELECT, INSERT, UPDATE, DELETE, filtering, grouping, and joins are the durable basics. These let Rico inspect state instead of guessing what the backend stored.",
        ],
      },
      {
        title: "Data quality is part of system quality",
        paragraphs: [
          "Constraints, indexes, and migrations matter because once bad data lands in production, the fix is often harder than the bug that wrote it.",
        ],
      },
    ],
    practice: [
      "Design a tiny schema for users, posts, and comments before touching code.",
      "Write queries that answer a real question, not just `SELECT *`.",
      "List the constraints that should prevent impossible records in a simple app.",
    ],
    resourceLinks: [sharedResources.postgresTutorialStart, sharedResources.postgresSqlIntro, sharedResources.nodeLearn],
    relatedArticleSlugs: ["http-and-rest-apis", "authentication-and-authorization", "linux-and-servers"],
  },
  {
    title: "Authentication and authorization",
    slug: "authentication-and-authorization",
    category: "Application architecture",
    stageId: "application-architecture",
    summary: "Separate identity from permission so account systems stop getting blurred together.",
    difficulty: "Intermediate",
    readingTimeMinutes: 10,
    overview: [
      "Authentication answers who the user is. Authorization answers what they are allowed to do. Rico should keep those questions separate because many security and product bugs begin when they are mixed together.",
      "This topic also forces careful thinking about sessions, tokens, passwords, and trust boundaries.",
    ],
    sections: [
      {
        title: "Identity is not permission",
        paragraphs: [
          "A successful login proves a user identity to some acceptable standard. It does not automatically mean that user should have access to every route, record, or administrative action.",
          "Good systems check authorization wherever sensitive actions happen, not just once at sign-in time.",
        ],
      },
      {
        title: "Tokens, sessions, and flows",
        paragraphs: [
          "Sessions and tokens are ways of carrying proof of login across requests. OAuth adds another pattern where one system delegates access to another without sharing a password.",
        ],
        bullets: [
          "Store credentials carefully.",
          "Treat token lifetime and scope as real design choices.",
          "Understand logout and session invalidation, not just login.",
        ],
      },
      {
        title: "Security depends on boring details",
        paragraphs: [
          "Rate limits, password resets, MFA, secure defaults, and careful error messages often matter more than whichever authentication library looked easiest on day one.",
        ],
      },
    ],
    practice: [
      "Describe the difference between login, session, token, and permission in plain language.",
      "Model three roles for a sample app and list what each can and cannot do.",
      "Review a login flow and identify where recovery, MFA, and logout should fit.",
    ],
    resourceLinks: [sharedResources.oauth2, sharedResources.owaspCheatSheets, sharedResources.cisaSecureOurWorld],
    relatedArticleSlugs: ["http-and-rest-apis", "cybersecurity-foundations", "databases-and-sql"],
  },
  {
    title: "Networking and DNS",
    slug: "networking-and-dns",
    category: "Application architecture",
    stageId: "application-architecture",
    summary: "Understand names, addresses, ports, and routing well enough to reason about connectivity problems.",
    difficulty: "Intermediate",
    readingTimeMinutes: 9,
    overview: [
      "Networking becomes easier when Rico stops treating it as invisible plumbing. Devices, services, and browsers all depend on names resolving to addresses and requests reaching the right port.",
      "DNS is the first concept to learn because many user-facing failures begin there.",
    ],
    sections: [
      {
        title: "Names and addresses are different",
        paragraphs: [
          "Domain names are human-facing labels. IP addresses are machine-facing locations. DNS sits between them so people can remember names and machines can still route traffic.",
          "Caching exists to make resolution faster, but it also means DNS changes may take time to propagate.",
        ],
      },
      {
        title: "Ports and protocols define the conversation",
        paragraphs: [
          "A host can serve many kinds of traffic. Protocols and port numbers help systems agree on which kind of conversation is happening where.",
        ],
        bullets: [
          "A reachable host does not guarantee the right service is listening.",
          "A resolved domain does not guarantee the application is healthy.",
          "A timeout is different from a denied request.",
        ],
      },
      {
        title: "Useful networking questions are very specific",
        paragraphs: [
          "Can the client resolve the name? Can it connect to the target? Did the service answer? Did the app return something valid? That sequence keeps troubleshooting disciplined.",
        ],
      },
    ],
    practice: [
      "Trace a familiar site from domain name to request in your notes.",
      "Compare the idea of DNS caching to browser caching and explain the difference.",
      "When something fails to load, classify it as resolution, connection, server, or rendering trouble.",
    ],
    resourceLinks: [sharedResources.cloudflareDns, sharedResources.mdnHttpOverview, sharedResources.mdnLearnWeb],
    relatedArticleSlugs: ["how-the-web-works", "http-and-rest-apis", "linux-and-servers"],
  },
  {
    title: "Linux and servers",
    slug: "linux-and-servers",
    category: "Systems and shipping",
    stageId: "shipping-security",
    summary: "Learn the machine-side view of applications once they leave the comfort of local development.",
    difficulty: "Intermediate",
    readingTimeMinutes: 10,
    overview: [
      "A server is still just a computer, but it is one whose reliability and access patterns matter more. Rico should understand files, processes, logs, environment variables, and services before he worries about more advanced infrastructure.",
      "Linux matters because a large amount of modern web infrastructure runs on it or inherits its ideas.",
    ],
    sections: [
      {
        title: "A server is an environment, not just a host",
        paragraphs: [
          "Once code is deployed, questions expand beyond syntax. What process is running? Which environment variables exist? Where are the logs? Which port is open? Where is the app writing files?",
          "Those questions are often more important than the application code when something breaks in production.",
        ],
      },
      {
        title: "Processes, permissions, and logs",
        paragraphs: [
          "Rico should understand that the operating system schedules processes, enforces file permissions, and stores logs that explain runtime behavior.",
        ],
        bullets: [
          "Know what user the process runs as.",
          "Know where configuration comes from.",
          "Know where to look when the service crashes.",
        ],
      },
      {
        title: "Production discipline is mostly clarity",
        paragraphs: [
          "Servers become manageable when file layout, configuration, startup, and monitoring are intentional instead of improvised.",
        ],
      },
    ],
    practice: [
      "List the environment variables and directories an app would need to run on a fresh machine.",
      "Explain the difference between source code, build output, and a running process.",
      "Read one deployment log or runtime log and summarize what it says in plain English.",
    ],
    resourceLinks: [sharedResources.missingSemester, sharedResources.nodeLearn, sharedResources.vercelDeployments],
    relatedArticleSlugs: ["command-line-basics", "networking-and-dns", "docker-and-containers"],
  },
  {
    title: "Docker and containers",
    slug: "docker-and-containers",
    category: "Systems and shipping",
    stageId: "shipping-security",
    summary: "Use containers to package environment assumptions instead of relying on luck between machines.",
    difficulty: "Intermediate",
    readingTimeMinutes: 9,
    overview: [
      "Containers matter because they package an application with its runtime expectations. Rico should see them as consistency tools, not magic deployment dust.",
      "The real value is making the environment more reproducible across local machines, CI, and hosting platforms.",
    ],
    sections: [
      {
        title: "What a container solves",
        paragraphs: [
          "A container image describes what software should exist and how the app should start. Running the image creates a containerized process with predictable dependencies.",
          "That reduces the classic “works on my machine” problem, although it does not remove the need to understand the machine.",
        ],
      },
      {
        title: "Images, containers, volumes, networks",
        paragraphs: [
          "Images are blueprints. Containers are running instances. Volumes persist data beyond the container lifecycle. Networks define how containers talk to each other and the outside world.",
        ],
      },
      {
        title: "Containers are still operations work",
        paragraphs: [
          "Rico still needs to think about secrets, resource limits, logs, updates, and what should happen when the process dies.",
        ],
      },
    ],
    practice: [
      "Describe in one paragraph what information should go into a Dockerfile for a simple app.",
      "List what state should live in a volume versus inside the image.",
      "Explain why rebuilding an image is different from restarting a container.",
    ],
    resourceLinks: [sharedResources.dockerGetStarted, sharedResources.dockerContainers, sharedResources.vercelDeployments],
    relatedArticleSlugs: ["linux-and-servers", "cloud-deployment-basics", "web-performance-and-observability"],
  },
  {
    title: "Cloud deployment basics",
    slug: "cloud-deployment-basics",
    category: "Systems and shipping",
    stageId: "shipping-security",
    summary: "Understand the path from local code to a hosted application that real users can reach.",
    difficulty: "Intermediate",
    readingTimeMinutes: 10,
    overview: [
      "Deployment is where code becomes a service. Rico should know what gets built, what gets uploaded, how configuration is injected, and how rollbacks happen.",
      "The important lesson is not platform loyalty. It is understanding the deployment lifecycle clearly enough to reason about failure and recovery.",
    ],
    sections: [
      {
        title: "The deployment pipeline has distinct steps",
        paragraphs: [
          "Source code is pulled from version control, dependencies are installed, a build may run, output artifacts are created, and the result gets exposed through some hosting environment.",
          "Every step can fail differently, so a clean mental model is essential when debugging release problems.",
        ],
      },
      {
        title: "Configuration is part of deployment",
        paragraphs: [
          "Environment variables, secrets, domains, redirects, and build settings all affect whether the app behaves correctly after release.",
        ],
        bullets: [
          "Preview environments reduce risk.",
          "Rollbacks should be easy and practiced.",
          "Production configuration should never be a mystery.",
        ],
      },
      {
        title: "Shipping is operational responsibility",
        paragraphs: [
          "Once an app is public, uptime, security, logs, and user-facing behavior all become part of the job. Deployment is the start of runtime responsibility, not the end of development.",
        ],
      },
    ],
    practice: [
      "Write down the exact steps between pushing code and seeing a live change on a hosted site.",
      "List the environment variables a sample app would need in preview and production.",
      "Describe what a safe rollback plan looks like before deploying anything important.",
    ],
    resourceLinks: [sharedResources.vercelDeployments, sharedResources.githubPages, sharedResources.githubGetStarted],
    relatedArticleSlugs: ["docker-and-containers", "linux-and-servers", "cybersecurity-foundations"],
  },
  {
    title: "Cybersecurity foundations",
    slug: "cybersecurity-foundations",
    category: "Systems and shipping",
    stageId: "shipping-security",
    summary: "Adopt a security mindset early so convenience does not quietly become exposure.",
    difficulty: "Intermediate",
    readingTimeMinutes: 11,
    overview: [
      "Cybersecurity is not a separate final chapter. It is a habit of asking what can go wrong, who can exploit it, and how much trust a system should really grant.",
      "Rico does not need to start with exploit development. He needs to build threat awareness, safe defaults, and respect for attack surface.",
    ],
    sections: [
      {
        title: "Security starts with assets and threats",
        paragraphs: [
          "The first questions are: what matters, who should have access, what happens if it leaks, and which paths could an attacker realistically use?",
          "That mental model is more durable than memorizing a rotating list of scary terms.",
        ],
      },
      {
        title: "Most failures are ordinary",
        paragraphs: [
          "Weak passwords, reused credentials, exposed secrets, vulnerable dependencies, missing validation, and over-trusting users are still common. Security work is often about consistently preventing boring mistakes.",
        ],
        bullets: [
          "Patch dependencies and operating systems.",
          "Use MFA and strong account hygiene.",
          "Validate inputs and limit permissions.",
        ],
      },
      {
        title: "Security is continuous maintenance",
        paragraphs: [
          "A secure system today can become risky later through drift, neglected updates, or changed assumptions. Rico should expect security review to be ongoing work.",
        ],
      },
    ],
    practice: [
      "Review one app and list its assets, trust boundaries, and highest-risk actions.",
      "Identify where secrets live locally, in the repo, and in deployment configuration.",
      "Read three OWASP categories and explain how each could appear in a small web app.",
    ],
    resourceLinks: [sharedResources.owaspTop10, sharedResources.owaspCheatSheets, sharedResources.cisaSecureOurWorld],
    relatedArticleSlugs: ["authentication-and-authorization", "cloud-deployment-basics", "linux-and-servers"],
  },
];
