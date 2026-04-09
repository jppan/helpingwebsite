import type { Guide } from "@/types/content";

export const manageTooManyBrowserTabs: Guide = {
  title: "I have too many browser tabs open",
  slug: "manage-too-many-browser-tabs",
  category: "browsers-tabs",
  summary:
    "Reduce browser clutter, keep the pages that matter, and make the web feel manageable again.",
  whatThisFixes: [
    "You cannot find the tab you need.",
    "The browser feels cluttered or stressful.",
    "Too many tabs may be slowing things down.",
  ],
  symptoms: [
    "Tabs are too small to read.",
    "You have multiple windows open.",
    "The browser feels messy or distracting.",
  ],
  difficulty: "Easy",
  estimatedTimeMinutes: 5,
  urgency: "Normal",
  beforeYouStart: [
    "Decide whether you want to keep some pages for later.",
  ],
  steps: [
    {
      title: "Close obvious tabs you are finished with",
      body: [
        "Start with old search results, duplicate pages, and tabs you know you no longer need.",
      ],
    },
    {
      title: "Bookmark or save pages you want to revisit",
      body: [
        "If you are afraid of losing something important, save it before closing more tabs.",
      ],
    },
    {
      title: "Use the browser tab search or recent tabs view",
      body: [
        "Most browsers let you search open tabs so you can find one specific page quickly.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for browser tabs screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Restart the browser once things are manageable",
      body: [
        "A fresh restart can help the browser feel lighter after cleanup.",
      ],
    },
  ],
  tips: [
    "Keeping a few bookmarks is easier than leaving dozens of tabs open for later.",
  ],
  warnings: [
    "If you are filling out an important form, do not close that tab until you know it is saved or submitted.",
  ],
  fallback: {
    title: "If this did not work",
    body: "The browser may be slow for other reasons, or you may need a better way to save pages for later.",
    actions: [
      "Move important pages into bookmarks or a reading list.",
      "Close and reopen the browser fully.",
      "Restart the device if the browser is still sluggish.",
    ],
  },
  relatedGuides: ["find-downloaded-files", "reconnect-to-wi-fi"],
  featured: true,
  commonFix: true,
  emergencyRelevant: false,
  searchAliases: ["too many tabs", "browser clutter", "too many windows"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for browser tabs guide image",
      aspect: "wide",
    },
  },
};
