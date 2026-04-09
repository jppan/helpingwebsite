import { categories } from "@/content/categories";
import { commonFixes } from "@/content/common-fixes";
import { emergencyItems } from "@/content/emergency";
import { faqItems } from "@/content/faq";
import { glossaryTerms } from "@/content/glossary";
import { guides } from "@/content/guides";
import { ricoProfile } from "@/content/profile";
import { docsHubPriorityGuideSlugs, homepageFeaturedGuideSlugs } from "@/data/featured-guides";
import type { Category, CommonFix, EmergencyItem, FaqItem, GlossaryTerm, Guide, SearchItem } from "@/types/content";

export function getCategories() {
  return [...categories].sort((left, right) => left.order - right.order);
}

export function getGuides() {
  return [...guides];
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(categoryId: string) {
  return guides.filter((guide) => guide.category === categoryId);
}

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryRoute(slug: string) {
  return `/manual/category/${slug}`;
}

export function getHomepageFeaturedGuides() {
  return homepageFeaturedGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean) as Guide[];
}

export function getDocsHubPriorityGuides() {
  return docsHubPriorityGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean) as Guide[];
}

export function getCommonFixes() {
  return [...commonFixes].sort((left, right) => left.priority - right.priority);
}

export function getEmergencyItems() {
  return [...emergencyItems];
}

export function getRelatedGuides(guide: Guide) {
  return guide.relatedGuides
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean) as Guide[];
}

export function getRicoProfile() {
  return ricoProfile;
}

export function getFaqItems() {
  return [...faqItems];
}

export function getGlossaryTerms() {
  return [...glossaryTerms].sort((left, right) => left.term.localeCompare(right.term));
}

export function getGlossaryTermBySlug(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getSearchItems(): SearchItem[] {
  const guideItems = guides.map((guide) => ({
    slug: guide.slug,
    href: `/manual/${guide.slug}`,
    title: guide.title,
    summary: guide.summary,
    category: getCategoryById(guide.category)?.label ?? guide.category,
    aliases: [...guide.searchAliases, ...guide.symptoms],
    kind: "guide" as const,
    priority: guide.emergencyRelevant ? 3 : guide.commonFix ? 2 : 1,
  }));

  const commonFixItems = commonFixes.map((fix) => ({
    slug: fix.slug,
    href: `/manual/${fix.linkedGuideSlug}`,
    title: fix.title,
    summary: fix.summary,
    category: getCategoryById(fix.category)?.label ?? fix.category,
    aliases: fix.symptomPhrases,
    kind: "fix" as const,
    priority: 4,
  }));

  const emergencySearchItems = emergencyItems.map((item) => ({
    slug: item.slug,
    href: `/emergency#${item.slug}`,
    title: item.title,
    summary: item.summary,
    category: "Emergency",
    aliases: item.immediateActions,
    kind: "emergency" as const,
    priority: 5,
  }));

  return [...emergencySearchItems, ...commonFixItems, ...guideItems];
}

export function getHighPriorityGuides() {
  return guides
    .filter((guide) => guide.emergencyRelevant || guide.commonFix || guide.featured)
    .sort((left, right) => right.estimatedTimeMinutes - left.estimatedTimeMinutes);
}

export function getHomepageProblemShortcuts() {
  return getCommonFixes().slice(0, 6);
}

export function getSymptomGroups() {
  return [
    "Cannot sign in",
    "Nothing loads",
    "Storage full",
    "Too many tabs",
    "Cannot print",
    "Scary pop-up",
  ];
}

export type ContentCollection = {
  categories: Category[];
  guides: Guide[];
  commonFixes: CommonFix[];
  emergencyItems: EmergencyItem[];
  faqItems?: FaqItem[];
  glossaryTerms?: GlossaryTerm[];
};
