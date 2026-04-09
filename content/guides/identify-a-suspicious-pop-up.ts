import type { Guide } from "@/types/content";

export const identifyASuspiciousPopUp: Guide = {
  title: "This pop-up looks suspicious",
  slug: "identify-a-suspicious-pop-up",
  category: "safety-scams",
  summary:
    "Spot the warning signs of a scam pop-up and take the safest next step without feeding it more information.",
  whatThisFixes: [
    "A scary pop-up claims the device is infected or broken.",
    "You are not sure whether a warning message is real.",
    "A page is pushing you to call, pay, or install something immediately.",
  ],
  symptoms: [
    "The message uses urgent fear-heavy language.",
    "It wants you to call a number or install a cleanup tool.",
    "It appears inside the browser rather than as a normal device setting.",
  ],
  difficulty: "Easy",
  estimatedTimeMinutes: 7,
  urgency: "Urgent",
  beforeYouStart: [
    "Do not click inside the pop-up.",
    "Do not call the number shown in the warning.",
  ],
  steps: [
    {
      title: "Pause and treat it as suspicious first",
      body: [
        "A real problem can be checked calmly. A scam tries to rush you.",
      ],
      callouts: [
        {
          tone: "stop",
          title: "Stop here and get help",
          body: "If you already entered payment details or a password, move to Emergency right away.",
        },
      ],
    },
    {
      title: "Close the browser tab or app without interacting with the message",
      body: [
        "Use the normal close controls. If the browser freezes, force-close the browser only.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for suspicious pop-up screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Look for the classic scam signs",
      body: [
        "Pop-ups that demand urgent payment, remote access, or phone calls are usually trying to scare you into acting too fast.",
      ],
    },
    {
      title: "If you clicked or entered information, secure the account next",
      body: [
        "Move on to password reset or emergency recovery steps instead of returning to the pop-up.",
      ],
    },
  ],
  tips: [
    "Real device alerts usually appear through the operating system or security app, not a random webpage screaming at you.",
  ],
  warnings: [
    "Do not install software from a warning page just because it sounds urgent.",
  ],
  fallback: {
    title: "If this did not work",
    body: "If the warning keeps returning or you already interacted with it, treat the situation as urgent.",
    actions: [
      "Move to the Emergency page for urgent routing.",
      "Change passwords for any account you touched during the scare.",
      "Ask for help if payment or personal details were shared.",
    ],
  },
  relatedGuides: ["reset-a-forgotten-password", "reconnect-to-wi-fi"],
  featured: true,
  commonFix: false,
  emergencyRelevant: true,
  searchAliases: ["suspicious pop-up", "virus pop-up", "scary warning", "fake alert"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for suspicious pop-up guide image",
      aspect: "wide",
    },
  },
};
