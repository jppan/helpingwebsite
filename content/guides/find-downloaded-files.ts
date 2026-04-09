import type { Guide } from "@/types/content";

export const findDownloadedFiles: Guide = {
  title: "I downloaded something but cannot find it",
  slug: "find-downloaded-files",
  category: "files-storage",
  summary:
    "Track down missing downloads using the places browsers and devices usually store them.",
  whatThisFixes: [
    "A file finished downloading but you do not know where it went.",
    "You need a document, photo, or installer you just downloaded.",
  ],
  symptoms: [
    "The browser says the download finished.",
    "The file is not on the desktop.",
    "You are not sure which folder to check next.",
  ],
  difficulty: "Easy",
  estimatedTimeMinutes: 6,
  urgency: "Normal",
  beforeYouStart: [
    "Remember which browser or app you used to download the file.",
    "If you know the file name, keep it handy for search.",
  ],
  steps: [
    {
      title: "Check the Downloads folder first",
      body: [
        "Most devices and browsers put downloaded files in a folder called Downloads unless you changed the setting.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for Downloads folder screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Open the browser’s downloads list",
      body: [
        "Most browsers have a download list or arrow icon that lets you reopen a recent file or show it in its folder.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for browser downloads panel screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Search for the file name or file type",
      body: [
        "If you remember part of the name, search for it. If not, try the file type, like PDF, JPG, or DOCX.",
      ],
    },
    {
      title: "Check recent files in the app you plan to use",
      body: [
        "If this is a document, image, or spreadsheet, the app itself may show it in a recent files list.",
      ],
    },
  ],
  tips: [
    "After you find the file, move it somewhere easier to remember if you will need it again soon.",
  ],
  warnings: [
    "Be careful opening unknown downloaded files if they came from a suspicious website or message.",
  ],
  fallback: {
    title: "If this did not work",
    body: "The file may not have downloaded completely, or it may have gone to a cloud folder or custom location.",
    actions: [
      "Check whether the download failed or was blocked by the browser.",
      "Search cloud storage folders if you use them.",
      "Download the file again from the original trusted source.",
    ],
  },
  relatedGuides: ["attach-a-file-to-an-email", "clear-phone-storage"],
  featured: true,
  commonFix: true,
  emergencyRelevant: false,
  searchAliases: ["find download", "where did my file go", "missing file", "download folder"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for downloaded files guide image",
      aspect: "wide",
    },
  },
};
