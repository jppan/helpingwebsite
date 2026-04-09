import type { Guide } from "@/types/content";

export const resetAForgottenPassword: Guide = {
  title: "I forgot my password",
  slug: "reset-a-forgotten-password",
  category: "accounts-passwords",
  summary:
    "Reset a password safely, find the official recovery flow, and avoid fake reset messages.",
  whatThisFixes: [
    "You cannot sign in because the password is wrong.",
    "You are no longer sure which password is current.",
    "You need to recover an account without making things worse.",
  ],
  symptoms: [
    "The sign-in page keeps rejecting your password.",
    "You are seeing password reset prompts.",
    "You cannot remember whether you changed the password recently.",
  ],
  difficulty: "Easy",
  estimatedTimeMinutes: 10,
  urgency: "Soon",
  beforeYouStart: [
    "Make sure you are on the official sign-in page for the service.",
    "Know which email address or phone number is tied to the account.",
    "Keep a safe place ready to store the new password.",
  ],
  steps: [
    {
      title: "Go to the normal sign-in page first",
      body: [
        "Do not start from a message or a random link. Open the service directly in your browser or app and then look for the normal sign-in screen.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for official sign-in page screenshot",
        aspect: "landscape",
      },
    },
    {
      title: "Choose the official password recovery option",
      body: [
        "Look for wording like “Forgot password” or “Need help signing in.” Use that option instead of guessing over and over.",
      ],
      callouts: [
        {
          tone: "good-to-know",
          title: "Why this matters",
          body: "Too many wrong attempts can lock the account longer.",
        },
      ],
    },
    {
      title: "Confirm the email, username, or phone number linked to the account",
      body: [
        "Enter the account information carefully so the reset instructions go to the right place.",
      ],
    },
    {
      title: "Check for the reset message and open it carefully",
      body: [
        "Look in your inbox, spam folder, or text messages. Make sure the sender matches the real service before you continue.",
      ],
      image: {
        mode: "placeholder",
        label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
        alt: "Bright red placeholder for password reset message screenshot",
        aspect: "landscape",
      },
      callouts: [
        {
          tone: "warning",
          title: "Be careful",
          body: "If the message looks unusual or urgent in a strange way, stop and verify the service directly.",
        },
      ],
    },
    {
      title: "Create a new password and save it somewhere safe",
      body: [
        "Pick a new password you can store safely. If you use a password manager, save it immediately before leaving the page.",
      ],
    },
  ],
  tips: [
    "If the service offers two-step verification, consider enabling it after you get back in.",
  ],
  warnings: [
    "Do not trust password reset links from unsolicited messages that claim something is wrong with your account.",
  ],
  fallback: {
    title: "If this did not work",
    body: "You may not have access to the recovery email or phone anymore, or the service may be delaying recovery messages.",
    actions: [
      "Check spam or junk mail one more time.",
      "Try the official account recovery page again from the service home page.",
      "Use the service’s help or recovery support if you lost access to the recovery method.",
    ],
  },
  relatedGuides: ["identify-a-suspicious-pop-up", "attach-a-file-to-an-email"],
  featured: true,
  commonFix: true,
  emergencyRelevant: true,
  searchAliases: ["forgot password", "password reset", "cannot sign in", "locked out"],
  media: {
    heroImage: {
      mode: "placeholder",
      label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
      alt: "Bright red placeholder for password reset guide image",
      aspect: "wide",
    },
  },
};
