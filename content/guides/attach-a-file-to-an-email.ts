import type { Guide } from "@/types/content";

export const attachAFileToAnEmail: Guide = {
  title: "How to attach a file to an email",
  slug: "attach-a-file-to-an-email",
  category: "email",
  summary:
    "Attach a document or image to an email without getting lost between the message and the file picker.",
  whatThisFixes: [
    "You need to send a file by email.",
    "You are not sure where the attachment button is.",
  ],
  symptoms: [
    "The message is open but the file is not attached.",
    "You cannot tell whether the attachment worked.",
  ],
  difficulty: "Easy",
  estimatedTimeMinutes: 6,
  urgency: "Normal",
  beforeYouStart: [
    "Know where the file is stored if possible.",
    "Make sure the file is not too large for normal email attachments.",
  ],
  steps: [
    {
      title: "Open a new email or reply where you want to send the file",
      body: [
        "Start the message first so you know exactly where the file needs to go.",
      ],
    },
    {
      title: "Choose the attachment button",
      body: [
        "Look for a paperclip icon or the word “Attach.”",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for attach button screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Find and select the file",
      body: [
        "Use the file picker to choose the document, image, or PDF. If needed, check the Downloads folder first.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for file picker screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Wait until the file appears in the message before sending",
      body: [
        "The file usually shows up below the subject line or near the message body once it has attached properly.",
      ],
    },
  ],
  tips: [
    "If the file is very large, a cloud share link may work better than a normal attachment.",
  ],
  warnings: [
    "Double-check the file before sending if it contains personal or sensitive information.",
  ],
  fallback: {
    title: "If this did not work",
    body: "The file may be too large, too hard to find, or the mail app may be stuck.",
    actions: [
      "Try finding the file again in your Downloads folder.",
      "Use a share link if the file is too large.",
      "Restart the mail app and try again.",
    ],
  },
  relatedGuides: ["find-downloaded-files", "reset-a-forgotten-password"],
  featured: false,
  commonFix: false,
  emergencyRelevant: false,
  searchAliases: ["attach file", "send file by email", "email attachment"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for email attachment guide image",
      aspect: "wide",
    },
  },
};
