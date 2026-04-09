import type { FaqItem } from "@/types/content";

export const faqItems: FaqItem[] = [
  {
    question: "What if I do not know what this problem is called?",
    answer:
      "Start with the symptom instead of the technical term. Search phrases like “wifi says connected” or “I forgot my password.” The site is designed to work that way on purpose.",
    relatedGuideSlugs: ["reconnect-to-wi-fi", "reset-a-forgotten-password"],
  },
  {
    question: "How do I know when to use the Emergency page?",
    answer:
      "Use Emergency when the problem involves scams, suspicious pop-ups, account lockouts, payment information, or anything that feels urgent and risky.",
    relatedGuideSlugs: ["identify-a-suspicious-pop-up", "reset-a-forgotten-password"],
  },
  {
    question: "Why are some images bright red?",
    answer:
      "The red blocks are intentional placeholders. They mark where screenshots or illustrations will go later without pretending the page is finished.",
    relatedGuideSlugs: [],
  },
  {
    question: "Can I browse by category instead of searching?",
    answer:
      "Yes. The Docs hub includes stable categories like Wi-Fi, Passwords, Files, Email, and Printing. That keeps the site curated instead of feeling like a blog archive.",
    relatedGuideSlugs: ["find-downloaded-files", "fix-a-printer-that-is-offline"],
  },
  {
    question: "What should I do if a fix does not work?",
    answer:
      "Use the “If this didn’t work” section at the end of the guide. It points you to the next safest step, a related guide, or the help route.",
    relatedGuideSlugs: ["reconnect-to-wi-fi", "clear-phone-storage"],
  },
];
