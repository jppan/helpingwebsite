import type { GlossaryTerm } from "@/types/content";

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Browser",
    slug: "browser",
    plainDefinition:
      "A browser is the app you use to open websites, such as Chrome, Firefox, Safari, or Edge.",
    relatedGuideSlugs: ["manage-too-many-browser-tabs", "identify-a-suspicious-pop-up"],
  },
  {
    term: "Downloads Folder",
    slug: "downloads-folder",
    plainDefinition:
      "The Downloads folder is the place where many devices and browsers store files you saved from the internet.",
    relatedGuideSlugs: ["find-downloaded-files", "attach-a-file-to-an-email"],
  },
  {
    term: "Password Reset",
    slug: "password-reset",
    plainDefinition:
      "A password reset is the official recovery process a service uses when you cannot sign in with your current password.",
    relatedGuideSlugs: ["reset-a-forgotten-password"],
  },
  {
    term: "Pop-up",
    slug: "pop-up",
    plainDefinition:
      "A pop-up is a box or message that appears over a webpage or app. Some are normal. Some are scams designed to scare you into clicking.",
    relatedGuideSlugs: ["identify-a-suspicious-pop-up"],
  },
  {
    term: "Storage",
    slug: "storage",
    plainDefinition:
      "Storage is the space on a phone, tablet, or computer where apps, photos, files, and downloads are kept.",
    relatedGuideSlugs: ["clear-phone-storage", "find-downloaded-files"],
  },
  {
    term: "Wi-Fi",
    slug: "wi-fi",
    plainDefinition:
      "Wi-Fi is the wireless connection your device uses to reach your home or work network and, through it, the internet.",
    relatedGuideSlugs: ["reconnect-to-wi-fi", "fix-a-printer-that-is-offline"],
  },
];
