import type { Guide } from "@/types/content";

export const clearPhoneStorage: Guide = {
  title: "My phone says storage is full",
  slug: "clear-phone-storage",
  category: "phone-problems",
  summary:
    "Free space in a careful order so the phone becomes usable again without deleting the wrong things.",
  whatThisFixes: [
    "You cannot take new photos.",
    "App updates fail because there is no space left.",
    "The phone feels crowded or sluggish because storage is full.",
  ],
  symptoms: [
    "You see a storage full message.",
    "Photos or downloads fail to save.",
    "The phone may feel unusually slow.",
  ],
  difficulty: "Medium",
  estimatedTimeMinutes: 12,
  urgency: "Soon",
  beforeYouStart: [
    "Do not delete anything you do not recognize right away.",
    "If possible, make sure important photos or files are backed up first.",
  ],
  steps: [
    {
      title: "Open the phone’s storage settings",
      body: [
        "Start with the storage summary so you can see what is taking up the most space.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for phone storage settings screenshot",
        aspect: "portrait",
      },
    },
    {
      title: "Look for large, safe-to-remove items first",
      body: [
        "Downloads, duplicate videos, and old offline files are usually safer to remove than app data.",
      ],
    },
    {
      title: "Clear old downloads and obvious one-time files",
      body: [
        "Remove installers, duplicate images, and files you know you no longer need.",
      ],
    },
    {
      title: "Review photos and videos carefully",
      body: [
        "These often take the most space. Delete only what you are sure you do not need, or move them to a safer backup first.",
      ],
    },
  ],
  tips: [
    "Start with the largest items you clearly recognize.",
  ],
  warnings: [
    "Avoid deleting app data, contacts, or messages unless you understand exactly what will be removed.",
  ],
  fallback: {
    title: "If this did not work",
    body: "The phone may need larger cleanup, offloading to cloud storage, or help identifying what is taking space.",
    actions: [
      "Move photos or videos to a computer or trusted cloud storage.",
      "Check which apps are using unusual amounts of space.",
      "Ask for help before deleting anything important.",
    ],
  },
  relatedGuides: ["find-downloaded-files", "manage-too-many-browser-tabs"],
  featured: true,
  commonFix: true,
  emergencyRelevant: false,
  searchAliases: ["phone storage full", "free up storage", "cannot take photos", "storage warning"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for phone storage guide image",
      aspect: "wide",
    },
  },
};
