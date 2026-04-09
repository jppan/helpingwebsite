import type { Guide } from "@/types/content";

export const reconnectToWiFi: Guide = {
  title: "Wi-Fi says connected but nothing loads",
  slug: "reconnect-to-wi-fi",
  category: "wifi-internet",
  summary:
    "Work through the fastest connection checks first when your device says it is online but websites and apps still do not load.",
  whatThisFixes: [
    "Wi-Fi looks connected but pages do not open.",
    "Apps act like there is no internet.",
  ],
  symptoms: [
    "The Wi-Fi icon is visible.",
    "Pages spin or time out.",
    "Messages and apps fail to connect.",
  ],
  difficulty: "Easy",
  estimatedTimeMinutes: 8,
  urgency: "Soon",
  beforeYouStart: [
    "Make sure airplane mode is off.",
    "If possible, check whether another device can get online.",
    "Stay near the router while you test.",
  ],
  steps: [
    {
      title: "Turn Wi-Fi off, wait a few seconds, then turn it back on",
      body: [
        "This clears small connection glitches without changing your saved network settings.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for Wi-Fi settings screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Forget the network and reconnect",
      body: [
        "Choose the network again and re-enter the password carefully if you know it.",
      ],
    },
    {
      title: "Restart the device",
      body: [
        "A simple restart can clear a stuck network state on phones, tablets, and laptops.",
      ],
    },
    {
      title: "Restart the router once",
      body: [
        "If multiple devices have the same problem, unplug the router, wait about 20 seconds, and plug it back in.",
      ],
      callouts: [
        {
          tone: "warning",
          title: "Do not reset the router",
          body: "A restart is not the same as a factory reset. Do not press any reset pin or reset button.",
        },
      ],
    },
  ],
  tips: [
    "If one website is broken but others work, the internet may not be the real problem.",
  ],
  warnings: [
    "Do not keep changing random router settings while you are only trying to restore a connection.",
  ],
  fallback: {
    title: "If this did not work",
    body: "The issue may be with the router, the internet provider, or a device-specific network setting.",
    actions: [
      "Check whether your provider reports an outage.",
      "Try another guide for Wi-Fi password problems or a router restart.",
      "Ask for help if the connection is still down on every device.",
    ],
  },
  relatedGuides: ["fix-a-printer-that-is-offline", "identify-a-suspicious-pop-up"],
  featured: true,
  commonFix: true,
  emergencyRelevant: true,
  searchAliases: ["wifi connected no internet", "connected but nothing loads", "internet not working"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for Wi-Fi guide image",
      aspect: "wide",
    },
  },
};
