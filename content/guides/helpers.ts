import type { MediaAsset, PlaceholderAspect } from "@/types/content";

export function guideHeroPlaceholder(subject: string): MediaAsset {
  return {
    mode: "placeholder",
    label: "BRIGHT RED GUIDE IMAGE PLACEHOLDER",
    alt: `Bright red placeholder for ${subject}`,
    aspect: "wide",
  };
}

export function screenshotPlaceholder(
  subject: string,
  aspect: PlaceholderAspect = "landscape"
): MediaAsset {
  return {
    mode: "placeholder",
    label: "BRIGHT RED SCREENSHOT PLACEHOLDER",
    alt: `Bright red placeholder for ${subject}`,
    aspect,
  };
}
