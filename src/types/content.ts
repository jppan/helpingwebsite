export type Difficulty = "Easy" | "Medium" | "Hard";
export type Urgency = "Normal" | "Soon" | "Urgent";

export type PlaceholderAspect = "wide" | "landscape" | "portrait" | "square";

export type MediaAsset =
  | {
      mode: "placeholder";
      label: string;
      alt: string;
      aspect?: PlaceholderAspect;
    }
  | {
      mode: "image";
      label?: string;
      alt: string;
      src: string;
      aspect?: PlaceholderAspect;
    };

export type CalloutTone = "tip" | "warning" | "good-to-know" | "stop" | "next";

export type GuideCallout = {
  tone: CalloutTone;
  title: string;
  body: string;
};

export type GuideStep = {
  title: string;
  body: string[];
  image?: MediaAsset;
  callouts?: GuideCallout[];
};

export type GuideFallback = {
  title: string;
  body: string;
  actions: string[];
};

export type Category = {
  id: string;
  slug: string;
  label: string;
  shortDescription: string;
  icon: string;
  order: number;
  featured: boolean;
  emergencyRelevant: boolean;
  searchAliases: string[];
};

export type Guide = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  whatThisFixes: string[];
  symptoms: string[];
  difficulty: Difficulty;
  estimatedTimeMinutes: number;
  urgency: Urgency;
  beforeYouStart: string[];
  steps: GuideStep[];
  tips: string[];
  warnings: string[];
  fallback: GuideFallback;
  relatedGuides: string[];
  featured: boolean;
  commonFix: boolean;
  emergencyRelevant: boolean;
  searchAliases: string[];
  media?: {
    heroImage?: MediaAsset;
  };
};

export type EmergencyItem = {
  title: string;
  slug: string;
  summary: string;
  severity: "High" | "Critical";
  immediateActions: string[];
  doNotDo: string[];
  nextGuideSlugs: string[];
  contactRecommended: boolean;
  image: MediaAsset;
};

export type CommonFix = {
  slug: string;
  title: string;
  summary: string;
  linkedGuideSlug: string;
  category: string;
  priority: number;
  symptomPhrases: string[];
  estimatedTimeMinutes: number;
};

export type RicoProfile = {
  name: string;
  role: string;
  shortBio: string;
  longBio: string[];
  values: string[];
  portrait: MediaAsset;
};

export type FaqItem = {
  question: string;
  answer: string;
  relatedGuideSlugs: string[];
};

export type GlossaryTerm = {
  term: string;
  slug: string;
  plainDefinition: string;
  relatedGuideSlugs: string[];
};

export type SearchItem = {
  slug: string;
  href: string;
  title: string;
  summary: string;
  category: string;
  aliases: string[];
  searchContext: string[];
  kind: "guide" | "fix" | "emergency";
  priority: number;
};
