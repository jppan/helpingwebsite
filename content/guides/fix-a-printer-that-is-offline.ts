import type { Guide } from "@/types/content";

export const fixAPrinterThatIsOffline: Guide = {
  title: "My printer says offline",
  slug: "fix-a-printer-that-is-offline",
  category: "printing",
  summary:
    "Check the printer, the connection, and the print queue in a calm order before trying bigger changes.",
  whatThisFixes: [
    "The printer appears but refuses to print.",
    "The print queue is stuck.",
    "A document will not leave the computer or phone.",
  ],
  symptoms: [
    "The printer is marked offline.",
    "Print jobs stay queued.",
    "Nothing happens after you press print.",
  ],
  difficulty: "Medium",
  estimatedTimeMinutes: 10,
  urgency: "Soon",
  beforeYouStart: [
    "Make sure the printer has power.",
    "Check that paper and ink are not obviously missing.",
    "If it is a Wi-Fi printer, confirm the network is working first.",
  ],
  steps: [
    {
      title: "Check the printer itself first",
      body: [
        "Look for power, warning lights, and obvious cable or Wi-Fi issues before changing anything on the computer.",
      ],
    },
    {
      title: "Cancel stuck print jobs",
      body: [
        "Open the print queue and clear jobs that are frozen or waiting forever.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for print queue screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Restart the printer",
      body: [
        "Turn it off, wait a moment, and turn it back on.",
      ],
    },
    {
      title: "Restart the computer or phone if the queue still looks stuck",
      body: [
        "This can clear old connection states between the device and the printer.",
      ],
    },
    {
      title: "Choose the correct printer again before printing",
      body: [
        "If there are multiple printers listed, make sure the right one is selected.",
      ],
    },
  ],
  tips: [
    "Printer problems are often a connection problem first, not a document problem.",
  ],
  warnings: [
    "Do not remove printer software or reset the printer until the basic checks are done.",
  ],
  fallback: {
    title: "If this did not work",
    body: "The printer may need to be reconnected or re-added, especially after network changes.",
    actions: [
      "Try removing and re-adding the printer.",
      "Check the Wi-Fi or cable connection again.",
      "Use emergency printing guidance if the job is urgent.",
    ],
  },
  relatedGuides: ["reconnect-to-wi-fi", "attach-a-file-to-an-email"],
  featured: true,
  commonFix: true,
  emergencyRelevant: true,
  searchAliases: ["printer offline", "cannot print", "print queue stuck"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for printer guide image",
      aspect: "wide",
    },
  },
};
