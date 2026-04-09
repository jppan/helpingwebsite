import type { EmergencyItem } from "@/types/content";

export const emergencyItems: EmergencyItem[] = [
  {
    title: "I clicked something suspicious",
    slug: "clicked-something-suspicious",
    summary: "Start here if a message, site, email, or pop-up tricked you into clicking.",
    severity: "High",
    immediateActions: [
      "Stop entering passwords or payment details.",
      "Close the tab or app if you still can.",
      "Disconnect from Wi-Fi if the device starts behaving strangely.",
    ],
    doNotDo: [
      "Do not call phone numbers shown in pop-ups.",
      "Do not install random cleanup tools.",
    ],
    nextGuideSlugs: ["identify-a-suspicious-pop-up", "reset-a-forgotten-password"],
    contactRecommended: true,
    image: {
      mode: "placeholder",
      label: "BRIGHT RED EMERGENCY IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for emergency illustration",
      aspect: "wide",
    },
  },
  {
    title: "A pop-up says my device is infected",
    slug: "device-infected-pop-up",
    summary: "Treat it like a scam warning first, not like proof of a real infection.",
    severity: "Critical",
    immediateActions: [
      "Do not click inside the pop-up.",
      "Close the browser tab or app.",
      "If the screen is frozen, force-close the browser only.",
    ],
    doNotDo: [
      "Do not pay anything.",
      "Do not give remote access to anyone.",
    ],
    nextGuideSlugs: ["identify-a-suspicious-pop-up"],
    contactRecommended: true,
    image: {
      mode: "placeholder",
      label: "BRIGHT RED EMERGENCY IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for emergency pop-up warning image",
      aspect: "wide",
    },
  },
  {
    title: "I am locked out of an account",
    slug: "locked-out-of-account",
    summary: "Start recovery carefully before trying too many guesses.",
    severity: "High",
    immediateActions: [
      "Stop repeated sign-in attempts.",
      "Use the official recovery option only.",
      "Check whether you still have access to the recovery email or phone.",
    ],
    doNotDo: [
      "Do not trust recovery links from random messages.",
      "Do not keep guessing until the account locks harder.",
    ],
    nextGuideSlugs: ["reset-a-forgotten-password"],
    contactRecommended: true,
    image: {
      mode: "placeholder",
      label: "BRIGHT RED EMERGENCY IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for account lockout emergency image",
      aspect: "wide",
    },
  },
];
